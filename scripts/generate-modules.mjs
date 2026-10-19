import {writeFileSync,mkdirSync} from 'node:fs';
import {interfaces,structs,enums,primitives,needed,requireType,camel,split} from './cpp-schema.mjs';
const modules=[...interfaces.values()], shared=t=>/^std::shared_ptr<(.+)>$/.exec(t)?.[1];
for(const mod of modules)for(const m of mod.methods){for(const a of m.args)requireType(a.type);for(const t of m.cb||[])requireType(t);requireType(m.ret);}
const jsName=(type,field)=>type==='Device'&&field==='is_online'?'online':camel(field);
const declarations=[...needed].map(t=>`template<> struct Convert<${t}> { static napi_value to(napi_env,const ${t}&); static ${t} from(napi_env,napi_value); };`).join('\n');
const definitions=[...needed].map(t=>{
 const def=structs.get(t);
 return `napi_value Convert<${t}>::to(napi_env env,const ${t}& v) { auto out=Object(env);\n${def.fields.map(f=>`Put(env,out,"${jsName(t,f.name)}",Convert<${f.type}>::to(env,v.${f.name}));`).join('\n')}return out;}\n${t} Convert<${t}>::from(napi_env env,napi_value value) { Expect(env,value,napi_object); ${t} v${t==='SeiItem'?'(SeiData{})':'{}'};\n${def.fields.map(f=>`if(Has(env,value,"${jsName(t,f.name)}"))v.${f.name}=Convert<${f.type}>::from(env,Property(env,value,"${jsName(t,f.name)}"));`).join('\n')}return v;}`;
}).join('\n');
const cancelled=m=>m.startsWith('cancelListen')?'listen'+m.slice(12):/^un[Ss]ubscribe/.test(m)?'subscribe'+m.slice(11):null;
const cancellation=m=>m.startsWith('listen')?'cancelListen'+m.slice(6):m.startsWith('subscribe')?'unSubscribe'+m.slice(9):null;
const dispatch=modules.map(mod=>{
 const funcs=mod.methods.map(m=>{
  const overloaded=mod.methods.filter(other=>other.name===m.name).length>1;
  if(overloaded&&m.name!=='getMediaFilesDownloadURL')throw Error('Overload needs explicit discriminator: '+m.name);
  const match=overloaded?` && ${m.args[0].type.startsWith('std::vector<')?'':'!'}IsArray(env,Element(env,values,0))`:'';
  let body=`if(method=="${m.name}"${match}){ RequireLength(env,values,${m.args.filter(a=>!a.output).length+(m.cb?1:0)});\n`;
  let ix=0;const argExpr=m.args.map((a,i)=>{
   if(a.output){body+=`${a.type} arg${i}{};\n`;return `arg${i}`;}
   if(a.type.endsWith('*')){body+=`auto arg${i}=Convert<std::optional<${a.type.slice(0,-1)}>>::from(env,Element(env,values,${ix++}));\n`;return `arg${i}?&*arg${i}:nullptr`;}
   body+=`auto arg${i}=Convert<${a.type}>::from(env,Element(env,values,${ix++}));\n`;return `arg${i}`;
  });
  if(!m.cb){
   if(cancelled(m.name)){body+=`if(!CancelGenerated(module.get(),ScopedSubscription("${cancelled(m.name)}"${argExpr.length>1?','+argExpr.slice(0,-1).join(','):''}),${argExpr.at(-1)}))module->${m.name}(${argExpr.join(',')});return Undefined(env);}`;return body;}
   const call=`module->${m.name}(${argExpr.join(',')})`;
   if(shared(m.ret))body+=`return WrapGenerated(env,"${interfaces.get(shared(m.ret)).name}",${call});`;
   else if(m.name==='CustomSEIEncode')body+=`if(!${call})arg2.clear();return Convert<std::vector<int>>::to(env,arg2);`;
   else if(m.name==='CustomSEIDecode')body+=`if(!${call})return Null(env);auto out=Object(env);Put(env,out,"header",Convert<SeiHeader>::to(env,arg1));Put(env,out,"seiData",Convert<std::vector<SeiItem>>::to(env,arg2));return out;`;
   else if(m.ret==='void')body+=`${call};${m.name==='stop'?'StopGeneratedFor(module.get());':''}return Undefined(env);`;
   else body+=`return Convert<${m.ret}>::to(env,${call});`;
   return body+'}';
  }
  const persistent=m.name==='setErrorCallback',once=m.ret==='void'&&!persistent;
  if(persistent)body+=`CancelGenerated(module.get(),"setErrorCallback",0);`;
  body+=`auto cb=NewCallback(env,Element(env,values,${ix}),${once?'true':'false'});\n`;
  const lambda=m.cb[0]==='std::vector<uint8_t>'&&m.cb[1]==='FrameInfo'
    ? `[cb](const std::vector<uint8_t>& data,const FrameInfo& frame) { cb->sendFrame(data,frame,${mod.name==='LiveModule'?'true':'false'}); }`
    : `[cb](${m.cb.map((t,i)=>`${t} p${i}`).join(',')}) { cb->send([${m.cb.map((_,i)=>`p${i}`).join(',')}](napi_env e){return std::vector<napi_value>{${m.cb.map((t,i)=>`Convert<${t}>::to(e,p${i})`).join(',')}};}); }`;
  const call=`module->${m.name}(${[...argExpr,lambda].join(',')})`;
  body+='try { ';
  if(once)body+=call+'; return Undefined(env);';
  else if(persistent)body+=`${call};TrackGenerated(module.get(),"setErrorCallback",0,cb,[module]{module->setErrorCallback({});});return Undefined(env);`;
  else {const expected=cancellation(m.name),cancel=mod.methods.find(x=>x.name.toLowerCase()===expected?.toLowerCase());if(!cancel)throw Error('Missing cancel '+mod.name+'.'+m.name);const scope=cancel.args.slice(0,-1).map(a=>{const i=m.args.findIndex(x=>x.name===a.name);if(i<0)throw Error('Cancellation scope mismatch '+mod.name+'.'+m.name);return argExpr[i];});body+=`int id=${call}; TrackGenerated(module.get(),ScopedSubscription("${m.name}"${scope.length?','+scope.join(','):''}),id,cb,[module,id${scope.length?','+scope.join(','):''}]{module->${cancel.name}(${[...scope,'id'].join(',')});});return Js(env,id);`;}
  return body+' }catch(...){cb->stop();throw;} }';
 }).join('\n');
 return `if(type=="${mod.name}") { auto module=UnwrapGenerated<${mod.cppName}>(env,handle,type); ${funcs} }`;
}).join('\n');
mkdirSync('native/generated',{recursive:true});
writeFileSync('native/generated/includes.inc',modules.map(m=>`#include "${m.file}"`).join('\n')+'\n');
writeFileSync('native/generated/converters.inc','// Generated; do not edit.\n'+declarations+'\n'+definitions+'\n');
writeFileSync('native/generated/dispatch.inc','// Generated; do not edit.\n'+dispatch+'\n');
writeFileSync('native/generated/getters.inc',interfaces.get('IWorkspace').methods.map(m=>`if(type=="${interfaces.get(shared(m.ret)).name}")return WrapGenerated(env,type,ws->${m.name}());`).join('\n')+'\n');
writeFileSync('audit/generated-modules.json',JSON.stringify({modules,types:[...needed].map(t=>({name:t,...structs.get(t)}))},null,2)+'\n');
function tsType(t){
 if(t==='std::string')return 'string';if(t==='bool')return 'boolean';if(t==='void')return 'void';
 if(enums.has(t))return 'number';if(primitives.has(t))return /long|64_t|size_t/.test(t)?'bigint | number':'number';
 if(t==='std::vector<uint8_t>')return 'Uint8Array';
 if(t.startsWith('std::vector<'))return `(${tsType(t.slice(12,-1))})[]`;
 if(t.startsWith('std::optional<'))return `${tsType(t.slice(14,-1))} | null`;
 if(t.startsWith('std::map<')||t.startsWith('std::unordered_map<'))return `Record<string, ${tsType(split(t.slice(t.indexOf('<')+1,-1))[1])}>`;
 if(shared(t))return interfaces.get(shared(t)).name+' | null';if(t.endsWith('*'))return tsType(t.slice(0,-1))+' | null';return t;
}
const tsDefs=[...needed].map(t=>`export interface ${t} {\n${structs.get(t).fields.map(f=>`  ${jsName(t,f.name)}?: ${tsType(f.type)};`).join('\n')}\n}`).join('\n');
const overloads={MediaServiceModule:'  getMediaFilesList(flightId: string, startIndex: number, pageSize: number, fileTypes: string[], deviceSn: string, startCreateTime: bigint | number, endCreateTime: bigint | number, callback: (error: FlightHubError, result: GetMediaFilesListResults) => void): void;',TerraBuildModule:'  createPanorama(name: string, folderUuids: string[], wkt: string, isShownOnMap: boolean, callback: (error: FlightHubError, result: TerraBuildCreatePanoramaResult) => void): void;'};
const tsModules=modules.map(m=>`export interface ${m.name} {\n${m.methods.map(f=>`  ${f.name}(${[...f.args.filter(a=>!a.output).map((a,i)=>`arg${i}: ${tsType(a.type)}`),...(f.cb?[`callback: (${f.cb.map((t,i)=>`value${i}: ${tsType(t)}`).join(', ')}) => void`]:[])].join(', ')}): ${f.name==='CustomSEIEncode'?'number[]':f.name==='CustomSEIDecode'?'{header: SeiHeader; seiData: SeiItem[]} | null':tsType(f.ret)};`).join('\n')}\n${overloads[m.name]||''}\n}`).join('\n');
writeFileSync('src/generated.ts','// Generated C++ surface. Java adapters are layered separately.\n'+tsDefs+'\n'+tsModules+'\n'+`export const MODULE_METHODS = ${JSON.stringify(Object.fromEntries(modules.map(m=>[m.name,m.methods.map(f=>f.name)])))} as const;\n`+`export const MODULE_RETURNS: Record<string, Record<string, string>> = ${JSON.stringify(Object.fromEntries(modules.map(m=>[m.name,Object.fromEntries(m.methods.filter(f=>shared(f.ret)).map(f=>[f.name,interfaces.get(shared(f.ret)).name]))])))};\n`);
console.log(JSON.stringify({modules:modules.length,methods:modules.reduce((n,m)=>n+m.methods.length,0),types:needed.size}));
