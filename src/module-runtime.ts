// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import type {NativeBinding,NativeHandle} from './types.js';
import {JAVA_CONTRACT, type JavaMethod} from './java-contract.js';
import {MODULE_RETURNS} from './generated.js';
import {toJava,fromJava} from './dto-compat.js';
import {JAVA_ENUMS} from './dto-schema.js';
import {FlightHubSdkErrorCode} from './types.js';

function choose(methods: readonly JavaMethod[], name:string, args:unknown[]):JavaMethod {
  const candidates=methods.filter(m=>m.name===name&&m.params.length===args.length);
  if(candidates.length===1)return candidates[0];
  const found=candidates.find(m=>m.params.every((p,i)=>{
    if(/(?:List|Collection)</.test(p.type))return Array.isArray(args[i]);
    if(/^(?:int|long|double|float|short|byte)$/.test(p.type))return typeof args[i]==='number'||typeof args[i]==='bigint';
    if(p.type==='String')return typeof args[i]==='string'||args[i]==null;
    return true;
  }));
  if(!found)throw new TypeError(`No Java overload for ${name} with ${args.length} arguments`);
  return found;
}
function argumentsFor(type:string,m:JavaMethod,args:unknown[],sn:string):unknown[]{
  if(type==='FlightSettingsModule')return [sn,...args];
  if(type==='DrcModule'&&m.name==='drcRtcQualityTest')return [{},...args];
  if(type==='AIBoxModule'&&m.name==='uploadAIBoxFile'){
    const [filePath,deviceSn,boxSn,cb]=args;return [{filePath,deviceSn,boxSn},cb];
  }
  if(type==='CameraControlModule'&&m.name==='drcResetGimbal'&&args.length===3){const [payloadIndex,resetMode,cb]=args;return [{payloadIndex,resetMode},cb];}
  const packing:Record<string,{count:number;start:number;fields:string[]}>= {
    'MediaServiceModule.getMediaFilesList':{count:8,start:0,fields:['flightId','startIndex','pageSize','fileTypes','deviceSn','startCreateTime','endCreateTime']},
    'TerraBuildModule.createPanorama':{count:5,start:0,fields:['name','folderUuids','wkt','isShownOnMap']},
    'FlightTaskRecordModule.exportFlightRecords':{count:9,start:1,fields:['contentType','fileName','timeZone','locale','fileType','flightTaskIds','metrics']},
    'FlightTaskRecordModule.getExportFlightRecordsProgress':{count:7,start:0,fields:['contentType','status','sort','page','pageSize','exportId']},
    'SafetyServiceModule.getCustomizedFlightAreas':{count:7,start:0,fields:['name','type','status','ids','pageIndex','pageSize']},
  };
  const pack=packing[type+'.'+m.name];
  if(pack&&args.length===pack.count)return [...args.slice(0,pack.start),Object.fromEntries(pack.fields.map((f,i)=>[f,args[pack.start+i]])),args.at(-1)];
  return args;
}

/** Java public method names are separate from C++ names and overloads. */
export function installModule(target:object,binding:NativeBinding,handle:NativeHandle,type:string,sn=''):void{
  const methods=JAVA_CONTRACT[type];if(!methods)throw new Error(`Unknown module ${type}`);
  const children=new Map<string,object>();
  for(const name of new Set(methods.map(m=>m.name))){
    if(name in target)continue;
    Object.defineProperty(target,name,{enumerable:true,value:(...args:unknown[])=>{
      const m=choose(methods,name,args);
      if(type==='PullStreamModule'&&name==='start'&&(args[0]==null||args[0]==='')){
        if(typeof args[1]==='function')args[1]({errorCode:FlightHubSdkErrorCode.ERROR_INVALID_PARAM,httpCode:0,serverCode:0,deviceCode:0,serverMessage:''});return;
      }
      if(type==='PullStreamModule'&&name==='subscribeStream'&&args[0]==null)return -1;
      if(type==='CustomSEIModule'&&args.some(v=>v==null))return name==='customSEIEncode'?[]:null;
      if(m.special){if(name==='getModule')return target;return binding.disposeModule(handle,type);}
      const nativeArgs=argumentsFor(type,m,args,sn);
      m.cppArgs.filter(a=>!a.output).forEach((a,i)=>nativeArgs[i]=fromJava(a.type,nativeArgs[i]));
      if(m.cppCallback){
        const cb=nativeArgs.at(-1);
        if(cb!=null&&typeof cb!=='function')throw new TypeError('callback must be a function or null');
        if(cb==null)nativeArgs[nativeArgs.length-1]=()=>{};
        else nativeArgs[nativeArgs.length-1]=(...values:unknown[])=>{
          if(type==='LiveModule'&&name==='subscribeLiveStream'){
            const data=values[0] as Uint8Array|null;if(!data||!values[1]||data.length===0||data.length>10*1024*1024)return;
          }
          values=values.map((v,i)=>toJava(m.cppCallback![i],v));
          if(type==='DiagnosisManagementModule'&&['getSelfDiagnosisReport','getSelfDiagnosisReportList'].includes(name))values.reverse();
          if((type==='FlightControlModule'&&['returnHome','returnHomeCancel'].includes(name))||(type==='CameraControlModule'&&name==='lookAtTarget'))values=[{...(values[0] as object),deviceCode:0}];
          if(type==='CameraControlModule'&&name==='listenDrcCameraModeAvailableRange')values=[(values[0] as number[]).map(v=>Object.values(JAVA_ENUMS.CameraMode.values).includes(v)?v:JAVA_ENUMS.CameraMode.fallback)];
          if((type==='PullStreamModule'&&name==='start')||(type==='DrcModule'&&['connectDrcLink','disconnectDrcLink'].includes(name)))values=[{errorCode:values[0],httpCode:0,serverCode:0,deviceCode:0,serverMessage:''}];
          if(typeof cb==='function')cb(...values);
        };
      }
      const result=binding.invokeModule(handle,type,m.cpp,nativeArgs);
      const childType=MODULE_RETURNS[type]?.[m.cpp];
      if(!childType||!result){
        if(type==='CustomSEIModule'&&name==='customSEIDecode'&&result){const r=result as {header:unknown;seiData:unknown};return {header:toJava('SeiHeader',r.header),seiData:toJava('std::vector<SeiItem>',r.seiData)};}
        return childType?result:toJava(m.cppReturn??'void',result);
      }
      const key=name+':'+JSON.stringify(args,(_,v)=>typeof v==='bigint'?String(v):v);
      let child=children.get(key);
      if(!child){child=createModule<object>(binding,result as NativeHandle,childType,sn);children.set(key,child);}
      return child;
    }});
  }
}
export function createModule<T=object>(binding:NativeBinding,handle:NativeHandle,type:string,sn=''):T{
  const result={};installModule(result,binding,handle,type,sn);return Object.freeze(result) as T;
}
