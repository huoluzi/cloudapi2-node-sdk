// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeRtkCalibrationModule extends IRtkCalibrationModule { public ProbeRtkCalibrationModule(){super();}
@Override public void calibrationByNetworkWrapper(NetworkRtkCalibrationParams params, RtkCalibrationCallback callback) {JavaApiOracle.record("RtkCalibrationModule","calibrationByNetworkWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void calibrationByManualWrapper(ManulRtkCalibrationParams params, RtkCalibrationCallback callback) {JavaApiOracle.record("RtkCalibrationModule","calibrationByManualWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public int subscribeCalibrationProgressWrapper(SubscribeCalibrationProgressCallback callback) {JavaApiOracle.record("RtkCalibrationModule","subscribeCalibrationProgressWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void unsubscribeCalibrationProgressWrapper(int listen_id) {JavaApiOracle.record("RtkCalibrationModule","unsubscribeCalibrationProgressWrapper",new Object[]{listen_id});}
}
