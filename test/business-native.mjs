import assert from 'node:assert/strict';import {writeFileSync} from 'node:fs';
import {FlightHubSDK as sdk} from '../dist/index.js';import {liveConfig} from '../scripts/live-config.mjs';
const {config}=liveConfig('.runtime/fixture-config.json');assert.equal(config.address,'http://127.0.0.1','Commands must only target the local fixture');
sdk.setHttpHeaders([{key:'X-Test-Runtime',value:'node'}]);assert.equal(sdk.initialize(config),0);
const ws=sdk.getWorkspaceInstance(),media=ws.getMediaServiceModule(),tasks=ws.getFlightTaskModule();
const invoke=(m,name,...args)=>new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('timeout')),10000);m[name](...args,(error,result)=>{clearTimeout(timer);resolve({error,result:result??null});});});
const result={};try{
 result.scalarDownload=await invoke(media,'getMediaFilesDownloadURL',42);
 result.arrayDownload=await invoke(media,'getMediaFilesDownloadURL',['object-a']);
 result.businessError=await invoke(media,'getMediaFilesDownloadURL',999);
 result.createTask=await invoke(tasks,'createFlightTask',{name:'Node Java 对照',sn:'FIXTURE-DOCK',taskType:3,waylineUuid:'FIXTURE-WAYLINE',rthAltitude:110,timeZone:'Asia/Shanghai',outOfControlActionInFlight:1,beginAt:1800000000,endAt:1800000600,minBatteryCapacity:50});
 result.pauseTask=await invoke(tasks,'updateFlightTaskStatus','fixture-task',6);
 result.deleteTask=await invoke(tasks,'deleteFlightTask','fixture-task');
 assert.equal(result.scalarDownload.result.url,'http://fixture.invalid/file');assert.equal(result.arrayDownload.result.list.length,1);assert.equal(result.businessError.error.serverCode,222001);
 for(const key of ['scalarDownload','arrayDownload','createTask','pauseTask','deleteTask'])assert.equal(result[key].error.errorCode,0);
}finally{sdk.shutdown();}
writeFileSync('audit/server-node-business.json',JSON.stringify(result,null,2));
