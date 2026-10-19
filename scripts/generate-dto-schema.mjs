import {readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {sdk,clean,camel,structs} from './cpp-schema.mjs';
const javaRoot=join(sdk,'platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk');
const beans={},enums={};
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(join(dir,e.name)):e.name.endsWith('.java')?[join(dir,e.name)]:[]);}
for(const file of [...walk(join(javaRoot,'bean')),...walk(join(javaRoot,'value'))]){
 const s=clean(readFileSync(file,'utf8')),name=/public\s+(?:final\s+)?(?:class|enum)\s+(\w+)/.exec(s)?.[1];if(!name)continue;
 if(/public\s+enum/.test(s)){
  const values={};for(const m of s.matchAll(/\b(\w+)\s*\(\s*(-?(?:0x[0-9a-fA-F]+|\d+))\s*[,)]/g))values[m[1]]=Number(m[2]);
  const fallback=[...s.matchAll(/return\s+(\w+)\s*;/g)].at(-1)?.[1];enums[name]={values,fallback:values[fallback]??65535};continue;
 }
 const fields={};for(const m of s.matchAll(/\bprivate\s+(?:final\s+)?([\w.<>?, \[\]]+)\s+(\w+)\s*(?:=[^;]*)?;/g)){if(m[1].includes('static'))continue;fields[m[2]]=m[1].trim();}
 beans[name]=fields;
}
const aliases={AircraftAttitude:{head:'attitudeHead',pitch:'attitudePitch',roll:'attitudeRoll'},AircraftMaintainStatusInfo:{maintainStatuses:'maintainStatusInfo'},DockMaintainStatusInfo:{maintainStatusInfos:'maintainStatusInfo'},DockSubDeviceInfoList:{subDeviceInfos:'subDeviceInfoVec'},PsdkDeviceList:{deviceInfos:'psdkDeviceList'},CheckUnlockLicenseResult:{items:'list',errFileNames:'errFileName'},CreateDeviceLogReportResult:{createDeviceJobData:'creatDeviceJobData'},DeviceDetailInfo:{online:'deviceOnlineStatus'},SubDeviceInfo:{online:'deviceOnlineStatus'},DockStatusItemResult:{online:'onlineStatus'},DroneStatusItemResult:{online:'onlineStatus'},GetWaylineListResult:{items:'list'},HistoryHmsDataResultItem:{mongoId:'Id'},LiveInfo:{switchableLensTypeSwigValues:'switchableLensTypes'},LiveVideoInfo:{switchableVideoTypeSwigValues:'switchableVideoTypes',videoTypeSwig:'videoType'},ThermalGainModeInfo:{thermalGainModeSwig:'thermalGainMode'},POITaskInfo:{taskStatus:'status'},PanoramaStatus:{photoState:'status'},ElementGroupNode:{parentId:'pid'},SeiItem:{dataType:'type'},FlightCommanderHeightResult:{commanderFlightHeight:'settings.commanderFlightHeight'},FlightOutOfControlActionResult:{outOfControlAction:'settings.outOfControlAction'},FlightRthAltitudeResult:{rthAltitude:'settings.rthAltitude'},FlightSmartPlanModeResult:{smartPlanningMode:'settings.smartPlanningMode'},GetMediaFileDetailByIdResult:{extWidth:'ext.width',extHeight:'ext.height',photoPosition:'ext.photoPosition'}};
// Names that differ between the public Bean and native DTO.
const typeAliases={ListElementHierarchyResult:'ElementListHierarchyResult',UploadFileParam:'AIBoxUploadFileParam',UploadFileResults:'AIBoxUploadFileResults',InstallAppParam:'AIBoxInstallAppParam',InstallAppResult:'AIBoxInstallAppResult'};
Object.assign(typeAliases,{ConcatWaylineExtData:'WaylineDetailExtData',CreateReconstructionParams:'TerraBuildCreateReconstructionParams',ReconParameter2D:'TerraBuildParameter2D',ReconParameter3D:'TerraBuildParameter3D',ReconParameter3DGS:'TerraBuildParameter3DGS',ReconParameterLidar:'TerraBuildParameterLidar'});
aliases.ElementGroupInfo={parentId:'pid'};
const swig=clean(readFileSync(join(sdk,'platform/java/swig/flight_hub_sdk.i'),'utf8'));
aliases.TerraModelDetailResult=Object.fromEntries([...swig.matchAll(/jr\.(\w+)\s*=\s*r\.([\w.]+)\s*;/g)].map(m=>[camel(m[1]),m[2].split('.').map(camel).join('.')]));
const convertSource=clean(readFileSync(join(javaRoot,'internal/convert/FlightHubSdkConvert.java'),'utf8'));
for(const m of convertSource.matchAll(/(?:public|private)\s+static\s+(?:com\.dji\.flighthubsdk\.bean\.)?(\w+)\s+\w+\s*\(\s*com\.dji\.flighthubsdk\.generated\.(\w+)\s+\w+\s*\)/g))if(beans[m[1]])typeAliases[m[2]]=m[1];
const cpp={};for(const [type,def] of structs){cpp[type]=Object.fromEntries(def.fields.map(f=>[type==='Device'&&f.name==='is_online'?'online':camel(f.name),f.type]));}
const schemas={};
for(const [type,fields]of Object.entries(cpp)){
 const javaType=typeAliases[type]||type,java=beans[javaType];const map={};
 if(java)for(const [key,jtype]of Object.entries(java)){
  const canonical=s=>s.replaceAll('_','').toLowerCase().replace('exchangge','exchange').replace('groud','ground');
  const native=aliases[type]?.[key]??(key in fields?key:('is'+key[0].toUpperCase()+key.slice(1))in fields?'is'+key[0].toUpperCase()+key.slice(1):Object.keys(fields).find(k=>canonical(k)===canonical(key)));
  map[key]={path:native??null,javaType:jtype};
 }
 schemas[type]={fields,javaType,map:java?map:null};
}
writeFileSync('src/dto-schema.ts','// Generated from audited C++ DTOs and Java Bean declarations.\nexport const DTO_SCHEMA: Record<string,DtoSchema> = '+JSON.stringify(schemas)+';\nexport const JAVA_ENUMS: Record<string,{values:Record<string,number>;fallback:number}> = '+JSON.stringify(enums)+';\nexport const JAVA_BEANS: Record<string,Record<string,string>> = '+JSON.stringify(beans)+';\nexport interface DtoSchema {fields:Record<string,string>;javaType:string;map:Record<string,{path:string|null;javaType:string}>|null;}\n');
console.log(JSON.stringify({nativeStructs:Object.keys(cpp).length,javaBeans:Object.keys(beans).length,javaEnums:Object.keys(enums).length}));
