// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDrcModule extends IDrcModule { public ProbeDrcModule(){super();}
@Override public int listenLinkStatusWrapper(LinkStatusCallback callback) {JavaApiOracle.record("DrcModule","listenLinkStatusWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenLinkStatusWrapper(int listen_id) {JavaApiOracle.record("DrcModule","cancelListenLinkStatusWrapper",new Object[]{listen_id});}
@Override public void connectDrcLinkWrapper(ResultCallback callback) {JavaApiOracle.record("DrcModule","connectDrcLinkWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void disconnectDrcLinkWrapper(ResultCallback callback) {JavaApiOracle.record("DrcModule","disconnectDrcLinkWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void drcRtcQualityTestWrapper(RtcQualityTestParams params, ResultCallbackWithError callback) {JavaApiOracle.record("DrcModule","drcRtcQualityTestWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public int listenDrcDelayInfoWrapper(DrcDelayInfoCallback callback) {JavaApiOracle.record("DrcModule","listenDrcDelayInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDrcDelayInfoWrapper(int listen_id) {JavaApiOracle.record("DrcModule","cancelListenDrcDelayInfoWrapper",new Object[]{listen_id});}
@Override public int listenDrcCountDownInfoWrapper(DrcCountDownInfoCallback callback) {JavaApiOracle.record("DrcModule","listenDrcCountDownInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDrcCountDownInfoWrapper(int listen_id) {JavaApiOracle.record("DrcModule","cancelListenDrcCountDownInfoWrapper",new Object[]{listen_id});}
}
