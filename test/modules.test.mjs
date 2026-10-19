import {test} from 'node:test';import assert from 'node:assert/strict';
import {Workspace,DroneOsdModule} from '../dist/modules.js';
test('Java convenience overloads preserve parameter order and callback delivery',()=>{
 const calls=[],binding={getWorkspaceModule:()=>({}),invokeModule:(...args)=>calls.push(args)};
 let delivered;const ws=new Workspace(binding,{}),cb=(...args)=>{delivered=args;};
 ws.getMediaServiceModule().getMediaFilesList('flight',10,20,['2'],'drone',1000n,2000n,cb);
 assert.deepEqual(calls[0].slice(1,3),['MediaServiceModule','getMediaFilesList']);assert.deepEqual(calls[0][3][0],{flightId:'flight',startIndex:10,pageSize:20,fileTypes:['2'],deviceSn:'drone',startCreateTime:1000n,endCreateTime:2000n});
 calls[0][3][1](null,null);assert.deepEqual(delivered,[null,null]);
 ws.getTerraBuildModule().createPanorama('name',['folder'],'EPSG:4326',true,cb);
 assert.deepEqual(calls[1].slice(1,3),['TerraBuildModule','createPanorama']);assert.deepEqual(calls[1][3][0],{name:'name',folderUuids:['folder'],wkt:'EPSG:4326',isShownOnMap:true});
 const request={pageSize:5};ws.getMediaServiceModule().getMediaFilesList(request,cb);assert.deepEqual(calls[2][3][0],request);
});
test('location callbacks and int32 listener handles are checked before entering native code',()=>{
 const osd=new DroneOsdModule({cancelListenAircraftLocation(){throw new Error('native called');}},{});
 assert.throws(()=>osd.listenAircraftLocation(null),/callback/);assert.throws(()=>osd.cancelListenAircraftLocation(1.5),/int32/);assert.throws(()=>osd.cancelListenAircraftLocation(2**31),/int32/);
});
