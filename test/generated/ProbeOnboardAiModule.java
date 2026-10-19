// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeOnboardAiModule extends IOnboardAiModule { public ProbeOnboardAiModule(){super();}
@Override public int listenAIDataInfoWrapper(AiDataInfoCallback callback) {JavaApiOracle.record("OnboardAiModule","listenAIDataInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenAIDataInfoWrapper(int listen_id) {JavaApiOracle.record("OnboardAiModule","cancelListenAIDataInfoWrapper",new Object[]{listen_id});}
@Override public void AIIdentifySetWrapper(AiIdentifySetParam param, ResultCallback callback) {JavaApiOracle.record("OnboardAiModule","AIIdentifySetWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void AIIdentifyFilterSetWrapper(AiIdentifyFilterSetParam param, ResultCallback callback) {JavaApiOracle.record("OnboardAiModule","AIIdentifyFilterSetWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void AIIdentifyScoreSetWrapper(AiIdentifyScoreSetParam param, ResultCallback callback) {JavaApiOracle.record("OnboardAiModule","AIIdentifyScoreSetWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void AIIdentifyScoreModeSetWrapper(AiIdentifyScoreModeSetParam param, ResultCallback callback) {JavaApiOracle.record("OnboardAiModule","AIIdentifyScoreModeSetWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void AIIdentifyScoreResetWrapper(AiIdentifyScoreResetParam param, ResultCallback callback) {JavaApiOracle.record("OnboardAiModule","AIIdentifyScoreResetWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void AIModelSelectWrapper(AiModelSelectParam param, ResultCallback callback) {JavaApiOracle.record("OnboardAiModule","AIModelSelectWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void DrcAISpotlightZoomSetWrapper(int on, ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAISpotlightZoomSetWrapper",new Object[]{on});JavaApiOracle.respond(callback);}
@Override public void DrcAISpotlightZoomSelectWrapper(AiSpotlightZoomSelectParams params, ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAISpotlightZoomSelectWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void DrcAISpotlightZoomConfirmWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAISpotlightZoomConfirmWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void DrcAISpotlightZoomStopWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAISpotlightZoomStopWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void DrcAISpotlightZoomTrackWrapper(int target_index, ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAISpotlightZoomTrackWrapper",new Object[]{target_index});JavaApiOracle.respond(callback);}
@Override public void DrcAIAlarmStartWrapper(AiAlarmStartParams params, ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAIAlarmStartWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void DrcAIAlarmStopWrapper(ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAIAlarmStopWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void DrcAIModelsConfigWrapper(AiModelsConfigParams params, ResultCallbackWithError callback) {JavaApiOracle.record("OnboardAiModule","DrcAIModelsConfigWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public int listenDrcAIAlarmStateWrapper(AiAlarmStateCallback callback) {JavaApiOracle.record("OnboardAiModule","listenDrcAIAlarmStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDrcAIAlarmStateWrapper(int listen_id) {JavaApiOracle.record("OnboardAiModule","cancelListenDrcAIAlarmStateWrapper",new Object[]{listen_id});}
}
