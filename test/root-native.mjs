import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
import {FlightHubSDK as sdk} from '../dist/index.js';
const java=JSON.parse(readFileSync('audit/server-java-root.json'));
const r={};r['isInitialized.before']=sdk.isInitialized();r['shutdown.before']=sdk.shutdown();r.getVersion=sdk.getVersion();r.getBuildInfo=sdk.getBuildInfo();
const headers=[{key:'X-Fixture',value:'one'},{key:'X-Fixture',value:'two'}];
r.setHttpHeaders=sdk.setHttpHeaders(headers);r.setWebSocketAuthHeaders=sdk.setWebSocketAuthHeaders(headers);r.getHttpHeaders=sdk.getHttpHeaders();r.getWebSocketAuthHeaders=sdk.getWebSocketAuthHeaders();
r['initialize.config']=sdk.initialize({address:'http://127.0.0.1',port:'9',notificationServerAddress:'ws://127.0.0.1:9',logToConsole:false,showVersionInfo:false,logLevel:'error',logFilePath:'.runtime/root-sdk.log'});
r['initialize.default']=sdk.initialize();r['isInitialized.after']=sdk.isInitialized();r.setLogLevel=sdk.setLogLevel('error');r.getConfig=sdk.getConfig();
for(const name of ['getWorkspaceInstance','getDroneInstance','getDockInstance','getBaseStationInstance','getRemoteControllerInstance','getRelayInstance','getStream'])r[name]=sdk[name]('FIXTURE-SN')!==null;
const sei=sdk.getStream().getCustomSEIModule();r['sei.encoded']=sei.customSEIEncode([0,0,0,1,101,136,132],[{dataType:1,customData:{data:[0,127,128,255]}}]);r['sei.decoded']=sei.customSEIDecode(r['sei.encoded']);r['sei.invalid']=sei.customSEIDecode([]);
assert.deepEqual(JSON.parse(JSON.stringify(sei.customSEIDecode(java['sei.encoded']),(_,v)=>typeof v==='bigint'?Number(v):v)),java['sei.decoded'],'Node must decode the identical bytes emitted by official Java');
r.shutdown=sdk.shutdown();r['isInitialized.shutdown']=sdk.isInitialized();
const normalized=JSON.parse(JSON.stringify(r,(_,v)=>typeof v==='bigint'?Number(v):v));
writeFileSync('audit/server-node-root.json',JSON.stringify(normalized,null,2));
const results=Object.keys(java).map(method=>{try{
 if(method==='getBuildInfo'){
  const stable=s=>s.split('\n').filter(line=>/^(Version|Platform|Compiler):/.test(line));assert.deepEqual(stable(normalized[method]),stable(java[method]));
  return {method,status:'passed',expectedBuildMetadataDifference:true,node:normalized[method],java:java[method]};
 }
 if(method==='sei.encoded'){
  assert.deepEqual(normalized[method].slice(-7),[0,0,0,1,101,136,132]);assert.deepEqual(normalized['sei.decoded'].seiData,java['sei.decoded'].seiData);
  return {method,status:'passed',expectedEncoderTimestampDifference:true,crossDecodeJavaBytesEqual:true};
 }
 if(method==='sei.decoded'){
  const stable=v=>({...v,header:{...v.header,timestamp:0}});assert.deepEqual(stable(normalized[method]),stable(java[method]));assert(normalized[method].header.timestamp>0);
  return {method,status:'passed',expectedEncoderTimestampDifference:true};
 }
 assert.deepEqual(normalized[method],java[method]);return {method,status:'passed'};}catch{return {method,status:'different',node:normalized[method],java:java[method]};}});
const report={scope:'19 public root signatures and actual SEI codec through official Java and Node native libraries; loopback configuration only; build metadata intentionally differs',total:results.length,passed:results.filter(v=>v.status==='passed').length,results};
writeFileSync('audit/server-root-comparison.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));if(report.total!==report.passed)process.exitCode=1;
