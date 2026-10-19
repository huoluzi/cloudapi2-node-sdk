// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeLiveModule extends ILiveModule { public ProbeLiveModule(){super();}
@Override public void start(SWIGTYPE_p_std__functionT_void_fflight_hub_sdk__FlightHubErrorF_t callback) {JavaApiOracle.record("LiveModule","start",new Object[]{callback});}
@Override public void stop() {JavaApiOracle.record("LiveModule","stop",new Object[]{});}
@Override public void unSubscribeLiveStream(int listen_id) {JavaApiOracle.record("LiveModule","unSubscribeLiveStream",new Object[]{listen_id});}
@Override public void unSubscribeAiSeiInfo(int listen_id) {JavaApiOracle.record("LiveModule","unSubscribeAiSeiInfo",new Object[]{listen_id});}
@Override public void unSubscribeArSeiInfo(int listen_id) {JavaApiOracle.record("LiveModule","unSubscribeArSeiInfo",new Object[]{listen_id});}
@Override public void unSubscribeFovSeiInfo(int listen_id) {JavaApiOracle.record("LiveModule","unSubscribeFovSeiInfo",new Object[]{listen_id});}
@Override public void unSubscribeAssistantSeiInfo(int listen_id) {JavaApiOracle.record("LiveModule","unSubscribeAssistantSeiInfo",new Object[]{listen_id});}
@Override public void unSubscribeEisSeiInfo(int listen_id) {JavaApiOracle.record("LiveModule","unSubscribeEisSeiInfo",new Object[]{listen_id});}
@Override public void startWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("LiveModule","startWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void startWithURLWrapper(LiveStreamStartCallback callback) {JavaApiOracle.record("LiveModule","startWithURLWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void stopWithURLWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("LiveModule","stopWithURLWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public int subscribeLiveStreamWrapper(LiveStreamCallback callback) {JavaApiOracle.record("LiveModule","subscribeLiveStreamWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public int subscribeAiSeiInfoWrapper(AiSeiInfoCallback callback) {JavaApiOracle.record("LiveModule","subscribeAiSeiInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public int subscribeArSeiInfoWrapper(ArSeiInfoCallback callback) {JavaApiOracle.record("LiveModule","subscribeArSeiInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public int subscribeFovSeiInfoWrapper(FovSeiInfoCallback callback) {JavaApiOracle.record("LiveModule","subscribeFovSeiInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public int subscribeAssistantSeiInfoWrapper(AssistantSeiInfoCallback callback) {JavaApiOracle.record("LiveModule","subscribeAssistantSeiInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public int subscribeEisSeiInfoWrapper(EisSeiInfoCallback callback) {JavaApiOracle.record("LiveModule","subscribeEisSeiInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void setLiveQualityWrapper(LiveQualitySettingParams params, ResultCallbackWithError callback) {JavaApiOracle.record("LiveModule","setLiveQualityWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
}
