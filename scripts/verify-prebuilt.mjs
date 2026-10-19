import {fileURLToPath} from 'node:url';
import {verifyPrebuilt} from './prebuilt-package.mjs';
import {createRequire} from 'node:module';
const root=fileURLToPath(new URL('..',import.meta.url));
const manifest=await verifyPrebuilt(root);
let nativeLoaded=false;
if(process.platform==='linux'&&process.arch==='x64'){
 const require=createRequire(import.meta.url);
 const {assertBinding}=require('../dist/loader.js');
 const binding=require('../native/linux-x64/cloudapi2_node.node');assertBinding(binding);
 if(binding.getVersion()!==manifest.sdkVersion)throw Error('SDK version mismatch');
 binding.shutdown();nativeLoaded=true;
}
console.log(JSON.stringify({status:'passed',files:manifest.files.length,buildOs:manifest.buildOs,node:process.version,nativeLoaded,scope:nativeLoaded?'hashes and native loading':'hashes only; native execution requires Linux x64'}));
