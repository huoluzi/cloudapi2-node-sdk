import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {join} from 'node:path';
import {interfaces,sdk,split,typed} from './cpp-schema.mjs';
import {scanPublicMethods} from './java-scan.mjs';
const modules=[...interfaces.values()];
let cpp=modules.map(m=>`std::shared_ptr<${m.cppName}> MakeProbe${m.name}();`).join('\n')+'\n';
for(const mod of modules){
 cpp+=`struct Probe${mod.name}: ${mod.cppName} {\n`;
 for(const m of mod.methods){
  const ps=/\(([\s\S]*)\)\s*(?:const)?$/.exec(m.declaration)[1],raw=split(ps),args=raw.map(typed),cb=m.cb?args.at(-1).name:null;
  cpp+=`${m.declaration} override {\nProbeRecord("${mod.name}","${m.name}",{${m.args.filter(a=>!a.output).map(a=>a.type.endsWith('*')?`${a.name}?Convert<${a.type.slice(0,-1)}>::to(probeEnv,*${a.name}):Null(probeEnv)`:`Convert<${a.type}>::to(probeEnv,${a.name})`).join(',')}});\n`;
  if(m.cb)cpp+=`if(${cb})${cb}(${m.cb.map((t,i)=>`ProbeValue<${t}>(${i})`).join(',')});\n`;
  for(const a of m.args.filter(a=>a.output))cpp+=`${a.name}=ProbeValue<${a.type}>(${m.args.filter(x=>x.output).indexOf(a)});\n`;
  if(m.ret.startsWith('std::shared_ptr<'))cpp+=`return MakeProbe${m.ret.slice(17,-1)}();\n`;
  else if(m.ret==='std::string')cpp+='static const std::string sn="FIXTURE-SN";return sn;\n';
  else if(m.ret==='bool')cpp+='return true;\n';
  else if(m.ret!=='void')cpp+='return 73;\n';
  cpp+='}\n';
 }
 cpp+=`};\nstd::shared_ptr<${mod.cppName}> MakeProbe${mod.name}(){return std::make_shared<Probe${mod.name}>();}\n`;
}
cpp+='napi_value CreateProbeModule(napi_env env,napi_callback_info info){return Guard(env,[&]{auto args=Arguments(env,info,2);auto type=String(env,args[0]);ProbeBegin(env,args[1]);\n';
for(const m of modules)cpp+=`if(type=="${m.name}")return ${m.name==='Workspace'||m.name==='Drone'?`Wrap(env,Kind::${m.name},MakeProbe${m.name}())`:`WrapGenerated(env,type,MakeProbe${m.name}())`};\n`;
cpp+='throw std::invalid_argument("Unknown probe module");});}\n';
writeFileSync('native/generated/probes.inc',cpp);
const root=join(sdk,'platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk'),java=[];
for(const mod of modules){
 const file=join(root,'generated',mod.cppName+'.java'),source=readFileSync(file,'utf8');
 const methods=scanPublicMethods(source).filter(m=>!m.modifiers.includes('static')&&!['delete','swigReleaseOwnership','swigTakeOwnership'].includes(m.name));
 const code=[`import com.dji.flighthubsdk.generated.*;`,`public class Probe${mod.name} extends ${mod.cppName} { public Probe${mod.name}(){super();}`];
 for(const m of methods){
  const params=split(m.parameters).map(typed),cb=/Callback/.test(params.at(-1)?.type||'')?params.at(-1):null;
  let body=`JavaApiOracle.record("${mod.name}","${m.name}",new Object[]{${params.filter(p=>p!==cb).map(p=>p.name).join(',')}});`;
  if(cb)body+=`JavaApiOracle.respond(${cb.name});`;
  if(m.returnType==='int')body+='return 73;';
  else if(m.returnType==='boolean')body+='return true;';
  else if(m.returnType==='String')body+='return "FIXTURE-SN";';
  else if(m.returnType!=='void'){
   const child=modules.find(x=>x.cppName===m.returnType);body+=child?`return new Probe${child.name}();`:'return null;';
  }
  code.push(`@Override public ${m.returnType} ${m.name}(${m.parameters}) {${body}}`);
 }
 code.push('}');java.push({name:'Probe'+mod.name,code:code.join('\n')});
}
mkdirSync('test/generated',{recursive:true});for(const x of java)writeFileSync('test/generated/'+x.name+'.java',x.code+'\n');
writeFileSync('test/generated/java-modules.txt',modules.map(m=>m.name).join('\n')+'\n');
console.log(JSON.stringify({probeInterfaces:modules.length}));
