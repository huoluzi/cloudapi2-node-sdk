// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFlyToPointModule extends IFlyToPointModule { public ProbeFlyToPointModule(){super();}
@Override public void unsubscribeFlyToDroneSelfPlanPath(int listen_id) {JavaApiOracle.record("FlyToPointModule","unsubscribeFlyToDroneSelfPlanPath",new Object[]{listen_id});}
@Override public void unsubscribeFlyToPointProgress(int listen_id) {JavaApiOracle.record("FlyToPointModule","unsubscribeFlyToPointProgress",new Object[]{listen_id});}
@Override public void startWrapper(FlyToPointParams params, FlyToPointStartCallback callback) {JavaApiOracle.record("FlyToPointModule","startWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void drcStopWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("FlyToPointModule","drcStopWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public int subscribeFlyToDroneSelfPlanPathWrapper(FlyToDroneSelfPlanPathCallback callback) {JavaApiOracle.record("FlyToPointModule","subscribeFlyToDroneSelfPlanPathWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public int subscribeFlyToPointProgressWrapper(FlyToPointProgressCallback callback) {JavaApiOracle.record("FlyToPointModule","subscribeFlyToPointProgressWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void updateTargetPointsWrapper(FlyToUpdateTargetPointsParams params, ResultCallbackWithError callback) {JavaApiOracle.record("FlyToPointModule","updateTargetPointsWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void unsubscribeFlyToDroneSelfPlanPathWrapper(int listen_id) {JavaApiOracle.record("FlyToPointModule","unsubscribeFlyToDroneSelfPlanPathWrapper",new Object[]{listen_id});}
@Override public void unsubscribeFlyToPointProgressWrapper(int listen_id) {JavaApiOracle.record("FlyToPointModule","unsubscribeFlyToPointProgressWrapper",new Object[]{listen_id});}
@Override public int listenFlyToTaskEventWrapper(FlyToTaskEventCallback callback) {JavaApiOracle.record("FlyToPointModule","listenFlyToTaskEventWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenFlyToTaskEventWrapper(int listen_id) {JavaApiOracle.record("FlyToPointModule","cancelListenFlyToTaskEventWrapper",new Object[]{listen_id});}
}
