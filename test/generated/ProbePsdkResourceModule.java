// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbePsdkResourceModule extends IPsdkResourceModule { public ProbePsdkResourceModule(){super();}
@Override public void getPsdkSpeakerResourceListWrapper(PsdkSpeakerResourceListCallback callback) {JavaApiOracle.record("PsdkResourceModule","getPsdkSpeakerResourceListWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void createPsdkSpeakerResourceWrapper(CreatePsdkSpeakerResourceParams params, PsdkSpeakerResourceCallback callback) {JavaApiOracle.record("PsdkResourceModule","createPsdkSpeakerResourceWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void editPsdkSpeakerResourceWrapper(EditPsdkSpeakerResourceParams params, PsdkSpeakerResourceCallback callback) {JavaApiOracle.record("PsdkResourceModule","editPsdkSpeakerResourceWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void deletePsdkSpeakerResourceWrapper(int resource_id, ResultCallbackWithError callback) {JavaApiOracle.record("PsdkResourceModule","deletePsdkSpeakerResourceWrapper",new Object[]{resource_id});JavaApiOracle.respond(callback);}
@Override public void getSTSWrapper(STSInfoCallback callback) {JavaApiOracle.record("PsdkResourceModule","getSTSWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void uploadSpeakerAudioFileWrapper(String file_path, STSInfo sts_info, ResultCallbackWithError callback) {JavaApiOracle.record("PsdkResourceModule","uploadSpeakerAudioFileWrapper",new Object[]{file_path,sts_info});JavaApiOracle.respond(callback);}
@Override public void getPsdkWidgetResourcesWrapper(GetPsdkWidgetResourceParams params, PsdkWidgetResourceListCallback callback) {JavaApiOracle.record("PsdkResourceModule","getPsdkWidgetResourcesWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
}
