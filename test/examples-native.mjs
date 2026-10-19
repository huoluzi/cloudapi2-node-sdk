import {spawnSync} from 'node:child_process';
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import assert from 'node:assert/strict';
const config=JSON.parse(readFileSync('.runtime/fixture-config.json'));
assert.equal(config.ADDRESS,'http://127.0.0.1');assert.equal(new URL(config.NOTIFICATION_SERVER).hostname,'127.0.0.1');
const results=[];
for(const name of ['diagnostics','device-list','devices','telemetry','device-events','waylines','media','flight-tasks','sei']){
 const result=spawnSync(process.execPath,['examples/'+name+'.mjs'],{encoding:'utf8',timeout:45000,maxBuffer:2*1024*1024,env:{...process.env,CLOUDAPI2_CONFIG:resolve('.runtime/fixture-config.json'),DEVICE_SN:'NODE-TEST-DRONE',DURATION_SECONDS:'1',TASK_TYPE:'0'}});
 writeFileSync('.runtime/example-'+name+'.log',(result.stdout||'')+'\n'+(result.stderr||''));
 assert.equal(result.error,undefined,name);assert.equal(result.status,0,name+' failed; inspect private example log');
 if(name==='devices'||name==='telemetry')assert.match(result.stdout,/latitude/,name+' did not receive location');
 if(name==='sei')assert.match(result.stdout,/encodedBytes/);
 results.push({name,status:'passed'});console.log(name+' passed');
}
writeFileSync('audit/server-rc2-examples.json',JSON.stringify({status:'passed',scope:'Local diagnostics/SEI and loopback fixture only; empty business pages, location samples and listener registration/cleanup; not full device testing',results},null,2)+'\n');
