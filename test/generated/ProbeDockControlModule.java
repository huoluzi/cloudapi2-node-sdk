// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDockControlModule extends IDockControlModule { public ProbeDockControlModule(){super();}
@Override public void changeDockCameraPositionWrapper(LiveInfo live_info, int camera_position, String gateway_sn, ResultCallbackWithError callback) {JavaApiOracle.record("DockControlModule","changeDockCameraPositionWrapper",new Object[]{live_info,camera_position,gateway_sn});JavaApiOracle.respond(callback);}
@Override public int listenDockAirConditionerStatusInfoWrapper(DockAirConditionerStatusInfoCallback callback) {JavaApiOracle.record("DockControlModule","listenDockAirConditionerStatusInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockAirConditionerStatusInfoWrapper(int listen_id) {JavaApiOracle.record("DockControlModule","cancelListenDockAirConditionerStatusInfoWrapper",new Object[]{listen_id});}
@Override public int listenDockSupplementLightStateWrapper(DockSupplementLightStateCallback callback) {JavaApiOracle.record("DockControlModule","listenDockSupplementLightStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockSupplementLightStateWrapper(int listen_id) {JavaApiOracle.record("DockControlModule","cancelListenDockSupplementLightStateWrapper",new Object[]{listen_id});}
@Override public void setDockSupplementLightStateWrapper(boolean state, ResultCallbackWithError callback) {JavaApiOracle.record("DockControlModule","setDockSupplementLightStateWrapper",new Object[]{state});JavaApiOracle.respond(callback);}
@Override public void setDockChargeStateWrapper(boolean state, ResultCallbackWithError callback) {JavaApiOracle.record("DockControlModule","setDockChargeStateWrapper",new Object[]{state});JavaApiOracle.respond(callback);}
@Override public void setDockCoverStateWrapper(int mode, ResultCallbackWithError callback) {JavaApiOracle.record("DockControlModule","setDockCoverStateWrapper",new Object[]{mode});JavaApiOracle.respond(callback);}
@Override public void setDockAirConditionerModeWrapper(int mode, ResultCallbackWithError callback) {JavaApiOracle.record("DockControlModule","setDockAirConditionerModeWrapper",new Object[]{mode});JavaApiOracle.respond(callback);}
}
