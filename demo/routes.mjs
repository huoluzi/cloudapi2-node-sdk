// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { mkdir,writeFile,unlink } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { Readable } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { join } from 'node:path';
import { publicUser, HttpError } from './store.mjs';
import { BASE, json } from './http.mjs';
import { epoch, bounded, number } from './business.mjs';
const strings=v=>Array.isArray(v)?v.filter(s=>typeof s==='string'&&s.trim()):[];
const ids=v=>{if(!Array.isArray(v)||v.some(n=>!Number.isSafeInteger(n)||n<0))throw new HttpError(400,'Invalid IDs');return v;};
const intId=s=>{const n=Number(s);if(!Number.isInteger(n)||n<0||n>2147483647)throw new HttpError(400,'Invalid file ID');return n;};

export function registerRoutes(router,{auth,store,kernel,business:b,runtimeDir,registrationEnabled=false}){
 const add=(...args)=>router.add(...args);
 add('GET','/actuator/health',()=>({status:'UP',components:{sdk:{status:b.sdk.isInitialized()?'UP':'DOWN'},notification:{status:b.sdk.isNotificationConnected()?'UP':'DOWN'}}}),{public:true});
 add('POST','/api/auth/register',async c=>{if(!registrationEnabled)throw new HttpError(400,'当前未开放注册，请联系管理员');return auth.register(await c.body());},{public:true});
 add('POST','/api/auth/login',async c=>auth.login(await c.body()),{public:true});
 add('GET','/api/users/me',c=>publicUser(c.user));
 add('PUT','/api/users/me/password',async c=>auth.changePassword(c.user,await c.body()));
 add('GET','/api/users',c=>{if(c.user.role!=='admin')throw new HttpError(403,'需要管理员权限');return store.data.users.map(publicUser);});
 for(const action of ['enabled','approve','reject','role','reset-password'])add('PUT',`/api/users/:id/${action}`,async c=>auth.update(c.user,Number(c.params.id),action,await c.body()));
 add('DELETE','/api/users/:id',c=>auth.update(c.user,Number(c.params.id),'delete',{}));
 add('GET','/api/v1/devices',()=>kernel.list());
 add('GET','/api/v1/devices/:sn',async c=>{const d=await kernel.find(c.params.sn);if(!d){c.res.statusCode=404;return;}return d;});

 const wl='/api/v1/workspace/waylines';
 add('GET',wl,c=>b.waylines(c.url.searchParams));
 add('GET',wl+'/:uuid/exists',async c=>{try{await b.call('WaylineManageModule','getWaylineDetail',c.params.uuid);return {exists:true};}catch(e){return {exists:![404,404001].includes(e.sdkError?.httpCode)&&![404,404001].includes(e.sdkError?.serverCode)};}});
 add('GET',wl+'/:uuid/executions',c=>b.executions(c.params.uuid));
 add('POST',wl+'/batch_delete',async c=>{const values=strings((await c.body()).wayline_uuids);if(!values.length){c.res.statusCode=400;return;}await b.call('WaylineManageModule','batchDeleteWaylines',values);});
 add('POST',wl+'/batch_download',async c=>{const values=strings((await c.body()).wayline_uuids);if(!values.length){c.res.statusCode=400;return;}const r=await b.call('WaylineManageModule','batchDownloadWaylines',{waylineUuids:values});return {downloads:(r.list||[]).map(d=>({wayline_uuid:d.waylineUuid,wayline_name:d.waylineName,url:d.url,size:d.size}))};});
 add('POST',wl+'/submit',async c=>{
   let bytes=0,chunks=[];for await(const chunk of c.req){bytes+=chunk.length;if(bytes>50*1024*1024)throw new HttpError(413,'KMZ too large');chunks.push(chunk);}
   const request=new Request('http://localhost',{method:'POST',headers:{'content-type':c.req.headers['content-type']||''},body:Buffer.concat(chunks)});
   let form;try{form=await request.formData();}catch{throw new HttpError(400,'Invalid multipart form');}
   const file=form.get('file'),name=form.get('wayline_name');if(!file||typeof file==='string'||!file.size||!file.name.toLowerCase().endsWith('.kmz')||typeof name!=='string'||!name.trim())throw new HttpError(400,'需要 KMZ 文件与航线名称');
   const dir=join(runtimeDir,'uploads');await mkdir(dir,{recursive:true});
   const uniqueName=name.replace(/[^\w\u4e00-\u9fa5\-()（）]/g,'_')+'-'+randomUUID();
   const path=join(dir,uniqueName+'.kmz');await writeFile(path,Buffer.from(await file.arrayBuffer()),{mode:0o600});
   const module=b.module('WaylineManageModule');let id=-1;
   try{
     const result=await b.call('WaylineManageModule','importKmz',[path]),uploaded=result.list?.[0];
     if(!uploaded)throw new HttpError(502,'importKmz 返回结果为空');
     let event;
     if(uploaded.asyncRequestId){
       if(b.sdk.isNotificationConnected())id=module.listenImportWaylineEvent(e=>{if(e.kmzObjectKey===uploaded.kmzObjectKey&&e.asyncRequestId===uploaded.asyncRequestId)event=e;});
       await b.call('WaylineManageModule','submitWaylineInfo',{...uploaded,timestamp:epoch(Date.now())});
     }
     let uuid;
     for(let attempt=0;attempt<15;attempt++){
       if(event){if(event.code!==0)throw new HttpError(502,`平台导入失败: ${event.code}`);uuid=event.waylineUuid;break;}
       // Unique temporary basename prevents a fallback lookup from selecting an existing route.
       if(uploaded.waylineName===uniqueName){const list=await b.call('WaylineManageModule','getWaylineList',{page:1,pageSize:100});const matches=(list.list||[]).filter(i=>i.waylineName===uniqueName);if(matches.length===1){uuid=matches[0].waylineUuid;break;}}
       await new Promise(r=>setTimeout(r,1000));
     }
     if(!uuid)throw new HttpError(502,'上传已提交，但未能确认导入后的航线 UUID');
     return {wayline_uuid:uuid};
   }finally{if(id>=0)module.cancelListenImportWaylineEvent(id);await unlink(path);}
 });

 add('GET','/api/v1/media',c=>b.media(c.url.searchParams));
 add('GET','/api/v1/media/:fileId/download-url',async c=>{const fileId=intId(c.params.fileId),r=await b.call('MediaServiceModule','getMediaFilesDownloadURL',fileId);return {fileId,downloadUrl:r.url,expiresIn:3600};});
 add('POST','/api/v1/media/batch-delete',async c=>{const values=ids((await c.body()).fileIds);await b.call('MediaServiceModule','deleteMediaFiles',values);return {deletedCount:values.length};});
 add('GET','/api/v1/media/:fileId/content',async c=>{const r=await b.call('MediaServiceModule','getMediaFilesDownloadURL',intId(c.params.fileId));await proxy(c,r.url);});

 const ft='/api/v1/flight-tasks';
 add('GET',ft,c=>b.tasks(c.url.searchParams));add('POST',ft,async c=>b.writeTask(await c.body()));
 add('GET',ft+'/:uuid',c=>b.taskDetail(c.params.uuid));
 add('POST',ft+'/:uuid/edit',async c=>{await b.writeTask(await c.body(),c.params.uuid);return {taskUuid:c.params.uuid,action:'edit',status:'ok'};});
 add('POST',ft+'/:uuid/delete',async c=>{const t=await b.call('FlightTaskModule','getFlightTaskDetail',c.params.uuid);if(t.status!==0)throw new HttpError(400,'仅待执行状态的任务允许删除');await b.call('FlightTaskModule','deleteFlightTask',c.params.uuid);b.taskCache=null;return {taskUuid:c.params.uuid,action:'delete',status:'ok'};});
 for(const [action,state] of Object.entries({execute:0,pause:6,resume:0,cancel:4}))add('POST',ft+`/:uuid/${action}`,async c=>{await b.call('FlightTaskModule','updateFlightTaskStatus',c.params.uuid,state);b.taskCache=null;return {taskUuid:c.params.uuid,action,status:'ok'};});

 const areas='/api/v1/flight-areas';
 add('GET',areas,c=>{let items=store.data.areas.filter(a=>!['type','status','name'].some(k=>c.url.searchParams.has(k)&&(k==='name'?!a.name.includes(c.url.searchParams.get(k)):a[k]!==c.url.searchParams.get(k))));items.sort((a,b)=>b.createdTime-a.createdTime);const size=number(c.url.searchParams.get('pageSize'))<1?50:bounded(c.url.searchParams.get('pageSize'),50,200),page=bounded(c.url.searchParams.get('pageIndex'),1,100000);return items.slice((page-1)*size,page*size);});
 add('POST',areas,async c=>{const v=await c.body();if(!v.name||!['nfz','dfence','noland'].includes(v.type)||!v.content||Array.isArray(v.content)||typeof v.content!=='object')throw new HttpError(400,'name、type、content 不能为空');const time=epoch(Date.now()),a={id:'fa_'+randomUUID().replaceAll('-','').slice(0,12),name:v.name,type:v.type,status:'enable',content:v.content,createdTime:time,createdBy:'system',updatedTime:time,updatedBy:'system'};store.data.areas.push(a);store.save();c.res.statusCode=201;return a;});
 add('PUT',areas+'/:id',async c=>{const a=store.data.areas.find(a=>a.id===c.params.id);if(!a){c.res.statusCode=404;return;}const v=await c.body();if(v.name?.trim())a.name=v.name;if(v.content)a.content=v.content;a.updatedTime=epoch(Date.now());store.save();return a;});
 add('DELETE',areas+'/:id',c=>{const found=store.data.areas.some(a=>a.id===c.params.id);store.data.areas=store.data.areas.filter(a=>a.id!==c.params.id);store.save();c.res.statusCode=found?204:404;});
 const defaults=[['高速有人机',2000,500,1000,250],['低速飞行器',4000,1000,2000,500],['无人机',1000,300,500,150]].map(([aircraftType,horizontalWarning,verticalWarning,horizontalDanger,verticalDanger])=>({aircraftType,horizontalWarning,verticalWarning,horizontalDanger,verticalDanger}));
 let tcas={thresholds:defaults};add('GET','/api/v1/tcas',()=>tcas);add('PUT','/api/v1/tcas',async c=>{const v=await c.body();if(!Array.isArray(v.thresholds))throw new HttpError(400,'thresholds required');tcas=v;});
 return {routes:router.routes};
}

/** URLs originate in authenticated SDK responses, never a user-supplied URL parameter. */
export async function proxy(c,source){
 if(!source)throw new HttpError(404,'Media URL unavailable');const url=new URL(source);if(!['http:','https:'].includes(url.protocol))throw new HttpError(502,'Unsupported media URL');
 const abort=new AbortController(),timer=setTimeout(()=>abort.abort(),60000);c.res.on('close',()=>abort.abort());
 try{const response=await fetch(url,{headers:c.req.headers.range?{Range:c.req.headers.range}:{},signal:abort.signal,redirect:'error'});
   c.res.statusCode=response.status;for(const name of ['content-type','content-length','content-range','accept-ranges','etag','last-modified'])if(response.headers.has(name))c.res.setHeader(name,response.headers.get(name));
   if(c.url.searchParams.get('download')==='true')c.res.setHeader('Content-Disposition','attachment');
   if(response.body)await pipeline(Readable.fromWeb(response.body),c.res);else c.res.end();
 }finally{clearTimeout(timer);}
}
