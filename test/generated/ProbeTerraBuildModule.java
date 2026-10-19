// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeTerraBuildModule extends ITerraBuildModule { public ProbeTerraBuildModule(){super();}
@Override public void getReconstructionSettingsWrapper(String file_uuid, TerraBuildReconstructionSettingsCallback callback) {JavaApiOracle.record("TerraBuildModule","getReconstructionSettingsWrapper",new Object[]{file_uuid});JavaApiOracle.respond(callback);}
@Override public void getQualityReportWrapper(String file_uuid, String language, String measure_unit_system, TerraBuildQualityReportCallback callback) {JavaApiOracle.record("TerraBuildModule","getQualityReportWrapper",new Object[]{file_uuid,language,measure_unit_system});JavaApiOracle.respond(callback);}
@Override public void getModelFileListWrapper(int page, int page_size, TerraBuildModelFileListCallback callback) {JavaApiOracle.record("TerraBuildModule","getModelFileListWrapper",new Object[]{page,page_size});JavaApiOracle.respond(callback);}
@Override public void getModelFileUrlWrapper(int file_id, int type, TerraBuildModelFileUrlCallback callback) {JavaApiOracle.record("TerraBuildModule","getModelFileUrlWrapper",new Object[]{file_id,type});JavaApiOracle.respond(callback);}
@Override public void retryReconstructionWrapper(String file_uuid, ResultCallback callback) {JavaApiOracle.record("TerraBuildModule","retryReconstructionWrapper",new Object[]{file_uuid});JavaApiOracle.respond(callback);}
@Override public void stopReconstructionWrapper(String file_uuid, ResultCallback callback) {JavaApiOracle.record("TerraBuildModule","stopReconstructionWrapper",new Object[]{file_uuid});JavaApiOracle.respond(callback);}
@Override public void getSfmResultWrapper(String file_uuid, TerraBuildSfmResultCallback callback) {JavaApiOracle.record("TerraBuildModule","getSfmResultWrapper",new Object[]{file_uuid});JavaApiOracle.respond(callback);}
@Override public void createReconstructionWithParamsWrapper(CreateReconstructionJavaParams jp, TerraBuildCreateReconstructionCallback callback) {JavaApiOracle.record("TerraBuildModule","createReconstructionWithParamsWrapper",new Object[]{jp});JavaApiOracle.respond(callback);}
@Override public void deleteModelFileWrapper(int file_id, ResultCallback callback) {JavaApiOracle.record("TerraBuildModule","deleteModelFileWrapper",new Object[]{file_id});JavaApiOracle.respond(callback);}
@Override public void batchDeleteModelFilesWrapper(IntVector file_ids, ResultCallback callback) {JavaApiOracle.record("TerraBuildModule","batchDeleteModelFilesWrapper",new Object[]{file_ids});JavaApiOracle.respond(callback);}
@Override public void createPanoramaWrapper(String name, StringVector folder_uuids, String wkt, boolean is_shown_on_map, TerraBuildCreatePanoramaCallback callback) {JavaApiOracle.record("TerraBuildModule","createPanoramaWrapper",new Object[]{name,folder_uuids,wkt,is_shown_on_map});JavaApiOracle.respond(callback);}
@Override public void getReconstructionImagesWrapper(String file_uuid, TerraBuildReconstructionImagesCallback callback) {JavaApiOracle.record("TerraBuildModule","getReconstructionImagesWrapper",new Object[]{file_uuid});JavaApiOracle.respond(callback);}
@Override public int listenReconstructionStatusChangedWrapper(TerraBuildReconstructionStatusChangedCallback callback) {JavaApiOracle.record("TerraBuildModule","listenReconstructionStatusChangedWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenReconstructionStatusChangedWrapper(int listen_id) {JavaApiOracle.record("TerraBuildModule","cancelListenReconstructionStatusChangedWrapper",new Object[]{listen_id});}
@Override public void uploadModelCallbackWrapper(TerraUploadCallbackJavaParams jp, TerraUploadCallbackCallback callback) {JavaApiOracle.record("TerraBuildModule","uploadModelCallbackWrapper",new Object[]{jp});JavaApiOracle.respond(callback);}
@Override public void renameModelWrapper(int file_id, TerraRenameModelJavaParams jp, ResultCallback callback) {JavaApiOracle.record("TerraBuildModule","renameModelWrapper",new Object[]{file_id,jp});JavaApiOracle.respond(callback);}
@Override public void showModelOnMapWrapper(TerraShowOnMapJavaParams jp, TerraShowOnMapCallback callback) {JavaApiOracle.record("TerraBuildModule","showModelOnMapWrapper",new Object[]{jp});JavaApiOracle.respond(callback);}
@Override public int listenTerraUnzipProgressWrapper(TerraUnzipProgressCallback callback) {JavaApiOracle.record("TerraBuildModule","listenTerraUnzipProgressWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenTerraUnzipProgressWrapper(int listen_id) {JavaApiOracle.record("TerraBuildModule","cancelListenTerraUnzipProgressWrapper",new Object[]{listen_id});}
@Override public int listenTerraModelStatusChangedWrapper(TerraModelStatusChangedCallback callback) {JavaApiOracle.record("TerraBuildModule","listenTerraModelStatusChangedWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenTerraModelStatusChangedWrapper(int listen_id) {JavaApiOracle.record("TerraBuildModule","cancelListenTerraModelStatusChangedWrapper",new Object[]{listen_id});}
@Override public int listenTerraFileShowOnMapWrapper(TerraFileShowOnMapCallback callback) {JavaApiOracle.record("TerraBuildModule","listenTerraFileShowOnMapWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenTerraFileShowOnMapWrapper(int listen_id) {JavaApiOracle.record("TerraBuildModule","cancelListenTerraFileShowOnMapWrapper",new Object[]{listen_id});}
@Override public int listenTerraMediaFileHideOnMapWrapper(TerraMediaFileHideOnMapCallback callback) {JavaApiOracle.record("TerraBuildModule","listenTerraMediaFileHideOnMapWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenTerraMediaFileHideOnMapWrapper(int listen_id) {JavaApiOracle.record("TerraBuildModule","cancelListenTerraMediaFileHideOnMapWrapper",new Object[]{listen_id});}
@Override public int listenTerraMediaFileShowOnMapWrapper(TerraMediaFileShowOnMapCallback callback) {JavaApiOracle.record("TerraBuildModule","listenTerraMediaFileShowOnMapWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenTerraMediaFileShowOnMapWrapper(int listen_id) {JavaApiOracle.record("TerraBuildModule","cancelListenTerraMediaFileShowOnMapWrapper",new Object[]{listen_id});}
@Override public void getModelDetailWrapper(int file_id, TerraGetModelDetailCallback callback) {JavaApiOracle.record("TerraBuildModule","getModelDetailWrapper",new Object[]{file_id});JavaApiOracle.respond(callback);}
@Override public void setLasWktWrapper(TerraSetLasWktJavaParams jp, TerraSetLasWktCallback callback) {JavaApiOracle.record("TerraBuildModule","setLasWktWrapper",new Object[]{jp});JavaApiOracle.respond(callback);}
}
