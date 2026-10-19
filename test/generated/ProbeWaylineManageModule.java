// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeWaylineManageModule extends IWaylineManageModule { public ProbeWaylineManageModule(){super();}
@Override public void getWaylineListWrapper(GetWaylineListParam param, GetWaylineListCallback callback) {JavaApiOracle.record("WaylineManageModule","getWaylineListWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getWaylineDetailWrapper(String wayline_uuid, GetWaylineDetailCallback callback) {JavaApiOracle.record("WaylineManageModule","getWaylineDetailWrapper",new Object[]{wayline_uuid});JavaApiOracle.respond(callback);}
@Override public void batchDeleteWaylinesWrapper(StringVector wayline_uuids, BatchDeleteWaylinesCallback callback) {JavaApiOracle.record("WaylineManageModule","batchDeleteWaylinesWrapper",new Object[]{wayline_uuids});JavaApiOracle.respond(callback);}
@Override public void updateWaylineWrapper(String wayline_uuid, String wayline_name, UpdateWaylineCallback callback) {JavaApiOracle.record("WaylineManageModule","updateWaylineWrapper",new Object[]{wayline_uuid,wayline_name});JavaApiOracle.respond(callback);}
@Override public void submitWaylineInfoWrapper(SubmitWaylineInfoParam param, SubmitWaylineInfoCallback callback) {JavaApiOracle.record("WaylineManageModule","submitWaylineInfoWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void batchDownloadWaylinesWrapper(BatchDownloadWaylinesParam param, BatchDownloadWaylinesCallback callback) {JavaApiOracle.record("WaylineManageModule","batchDownloadWaylinesWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void duplicateWaylineWrapper(DuplicateWaylineParam param, DuplicateWaylineCallback callback) {JavaApiOracle.record("WaylineManageModule","duplicateWaylineWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void copyWaylineWrapper(CopyWaylineParam param, CopyWaylineCallback callback) {JavaApiOracle.record("WaylineManageModule","copyWaylineWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void concatWaylineWrapper(ConcatWaylineParam param, ConcatWaylineCallback callback) {JavaApiOracle.record("WaylineManageModule","concatWaylineWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void importKmzWrapper(StringVector file_paths, ImportKmzCallback callback) {JavaApiOracle.record("WaylineManageModule","importKmzWrapper",new Object[]{file_paths});JavaApiOracle.respond(callback);}
@Override public int listenImportWaylineEventWrapper(ImportWaylineEventCallback callback) {JavaApiOracle.record("WaylineManageModule","listenImportWaylineEventWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenImportWaylineEventWrapper(int listen_id) {JavaApiOracle.record("WaylineManageModule","cancelListenImportWaylineEventWrapper",new Object[]{listen_id});}
@Override public void getWaylineEditorStsWrapper(GetWaylineEditorStsParams params, GetWaylineEditorStsCallback callback) {JavaApiOracle.record("WaylineManageModule","getWaylineEditorStsWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
}
