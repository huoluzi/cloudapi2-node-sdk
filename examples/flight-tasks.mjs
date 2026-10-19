import {runSdk} from './common.mjs';
await runSdk(async ({sdk,request,required,print})=>{
 const module=required(sdk.getWorkspaceInstance()?.getFlightTaskModule(),'FlightTaskModule');
 const taskType=Number(process.env.TASK_TYPE||0);
 if(!Number.isInteger(taskType)||taskType<0||taskType>2147483647)throw Error('TASK_TYPE must be a non-negative int32');
 print(await request('getFlightTaskList',cb=>module.getFlightTaskList({page:1,pageSize:20,taskType,sn:process.env.DEVICE_SN?[process.env.DEVICE_SN]:[]},cb)));
},{notification:false});
