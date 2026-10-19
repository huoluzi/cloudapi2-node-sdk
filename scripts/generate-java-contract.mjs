import {readFileSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {sdk,split} from './cpp-schema.mjs';
const inventory=JSON.parse(readFileSync('audit/java-api-inventory.json','utf8'));
const generated=JSON.parse(readFileSync('audit/generated-modules.json','utf8'));
const parameters=s=>split(s).map(p=>{const at=p.lastIndexOf(' ');return {type:p.slice(0,at),name:p.slice(at+1)};});
const grouped={},missing=[];
for(const method of inventory.methods){
 if(method.owner==='FlightHubSDK')continue;
 const javaType=method.owner.slice(5),mod=generated.modules.find(m=>m.name.toLowerCase()===javaType.toLowerCase());
 if(!mod)throw Error('Missing module '+javaType);
 const params=parameters(method.parameters);
 let candidates=mod.methods.filter(m=>m.name.toLowerCase()===method.name.toLowerCase()||(mod.name==='PsdkControlModule'&&m.name.toLowerCase()==='drc'+method.name.toLowerCase()));
 if(candidates.length>1){candidates=candidates.filter(m=>/^java.util.List|^List</.test(params[0]?.type||'')===m.args[0].type.startsWith('std::vector<'));}
 let cpp=candidates[0];
 const special=['destroy','getModule'].includes(method.name);
 if(!cpp&&!special)missing.push(method.declaration);
 (grouped[mod.name]??=[]).push({name:method.name,params,returnType:method.returnType,cpp:cpp?.name||method.name,cppArgs:cpp?.args||[],cppCallback:cpp?.cb,cppReturn:cpp?.ret,special,source:method.source,line:method.line});
}
if(missing.length)throw Error('Missing Java mappings: '+JSON.stringify(missing));
writeFileSync('src/java-contract.ts','// Generated exact public Java signatures and native targets.\nexport const JAVA_CONTRACT: Record<string, readonly JavaMethod[]> = '+JSON.stringify(grouped,null,2)+';\nexport interface JavaMethod {name:string;params:{type:string;name:string}[];returnType:string;cpp:string;cppArgs:{type:string;name?:string;output?:boolean}[];cppCallback?:string[] | null;cppReturn?:string;special:boolean;source:string;line:number;}\n');
writeFileSync('audit/java-signature-map.json',JSON.stringify({baseline:inventory.baseline,mapped:inventory.methods.length,definition:'Explicit signature-to-native mapping; behavioral verification is recorded separately.',modules:grouped},null,2)+'\n');
console.log(JSON.stringify({javaSignatures:inventory.methods.length,mappedModuleSignatures:Object.values(grouped).flat().length,missing:missing.length}));
