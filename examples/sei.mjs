// Local codec example: loopback config, no credentials or physical device needed.
import {FlightHubSDK as sdk} from '../dist/index.js';
import {print,required} from './common.mjs';
import {mkdirSync} from 'node:fs';
mkdirSync('.runtime',{recursive:true,mode:0o700});
try{
 const code=sdk.initialize({address:'http://127.0.0.1',port:'9',notificationServerAddress:'ws://127.0.0.1:9',logToConsole:false,showVersionInfo:false,logLevel:'error',logFilePath:'.runtime/sei.log'});
 if(code!==0)throw Error('initialize failed: '+code);
 const sei=required(sdk.getStream()?.getCustomSEIModule(),'CustomSEIModule');
 const encoded=sei.customSEIEncode([0,0,0,1,101,136,132],[{dataType:1,customData:{data:[0,127,128,255]}}]);
 print({encodedBytes:encoded.length,decoded:sei.customSEIDecode(encoded)});
}finally{sdk.shutdown();}
