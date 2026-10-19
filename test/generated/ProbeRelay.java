// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeRelay extends IRelay { public ProbeRelay(){super();}
@Override public String getSn() {JavaApiOracle.record("Relay","getSn",new Object[]{});return "FIXTURE-SN";}
@Override public IRelayControlModule getRelayControlModule() {JavaApiOracle.record("Relay","getRelayControlModule",new Object[]{});return new ProbeRelayControlModule();}
@Override public IRtkCalibrationModule getRtkCalibrationModule() {JavaApiOracle.record("Relay","getRtkCalibrationModule",new Object[]{});return new ProbeRtkCalibrationModule();}
}
