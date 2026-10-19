import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {Worker} from 'node:worker_threads';
import {FlightHubSDK as sdk} from '../dist/index.js';
import {liveConfig} from '../scripts/live-config.mjs';
const pause=ms=>new Promise(r=>setTimeout(r,ms));
const {config,headers,wsHeaders}=liveConfig('.runtime/fixture-config.json');
const cycles=[];
for(let cycle=0;cycle<3;cycle++){
 sdk.setHttpHeaders(headers);sdk.setWebSocketAuthHeaders(wsHeaders);assert.equal(sdk.initialize(config),0);
 await sdk.waitForNotificationConnection();
 const workspace=sdk.getWorkspaceInstance(),manager=workspace.getDeviceManageModule();
 const devices=await new Promise(resolve=>manager.getDeviceList((devices,error)=>{assert.equal(error.errorCode,0);resolve(devices);}));
 const osd=sdk.getDroneInstance(devices[0].subDevices[0].deviceSn).getDroneOsdModule();
 let count=0;const id=osd.listenAircraftLocation(()=>count++);await pause(200);assert(count>0,'listener should receive real native callbacks');
 // Deliberately stall JS while native threads continue producing to exercise bounded TSFN backpressure.
 Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,1800);
 osd.cancelListenAircraftLocation(id);const before=count;await pause(100);assert.equal(count,before,'queued deliveries must be suppressed after cancellation');
 assert.equal(sdk.getDiagnostics().subscriptions,0);
 const active=osd.listenAircraftLocation(()=>count++);assert(active>=0);await pause(50);
 const atShutdown=count;assert.equal(sdk.shutdown(),0);await pause(100);assert.equal(count,atShutdown);
 assert.throws(()=>manager.getDeviceList(()=>{}),/expired/);assert.throws(()=>osd.listenAircraftLocation(()=>{}),/expired/);
 cycles.push({cycle,callbacks:count,postCancel:0,postShutdown:0,staleHandleRejected:true});
}
assert(sdk.getDiagnostics().droppedCallbacks>0n,'stress run must exercise overflow');
const workerError=await new Promise((resolve,reject)=>{const worker=new Worker(`const {parentPort}=require('node:worker_threads');try{require(${JSON.stringify(new URL('../dist/index.js',import.meta.url).pathname)}).FlightHubSDK.getVersion();parentPort.postMessage('unexpected');}catch(e){parentPort.postMessage(e.message);}`,{eval:true});worker.once('message',resolve);worker.once('error',reject);});
assert.match(workerError,/one Node environment|worker_threads are not supported/);
const report={status:'passed',cycles,workerIsolation:true,droppedCallbacks:String(sdk.getDiagnostics().droppedCallbacks),subscriptionsRemaining:sdk.getDiagnostics().subscriptions};
writeFileSync('audit/server-lifecycle.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
