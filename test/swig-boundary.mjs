// Reference bridge for the handful of SWIG helper structs. These rules are taken
// from official flight_hub_sdk.i, not from the Node runtime conversion functions.
// The Java oracle intercepts above this C++ glue, so the report names this boundary.
import {DTO_SCHEMA} from '../dist/dto-schema.js';
const key=s=>s.replaceAll('_','').toLowerCase();
function helper(type,jp){
 if(type.startsWith('std::optional<'))return jp==null?null:helper(type.slice(14,-1),jp);
 if(type.startsWith('std::vector<'))return (jp??[]).map(v=>helper(type.slice(12,-1),v));
 const s=DTO_SCHEMA[type];if(!s)return jp;
 const out={};
 for(const [field,t]of Object.entries(s.fields)){
  const source=Object.keys(jp??{}).find(k=>key(k)===key(field));
  const flag=Object.keys(jp??{}).find(k=>key(k)===key(field+'Set'));
  const use=Object.keys(jp??{}).find(k=>key(k)===key('use'+field));
  let v=source===undefined?undefined:jp[source];
  if(flag&&!jp[flag]||use&&!jp[use])v=undefined;
  if(type==='CreateReconstructionParams'&&field==='qualityReportSetting')v=jp.qualityReportLanguage?{language:jp.qualityReportLanguage,measureUnitSystem:jp.qualityReportMeasureUnitSystem||'metric'}:undefined;
  if(type==='ElementResourceContent'&&field==='mediaResources')v={images:jp.images};
  if((type==='CreateReconstructionParams'||/^ReconParameter/.test(type))&&t.startsWith('std::optional<')){
   if(t==='std::optional<std::string>'&&!v)v=undefined;
   if(field==='generateModelFormats'&&!v?.length)v=undefined;
   if(field==='predefineArea'&&!v?.polygonPoints?.length)v=undefined;
   if(/GeoDesc$/.test(field)&&!v?.csType)v=undefined;
  }
  out[field]=v===undefined&&t.startsWith('std::optional<')?null:helper(t,v);
 }
 return out;
}
export function nativeArguments(c,m){
 let calls=structuredClone(c.calls.map(x=>x.args));
 if(c.module==='CustomSEIModule')return calls.map(a=>a.slice(0,m.cppArgs.filter(a=>!a.output).length));
 if(c.module==='TerraBuildModule'&&c.method==='createPanorama')return calls.map(([name,folderUuids,wkt,isShownOnMap])=>[{name,folderUuids,wkt:wkt||'',isShownOnMap:isShownOnMap?true:null}]);
 const helpers=new Set(['ElementModule.updateElement','ElementModule.listElementHierarchy','TerraBuildModule.createReconstruction','TerraBuildModule.uploadModelCallback','TerraBuildModule.renameModel','TerraBuildModule.showModelOnMap']);
 if(helpers.has(c.module+'.'+c.method))calls=calls.map(a=>a.map((v,i)=>helper(m.cppArgs[i].type,v)));
 return calls;
}
export function nativeCallback(c,values){
 if(c.module==='DrcModule'&&['connectDrcLink','disconnectDrcLink'].includes(c.method))return [values[0].errorCode];
 if(c.module==='TerraBuildModule'&&c.method==='getModelDetail'){
  const flat=values[1],nested={};
  for(const [name,field]of Object.entries(DTO_SCHEMA.TerraModelDetailResult.map)){
   if(!field.path||!(name in flat))continue;
   const path=field.path.split('.');let at=nested;for(const p of path.slice(0,-1))at=at[p]??=( {} );at[path.at(-1)]=flat[name];
  }
  return [values[0],nested];
 }
 return values;
}
