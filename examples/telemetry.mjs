import {runSdk} from './common.mjs';
await runSdk(async ({drone,listen,hold,required,print})=>{
 const osd=required((await drone()).getDroneOsdModule(),'DroneOsdModule');
 for(const [event,suffix] of [['location','Location'],['battery','BatteryInfo'],['attitude','Attitude'],['speed','Speed']])listen(osd,'listenAircraft'+suffix,'cancelListenAircraft'+suffix,value=>print({event,value}));
 await hold();
});
