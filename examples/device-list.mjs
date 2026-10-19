import {runSdk} from './common.mjs';
await runSdk(async ({devices,print})=>print(await devices()),{notification:false});
