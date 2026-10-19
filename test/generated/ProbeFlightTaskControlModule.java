// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFlightTaskControlModule extends IFlightTaskControlModule { public ProbeFlightTaskControlModule(){super();}
@Override public int listenWaylineTaskEventWrapper(WaylineTaskEventCallback callback) {JavaApiOracle.record("FlightTaskControlModule","listenWaylineTaskEventWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenWaylineTaskEventWrapper(int listen_id) {JavaApiOracle.record("FlightTaskControlModule","cancelListenWaylineTaskEventWrapper",new Object[]{listen_id});}
@Override public void pauseWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlightTaskControlModule","pauseWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void resumeWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlightTaskControlModule","resumeWrapper",new Object[]{});JavaApiOracle.respond(callback);}
}
