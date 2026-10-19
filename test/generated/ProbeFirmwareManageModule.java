// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFirmwareManageModule extends IFirmwareManageModule { public ProbeFirmwareManageModule(){super();}
@Override public void getLatestFirmwareReleaseNoteWrapper(StringVector device_model_keys, String language, GetLatestFirmwareReleaseNoteCallback callback) {JavaApiOracle.record("FirmwareManageModule","getLatestFirmwareReleaseNoteWrapper",new Object[]{device_model_keys,language});JavaApiOracle.respond(callback);}
@Override public void invokeFirmwareUpgradeWrapper(FirmwareUpgradeParam params, InvokeFirmwareUpgradeCallback callback) {JavaApiOracle.record("FirmwareManageModule","invokeFirmwareUpgradeWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void queryFirmwareUpgradeProgressWrapper(String device_sn, QueryFirmwareUpgradeProgressCallback callback) {JavaApiOracle.record("FirmwareManageModule","queryFirmwareUpgradeProgressWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);}
@Override public void uploadFirmwareFileWrapper(String file_path, UploadFirmwareFileCallback callback) {JavaApiOracle.record("FirmwareManageModule","uploadFirmwareFileWrapper",new Object[]{file_path});JavaApiOracle.respond(callback);}
@Override public void releaseFirmwareWrapper(String file_id, ReleaseFirmwareCallback callback) {JavaApiOracle.record("FirmwareManageModule","releaseFirmwareWrapper",new Object[]{file_id});JavaApiOracle.respond(callback);}
@Override public void unReleaseFirmwareWrapper(String file_id, UnReleaseFirmwareCallback callback) {JavaApiOracle.record("FirmwareManageModule","unReleaseFirmwareWrapper",new Object[]{file_id});JavaApiOracle.respond(callback);}
@Override public void deleteFirmwareWrapper(String file_id, DeleteFirmwareCallback callback) {JavaApiOracle.record("FirmwareManageModule","deleteFirmwareWrapper",new Object[]{file_id});JavaApiOracle.respond(callback);}
@Override public void queryFirmwareListWrapper(int page, int page_size, QueryFirmwareListCallback callback) {JavaApiOracle.record("FirmwareManageModule","queryFirmwareListWrapper",new Object[]{page,page_size});JavaApiOracle.respond(callback);}
@Override public void queryFirmwareCompatibilityConfigWrapper(QueryFirmwareCompatibilityConfigCallback callback) {JavaApiOracle.record("FirmwareManageModule","queryFirmwareCompatibilityConfigWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void checkFirmwareStatusWrapper(StringVector device_sns, StringVector status, CheckFirmwareStatusCallback callback) {JavaApiOracle.record("FirmwareManageModule","checkFirmwareStatusWrapper",new Object[]{device_sns,status});JavaApiOracle.respond(callback);}
@Override public void submitFirmwareInfoWrapper(FirmwareInfoParam firmware_info, SubmitFirmwareInfoCallback callback) {JavaApiOracle.record("FirmwareManageModule","submitFirmwareInfoWrapper",new Object[]{firmware_info});JavaApiOracle.respond(callback);}
@Override public int listenDeviceOtaProgressWrapper(String device_sn, DeviceOtaProgressCallback callback) {JavaApiOracle.record("FirmwareManageModule","listenDeviceOtaProgressWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDeviceOtaProgressWrapper(int listen_id) {JavaApiOracle.record("FirmwareManageModule","cancelListenDeviceOtaProgressWrapper",new Object[]{listen_id});}
}
