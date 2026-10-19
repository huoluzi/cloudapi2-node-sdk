// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { sdkCall } from './kernel.mjs';
import { HttpError } from './store.mjs';
export const epoch=value=>{
 if(value==null||value==='')return 0;
 if(typeof value==='bigint'||typeof value==='number'||/^[+-]?\d+$/.test(String(value).trim())){const n=Number(value);return Number.isFinite(n)?Math.trunc(n>=1e12?n/1000:n):0;}
 let s=String(value).trim();
 // A Go timestamp may carry both +0800 and CST. Trust the numeric offset;
 // Date.parse treats CST as US Central and otherwise silently adds 14 hours.
 const go=/^(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})(?:\.(\d{1,9}))? ([+-]\d{2})(\d{2})(?: [A-Z]{1,5})?$/.exec(s);
 if(go)s=`${go[1]}T${go[2]}.${(go[3]||'').padEnd(3,'0').slice(0,3)}${go[4]}:${go[5]}`;
 else if(/^\d{4}-\d{2}-\d{2}$/.test(s))s+='T00:00:00';
 else if(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}(\.\d+)?$/.test(s))s=s.replace(' ','T');
 const n=Date.parse(s);return Number.isFinite(n)?Math.floor(n/1000):0;
};
export const number=(v,fallback=0)=>v===null||v===undefined||v===''?fallback:Number(v);
export const bounded=(v,def=20,max=100)=>{const n=number(v,def);if(!Number.isFinite(n))throw new HttpError(400,'Invalid numeric query');return Math.min(max,Math.max(1,Math.trunc(n)));};
export const participating=t=>[0,2,3,6].includes(t.status)&&[3,4,5,6].includes(t.taskType)&&epoch(t.beginAt)>0;
export const endAt=t=>epoch(t.endAt)>epoch(t.beginAt)?epoch(t.endAt):epoch(t.beginAt)+Math.trunc(Math.max(0,Number(t.waylineDuration)||0))+100;
export const overlap=(a,b)=>a.sn===b.sn&&epoch(a.beginAt)<endAt(b)&&epoch(b.beginAt)<endAt(a);
const status=['CREATED','FAILED','EXECUTING','PAUSED','CANCELLED','SUCCESS','PAUSED','FAILED','FAILED','PREPARING','QUEUED'];
const waylineLabels={0:'航点航线',1:'面状航线',2:'斜面航线',3:'几何体航线',4:'带状航线',7:'贴近摄影航线',8:'AI 巡逻航线'};
export class Business {
  constructor(sdk,kernel){this.sdk=sdk;this.kernel=kernel;this.taskCache=null;this.taskCacheAt=0;}
  module(name){const ws=this.sdk.getWorkspaceInstance();return ws?.['get'+name]();}
  call(name,method,...args){return sdkCall(this.module(name),method,...args);}
  async waylines(q){
    const page=bounded(q.get('page'),1,100000),pageSize=bounded(q.get('page_size'));
    const r=await this.call('WaylineManageModule','getWaylineList',{page,pageSize,droneTypes:q.get('drone_type')?[q.get('drone_type')]:[],payloadTypes:q.get('payload_type')?[q.get('payload_type')]:[]});
    const items=r.list||r.items||[];const waylines=[];
    // At most four detail requests at a time, preserving bounded HTTP concurrency.
    for(let start=0;start<items.length;start+=4)waylines.push(...await Promise.all(items.slice(start,start+4).map(async item=>{
      let kmz=null;try{kmz=(await this.call('WaylineManageModule','getWaylineDetail',item.waylineUuid)).kmzData;}catch{}
      return {uuid:item.waylineUuid,name:item.waylineName,droneType:item.droneType,payloadType:item.payloadTypes?.[0]||'',waylineType:waylineLabels[item.waylineTypes?.[0]]||'未知类型',updatedAt:Math.floor(Number(item.updatedAt)/1000),waypointCount:kmz?.waylinePointCount??null,estimatedDistance:kmz?.distance==null?null:Math.round(kmz.distance)};
    })));
    waylines.sort((a,b)=>b.updatedAt-a.updatedAt);return {waylines,total:r.pagination?.total||0,page,pageSize};
  }
  async media(q){
    const startIndex=Math.max(0,number(q.get('start_index'))),pageSize=bounded(q.get('page_size'));
    const type=q.get('file_type');const r=await this.call('MediaServiceModule','getMediaFilesList',{deviceSn:q.get('device_sn')||'',fileTypes:type==='photo'?['2']:type==='video'?['3']:[],startIndex,pageSize,startCreateTime:epoch(q.get('start_time')),endCreateTime:epoch(q.get('end_time'))});
    return {files:(r.list||[]).map(i=>({fileId:i.fileId,fileName:i.fileName,fileType:/(jpg|jpeg|png|tiff|dng)$/i.test(i.suffix)?'photo':/(mp4|mov|avi)$/i.test(i.suffix)?'video':'other',fileSize:i.size,deviceSn:i.deviceSn,flightId:i.flightId,createTime:epoch(i.createdAt),payloadType:i.payloadType||''})),totalCount:r.total,startIndex,pageSize,hasMore:r.nextIndex>0&&r.nextIndex<r.total};
  }
  async allTasks(){
    if(this.taskCache&&Date.now()-this.taskCacheAt<5000)return this.taskCache;
    await this.kernel.list();const sn=this.kernel.gateways();if(!sn.length)return [];
    const byId=new Map();
    for(let taskType=0;taskType<=6;taskType++)for(let page=1;page<=100;page++){
      let r;try{r=await this.call('FlightTaskModule','getFlightTaskList',{page,pageSize:100,taskType,sn});}catch{break;} // Official Skeleton retains partial results when a task type is unsupported.
      for(const t of r.list||[])byId.set(t.uuid,t);
      if((r.list||[]).length<100||page*100>=(r.pagination?.total||0))break;
      if(page===100)throw new HttpError(502,'Task query exceeds supported pagination limit');
    }
    this.taskCache=[...byId.values()];this.taskCacheAt=Date.now();return this.taskCache;
  }
  taskDto(t){return {taskUuid:t.uuid,name:t.name,sn:t.sn,status:status[t.status]||'UNKNOWN',taskType:t.taskType,waylineUuid:t.waylineUuid,createdAt:epoch(t.createdAt),distanceMeters:0,minBatteryCapacity:t.minBatteryCapacity||0,isConflicted:false,isBreakPointResume:!!(t.isBreakPointResume??t.breakPointResume)};}
  async tasks(q){
    const all=await this.allTasks(),filter=q.get('status');const list=all.filter(t=>!filter||filter==='all'||status[t.status]===filter).map(t=>this.taskDto(t));
    for(const t of list){const original=all.find(x=>x.uuid===t.taskUuid);t.isConflicted=participating(original)&&all.some(o=>o.uuid!==original.uuid&&participating(o)&&overlap(original,o));}
    list.sort((a,b)=>b.createdAt-a.createdAt);const page=bounded(q.get('page'),1,100000),size=bounded(q.get('pageSize')),start=(page-1)*size;
    const tasks=list.slice(start,start+size);
    for(const t of tasks.filter(t=>t.status==='SUCCESS'))try{const r=await this.call('FlightTaskModule','getFlightTaskTrack',{taskUuid:t.taskUuid});t.distanceMeters=r.track?.flightDistance||0;}catch{}
    return {tasks,totalCount:list.length,hasMore:start+size<list.length};
  }
  async taskDetail(uuid){
    const t=await this.call('FlightTaskModule','getFlightTaskDetail',uuid);const device=await this.kernel.find(t.sn);let name=null;try{name=(await this.call('WaylineManageModule','getWaylineDetail',t.waylineUuid)).waylineName;}catch{}
    return {taskUuid:t.uuid,name:t.name,sn:t.sn,deviceName:device?.name||null,status:status[t.status]||'UNKNOWN',taskType:t.taskType,waylineUuid:t.waylineUuid,waylineName:name,beginAt:epoch(t.beginAt),endAt:epoch(t.endAt),rthAltitude:t.rthAltitude,rthMode:t.rthMode,outOfControlActionInFlight:t.outOfControlActionInFlight,waylinePrecisionType:t.waylinePrecisionType,minBatteryCapacity:t.minBatteryCapacity,isBreakPointResume:!!t.isBreakPointResume};
  }
  async writeTask(body,uuid){
    const name=typeof body.name==='string'?body.name.trim():'';if(!name)throw new HttpError(400,'任务名称不能为空');if(!body.sn?.trim())throw new HttpError(400,'设备 SN 不能为空');if(!body.wayline_uuid?.trim())throw new HttpError(400,'航线 UUID 不能为空');
    if(uuid){const t=await this.call('FlightTaskModule','getFlightTaskDetail',uuid);const reasons=[];if(t.status!==0)reasons.push('仅待执行状态的任务允许编辑');if(t.taskType===1)reasons.push('即时任务不支持编辑');if(t.taskType===7)reasons.push('试飞任务不支持编辑');if(t.isBreakPointResume)reasons.push('断点续飞任务不支持编辑');if(reasons.length){const e=new HttpError(400,reasons.join('；'));e.payload={code:'TASK_NOT_EDITABLE',message:e.message,reasons};throw e;}}
    const existing=await this.allTasks(),begin=number(body.begin_at),end=number(body.end_at),taskType=number(body.task_type);
    const candidate={sn:body.sn,beginAt:begin,endAt:end,waylineDuration:body.wayline_duration};
    if(begin>0&&[2,3,5].includes(taskType)&&existing.some(t=>t.uuid!==uuid&&participating(t)&&overlap(candidate,t)))throw new HttpError(400,'同一机场同一时间只能执行一个架次，请调整执行时间后重试。');
    if(existing.some(t=>t.name===name&&t.uuid!==uuid)){const e=new HttpError(400,`任务名称「${name}」已存在，请更换名称`);e.payload={code:'TASK_NAME_DUPLICATE',message:e.message};throw e;}
    const req={name,sn:body.sn,taskType,waylineUuid:body.wayline_uuid,rthAltitude:number(body.rth_altitude,100),timeZone:body.time_zone||'Asia/Shanghai',outOfControlActionInFlight:number(body.out_of_control_action_in_flight,1)};
    for(const [input,field] of Object.entries({begin_at:'beginAt',end_at:'endAt',rth_mode:'rthMode',wayline_precision_type:'waylinePrecisionType',min_battery_capacity:'minBatteryCapacity'}))if(body[input]!=null)req[field]=number(body[input]);
    if(body.resumable_status!=null)req.isBreakPointResume=body.resumable_status===1;
    if(!uuid&&body.wayline_duration!=null)req.waylineDuration=number(body.wayline_duration);
    const r=uuid?await this.call('FlightTaskModule','editFlightTask',uuid,{...req,uuid}):await this.call('FlightTaskModule','createFlightTask',req);
    this.taskCache=null;return {taskUuid:r.uuid||uuid};
  }
  async executions(uuid){
    const tasks=(await this.allTasks()).filter(t=>t.waylineUuid===uuid&&t.status===5);const executions=[];
    for(const t of tasks){const r=await this.call('MediaServiceModule','getMediaFilesList',{deviceSn:t.sn,fileTypes:['2'],startIndex:0,pageSize:100,startCreateTime:epoch(t.beginAt),endCreateTime:epoch(t.endAt)});const path=r.list?.[0]?.filePath;executions.push({id:t.uuid,name:t.name,photoCount:r.total,createdAt:epoch(t.createdAt),folderId:/^\d+$/.test(path)&&Number(path)<=2147483647?Number(path):null});}
    return {waylineUuid:uuid,waylineName:'',executions};
  }
}
