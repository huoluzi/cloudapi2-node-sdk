import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import {resolve,join} from 'node:path';
const glibc=process.report?.getReport().header.glibcVersionRuntime;
const supported = process.platform === 'linux' && process.arch === 'x64' && !!glibc;
const nodeSupported=[22,24].includes(Number(process.versions.node.split('.')[0]));
const tools = Object.fromEntries(['cmake', 'c++', 'ninja'].map(tool => {
  const result = spawnSync(tool, ['--version'], { encoding: 'utf8' });
  return [tool, result.status === 0 ? result.stdout.split('\n')[0] : null];
}));
const headers = process.env.NODE_INCLUDE_DIR ?? '/usr/include/node';
const sdk=resolve(process.env.CLOUDAPI2_SDK_ROOT||'../official-demo/sdk');
const required=['VERSION','CMakeLists.txt','src/api/flight_hub_sdk.h','third_party/libdrtc/lib/linux/x86_64/libdrtc_device_sdk.so','third_party/libdrtc/lib/linux/x86_64/libdrpc.so','third_party/libwebrtc/lib/linux/x86_64/libwebrtc.a'];
const missing=required.filter(p=>!existsSync(join(sdk,p)));
console.log(JSON.stringify({ node: process.version, platform: process.platform, arch: process.arch,
  nativeTargetSupported: supported, nodeSupported, glibc:glibc||null, nodeHeaders: existsSync(`${headers}/node_api.h`), tools,missingSdkFiles:missing }, null, 2));
if (!supported || !nodeSupported || missing.length || !tools.cmake || !tools['c++'] || !existsSync(`${headers}/node_api.h`)) process.exitCode = 1;
