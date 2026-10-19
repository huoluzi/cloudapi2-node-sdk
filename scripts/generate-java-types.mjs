import {readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {JAVA_BEANS,JAVA_ENUMS,DTO_SCHEMA} from '../dist/dto-schema.js';
import {JAVA_CONTRACT} from '../dist/java-contract.js';
import {sdk,split} from './cpp-schema.mjs';
import {scanCallbacks} from './java-scan.mjs';
const root=join(sdk,'platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk');
const inventory=JSON.parse(readFileSync('audit/java-api-inventory.json','utf8'));
const callbacks=Object.fromEntries(inventory.callbacks.map(c=>[c.name,c]));
for(const name of Object.keys(JAVA_CONTRACT)){const javaName=name==='AIAlertModule'?'AiAlertModule':name;for(const c of scanCallbacks(readFileSync(join(root,'core',javaName+'.java'),'utf8')))callbacks[c.name]=c;}
const names=new Set([...Object.keys(JAVA_BEANS),...Object.keys(JAVA_ENUMS),...Object.keys(JAVA_CONTRACT),...Object.keys(callbacks)]),missing=new Set();
function type(raw){
 const t=raw.replace(/(?:com\.dji\.flighthubsdk\.(?:bean|value|generated|core)|java\.util|FlightHubCallback)\./g,'').replace(/\s+/g,' ').trim();
 if(t==='void')return 'void';if(t==='String')return 'string';if(/^(?:boolean|Boolean)$/.test(t))return 'boolean';if(/^(?:long|Long)$/.test(t))return 'bigint | number';if(/^(?:int|Integer|short|Short|byte|Byte|double|Double|float|Float)$/.test(t))return 'number';
 if(t==='byte[]')return 'Uint8Array';if(t.endsWith('[]'))return `(${type(t.slice(0,-2))})[]`;
 if(/^(?:List|Collection|ArrayList)</.test(t))return `(${type(t.slice(t.indexOf('<')+1,-1))})[]`;
 if(/^Map</.test(t))return `Record<string, ${type(split(t.slice(4,-1))[1])}>`;
 if(t==='FlightHubSdkErrorCode')return 'number';if(t==='CustomSEIDecodeResult')return '{header: SeiHeader; seiData: SeiItem[]} | null';
 if(t==='IFlightTaskControlModule')return 'FlightTaskControlModule';
 if(t==='AiAlertModule')return 'AIAlertModule';
 if(t==='CreateReconstructionJavaParams')return 'TerraBuildCreateReconstructionParams';
 if(names.has(t))return t;
 if(DTO_SCHEMA[t])return 'Native.'+t;
 missing.add(t);return 'unknown';
}
const declarations=['import type * as Native from "./generated.js";'];
for(const [name,e]of Object.entries(JAVA_ENUMS))declarations.push(`export const ${name} = ${JSON.stringify(e.values)} as const;\nexport type ${name} = number;`);
for(const [name,fields]of Object.entries(JAVA_BEANS))declarations.push(`export interface ${name} {\n${Object.entries(fields).map(([k,t])=>`  ${k}?: ${type(t)};`).join('\n')}\n}`);
for(const [name,c]of Object.entries(callbacks)){if(names.has(name)&&name in JAVA_BEANS)throw Error(name);const params=split(c.parameters||'').map((p,i)=>{const pos=p.lastIndexOf(' ');return `arg${i}: ${type(p.slice(0,pos))}`;});declarations.push(`export type ${name} = (${params.join(', ')}) => void;`);}
for(const [name,methods]of Object.entries(JAVA_CONTRACT))declarations.push(`export interface ${name} {\n${methods.map(m=>`  ${m.name}(${m.params.map((p,i)=>`arg${i}: ${type(p.type)}`).join(', ')}): ${type(m.returnType)}${/^get/.test(m.name)&&m.cppReturn?.startsWith('std::shared_ptr')?' | null':''};`).join('\n')}\n}`);
writeFileSync('src/java-types.ts','// Generated from public Java methods, callbacks, Beans, and enums.\n'+declarations.join('\n')+'\n');
console.log(JSON.stringify({missingTypes:[...missing],interfaces:Object.keys(JAVA_CONTRACT).length,callbacks:Object.keys(callbacks).length}));
if(missing.size)process.exitCode=1;
