// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import {DTO_SCHEMA,JAVA_ENUMS,JAVA_BEANS} from './dto-schema.js';
const listResults:Record<string,string>={BatchDownloadWaylinesResult:'list',DockDeviceStatusResultList:'list',DroneDeviceStatusResultList:'list',FirmwareCompatibilityConfigResult:'data',FirmwareListResult:'list',FirmwareReleaseNoteListResult:'list',FirmwareStatusListResult:'list',FirmwareUpgradeProgressResult:'list'};
const simple=(t:string)=>t.replace(/com\.dji\.flighthubsdk\.(?:bean|value|generated)\./g,'').trim();
const get=(v:any,p:string)=>p.split('.').reduce((o,k)=>o?.[k],v);
const canonical=(s:string)=>s.replaceAll('_','').toLowerCase().replace('exchangge','exchange').replace('groud','ground');
const lookup=(v:any,key:string)=>Object.keys(v).find(k=>canonical(k)===canonical(key));
function typeAt(type:string,path:string):string|undefined{let current=type;for(const key of path.split('.')){current=DTO_SCHEMA[current]?.fields[key];if(!current)return undefined;}return current;}
function javaDefault(type:string):unknown{type=simple(type);if(type==='String')return '';if(type==='boolean'||type==='Boolean')return false;if(/^(byte|short|int|long|float|double|Integer|Long|Float|Double)$/.test(type))return type==='long'||type==='Long'?0n:0;if(/(?:List|Collection)</.test(type))return [];if(/Map</.test(type))return {};return null;}
export function toJava(type:string,value:any):any{
 if(value==null)return value;
 if(type==='std::vector<uint8_t>')return value;
 if(type.startsWith('std::vector<'))return Array.from(value,(v:any)=>toJava(type.slice(12,-1),v));
 if(type.startsWith('std::optional<'))return toJava(type.slice(14,-1),value);
 if(/^std::(?:unordered_map|map)</.test(type)){const inner=type.slice(type.indexOf(',')+1,-1).trim();return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,toJava(inner,v)]));}
 const schema=DTO_SCHEMA[type];if(!schema)return value;
 if(listResults[type]){const key=listResults[type];return toJava(schema.fields[key],value[key]??[]);}
 if(type==='LiveviewWorldRegion')return {payloadIndex:value.payloadIndex,worldRegion:{bottom:value.bottom,left:value.left,right:value.right,top:value.top}};
 if(type==='AircraftPayloadsCameraLiveviewWorldRegion')return {payloadsList:Object.entries(value.payloadsList??{}).map(([payloadIndex,region]:[string,any])=>({payloadIndex,region:{bottom:region.bottom,left:region.left,right:region.right,top:region.top}}))};
 if(type==='ReconPredefineArea')return {polygonPoints:(value.polygonPoints??[]).map((v:any)=>[v.lat,v.lng])};
 const out:any={};
 if(!schema.map){for(const [key,t]of Object.entries(schema.fields))if(key in value)out[key]=toJava(t,value[key]);return out;}
 for(const [key,m]of Object.entries(schema.map)){
  let v=m.path?get(value,m.path):undefined;
  const nativeType=m.path?typeAt(type,m.path):undefined;
  if(v===undefined)v=javaDefault(m.javaType);else if(nativeType)v=toJava(nativeType,v);
  const enumType=JAVA_ENUMS[simple(m.javaType)];if(enumType&&typeof v==='number'&&!Object.values(enumType.values).includes(v))v=enumType.fallback;
  out[key]=v;
 }
 if(type==='SeiItem'){const names:Record<number,string>={1:'customData',2:'detectionBox',3:'detectionPolygon',4:'textOverlay'};for(const key of Object.values(names))if(names[value.type]!==key)out[key]=null;}
 if(type==='WaylineDetailExtData'){out.contentLength=0n;out.elevationFileObjectKeys=[];out.modelFileObjectKeys=[];}
 return out;
}
export function fromJava(type:string,value:any):any{
 if(value==null){if(type.endsWith('*')||type.startsWith('std::optional<'))return null;if(type==='std::string')return '';if(type.startsWith('std::vector<'))return [];return value;}
 if(type.endsWith('*'))return fromJava(type.slice(0,-1),value);
 if(type.startsWith('std::vector<')){if(type==='std::vector<uint8_t>')return value;return value.map((v:any)=>fromJava(type.slice(12,-1),v));}
 if(type.startsWith('std::optional<'))return fromJava(type.slice(14,-1),value);
 if(/^std::(?:unordered_map|map)</.test(type)){const inner=type.slice(type.indexOf(',')+1,-1).trim();return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,fromJava(inner,v)]));}
 const schema=DTO_SCHEMA[type];if(!schema||typeof value!=='object')return value;
 if(type==='ReconPredefineArea')return {polygonPoints:(value.polygonPoints??[]).map((v:any)=>Array.isArray(v)?{lat:v[0],lng:v[1]}:v)};
 if(type==='CreateElementParams')value={...value,resource:{content:value.resourceContent,type:value.resourceType,remark:value.resourceRemark}};
 if(type==='DeviceRecommendationReq'&&value.hasFlyToPosition)value={...value,flyToPosition:{latitude:value.flyToLatitude,longitude:value.flyToLongitude,height:value.flyToHeight}};
 if(type==='ImportUnlockLicenseParam')value={...value,certUrl:typeof value.certUrl==='string'?[value.certUrl]:value.certUrl};
 if(type==='MediaUploadCallbackParams'&&value.file){value={...value,file:{...value.file}};delete value.file.ext;delete value.file.metadata;}
 if(type==='CreatePanoramaParams'){value={...value};if(!value.wkt)delete value.wkt;if(!value.isShownOnMap)delete value.isShownOnMap;}
 if(type==='CreateReconstructionParams')value={...value,qualityReportSetting:value.qualityReportLanguage?{language:value.qualityReportLanguage,measureUnitSystem:value.qualityReportMeasureUnitSystem||'metric'}:null};
 const out:any={};
 for(const [key,t]of Object.entries(schema.fields)){
  const alias=Object.entries(schema.map??{}).find(([,m])=>m.path===key)?.[0];
  const source=alias&&alias in value?alias:key in value?key:lookup(value,key);
  let supplied=source?value[source]:undefined;
  if(t.startsWith('std::optional<')){
   const flag=lookup(value,(source??key)+'Set');
   if(flag&&!value[flag])continue;
   if(type==='CreateReconstructionParams'||/^ReconParameter/.test(type)){
    const use=lookup(value,'use'+key);
    if(use&&!value[use])continue;
    if(t==='std::optional<std::string>'&&!supplied)continue;
    if(key==='generateModelFormats'&&!supplied?.length)continue;
    if(key==='predefineArea'&&!supplied?.polygonPoints?.length)continue;
    if(/GeoDesc$/.test(key)&&!supplied?.csType)continue;
   }
  }
  if(type==='SeiItem'&&['customData','detectionBox','detectionPolygon','textOverlay'].includes(key)&&({1:'customData',2:'detectionBox',3:'detectionPolygon',4:'textOverlay'} as Record<number,string>)[value.dataType??value.type]!==key)continue;
  if(key==='fastReconstruction'&&typeof supplied==='boolean')supplied=Number(supplied);
  if(t==='std::string'&&supplied!=null&&typeof supplied!=='string')supplied=String(supplied);
  if(supplied!==undefined&&supplied!==null)out[key]=fromJava(t,supplied);
 }
 return out;
}
