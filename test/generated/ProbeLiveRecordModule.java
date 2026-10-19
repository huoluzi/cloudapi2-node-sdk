// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeLiveRecordModule extends ILiveRecordModule { public ProbeLiveRecordModule(){super();}
@Override public void cancelListenRecordState(int listen_id) {JavaApiOracle.record("LiveRecordModule","cancelListenRecordState",new Object[]{listen_id});}
@Override public void startLiveRecordWrapper(String time_zone, ResultCallbackWithError callback) {JavaApiOracle.record("LiveRecordModule","startLiveRecordWrapper",new Object[]{time_zone});JavaApiOracle.respond(callback);}
@Override public void stopLiveRecordWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("LiveRecordModule","stopLiveRecordWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void getDeviceLiveRecordsWrapper(String device_sn, GetDeviceLiveRecordsCallback callback) {JavaApiOracle.record("LiveRecordModule","getDeviceLiveRecordsWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);}
@Override public int listenRecordStateWrapper(LiveRecordStateCallback callback) {JavaApiOracle.record("LiveRecordModule","listenRecordStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
}
