// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeLiveDeviceModule extends ILiveDeviceModule { public ProbeLiveDeviceModule(){super();}
@Override public int listenLiveAvailableRangeWrapper(LiveAvailableRangeCallback callback) {JavaApiOracle.record("LiveDeviceModule","listenLiveAvailableRangeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenLiveAvailableRangeWrapper(int listen_id) {JavaApiOracle.record("LiveDeviceModule","cancelListenLiveAvailableRangeWrapper",new Object[]{listen_id});}
@Override public void getAudienceCountWrapper(AudienceCountGroup group, GetAudienceCountCallback callback) {JavaApiOracle.record("LiveDeviceModule","getAudienceCountWrapper",new Object[]{group});JavaApiOracle.respond(callback);}
@Override public int listenDockLiveStatusWrapper(DockLiveStatusCallback callback) {JavaApiOracle.record("LiveDeviceModule","listenDockLiveStatusWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockLiveStatusWrapper(int listen_id) {JavaApiOracle.record("LiveDeviceModule","cancelListenDockLiveStatusWrapper",new Object[]{listen_id});}
@Override public int listenDockLiveCapacityWrapper(DockLiveCapacityCallback callback) {JavaApiOracle.record("LiveDeviceModule","listenDockLiveCapacityWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockLiveCapacityWrapper(int listen_id) {JavaApiOracle.record("LiveDeviceModule","cancelListenDockLiveCapacityWrapper",new Object[]{listen_id});}
}
