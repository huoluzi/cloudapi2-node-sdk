import {readFileSync,writeFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const mode=process.argv[2]||'live';
const node=JSON.parse(readFileSync(`audit/server-node-${mode}.json`,'utf8'));
const java=JSON.parse(readFileSync(`audit/server-java-${mode}.json`,'utf8'));
assert.equal(node.version,java.version,'SDK runtime versions differ');
const notificationBlocked=mode==='live'&&node.failure?.includes('Notification connection timeout');
if(!notificationBlocked)assert.equal(node.failure,undefined);assert.equal(java.failure,undefined);
const canonical=d=>d.map(t=>({...t,subDevices:t.subDevices.toSorted((a,b)=>a.deviceSn.localeCompare(b.deviceSn))})).toSorted((a,b)=>a.device.deviceSn.localeCompare(b.device.deviceSn));
assert.deepEqual(canonical(node.devices),canonical(java.devices));assert.deepEqual(node.error,java.error);
if(!notificationBlocked){assert.equal(node.callbacksAfterCancel,0);assert.equal(node.callbacksAfterImmediateCancel,0);assert.equal(node.staleHandleRejected,true);assert.equal(node.diagnostics.subscriptions,0);assert.equal(node.diagnostics.droppedCallbacks,'0');}
assert.equal(java.callbacksAfterCancel,0);
const values=d=>new Set(d.locations.map(l=>JSON.stringify(l.value)));
let intersection=[...values(node)].filter(v=>values(java).has(v)).length;
const telemetryProven=node.locations.length>0&&java.locations.length>0;
if(telemetryProven){
 assert.equal(node.droneSn,java.droneSn,'Both runtimes must observe the same drone');
 for(const runtime of [node,java])for(const sample of runtime.locations){
  assert.deepEqual(Object.keys(sample.value).sort(),['elevation','height','latitude','longitude']);
  assert(Object.values(sample.value).every(Number.isFinite),'Invalid location value');
 }
}
if(mode==='fixture'){assert(telemetryProven);assert(intersection>=5);}
const locationValuesMatched=telemetryProven&&intersection>0;
const out={mode,versions:[node.version,java.version],deviceTopologyEqual:true,errorFieldsEqual:true,
 locations:{node:node.locations.length,java:java.locations.length,identicalSamples:intersection},
 cancellationObserved:telemetryProven&&node.callbacksAfterCancel===0&&java.callbacksAfterCancel===0,
 cancellationProven:mode==='fixture'&&telemetryProven,
 cancellationEvidence:mode==='fixture'?'continuous fixture stream':'live cancellation observed; quiet source does not prove suppression of ongoing traffic',
 callbacksAfterCancel:telemetryProven?0:null,queuedCancellationSuppressed:node.callbacksAfterImmediateCancel===0,
 staleHandleRejected:node.staleHandleRejected??null,subscriptionsRemaining:node.diagnostics?.subscriptions??null,droppedCallbacks:node.diagnostics?.droppedCallbacks??null,
 locationValuesMatched,
 status:locationValuesMatched?'passed':telemetryProven?'location-values-not-matched':notificationBlocked?'device-list-passed; notification-connection-timeout':'device-list-passed; no-location-samples'};
writeFileSync(`audit/server-${mode}-comparison.json`,JSON.stringify(out,null,2));console.log(JSON.stringify(out,null,2));
if(mode==='live'&&!locationValuesMatched)process.exitCode=1;
