// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDrone extends IDrone { public ProbeDrone(){super();}
@Override public ILiveModule getLiveStream(LiveInfo params) {JavaApiOracle.record("Drone","getLiveStream",new Object[]{params});return new ProbeLiveModule();}
@Override public ILiveRecordModule getLiveRecord(LiveInfo params) {JavaApiOracle.record("Drone","getLiveRecord",new Object[]{params});return new ProbeLiveRecordModule();}
@Override public ILiveDeviceModule getLiveDeviceModule() {JavaApiOracle.record("Drone","getLiveDeviceModule",new Object[]{});return new ProbeLiveDeviceModule();}
@Override public ITakeoffModule getTakeoffModule() {JavaApiOracle.record("Drone","getTakeoffModule",new Object[]{});return new ProbeTakeoffModule();}
@Override public IFlightControlModule getFlightControlModule() {JavaApiOracle.record("Drone","getFlightControlModule",new Object[]{});return new ProbeFlightControlModule();}
@Override public IControlAuthModule getControlAuthModule() {JavaApiOracle.record("Drone","getControlAuthModule",new Object[]{});return new ProbeControlAuthModule();}
@Override public IDrcModule getDrcModule() {JavaApiOracle.record("Drone","getDrcModule",new Object[]{});return new ProbeDrcModule();}
@Override public IFlightSettingsModule getFlightSettingsModule() {JavaApiOracle.record("Drone","getFlightSettingsModule",new Object[]{});return new ProbeFlightSettingsModule();}
@Override public ITestFlightModule getTestFlightModule() {JavaApiOracle.record("Drone","getTestFlightModule",new Object[]{});return new ProbeTestFlightModule();}
@Override public IOnboardAiModule getOnboardAiModule() {JavaApiOracle.record("Drone","getOnboardAiModule",new Object[]{});return new ProbeOnboardAiModule();}
@Override public IPsdkControlModule getPsdkControlModule() {JavaApiOracle.record("Drone","getPsdkControlModule",new Object[]{});return new ProbePsdkControlModule();}
@Override public ICameraControlModule getCameraControlModule() {JavaApiOracle.record("Drone","getCameraControlModule",new Object[]{});return new ProbeCameraControlModule();}
@Override public IFlyToPointModule getFlyToPointModule() {JavaApiOracle.record("Drone","getFlyToPointModule",new Object[]{});return new ProbeFlyToPointModule();}
@Override public IFlightTaskControlModule getFlightTaskControlModule() {JavaApiOracle.record("Drone","getFlightTaskControlModule",new Object[]{});return new ProbeFlightTaskControlModule();}
@Override public IPoiModule getPoiModule() {JavaApiOracle.record("Drone","getPoiModule",new Object[]{});return new ProbePoiModule();}
@Override public IInFlightWaylineModule getInFlightWaylineModule() {JavaApiOracle.record("Drone","getInFlightWaylineModule",new Object[]{});return new ProbeInFlightWaylineModule();}
@Override public IDroneOsdModule getDroneOsdModule() {JavaApiOracle.record("Drone","getDroneOsdModule",new Object[]{});return new ProbeDroneOsdModule();}
@Override public IDeviceStateModule getDeviceStateModule() {JavaApiOracle.record("Drone","getDeviceStateModule",new Object[]{});return new ProbeDeviceStateModule();}
@Override public IDeviceHMSModule getDeviceHMSModule() {JavaApiOracle.record("Drone","getDeviceHMSModule",new Object[]{});return new ProbeDeviceHMSModule();}
@Override public IDeviceDebugModule getDeviceDebugModule() {JavaApiOracle.record("Drone","getDeviceDebugModule",new Object[]{});return new ProbeDeviceDebugModule();}
@Override public IAIBoxModule getAIBoxModule() {JavaApiOracle.record("Drone","getAIBoxModule",new Object[]{});return new ProbeAIBoxModule();}
}
