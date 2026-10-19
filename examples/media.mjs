import {runSdk} from './common.mjs';
await runSdk(async ({sdk,request,required,print})=>{
 const module=required(sdk.getWorkspaceInstance()?.getMediaServiceModule(),'MediaServiceModule');
 const params={startIndex:0,pageSize:20,...(process.env.DEVICE_SN?{deviceSn:process.env.DEVICE_SN}:{})};
 print(await request('getMediaFilesList',cb=>module.getMediaFilesList(params,cb)));
},{notification:false});
