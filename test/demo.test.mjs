import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';import {join} from 'node:path';
import {Store,Auth} from '../demo/store.mjs';
import {Router,BASE} from '../demo/http.mjs';
import {registerRoutes} from '../demo/routes.mjs';
import {registerAdvanced} from '../demo/advanced.mjs';
import {Business,epoch,participating,overlap} from '../demo/business.mjs';

test('Go timestamps use numeric offsets, preserving Java epoch semantics',()=>{
 assert.equal(epoch('2026-08-27 08:50:47.941669 +0800 CST'),epoch('2026-08-27T00:50:47Z'));
 assert.equal(epoch('2026-08-27 08:50:47.941669 -0500 CDT'),epoch('2026-08-27T13:50:47Z'));
 assert.equal(epoch('1704067200000'),1704067200);assert.equal(epoch('1704067200'),1704067200);assert.equal(epoch('bad'),0);
});
test('task conflict windows use official half-open, type, state and 100-second preparation rules',()=>{
 const a={sn:'dock',status:0,taskType:3,beginAt:1000,endAt:0,waylineDuration:20};assert(participating(a));
 assert(!participating({...a,taskType:2}));assert(!participating({...a,status:9}));
 assert(!overlap(a,{...a,beginAt:1120}));assert(overlap(a,{...a,beginAt:1119}));assert(!overlap(a,{...a,sn:'other'}));
});
test('HTTP auth, approval, stale tokens, SDK failure, task commands and SSE cancellation',async t=>{
 const dir=await mkdtemp(join(tmpdir(),'node-sdk-demo-'));t.after(()=>rm(dir,{recursive:true,force:true}));
 const store=new Store(join(dir,'store.json')),auth=new Auth(store),router=new Router(auth);
 const calls=[];let canceled=0,eventCallback;
 const terra={listenReconstructionStatusChanged(cb){eventCallback=cb;return 7;},cancelListenReconstructionStatusChanged(id){assert.equal(id,7);canceled++;}};
 const sdk={isInitialized:()=>true,isNotificationConnected:()=>true,getWorkspaceInstance:()=>({getTerraBuildModule:()=>terra})};
 const kernel={list:async()=>[{sn:'dock',childDevices:[]}],find:async()=>null,gateways:()=>[]};
 const business=new Business(sdk,kernel);business.call=async(module,method,...args)=>{calls.push({module,method,args});if(method==='getFlightTaskDetail')return {status:2,taskType:1};if(method==='updateFlightTaskStatus')return;if(method==='getModelFileList')return {list:[],total:0,page:1,pageSize:20};throw new Error('Deliberate upstream failure');};
 registerRoutes(router,{auth,store,kernel,business,runtimeDir:dir,registrationEnabled:true});const stop=registerAdvanced(router,{business,kernel,store});t.after(stop);
 const server=router.createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>{server.closeAllConnections();server.close();});
 const base=`http://127.0.0.1:${server.address().port}${BASE}`;
 async function call(path,method='GET',body,token){const r=await fetch(base+path,{method,headers:{...(body?{'Content-Type':'application/json'}:{}),...(token?{Authorization:'Bearer '+token}:{})},...(body?{body:JSON.stringify(body)}:{})});let json;try{json=await r.json();}catch{}return {status:r.status,json};}
 assert.equal((await call('/api/v1/devices')).status,401);
 const admin=(await call('/api/auth/register','POST',{username:'admin',password:'GoodPassword9'})).json;assert.equal(admin.user.role,'admin');assert(admin.token);
 const user=(await call('/api/auth/register','POST',{username:'reviewer',password:'GoodPassword9'})).json;assert.equal(user.user.status,'pending');assert.equal(user.token,null);
 assert.equal((await call('/api/auth/login','POST',{username:'reviewer',password:'GoodPassword9'})).status,400);
 assert.equal((await call(`/api/users/${user.user.id}/approve`,'PUT',{},admin.token)).status,200);
 const token=(await call('/api/auth/login','POST',{username:'reviewer',password:'GoodPassword9'})).json.token;
 assert.equal((await call('/api/users','GET',null,token)).status,403);
 assert.equal((await call('/api/v1/devices','GET',null,token)).status,200);
 assert.equal((await call('/api/v1/devices/missing','GET',null,token)).status,404);
 assert.equal((await call('/api/v1/workspace/waylines','GET',null,token)).status,500);
 assert.deepEqual((await call('/api/v1/terra/models','GET',null,token)).json,{list:[],total:0,page:1,pageSize:20});
 for(const path of ['%252e%252e/private','%25252e%25252e/private','..%255cprivate'])assert.equal((await call('/api/v1/terra/tiles/1/'+path,'GET',null,token)).status,400);
 assert(!calls.some(c=>c.method==='getModelDetail'));
 const rejected=await call('/api/v1/flight-tasks/job/edit','POST',{name:'test',sn:'dock',wayline_uuid:'route'},token);
 assert.equal(rejected.status,400);assert.equal(rejected.json.code,'TASK_NOT_EDITABLE');assert.equal(rejected.json.reasons.length,2);assert(!calls.some(c=>c.method==='editFlightTask'));
 const paused=await call('/api/v1/flight-tasks/job/pause','POST',{},token);assert.deepEqual(paused.json,{taskUuid:'job',action:'pause',status:'ok'});assert.deepEqual(calls.at(-1).args,['job',6]);
 const abort=new AbortController();const stream=await fetch(base+'/api/v1/terra/tasks/events?token='+encodeURIComponent(token),{signal:abort.signal});assert.equal(stream.status,200);assert.match(stream.headers.get('content-type'),/text\/event-stream/);
 eventCallback({uuid:'job',state:15});const reader=stream.body.getReader();assert.match(new TextDecoder().decode((await reader.read()).value),/"state":"success"/);abort.abort();await reader.cancel().catch(()=>{});await new Promise(r=>setTimeout(r,50));assert.equal(canceled,1);
 assert.equal((await call('/api/users/me/password','PUT',{oldPassword:'GoodPassword9',newPassword:'NewPassword8'},token)).status,200);assert.equal((await call('/api/users/me','GET',null,token)).status,401);
 assert.equal((await call(`/api/users/${admin.user.id}`,'DELETE',null,admin.token)).status,400);
 const reloaded=new Store(join(dir,'store.json'));assert.equal(reloaded.data.users.length,2);assert(!JSON.stringify(reloaded.data).includes('GoodPassword9'));
});
