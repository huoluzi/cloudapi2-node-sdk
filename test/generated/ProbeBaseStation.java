// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeBaseStation extends IBaseStation { public ProbeBaseStation(){super();}
@Override public String getSn() {JavaApiOracle.record("BaseStation","getSn",new Object[]{});return "FIXTURE-SN";}
@Override public ILiveModule getLiveStream(LiveInfo params) {JavaApiOracle.record("BaseStation","getLiveStream",new Object[]{params});return new ProbeLiveModule();}
@Override public ILiveDeviceModule getLiveDeviceModule() {JavaApiOracle.record("BaseStation","getLiveDeviceModule",new Object[]{});return new ProbeLiveDeviceModule();}
@Override public IRtkCalibrationModule getRtkCalibrationModule() {JavaApiOracle.record("BaseStation","getRtkCalibrationModule",new Object[]{});return new ProbeRtkCalibrationModule();}
@Override public INetworkTestModule getNetworkTestModule() {JavaApiOracle.record("BaseStation","getNetworkTestModule",new Object[]{});return new ProbeNetworkTestModule();}
}
