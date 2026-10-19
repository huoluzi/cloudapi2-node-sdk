// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeTakeoffModule extends ITakeoffModule { public ProbeTakeoffModule(){super();}
@Override public void takeoffWrapper(TakeoffParams params, TakeoffResultCallback callback) {JavaApiOracle.record("TakeoffModule","takeoffWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public int listenCommandTaskEventWrapper(CommandTaskEventCallback callback) {JavaApiOracle.record("TakeoffModule","listenCommandTaskEventWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenCommandTaskEventWrapper(int listen_id) {JavaApiOracle.record("TakeoffModule","cancelListenCommandTaskEventWrapper",new Object[]{listen_id});}
@Override public int listenDroneCommanderFlightModeWrapper(DroneCommanderFlightModeCallback callback) {JavaApiOracle.record("TakeoffModule","listenDroneCommanderFlightModeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDroneCommanderFlightModeWrapper(int listen_id) {JavaApiOracle.record("TakeoffModule","cancelListenDroneCommanderFlightModeWrapper",new Object[]{listen_id});}
@Override public int listenDroneCurrentCommanderFlightModeWrapper(DroneCurrentCommanderFlightModeCallback callback) {JavaApiOracle.record("TakeoffModule","listenDroneCurrentCommanderFlightModeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDroneCurrentCommanderFlightModeWrapper(int listen_id) {JavaApiOracle.record("TakeoffModule","cancelListenDroneCurrentCommanderFlightModeWrapper",new Object[]{listen_id});}
@Override public int listenDroneCommanderModeLostActionWrapper(DroneCommanderModeLostActionCallback callback) {JavaApiOracle.record("TakeoffModule","listenDroneCommanderModeLostActionWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDroneCommanderModeLostActionWrapper(int listen_id) {JavaApiOracle.record("TakeoffModule","cancelListenDroneCommanderModeLostActionWrapper",new Object[]{listen_id});}
}
