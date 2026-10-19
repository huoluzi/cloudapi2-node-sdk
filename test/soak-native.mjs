import assert from 'node:assert/strict';
import {writeFileSync,readFileSync} from 'node:fs';
import {FlightHubSDK as sdk} from '../dist/index.js';
import {liveConfig} from '../scripts/live-config.mjs';
const {config}=liveConfig('.runtime/fixture-config.json');assert.equal(config.address,'http://127.0.0.1');
const cycles=Number(process.env.CLOUDAPI2_SOAK_CYCLES||40),hold=Number(process.env.CLOUDAPI2_SOAK_HOLD_MS||1500);
assert(Number.isInteger(cycles)&&cycles>=10&&cycles<=1000);assert(hold>=100&&hold<=60000);
const pause=ms=>new Promise(r=>setTimeout(r,ms)),samples=[];
try {for(let i=0;i<cycles;i++){
 assert.equal(sdk.initialize(config),0);await sdk.waitForNotificationConnection();
 await new Promise((resolve,reject)=>sdk.getWorkspaceInstance().getDeviceManageModule().getDeviceList((_,e)=>e.errorCode?reject(Error('fixture query failed')):resolve()));
 const osd=sdk.getDroneInstance('NODE-TEST-DRONE').getDroneOsdModule();let n=0;
 const id=osd.listenAircraftLocation(()=>n++);assert(id>=0);await pause(hold);assert(n>0);
 osd.cancelListenAircraftLocation(id);const before=n;assert.equal(sdk.shutdown(),0);await pause(75);assert.equal(n,before);
 assert.equal(sdk.getDiagnostics().subscriptions,0);assert.equal(sdk.getDiagnostics().queuedFrameBytes,0n);
 global.gc?.();await pause(25);
 const threads=Number(/^Threads:\s+(\d+)/m.exec(readFileSync('/proc/self/status','utf8'))[1]);
 samples.push({cycle:i,rss:process.memoryUsage().rss,threads,callbacks:n});
}}finally{sdk.shutdown();}
const warm=samples[5],last=samples.at(-1),growth=last.rss-warm.rss;
assert(growth<64*1024*1024,`RSS grew by ${growth} after warmup`);assert(last.threads<=warm.threads+2,'Thread growth after shutdown');
const report={status:'passed',cycles,holdMs:hold,forcedGc:!!global.gc,rssGrowthAfterWarmup:growth,maxRss:Math.max(...samples.map(s=>s.rss)),threadsAtWarmup:warm.threads,threadsAtEnd:last.threads,samples};
writeFileSync('audit/server-soak.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({...report,samples:undefined}));
