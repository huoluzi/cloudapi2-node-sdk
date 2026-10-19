// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeAIInsideManageModule extends IAIInsideManageModule { public ProbeAIInsideManageModule(){super();}
@Override public void getAIInsideModelsWrapper(GetAIInsideModelsCallback callback) {JavaApiOracle.record("AIInsideManageModule","getAIInsideModelsWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void getAIInsideModelDevicesWrapper(GetAIInsideModelDevicesParam param, GetAIInsideModelDevicesCallback callback) {JavaApiOracle.record("AIInsideManageModule","getAIInsideModelDevicesWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getAIInsideModelDevicesSummaryWrapper(GetAIInsideModelDevicesSummaryParam param, GetAIInsideModelDevicesSummaryCallback callback) {JavaApiOracle.record("AIInsideManageModule","getAIInsideModelDevicesSummaryWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void operateAIInsideModelWrapper(OperateAIInsideModelParam param, OperateAIInsideModelCallback callback) {JavaApiOracle.record("AIInsideManageModule","operateAIInsideModelWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void createAIInsideAlgorithmWrapper(CreateAIInsideAlgorithmParam param, CreateAIInsideAlgorithmCallback callback) {JavaApiOracle.record("AIInsideManageModule","createAIInsideAlgorithmWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void fileUploadAIInsideAlgorithmWrapper(FileUploadAIInsideAlgorithmParam param, FileUploadAIInsideAlgorithmCallback callback) {JavaApiOracle.record("AIInsideManageModule","fileUploadAIInsideAlgorithmWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void deleteAIInsideAlgorithmWrapper(DeleteAIInsideAlgorithmParam param, DeleteAIInsideAlgorithmCallback callback) {JavaApiOracle.record("AIInsideManageModule","deleteAIInsideAlgorithmWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void uploadAlgorithmFileWrapper(UploadAIInsideAlgorithmFileParam param, UploadAlgorithmFileCallback callback) {JavaApiOracle.record("AIInsideManageModule","uploadAlgorithmFileWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
}
