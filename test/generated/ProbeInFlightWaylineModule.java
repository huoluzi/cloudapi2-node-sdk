// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeInFlightWaylineModule extends IInFlightWaylineModule { public ProbeInFlightWaylineModule(){super();}
@Override public void createInFlightWaylineTaskWrapper(CreateInFlightWaylineTaskParams params, CreateInFlightWaylineTaskCallback callback) {JavaApiOracle.record("InFlightWaylineModule","createInFlightWaylineTaskWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void controlInFlightWaylineTaskWrapper(InFlightWaylineControlAction action, ResultCallbackWithError callback) {JavaApiOracle.record("InFlightWaylineModule","controlInFlightWaylineTaskWrapper",new Object[]{action});JavaApiOracle.respond(callback);}
@Override public void getActiveInFlightWaylineTaskWrapper(GetActiveInFlightWaylineTaskCallback callback) {JavaApiOracle.record("InFlightWaylineModule","getActiveInFlightWaylineTaskWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public int listenInFlightWaylineProgressWrapper(InFlightWaylineProgressCallback callback) {JavaApiOracle.record("InFlightWaylineModule","listenInFlightWaylineProgressWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenInFlightWaylineProgressWrapper(int listen_id) {JavaApiOracle.record("InFlightWaylineModule","cancelListenInFlightWaylineProgressWrapper",new Object[]{listen_id});}
}
