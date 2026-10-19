import {runSdk} from './common.mjs';
await runSdk(async ({drone,listen,hold,required,print})=>{
 const device=await drone();
 listen(required(device.getDeviceStateModule(),'DeviceStateModule'),'listenDroneOnlineStatus','cancelListenDroneOnlineStatus',value=>print({event:'online',value}));
 listen(required(device.getDeviceHMSModule(),'DeviceHMSModule'),'listenDeviceHMS','cancelListenDeviceHMS',value=>print({event:'hms',value}));
 console.log('Waiting for state/HMS changes; no output can mean no events were produced.');await hold();
});
