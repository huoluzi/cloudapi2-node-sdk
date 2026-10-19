// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDiagnosisManagementModule extends IDiagnosisManagementModule { public ProbeDiagnosisManagementModule(){super();}
@Override public void createSelfDiagnosisWrapper(CreateSelfDiagnosisParams params, CreateSelfDiagnosisCallback callback) {JavaApiOracle.record("DiagnosisManagementModule","createSelfDiagnosisWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void operateSelfDiagnosisWrapper(OperateSelfDiagnosisParams params, OperateSelfDiagnosisCallback callback) {JavaApiOracle.record("DiagnosisManagementModule","operateSelfDiagnosisWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void getSelfDiagnosisReportWrapper(String report_uuid, GetSelfDiagnosisReportCallback callback) {JavaApiOracle.record("DiagnosisManagementModule","getSelfDiagnosisReportWrapper",new Object[]{report_uuid});JavaApiOracle.respond(callback);}
@Override public void getSelfDiagnosisReportListWrapper(GetSelfDiagnosisReportListParams params, GetSelfDiagnosisReportListCallback callback) {JavaApiOracle.record("DiagnosisManagementModule","getSelfDiagnosisReportListWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
}
