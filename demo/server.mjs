// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { resolve, join } from 'node:path';
import { mkdir } from 'node:fs/promises';
import { FlightHubSDK as sdk } from '../dist/index.js';
import { liveConfig } from '../scripts/live-config.mjs';
import { Store, Auth } from './store.mjs';
import { Kernel } from './kernel.mjs';
import { Business } from './business.mjs';
import { Router } from './http.mjs';
import { registerRoutes } from './routes.mjs';
import { registerAdvanced } from './advanced.mjs';
import { registerDashboard } from './dashboard.mjs';

const runtimeDir=resolve(process.env.NODE_DEMO_RUNTIME||'.runtime/demo');
await mkdir(runtimeDir,{recursive:true,mode:0o700});
const {config,headers,wsHeaders}=liveConfig(process.env.CLOUDAPI2_CONFIG||'.runtime/live-config.json');
config.logFilePath=join(runtimeDir,'sdk.log');
for(const code of [sdk.setHttpHeaders(headers),sdk.setWebSocketAuthHeaders(wsHeaders)])if(code!==0)throw new Error(`SDK authentication header setup failed: ${code}`);
const result=sdk.initialize(config);
if(result!==0)throw new Error(`SDK initialize failed: ${result}`);
const store=new Store(join(runtimeDir,'store.json')),auth=new Auth(store),kernel=new Kernel(sdk),business=new Business(sdk,kernel);
const router=new Router(auth,process.env.NODE_DEMO_WEB_ROOT||'.runtime/web');
const context={auth,store,kernel,business,runtimeDir,registrationEnabled:process.env.NODE_DEMO_REGISTRATION==='true'};
registerRoutes(router,context);const stopAdvanced=registerAdvanced(router,context);registerDashboard(router,context);
// Authentication material and raw SDK errors stay in the private runtime directory.
kernel.on('sdk-error',()=>console.error('Device refresh failed; retrying on next poll.'));
await kernel.refresh();kernel.start();
const server=router.createServer();
const host=process.env.NODE_DEMO_HOST||'127.0.0.1',port=Number(process.env.NODE_DEMO_PORT||8087);
server.requestTimeout=65000;
server.listen(port,host,()=>console.log(JSON.stringify({service:'cloudapi2-node-skeleton',host,port,sdk:sdk.getVersion(),notificationConnected:sdk.isNotificationConnected(),routes:router.routes.length})));
let stopping=false;
function close(){if(stopping)return;stopping=true;stopAdvanced();kernel.stop();server.close(()=>{sdk.shutdown();process.exitCode=0;});server.closeIdleConnections();const deadline=setTimeout(()=>{server.closeAllConnections();sdk.shutdown();process.exit(1);},10000);deadline.unref();}
process.on('SIGTERM',close);process.on('SIGINT',close);
