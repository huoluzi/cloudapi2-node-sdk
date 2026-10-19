import { writeFileSync } from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { FlightHubSDK as sdk } from '../dist/index.js';
import { liveConfig } from './live-config.mjs';
const {headers,wsHeaders,config}=liveConfig(process.argv[2]);
const result={runtime:'node',version:sdk.getVersion(),startedAt:Date.now(),locations:[]};
let osd;
try {
  result.httpHeaders=sdk.setHttpHeaders(headers); result.wsHeaders=sdk.setWebSocketAuthHeaders(wsHeaders);
  result.initialize=sdk.initialize(config);
  if(result.initialize!==0) throw new Error(`initialize=${result.initialize}`);
  const manager=sdk.getWorkspaceInstance()?.getDeviceManageModule();
  if(!manager) throw new Error('DeviceManageModule missing');
  const list = await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new Error('getDeviceList timeout')),35000);
    manager.getDeviceList((devices,error)=>{clearTimeout(timer);resolve({devices,error});});
  });
  Object.assign(result,list);
  if(list.error.errorCode!==0) throw new Error(`getDeviceList=${list.error.errorCode}/${list.error.httpCode}/${list.error.serverCode}`);
  await sdk.waitForNotificationConnection(8000);
  const drone=list.devices.flatMap(t=>t.subDevices).find(d=>d.online&&d.deviceClass==='drone');
  if(!drone) throw new Error('No online drone available for location comparison');
  result.droneSn=drone.deviceSn;
  osd=sdk.getDroneInstance(drone.deviceSn)?.getDroneOsdModule();
  if(!osd) throw new Error('DroneOsdModule missing');
  const id=osd.listenAircraftLocation(v=>result.locations.push({at:Date.now(),value:v}));
  result.listenId=id;
  if(id<0) throw new Error(`listen=${id}`);
  await sleep(Number(process.env.CLOUDAPI2_OBSERVE_MS||15000));
  osd.cancelListenAircraftLocation(id);
  osd.cancelListenAircraftLocation(id); // idempotent
  const count=result.locations.length;
  await sleep(3000);
  result.callbacksAfterCancel=result.locations.length-count;
  let immediate=0;
  for(let i=0;i<50;i++) {const n=osd.listenAircraftLocation(()=>immediate++);osd.cancelListenAircraftLocation(n);}
  await sleep(250);
  result.callbacksAfterImmediateCancel=immediate;
  result.diagnostics=sdk.getDiagnostics();
} catch(e) {result.failure=e.message;process.exitCode=1;}
finally {
  writeFileSync('audit/server-node-before-shutdown.json',JSON.stringify(result,(_,v)=>typeof v==='bigint'?v.toString():v,2));
  result.shutdown=sdk.shutdown();
  if(osd) { try {osd.listenAircraftLocation(()=>{});result.staleHandleRejected=false;} catch {result.staleHandleRejected=true;} }
  result.finishedAt=Date.now();
  writeFileSync(process.argv[3]||'audit/server-node-live.json',JSON.stringify(result,(_,v)=>typeof v==='bigint'?v.toString():v,2));
  console.log(JSON.stringify({runtime:result.runtime,version:result.version,devices:result.devices?.length,locations:result.locations.length,callbacksAfterCancel:result.callbacksAfterCancel,failure:result.failure}));
}
