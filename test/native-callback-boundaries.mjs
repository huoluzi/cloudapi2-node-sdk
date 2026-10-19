import {createRequire} from 'node:module';import assert from 'node:assert/strict';import {writeFileSync} from 'node:fs';
import {createModule} from '../dist/module-runtime.js';import {DEFAULT_CONFIG} from '../dist/config.js';
import {resolve} from 'node:path';
const native=createRequire(import.meta.url)(resolve(process.env.CLOUDAPI2_TEST_BINDING||'native/linux-x64-phase2/cloudapi2_node.node'));
const pause=()=>new Promise(r=>setTimeout(r,20)),checks=[];
assert.equal(native.initialize({...DEFAULT_CONFIG,address:'http://127.0.0.1',port:'9',notificationServerAddress:'ws://127.0.0.1:9',logToConsole:false,showVersionInfo:false,logLevel:'error',logFilePath:'.runtime/boundaries.log'}),0);
try{
 const camera=createModule(native,native.createProbeModule('CameraControlModule',[[123456]]),'CameraControlModule');
 const a=[],b=[];const ia=camera.listenDrcCameraModeAvailableRange('payload:a',v=>a.push(v)),ib=camera.listenDrcCameraModeAvailableRange('payload:b',v=>b.push(v));
 assert.equal(ia,ib,'test deliberately reuses listener IDs across payload scopes');camera.cancelListenDrcCameraModeAvailableRange('payload:a',ia);await pause();assert.equal(a.length,0);assert.deepEqual(b,[[65535]]);camera.cancelListenDrcCameraModeAvailableRange('payload:b',ib);assert.equal(native.getDiagnostics().subscriptions,0);checks.push('same listener ID on different payloads: cancellation isolation and queued suppression; unknown camera enum');
 const live=createModule(native,native.createProbeModule('LiveModule',[[0,127,128,255],{}]),'LiveModule');let frame;
 const id=live.subscribeLiveStream(v=>frame=v);await pause();assert(Buffer.isBuffer(frame));assert.deepEqual([...frame],[0,127,128,255]);live.unSubscribeLiveStream(id);checks.push('native byte stream preserves all unsigned byte values');
 for(const data of [[],new Array(10*1024*1024+1).fill(0)]){
  const m=createModule(native,native.createProbeModule('LiveModule',[data,{}]),'LiveModule');let count=0;const id=m.subscribeLiveStream(()=>count++);await pause();assert.equal(count,0);m.unSubscribeLiveStream(id);
 }
 checks.push('empty and oversized live frames suppressed as in Java');
 const pull=createModule(native,native.createProbeModule('PullStreamModule',[]),'PullStreamModule');assert.equal(pull.subscribeStream(null),-1);let error;pull.start(null,e=>error=e);assert.equal(error.errorCode,-4);assert.equal(native.readProbeCalls().length,0);checks.push('null stream callback and empty URL validation before native invocation');
}finally{native.stopProbeCallbacks();native.shutdown();}
writeFileSync('audit/server-callback-boundaries.json',JSON.stringify({status:'passed',checks},null,2));console.log(JSON.stringify({status:'passed',checks:checks.length}));
