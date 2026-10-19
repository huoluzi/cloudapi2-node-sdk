// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeMediaServiceModule extends IMediaServiceModule { public ProbeMediaServiceModule(){super();}
@Override public void getMediaFilesListWrapper(GetMediaFilesListParams request_params, GetMediaFilesListCallback callback) {JavaApiOracle.record("MediaServiceModule","getMediaFilesListWrapper",new Object[]{request_params});JavaApiOracle.respond(callback);}
@Override public void deleteMediaFilesWrapper(LongLongVector file_ids, ResultCallbackWithError callback) {JavaApiOracle.record("MediaServiceModule","deleteMediaFilesWrapper",new Object[]{file_ids});JavaApiOracle.respond(callback);}
@Override public void getMediaFilesDownloadURLWrapper(long file_id, GetMediaFilesDownloadUrlCallback callback) {JavaApiOracle.record("MediaServiceModule","getMediaFilesDownloadURLWrapper",new Object[]{file_id});JavaApiOracle.respond(callback);}
@Override public void getMediaFilesDownloadURLListWrapper(StringVector object_keys, GetMediaFilesDownloadUrlListCallback callback) {JavaApiOracle.record("MediaServiceModule","getMediaFilesDownloadURLListWrapper",new Object[]{object_keys});JavaApiOracle.respond(callback);}
@Override public int listenMediaFilePostProcessMessageWrapper(String device_sn, MediaFilePostProcessCallback callback) {JavaApiOracle.record("MediaServiceModule","listenMediaFilePostProcessMessageWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenMediaFilePostProcessMessageWrapper(int listen_id) {JavaApiOracle.record("MediaServiceModule","cancelListenMediaFilePostProcessMessageWrapper",new Object[]{listen_id});}
@Override public int listenMediaFileDeviceUploadMessageWrapper(String device_sn, MediaFileDeviceUploadCallback callback) {JavaApiOracle.record("MediaServiceModule","listenMediaFileDeviceUploadMessageWrapper",new Object[]{device_sn});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenMediaFileDeviceUploadMessageWrapper(int listen_id) {JavaApiOracle.record("MediaServiceModule","cancelListenMediaFileDeviceUploadMessageWrapper",new Object[]{listen_id});}
@Override public void getMediaUploadStsWrapper(GetMediaUploadStsParams params, GetMediaUploadStsCallback callback) {JavaApiOracle.record("MediaServiceModule","getMediaUploadStsWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void mediaUploadCallbackWrapper(MediaUploadCallbackParams params, MediaUploadCallbackCallback callback) {JavaApiOracle.record("MediaServiceModule","mediaUploadCallbackWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void uploadGeoMediaFileWrapper(UploadGeoMediaFileParams params, UploadGeoMediaFileCallback callback) {JavaApiOracle.record("MediaServiceModule","uploadGeoMediaFileWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void getMediaFileDetailByIdWrapper(int file_id, GetMediaFileDetailByIdCallback callback) {JavaApiOracle.record("MediaServiceModule","getMediaFileDetailByIdWrapper",new Object[]{file_id});JavaApiOracle.respond(callback);}
}
