// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeAIAlertModule extends IAIAlertModule { public ProbeAIAlertModule(){super();}
@Override public void postDeviceSettingWrapper(PostAiAlertDeviceSettingParam param, PostAiAlertDeviceSettingCallback callback) {JavaApiOracle.record("AIAlertModule","postDeviceSettingWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getDeviceSettingWrapper(GetAiAlertDeviceSettingParam param, GetAiAlertDeviceSettingCallback callback) {JavaApiOracle.record("AIAlertModule","getDeviceSettingWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void postAlgorithmSettingWrapper(PostAiAlertAlgorithmSettingParam param, PostAiAlertAlgorithmSettingCallback callback) {JavaApiOracle.record("AIAlertModule","postAlgorithmSettingWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getAlgorithmSettingWrapper(GetAiAlertAlgorithmSettingParam param, GetAiAlertAlgorithmSettingCallback callback) {JavaApiOracle.record("AIAlertModule","getAlgorithmSettingWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getAiAlertFlightsWrapper(GetAiAlertFlightsParam param, GetAiAlertFlightsCallback callback) {JavaApiOracle.record("AIAlertModule","getAiAlertFlightsWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getAiAlertRecordsWrapper(GetAiAlertRecordsParam param, GetAiAlertRecordsCallback callback) {JavaApiOracle.record("AIAlertModule","getAiAlertRecordsWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
}
