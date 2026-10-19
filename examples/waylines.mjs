import {runSdk} from './common.mjs';
await runSdk(async ({sdk,request,required,print})=>{
 const module=required(sdk.getWorkspaceInstance()?.getWaylineManageModule(),'WaylineManageModule');
 print(await request('getWaylineList',cb=>module.getWaylineList({page:1,pageSize:20},cb)));
},{notification:false});
