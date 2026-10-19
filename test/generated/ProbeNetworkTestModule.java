// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeNetworkTestModule extends INetworkTestModule { public ProbeNetworkTestModule(){super();}
@Override public void startNetworkTestWrapper(StartNetworkTestCallback callback) {JavaApiOracle.record("NetworkTestModule","startNetworkTestWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void stopNetworkTestWrapper(StopNetworkTestCallback callback) {JavaApiOracle.record("NetworkTestModule","stopNetworkTestWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void getNetworkTestProgressWrapper(GetNetworkTestProgressCallback callback) {JavaApiOracle.record("NetworkTestModule","getNetworkTestProgressWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public int subscribeNetworkTestProgressWrapper(SubscribeNetworkTestProgressCallback callback) {JavaApiOracle.record("NetworkTestModule","subscribeNetworkTestProgressWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void unsubscribeNetworkTestProgressWrapper(int listen_id) {JavaApiOracle.record("NetworkTestModule","unsubscribeNetworkTestProgressWrapper",new Object[]{listen_id});}
}
