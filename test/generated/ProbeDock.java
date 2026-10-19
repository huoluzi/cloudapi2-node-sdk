// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDock extends IDock { public ProbeDock(){super();}
@Override public ILiveModule getLiveStream(LiveInfo params) {JavaApiOracle.record("Dock","getLiveStream",new Object[]{params});return new ProbeLiveModule();}
@Override public ILiveRecordModule getLiveRecord(LiveInfo params) {JavaApiOracle.record("Dock","getLiveRecord",new Object[]{params});return new ProbeLiveRecordModule();}
@Override public ILiveDeviceModule getLiveDeviceModule() {JavaApiOracle.record("Dock","getLiveDeviceModule",new Object[]{});return new ProbeLiveDeviceModule();}
@Override public IDockOsdModule getDockOsdModule() {JavaApiOracle.record("Dock","getDockOsdModule",new Object[]{});return new ProbeDockOsdModule();}
@Override public IDeployModule getDeployModule() {JavaApiOracle.record("Dock","getDeployModule",new Object[]{});return new ProbeDeployModule();}
@Override public IDockControlModule getDockControlModule() {JavaApiOracle.record("Dock","getDockControlModule",new Object[]{});return new ProbeDockControlModule();}
@Override public IRtkCalibrationModule getRtkCalibrationModule() {JavaApiOracle.record("Dock","getRtkCalibrationModule",new Object[]{});return new ProbeRtkCalibrationModule();}
@Override public INetworkTestModule getNetworkTestModule() {JavaApiOracle.record("Dock","getNetworkTestModule",new Object[]{});return new ProbeNetworkTestModule();}
@Override public IDeviceDebugModule getDeviceDebugModule() {JavaApiOracle.record("Dock","getDeviceDebugModule",new Object[]{});return new ProbeDeviceDebugModule();}
@Override public IDeviceStateModule getDeviceStateModule() {JavaApiOracle.record("Dock","getDeviceStateModule",new Object[]{});return new ProbeDeviceStateModule();}
@Override public IDeviceHMSModule getDeviceHMSModule() {JavaApiOracle.record("Dock","getDeviceHMSModule",new Object[]{});return new ProbeDeviceHMSModule();}
}
