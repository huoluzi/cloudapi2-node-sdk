// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbePoiModule extends IPoiModule { public ProbePoiModule(){super();}
@Override public void enterWrapper(POIEnterParams params, PoiEnterCallback callback) {JavaApiOracle.record("PoiModule","enterWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void exitWrapper(PoiExitCallback callback) {JavaApiOracle.record("PoiModule","exitWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void updateSpeedWrapper(double speed, PoiUpdateSpeedCallback callback) {JavaApiOracle.record("PoiModule","updateSpeedWrapper",new Object[]{speed});JavaApiOracle.respond(callback);}
@Override public void getTaskWrapper(PoiGetTaskCallback callback) {JavaApiOracle.record("PoiModule","getTaskWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public int listenPoiTaskEventWrapper(PoiTaskEventCallback callback) {JavaApiOracle.record("PoiModule","listenPoiTaskEventWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenPoiTaskEventWrapper(int listen_id) {JavaApiOracle.record("PoiModule","cancelListenPoiTaskEventWrapper",new Object[]{listen_id});}
@Override public int listenFlightPoiProgressWrapper(FlightPoiProgressCallback callback) {JavaApiOracle.record("PoiModule","listenFlightPoiProgressWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenFlightPoiProgressWrapper(int listen_id) {JavaApiOracle.record("PoiModule","cancelListenFlightPoiProgressWrapper",new Object[]{listen_id});}
}
