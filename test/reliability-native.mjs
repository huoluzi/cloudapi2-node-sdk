import assert from 'node:assert/strict';
import {writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {FlightHubSDK as sdk} from '../dist/index.js';
import {liveConfig} from '../scripts/live-config.mjs';
const {config}=liveConfig('.runtime/fixture-config.json');
assert.equal(config.address,'http://127.0.0.1');assert.equal(new URL(config.notificationServerAddress).hostname,'127.0.0.1');
const base=config.address+':'+config.port,pause=ms=>new Promise(r=>setTimeout(r,ms));
async function until(predicate,timeout=35000){const start=Date.now();while(!predicate()){if(Date.now()-start>timeout)throw Error('Recovery observation timed out');await pause(25);}}
async function control(name){const r=await fetch(base+'/__control/'+name,{method:'POST'});assert.equal(r.status,200);}
assert.equal(sdk.initialize(config),0);const checks=[];
try {
 await sdk.waitForNotificationConnection();
 const manager=sdk.getWorkspaceInstance().getDeviceManageModule();
 const query=()=>new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('query timeout')),15000);manager.getDeviceList((devices,error)=>{clearTimeout(timer);resolve({devices,error});});});
 assert.equal((await query()).error.errorCode,0);console.log('reliability: initial query passed');
 await control('http-error');assert.notEqual((await query()).error.errorCode,0);console.log('reliability: HTTP failure returned');
 await control('http-ok');assert.equal((await query()).error.errorCode,0);checks.push('HTTP failure reported; next query recovers');console.log('reliability: query recovered');
 const osd=sdk.getDroneInstance('NODE-TEST-DRONE').getDroneOsdModule();let callbacks=0;
 const id=osd.listenAircraftLocation(()=>callbacks++);await until(()=>callbacks>=3);
 console.log('reliability: subscription flowing');await control('disconnect');const before=callbacks;
 await until(()=>callbacks>=before+3);assert.equal(sdk.isNotificationConnected(),true);checks.push('notification reconnect restores existing subscription');console.log('reliability: notification recovered');
 osd.cancelListenAircraftLocation(id);const canceled=callbacks;await pause(300);assert.equal(callbacks,canceled);assert.equal(sdk.getDiagnostics().subscriptions,0);checks.push('cancel after reconnect suppresses callbacks');
 console.log('reliability: cancel passed; shutting down with pending query');let delivered=false;manager.getDeviceList(()=>{delivered=true;});sdk.shutdown();await pause(200);assert.equal(delivered,false);checks.push('shutdown with pending HTTP suppresses callback');console.log('reliability: pending query shutdown passed');
} finally {await control('http-ok');sdk.shutdown();}
// A forgotten listener must not keep the event loop alive; cleanup joins native
// threads on normal process exit. No process.exit() in the child.
const child=spawnSync(process.execPath,['--input-type=module','-e',`import {FlightHubSDK as s} from './dist/index.js';s.initialize(${JSON.stringify(config)});await s.waitForNotificationConnection();await new Promise((r,j)=>s.getWorkspaceInstance().getDeviceManageModule().getDeviceList((d,e)=>e.errorCode?j(Error('fixture query failed')):r(d)));s.getDroneInstance('NODE-TEST-DRONE').getDroneOsdModule().listenAircraftLocation(()=>{});`],{encoding:'utf8',timeout:20000});
writeFileSync('.runtime/reliability-child.log',(child.stdout||'')+'\n'+(child.stderr||''));
assert.equal(child.error,undefined);assert.equal(child.status,0,'Child process failed; inspect .runtime/reliability-child.log');checks.push('process exit with active listener completes');
const report={status:'passed',checks};writeFileSync('audit/server-reliability.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
