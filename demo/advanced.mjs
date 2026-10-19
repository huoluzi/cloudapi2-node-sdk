// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { HttpError } from './store.mjs';
import { number,bounded,epoch } from './business.mjs';
import { proxy } from './routes.mjs';
const types={2:'ortho_2d',3:'mesh_3d',4:'3dgs',6:'panorama',7:'lidar'};
const state=n=>[9,15].includes(n)?'success':[3,7,8,11,13,119,122,125].includes(n)?'failed':'processing';
const task=(id,r)=>({taskId:id,state:state(r.state),progress:r.state,mediaInputObjectKey:r.mediaInputObjectKey||'',sfmOutputObjectPrefix:r.sfmOutputObjectPrefix||''});
export function registerAdvanced(router,{business:b,kernel,store}){
 const add=(...args)=>router.add(...args),call=(method,...args)=>b.call('TerraBuildModule',method,...args);
 const detail=id=>call('getModelDetail',number(id));
 const model=i=>({fileId:i.id,uuid:i.uuid,name:i.name,fileType:String(i.fileType),subFileType:String(i.subFileType),state:String(i.state),reconstructionType:types[i.reconstructionType?.[0]]||String(i.reconstructionType?.[0]??''),thumbnailUrl:i.thumbnailUrl?`/api/v1/terra/media/thumb/${i.id}`:null,createdAt:epoch(i.createdAt)});
 const modelPage=async(q)=>call('getModelFileList',bounded(q.get('page'),1,100000),bounded(q.get('pageSize')));
 add('GET','/api/v1/terra/models',async c=>{const r=await modelPage(c.url.searchParams);return {list:r.list.map(model),total:r.total,page:r.page,pageSize:r.pageSize};});
 add('GET','/api/v1/terra/models/:fileId/url',async c=>({url:(await detail(c.params.fileId)).url,expiresAt:new Date(Date.now()+3600000).toISOString()}));
 add('GET','/api/v1/terra/models/:fileId/detail',async c=>{const d=await detail(c.params.fileId);return {fileId:d.id,uuid:d.uuid,name:d.name,reconstructionType:types[d.subFileType]||'mesh_3d',url:d.indexFileKey?`/api/v1/terra/tiles/${d.id}/${d.indexFileKey.replace(d.filePrefix,'').replace(/^\//,'')}`:d.url,thumbnailUrl:d.thumbnailUrl?`/api/v1/terra/media/thumb/${d.id}`:null,previewUrl:d.previewUrl?`/api/v1/terra/media/preview/${d.id}`:null,latitude:d.latitude||0,longitude:d.longitude||0,altitude:d.altitude||0,transform:d.transform||[],createdAt:Math.floor(Number(d.createAt)/1000)};});
 add('DELETE','/api/v1/terra/models/batch',async c=>{const {fileIds}=await c.body();if(fileIds?.length)await call('batchDeleteModelFiles',fileIds);c.res.statusCode=204;});
 add('DELETE','/api/v1/terra/models/:fileId',async c=>{await call('deleteModelFile',number(c.params.fileId));c.res.statusCode=204;});
 add('GET','/api/v1/terra/tasks',async c=>{const r=await modelPage(c.url.searchParams);return {list:r.list.filter(i=>i.uuid).map(i=>task(i.uuid,i)),total:r.total,page:r.page,pageSize:r.pageSize};});
 add('GET','/api/v1/terra/tasks/:taskId/status',async c=>{const r=await call('getReconstructionSettings',c.params.taskId);return {...task(c.params.taskId,r),state:String(r.state)};});
 add('POST','/api/v1/terra/tasks/reconstruction',async c=>{const req=await c.body(),r=await call('createReconstruction',{name:req.name,folderIds:req.folderIds||[],folderUuids:req.folderIds?.length?[]:req.folderUuids||[],reconstructionType:[Number(Object.keys(types).find(k=>types[k]===req.reconstructionType)||3)],wkt:req.wkt||''});c.res.statusCode=201;return {...r,status:'processing'};});
 add('POST','/api/v1/terra/tasks/panorama',async c=>{const req=await c.body(),r=await call('createPanorama',{...req,wkt:req.wkt||'',isShownOnMap:true});c.res.statusCode=201;return {...r,status:'processing'};});
 for(const action of ['retry','stop'])add('POST',`/api/v1/terra/tasks/:taskId/${action}`,async c=>{await call(action+'Reconstruction',c.params.taskId);});
 add('GET','/api/v1/terra/tasks/:taskId/report',async c=>{await call('getQualityReport',c.params.taskId,c.url.searchParams.get('language')||'zh','metric');return {qualityReportUrl:`/api/v1/terra/media/report/${c.params.taskId}`};});
 add('GET','/api/v1/terra/tasks/:taskId/sfm',async c=>({outputPrefix:(await call('getSfmResult',c.params.taskId)).sfmJsonUrl,cameraCount:0,pointCount:0,matchedPercentage:0}));
 add('GET','/api/v1/terra/tasks/:taskId/images',async c=>{const r=await call('getReconstructionImages',c.params.taskId);return r.list.map(i=>({id:i.imageId,name:i.fileName,url:`/api/v1/terra/media/image/${c.params.taskId}/${i.imageId}`}));});
 add('GET','/api/v1/terra/folders',async()=>{
   const folders=new Map();let start=0;
   for(let page=0;page<200;page++){const r=await b.call('MediaServiceModule','getMediaFilesList',{startIndex:start,pageSize:100});
     for(const i of r.list||[]){if(!/^\d+$/.test(i.filePath)||Number(i.filePath)>2147483647)continue;const id=Number(i.filePath);if(!folders.has(id)){let name=null;try{name=(await b.call('MediaServiceModule','getMediaFileDetailById',id)).name;}catch{}folders.set(id,{folderId:id,folderUuid:null,folderName:name});}}
     if(!r.list?.length||r.nextIndex<=0||r.nextIndex>=r.total)break;start=Math.max(r.nextIndex,start+r.list.length);
   }
   return [...folders.values()].sort((a,b)=>a.folderName===null?1:b.folderName===null?-1:a.folderName.localeCompare(b.folderName));
 });
 for(const [part,field] of [['thumb','thumbnailUrl'],['preview','previewUrl']])add('GET',`/api/v1/terra/media/${part}/:fileId`,async c=>proxy(c,(await detail(c.params.fileId))[field]));
 add('GET','/api/v1/terra/media/image/:taskId/:imageId',async c=>{const r=await call('getReconstructionImages',c.params.taskId),i=r.list.find(i=>i.imageId===c.params.imageId);await proxy(c,i?.originImageUrl||i?.thumbnailImageUrl);});
 add('GET','/api/v1/terra/media/report/:taskId',async c=>proxy(c,(await call('getQualityReport',c.params.taskId,'zh','metric')).qualityReportUrl));
 add('GET','/api/v1/terra/tiles/:fileId/download',async c=>proxy(c,(await detail(c.params.fileId)).url));
 add('GET','/api/v1/terra/tiles/:fileId/:rest*',async c=>{
   if(c.params.rest.split('/').some(p=>p==='..'||p==='.')||c.params.rest.includes('\\')||c.params.rest.startsWith('/')||/%(?:2e|2f|5c|25)/i.test(c.params.rest))throw new HttpError(400,'Invalid tile path');
   const d=await detail(c.params.fileId),url=new URL(d.url),bucket='/file-storage-privatization/';const index=url.pathname.indexOf(bucket);if(index<0)throw new HttpError(502,'Unsupported storage bucket');
   url.pathname=url.pathname.slice(0,index+bucket.length)+d.filePrefix.replace(/^\//,'').replace(/\/?$/,'/')+c.params.rest;url.search='';await proxy(c,url.href);
 });
 const streams=new Set();let eventModule,eventId=-1;
 add('GET','/api/v1/terra/tasks/events',c=>{
   if(!b.sdk.isNotificationConnected())throw new HttpError(503,'通知服务未连接');
   if(eventId<0){eventModule=b.module('TerraBuildModule');eventId=eventModule.listenReconstructionStatusChanged(r=>{const data=`data: ${JSON.stringify(task(r.uuid,r))}\n\n`;for(const res of streams){if(res.writableLength>1024*1024){res.destroy();streams.delete(res);}else res.write(data);}});if(eventId<0)throw new HttpError(503,'无法订阅重建事件');}
   c.res.setHeader('Content-Type','text/event-stream');c.res.setHeader('Cache-Control','no-cache');c.res.flushHeaders();streams.add(c.res);const timer=setInterval(()=>c.res.write(': heartbeat\n\n'),15000);timer.unref();
   c.res.on('close',()=>{clearInterval(timer);streams.delete(c.res);if(!streams.size&&eventId>=0){eventModule.cancelListenReconstructionStatusChanged(eventId);eventId=-1;}});
 });
 let offline={status:'IDLE',progress:0,message:'就绪'},offlineStarted=0,offlineTimer;
 const safety=(method,...args)=>b.call('SafetyServiceModule',method,...args);
 add('GET','/api/v1/offline-maps/model-info',async()=>{const r=await safety('getOfflineMapsModelInfo');return {disabled:r.disable,version:r.offlineMap?.models?.[0]?.uuid?.slice(0,8)||'unknown',updateTime:epoch(r.offlineMap?.updatedTime)||epoch(Date.now()),dataDescription:'DJI 上云API 2 全球高程地图'};});
 add('PUT','/api/v1/offline-maps/enabled',async c=>{const v=await c.body();if(typeof v.enabled!=='boolean'){c.res.statusCode=400;return;}await safety('setOfflineMaps',{offlineMapEnable:v.enabled});});
 const active=()=>['WAITING','PROCESSING'].includes(offline.status);
 const pollOffline=async()=>{
   if(!active())return;
   try{if(Date.now()-offlineStarted>300000){offline={status:'TIMEOUT',progress:offline.progress,message:'更新超时'};return;}
     const r=await safety('getOfflineMapsModelInfo');if(!active())return;const m=r.offlineMap||{};
     if(m.status==='finish')offline={status:'FINISH',progress:100,message:'更新完成'};
     else if(m.status==='fail')offline={status:'FAIL',progress:offline.progress,message:`更新失败: SDK result=${m.result}`};
     else if(m.status==='updating')offline={status:'PROCESSING',progress:Math.min(99,m.percent||0),message:`正在更新 ${Math.min(99,m.percent||0)}%`};
   }catch{if(active())offline={status:'FAIL',progress:offline.progress,message:'更新状态查询失败'};}
   finally{if(active()){offlineTimer=setTimeout(pollOffline,2000);offlineTimer.unref();}}
 };
 add('POST','/api/v1/offline-maps/update',async()=>{
   if(active())throw new HttpError(409,'更新正在进行中');offline={status:'WAITING',progress:0,message:'服务准备中...'};
   try{const r=await safety('getOfflineMapsModelInfo');if(!r.offlineMap?.models?.length){offline={status:'IDLE',progress:0,message:'就绪'};throw new HttpError(422,'当前环境无可用地形模型数据');}const items=r.offlineMap.models.map(i=>({uuid:i.uuid}));await safety('updateOfflineMapsModelInfo',{model3dItems:items,model2dItems:items});offlineStarted=Date.now();offlineTimer=setTimeout(pollOffline,2000);offlineTimer.unref();return {message:'更新已触发'};
   }catch(e){if(active())offline={status:'FAIL',progress:0,message:'更新失败'};throw e;}
 });
 add('GET','/api/v1/offline-maps/update-status',()=>offline);
 add('DELETE','/api/v1/offline-maps/update',async c=>{if(!active()){c.res.statusCode=409;return;}await safety('cancelOfflineMapsModelInfo');clearTimeout(offlineTimer);offline={status:'CANCEL',progress:offline.progress,message:'已取消'};});
 add('POST','/api/v1/offline-maps/update-reset',()=>{if(!active())offline={status:'IDLE',progress:0,message:'就绪'};});
 return ()=>{clearTimeout(offlineTimer);for(const res of streams)res.end();streams.clear();if(eventId>=0){eventModule.cancelListenReconstructionStatusChanged(eventId);eventId=-1;}};
}
