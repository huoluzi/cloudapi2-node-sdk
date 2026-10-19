// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFlightControlModule extends IFlightControlModule { public ProbeFlightControlModule(){super();}
@Override public void drcEmergencyStopWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcEmergencyStopWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void drcEmergencyLandingWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcEmergencyLandingWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void drcForceLandingWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcForceLandingWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void returnHomeWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","returnHomeWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void returnHomeCancelWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","returnHomeCancelWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void drcSendStickControlWrapper(StickControlData data) {JavaApiOracle.record("FlightControlModule","drcSendStickControlWrapper",new Object[]{data});}
@Override public void drcSetDroneHoverWrapper(int duration, ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcSetDroneHoverWrapper",new Object[]{duration});JavaApiOracle.respond(callback);}
@Override public void drcSetFollowMouseParameterWrapper(int speed, ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcSetFollowMouseParameterWrapper",new Object[]{speed});JavaApiOracle.respond(callback);}
@Override public void drcSetNightLightsStateWrapper(int night_lights_state, ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcSetNightLightsStateWrapper",new Object[]{night_lights_state});JavaApiOracle.respond(callback);}
@Override public void drcSetStealthStateWrapper(int stealth_state, ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcSetStealthStateWrapper",new Object[]{stealth_state});JavaApiOracle.respond(callback);}
@Override public void drcOpenParachuteWrapper(int force, ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcOpenParachuteWrapper",new Object[]{force});JavaApiOracle.respond(callback);}
@Override public void drcSetFlashLedWrapper(FlashLedParams params, ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcSetFlashLedWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void drcCameraLookAtWrapper(CameraLookAtParams params, ResultCallbackWithError callback) {JavaApiOracle.record("FlightControlModule","drcCameraLookAtWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public int listenDrcOsdInfoWrapper(DrcOsdInfoCallback callback) {JavaApiOracle.record("FlightControlModule","listenDrcOsdInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDrcOsdInfoWrapper(int listen_id) {JavaApiOracle.record("FlightControlModule","cancelListenDrcOsdInfoWrapper",new Object[]{listen_id});}
@Override public int listenDrcBatteriesInfoWrapper(DrcBatteriesInfoCallback callback) {JavaApiOracle.record("FlightControlModule","listenDrcBatteriesInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDrcBatteriesInfoWrapper(int listen_id) {JavaApiOracle.record("FlightControlModule","cancelListenDrcBatteriesInfoWrapper",new Object[]{listen_id});}
@Override public int listenDrcParachuteInfoWrapper(DrcParachuteInfoCallback callback) {JavaApiOracle.record("FlightControlModule","listenDrcParachuteInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDrcParachuteInfoWrapper(int listen_id) {JavaApiOracle.record("FlightControlModule","cancelListenDrcParachuteInfoWrapper",new Object[]{listen_id});}
@Override public int listenDrcFlashLedWrapper(FlashLedStateInfoCallback callback) {JavaApiOracle.record("FlightControlModule","listenDrcFlashLedWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDrcFlashLedWrapper(int listen_id) {JavaApiOracle.record("FlightControlModule","cancelListenDrcFlashLedWrapper",new Object[]{listen_id});}
}
