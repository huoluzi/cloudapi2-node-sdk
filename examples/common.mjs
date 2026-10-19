import {FlightHubSDK as sdk} from '../dist/index.js';
import {liveConfig} from '../scripts/live-config.mjs';
import {mkdirSync} from 'node:fs';
export const print=value=>console.log(JSON.stringify(value,(_,v)=>typeof v==='bigint'?v.toString():v,2));
export function required(value,name){if(value==null)throw Error(name+' is unavailable');return value;}
export async function runSdk(action,{notification=true}={}){
 if(!process.env.CLOUDAPI2_CONFIG)throw Error('Set CLOUDAPI2_CONFIG to your private JSON config file');
 mkdirSync('.runtime',{recursive:true,mode:0o700});
 const {config,headers,wsHeaders}=liveConfig(process.env.CLOUDAPI2_CONFIG);
 const abort=new AbortController(),cleanups=[];
 const stop=()=>abort.abort();process.once('SIGINT',stop);process.once('SIGTERM',stop);
 function request(label,register,{errorFirst=true,timeoutMs=15000}={}){
  return new Promise((resolve,reject)=>{
   let done=false;
   const finish=(error,value)=>{if(done)return;done=true;clearTimeout(timer);abort.signal.removeEventListener('abort',cancel);error?reject(error):resolve(value);};
   const cancel=()=>finish(Error('Example interrupted'));
   const timer=setTimeout(()=>finish(Error(label+' timed out')),timeoutMs);
   abort.signal.addEventListener('abort',cancel,{once:true});
   if(abort.signal.aborted){cancel();return;}
   try{register((first,second)=>{
    const error=errorFirst?first:second,data=errorFirst?second:first;
    finish(error?.errorCode===0?null:Error(`${label}: sdk=${error?.errorCode}, http=${error?.httpCode}, server=${error?.serverCode}`),data);
   });}catch(error){finish(error);}
  });
 }
 function listen(module,method,cancel,callback=print){
  required(module,method+' module');const id=module[method](callback);if(id<0)throw Error(method+' failed: '+id);
  cleanups.push(()=>module[cancel](id));return id;
 }
 async function hold(){
  const seconds=Number(process.env.DURATION_SECONDS||15);
  if(!Number.isFinite(seconds)||seconds<1||seconds>3600)throw Error('DURATION_SECONDS must be between 1 and 3600');
  if(abort.signal.aborted)return;
  await new Promise(resolve=>{
   const finish=()=>{clearTimeout(timer);abort.signal.removeEventListener('abort',finish);resolve();};
   const timer=setTimeout(finish,seconds*1000);abort.signal.addEventListener('abort',finish,{once:true});
  });
 }
 async function devices(){
  const manager=required(sdk.getWorkspaceInstance()?.getDeviceManageModule(),'DeviceManageModule');
  return request('getDeviceList',cb=>manager.getDeviceList(cb),{errorFirst:false});
 }
 async function drone(){
  const all=(await devices()).flatMap(t=>[t.device,...(t.subDevices||[])]).filter(Boolean);
  const chosen=all.find(d=>d.deviceClass==='drone'&&d.online&&(!process.env.DEVICE_SN||d.deviceSn===process.env.DEVICE_SN));
  if(!chosen)throw Error('No matching online drone; set DEVICE_SN to an online device');
  return required(sdk.getDroneInstance(chosen.deviceSn),'Drone');
 }
 try{
  for(const [name,code] of [['HTTP headers',sdk.setHttpHeaders(headers)],['WebSocket headers',sdk.setWebSocketAuthHeaders(wsHeaders)]])if(code!==0)throw Error(name+' failed: '+code);
  const code=sdk.initialize(config);if(code!==0)throw Error('initialize failed: '+code);
  if(notification)await sdk.waitForNotificationConnection(30000);
  if(!abort.signal.aborted)await action({sdk,request,listen,hold,devices,drone,required,print});
 }finally{
  for(const cancel of cleanups.reverse())try{cancel();}catch(error){console.error('Listener cleanup failed:',error.message);}
  sdk.shutdown();process.removeListener('SIGINT',stop);process.removeListener('SIGTERM',stop);
 }
}
