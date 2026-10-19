import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {FlightHubSDK as sdk} from '../dist/index.js';
import {liveConfig} from '../scripts/live-config.mjs';
const {config}=liveConfig('.runtime/fixture-config.json');assert.equal(config.address,'http://127.0.0.1');
let afterShutdown=0;const cycles=100;
try {for(let cycle=0;cycle<cycles;cycle++){
 assert.equal(sdk.initialize(config),0);await sdk.waitForNotificationConnection();
 const manager=sdk.getWorkspaceInstance().getDeviceManageModule();
 await new Promise((resolve,reject)=>manager.getDeviceList((_,e)=>e.errorCode?reject(Error('fixture query failed')):resolve()));
 let closing=false;
 for(let n=0;n<10;n++)manager.getDeviceList(()=>{if(closing)afterShutdown++;});
 if(cycle%3)Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,cycle%3);
 closing=true;assert.equal(sdk.shutdown(),0);
 await new Promise(r=>setTimeout(r,5));assert.equal(sdk.getDiagnostics().subscriptions,0);
}}finally{sdk.shutdown();}
assert.equal(afterShutdown,0);
const report={status:'passed',cycles,inFlightQueries:cycles*10,callbacksAfterShutdown:afterShutdown};
writeFileSync('audit/server-shutdown-race.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
