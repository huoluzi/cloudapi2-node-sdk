// Discover an online drone, listen for position, then cancel every listener.
import {runSdk} from './common.mjs';
await runSdk(async ({drone,listen,hold,required,print})=>{
 const osd=required((await drone()).getDroneOsdModule(),'DroneOsdModule');
 listen(osd,'listenAircraftLocation','cancelListenAircraftLocation',print);
 console.log('Listening; automatic cancellation after DURATION_SECONDS (default 15).');
 await hold();
});
