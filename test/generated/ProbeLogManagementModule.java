// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeLogManagementModule extends ILogManagementModule { public ProbeLogManagementModule(){super();}
@Override public void QueryDeviceLogListWrapper(String device_sn, IntVector module_list, QueryDeviceLogListCallback callback) {JavaApiOracle.record("LogManagementModule","QueryDeviceLogListWrapper",new Object[]{device_sn,module_list});JavaApiOracle.respond(callback);}
@Override public void CreateDeviceLogReportWrapper(CreateDeviceLogReportRequestParam param, CreateDeviceLogReportCallback callback) {JavaApiOracle.record("LogManagementModule","CreateDeviceLogReportWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void LogReportListWrapper(String device_sn, int page, int page_size, LogReportListCallback callback) {JavaApiOracle.record("LogManagementModule","LogReportListWrapper",new Object[]{device_sn,page,page_size});JavaApiOracle.respond(callback);}
@Override public void LogReportOperationWrapper(String operation, String report_id, LogReportOperationCallback callback) {JavaApiOracle.record("LogManagementModule","LogReportOperationWrapper",new Object[]{operation,report_id});JavaApiOracle.respond(callback);}
@Override public void UploadLogAppendFileWrapper(String file_path, UploadLogAppendFileCallback callback) {JavaApiOracle.record("LogManagementModule","UploadLogAppendFileWrapper",new Object[]{file_path});JavaApiOracle.respond(callback);}
@Override public int listenDeviceFileUploadProgressWrapper(String device_sn, DeviceFileUploadProgressCallback callback) {JavaApiOracle.record("LogManagementModule","listenDeviceFileUploadProgressWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDeviceFileUploadProgressWrapper(int listen_id) {JavaApiOracle.record("LogManagementModule","cancelListenDeviceFileUploadProgressWrapper",new Object[]{listen_id});}
}
