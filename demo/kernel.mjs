// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { EventEmitter } from 'node:events';
import { HttpError } from './store.mjs';
export function sdkCall(module,method,...args){
  if(!module||typeof module[method]!=='function')return Promise.reject(new HttpError(503,`SDK module unavailable: ${method}`));
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>reject(new HttpError(504,`${method} timeout`)),30000);
    try{module[method](...args,(error,data)=>{clearTimeout(timer);if(!error||error.errorCode!==0){const e=new HttpError(502,`${method}: ${error?.serverMessage||error?.errorCode||'missing result'}`);e.sdkError=error;reject(e);}else resolve(data);});}catch(e){clearTimeout(timer);reject(e);}
  });
}
export class Kernel extends EventEmitter {
  constructor(sdk){super();this.sdk=sdk;this.topologies=[];this.states=new Map();this.listeners=new Map();this.stopped=false;this.pending=null;this.lastRefresh=0;}
  async refresh(){
    if(this.pending)return this.pending;
    this.pending=new Promise((resolve,reject)=>{
      const module=this.sdk.getWorkspaceInstance()?.getDeviceManageModule();if(!module)return reject(new HttpError(503,'SDK 未初始化'));
      const timer=setTimeout(()=>reject(new HttpError(504,'getDeviceList timeout')),30000);
      module.getDeviceList((devices,error)=>{clearTimeout(timer);if(error.errorCode!==0)return reject(new HttpError(502,'getDeviceList: '+error.errorCode));
        if(this.stopped)return resolve();this.topologies=devices;this.lastRefresh=Date.now();const online=new Set();
        for(const topo of devices)for(const device of [topo.device,...topo.subDevices]){
          if(!device.online||device.deviceClass.toLowerCase()!=='drone')continue;online.add(device.deviceSn);
          if(this.listeners.has(device.deviceSn)||!this.sdk.isNotificationConnected())continue;
          const osd=this.sdk.getDroneInstance(device.deviceSn)?.getDroneOsdModule();if(!osd)continue;
          const id=osd.listenAircraftLocation(value=>{if(this.stopped)return;const now=new Date().toISOString();const last=this.states.get(device.deviceSn);const state={lastOsd:{attributes:{lat:value.latitude,lng:value.longitude,height:value.height,elevation:value.elevation,timestamp:Date.now()}},lastOsdAt:now,onlineSince:last?.onlineSince||now};this.states.set(device.deviceSn,state);this.emit('osd',{sn:device.deviceSn,...state});});
          if(id>=0)this.listeners.set(device.deviceSn,{osd,id});
        }
        for(const [sn,{osd,id}] of this.listeners)if(!online.has(sn)){osd.cancelListenAircraftLocation(id);this.listeners.delete(sn);}
        resolve();
      });
    }).finally(()=>{this.pending=null;});return this.pending;
  }
  async list(){if(Date.now()-this.lastRefresh>10000)await this.refresh();const mounted=new Set(this.topologies.flatMap(t=>t.subDevices.filter(d=>d.deviceSn!==t.device.deviceSn).map(d=>d.deviceSn)));return this.topologies.filter(t=>!mounted.has(t.device.deviceSn)).map(t=>this.state(t.device,t.subDevices));}
  state(d,children=[]){const types={drone:'DRONE',dock:'DOCK',airport:'DOCK',base_station:'BASE_STATION',relay:'RELAY',rc:'RC',remote_control:'RC'};const state=this.states.get(d.deviceSn);return {sn:d.deviceSn,deviceType:types[d.deviceClass.toLowerCase()]||'DRONE',model:d.modelKey,name:d.nickname||d.deviceName||d.deviceSn,online:d.online,lastOsd:state?.lastOsd||null,lastOsdAt:state?.lastOsdAt||null,recentHms:[],onlineSince:d.online?state?.onlineSince||null:null,childDevices:children.map(c=>this.state(c))};}
  async find(sn){const roots=await this.list();return roots.flatMap(r=>[r,...r.childDevices]).find(d=>d.sn===sn);}
  gateways(){return this.topologies.map(t=>t.device).filter(d=>['dock','airport','base_station','relay'].includes(d.deviceClass.toLowerCase())).map(d=>d.deviceSn);}
  start(){this.timer=setInterval(()=>this.refresh().catch(e=>this.emit('sdk-error',e)),10000);this.timer.unref();}
  stop(){this.stopped=true;clearInterval(this.timer);for(const {osd,id} of this.listeners.values())osd.cancelListenAircraftLocation(id);this.listeners.clear();}
}
