// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeAIBoxModule extends IAIBoxModule { public ProbeAIBoxModule(){super();}
@Override public void fetchAIBoxInfoWrapper(String device_sn, FetchAIBoxInfoCallback callback) {JavaApiOracle.record("AIBoxModule","fetchAIBoxInfoWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);}
@Override public void fetchFileDownloadUrlWrapper(FetchFileDownloadUrlParams params, FetchFileDownloadUrlCallback callback) {JavaApiOracle.record("AIBoxModule","fetchFileDownloadUrlWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void fetchAppListWrapper(FetchAppListParam param, FetchAppListCallback callback) {JavaApiOracle.record("AIBoxModule","fetchAppListWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void fetchAppListProgressWrapper(FetchAppListProgressParam param, FetchAppListProgressCallback callback) {JavaApiOracle.record("AIBoxModule","fetchAppListProgressWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void exportFileWrapper(ExportFileParam param, ExportFileCallback callback) {JavaApiOracle.record("AIBoxModule","exportFileWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void exportFileProgressWrapper(ExportFileProgressParam param, ExportFileProgressCallback callback) {JavaApiOracle.record("AIBoxModule","exportFileProgressWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void uploadAIBoxFileWrapper(UploadFileParam param, UploadAIBoxFileCallback callback) {JavaApiOracle.record("AIBoxModule","uploadAIBoxFileWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void installAppWrapper(InstallAppParam param, InstallAppCallback callback) {JavaApiOracle.record("AIBoxModule","installAppWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void installAppProgressWrapper(InstallAppProgressParam param, InstallAppProgressCallback callback) {JavaApiOracle.record("AIBoxModule","installAppProgressWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void operateAppWrapper(OperateAppParam param, OperateAppCallback callback) {JavaApiOracle.record("AIBoxModule","operateAppWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
}
