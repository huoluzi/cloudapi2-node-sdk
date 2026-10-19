// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDeviceHMSModule extends IDeviceHMSModule { public ProbeDeviceHMSModule(){super();}
@Override public int listenDeviceHMSWrapper(HmsDataCallback callback) {JavaApiOracle.record("DeviceHMSModule","listenDeviceHMSWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDeviceHMSWrapper(int listen_id) {JavaApiOracle.record("DeviceHMSModule","cancelListenDeviceHMSWrapper",new Object[]{listen_id});}
}
