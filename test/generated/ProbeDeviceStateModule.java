// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDeviceStateModule extends IDeviceStateModule { public ProbeDeviceStateModule(){super();}
@Override public int listenDockOnlineStatusWrapper(DockOnlineStatusCallback callback) {JavaApiOracle.record("DeviceStateModule","listenDockOnlineStatusWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockOnlineStatusWrapper(int listen_id) {JavaApiOracle.record("DeviceStateModule","cancelListenDockOnlineStatusWrapper",new Object[]{listen_id});}
@Override public int listenDroneOnlineStatusWrapper(DroneOnlineStatusCallback callback) {JavaApiOracle.record("DeviceStateModule","listenDroneOnlineStatusWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDroneOnlineStatusWrapper(int listen_id) {JavaApiOracle.record("DeviceStateModule","cancelListenDroneOnlineStatusWrapper",new Object[]{listen_id});}
}
