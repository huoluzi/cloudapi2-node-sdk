// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import {fileURLToPath} from 'node:url';
/** Narrow, explicit workaround for the observed 3.3.7 DroneImpl teardown crash.
 * Never called against the official checkout. No protocol/command changes. */
async function patchDrone(path) {
  const root=resolve(path);
  await readFile(join(root,'.cloudapi2-node-stage'));
  const file=join(root,'src/bll/drone/drone_impl.cpp');
  let source=(await readFile(file,'utf8')).replaceAll('\r\n','\n');
  if(source.includes('// NODE-BINDING: destroy dependents before message engine'))return;
  const original=`    if (message_engine_) {
        message_engine_->destroy();
    }
    message_engine::MessageEngineFactory::destroyMessageEngine(message_engine_);
`;
  const start=source.indexOf('DroneImpl::~DroneImpl() {');
  const end=source.indexOf('\n}\n',start);
  const body=source.slice(start,end);
  if(!body.includes(original))throw new Error('Unexpected DroneImpl destructor; review patch before upgrading');
  // These members own managers whose destructors cancel transport subscriptions.
  const members=['live_device_module_','ai_box_module_','device_debug_module_','device_hms_module_','device_state_module_',
    'drone_osd_module_','camera_control_module_','psdk_control_module_','onboard_ai_module_','test_flight_module_',
    'flight_settings_module_','drc_module_','control_auth_module_','flight_control_module_','takeoff_module_',
    'in_flight_wayline_module_','poi_module_','fly_to_point_module_','flight_task_control_module_',
    'ai_ctrl_mgr_','psdk_ctrl_mgr_','payload_ctrl_mgr_','flight_ctrl_mgr_','drc_link_mgr_'];
  const replacement=body.replace(original,'')+'\n    // NODE-BINDING: destroy dependents before message engine\n'+
    members.map(s=>`    ${s}.reset();`).join('\n')+'\n'+original.trimEnd();
  source=source.slice(0,start)+replacement+source.slice(end);
  await writeFile(file,source);
}
async function patchExecutors(path) {
  const file=join(resolve(path),'deps/base/common/executors/executors.cc');
  let source=(await readFile(file,'utf8')).replaceAll('\r\n','\n');
  if(source.includes('// NODE-BINDING: join all producers before resetting executors'))return;
  const original=`void Executors::Shutdown() {
    if (main_) {
        main_->Stop();
        main_.reset();
    }
    if (compute_) {
        compute_->Stop();
        compute_.reset();
    }
    if (io_) {
        io_->Stop();
        io_.reset();
    }
}`;
  if(!source.includes(original))throw new Error('Unexpected Executors::Shutdown; review lifecycle patch');
  // In-flight IO completion calls Main()->Post. Main must remain a valid (stopped)
  // object until IO/Compute threads have joined. Stopped Post rejects late work.
  const replacement=`void Executors::Shutdown() {
    // NODE-BINDING: join all producers before resetting executors
    if (main_) main_->Stop();
    if (compute_) compute_->Stop();
    if (io_) io_->Stop();
    main_.reset();
    compute_.reset();
    io_.reset();
}`;
  await writeFile(file,source.replace(original,replacement));
}
async function patchShutdown(path){
  const file=join(resolve(path),'src/bll/flight_hub_sdk_impl.cpp');
  const source=(await readFile(file,'utf8')).replaceAll('\r\n','\n');
  if(source.includes('// NODE-BINDING: quiesce callbacks before destroying their owners'))return;
  const start=source.indexOf('FlightHubSdkErrorCode FlightHubSdkImpl::shutdown() {');
  const marker='    initialized_.store(false);';
  const at=source.indexOf(marker,start);
  const end=source.indexOf('FlightHubSdkConfig FlightHubSdkImpl::getConfig()',start);
  if(start<0||at<start||end<at)throw new Error('Unexpected SDK shutdown implementation; review callback quiescence patch');
  const extra=`

    // NODE-BINDING: quiesce callbacks before destroying their owners
    // WeakDummy guards do not own the manager. An in-flight Main callback can
    // already hold its dummy while shutdown destroys the manager's vectors.
    // Keep executor objects available for late IO Post() calls until the final
    // Executors::Shutdown below; stopped queues reject those calls.
    if (auto main = drc_sdk::common::Executors::Main()) main->Stop();
    if (auto compute = drc_sdk::common::Executors::Compute()) compute->Stop();
    if (auto io = drc_sdk::common::Executors::IO()) io->Stop();`;
  await writeFile(file,source.slice(0,at+marker.length)+extra+source.slice(at+marker.length));
}
export async function patchStagedSdk(path){await patchDrone(path);await patchExecutors(path);await patchShutdown(path);}
if(process.argv[1]&&resolve(process.argv[1])===resolve(fileURLToPath(import.meta.url)))await patchStagedSdk(process.argv[2]);
