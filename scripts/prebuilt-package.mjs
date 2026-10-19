import {readFile,lstat} from 'node:fs/promises';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
export const nativeNames=['cloudapi2_node.node','libcrypto.so.1.1','libdrpc.so','libdrtc_device_sdk.so','libpaho-mqtt3as.so.1','libssl.so.1.1','libwebsockets.so.12'];
export const nativePaths=nativeNames.map(n=>'native/linux-x64/'+n);
export const sourceArchive='third_party/libwebsockets-2.4.2.tar.gz';
export function isReleaseBinary(path){return nativePaths.includes(path)||path===sourceArchive;}
export async function verifyReleaseBinary(root,path,bytes){
 if(!isReleaseBinary(path))throw Error('Binary is not in the release allowlist: '+path);
 let entry;
 if(nativePaths.includes(path)){
  const m=JSON.parse(await readFile(join(root,'native/linux-x64/build-manifest.json'),'utf8'));
  const lock=JSON.parse(await readFile(join(root,'upstream.lock.json'),'utf8'));
  if(m.contractProbes!==false||m.binding?.bindingApiVersion!==4||m.platform!=='linux'||m.arch!=='x64'||m.upstream?.revision!==lock.revision)throw Error('Prebuilt manifest does not match the SDK');
  if(JSON.stringify(m.files.map(f=>f.name).sort())!==JSON.stringify([...nativeNames].sort()))throw Error('Incomplete native manifest');
  entry=m.files.find(f=>path.endsWith('/'+f.name));
  if(bytes.length<20||bytes.subarray(0,4).toString('hex')!=='7f454c46'||bytes[4]!==2||bytes[5]!==1||bytes.readUInt16LE(18)!==62)throw Error('Expected Linux x64 ELF: '+path);
 }else{
  const m=JSON.parse(await readFile(join(root,'third_party/sources.json'),'utf8'));
  entry=m.files.find(f=>f.path===path);
  if(bytes.subarray(0,2).toString('hex')!=='1f8b')throw Error('Expected gzip source archive');
 }
 if(!entry||bytes.length!==entry.bytes||createHash('sha256').update(bytes).digest('hex')!==entry.sha256)throw Error('Release file hash mismatch: '+path);
}
export async function verifyPrebuilt(root){
 for(const path of nativePaths){const full=join(root,path),stat=await lstat(full);if(!stat.isFile()||stat.isSymbolicLink())throw Error('Expected regular native file');await verifyReleaseBinary(root,path,await readFile(full));}
 return JSON.parse(await readFile(join(root,'native/linux-x64/build-manifest.json'),'utf8'));
}
