import {readFileSync,writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {isDeepStrictEqual} from 'node:util';
import {createModule} from '../dist/module-runtime.js';
import {JAVA_CONTRACT} from '../dist/java-contract.js';
import {DEFAULT_CONFIG} from '../dist/config.js';
import {nativeArguments,nativeCallback} from './swig-boundary.mjs';
import {resolve} from 'node:path';
const require=createRequire(import.meta.url),native=require(resolve(process.env.CLOUDAPI2_TEST_BINDING||'native/linux-x64-phase2/cloudapi2_node.node'));
const edge=process.argv.includes('--edge');
const cases=JSON.parse(readFileSync('audit/server-java-api-'+(edge?'edge-':'')+'oracle.json','utf8'));
const normalize=value=>JSON.parse(JSON.stringify(value,(_,v)=>typeof v==='bigint'?Number(v):v?.type==='Buffer'&&Array.isArray(v.data)?v.data:v));
const same=(a,b)=>isDeepStrictEqual(normalize(a),normalize(b));
const results=[];
const init=native.initialize({...DEFAULT_CONFIG,address:'http://127.0.0.1',port:'9',notificationServerAddress:'ws://127.0.0.1:9/notifications',logToConsole:false,showVersionInfo:false,logLevel:'error',logFilePath:'.runtime/node-api-probe.log'});
if(init!==0)throw Error('initialize='+init);
try{
 for(const c of cases){
  writeFileSync('.runtime/api-probe-current.json',JSON.stringify({module:c.module,method:c.method}));
  const entry={module:c.module,method:c.method,parameterTypes:c.parameterTypes};
  try{
   if(c.failure||c.callbackFailure)throw Error('Java oracle: '+(c.failure||c.callbackFailure));
   const choices=JAVA_CONTRACT[c.module].filter(m=>m.name===c.method&&m.params.length===c.inputs.length);
   const m=choices.find(m=>m.params.every((p,i)=>p.type.replace(/<.*>/,'').split('.').at(-1)===c.parameterTypes[i]))??choices[0];
   let values=nativeCallback(c,c.nativeCallback??[]);
   const errAt=values.findIndex(v=>v&&typeof v==='object'&&'errorCode'in v),cppErr=m.cppCallback?.indexOf('FlightHubError')??-1;
   if(errAt>=0&&cppErr>=0&&errAt!==cppErr){values=[...values];[values[errAt],values[cppErr]]=[values[cppErr],values[errAt]];}
   if(c.module==='CustomSEIModule')values=c.method==='customSEIEncode'?[[]]:[{},[]];
   const h=native.createProbeModule(c.module,values),module=createModule(native,h,c.module,'FIXTURE-SN');
   let callback;
   const args=c.inputs.map(v=>v==='<callback>'?(...data)=>{callback=data;}:structuredClone(v));
   m.cppArgs.filter(a=>!a.output).forEach((a,i)=>{if(a.type==='std::vector<uint8_t>')args[i]=Buffer.from(args[i]);});
   const result=module[c.method](...args);
   await new Promise(resolve=>setImmediate(resolve));
   const calls=native.readProbeCalls();
   entry.nativeCallCount=calls.length;
   const expectedArguments=nativeArguments(c,m);
   entry.argumentsEqual=c.method==='getSn'||m.special||same(calls.map(x=>x.args),expectedArguments);
   if(!entry.argumentsEqual)entry.argumentDifference={node:calls.map(x=>x.args),java:expectedArguments};
   entry.callbackEqual=(!c.callback&&callback===undefined)||(c.callback&&callback!==undefined&&same(callback,c.callback));
   if(!entry.callbackEqual)entry.callbackDifference={node:callback??null,java:c.callback??null};
   entry.returnEqual=c.returnModule?result!==null&&typeof result==='object':!('return'in c)?result===undefined:same(result,c.return);
   if(!entry.returnEqual)entry.returnDifference={node:result??null,java:c.return??null};
   entry.status=entry.argumentsEqual&&entry.callbackEqual&&entry.returnEqual?'passed':'different';
  }catch(error){entry.status='failed';entry.failure=error.message;}
  native.stopProbeCallbacks();results.push(entry);
 }
}finally{native.shutdown();}
const report={scope:'Official Java wrappers and real Node-API converters with isolated native test interfaces; no device command execution',total:results.length,passed:results.filter(x=>x.status==='passed').length,results};
writeFileSync('audit/server-api-'+(edge?'edge-':'')+'compatibility.json',JSON.stringify(report,(_,v)=>typeof v==='bigint'?String(v):v,2));
console.log(JSON.stringify({total:report.total,passed:report.passed,failed:report.total-report.passed}));
if(report.passed!==report.total)process.exitCode=1;
