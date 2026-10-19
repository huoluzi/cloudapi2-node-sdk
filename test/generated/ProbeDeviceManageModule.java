// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDeviceManageModule extends IDeviceManageModule { public ProbeDeviceManageModule(){super();}
@Override public int listenDeviceTopoChanged(SWIGTYPE_p_std__functionT_void_fflight_hub_sdk__DeviceTopoChange_const_RF_t callback) {JavaApiOracle.record("DeviceManageModule","listenDeviceTopoChanged",new Object[]{callback});return 73;}
@Override public void cancelListenDeviceTopoChanged(int listen_id) {JavaApiOracle.record("DeviceManageModule","cancelListenDeviceTopoChanged",new Object[]{listen_id});}
@Override public void getDeviceListWrapper(DeviceListCallback callback) {JavaApiOracle.record("DeviceManageModule","getDeviceListWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void getDeviceDetailInfoWrapper(String device_sn, GetDeviceDetailInfoCallback callback) {JavaApiOracle.record("DeviceManageModule","getDeviceDetailInfoWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);}
@Override public void modifyDeviceNameWrapper(ModifyDeviceNameParam device_list, ModifyDeviceNameCallback callback) {JavaApiOracle.record("DeviceManageModule","modifyDeviceNameWrapper",new Object[]{device_list});JavaApiOracle.respond(callback);}
@Override public void unbindDeviceWrapper(StringVector device_sns, ResultCallbackWithError callback) {JavaApiOracle.record("DeviceManageModule","unbindDeviceWrapper",new Object[]{device_sns});JavaApiOracle.respond(callback);}
@Override public int listenWorkspaceDeviceChangedWrapper(WorkspaceDeviceChangeCallback callback) {JavaApiOracle.record("DeviceManageModule","listenWorkspaceDeviceChangedWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenWorkspaceDeviceChangedWrapper(int listen_id) {JavaApiOracle.record("DeviceManageModule","cancelListenWorkspaceDeviceChangedWrapper",new Object[]{listen_id});}
@Override public int listenDeviceTopoChangedWrapper(DeviceTopoChangeCallback callback) {JavaApiOracle.record("DeviceManageModule","listenDeviceTopoChangedWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDeviceTopoChangedWrapper(int listen_id) {JavaApiOracle.record("DeviceManageModule","cancelListenDeviceTopoChangedWrapper",new Object[]{listen_id});}
@Override public void getDockDeviceStatusWrapper(StringVector device_sns, DockDeviceStatusListCallback callback) {JavaApiOracle.record("DeviceManageModule","getDockDeviceStatusWrapper",new Object[]{device_sns});JavaApiOracle.respond(callback);}
@Override public void getDroneDeviceStatusWrapper(StringVector device_sns, DroneDeviceStatusListCallback callback) {JavaApiOracle.record("DeviceManageModule","getDroneDeviceStatusWrapper",new Object[]{device_sns});JavaApiOracle.respond(callback);}
}
