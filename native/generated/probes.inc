// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
std::shared_ptr<IAIAlertModule> MakeProbeAIAlertModule();
std::shared_ptr<IAIBoxModule> MakeProbeAIBoxModule();
std::shared_ptr<IAIInsideManageModule> MakeProbeAIInsideManageModule();
std::shared_ptr<IBaseStation> MakeProbeBaseStation();
std::shared_ptr<ICameraControlModule> MakeProbeCameraControlModule();
std::shared_ptr<IControlAuthModule> MakeProbeControlAuthModule();
std::shared_ptr<ICustomSEIModule> MakeProbeCustomSEIModule();
std::shared_ptr<IDeployModule> MakeProbeDeployModule();
std::shared_ptr<IDeviceDebugModule> MakeProbeDeviceDebugModule();
std::shared_ptr<IDeviceHMSModule> MakeProbeDeviceHMSModule();
std::shared_ptr<IDeviceManageModule> MakeProbeDeviceManageModule();
std::shared_ptr<IDeviceStateModule> MakeProbeDeviceStateModule();
std::shared_ptr<IDiagnosisManagementModule> MakeProbeDiagnosisManagementModule();
std::shared_ptr<IDock> MakeProbeDock();
std::shared_ptr<IDockControlModule> MakeProbeDockControlModule();
std::shared_ptr<IDockOsdModule> MakeProbeDockOsdModule();
std::shared_ptr<IDrcModule> MakeProbeDrcModule();
std::shared_ptr<IDrone> MakeProbeDrone();
std::shared_ptr<IDroneOsdModule> MakeProbeDroneOsdModule();
std::shared_ptr<IElementModule> MakeProbeElementModule();
std::shared_ptr<IFirmwareManageModule> MakeProbeFirmwareManageModule();
std::shared_ptr<IFlashLedModule> MakeProbeFlashLedModule();
std::shared_ptr<IFlightControlModule> MakeProbeFlightControlModule();
std::shared_ptr<IFlightSettingsModule> MakeProbeFlightSettingsModule();
std::shared_ptr<IFlightTaskControlModule> MakeProbeFlightTaskControlModule();
std::shared_ptr<IFlightTaskModule> MakeProbeFlightTaskModule();
std::shared_ptr<IFlightTaskRecordModule> MakeProbeFlightTaskRecordModule();
std::shared_ptr<IFlyToPointModule> MakeProbeFlyToPointModule();
std::shared_ptr<IHMSModule> MakeProbeHMSModule();
std::shared_ptr<IInFlightWaylineModule> MakeProbeInFlightWaylineModule();
std::shared_ptr<ILiveDeviceModule> MakeProbeLiveDeviceModule();
std::shared_ptr<ILiveRecordModule> MakeProbeLiveRecordModule();
std::shared_ptr<ILiveModule> MakeProbeLiveModule();
std::shared_ptr<ILiveSyncModule> MakeProbeLiveSyncModule();
std::shared_ptr<ILogManagementModule> MakeProbeLogManagementModule();
std::shared_ptr<IMaintenanceManagementModule> MakeProbeMaintenanceManagementModule();
std::shared_ptr<IMediaServiceModule> MakeProbeMediaServiceModule();
std::shared_ptr<INetworkTestModule> MakeProbeNetworkTestModule();
std::shared_ptr<IOnboardAiModule> MakeProbeOnboardAiModule();
std::shared_ptr<IPoiModule> MakeProbePoiModule();
std::shared_ptr<IPsdkControlModule> MakeProbePsdkControlModule();
std::shared_ptr<IPsdkResourceModule> MakeProbePsdkResourceModule();
std::shared_ptr<IPullStreamModule> MakeProbePullStreamModule();
std::shared_ptr<IRelay> MakeProbeRelay();
std::shared_ptr<IRelayControlModule> MakeProbeRelayControlModule();
std::shared_ptr<IRemoteController> MakeProbeRemoteController();
std::shared_ptr<IRtkCalibrationModule> MakeProbeRtkCalibrationModule();
std::shared_ptr<ISafetyServiceModule> MakeProbeSafetyServiceModule();
std::shared_ptr<IStream> MakeProbeStream();
std::shared_ptr<ITakeoffModule> MakeProbeTakeoffModule();
std::shared_ptr<ITerraBuildModule> MakeProbeTerraBuildModule();
std::shared_ptr<ITestFlightModule> MakeProbeTestFlightModule();
std::shared_ptr<IWaylineManageModule> MakeProbeWaylineManageModule();
std::shared_ptr<IWorkspace> MakeProbeWorkspace();
struct ProbeAIAlertModule: IAIAlertModule {
void postDeviceSetting(
        const PostAiAlertDeviceSettingParam& param,
        std::function<void(FlightHubError err, PostAiAlertDeviceSettingResult result)> callback) override {
ProbeRecord("AIAlertModule","postDeviceSetting",{Convert<PostAiAlertDeviceSettingParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<PostAiAlertDeviceSettingResult>(1));
}
void getDeviceSetting(
        const GetAiAlertDeviceSettingParam& param,
        std::function<void(FlightHubError err, GetAiAlertDeviceSettingResult result)> callback) override {
ProbeRecord("AIAlertModule","getDeviceSetting",{Convert<GetAiAlertDeviceSettingParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAiAlertDeviceSettingResult>(1));
}
void postAlgorithmSetting(
        const PostAiAlertAlgorithmSettingParam& param,
        std::function<void(FlightHubError err, PostAiAlertAlgorithmSettingResult result)> callback) override {
ProbeRecord("AIAlertModule","postAlgorithmSetting",{Convert<PostAiAlertAlgorithmSettingParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<PostAiAlertAlgorithmSettingResult>(1));
}
void getAlgorithmSetting(
        const GetAiAlertAlgorithmSettingParam& param,
        std::function<void(FlightHubError err, GetAiAlertAlgorithmSettingResult result)> callback) override {
ProbeRecord("AIAlertModule","getAlgorithmSetting",{Convert<GetAiAlertAlgorithmSettingParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAiAlertAlgorithmSettingResult>(1));
}
void getAiAlertFlights(
        const GetAiAlertFlightsParam& param,
        std::function<void(FlightHubError err, GetAiAlertFlightsResult result)> callback) override {
ProbeRecord("AIAlertModule","getAiAlertFlights",{Convert<GetAiAlertFlightsParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAiAlertFlightsResult>(1));
}
void getAiAlertRecords(
        const GetAiAlertRecordsParam& param,
        std::function<void(FlightHubError err, GetAiAlertRecordsResult result)> callback) override {
ProbeRecord("AIAlertModule","getAiAlertRecords",{Convert<GetAiAlertRecordsParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAiAlertRecordsResult>(1));
}
};
std::shared_ptr<IAIAlertModule> MakeProbeAIAlertModule(){return std::make_shared<ProbeAIAlertModule>();}
struct ProbeAIBoxModule: IAIBoxModule {
void fetchAIBoxInfo(const std::string& device_sn, std::function<void(FlightHubError err, const AIBoxInfoListResults& results)> callback) override {
ProbeRecord("AIBoxModule","fetchAIBoxInfo",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<AIBoxInfoListResults>(1));
}
void fetchFileDownloadUrl(const FetchFileDownloadUrlParams& params, std::function<void(FlightHubError err, const FileDownloadUrlListResults& results)> callback) override {
ProbeRecord("AIBoxModule","fetchFileDownloadUrl",{Convert<FetchFileDownloadUrlParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FileDownloadUrlListResults>(1));
}
void fetchAppList(const FetchAppListParam& param, std::function<void(FlightHubError err, const FetchAppListResults& results)> callback) override {
ProbeRecord("AIBoxModule","fetchAppList",{Convert<FetchAppListParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FetchAppListResults>(1));
}
void fetchAppListProgress(const FetchAppListProgressParam& param, std::function<void(FlightHubError err, const FetchAppListProgressResults& results)> callback) override {
ProbeRecord("AIBoxModule","fetchAppListProgress",{Convert<FetchAppListProgressParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FetchAppListProgressResults>(1));
}
void exportFile(const ExportFileParam& param, std::function<void(FlightHubError err, const ExportFileResults& results)> callback) override {
ProbeRecord("AIBoxModule","exportFile",{Convert<ExportFileParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ExportFileResults>(1));
}
void exportFileProgress(const ExportFileProgressParam& param, std::function<void(FlightHubError err, const ExportFileProgressResults& results)> callback) override {
ProbeRecord("AIBoxModule","exportFileProgress",{Convert<ExportFileProgressParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ExportFileProgressResults>(1));
}
void uploadAIBoxFile(const UploadFileParam& param, std::function<void(FlightHubError err, const UploadFileResults& results)> callback) override {
ProbeRecord("AIBoxModule","uploadAIBoxFile",{Convert<UploadFileParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UploadFileResults>(1));
}
void installApp(const InstallAppParam& param, std::function<void(FlightHubError err, const InstallAppResults& results)> callback) override {
ProbeRecord("AIBoxModule","installApp",{Convert<InstallAppParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<InstallAppResults>(1));
}
void installAppProgress(const InstallAppProgressParam& param, std::function<void(FlightHubError err, const InstallAppProgressResults& results)> callback) override {
ProbeRecord("AIBoxModule","installAppProgress",{Convert<InstallAppProgressParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<InstallAppProgressResults>(1));
}
void operateApp(const OperateAppParam& param, std::function<void(FlightHubError err, const OperateAppResults& results)> callback) override {
ProbeRecord("AIBoxModule","operateApp",{Convert<OperateAppParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OperateAppResults>(1));
}
};
std::shared_ptr<IAIBoxModule> MakeProbeAIBoxModule(){return std::make_shared<ProbeAIBoxModule>();}
struct ProbeAIInsideManageModule: IAIInsideManageModule {
void getAIInsideModels(
        std::function<void(FlightHubError err, GetAIInsideModelsResult result)> callback) override {
ProbeRecord("AIInsideManageModule","getAIInsideModels",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAIInsideModelsResult>(1));
}
void getAIInsideModelDevices(
        const GetAIInsideModelDevicesParam& param,
        std::function<void(FlightHubError err, GetAIInsideModelDevicesResult result)> callback) override {
ProbeRecord("AIInsideManageModule","getAIInsideModelDevices",{Convert<GetAIInsideModelDevicesParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAIInsideModelDevicesResult>(1));
}
void getAIInsideModelDevicesSummary(
        const GetAIInsideModelDevicesSummaryParam& param,
        std::function<void(FlightHubError err, GetAIInsideModelDevicesSummaryResult result)> callback) override {
ProbeRecord("AIInsideManageModule","getAIInsideModelDevicesSummary",{Convert<GetAIInsideModelDevicesSummaryParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAIInsideModelDevicesSummaryResult>(1));
}
void operateAIInsideModel(
        const OperateAIInsideModelParam& param,
        std::function<void(FlightHubError err, OperateAIInsideModelResult result)> callback) override {
ProbeRecord("AIInsideManageModule","operateAIInsideModel",{Convert<OperateAIInsideModelParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OperateAIInsideModelResult>(1));
}
void createAIInsideAlgorithm(
        const CreateAIInsideAlgorithmParam& param,
        std::function<void(FlightHubError err, CreateAIInsideAlgorithmResult result)> callback) override {
ProbeRecord("AIInsideManageModule","createAIInsideAlgorithm",{Convert<CreateAIInsideAlgorithmParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CreateAIInsideAlgorithmResult>(1));
}
void fileUploadAIInsideAlgorithm(
        const FileUploadAIInsideAlgorithmParam& param,
        std::function<void(FlightHubError err, FileUploadAIInsideAlgorithmResult result)> callback) override {
ProbeRecord("AIInsideManageModule","fileUploadAIInsideAlgorithm",{Convert<FileUploadAIInsideAlgorithmParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FileUploadAIInsideAlgorithmResult>(1));
}
void deleteAIInsideAlgorithm(
        const DeleteAIInsideAlgorithmParam& param,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("AIInsideManageModule","deleteAIInsideAlgorithm",{Convert<DeleteAIInsideAlgorithmParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void uploadAlgorithmFile(
        const UploadAIInsideAlgorithmFileParam& param,
        std::function<void(FlightHubError err, UploadAIInsideAlgorithmFileResult result)> callback) override {
ProbeRecord("AIInsideManageModule","uploadAlgorithmFile",{Convert<UploadAIInsideAlgorithmFileParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UploadAIInsideAlgorithmFileResult>(1));
}
};
std::shared_ptr<IAIInsideManageModule> MakeProbeAIInsideManageModule(){return std::make_shared<ProbeAIInsideManageModule>();}
struct ProbeBaseStation: IBaseStation {
const std::string& getSn() const override {
ProbeRecord("BaseStation","getSn",{});
static const std::string sn="FIXTURE-SN";return sn;
}
std::shared_ptr<ILiveModule> getLiveStream(const LiveInfo& params) override {
ProbeRecord("BaseStation","getLiveStream",{Convert<LiveInfo>::to(probeEnv,params)});
return MakeProbeLiveModule();
}
std::shared_ptr<ILiveDeviceModule> getLiveDeviceModule() override {
ProbeRecord("BaseStation","getLiveDeviceModule",{});
return MakeProbeLiveDeviceModule();
}
std::shared_ptr<IRtkCalibrationModule> getRtkCalibrationModule() override {
ProbeRecord("BaseStation","getRtkCalibrationModule",{});
return MakeProbeRtkCalibrationModule();
}
std::shared_ptr<INetworkTestModule> getNetworkTestModule() override {
ProbeRecord("BaseStation","getNetworkTestModule",{});
return MakeProbeNetworkTestModule();
}
};
std::shared_ptr<IBaseStation> MakeProbeBaseStation(){return std::make_shared<ProbeBaseStation>();}
struct ProbeCameraControlModule: ICameraControlModule {
void drcSwitchLiveLens(const SwitchLiveLensParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSwitchLiveLens",{Convert<SwitchLiveLensParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetPhotoStorageSettings(const SetPhotoStorageSettingsParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetPhotoStorageSettings",{Convert<SetPhotoStorageSettingsParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetVideoStorageSettings(const SetVideoStorageSettingsParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetVideoStorageSettings",{Convert<SetVideoStorageSettingsParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetNightSceneMode(const SetNightSceneModeParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetNightSceneMode",{Convert<SetNightSceneModeParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcTakePhoto(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcTakePhoto",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSmartPhotoTakePhoto(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSmartPhotoTakePhoto",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcStartRecord(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcStartRecord",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcStopRecord(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcStopRecord",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcZoomAtTarget(const ZoomAtTargetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcZoomAtTarget",{Convert<ZoomAtTargetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetFocalLength(const CameraFocalLengthParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetFocalLength",{Convert<CameraFocalLengthParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetLinkageZoom(const LinkageZoomParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetLinkageZoom",{Convert<LinkageZoomParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcResetGimbal(const GimbalResetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcResetGimbal",{Convert<GimbalResetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void lookAtTarget(const LookAtTargetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","lookAtTarget",{Convert<LookAtTargetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSendCameraScreenDrag(const CameraScreenDragParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSendCameraScreenDrag",{Convert<CameraScreenDragParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcStartPanorama(const PanoramaParam& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcStartPanorama",{Convert<PanoramaParam>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcStopPanorama(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcStopPanorama",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcPanoramaStatus(const std::string& payload_index, const std::function<void(const PanoramaStatus& status)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcPanoramaStatus",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<PanoramaStatus>(0));
return 73;
}
void cancelListenDrcPanoramaStatus(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcPanoramaStatus",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
void drcSetPhotoSize(const PhotoSizeParam& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetPhotoSize",{Convert<PhotoSizeParam>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIntervalTakePhoto(const IntervalTakePhotoSetParam& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIntervalTakePhoto",{Convert<IntervalTakePhotoSetParam>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcIntervalTakePhoto(const IntervalTakePhotoParam& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcIntervalTakePhoto",{Convert<IntervalTakePhotoParam>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcIntervalTakePhotoStatus(const std::string& payload_index, const std::function<void(const IntervalTakePhotoStatus& status)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcIntervalTakePhotoStatus",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<IntervalTakePhotoStatus>(0));
return 73;
}
void cancelListenDrcIntervalTakePhotoStatus(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcIntervalTakePhotoStatus",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
void drcStopTakePhoto(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcStopTakePhoto",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcCameraAimAtTarget(const CameraAimParam& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcCameraAimAtTarget",{Convert<CameraAimParam>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSwitchCameraMode(const SwitchCameraModeParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSwitchCameraMode",{Convert<SwitchCameraModeParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcCameraModeAvailableRange(const std::string& payload_index, const std::function<void(const std::vector<int>&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraModeAvailableRange",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<std::vector<int>>(0));
return 73;
}
void cancelListenDrcCameraModeAvailableRange(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraModeAvailableRange",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraState(const std::string& payload_index, const std::function<void(const CameraState& state)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraState",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraState>(0));
return 73;
}
void cancelListenDrcCameraState(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraState",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcLiveviewWorldRegion(const std::string& payload_index, const std::function<void(const LiveviewWorldRegion& region)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcLiveviewWorldRegion",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<LiveviewWorldRegion>(0));
return 73;
}
void cancelListenDrcLiveviewWorldRegion(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcLiveviewWorldRegion",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraWideLensState(const std::string& payload_index, const std::function<void(const CameraWideLensState& state)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraWideLensState",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraWideLensState>(0));
return 73;
}
void cancelListenDrcCameraWideLensState(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraWideLensState",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraZoomLensState(const std::string& payload_index, const std::function<void(const CameraZoomLensState& state)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraZoomLensState",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraZoomLensState>(0));
return 73;
}
void cancelListenDrcCameraZoomLensState(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraZoomLensState",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraMeasureTarget(const std::string& payload_index, const std::function<void(const CameraMeasureTarget& target)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraMeasureTarget",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraMeasureTarget>(0));
return 73;
}
void cancelListenDrcCameraMeasureTarget(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraMeasureTarget",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcNightModeSettings(const std::string& payload_index, const std::function<void(const NightModeSettings& settings)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcNightModeSettings",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<NightModeSettings>(0));
return 73;
}
void cancelListenDrcNightModeSettings(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcNightModeSettings",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcGimbalState(const std::string& payload_index, const std::function<void(const GimbalState& state)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcGimbalState",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<GimbalState>(0));
return 73;
}
void cancelListenDrcGimbalState(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcGimbalState",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcLiveVideoInfo(const std::string& payload_index, const std::function<void(const LiveVideoInfo& info)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcLiveVideoInfo",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<LiveVideoInfo>(0));
return 73;
}
void cancelListenDrcLiveVideoInfo(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcLiveVideoInfo",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcThermalGainMode(const std::string& payload_index, const std::function<void(const ThermalGainModeInfo& info)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcThermalGainMode",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<ThermalGainModeInfo>(0));
return 73;
}
void cancelListenDrcThermalGainMode(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcThermalGainMode",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraIrLensState(const std::string& payload_index, const std::function<void(const CameraIrLensState& state)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraIrLensState",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraIrLensState>(0));
return 73;
}
void cancelListenDrcCameraIrLensState(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraIrLensState",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraIrThermometry(const std::string& payload_index, const std::function<void(const CameraIrThermometryInfo& info)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraIrThermometry",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraIrThermometryInfo>(0));
return 73;
}
void cancelListenDrcCameraIrThermometry(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraIrThermometry",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraWatermarkSettings(const std::string& payload_index, const std::function<void(const CameraWatermarkSettings&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraWatermarkSettings",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraWatermarkSettings>(0));
return 73;
}
void cancelListenDrcCameraWatermarkSettings(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraWatermarkSettings",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraStorageInfo(const std::string& payload_index, const std::function<void(const CameraStorageInfo&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraStorageInfo",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraStorageInfo>(0));
return 73;
}
void cancelListenDrcCameraStorageInfo(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraStorageInfo",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraIrPipState(const std::string& payload_index, const std::function<void(const CameraIrPipState&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraIrPipState",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraIrPipState>(0));
return 73;
}
void cancelListenDrcCameraIrPipState(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraIrPipState",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraIsothermPolygon(const std::string& payload_index, const std::function<void(const CameraIsothermPolygon&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraIsothermPolygon",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraIsothermPolygon>(0));
return 73;
}
void cancelListenDrcCameraIsothermPolygon(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraIsothermPolygon",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraMediaStorage(const std::string& payload_index, const std::function<void(const CameraMediaStorage&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraMediaStorage",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraMediaStorage>(0));
return 73;
}
void cancelListenDrcCameraMediaStorage(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraMediaStorage",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraAlgorithmDehazeInfo(const std::string& payload_index, const std::function<void(const CameraAlgorithmDehazeInfo&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraAlgorithmDehazeInfo",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraAlgorithmDehazeInfo>(0));
return 73;
}
void cancelListenDrcCameraAlgorithmDehazeInfo(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraAlgorithmDehazeInfo",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraPreRecordedInfo(const std::string& payload_index, const std::function<void(const CameraPreRecordedInfo&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraPreRecordedInfo",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraPreRecordedInfo>(0));
return 73;
}
void cancelListenDrcCameraPreRecordedInfo(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraPreRecordedInfo",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraCapability(const std::string& payload_index, const std::function<void(const CameraCapability&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraCapability",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraCapability>(0));
return 73;
}
void cancelListenDrcCameraCapability(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraCapability",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraSettableCapability(const std::string& payload_index, const std::function<void(const CameraSettableCapability&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraSettableCapability",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraSettableCapability>(0));
return 73;
}
void cancelListenDrcCameraSettableCapability(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraSettableCapability",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraVisibleCapability(const std::string& payload_index, const std::function<void(const CameraVisibleCapability&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraVisibleCapability",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraVisibleCapability>(0));
return 73;
}
void cancelListenDrcCameraVisibleCapability(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraVisibleCapability",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCameraPhotoInfo(const std::string& payload_index, const std::function<void(const CameraPhotoInfo&)>& callback) override {
ProbeRecord("CameraControlModule","listenDrcCameraPhotoInfo",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<CameraPhotoInfo>(0));
return 73;
}
void cancelListenDrcCameraPhotoInfo(const std::string& payload_index, int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDrcCameraPhotoInfo",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
void drcSetThermalGainMode(const ThermalGainModeSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetThermalGainMode",{Convert<ThermalGainModeSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraApertureValue(const CameraApertureValueSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraApertureValue",{Convert<CameraApertureValueSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraExposureMode(const CameraExposureModeSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraExposureMode",{Convert<CameraExposureModeSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraExposureValue(const CameraExposureSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraExposureValue",{Convert<CameraExposureSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraFocusMode(const CameraFocusModeSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraFocusMode",{Convert<CameraFocusModeSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraFocusValue(const CameraFocusValueSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraFocusValue",{Convert<CameraFocusValueSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraIso(const CameraIsoSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraIso",{Convert<CameraIsoSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraMechanicalShutter(const CameraMechanicalShutterSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraMechanicalShutter",{Convert<CameraMechanicalShutterSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcCameraPointFocusAction(const CameraPointFocusActionParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcCameraPointFocusAction",{Convert<CameraPointFocusActionParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraShutter(const CameraShutterSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraShutter",{Convert<CameraShutterSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraWatermark(const CameraWatermarkParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraWatermark",{Convert<CameraWatermarkParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraDewarping(const CameraDewarpingSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraDewarping",{Convert<CameraDewarpingSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraScreenSplit(const CameraScreenSplitParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraScreenSplit",{Convert<CameraScreenSplitParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcCleanFog(const CleanFogParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcCleanFog",{Convert<CleanFogParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetThermalCurrentPalette(const ThermalCurrentPaletteSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetThermalCurrentPalette",{Convert<ThermalCurrentPaletteSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetThermalSuperResolutionEnable(const ThermalSuperResolutionEnableParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetThermalSuperResolutionEnable",{Convert<ThermalSuperResolutionEnableParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIrMeteringMode(const IrMeteringModeSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIrMeteringMode",{Convert<IrMeteringModeSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIrMeteringPoint(const IrMeteringPointSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIrMeteringPoint",{Convert<IrMeteringPointSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIrMeteringArea(const IrMeteringAreaSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIrMeteringArea",{Convert<IrMeteringAreaSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIrDisplayMode(const SetIrDisplayModeParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIrDisplayMode",{Convert<SetIrDisplayModeParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIrEnhanceMode(const SetIrEnhanceModeParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIrEnhanceMode",{Convert<SetIrEnhanceModeParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIrMixRate(const SetIrMixRateParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIrMixRate",{Convert<SetIrMixRateParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIsothermEnable(const SetIsothermEnableParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIsothermEnable",{Convert<SetIsothermEnableParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIsothermColorRenderingType(const SetIsothermColorRenderingTypeParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIsothermColorRenderingType",{Convert<SetIsothermColorRenderingTypeParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIsothermLowerUpperRange(const SetIsothermLowerUpperRangeParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIsothermLowerUpperRange",{Convert<SetIsothermLowerUpperRangeParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIsothermRenderingPolygon(const SetIsothermRenderingPolygonParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIsothermRenderingPolygon",{Convert<SetIsothermRenderingPolygonParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetIsothermRoiBasedRenderingEnable(const SetIsothermRoiBasedRenderingEnableParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetIsothermRoiBasedRenderingEnable",{Convert<SetIsothermRoiBasedRenderingEnableParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetInfraredFillLightEnable(const InfraredFillLightEnableParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetInfraredFillLightEnable",{Convert<InfraredFillLightEnableParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraNightVisionEnable(const CameraNightVisionEnableParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraNightVisionEnable",{Convert<CameraNightVisionEnableParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcResetCameraSettings(const CameraSettingsResetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcResetCameraSettings",{Convert<CameraSettingsResetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraDenoiseLevelSet(const CameraDenoiseLevelSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraDenoiseLevelSet",{Convert<CameraDenoiseLevelSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetVideoResolution(const VideoResolutionSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetVideoResolution",{Convert<VideoResolutionSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCameraPhotoFormat(const CameraPhotoFormatSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCameraPhotoFormat",{Convert<CameraPhotoFormatSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetPreRecordedStatus(const PreRecordedStatusSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetPreRecordedStatus",{Convert<PreRecordedStatusSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetPreRecordedTime(const PreRecordedTimeSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetPreRecordedTime",{Convert<PreRecordedTimeSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetCountDownAction(int count_down_type, int action_type, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetCountDownAction",{Convert<int>::to(probeEnv,count_down_type),Convert<int>::to(probeEnv,action_type)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetAssistantVideoMode(int mode, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetAssistantVideoMode",{Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetAssistantVideoSwitch(int sw, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetAssistantVideoSwitch",{Convert<int>::to(probeEnv,sw)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetAlgorithmDehazeMode(const AlgorithmDehazeModeSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetAlgorithmDehazeMode",{Convert<AlgorithmDehazeModeSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetAlgorithmDehazeLevel(const AlgorithmDehazeLevelSetParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("CameraControlModule","drcSetAlgorithmDehazeLevel",{Convert<AlgorithmDehazeLevelSetParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDroneCameraWatermarkSettings(const std::function<void(const DroneCameraWatermarkSettingsPush&)>& callback) override {
ProbeRecord("CameraControlModule","listenDroneCameraWatermarkSettings",{});
if(callback)callback(ProbeValue<DroneCameraWatermarkSettingsPush>(0));
return 73;
}
void cancelListenDroneCameraWatermarkSettings(int listen_id) override {
ProbeRecord("CameraControlModule","cancelListenDroneCameraWatermarkSettings",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<ICameraControlModule> MakeProbeCameraControlModule(){return std::make_shared<ProbeCameraControlModule>();}
struct ProbeControlAuthModule: IControlAuthModule {
void acquireFlightControlAuthority(const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("ControlAuthModule","acquireFlightControlAuthority",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void releaseFlightControlAuthority(const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("ControlAuthModule","releaseFlightControlAuthority",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenFlightControlAuthority(const std::function<void(bool)>& callback) override {
ProbeRecord("ControlAuthModule","listenFlightControlAuthority",{});
if(callback)callback(ProbeValue<bool>(0));
return 73;
}
void cancelListenFlightControlAuthority(int listen_id) override {
ProbeRecord("ControlAuthModule","cancelListenFlightControlAuthority",{Convert<int>::to(probeEnv,listen_id)});
}
void acquirePayloadControlAuthority(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("ControlAuthModule","acquirePayloadControlAuthority",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void releasePayloadControlAuthority(const std::string& payload_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("ControlAuthModule","releasePayloadControlAuthority",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenPayloadControlAuthority(const std::string& payload_index, const std::function<void(bool)>& callback) override {
ProbeRecord("ControlAuthModule","listenPayloadControlAuthority",{Convert<std::string>::to(probeEnv,payload_index)});
if(callback)callback(ProbeValue<bool>(0));
return 73;
}
void cancelListenPayloadControlAuthority(const std::string& payload_index, int listen_id) override {
ProbeRecord("ControlAuthModule","cancelListenPayloadControlAuthority",{Convert<std::string>::to(probeEnv,payload_index),Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IControlAuthModule> MakeProbeControlAuthModule(){return std::make_shared<ProbeControlAuthModule>();}
struct ProbeCustomSEIModule: ICustomSEIModule {
bool CustomSEIEncode(const std::vector<int>& frame_data,
                                   const std::vector<SeiItem>& custom_sei_data,
                                   std::vector<int>& output_frame_data) override {
ProbeRecord("CustomSEIModule","CustomSEIEncode",{Convert<std::vector<int>>::to(probeEnv,frame_data),Convert<std::vector<SeiItem>>::to(probeEnv,custom_sei_data)});
output_frame_data=ProbeValue<std::vector<int>>(0);
return true;
}
bool CustomSEIDecode(const std::vector<int>& frame_data,
                                   SeiHeader& output_header,
                                   std::vector<SeiItem>& output_sei_data) override {
ProbeRecord("CustomSEIModule","CustomSEIDecode",{Convert<std::vector<int>>::to(probeEnv,frame_data)});
output_header=ProbeValue<SeiHeader>(0);
output_sei_data=ProbeValue<std::vector<SeiItem>>(1);
return true;
}
};
std::shared_ptr<ICustomSEIModule> MakeProbeCustomSEIModule(){return std::make_shared<ProbeCustomSEIModule>();}
struct ProbeDeployModule: IDeployModule {
int listenDockDeparturePoint(const std::function<void(const DockDeparturePoint& msg)>& callback) override {
ProbeRecord("DeployModule","listenDockDeparturePoint",{});
if(callback)callback(ProbeValue<DockDeparturePoint>(0));
return 73;
}
void cancelListenDockDeparturePoint(int listen_id) override {
ProbeRecord("DeployModule","cancelListenDockDeparturePoint",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftVisualScoutStatus(const std::function<void(const AircraftVisualScoutStatus& msg)>& callback) override {
ProbeRecord("DeployModule","listenAircraftVisualScoutStatus",{});
if(callback)callback(ProbeValue<AircraftVisualScoutStatus>(0));
return 73;
}
void cancelListenAircraftVisualScoutStatus(int listen_id) override {
ProbeRecord("DeployModule","cancelListenAircraftVisualScoutStatus",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftVisualScoutAbnormalInfo(const std::function<void(const AircraftVisualScoutAbnormalInfo& msg)>& callback) override {
ProbeRecord("DeployModule","listenAircraftVisualScoutAbnormalInfo",{});
if(callback)callback(ProbeValue<AircraftVisualScoutAbnormalInfo>(0));
return 73;
}
void cancelListenAircraftVisualScoutAbnormalInfo(int listen_id) override {
ProbeRecord("DeployModule","cancelListenAircraftVisualScoutAbnormalInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftVisualScoutObstacleInfo(const std::function<void(const AircraftVisualScoutObstacleInfo& msg)>& callback) override {
ProbeRecord("DeployModule","listenAircraftVisualScoutObstacleInfo",{});
if(callback)callback(ProbeValue<AircraftVisualScoutObstacleInfo>(0));
return 73;
}
void cancelListenAircraftVisualScoutObstacleInfo(int listen_id) override {
ProbeRecord("DeployModule","cancelListenAircraftVisualScoutObstacleInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftEphemerisDownloadState(const std::function<void(const EphemerisDownloadState& msg)>& callback) override {
ProbeRecord("DeployModule","listenAircraftEphemerisDownloadState",{});
if(callback)callback(ProbeValue<EphemerisDownloadState>(0));
return 73;
}
void cancelListenAircraftEphemerisDownloadState(int listen_id) override {
ProbeRecord("DeployModule","cancelListenAircraftEphemerisDownloadState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftEphemerisInfo(const std::function<void(const EphemerisInfo& msg)>& callback) override {
ProbeRecord("DeployModule","listenAircraftEphemerisInfo",{});
if(callback)callback(ProbeValue<EphemerisInfo>(0));
return 73;
}
void cancelListenAircraftEphemerisInfo(int listen_id) override {
ProbeRecord("DeployModule","cancelListenAircraftEphemerisInfo",{Convert<int>::to(probeEnv,listen_id)});
}
void downloadEphemeris(const DownloadEphemerisParams& params, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeployModule","downloadEphemeris",{Convert<DownloadEphemerisParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void executeInOutWaylineDetect(const InOutWaylineDetectParams& params, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeployModule","executeInOutWaylineDetect",{Convert<InOutWaylineDetectParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setInOutWaylineFlight(const InOutWaylineFlightSettingParams& params, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeployModule","setInOutWaylineFlight",{Convert<InOutWaylineFlightSettingParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getInOutWaylineFlightSetting(const std::function<void(const InOutWaylineFlightSettingParams& params, FlightHubError err)>& callback) override {
ProbeRecord("DeployModule","getInOutWaylineFlightSetting",{});
if(callback)callback(ProbeValue<InOutWaylineFlightSettingParams>(0),ProbeValue<FlightHubError>(1));
}
};
std::shared_ptr<IDeployModule> MakeProbeDeployModule(){return std::make_shared<ProbeDeployModule>();}
struct ProbeDeviceDebugModule: IDeviceDebugModule {
void openDebugMode(const std::string& device_sn, const std::function<void(FlightHubError err, const OpenDebugModeResult& result)>& callback) override {
ProbeRecord("DeviceDebugModule","openDebugMode",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OpenDebugModeResult>(1));
}
void closeDebugMode(const std::string& device_sn, const std::function<void(FlightHubError err, const CloseDebugModeResult& result)>& callback) override {
ProbeRecord("DeviceDebugModule","closeDebugMode",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CloseDebugModeResult>(1));
}
void openDockCover(const std::string& device_sn, const std::function<void(FlightHubError err, const OpenDockCoverResult& result)>& callback) override {
ProbeRecord("DeviceDebugModule","openDockCover",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OpenDockCoverResult>(1));
}
void getOpenDockCoverProgress(const std::string& device_sn, const std::function<void(FlightHubError err, const OpenDockCoverProgressResult& result)> callback) override {
ProbeRecord("DeviceDebugModule","getOpenDockCoverProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OpenDockCoverProgressResult>(1));
}
int subscribeDockCoverOpenProgress(const std::string& device_sn, const std::function<void(OpenDockCoverResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDockCoverOpenProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<OpenDockCoverResult>(0));
return 73;
}
void unsubscribeDockCoverOpenProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDockCoverOpenProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void closeDockCover(const std::string& device_sn, const std::function<void(FlightHubError err, const CloseDockCoverResult& result)>& callback) override {
ProbeRecord("DeviceDebugModule","closeDockCover",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CloseDockCoverResult>(1));
}
void getCloseDockCoverProgress(const std::string& device_sn, const std::function<void(FlightHubError err, const CloseDockCoverProgressResult& result)> callback) override {
ProbeRecord("DeviceDebugModule","getCloseDockCoverProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CloseDockCoverProgressResult>(1));
}
int subscribeDockCoverCloseProgress(const std::string& device_sn, const std::function<void(CloseDockCoverResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDockCoverCloseProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<CloseDockCoverResult>(0));
return 73;
}
void unsubscribeDockCoverCloseProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDockCoverCloseProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void deviceReboot(const std::string& device_sn, const std::function<void(FlightHubError err, const DeviceRebootResult& result)>& callback) override {
ProbeRecord("DeviceDebugModule","deviceReboot",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceRebootResult>(1));
}
int subscribeDeviceRebootProgress(const std::string& device_sn, const std::function<void(DeviceRebootResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDeviceRebootProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<DeviceRebootResult>(0));
return 73;
}
void unsubscribeDeviceRebootProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDeviceRebootProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void getDeviceRebootProgress(const std::string& device_sn, const std::function<void(FlightHubError err, const DeviceRebootProgressResult& result)> callback) override {
ProbeRecord("DeviceDebugModule","getDeviceRebootProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceRebootProgressResult>(1));
}
void deviceFormat(const std::string& device_sn, const std::function<void(FlightHubError err, const DeviceFormatResult& result)>& callback) override {
ProbeRecord("DeviceDebugModule","deviceFormat",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceFormatResult>(1));
}
void getDeviceFormatProgress(const std::string& device_sn, const std::function<void(FlightHubError err, const DeviceFormatProgressResult& result)> callback) override {
ProbeRecord("DeviceDebugModule","getDeviceFormatProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceFormatProgressResult>(1));
}
int subscribeDeviceFormatProgress(const std::string& device_sn, const std::function<void(DeviceFormatResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDeviceFormatProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<DeviceFormatResult>(0));
return 73;
}
void unsubscribeDeviceFormatProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDeviceFormatProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void openDrone(const std::string& device_sn, const std::function<void(FlightHubError err, const OpenDroneResult& data)>& callback) override {
ProbeRecord("DeviceDebugModule","openDrone",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OpenDroneResult>(1));
}
int subscribeDroneOpenProgress(const std::string& device_sn, const std::function<void(OpenDroneResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDroneOpenProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<OpenDroneResult>(0));
return 73;
}
void unsubscribeDroneOpenProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDroneOpenProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void closeDrone(const std::string& device_sn, const std::function<void(FlightHubError err, const CloseDroneResult& data)>& callback) override {
ProbeRecord("DeviceDebugModule","closeDrone",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CloseDroneResult>(1));
}
int subscribeDroneCloseProgress(const std::string& device_sn, const std::function<void(CloseDroneResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDroneCloseProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<CloseDroneResult>(0));
return 73;
}
void unsubscribeDroneCloseProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDroneCloseProgress",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeDroneFormatProgress(const std::string& device_sn, const std::function<void(DroneFormatResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDroneFormatProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<DroneFormatResult>(0));
return 73;
}
void unsubscribeDroneFormatProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDroneFormatProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void droneFormat(const std::string& device_sn, const std::function<void(FlightHubError err, const DroneFormatResult& data)>& callback) override {
ProbeRecord("DeviceDebugModule","droneFormat",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DroneFormatResult>(1));
}
void droneSdrWorkMode(const std::string& device_sn, int mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeviceDebugModule","droneSdrWorkMode",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void openCharge(const std::string& device_sn, const std::function<void(FlightHubError err, const OpenChargeResult& data)>& callback) override {
ProbeRecord("DeviceDebugModule","openCharge",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OpenChargeResult>(1));
}
int subscribeDroneChargeOpenProgress(const std::string& device_sn, const std::function<void(OpenChargeResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDroneChargeOpenProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<OpenChargeResult>(0));
return 73;
}
void unsubscribeDroneChargeOpenProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDroneChargeOpenProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void closeCharge(const std::string& device_sn, const std::function<void(FlightHubError err, const CloseChargeResult& data)>& callback) override {
ProbeRecord("DeviceDebugModule","closeCharge",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CloseChargeResult>(1));
}
int subscribeDroneChargeCloseProgress(const std::string& device_sn, const std::function<void(CloseChargeResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDroneChargeCloseProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<CloseChargeResult>(0));
return 73;
}
void unsubscribeDroneChargeCloseProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDroneChargeCloseProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void setDockAirConditionerMode(const std::string& device_sn, int mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeviceDebugModule","setDockAirConditionerMode",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setDockSilentMode(const std::string& device_sn, int mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeviceDebugModule","setDockSilentMode",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setDistanceLimit(const std::string& device_sn, int distance_limit_state, int distance_limit_value, const std::function<void(FlightHubError err, SetDistanceLimitResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setDistanceLimit",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,distance_limit_state),Convert<int>::to(probeEnv,distance_limit_value)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetDistanceLimitResult>(1));
}
void setHeightLimit(const std::string& device_sn, int height_limit, const std::function<void(FlightHubError err, SetHeightLimitResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setHeightLimit",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,height_limit)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetHeightLimitResult>(1));
}
void setObstacleAvoidance(const std::string& device_sn, int obstacle_avoidance_state, const std::function<void(FlightHubError err, SetObstacleAvoidanceResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setObstacleAvoidance",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,obstacle_avoidance_state)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetObstacleAvoidanceResult>(1));
}
void setRemainingPowerForRth(const std::string& device_sn, int remaining_power_for_rth, const std::function<void(FlightHubError err, SetRemainingPowerForRthResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setRemainingPowerForRth",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,remaining_power_for_rth)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetRemainingPowerForRthResult>(1));
}
void setNightLightsState(const std::string& device_sn, int night_lights_state, const std::function<void(FlightHubError err, SetNightLightsStateResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setNightLightsState",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,night_lights_state)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetNightLightsStateResult>(1));
}
void switchAlarmLightState(const std::string& device_sn, int alarm_state, const std::function<void(FlightHubError err, SwitchAlarmStateResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","switchAlarmLightState",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,alarm_state)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SwitchAlarmStateResult>(1));
}
void esimOperatorSwitch(const std::string& device_sn, const std::string& imei, int operator_type, const std::string& device_type, const std::function<void(FlightHubError err, EsimOperatorSwitchResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","esimOperatorSwitch",{Convert<std::string>::to(probeEnv,device_sn),Convert<std::string>::to(probeEnv,imei),Convert<int>::to(probeEnv,operator_type),Convert<std::string>::to(probeEnv,device_type)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<EsimOperatorSwitchResult>(1));
}
int subscribeDeviceEsimOperatorSwitchProgress(const std::string& device_sn, const std::function<void(EsimOperatorSwitchResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDeviceEsimOperatorSwitchProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<EsimOperatorSwitchResult>(0));
return 73;
}
void unsubscribeDeviceEsimOperatorSwitchProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDeviceEsimOperatorSwitchProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void simSlotSwitch(const std::string& device_sn, const std::string& imei, int sim_slot, const std::string& device_type, const std::function<void(FlightHubError err, SimSlotSwitchResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","simSlotSwitch",{Convert<std::string>::to(probeEnv,device_sn),Convert<std::string>::to(probeEnv,imei),Convert<int>::to(probeEnv,sim_slot),Convert<std::string>::to(probeEnv,device_type)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SimSlotSwitchResult>(1));
}
int subscribeDeviceSimSlotSwitchProgress(const std::string& device_sn, const std::function<void(SimSlotSwitchResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","subscribeDeviceSimSlotSwitchProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<SimSlotSwitchResult>(0));
return 73;
}
void unsubscribeDeviceSimSlotSwitchProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","unsubscribeDeviceSimSlotSwitchProgress",{Convert<int>::to(probeEnv,listen_id)});
}
void setBatteryStoreMode(const std::string& device_sn, int battery_store_mode, const std::function<void(FlightHubError err, SetBatteryStoreModeResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setBatteryStoreMode",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,battery_store_mode)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetBatteryStoreModeResult>(1));
}
void startManualBatterySwap(const std::string& device_sn, int slot_id, const std::function<void(FlightHubError err, ManualBatterySwapResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","startManualBatterySwap",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,slot_id)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ManualBatterySwapResult>(1));
}
void getManualBatterySwapProgress(const std::string& device_sn, const std::function<void(FlightHubError err, ManualBatterySwapProgressResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","getManualBatterySwapProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ManualBatterySwapProgressResult>(1));
}
void setDonglePowerSwitch(const std::string& device_sn, int power_state, const std::function<void(FlightHubError err, DonglePowerSwitchResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setDonglePowerSwitch",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,power_state)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DonglePowerSwitchResult>(1));
}
void setLowPowerSwitch(const std::string& device_sn, int low_power_mode, const std::function<void(FlightHubError err, LowPowerSwitchResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","setLowPowerSwitch",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,low_power_mode)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LowPowerSwitchResult>(1));
}
void getEsimOperatorSwitchProgress(const std::string& device_sn, const std::function<void(FlightHubError err, EsimOperatorSwitchProgressResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","getEsimOperatorSwitchProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<EsimOperatorSwitchProgressResult>(1));
}
void setGeoCagingEnable(const std::string& device_sn, int geo_caging_switch, const std::vector<GeoCagingInfoParam>& geo_caging_infos, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeviceDebugModule","setGeoCagingEnable",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,geo_caging_switch),Convert<std::vector<GeoCagingInfoParam>>::to(probeEnv,geo_caging_infos)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void cloudEnvironmentSwitch(const CloudEnvironmentSwitchParam& param, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeviceDebugModule","cloudEnvironmentSwitch",{Convert<CloudEnvironmentSwitchParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void cloudEnvironmentSwitchCallback(const CloudEnvironmentSwitchCallbackParam& param, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DeviceDebugModule","cloudEnvironmentSwitchCallback",{Convert<CloudEnvironmentSwitchCallbackParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDeviceCloudEnvironmentSwitchProgress(const std::string& device_sn, const std::function<void(CloudEnvironmentSwitchResult result)>& callback) override {
ProbeRecord("DeviceDebugModule","listenDeviceCloudEnvironmentSwitchProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<CloudEnvironmentSwitchResult>(0));
return 73;
}
void cancelListenDeviceCloudEnvironmentSwitchProgress(int listen_id) override {
ProbeRecord("DeviceDebugModule","cancelListenDeviceCloudEnvironmentSwitchProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IDeviceDebugModule> MakeProbeDeviceDebugModule(){return std::make_shared<ProbeDeviceDebugModule>();}
struct ProbeDeviceHMSModule: IDeviceHMSModule {
int listenDeviceHMS(
        const std::function<void(const HmsData& msg)>& callback) override {
ProbeRecord("DeviceHMSModule","listenDeviceHMS",{});
if(callback)callback(ProbeValue<HmsData>(0));
return 73;
}
void cancelListenDeviceHMS(int listen_id) override {
ProbeRecord("DeviceHMSModule","cancelListenDeviceHMS",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IDeviceHMSModule> MakeProbeDeviceHMSModule(){return std::make_shared<ProbeDeviceHMSModule>();}
struct ProbeDeviceManageModule: IDeviceManageModule {
void getDeviceList(std::function<void(const std::vector<DeviceTopo>&, const FlightHubError err)> callback) override {
ProbeRecord("DeviceManageModule","getDeviceList",{});
if(callback)callback(ProbeValue<std::vector<DeviceTopo>>(0),ProbeValue<FlightHubError>(1));
}
void getDeviceDetailInfo(const std::string& device_sn, std::function<void(FlightHubError err, const DeviceDetailInfo& device_detail)> callback) override {
ProbeRecord("DeviceManageModule","getDeviceDetailInfo",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceDetailInfo>(1));
}
void modifyDeviceName(const ModifyDeviceNameParam& device_list, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("DeviceManageModule","modifyDeviceName",{Convert<ModifyDeviceNameParam>::to(probeEnv,device_list)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenWorkspaceDeviceChanged(const std::function<void(const WorkspaceDeviceChange& msg)>& callback) override {
ProbeRecord("DeviceManageModule","listenWorkspaceDeviceChanged",{});
if(callback)callback(ProbeValue<WorkspaceDeviceChange>(0));
return 73;
}
void cancelListenWorkspaceDeviceChanged(int listen_id) override {
ProbeRecord("DeviceManageModule","cancelListenWorkspaceDeviceChanged",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDeviceTopoChanged(const std::function<void(const DeviceTopoChange& msg)>& callback) override {
ProbeRecord("DeviceManageModule","listenDeviceTopoChanged",{});
if(callback)callback(ProbeValue<DeviceTopoChange>(0));
return 73;
}
void cancelListenDeviceTopoChanged(int listen_id) override {
ProbeRecord("DeviceManageModule","cancelListenDeviceTopoChanged",{Convert<int>::to(probeEnv,listen_id)});
}
void unbindDevice(const std::vector<std::string>& device_sns, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("DeviceManageModule","unbindDevice",{Convert<std::vector<std::string>>::to(probeEnv,device_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getDockDeviceStatus(const std::vector<std::string>& device_sns, std::function<void(FlightHubError err, const DockDeviceStatusResultList& status)> callback) override {
ProbeRecord("DeviceManageModule","getDockDeviceStatus",{Convert<std::vector<std::string>>::to(probeEnv,device_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DockDeviceStatusResultList>(1));
}
void getDroneDeviceStatus(const std::vector<std::string>& device_sns, std::function<void(FlightHubError err, const DroneDeviceStatusResultList& status)> callback) override {
ProbeRecord("DeviceManageModule","getDroneDeviceStatus",{Convert<std::vector<std::string>>::to(probeEnv,device_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DroneDeviceStatusResultList>(1));
}
};
std::shared_ptr<IDeviceManageModule> MakeProbeDeviceManageModule(){return std::make_shared<ProbeDeviceManageModule>();}
struct ProbeDeviceStateModule: IDeviceStateModule {
int listenDockOnlineStatus(
        const std::function<void(const DockOnlineStatus& status)>& callback) override {
ProbeRecord("DeviceStateModule","listenDockOnlineStatus",{});
if(callback)callback(ProbeValue<DockOnlineStatus>(0));
return 73;
}
void cancelListenDockOnlineStatus(int listen_id) override {
ProbeRecord("DeviceStateModule","cancelListenDockOnlineStatus",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneOnlineStatus(
        const std::function<void(const DroneOnlineStatus& status)>& callback) override {
ProbeRecord("DeviceStateModule","listenDroneOnlineStatus",{});
if(callback)callback(ProbeValue<DroneOnlineStatus>(0));
return 73;
}
void cancelListenDroneOnlineStatus(int listen_id) override {
ProbeRecord("DeviceStateModule","cancelListenDroneOnlineStatus",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IDeviceStateModule> MakeProbeDeviceStateModule(){return std::make_shared<ProbeDeviceStateModule>();}
struct ProbeDiagnosisManagementModule: IDiagnosisManagementModule {
void createSelfDiagnosis(
        const CreateSelfDiagnosisParams &params,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DiagnosisManagementModule","createSelfDiagnosis",{Convert<CreateSelfDiagnosisParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void operateSelfDiagnosis(
        const OperateSelfDiagnosisParams &params,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DiagnosisManagementModule","operateSelfDiagnosis",{Convert<OperateSelfDiagnosisParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getSelfDiagnosisReport(
        const std::string &report_uuid,
        const std::function<void(const GetSelfDiagnosisReportResults& results, FlightHubError err)>& callback) override {
ProbeRecord("DiagnosisManagementModule","getSelfDiagnosisReport",{Convert<std::string>::to(probeEnv,report_uuid)});
if(callback)callback(ProbeValue<GetSelfDiagnosisReportResults>(0),ProbeValue<FlightHubError>(1));
}
void getSelfDiagnosisReportList(
        const GetSelfDiagnosisReportListParams &params,
        const std::function<void(const GetSelfDiagnosisReportListResults& results, FlightHubError err)>& callback) override {
ProbeRecord("DiagnosisManagementModule","getSelfDiagnosisReportList",{Convert<GetSelfDiagnosisReportListParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<GetSelfDiagnosisReportListResults>(0),ProbeValue<FlightHubError>(1));
}
};
std::shared_ptr<IDiagnosisManagementModule> MakeProbeDiagnosisManagementModule(){return std::make_shared<ProbeDiagnosisManagementModule>();}
struct ProbeDock: IDock {
std::shared_ptr<ILiveModule> getLiveStream(const LiveInfo& params) override {
ProbeRecord("Dock","getLiveStream",{Convert<LiveInfo>::to(probeEnv,params)});
return MakeProbeLiveModule();
}
std::shared_ptr<ILiveRecordModule> getLiveRecord(const LiveInfo& params) override {
ProbeRecord("Dock","getLiveRecord",{Convert<LiveInfo>::to(probeEnv,params)});
return MakeProbeLiveRecordModule();
}
std::shared_ptr<ILiveDeviceModule> getLiveDeviceModule() override {
ProbeRecord("Dock","getLiveDeviceModule",{});
return MakeProbeLiveDeviceModule();
}
std::shared_ptr<IDockOsdModule> getDockOsdModule() override {
ProbeRecord("Dock","getDockOsdModule",{});
return MakeProbeDockOsdModule();
}
std::shared_ptr<IDeployModule> getDeployModule() override {
ProbeRecord("Dock","getDeployModule",{});
return MakeProbeDeployModule();
}
std::shared_ptr<IDockControlModule> getDockControlModule() override {
ProbeRecord("Dock","getDockControlModule",{});
return MakeProbeDockControlModule();
}
std::shared_ptr<IRtkCalibrationModule> getRtkCalibrationModule() override {
ProbeRecord("Dock","getRtkCalibrationModule",{});
return MakeProbeRtkCalibrationModule();
}
std::shared_ptr<INetworkTestModule> getNetworkTestModule() override {
ProbeRecord("Dock","getNetworkTestModule",{});
return MakeProbeNetworkTestModule();
}
std::shared_ptr<IDeviceDebugModule> getDeviceDebugModule() override {
ProbeRecord("Dock","getDeviceDebugModule",{});
return MakeProbeDeviceDebugModule();
}
std::shared_ptr<IDeviceStateModule> getDeviceStateModule() override {
ProbeRecord("Dock","getDeviceStateModule",{});
return MakeProbeDeviceStateModule();
}
std::shared_ptr<IDeviceHMSModule> getDeviceHMSModule() override {
ProbeRecord("Dock","getDeviceHMSModule",{});
return MakeProbeDeviceHMSModule();
}
};
std::shared_ptr<IDock> MakeProbeDock(){return std::make_shared<ProbeDock>();}
struct ProbeDockControlModule: IDockControlModule {
void changeDockCameraPosition(
        const LiveInfo& live_info,
        int camera_position,
        const std::string& gateway_sn,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DockControlModule","changeDockCameraPosition",{Convert<LiveInfo>::to(probeEnv,live_info),Convert<int>::to(probeEnv,camera_position),Convert<std::string>::to(probeEnv,gateway_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDockAirConditionerStatusInfo(const std::function<void(const DockAirConditionerStatusInfo &msg)>& callback) override {
ProbeRecord("DockControlModule","listenDockAirConditionerStatusInfo",{});
if(callback)callback(ProbeValue<DockAirConditionerStatusInfo>(0));
return 73;
}
void cancelListenDockAirConditionerStatusInfo(int listen_id) override {
ProbeRecord("DockControlModule","cancelListenDockAirConditionerStatusInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockSupplementLightState(const std::function<void(const DockSupplementLightState &msg)>& callback) override {
ProbeRecord("DockControlModule","listenDockSupplementLightState",{});
if(callback)callback(ProbeValue<DockSupplementLightState>(0));
return 73;
}
void cancelListenDockSupplementLightState(int listen_id) override {
ProbeRecord("DockControlModule","cancelListenDockSupplementLightState",{Convert<int>::to(probeEnv,listen_id)});
}
void setDockSupplementLightState(bool state, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DockControlModule","setDockSupplementLightState",{Convert<bool>::to(probeEnv,state)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setDockChargeState(bool state, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DockControlModule","setDockChargeState",{Convert<bool>::to(probeEnv,state)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setDockCoverState(int mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DockControlModule","setDockCoverState",{Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setDockAirConditionerMode(int mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("DockControlModule","setDockAirConditionerMode",{Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
};
std::shared_ptr<IDockControlModule> MakeProbeDockControlModule(){return std::make_shared<ProbeDockControlModule>();}
struct ProbeDockOsdModule: IDockOsdModule {
int listenDockLocation(const std::function<void(const DockLocation &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockLocation",{});
if(callback)callback(ProbeValue<DockLocation>(0));
return 73;
}
void cancelListenDockLocation(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockLocation",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneInDock(const std::function<void(const DroneInDock &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDroneInDock",{});
if(callback)callback(ProbeValue<DroneInDock>(0));
return 73;
}
void cancelListenDroneInDock(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDroneInDock",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockCoverState(const std::function<void(const DockCoverState &msg)> & callback) override {
ProbeRecord("DockOsdModule","listenDockCoverState",{});
if(callback)callback(ProbeValue<DockCoverState>(0));
return 73;
}
void cancelListenDockCoverState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockCoverState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockDroneChargeState(const std::function<void(const DockDroneChargeState &msg)> & callback) override {
ProbeRecord("DockOsdModule","listenDockDroneChargeState",{});
if(callback)callback(ProbeValue<DockDroneChargeState>(0));
return 73;
}
void cancelListenDockDroneChargeState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockDroneChargeState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockMeteorologicalInfo(const std::function<void(const DockMeteorologicalInfo &msg)> & callback) override {
ProbeRecord("DockOsdModule","listenDockMeteorologicalInfo",{});
if(callback)callback(ProbeValue<DockMeteorologicalInfo>(0));
return 73;
}
void cancelListenDockMeteorologicalInfo(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockMeteorologicalInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockBackupBatteryInfo(const std::function<void(const DockBackupBatteryInfo &msg)> & callback) override {
ProbeRecord("DockOsdModule","listenDockBackupBatteryInfo",{});
if(callback)callback(ProbeValue<DockBackupBatteryInfo>(0));
return 73;
}
void cancelListenDockBackupBatteryInfo(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockBackupBatteryInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockMaintainStatusInfo(const std::function<void(const DockMaintainStatusInfo &msg)> & callback) override {
ProbeRecord("DockOsdModule","listenDockMaintainStatusInfo",{});
if(callback)callback(ProbeValue<DockMaintainStatusInfo>(0));
return 73;
}
void cancelListenDockMaintainStatusInfo(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockMaintainStatusInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockModeCode(const std::function<void(const DockModeCode &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockModeCode",{});
if(callback)callback(ProbeValue<DockModeCode>(0));
return 73;
}
void cancelListenDockModeCode(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockModeCode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenFlightTaskStepCode(const std::function<void(const FlightTaskStepCode &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenFlightTaskStepCode",{});
if(callback)callback(ProbeValue<FlightTaskStepCode>(0));
return 73;
}
void cancelListenFlightTaskStepCode(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenFlightTaskStepCode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockSubDevice(const std::function<void(const DockSubDeviceInfoList &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockSubDevice",{});
if(callback)callback(ProbeValue<DockSubDeviceInfoList>(0));
return 73;
}
void cancelListenDockSubDevice(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockSubDevice",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockNetworkState(const std::function<void(const DockNetworkState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockNetworkState",{});
if(callback)callback(ProbeValue<DockNetworkState>(0));
return 73;
}
void cancelListenDockNetworkState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockNetworkState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockMediaFileDetail(const std::function<void(const DockMediaFileDetail &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockMediaFileDetail",{});
if(callback)callback(ProbeValue<DockMediaFileDetail>(0));
return 73;
}
void cancelListenDockMediaFileDetail(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockMediaFileDetail",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockWirelessLink(const std::function<void(const DockWirelessLink &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockWirelessLink",{});
if(callback)callback(ProbeValue<DockWirelessLink>(0));
return 73;
}
void cancelListenDockWirelessLink(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockWirelessLink",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockJobNumber(const std::function<void(const DockJobNumber &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockJobNumber",{});
if(callback)callback(ProbeValue<DockJobNumber>(0));
return 73;
}
void cancelListenDockJobNumber(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockJobNumber",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockPowerState(const std::function<void(const DockPowerState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockPowerState",{});
if(callback)callback(ProbeValue<DockPowerState>(0));
return 73;
}
void cancelListenDockPowerState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockPowerState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockStorageState(const std::function<void(const DockStorageState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockStorageState",{});
if(callback)callback(ProbeValue<DockStorageState>(0));
return 73;
}
void cancelListenDockStorageState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockStorageState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockFirstPowerOnTime(const std::function<void(const DockFirstPowerOnTime &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockFirstPowerOnTime",{});
if(callback)callback(ProbeValue<DockFirstPowerOnTime>(0));
return 73;
}
void cancelListenDockFirstPowerOnTime(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockFirstPowerOnTime",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockAccumulatedRunningTime(const std::function<void(const DockAccTime &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockAccumulatedRunningTime",{});
if(callback)callback(ProbeValue<DockAccTime>(0));
return 73;
}
void cancelListenDockAccumulatedRunningTime(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockAccumulatedRunningTime",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockAlternateLandPoint(const std::function<void(const DockAlternateLandPoint &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockAlternateLandPoint",{});
if(callback)callback(ProbeValue<DockAlternateLandPoint>(0));
return 73;
}
void cancelListenDockAlternateLandPoint(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockAlternateLandPoint",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockPositionState(const std::function<void(const DockPositionState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockPositionState",{});
if(callback)callback(ProbeValue<DockPositionState>(0));
return 73;
}
void cancelListenDockPositionState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockPositionState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockActivationTime(const std::function<void(const DockActivationTime &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockActivationTime",{});
if(callback)callback(ProbeValue<DockActivationTime>(0));
return 73;
}
void cancelListenDockActivationTime(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockActivationTime",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockBatteryStoreMode(const std::function<void(const DockBatteryStoreMode &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockBatteryStoreMode",{});
if(callback)callback(ProbeValue<DockBatteryStoreMode>(0));
return 73;
}
void cancelListenDockBatteryStoreMode(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockBatteryStoreMode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockAlarmState(const std::function<void(const DockAlarmState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockAlarmState",{});
if(callback)callback(ProbeValue<DockAlarmState>(0));
return 73;
}
void cancelListenDockAlarmState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockAlarmState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockDroneBatteryMaintenanceInfo(const std::function<void(const DockDroneBatteryMaintenanceInfo &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockDroneBatteryMaintenanceInfo",{});
if(callback)callback(ProbeValue<DockDroneBatteryMaintenanceInfo>(0));
return 73;
}
void cancelListenDockDroneBatteryMaintenanceInfo(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockDroneBatteryMaintenanceInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockEmergencyStopState(const std::function<void(const DockEmergencyStopState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockEmergencyStopState",{});
if(callback)callback(ProbeValue<DockEmergencyStopState>(0));
return 73;
}
void cancelListenDockEmergencyStopState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockEmergencyStopState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockSilentMode(const std::function<void(const DockSilentMode &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockSilentMode",{});
if(callback)callback(ProbeValue<DockSilentMode>(0));
return 73;
}
void cancelListenDockSilentMode(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockSilentMode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockUserExperienceImprovement(const std::function<void(const DockUserExperienceImprovement &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockUserExperienceImprovement",{});
if(callback)callback(ProbeValue<DockUserExperienceImprovement>(0));
return 73;
}
void cancelListenDockUserExperienceImprovement(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockUserExperienceImprovement",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockDrcState(const std::function<void(const DockDrcState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockDrcState",{});
if(callback)callback(ProbeValue<DockDrcState>(0));
return 73;
}
void cancelListenDockDrcState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockDrcState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockPutterState(const std::function<void(const DockPutterState &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockPutterState",{});
if(callback)callback(ProbeValue<DockPutterState>(0));
return 73;
}
void cancelListenDockPutterState(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockPutterState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockRelativeAlternateLandPoint(const std::function<void(const DockRelativeAlternateLandPoint &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockRelativeAlternateLandPoint",{});
if(callback)callback(ProbeValue<DockRelativeAlternateLandPoint>(0));
return 73;
}
void cancelListenDockRelativeAlternateLandPoint(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockRelativeAlternateLandPoint",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockSelfConvergeCoordinate(const std::function<void(const DockSelfConvergeCoordinate &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockSelfConvergeCoordinate",{});
if(callback)callback(ProbeValue<DockSelfConvergeCoordinate>(0));
return 73;
}
void cancelListenDockSelfConvergeCoordinate(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockSelfConvergeCoordinate",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockFirmwareInfo(const std::function<void(const DockFirmwareInfo &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockFirmwareInfo",{});
if(callback)callback(ProbeValue<DockFirmwareInfo>(0));
return 73;
}
void cancelListenDockFirmwareInfo(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockFirmwareInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockDongleInfos(const std::function<void(const DockDongleInfos &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockDongleInfos",{});
if(callback)callback(ProbeValue<DockDongleInfos>(0));
return 73;
}
void cancelListenDockDongleInfos(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockDongleInfos",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockAirConditionerMode(const std::function<void(const DockAirConditionerMode &msg)>& callback) override {
ProbeRecord("DockOsdModule","listenDockAirConditionerMode",{});
if(callback)callback(ProbeValue<DockAirConditionerMode>(0));
return 73;
}
void cancelListenDockAirConditionerMode(int listen_id) override {
ProbeRecord("DockOsdModule","cancelListenDockAirConditionerMode",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IDockOsdModule> MakeProbeDockOsdModule(){return std::make_shared<ProbeDockOsdModule>();}
struct ProbeDrcModule: IDrcModule {
int listenLinkStatus(const std::function<void(const LinkStatus& status)>& callback) override {
ProbeRecord("DrcModule","listenLinkStatus",{});
if(callback)callback(ProbeValue<LinkStatus>(0));
return 73;
}
void cancelListenLinkStatus(int listen_id) override {
ProbeRecord("DrcModule","cancelListenLinkStatus",{Convert<int>::to(probeEnv,listen_id)});
}
void connectDrcLink(const std::function<void(FlightHubSdkErrorCode)>& callback) override {
ProbeRecord("DrcModule","connectDrcLink",{});
if(callback)callback(ProbeValue<FlightHubSdkErrorCode>(0));
}
void disconnectDrcLink(const std::function<void(FlightHubSdkErrorCode)>& callback) override {
ProbeRecord("DrcModule","disconnectDrcLink",{});
if(callback)callback(ProbeValue<FlightHubSdkErrorCode>(0));
}
void drcRtcQualityTest(const RtcQualityTestParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("DrcModule","drcRtcQualityTest",{Convert<RtcQualityTestParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcDelayInfo(const std::function<void(const DrcDelayInfo&)>& callback) override {
ProbeRecord("DrcModule","listenDrcDelayInfo",{});
if(callback)callback(ProbeValue<DrcDelayInfo>(0));
return 73;
}
void cancelListenDrcDelayInfo(int listen_id) override {
ProbeRecord("DrcModule","cancelListenDrcDelayInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcCountDownInfo(const std::function<void(const DrcCountDownInfo&)>& callback) override {
ProbeRecord("DrcModule","listenDrcCountDownInfo",{});
if(callback)callback(ProbeValue<DrcCountDownInfo>(0));
return 73;
}
void cancelListenDrcCountDownInfo(int listen_id) override {
ProbeRecord("DrcModule","cancelListenDrcCountDownInfo",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IDrcModule> MakeProbeDrcModule(){return std::make_shared<ProbeDrcModule>();}
struct ProbeDrone: IDrone {
std::shared_ptr<ILiveModule> getLiveStream(const LiveInfo& params) override {
ProbeRecord("Drone","getLiveStream",{Convert<LiveInfo>::to(probeEnv,params)});
return MakeProbeLiveModule();
}
std::shared_ptr<ILiveRecordModule> getLiveRecord(const LiveInfo& params) override {
ProbeRecord("Drone","getLiveRecord",{Convert<LiveInfo>::to(probeEnv,params)});
return MakeProbeLiveRecordModule();
}
std::shared_ptr<ILiveDeviceModule> getLiveDeviceModule() override {
ProbeRecord("Drone","getLiveDeviceModule",{});
return MakeProbeLiveDeviceModule();
}
std::shared_ptr<ITakeoffModule> getTakeoffModule() override {
ProbeRecord("Drone","getTakeoffModule",{});
return MakeProbeTakeoffModule();
}
std::shared_ptr<IFlightControlModule> getFlightControlModule() override {
ProbeRecord("Drone","getFlightControlModule",{});
return MakeProbeFlightControlModule();
}
std::shared_ptr<IControlAuthModule> getControlAuthModule() override {
ProbeRecord("Drone","getControlAuthModule",{});
return MakeProbeControlAuthModule();
}
std::shared_ptr<IDrcModule> getDrcModule() override {
ProbeRecord("Drone","getDrcModule",{});
return MakeProbeDrcModule();
}
std::shared_ptr<IFlightSettingsModule> getFlightSettingsModule() override {
ProbeRecord("Drone","getFlightSettingsModule",{});
return MakeProbeFlightSettingsModule();
}
std::shared_ptr<ITestFlightModule> getTestFlightModule() override {
ProbeRecord("Drone","getTestFlightModule",{});
return MakeProbeTestFlightModule();
}
std::shared_ptr<IOnboardAiModule> getOnboardAiModule() override {
ProbeRecord("Drone","getOnboardAiModule",{});
return MakeProbeOnboardAiModule();
}
std::shared_ptr<IPsdkControlModule> getPsdkControlModule() override {
ProbeRecord("Drone","getPsdkControlModule",{});
return MakeProbePsdkControlModule();
}
std::shared_ptr<ICameraControlModule> getCameraControlModule() override {
ProbeRecord("Drone","getCameraControlModule",{});
return MakeProbeCameraControlModule();
}
std::shared_ptr<IFlyToPointModule> getFlyToPointModule() override {
ProbeRecord("Drone","getFlyToPointModule",{});
return MakeProbeFlyToPointModule();
}
std::shared_ptr<IFlightTaskControlModule> getFlightTaskControlModule() override {
ProbeRecord("Drone","getFlightTaskControlModule",{});
return MakeProbeFlightTaskControlModule();
}
std::shared_ptr<IPoiModule> getPoiModule() override {
ProbeRecord("Drone","getPoiModule",{});
return MakeProbePoiModule();
}
std::shared_ptr<IInFlightWaylineModule> getInFlightWaylineModule() override {
ProbeRecord("Drone","getInFlightWaylineModule",{});
return MakeProbeInFlightWaylineModule();
}
std::shared_ptr<IDroneOsdModule> getDroneOsdModule() override {
ProbeRecord("Drone","getDroneOsdModule",{});
return MakeProbeDroneOsdModule();
}
std::shared_ptr<IDeviceStateModule> getDeviceStateModule() override {
ProbeRecord("Drone","getDeviceStateModule",{});
return MakeProbeDeviceStateModule();
}
std::shared_ptr<IDeviceHMSModule> getDeviceHMSModule() override {
ProbeRecord("Drone","getDeviceHMSModule",{});
return MakeProbeDeviceHMSModule();
}
std::shared_ptr<IDeviceDebugModule> getDeviceDebugModule() override {
ProbeRecord("Drone","getDeviceDebugModule",{});
return MakeProbeDeviceDebugModule();
}
std::shared_ptr<IAIBoxModule> getAIBoxModule() override {
ProbeRecord("Drone","getAIBoxModule",{});
return MakeProbeAIBoxModule();
}
};
std::shared_ptr<IDrone> MakeProbeDrone(){return std::make_shared<ProbeDrone>();}
struct ProbeDroneOsdModule: IDroneOsdModule {
int listenAircraftBatteryInfo(const std::function<void(const AircraftBatteryInfo &battery_info)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftBatteryInfo",{});
if(callback)callback(ProbeValue<AircraftBatteryInfo>(0));
return 73;
}
void cancelListenAircraftBatteryInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftBatteryInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftAttitude(const std::function<void(const AircraftAttitude &attitude)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftAttitude",{});
if(callback)callback(ProbeValue<AircraftAttitude>(0));
return 73;
}
void cancelListenAircraftAttitude(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftAttitude",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftLocation(const std::function<void(const AircraftLocation &location)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftLocation",{});
if(callback)callback(ProbeValue<AircraftLocation>(0));
return 73;
}
void cancelListenAircraftLocation(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftLocation",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftModeCode(const std::function<void(const AircraftModeCode &mode_code)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftModeCode",{});
if(callback)callback(ProbeValue<AircraftModeCode>(0));
return 73;
}
void cancelListenAircraftModeCode(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftModeCode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftWindSpeed(const std::function<void(const AircraftWindSpeed &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftWindSpeed",{});
if(callback)callback(ProbeValue<AircraftWindSpeed>(0));
return 73;
}
void cancelListenAircraftWindSpeed(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftWindSpeed",{Convert<int>::to(probeEnv,listen_id)});
}
int listenFlightTasksException(const std::function<void(const FlightTaskException &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenFlightTasksException",{});
if(callback)callback(ProbeValue<FlightTaskException>(0));
return 73;
}
void cancelListenFlightTasksException(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenFlightTasksException",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftControlCode(const std::function<void(const AircraftControlCode &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftControlCode",{});
if(callback)callback(ProbeValue<AircraftControlCode>(0));
return 73;
}
void cancelListenAircraftControlCode(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftControlCode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftSpeed(const std::function<void(const AircraftSpeed &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftSpeed",{});
if(callback)callback(ProbeValue<AircraftSpeed>(0));
return 73;
}
void cancelListenAircraftSpeed(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftSpeed",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftPayloadsCameraLiveviewWorldRegion(const std::function<void(const AircraftPayloadsCameraLiveviewWorldRegion &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftPayloadsCameraLiveviewWorldRegion",{});
if(callback)callback(ProbeValue<AircraftPayloadsCameraLiveviewWorldRegion>(0));
return 73;
}
void cancelListenAircraftPayloadsCameraLiveviewWorldRegion(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftPayloadsCameraLiveviewWorldRegion",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftPayloadsGimbalAttitude(const std::function<void(const AircraftPayloadsGimbalAttitude &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftPayloadsGimbalAttitude",{});
if(callback)callback(ProbeValue<AircraftPayloadsGimbalAttitude>(0));
return 73;
}
void cancelListenAircraftPayloadsGimbalAttitude(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftPayloadsGimbalAttitude",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftPayloadsList(const std::function<void(const AircraftPayloadsList &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftPayloadsList",{});
if(callback)callback(ProbeValue<AircraftPayloadsList>(0));
return 73;
}
void cancelListenAircraftPayloadsList(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftPayloadsList",{Convert<int>::to(probeEnv,listen_id)});
}
int listenControlRightsCloudControlStatus(const std::function<void(const ControlRightsCloudControlStatus &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenControlRightsCloudControlStatus",{});
if(callback)callback(ProbeValue<ControlRightsCloudControlStatus>(0));
return 73;
}
void cancelListenControlRightsCloudControlStatus(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenControlRightsCloudControlStatus",{Convert<int>::to(probeEnv,listen_id)});
}
int listenControlRightsDeviceControlStatus(const std::function<void(const ControlRightsDeviceControlStatus &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenControlRightsDeviceControlStatus",{});
if(callback)callback(ProbeValue<ControlRightsDeviceControlStatus>(0));
return 73;
}
void cancelListenControlRightsDeviceControlStatus(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenControlRightsDeviceControlStatus",{Convert<int>::to(probeEnv,listen_id)});
}
int listenFlightTasksMediaFileDisplayAvailable(const std::function<void(const FlightTasksMediaFileDisplayAvailable &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenFlightTasksMediaFileDisplayAvailable",{});
if(callback)callback(ProbeValue<FlightTasksMediaFileDisplayAvailable>(0));
return 73;
}
void cancelListenFlightTasksMediaFileDisplayAvailable(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenFlightTasksMediaFileDisplayAvailable",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftPayloadsOsdInfo(const std::function<void(const AircraftPayloadsOsdInfoList &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftPayloadsOsdInfo",{});
if(callback)callback(ProbeValue<AircraftPayloadsOsdInfoList>(0));
return 73;
}
void cancelListenAircraftPayloadsOsdInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftPayloadsOsdInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneModeCodeReason(const std::function<void(const DroneModeCodeReason &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenDroneModeCodeReason",{});
if(callback)callback(ProbeValue<DroneModeCodeReason>(0));
return 73;
}
void cancelListenDroneModeCodeReason(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenDroneModeCodeReason",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneDongleInfos(const std::function<void(const DroneDongleInfos &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenDroneDongleInfos",{});
if(callback)callback(ProbeValue<DroneDongleInfos>(0));
return 73;
}
void cancelListenDroneDongleInfos(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenDroneDongleInfos",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneFlysafeDatabaseVersion(const std::function<void(const DroneFlysafeDatabaseVersion &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenDroneFlysafeDatabaseVersion",{});
if(callback)callback(ProbeValue<DroneFlysafeDatabaseVersion>(0));
return 73;
}
void cancelListenDroneFlysafeDatabaseVersion(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenDroneFlysafeDatabaseVersion",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneWpmzVersion(const std::function<void(const DroneWpmzVersion &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenDroneWpmzVersion",{});
if(callback)callback(ProbeValue<DroneWpmzVersion>(0));
return 73;
}
void cancelListenDroneWpmzVersion(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenDroneWpmzVersion",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftGear(const std::function<void(const AircraftGear &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftGear",{});
if(callback)callback(ProbeValue<AircraftGear>(0));
return 73;
}
void cancelListenAircraftGear(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftGear",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftHomeDistance(const std::function<void(const AircraftHomeDistance &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftHomeDistance",{});
if(callback)callback(ProbeValue<AircraftHomeDistance>(0));
return 73;
}
void cancelListenAircraftHomeDistance(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftHomeDistance",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftPositionState(const std::function<void(const AircraftPositionState &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftPositionState",{});
if(callback)callback(ProbeValue<AircraftPositionState>(0));
return 73;
}
void cancelListenAircraftPositionState(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftPositionState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftControlSource(const std::function<void(const AircraftControlSource &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftControlSource",{});
if(callback)callback(ProbeValue<AircraftControlSource>(0));
return 73;
}
void cancelListenAircraftControlSource(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftControlSource",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftLimitsInfo(const std::function<void(const AircraftLimitsInfo &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftLimitsInfo",{});
if(callback)callback(ProbeValue<AircraftLimitsInfo>(0));
return 73;
}
void cancelListenAircraftLimitsInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftLimitsInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftBatteryWarningThresholds(const std::function<void(const AircraftBatteryWarningThresholds &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftBatteryWarningThresholds",{});
if(callback)callback(ProbeValue<AircraftBatteryWarningThresholds>(0));
return 73;
}
void cancelListenAircraftBatteryWarningThresholds(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftBatteryWarningThresholds",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftFirmwareStatus(const std::function<void(const AircraftFirmwareStatus &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftFirmwareStatus",{});
if(callback)callback(ProbeValue<AircraftFirmwareStatus>(0));
return 73;
}
void cancelListenAircraftFirmwareStatus(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftFirmwareStatus",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftTotalFlightInfo(const std::function<void(const AircraftTotalFlightInfo &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftTotalFlightInfo",{});
if(callback)callback(ProbeValue<AircraftTotalFlightInfo>(0));
return 73;
}
void cancelListenAircraftTotalFlightInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftTotalFlightInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftActivationTime(const std::function<void(const AircraftActivationTime &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftActivationTime",{});
if(callback)callback(ProbeValue<AircraftActivationTime>(0));
return 73;
}
void cancelListenAircraftActivationTime(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftActivationTime",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftMaintainStatusInfo(const std::function<void(const AircraftMaintainStatusInfo &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftMaintainStatusInfo",{});
if(callback)callback(ProbeValue<AircraftMaintainStatusInfo>(0));
return 73;
}
void cancelListenAircraftMaintainStatusInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftMaintainStatusInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftNightLightsState(const std::function<void(const AircraftNightLightsState &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftNightLightsState",{});
if(callback)callback(ProbeValue<AircraftNightLightsState>(0));
return 73;
}
void cancelListenAircraftNightLightsState(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftNightLightsState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftObstacleAvoidanceState(const std::function<void(const AircraftObstacleAvoidanceState &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftObstacleAvoidanceState",{});
if(callback)callback(ProbeValue<AircraftObstacleAvoidanceState>(0));
return 73;
}
void cancelListenAircraftObstacleAvoidanceState(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftObstacleAvoidanceState",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftStorageInfo(const std::function<void(const AircraftStorageInfo &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftStorageInfo",{});
if(callback)callback(ProbeValue<AircraftStorageInfo>(0));
return 73;
}
void cancelListenAircraftStorageInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftStorageInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftTrackId(const std::function<void(const AircraftTrackId &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftTrackId",{});
if(callback)callback(ProbeValue<AircraftTrackId>(0));
return 73;
}
void cancelListenAircraftTrackId(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftTrackId",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftComplianceInfo(const std::function<void(const AircraftComplianceInfo &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftComplianceInfo",{});
if(callback)callback(ProbeValue<AircraftComplianceInfo>(0));
return 73;
}
void cancelListenAircraftComplianceInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftComplianceInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftPayloadsCamerasList(const std::function<void(const AircraftPayloadsCamerasList &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftPayloadsCamerasList",{});
if(callback)callback(ProbeValue<AircraftPayloadsCamerasList>(0));
return 73;
}
void cancelListenAircraftPayloadsCamerasList(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftPayloadsCamerasList",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftRcLostAction(const std::function<void(const AircraftRcLostAction &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftRcLostAction",{});
if(callback)callback(ProbeValue<AircraftRcLostAction>(0));
return 73;
}
void cancelListenAircraftRcLostAction(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftRcLostAction",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftRthInfo(const std::function<void(const AircraftRthInfo &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftRthInfo",{});
if(callback)callback(ProbeValue<AircraftRthInfo>(0));
return 73;
}
void cancelListenAircraftRthInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftRthInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftHomeGeographicalInfo(const std::function<void(const AircraftHomeGeographicalInfo &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftHomeGeographicalInfo",{});
if(callback)callback(ProbeValue<AircraftHomeGeographicalInfo>(0));
return 73;
}
void cancelListenAircraftHomeGeographicalInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftHomeGeographicalInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenAircraftCurrentRthMode(const std::function<void(const AircraftCurrentRthMode &msg)>& callback) override {
ProbeRecord("DroneOsdModule","listenAircraftCurrentRthMode",{});
if(callback)callback(ProbeValue<AircraftCurrentRthMode>(0));
return 73;
}
void cancelListenAircraftCurrentRthMode(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenAircraftCurrentRthMode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenHsiInfo(const std::function<void(const HsiInfo&)>& callback) override {
ProbeRecord("DroneOsdModule","listenHsiInfo",{});
if(callback)callback(ProbeValue<HsiInfo>(0));
return 73;
}
void cancelListenHsiInfo(int listen_id) override {
ProbeRecord("DroneOsdModule","cancelListenHsiInfo",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IDroneOsdModule> MakeProbeDroneOsdModule(){return std::make_shared<ProbeDroneOsdModule>();}
struct ProbeElementModule: IElementModule {
void createElement(
        const CreateElementParams& params,
        std::function<void(FlightHubError err, const CreateElementResult& result)> callback) override {
ProbeRecord("ElementModule","createElement",{Convert<CreateElementParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CreateElementResult>(1));
}
void updateElement(
        const UpdateElementParams& params,
        std::function<void(FlightHubError err, const UpdateElementResult& result)> callback) override {
ProbeRecord("ElementModule","updateElement",{Convert<UpdateElementParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UpdateElementResult>(1));
}
void listElementHierarchy(
        const ListElementHierarchyParams& params,
        std::function<void(FlightHubError err, const ListElementHierarchyResult& result)> callback) override {
ProbeRecord("ElementModule","listElementHierarchy",{Convert<ListElementHierarchyParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ListElementHierarchyResult>(1));
}
void setElementVisibility(
        const SetElementVisibilityParams& params,
        std::function<void(FlightHubError err, const SetElementVisibilityResult& result)> callback) override {
ProbeRecord("ElementModule","setElementVisibility",{Convert<SetElementVisibilityParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetElementVisibilityResult>(1));
}
void deleteElement(
        const DeleteElementParams& params,
        std::function<void(FlightHubError err, const DeleteElementResult& result)> callback) override {
ProbeRecord("ElementModule","deleteElement",{Convert<DeleteElementParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeleteElementResult>(1));
}
int listenElementCreate(
        const std::function<void(const ElementCreateMsg& msg)>& callback) override {
ProbeRecord("ElementModule","listenElementCreate",{});
if(callback)callback(ProbeValue<ElementCreateMsg>(0));
return 73;
}
void cancelListenElementCreate(int listen_id) override {
ProbeRecord("ElementModule","cancelListenElementCreate",{Convert<int>::to(probeEnv,listen_id)});
}
int listenElementUpdate(
        const std::function<void(const ElementUpdateMsg& msg)>& callback) override {
ProbeRecord("ElementModule","listenElementUpdate",{});
if(callback)callback(ProbeValue<ElementUpdateMsg>(0));
return 73;
}
void cancelListenElementUpdate(int listen_id) override {
ProbeRecord("ElementModule","cancelListenElementUpdate",{Convert<int>::to(probeEnv,listen_id)});
}
int listenElementDelete(
        const std::function<void(const ElementDeleteMsg& msg)>& callback) override {
ProbeRecord("ElementModule","listenElementDelete",{});
if(callback)callback(ProbeValue<ElementDeleteMsg>(0));
return 73;
}
void cancelListenElementDelete(int listen_id) override {
ProbeRecord("ElementModule","cancelListenElementDelete",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IElementModule> MakeProbeElementModule(){return std::make_shared<ProbeElementModule>();}
struct ProbeFirmwareManageModule: IFirmwareManageModule {
void getLatestFirmwareReleaseNote(const std::vector<std::string>& device_model_keys, const std::string& language, std::function<void(FlightHubError err, FirmwareReleaseNoteListResult release_note_list)> callback) override {
ProbeRecord("FirmwareManageModule","getLatestFirmwareReleaseNote",{Convert<std::vector<std::string>>::to(probeEnv,device_model_keys),Convert<std::string>::to(probeEnv,language)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FirmwareReleaseNoteListResult>(1));
}
void invokeFirmwareUpgrade(const FirmwareUpgradeParam& params, std::function<void(FlightHubError err, FirmwareUpgradeResult result)> callback) override {
ProbeRecord("FirmwareManageModule","invokeFirmwareUpgrade",{Convert<FirmwareUpgradeParam>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FirmwareUpgradeResult>(1));
}
void queryFirmwareUpgradeProgress(const std::string& device_sn, std::function<void(FlightHubError err, FirmwareUpgradeProgressResult progress_list)> callback) override {
ProbeRecord("FirmwareManageModule","queryFirmwareUpgradeProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FirmwareUpgradeProgressResult>(1));
}
void uploadFirmwareFile(const std::string& file_path, std::function<void(FlightHubError err, UploadFileResults results)> callback) override {
ProbeRecord("FirmwareManageModule","uploadFirmwareFile",{Convert<std::string>::to(probeEnv,file_path)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UploadFileResults>(1));
}
void releaseFirmware(const std::string& file_id, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FirmwareManageModule","releaseFirmware",{Convert<std::string>::to(probeEnv,file_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void unReleaseFirmware(const std::string& file_id, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FirmwareManageModule","unReleaseFirmware",{Convert<std::string>::to(probeEnv,file_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void deleteFirmware(const std::string& file_id, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FirmwareManageModule","deleteFirmware",{Convert<std::string>::to(probeEnv,file_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void queryFirmwareList(int page, int page_size, std::function<void(FlightHubError err, FirmwareListResult firmware_list)> callback) override {
ProbeRecord("FirmwareManageModule","queryFirmwareList",{Convert<int>::to(probeEnv,page),Convert<int>::to(probeEnv,page_size)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FirmwareListResult>(1));
}
void queryFirmwareCompatibilityConfig(std::function<void(FlightHubError err, FirmwareCompatibilityConfigResult config)> callback) override {
ProbeRecord("FirmwareManageModule","queryFirmwareCompatibilityConfig",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FirmwareCompatibilityConfigResult>(1));
}
void checkFirmwareStatus(const std::vector<std::string>& device_sns, const std::vector<std::string>& status, std::function<void(FlightHubError err, FirmwareStatusListResult status_list)> callback) override {
ProbeRecord("FirmwareManageModule","checkFirmwareStatus",{Convert<std::vector<std::string>>::to(probeEnv,device_sns),Convert<std::vector<std::string>>::to(probeEnv,status)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FirmwareStatusListResult>(1));
}
void submitFirmwareInfo(const FirmwareInfoParam& firmware_info, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FirmwareManageModule","submitFirmwareInfo",{Convert<FirmwareInfoParam>::to(probeEnv,firmware_info)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDeviceOtaProgress(
        const std::string& device_sn,
        const std::function<void(const DeviceOtaProgress& msg)>& callback) override {
ProbeRecord("FirmwareManageModule","listenDeviceOtaProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<DeviceOtaProgress>(0));
return 73;
}
void cancelListenDeviceOtaProgress(int listen_id) override {
ProbeRecord("FirmwareManageModule","cancelListenDeviceOtaProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IFirmwareManageModule> MakeProbeFirmwareManageModule(){return std::make_shared<ProbeFirmwareManageModule>();}
struct ProbeFlashLedModule: IFlashLedModule {
void getFlashLedConfigList(
        std::function<void(FlightHubError err, const FlashLedConfigList& list)> callback) override {
ProbeRecord("FlashLedModule","getFlashLedConfigList",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlashLedConfigList>(1));
}
void createFlashLedConfig(
        const FlashLedConfigParams& params,
        std::function<void(FlightHubError err, const FlashLedConfig& config)> callback) override {
ProbeRecord("FlashLedModule","createFlashLedConfig",{Convert<FlashLedConfigParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlashLedConfig>(1));
}
void updateFlashLedConfig(
        const std::string& config_id,
        const FlashLedConfigParams& params,
        std::function<void(FlightHubError err, const FlashLedConfig& config)> callback) override {
ProbeRecord("FlashLedModule","updateFlashLedConfig",{Convert<std::string>::to(probeEnv,config_id),Convert<FlashLedConfigParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlashLedConfig>(1));
}
void deleteFlashLedConfig(
        const std::string& config_id,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlashLedModule","deleteFlashLedConfig",{Convert<std::string>::to(probeEnv,config_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
};
std::shared_ptr<IFlashLedModule> MakeProbeFlashLedModule(){return std::make_shared<ProbeFlashLedModule>();}
struct ProbeFlightControlModule: IFlightControlModule {
void drcEmergencyStop(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlightControlModule","drcEmergencyStop",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcEmergencyLanding(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlightControlModule","drcEmergencyLanding",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcForceLanding(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlightControlModule","drcForceLanding",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void returnHome(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlightControlModule","returnHome",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void returnHomeCancel(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlightControlModule","returnHomeCancel",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSendStickControl(const StickControlData& data) override {
ProbeRecord("FlightControlModule","drcSendStickControl",{Convert<StickControlData>::to(probeEnv,data)});
}
void drcSetDroneHover(int duration, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("FlightControlModule","drcSetDroneHover",{Convert<int>::to(probeEnv,duration)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetFollowMouseParameter(int speed, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("FlightControlModule","drcSetFollowMouseParameter",{Convert<int>::to(probeEnv,speed)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetNightLightsState(int night_lights_state, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("FlightControlModule","drcSetNightLightsState",{Convert<int>::to(probeEnv,night_lights_state)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetStealthState(int stealth_state, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("FlightControlModule","drcSetStealthState",{Convert<int>::to(probeEnv,stealth_state)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcOpenParachute(int force, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("FlightControlModule","drcOpenParachute",{Convert<int>::to(probeEnv,force)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void drcSetFlashLed(const FlashLedParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("FlightControlModule","drcSetFlashLed",{Convert<FlashLedParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcFlashLed(const std::function<void(const FlashLedStateInfo&)>& callback) override {
ProbeRecord("FlightControlModule","listenDrcFlashLed",{});
if(callback)callback(ProbeValue<FlashLedStateInfo>(0));
return 73;
}
void cancelListenDrcFlashLed(int listen_id) override {
ProbeRecord("FlightControlModule","cancelListenDrcFlashLed",{Convert<int>::to(probeEnv,listen_id)});
}
void drcCameraLookAt(const CameraLookAtParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("FlightControlModule","drcCameraLookAt",{Convert<CameraLookAtParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcOsdInfo(const std::function<void(const DrcOsdInfo&)>& callback) override {
ProbeRecord("FlightControlModule","listenDrcOsdInfo",{});
if(callback)callback(ProbeValue<DrcOsdInfo>(0));
return 73;
}
void cancelListenDrcOsdInfo(int listen_id) override {
ProbeRecord("FlightControlModule","cancelListenDrcOsdInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcBatteriesInfo(const std::function<void(const DrcBatteriesInfo&)>& callback) override {
ProbeRecord("FlightControlModule","listenDrcBatteriesInfo",{});
if(callback)callback(ProbeValue<DrcBatteriesInfo>(0));
return 73;
}
void cancelListenDrcBatteriesInfo(int listen_id) override {
ProbeRecord("FlightControlModule","cancelListenDrcBatteriesInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcParachuteInfo(const std::function<void(const DrcParachuteInfo&)>& callback) override {
ProbeRecord("FlightControlModule","listenDrcParachuteInfo",{});
if(callback)callback(ProbeValue<DrcParachuteInfo>(0));
return 73;
}
void cancelListenDrcParachuteInfo(int listen_id) override {
ProbeRecord("FlightControlModule","cancelListenDrcParachuteInfo",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IFlightControlModule> MakeProbeFlightControlModule(){return std::make_shared<ProbeFlightControlModule>();}
struct ProbeFlightSettingsModule: IFlightSettingsModule {
void setFlightSmartPlanMode(
        const std::string& device_sn,
        int mode,
        std::function<void(FlightHubError err, const FlightSmartPlanModeResult& result)> callback) override {
ProbeRecord("FlightSettingsModule","setFlightSmartPlanMode",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlightSmartPlanModeResult>(1));
}
void setOutOfControlAction(
        const std::string& device_sn,
        const std::string& action,
        std::function<void(FlightHubError err, const FlightOutOfControlActionResult& result)> callback) override {
ProbeRecord("FlightSettingsModule","setOutOfControlAction",{Convert<std::string>::to(probeEnv,device_sn),Convert<std::string>::to(probeEnv,action)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlightOutOfControlActionResult>(1));
}
void setFlightTaskHeight(
        const std::string& device_sn,
        int height,
        std::function<void(FlightHubError err, const FlightCommanderHeightResult& result)> callback) override {
ProbeRecord("FlightSettingsModule","setFlightTaskHeight",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,height)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlightCommanderHeightResult>(1));
}
void setRthAltitude(
        const std::string& device_sn,
        int altitude,
        std::function<void(FlightHubError err, const FlightRthAltitudeResult& result)> callback) override {
ProbeRecord("FlightSettingsModule","setRthAltitude",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,altitude)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlightRthAltitudeResult>(1));
}
void setAirTransferEnable(
        const std::string& device_sn,
        bool enabled,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlightSettingsModule","setAirTransferEnable",{Convert<std::string>::to(probeEnv,device_sn),Convert<bool>::to(probeEnv,enabled)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
};
std::shared_ptr<IFlightSettingsModule> MakeProbeFlightSettingsModule(){return std::make_shared<ProbeFlightSettingsModule>();}
struct ProbeFlightTaskControlModule: IFlightTaskControlModule {
void pause(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlightTaskControlModule","pause",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void resume(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlightTaskControlModule","resume",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenWaylineTaskEvent(const std::function<void(const WaylineTaskEvent& msg)>& callback) override {
ProbeRecord("FlightTaskControlModule","listenWaylineTaskEvent",{});
if(callback)callback(ProbeValue<WaylineTaskEvent>(0));
return 73;
}
void cancelListenWaylineTaskEvent(int listen_id) override {
ProbeRecord("FlightTaskControlModule","cancelListenWaylineTaskEvent",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IFlightTaskControlModule> MakeProbeFlightTaskControlModule(){return std::make_shared<ProbeFlightTaskControlModule>();}
struct ProbeFlightTaskModule: IFlightTaskModule {
void getFlightTaskList(const FlightTaskListParams& params, std::function<void(FlightHubError err, const FlightTaskListResult& result)> callback) override {
ProbeRecord("FlightTaskModule","getFlightTaskList",{Convert<FlightTaskListParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<FlightTaskListResult>(1));
}
void getCommandTaskList(const GetCommandTaskListParams& params, std::function<void(FlightHubError err, const GetCommandTaskListResults& results)> callback) override {
ProbeRecord("FlightTaskModule","getCommandTaskList",{Convert<GetCommandTaskListParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetCommandTaskListResults>(1));
}
void getFlightTaskTrack(const GetFlightTaskTrackParams& params, std::function<void(FlightHubError err, const GetFlightTaskTrackResults& results)> callback) override {
ProbeRecord("FlightTaskModule","getFlightTaskTrack",{Convert<GetFlightTaskTrackParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetFlightTaskTrackResults>(1));
}
void createFlightTask(const CreateTaskReq& req, std::function<void(FlightHubError err, const CreateTaskResp& result)> callback) override {
ProbeRecord("FlightTaskModule","createFlightTask",{Convert<CreateTaskReq>::to(probeEnv,req)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CreateTaskResp>(1));
}
void getFlightTaskDetail(const std::string& task_uuid, std::function<void(FlightHubError err, const TaskDetail& result)> callback) override {
ProbeRecord("FlightTaskModule","getFlightTaskDetail",{Convert<std::string>::to(probeEnv,task_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TaskDetail>(1));
}
void editFlightTask(const std::string& task_uuid, const EditTaskReq& req, std::function<void(FlightHubError err, const CreateTaskResp& result)> callback) override {
ProbeRecord("FlightTaskModule","editFlightTask",{Convert<std::string>::to(probeEnv,task_uuid),Convert<EditTaskReq>::to(probeEnv,req)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CreateTaskResp>(1));
}
void deleteFlightTask(const std::string& task_uuid, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlightTaskModule","deleteFlightTask",{Convert<std::string>::to(probeEnv,task_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void updateFlightTaskStatus(const std::string& task_uuid, int status, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlightTaskModule","updateFlightTaskStatus",{Convert<std::string>::to(probeEnv,task_uuid),Convert<int>::to(probeEnv,status)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void batchUpdateFlightTaskStatus(const BatchUpdateStatusReq& req, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlightTaskModule","batchUpdateFlightTaskStatus",{Convert<BatchUpdateStatusReq>::to(probeEnv,req)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getDeviceRecommendation(const DeviceRecommendationReq& req, std::function<void(FlightHubError err, const DeviceRecommendationResp& result)> callback) override {
ProbeRecord("FlightTaskModule","getDeviceRecommendation",{Convert<DeviceRecommendationReq>::to(probeEnv,req)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceRecommendationResp>(1));
}
void getDeviceTcas(const std::vector<std::string>& center_sn, std::function<void(FlightHubError err, const GetTCAInfosResp& result)> callback) override {
ProbeRecord("FlightTaskModule","getDeviceTcas",{Convert<std::vector<std::string>>::to(probeEnv,center_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetTCAInfosResp>(1));
}
void updateDeviceTcas(const std::vector<std::string>& center_sn, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlightTaskModule","updateDeviceTcas",{Convert<std::vector<std::string>>::to(probeEnv,center_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void startRoaming(const StartRoamingParams& params, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlightTaskModule","startRoaming",{Convert<StartRoamingParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setRoamingStationSn(const SetRoamingStationSnParams& params,
                                     std::function<void(FlightHubError err, const SetRoamingStationSnResult& result)> callback) override {
ProbeRecord("FlightTaskModule","setRoamingStationSn",{Convert<SetRoamingStationSnParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetRoamingStationSnResult>(1));
}
void getInFlightTaskTopos(const std::vector<std::string>& drone_sns,
                                      std::function<void(FlightHubError err, const GetInFlightTaskToposResult& result)> callback) override {
ProbeRecord("FlightTaskModule","getInFlightTaskTopos",{Convert<std::vector<std::string>>::to(probeEnv,drone_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetInFlightTaskToposResult>(1));
}
int listenTaskTopoChanged(const std::function<void(const TaskTopoChangedEvent&)>& callback) override {
ProbeRecord("FlightTaskModule","listenTaskTopoChanged",{});
if(callback)callback(ProbeValue<TaskTopoChangedEvent>(0));
return 73;
}
void cancelListenTaskTopoChanged(int listen_id) override {
ProbeRecord("FlightTaskModule","cancelListenTaskTopoChanged",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IFlightTaskModule> MakeProbeFlightTaskModule(){return std::make_shared<ProbeFlightTaskModule>();}
struct ProbeFlightTaskRecordModule: IFlightTaskRecordModule {
void exportFlightRecords(
        const std::string &user_id,
        const ExportFlightRecordsRequestParams &params,
        const std::function<void(FlightHubError err, const ExportFlightRecordsResults& results)>& callback) override {
ProbeRecord("FlightTaskRecordModule","exportFlightRecords",{Convert<std::string>::to(probeEnv,user_id),Convert<ExportFlightRecordsRequestParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ExportFlightRecordsResults>(1));
}
void getExportFlightRecordsProgress(
        const GetExportFlightRecordsProgressParams &params,
        const std::function<void(FlightHubError err, const GetExportFlightRecordsProgressResults& results)>& callback) override {
ProbeRecord("FlightTaskRecordModule","getExportFlightRecordsProgress",{Convert<GetExportFlightRecordsProgressParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetExportFlightRecordsProgressResults>(1));
}
};
std::shared_ptr<IFlightTaskRecordModule> MakeProbeFlightTaskRecordModule(){return std::make_shared<ProbeFlightTaskRecordModule>();}
struct ProbeFlyToPointModule: IFlyToPointModule {
void start(const FlyToPointParams& params, const std::function<void(FlightHubError err, std::string fly_to_id)> callback) override {
ProbeRecord("FlyToPointModule","start",{Convert<FlyToPointParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<std::string>(1));
}
void drcStop(const std::function<void(FlightHubError err)> callback) override {
ProbeRecord("FlyToPointModule","drcStop",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void updateTargetPoints(const FlyToUpdateTargetPointsParams& params, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("FlyToPointModule","updateTargetPoints",{Convert<FlyToUpdateTargetPointsParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenFlyToTaskEvent(const std::function<void(const FlyToTaskEvent& msg)>& callback) override {
ProbeRecord("FlyToPointModule","listenFlyToTaskEvent",{});
if(callback)callback(ProbeValue<FlyToTaskEvent>(0));
return 73;
}
void cancelListenFlyToTaskEvent(int listen_id) override {
ProbeRecord("FlyToPointModule","cancelListenFlyToTaskEvent",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeFlyToDroneSelfPlanPath(const std::function<void(const FlyToDroneSelfPlanPath& path)>& callback) override {
ProbeRecord("FlyToPointModule","subscribeFlyToDroneSelfPlanPath",{});
if(callback)callback(ProbeValue<FlyToDroneSelfPlanPath>(0));
return 73;
}
void unsubscribeFlyToDroneSelfPlanPath(int listen_id) override {
ProbeRecord("FlyToPointModule","unsubscribeFlyToDroneSelfPlanPath",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeFlyToPointProgress(const std::function<void(const FlyToPointProgress& progress)>& callback) override {
ProbeRecord("FlyToPointModule","subscribeFlyToPointProgress",{});
if(callback)callback(ProbeValue<FlyToPointProgress>(0));
return 73;
}
void unsubscribeFlyToPointProgress(int listen_id) override {
ProbeRecord("FlyToPointModule","unsubscribeFlyToPointProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IFlyToPointModule> MakeProbeFlyToPointModule(){return std::make_shared<ProbeFlyToPointModule>();}
struct ProbeHMSModule: IHMSModule {
void QueryHistoryHMSData(const HistoryHmsDataParam& params, std::function<void(FlightHubError err, const HistoryHmsDataResult&)> callback) override {
ProbeRecord("HMSModule","QueryHistoryHMSData",{Convert<HistoryHmsDataParam>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<HistoryHmsDataResult>(1));
}
};
std::shared_ptr<IHMSModule> MakeProbeHMSModule(){return std::make_shared<ProbeHMSModule>();}
struct ProbeInFlightWaylineModule: IInFlightWaylineModule {
void createInFlightWaylineTask(
        const CreateInFlightWaylineTaskParams& params,
        const std::function<void(const CreateInFlightWaylineTaskResult& result, FlightHubError err)>& callback) override {
ProbeRecord("InFlightWaylineModule","createInFlightWaylineTask",{Convert<CreateInFlightWaylineTaskParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<CreateInFlightWaylineTaskResult>(0),ProbeValue<FlightHubError>(1));
}
void controlInFlightWaylineTask(
        InFlightWaylineControlAction action,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("InFlightWaylineModule","controlInFlightWaylineTask",{Convert<InFlightWaylineControlAction>::to(probeEnv,action)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getActiveInFlightWaylineTask(
        const std::function<void(const ActiveInFlightWaylineTaskInfo& info, FlightHubError err)>& callback) override {
ProbeRecord("InFlightWaylineModule","getActiveInFlightWaylineTask",{});
if(callback)callback(ProbeValue<ActiveInFlightWaylineTaskInfo>(0),ProbeValue<FlightHubError>(1));
}
int listenInFlightWaylineProgress(
        const std::function<void(const InFlightWaylineProgress& msg)>& callback) override {
ProbeRecord("InFlightWaylineModule","listenInFlightWaylineProgress",{});
if(callback)callback(ProbeValue<InFlightWaylineProgress>(0));
return 73;
}
void cancelListenInFlightWaylineProgress(int listen_id) override {
ProbeRecord("InFlightWaylineModule","cancelListenInFlightWaylineProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IInFlightWaylineModule> MakeProbeInFlightWaylineModule(){return std::make_shared<ProbeInFlightWaylineModule>();}
struct ProbeLiveDeviceModule: ILiveDeviceModule {
int listenLiveAvailableRange(
        const std::function<void(const std::vector<LiveInfo>&)>& callback) override {
ProbeRecord("LiveDeviceModule","listenLiveAvailableRange",{});
if(callback)callback(ProbeValue<std::vector<LiveInfo>>(0));
return 73;
}
void cancelListenLiveAvailableRange(int listen_id) override {
ProbeRecord("LiveDeviceModule","cancelListenLiveAvailableRange",{Convert<int>::to(probeEnv,listen_id)});
}
void getAudienceCount(
        const AudienceCountGroup* group,
        const std::function<void(FlightHubError err, const std::vector<DeviceAudienceCountItem>& result)>& callback) override {
ProbeRecord("LiveDeviceModule","getAudienceCount",{group?Convert<AudienceCountGroup>::to(probeEnv,*group):Null(probeEnv)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<std::vector<DeviceAudienceCountItem>>(1));
}
int listenDockLiveStatus(const std::function<void(const DockLiveStatus& msg)>& callback) override {
ProbeRecord("LiveDeviceModule","listenDockLiveStatus",{});
if(callback)callback(ProbeValue<DockLiveStatus>(0));
return 73;
}
void cancelListenDockLiveStatus(int listen_id) override {
ProbeRecord("LiveDeviceModule","cancelListenDockLiveStatus",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDockLiveCapacity(const std::function<void(const DockLiveCapacity& msg)>& callback) override {
ProbeRecord("LiveDeviceModule","listenDockLiveCapacity",{});
if(callback)callback(ProbeValue<DockLiveCapacity>(0));
return 73;
}
void cancelListenDockLiveCapacity(int listen_id) override {
ProbeRecord("LiveDeviceModule","cancelListenDockLiveCapacity",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<ILiveDeviceModule> MakeProbeLiveDeviceModule(){return std::make_shared<ProbeLiveDeviceModule>();}
struct ProbeLiveRecordModule: ILiveRecordModule {
void startLiveRecord(const std::string& time_zone, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("LiveRecordModule","startLiveRecord",{Convert<std::string>::to(probeEnv,time_zone)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void stopLiveRecord(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("LiveRecordModule","stopLiveRecord",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getDeviceLiveRecords(const std::string& device_sn, const std::function<void(FlightHubError err, const std::vector<LiveRecordItem>& records)>& callback) override {
ProbeRecord("LiveRecordModule","getDeviceLiveRecords",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<std::vector<LiveRecordItem>>(1));
}
int listenRecordState(const std::function<void(const LiveRecordStateInfo& info)>& callback) override {
ProbeRecord("LiveRecordModule","listenRecordState",{});
if(callback)callback(ProbeValue<LiveRecordStateInfo>(0));
return 73;
}
void cancelListenRecordState(int listen_id) override {
ProbeRecord("LiveRecordModule","cancelListenRecordState",{Convert<int>::to(probeEnv,listen_id)});
}
void notifyRecordState(const LiveRecordStateInfo& info) override {
ProbeRecord("LiveRecordModule","notifyRecordState",{Convert<LiveRecordStateInfo>::to(probeEnv,info)});
}
};
std::shared_ptr<ILiveRecordModule> MakeProbeLiveRecordModule(){return std::make_shared<ProbeLiveRecordModule>();}
struct ProbeLiveModule: ILiveModule {
void start(const std::function<void(FlightHubError result)>& callback) override {
ProbeRecord("LiveModule","start",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void startWithURL(const std::function<void(FlightHubError err, const LiveStreamStartResult& result)>& callback) override {
ProbeRecord("LiveModule","startWithURL",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LiveStreamStartResult>(1));
}
void stop() override {
ProbeRecord("LiveModule","stop",{});
}
void stopWithURL(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("LiveModule","stopWithURL",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int subscribeLiveStream(const std::function<void(const std::vector<uint8_t>& data, const FrameInfo& frame_info)>& callback) override {
ProbeRecord("LiveModule","subscribeLiveStream",{});
if(callback)callback(ProbeValue<std::vector<uint8_t>>(0),ProbeValue<FrameInfo>(1));
return 73;
}
void unSubscribeLiveStream(int listen_id) override {
ProbeRecord("LiveModule","unSubscribeLiveStream",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeAiSeiInfo(const std::function<void(const AiSeiInfo& ai_sei_info)>& callback) override {
ProbeRecord("LiveModule","subscribeAiSeiInfo",{});
if(callback)callback(ProbeValue<AiSeiInfo>(0));
return 73;
}
void unSubscribeAiSeiInfo(int listen_id) override {
ProbeRecord("LiveModule","unSubscribeAiSeiInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeArSeiInfo(const std::function<void(const ArSeiInfo& ar_sei_info)>& callback) override {
ProbeRecord("LiveModule","subscribeArSeiInfo",{});
if(callback)callback(ProbeValue<ArSeiInfo>(0));
return 73;
}
void unSubscribeArSeiInfo(int listen_id) override {
ProbeRecord("LiveModule","unSubscribeArSeiInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeFovSeiInfo(const std::function<void(const FovSeiInfo& fov_sei_info)>& callback) override {
ProbeRecord("LiveModule","subscribeFovSeiInfo",{});
if(callback)callback(ProbeValue<FovSeiInfo>(0));
return 73;
}
void unSubscribeFovSeiInfo(int listen_id) override {
ProbeRecord("LiveModule","unSubscribeFovSeiInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeAssistantSeiInfo(const std::function<void(const AssistantSeiInfo& assistant_sei_info)>& callback) override {
ProbeRecord("LiveModule","subscribeAssistantSeiInfo",{});
if(callback)callback(ProbeValue<AssistantSeiInfo>(0));
return 73;
}
void unSubscribeAssistantSeiInfo(int listen_id) override {
ProbeRecord("LiveModule","unSubscribeAssistantSeiInfo",{Convert<int>::to(probeEnv,listen_id)});
}
int subscribeEisSeiInfo(const std::function<void(const EisSeiInfo& eis_sei_info)>& callback) override {
ProbeRecord("LiveModule","subscribeEisSeiInfo",{});
if(callback)callback(ProbeValue<EisSeiInfo>(0));
return 73;
}
void unSubscribeEisSeiInfo(int listen_id) override {
ProbeRecord("LiveModule","unSubscribeEisSeiInfo",{Convert<int>::to(probeEnv,listen_id)});
}
void setLiveQuality(const LiveQualitySettingParams& params, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("LiveModule","setLiveQuality",{Convert<LiveQualitySettingParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
};
std::shared_ptr<ILiveModule> MakeProbeLiveModule(){return std::make_shared<ProbeLiveModule>();}
struct ProbeLiveSyncModule: ILiveSyncModule {
void createLiveSync(
        const LiveSyncCreateParams& params,
        std::function<void(FlightHubError err, LiveSyncCreateResult result)> callback) override {
ProbeRecord("LiveSyncModule","createLiveSync",{Convert<LiveSyncCreateParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LiveSyncCreateResult>(1));
}
void deleteLiveSync(
        const std::string& id,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("LiveSyncModule","deleteLiveSync",{Convert<std::string>::to(probeEnv,id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void updateLiveSync(
        const LiveSyncUpdateParams& params,
        std::function<void(FlightHubError err, LiveSyncItem result)> callback) override {
ProbeRecord("LiveSyncModule","updateLiveSync",{Convert<LiveSyncUpdateParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LiveSyncItem>(1));
}
void getLiveSyncList(
        const LiveSyncListParams& params,
        std::function<void(FlightHubError err, LiveSyncListResult result)> callback) override {
ProbeRecord("LiveSyncModule","getLiveSyncList",{Convert<LiveSyncListParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LiveSyncListResult>(1));
}
void getLiveSyncDevicesV2(
        std::function<void(FlightHubError err, LiveSyncDevicesV2Result result)> callback) override {
ProbeRecord("LiveSyncModule","getLiveSyncDevicesV2",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LiveSyncDevicesV2Result>(1));
}
void getLiveSyncSummary(
        std::function<void(FlightHubError err, LiveSyncSummaryResult result)> callback) override {
ProbeRecord("LiveSyncModule","getLiveSyncSummary",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LiveSyncSummaryResult>(1));
}
};
std::shared_ptr<ILiveSyncModule> MakeProbeLiveSyncModule(){return std::make_shared<ProbeLiveSyncModule>();}
struct ProbeLogManagementModule: ILogManagementModule {
void QueryDeviceLogList(const std::string& device_sn, const std::vector<int> module_list, const std::function<void(FlightHubError err, DeviceLogListResult result)>& callback) override {
ProbeRecord("LogManagementModule","QueryDeviceLogList",{Convert<std::string>::to(probeEnv,device_sn),Convert<std::vector<int>>::to(probeEnv,module_list)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceLogListResult>(1));
}
void CreateDeviceLogReport(const CreateDeviceLogReportRequestParam& param, const std::function<void(FlightHubError err, CreateDeviceLogReportResult result)>& callback) override {
ProbeRecord("LogManagementModule","CreateDeviceLogReport",{Convert<CreateDeviceLogReportRequestParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CreateDeviceLogReportResult>(1));
}
void LogReportList(const std::string& device_sn, int page, int page_size, const std::function<void(FlightHubError err, LogReportListResult result)>& callback) override {
ProbeRecord("LogManagementModule","LogReportList",{Convert<std::string>::to(probeEnv,device_sn),Convert<int>::to(probeEnv,page),Convert<int>::to(probeEnv,page_size)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<LogReportListResult>(1));
}
void LogReportOperation(const std::string& operation, const std::string& report_id, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("LogManagementModule","LogReportOperation",{Convert<std::string>::to(probeEnv,operation),Convert<std::string>::to(probeEnv,report_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void UploadLogAppendFile(const std::string& file_path, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("LogManagementModule","UploadLogAppendFile",{Convert<std::string>::to(probeEnv,file_path)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDeviceFileUploadProgress(
        const std::string& device_sn,
        const std::function<void(const DeviceFileUploadProgress& msg)>& callback) override {
ProbeRecord("LogManagementModule","listenDeviceFileUploadProgress",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<DeviceFileUploadProgress>(0));
return 73;
}
void cancelListenDeviceFileUploadProgress(int listen_id) override {
ProbeRecord("LogManagementModule","cancelListenDeviceFileUploadProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<ILogManagementModule> MakeProbeLogManagementModule(){return std::make_shared<ProbeLogManagementModule>();}
struct ProbeMaintenanceManagementModule: IMaintenanceManagementModule {
void getRepairConfigs(
        const GetDeviceRepairConfigParams &params,
        const std::function<void(FlightHubError err, const DeviceRepairConfigResults& results)>& callback) override {
ProbeRecord("MaintenanceManagementModule","getRepairConfigs",{Convert<GetDeviceRepairConfigParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DeviceRepairConfigResults>(1));
}
void createMaintenanceOrder(
        const CreateMaintenanceOrderParams &params,
        const std::function<void(FlightHubError err, const CreateMaintenanceOrderResults& results)>& callback) override {
ProbeRecord("MaintenanceManagementModule","createMaintenanceOrder",{Convert<CreateMaintenanceOrderParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CreateMaintenanceOrderResults>(1));
}
void getMaintenanceOrderDetail(
        const std::string &order_number,
        const std::function<void(FlightHubError err, const MaintenanceOrderDetailResults& results)>& callback) override {
ProbeRecord("MaintenanceManagementModule","getMaintenanceOrderDetail",{Convert<std::string>::to(probeEnv,order_number)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<MaintenanceOrderDetailResults>(1));
}
void getMaintenanceOrdersList(
        const GetMaintenanceOrdersListParams &params,
        const std::function<void(FlightHubError err, const MaintenanceOrdersListResults& results)>& callback) override {
ProbeRecord("MaintenanceManagementModule","getMaintenanceOrdersList",{Convert<GetMaintenanceOrdersListParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<MaintenanceOrdersListResults>(1));
}
};
std::shared_ptr<IMaintenanceManagementModule> MakeProbeMaintenanceManagementModule(){return std::make_shared<ProbeMaintenanceManagementModule>();}
struct ProbeMediaServiceModule: IMediaServiceModule {
void getMediaFilesList(
        const GetMediaFilesListParams &request_params,
        const std::function<void(FlightHubError err, const GetMediaFilesListResults& results)>& callback) override {
ProbeRecord("MediaServiceModule","getMediaFilesList",{Convert<GetMediaFilesListParams>::to(probeEnv,request_params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetMediaFilesListResults>(1));
}
void deleteMediaFiles(
        const std::vector<long long> &file_ids,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("MediaServiceModule","deleteMediaFiles",{Convert<std::vector<long long>>::to(probeEnv,file_ids)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getMediaFilesDownloadURL(
        long long file_id,
        const std::function<void(FlightHubError err, const GetMediaFilesDownloadUrlResults& results)>& callback) override {
ProbeRecord("MediaServiceModule","getMediaFilesDownloadURL",{Convert<long long>::to(probeEnv,file_id)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetMediaFilesDownloadUrlResults>(1));
}
void getMediaFilesDownloadURL(
        const std::vector<std::string> & object_keys,
        const std::function<void(FlightHubError err, const GetMediaFilesDownloadUrlListResults& results)>& callback) override {
ProbeRecord("MediaServiceModule","getMediaFilesDownloadURL",{Convert<std::vector<std::string>>::to(probeEnv,object_keys)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetMediaFilesDownloadUrlListResults>(1));
}
int listenMediaFilePostProcessMessage(
        const std::string &device_sn,
        const std::function<void(const MediaFilePostProcess& msg)>& callback) override {
ProbeRecord("MediaServiceModule","listenMediaFilePostProcessMessage",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<MediaFilePostProcess>(0));
return 73;
}
void cancelListenMediaFilePostProcessMessage(int listen_id) override {
ProbeRecord("MediaServiceModule","cancelListenMediaFilePostProcessMessage",{Convert<int>::to(probeEnv,listen_id)});
}
int listenMediaFileDeviceUploadMessage(
        const std::string &device_sn,
        const std::function<void(const MediaFileDeviceUpload& msg)>& callback) override {
ProbeRecord("MediaServiceModule","listenMediaFileDeviceUploadMessage",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<MediaFileDeviceUpload>(0));
return 73;
}
void cancelListenMediaFileDeviceUploadMessage(int listen_id) override {
ProbeRecord("MediaServiceModule","cancelListenMediaFileDeviceUploadMessage",{Convert<int>::to(probeEnv,listen_id)});
}
void getMediaUploadSts(
        const GetMediaUploadStsParams& params,
        const std::function<void(FlightHubError err, const GetMediaUploadStsResult& result)>& callback) override {
ProbeRecord("MediaServiceModule","getMediaUploadSts",{Convert<GetMediaUploadStsParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetMediaUploadStsResult>(1));
}
void mediaUploadCallback(
        const MediaUploadCallbackParams& params,
        const std::function<void(FlightHubError err, const MediaUploadCallbackResult& result)>& callback) override {
ProbeRecord("MediaServiceModule","mediaUploadCallback",{Convert<MediaUploadCallbackParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<MediaUploadCallbackResult>(1));
}
void uploadGeoMediaFile(
        const UploadGeoMediaFileParams& params,
        const std::function<void(FlightHubError err, const UploadGeoMediaFileResult& result)>& callback) override {
ProbeRecord("MediaServiceModule","uploadGeoMediaFile",{Convert<UploadGeoMediaFileParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UploadGeoMediaFileResult>(1));
}
void getMediaFileDetailById(
        int file_id,
        const std::function<void(FlightHubError err, const GetMediaFileDetailByIdResult& result)>& callback) override {
ProbeRecord("MediaServiceModule","getMediaFileDetailById",{Convert<int>::to(probeEnv,file_id)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetMediaFileDetailByIdResult>(1));
}
};
std::shared_ptr<IMediaServiceModule> MakeProbeMediaServiceModule(){return std::make_shared<ProbeMediaServiceModule>();}
struct ProbeNetworkTestModule: INetworkTestModule {
void startNetworkTest(
        const std::function<void(FlightHubError err, NetworkTestProgressResult result)>& callback) override {
ProbeRecord("NetworkTestModule","startNetworkTest",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<NetworkTestProgressResult>(1));
}
void stopNetworkTest(
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("NetworkTestModule","stopNetworkTest",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getNetworkTestProgress(
        const std::function<void(FlightHubError err, NetworkTestProgressResult result)>& callback) override {
ProbeRecord("NetworkTestModule","getNetworkTestProgress",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<NetworkTestProgressResult>(1));
}
int subscribeNetworkTestProgress(
        const std::function<void(NetworkTestProgressResult result)>& callback) override {
ProbeRecord("NetworkTestModule","subscribeNetworkTestProgress",{});
if(callback)callback(ProbeValue<NetworkTestProgressResult>(0));
return 73;
}
void unsubscribeNetworkTestProgress(int listen_id) override {
ProbeRecord("NetworkTestModule","unsubscribeNetworkTestProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<INetworkTestModule> MakeProbeNetworkTestModule(){return std::make_shared<ProbeNetworkTestModule>();}
struct ProbeOnboardAiModule: IOnboardAiModule {
int listenAIDataInfo(const std::function<void(const AiDataInfo& state)>& callback) override {
ProbeRecord("OnboardAiModule","listenAIDataInfo",{});
if(callback)callback(ProbeValue<AiDataInfo>(0));
return 73;
}
void cancelListenAIDataInfo(int listen_id) override {
ProbeRecord("OnboardAiModule","cancelListenAIDataInfo",{Convert<int>::to(probeEnv,listen_id)});
}
void AIIdentifySet(const AiIdentifySetParam& param, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","AIIdentifySet",{Convert<AiIdentifySetParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void AIIdentifyFilterSet(const AiIdentifyFilterSetParam& param, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","AIIdentifyFilterSet",{Convert<AiIdentifyFilterSetParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void AIIdentifyScoreSet(const AiIdentifyScoreSetParam& param, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","AIIdentifyScoreSet",{Convert<AiIdentifyScoreSetParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void AIIdentifyScoreModeSet(const AiIdentifyScoreModeSetParam& param, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","AIIdentifyScoreModeSet",{Convert<AiIdentifyScoreModeSetParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void AIIdentifyScoreReset(const AiIdentifyScoreResetParam& param, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","AIIdentifyScoreReset",{Convert<AiIdentifyScoreResetParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void AIModelSelect(const AiModelSelectParam& param, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","AIModelSelect",{Convert<AiModelSelectParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAISpotlightZoomSet(int on, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAISpotlightZoomSet",{Convert<int>::to(probeEnv,on)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAISpotlightZoomSelect(const AiSpotlightZoomSelectParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAISpotlightZoomSelect",{Convert<AiSpotlightZoomSelectParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAISpotlightZoomConfirm(const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAISpotlightZoomConfirm",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAISpotlightZoomStop(const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAISpotlightZoomStop",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAISpotlightZoomTrack(int target_index, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAISpotlightZoomTrack",{Convert<int>::to(probeEnv,target_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAIAlarmStart(const AiAlarmStartParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAIAlarmStart",{Convert<AiAlarmStartParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAIAlarmStop(const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAIAlarmStop",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcAIModelsConfig(const AiModelsConfigParams& params, const std::function<void(FlightHubError)>& callback) override {
ProbeRecord("OnboardAiModule","DrcAIModelsConfig",{Convert<AiModelsConfigParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcAIAlarmState(const std::function<void(const AiAlarmStateInfo&)>& callback) override {
ProbeRecord("OnboardAiModule","listenDrcAIAlarmState",{});
if(callback)callback(ProbeValue<AiAlarmStateInfo>(0));
return 73;
}
void cancelListenDrcAIAlarmState(int listen_id) override {
ProbeRecord("OnboardAiModule","cancelListenDrcAIAlarmState",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IOnboardAiModule> MakeProbeOnboardAiModule(){return std::make_shared<ProbeOnboardAiModule>();}
struct ProbePoiModule: IPoiModule {
void enter(const POIEnterParams& params, const std::function<void(FlightHubError err, const std::string& task_uuid)>& callback) override {
ProbeRecord("PoiModule","enter",{Convert<POIEnterParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<std::string>(1));
}
void exit(const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PoiModule","exit",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void updateSpeed(double speed, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PoiModule","updateSpeed",{Convert<double>::to(probeEnv,speed)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getTask(const std::function<void(FlightHubError err, const POITaskInfo& task)>& callback) override {
ProbeRecord("PoiModule","getTask",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<POITaskInfo>(1));
}
int listenPoiTaskEvent(const std::function<void(const PoiTaskEvent& msg)>& callback) override {
ProbeRecord("PoiModule","listenPoiTaskEvent",{});
if(callback)callback(ProbeValue<PoiTaskEvent>(0));
return 73;
}
void cancelListenPoiTaskEvent(int listen_id) override {
ProbeRecord("PoiModule","cancelListenPoiTaskEvent",{Convert<int>::to(probeEnv,listen_id)});
}
int listenFlightPoiProgress(const std::function<void(const FlightPoiProgress& msg)>& callback) override {
ProbeRecord("PoiModule","listenFlightPoiProgress",{});
if(callback)callback(ProbeValue<FlightPoiProgress>(0));
return 73;
}
void cancelListenFlightPoiProgress(int listen_id) override {
ProbeRecord("PoiModule","cancelListenFlightPoiProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IPoiModule> MakeProbePoiModule(){return std::make_shared<ProbePoiModule>();}
struct ProbePsdkControlModule: IPsdkControlModule {
int listenDrcPsdkDeviceList(const std::function<void(const PsdkDeviceList& psdk_device_list)>& callback) override {
ProbeRecord("PsdkControlModule","listenDrcPsdkDeviceList",{});
if(callback)callback(ProbeValue<PsdkDeviceList>(0));
return 73;
}
void cancelListenDrcPsdkDeviceList(int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenDrcPsdkDeviceList",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcPsdkStateSummaryInfo(int psdk_index, const std::function<void(PsdkStateSummaryInfo psdk_device_list)>& callback) override {
ProbeRecord("PsdkControlModule","listenDrcPsdkStateSummaryInfo",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<PsdkStateSummaryInfo>(0));
return 73;
}
void cancelListenDrcPsdkStateSummaryInfo(int psdk_index, int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenDrcPsdkStateSummaryInfo",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcPsdkStateSpeakerInfo(int psdk_index, const std::function<void(PsdkStateSpeakerInfo speaker_info)>& callback) override {
ProbeRecord("PsdkControlModule","listenDrcPsdkStateSpeakerInfo",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<PsdkStateSpeakerInfo>(0));
return 73;
}
void cancelListenDrcPsdkStateSpeakerInfo(int psdk_index, int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenDrcPsdkStateSpeakerInfo",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcPsdkStateSearchlightInfo(int psdk_index, const std::function<void(PsdkStateSearchlightInfo searchlight_info)>& callback) override {
ProbeRecord("PsdkControlModule","listenDrcPsdkStateSearchlightInfo",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<PsdkStateSearchlightInfo>(0));
return 73;
}
void cancelListenDrcPsdkStateSearchlightInfo(int psdk_index, int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenDrcPsdkStateSearchlightInfo",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,listen_id)});
}
void DrcSearchlightModeSet(int psdk_index, int mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSearchlightModeSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSearchlightBrightnessSet(int psdk_index, int brightness, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSearchlightBrightnessSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,brightness)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSearchlightCalibration(int psdk_index, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSearchlightCalibration",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSearchlightFineTuningSet(int psdk_index, int position, double value, bool saved, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSearchlightFineTuningSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,position),Convert<double>::to(probeEnv,value),Convert<bool>::to(probeEnv,saved)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSearchlightWideFieldModeSet(int psdk_index, int wide_field_mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSearchlightWideFieldModeSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,wide_field_mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSearchlightLightGimbalControlSet(int psdk_index, int light_gimbal_control, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSearchlightLightGimbalControlSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,light_gimbal_control)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSearchlightTypeSet(int psdk_index, int type, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSearchlightTypeSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,type)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenDrcPsdkSpeakerPlayProgressInfo(int psdk_index, const std::function<void(PsdkSpeakerPlayProgressInfo play_progress_info)>& callback) override {
ProbeRecord("PsdkControlModule","listenDrcPsdkSpeakerPlayProgressInfo",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<PsdkSpeakerPlayProgressInfo>(0));
return 73;
}
void cancelListenDrcPsdkSpeakerPlayProgressInfo(int psdk_index, int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenDrcPsdkSpeakerPlayProgressInfo",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,listen_id)});
}
int listenDrcPsdkFloatingWindowTextInfo(int psdk_index, const std::function<void(PsdkFloatingWindowTextInfo floating_window_text_info)>& callback) override {
ProbeRecord("PsdkControlModule","listenDrcPsdkFloatingWindowTextInfo",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<PsdkFloatingWindowTextInfo>(0));
return 73;
}
void cancelListenDrcPsdkFloatingWindowTextInfo(int psdk_index, int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenDrcPsdkFloatingWindowTextInfo",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,listen_id)});
}
void DrcSpeakerAudioPlayStart(int psdk_index, const PsdkSpeakerAudioPlayInfo& audio_play_info, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerAudioPlayStart",{Convert<int>::to(probeEnv,psdk_index),Convert<PsdkSpeakerAudioPlayInfo>::to(probeEnv,audio_play_info)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerTTSPlayStart(int psdk_index, const PsdkSpeakerTTSPlayInfo& tts_play_info, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerTTSPlayStart",{Convert<int>::to(probeEnv,psdk_index),Convert<PsdkSpeakerTTSPlayInfo>::to(probeEnv,tts_play_info)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerRealTimeStart(int psdk_index, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerRealTimeStart",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerRealTimeStop(int psdk_index, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerRealTimeStop",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerReplay(int psdk_index, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerReplay",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerPlayStop(int psdk_index, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerPlayStop",{Convert<int>::to(probeEnv,psdk_index)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerPlayVolumeSet(int psdk_index, int volume, const std::function<void(FlightHubError err)> &callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerPlayVolumeSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,volume)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerPlayModeSet(int psdk_index, int play_mode, const std::function<void(FlightHubError err)> &callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerPlayModeSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,play_mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcSpeakerTTSSet(int psdk_index, const PsdkSpeakerTTSconfig &tts_config, const std::function<void(FlightHubError err)> &callback) override {
ProbeRecord("PsdkControlModule","DrcSpeakerTTSSet",{Convert<int>::to(probeEnv,psdk_index),Convert<PsdkSpeakerTTSconfig>::to(probeEnv,tts_config)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcWidgetValueSet(int psdk_index, int index, int value, const std::function<void(FlightHubError err)> &callback) override {
ProbeRecord("PsdkControlModule","DrcWidgetValueSet",{Convert<int>::to(probeEnv,psdk_index),Convert<int>::to(probeEnv,index),Convert<int>::to(probeEnv,value)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void DrcWidgetInputBoxTextSet(int psdk_index, const std::string& value, const std::function<void(FlightHubError err)> &callback) override {
ProbeRecord("PsdkControlModule","DrcWidgetInputBoxTextSet",{Convert<int>::to(probeEnv,psdk_index),Convert<std::string>::to(probeEnv,value)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
int listenPsdkSpeakerAudioPlayStartProgress(
        const std::function<void(const PsdkSpeakerPlayStartProgress& msg)>& callback) override {
ProbeRecord("PsdkControlModule","listenPsdkSpeakerAudioPlayStartProgress",{});
if(callback)callback(ProbeValue<PsdkSpeakerPlayStartProgress>(0));
return 73;
}
void cancelListenPsdkSpeakerAudioPlayStartProgress(int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenPsdkSpeakerAudioPlayStartProgress",{Convert<int>::to(probeEnv,listen_id)});
}
int listenPsdkSpeakerTtsPlayStartProgress(
        const std::function<void(const PsdkSpeakerPlayStartProgress& msg)>& callback) override {
ProbeRecord("PsdkControlModule","listenPsdkSpeakerTtsPlayStartProgress",{});
if(callback)callback(ProbeValue<PsdkSpeakerPlayStartProgress>(0));
return 73;
}
void cancelListenPsdkSpeakerTtsPlayStartProgress(int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenPsdkSpeakerTtsPlayStartProgress",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDronePsdkUiResource(
        const std::function<void(const DronePsdkUiResource& msg)>& callback) override {
ProbeRecord("PsdkControlModule","listenDronePsdkUiResource",{});
if(callback)callback(ProbeValue<DronePsdkUiResource>(0));
return 73;
}
void cancelListenDronePsdkUiResource(int listen_id) override {
ProbeRecord("PsdkControlModule","cancelListenDronePsdkUiResource",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IPsdkControlModule> MakeProbePsdkControlModule(){return std::make_shared<ProbePsdkControlModule>();}
struct ProbePsdkResourceModule: IPsdkResourceModule {
void getPsdkSpeakerResourceList(std::function<void(FlightHubError err, const PsdkSpeakerResourceList& psdk_speaker_resource_list)> callback) override {
ProbeRecord("PsdkResourceModule","getPsdkSpeakerResourceList",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<PsdkSpeakerResourceList>(1));
}
void createPsdkSpeakerResource(const CreatePsdkSpeakerResourceParams& params, std::function<void(FlightHubError err, const PsdkSpeakerResource& psdk_speaker_resource)> callback) override {
ProbeRecord("PsdkResourceModule","createPsdkSpeakerResource",{Convert<CreatePsdkSpeakerResourceParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<PsdkSpeakerResource>(1));
}
void editPsdkSpeakerResource(const EditPsdkSpeakerResourceParams& params, std::function<void(FlightHubError err, const PsdkSpeakerResource& psdk_speaker_resource)> callback) override {
ProbeRecord("PsdkResourceModule","editPsdkSpeakerResource",{Convert<EditPsdkSpeakerResourceParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<PsdkSpeakerResource>(1));
}
void deletePsdkSpeakerResource(int resource_id, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("PsdkResourceModule","deletePsdkSpeakerResource",{Convert<int>::to(probeEnv,resource_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getSTS(std::function<void(FlightHubError err, const STSInfo& sts_response)> callback) override {
ProbeRecord("PsdkResourceModule","getSTS",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<STSInfo>(1));
}
void getPsdkWidgetResources(const GetPsdkWidgetResourceParams& params, std::function<void(FlightHubError err, const PsdkWidgetResourceList& psdk_widget_resource_list)> callback) override {
ProbeRecord("PsdkResourceModule","getPsdkWidgetResources",{Convert<GetPsdkWidgetResourceParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<PsdkWidgetResourceList>(1));
}
void uploadSpeakerAudioFile(const std::string& file_path, const STSInfo& sts_info, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("PsdkResourceModule","uploadSpeakerAudioFile",{Convert<std::string>::to(probeEnv,file_path),Convert<STSInfo>::to(probeEnv,sts_info)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
};
std::shared_ptr<IPsdkResourceModule> MakeProbePsdkResourceModule(){return std::make_shared<ProbePsdkResourceModule>();}
struct ProbePullStreamModule: IPullStreamModule {
void start(const std::string& stream_url,
                      const std::function<void(FlightHubSdkErrorCode result)>& callback) override {
ProbeRecord("PullStreamModule","start",{Convert<std::string>::to(probeEnv,stream_url)});
if(callback)callback(ProbeValue<FlightHubSdkErrorCode>(0));
}
void stop() override {
ProbeRecord("PullStreamModule","stop",{});
}
int subscribeStream(const std::function<void(const std::vector<uint8_t>& data,
                                                        const FrameInfo& frame_info)>& callback) override {
ProbeRecord("PullStreamModule","subscribeStream",{});
if(callback)callback(ProbeValue<std::vector<uint8_t>>(0),ProbeValue<FrameInfo>(1));
return 73;
}
void unSubscribeStream(int listen_id) override {
ProbeRecord("PullStreamModule","unSubscribeStream",{Convert<int>::to(probeEnv,listen_id)});
}
void setErrorCallback(const std::function<void(int error_code,
                                                          const std::string& error_message)>& callback) override {
ProbeRecord("PullStreamModule","setErrorCallback",{});
if(callback)callback(ProbeValue<int>(0),ProbeValue<std::string>(1));
}
bool isStreaming() const override {
ProbeRecord("PullStreamModule","isStreaming",{});
return true;
}
std::string getStreamInfo() const override {
ProbeRecord("PullStreamModule","getStreamInfo",{});
static const std::string sn="FIXTURE-SN";return sn;
}
};
std::shared_ptr<IPullStreamModule> MakeProbePullStreamModule(){return std::make_shared<ProbePullStreamModule>();}
struct ProbeRelay: IRelay {
const std::string& getSn() const override {
ProbeRecord("Relay","getSn",{});
static const std::string sn="FIXTURE-SN";return sn;
}
std::shared_ptr<IRelayControlModule> getRelayControlModule() override {
ProbeRecord("Relay","getRelayControlModule",{});
return MakeProbeRelayControlModule();
}
std::shared_ptr<IRtkCalibrationModule> getRtkCalibrationModule() override {
ProbeRecord("Relay","getRtkCalibrationModule",{});
return MakeProbeRtkCalibrationModule();
}
};
std::shared_ptr<IRelay> MakeProbeRelay(){return std::make_shared<ProbeRelay>();}
struct ProbeRelayControlModule: IRelayControlModule {
void setRelayBroadcastHide(bool is_broadcast_hide, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("RelayControlModule","setRelayBroadcastHide",{Convert<bool>::to(probeEnv,is_broadcast_hide)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setRelaySSID(const std::string& device_name, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("RelayControlModule","setRelaySSID",{Convert<std::string>::to(probeEnv,device_name)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setRelayPassword(const std::string& passwd, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("RelayControlModule","setRelayPassword",{Convert<std::string>::to(probeEnv,passwd)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setRelaySearchMode(int relay_search_mode, const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("RelayControlModule","setRelaySearchMode",{Convert<int>::to(probeEnv,relay_search_mode)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setRelayOccupiedStatus(int occupied_status, const std::function<void(FlightHubError err, SetRelayOccupiedStatusResult result)>& callback) override {
ProbeRecord("RelayControlModule","setRelayOccupiedStatus",{Convert<int>::to(probeEnv,occupied_status)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SetRelayOccupiedStatusResult>(1));
}
void relayReboot(const std::function<void(FlightHubError err, RelayRebootResult result)>& callback) override {
ProbeRecord("RelayControlModule","relayReboot",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<RelayRebootResult>(1));
}
void relayDisconnect(const std::function<void(FlightHubError err, RelayDisconnectResult result)>& callback) override {
ProbeRecord("RelayControlModule","relayDisconnect",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<RelayDisconnectResult>(1));
}
};
std::shared_ptr<IRelayControlModule> MakeProbeRelayControlModule(){return std::make_shared<ProbeRelayControlModule>();}
struct ProbeRemoteController: IRemoteController {
const std::string& getSn() const override {
ProbeRecord("RemoteController","getSn",{});
static const std::string sn="FIXTURE-SN";return sn;
}
};
std::shared_ptr<IRemoteController> MakeProbeRemoteController(){return std::make_shared<ProbeRemoteController>();}
struct ProbeRtkCalibrationModule: IRtkCalibrationModule {
void calibrationByNetwork(
        const NetworkRtkCalibrationParams& params,
        const std::function<void(FlightHubError err, RtkCalibrationResult result)>& callback) override {
ProbeRecord("RtkCalibrationModule","calibrationByNetwork",{Convert<NetworkRtkCalibrationParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<RtkCalibrationResult>(1));
}
void calibrationByManual(
        const ManulRtkCalibrationParams& params,
        const std::function<void(FlightHubError err, RtkCalibrationResult result)>& callback) override {
ProbeRecord("RtkCalibrationModule","calibrationByManual",{Convert<ManulRtkCalibrationParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<RtkCalibrationResult>(1));
}
int subscribeCalibrationProgress(
        const std::function<void(RtkCalibrationResult result)>& callback) override {
ProbeRecord("RtkCalibrationModule","subscribeCalibrationProgress",{});
if(callback)callback(ProbeValue<RtkCalibrationResult>(0));
return 73;
}
void unsubscribeCalibrationProgress(int listen_id) override {
ProbeRecord("RtkCalibrationModule","unsubscribeCalibrationProgress",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<IRtkCalibrationModule> MakeProbeRtkCalibrationModule(){return std::make_shared<ProbeRtkCalibrationModule>();}
struct ProbeSafetyServiceModule: ISafetyServiceModule {
void searchSignalMaps(
        const std::vector<std::string> &device_sns,
        const std::vector<std::string> &data_types,
        const std::function<void(FlightHubError err, const SignalMapsResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","searchSignalMaps",{Convert<std::vector<std::string>>::to(probeEnv,device_sns),Convert<std::vector<std::string>>::to(probeEnv,data_types)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SignalMapsResults>(1));
}
void createCustomizedFlightAreas(
        const CreateCustomizedFlightAreasParams &request_params,
        const std::function<void(FlightHubError err, const CreateFlightAreasResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","createCustomizedFlightAreas",{Convert<CreateCustomizedFlightAreasParams>::to(probeEnv,request_params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CreateFlightAreasResults>(1));
}
void getCustomizedFlightAreas(
        const GetCustomizedFlightAreasParams &request_params,
        const std::function<void(FlightHubError err, const GetFlightAreasResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","getCustomizedFlightAreas",{Convert<GetCustomizedFlightAreasParams>::to(probeEnv,request_params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetFlightAreasResults>(1));
}
void updateCustomizedFlightAreas(
        const UpdateCustomizedFlightAreasParams &request_params,
        const std::function<void(FlightHubError err, const UpdateFlightAreasResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","updateCustomizedFlightAreas",{Convert<UpdateCustomizedFlightAreasParams>::to(probeEnv,request_params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UpdateFlightAreasResults>(1));
}
void deleteCustomizedFlightAreas(
        const std::string &flight_area_id,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("SafetyServiceModule","deleteCustomizedFlightAreas",{Convert<std::string>::to(probeEnv,flight_area_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void syncCustomizedFlightAreas(
        const std::vector<std::string> &device_sns,
        const std::function<void(FlightHubError err, const SyncFlightAreasResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","syncCustomizedFlightAreas",{Convert<std::vector<std::string>>::to(probeEnv,device_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<SyncFlightAreasResults>(1));
}
void getFlightAreasSyncStatus(
        const std::vector<std::string> &device_sns,
        const std::function<void(FlightHubError err, const GetAreasSyncStatusResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","getFlightAreasSyncStatus",{Convert<std::vector<std::string>>::to(probeEnv,device_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetAreasSyncStatusResults>(1));
}
void getOfflineMapsModelInfo(
        const std::function<void(FlightHubError err, const GetOfflineMapsModelInfoResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","getOfflineMapsModelInfo",{});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetOfflineMapsModelInfoResults>(1));
}
void updateOfflineMapsModelInfo(
        const UpdateOfflineMapsParams &request_params,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("SafetyServiceModule","updateOfflineMapsModelInfo",{Convert<UpdateOfflineMapsParams>::to(probeEnv,request_params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void cancelOfflineMapsModelInfo(
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("SafetyServiceModule","cancelOfflineMapsModelInfo",{});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void setOfflineMaps(
        const SetOfflineMapsParams &request_params,
        const std::function<void(FlightHubError err)>& callback) override {
ProbeRecord("SafetyServiceModule","setOfflineMaps",{Convert<SetOfflineMapsParams>::to(probeEnv,request_params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void syncOfflineMaps(
        const std::vector<std::string> &device_sns,
        const std::function<void(FlightHubError err, const OfflineMapsSyncResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","syncOfflineMaps",{Convert<std::vector<std::string>>::to(probeEnv,device_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<OfflineMapsSyncResults>(1));
}
void getOfflineMapsSyncStatus(
        const std::vector<std::string> &device_sns,
        const std::function<void(FlightHubError err, const GetOfflineMapsSyncStatusResults& results)>& callback) override {
ProbeRecord("SafetyServiceModule","getOfflineMapsSyncStatus",{Convert<std::vector<std::string>>::to(probeEnv,device_sns)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetOfflineMapsSyncStatusResults>(1));
}
void getUnlockLicenseList(const QueryDeviceUnlockLicenseListParam& param, std::function<void(FlightHubError err, QueryDeviceUnlockLicenseListResult result)> callback) override {
ProbeRecord("SafetyServiceModule","getUnlockLicenseList",{Convert<QueryDeviceUnlockLicenseListParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<QueryDeviceUnlockLicenseListResult>(1));
}
void switchUnlockLicense(const SwitchUnlockLicenseParam& param, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("SafetyServiceModule","switchUnlockLicense",{Convert<SwitchUnlockLicenseParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void checkUnlockLicense(const CheckUnlockLicenseParam& param, std::function<void(FlightHubError err, CheckUnlockLicenseResult result)> callback) override {
ProbeRecord("SafetyServiceModule","checkUnlockLicense",{Convert<CheckUnlockLicenseParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CheckUnlockLicenseResult>(1));
}
void submitUnlockLicense(const ImportUnlockLicenseParam& param, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("SafetyServiceModule","submitUnlockLicense",{Convert<ImportUnlockLicenseParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void clearDeviceUnlockLicense(const std::string& device_sn, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("SafetyServiceModule","clearDeviceUnlockLicense",{Convert<std::string>::to(probeEnv,device_sn)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void uploadUnlockLicenseFile(const std::string& file_path, std::function<void(FlightHubError err, const UploadUnlockLicenseFileResult& result)> callback) override {
ProbeRecord("SafetyServiceModule","uploadUnlockLicenseFile",{Convert<std::string>::to(probeEnv,file_path)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UploadUnlockLicenseFileResult>(1));
}
int listenDroneOfflineMapEnable(
        const std::string& drone_sn,
        const std::function<void(const DroneOfflineMapEnable& msg)>& callback) override {
ProbeRecord("SafetyServiceModule","listenDroneOfflineMapEnable",{Convert<std::string>::to(probeEnv,drone_sn)});
if(callback)callback(ProbeValue<DroneOfflineMapEnable>(0));
return 73;
}
void cancelListenDroneOfflineMapEnable(int listen_id) override {
ProbeRecord("SafetyServiceModule","cancelListenDroneOfflineMapEnable",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<ISafetyServiceModule> MakeProbeSafetyServiceModule(){return std::make_shared<ProbeSafetyServiceModule>();}
struct ProbeStream: IStream {
std::shared_ptr<ICustomSEIModule> getCustomSEIModule() override {
ProbeRecord("Stream","getCustomSEIModule",{});
return MakeProbeCustomSEIModule();
}
std::shared_ptr<IPullStreamModule> getPullStreamModule(const std::string& stream_id) override {
ProbeRecord("Stream","getPullStreamModule",{Convert<std::string>::to(probeEnv,stream_id)});
return MakeProbePullStreamModule();
}
};
std::shared_ptr<IStream> MakeProbeStream(){return std::make_shared<ProbeStream>();}
struct ProbeTakeoffModule: ITakeoffModule {
void takeoff(
        const TakeoffParams& params,
        const std::function<void(FlightHubError err, const TakeoffResult& result)>& callback) override {
ProbeRecord("TakeoffModule","takeoff",{Convert<TakeoffParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TakeoffResult>(1));
}
int listenCommandTaskEvent(
        const std::function<void(const CommandTaskEvent& msg)>& callback) override {
ProbeRecord("TakeoffModule","listenCommandTaskEvent",{});
if(callback)callback(ProbeValue<CommandTaskEvent>(0));
return 73;
}
void cancelListenCommandTaskEvent(int listen_id) override {
ProbeRecord("TakeoffModule","cancelListenCommandTaskEvent",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneCommanderFlightMode(
        const std::function<void(const DroneCommanderFlightMode& msg)>& callback) override {
ProbeRecord("TakeoffModule","listenDroneCommanderFlightMode",{});
if(callback)callback(ProbeValue<DroneCommanderFlightMode>(0));
return 73;
}
void cancelListenDroneCommanderFlightMode(int listen_id) override {
ProbeRecord("TakeoffModule","cancelListenDroneCommanderFlightMode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneCurrentCommanderFlightMode(
        const std::function<void(const DroneCurrentCommanderFlightMode& msg)>& callback) override {
ProbeRecord("TakeoffModule","listenDroneCurrentCommanderFlightMode",{});
if(callback)callback(ProbeValue<DroneCurrentCommanderFlightMode>(0));
return 73;
}
void cancelListenDroneCurrentCommanderFlightMode(int listen_id) override {
ProbeRecord("TakeoffModule","cancelListenDroneCurrentCommanderFlightMode",{Convert<int>::to(probeEnv,listen_id)});
}
int listenDroneCommanderModeLostAction(
        const std::function<void(const DroneCommanderModeLostAction& msg)>& callback) override {
ProbeRecord("TakeoffModule","listenDroneCommanderModeLostAction",{});
if(callback)callback(ProbeValue<DroneCommanderModeLostAction>(0));
return 73;
}
void cancelListenDroneCommanderModeLostAction(int listen_id) override {
ProbeRecord("TakeoffModule","cancelListenDroneCommanderModeLostAction",{Convert<int>::to(probeEnv,listen_id)});
}
};
std::shared_ptr<ITakeoffModule> MakeProbeTakeoffModule(){return std::make_shared<ProbeTakeoffModule>();}
struct ProbeTerraBuildModule: ITerraBuildModule {
void getReconstructionSettings(
        const std::string& file_uuid,
        std::function<void(FlightHubError err, const TerraBuildSettingsResult& result)> callback) override {
ProbeRecord("TerraBuildModule","getReconstructionSettings",{Convert<std::string>::to(probeEnv,file_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildSettingsResult>(1));
}
void getQualityReport(
        const std::string& file_uuid,
        const std::string& language,
        const std::string& measure_unit_system,
        std::function<void(FlightHubError err, const TerraBuildQualityReportResult& result)> callback) override {
ProbeRecord("TerraBuildModule","getQualityReport",{Convert<std::string>::to(probeEnv,file_uuid),Convert<std::string>::to(probeEnv,language),Convert<std::string>::to(probeEnv,measure_unit_system)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildQualityReportResult>(1));
}
void getModelFileList(
        int page,
        int page_size,
        std::function<void(FlightHubError err, const TerraBuildModelFileListResult& result)> callback) override {
ProbeRecord("TerraBuildModule","getModelFileList",{Convert<int>::to(probeEnv,page),Convert<int>::to(probeEnv,page_size)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildModelFileListResult>(1));
}
void getModelFileUrl(
        int file_id,
        int type,
        std::function<void(FlightHubError err, const TerraBuildModelFileUrlResult& result)> callback) override {
ProbeRecord("TerraBuildModule","getModelFileUrl",{Convert<int>::to(probeEnv,file_id),Convert<int>::to(probeEnv,type)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildModelFileUrlResult>(1));
}
void createReconstruction(
        const CreateReconstructionParams& params,
        std::function<void(FlightHubError err, const TerraBuildCreateReconstructionResult& result)> callback) override {
ProbeRecord("TerraBuildModule","createReconstruction",{Convert<CreateReconstructionParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildCreateReconstructionResult>(1));
}
void retryReconstruction(
        const std::string& file_uuid,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("TerraBuildModule","retryReconstruction",{Convert<std::string>::to(probeEnv,file_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void stopReconstruction(
        const std::string& file_uuid,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("TerraBuildModule","stopReconstruction",{Convert<std::string>::to(probeEnv,file_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void getSfmResult(
        const std::string& file_uuid,
        std::function<void(FlightHubError err, const TerraBuildSfmResult& result)> callback) override {
ProbeRecord("TerraBuildModule","getSfmResult",{Convert<std::string>::to(probeEnv,file_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildSfmResult>(1));
}
void deleteModelFile(
        int file_id,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("TerraBuildModule","deleteModelFile",{Convert<int>::to(probeEnv,file_id)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void batchDeleteModelFiles(
        const std::vector<int>& file_ids,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("TerraBuildModule","batchDeleteModelFiles",{Convert<std::vector<int>>::to(probeEnv,file_ids)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void createPanorama(
        const CreatePanoramaParams& params,
        std::function<void(FlightHubError err, const TerraBuildCreatePanoramaResult& result)> callback) override {
ProbeRecord("TerraBuildModule","createPanorama",{Convert<CreatePanoramaParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildCreatePanoramaResult>(1));
}
void getReconstructionImages(
        const std::string& file_uuid,
        std::function<void(FlightHubError err, const TerraBuildReconstructionImagesResult& result)> callback) override {
ProbeRecord("TerraBuildModule","getReconstructionImages",{Convert<std::string>::to(probeEnv,file_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraBuildReconstructionImagesResult>(1));
}
int listenReconstructionStatusChanged(
        const std::function<void(const TerraBuildReconstructionStatusChanged& msg)>& callback) override {
ProbeRecord("TerraBuildModule","listenReconstructionStatusChanged",{});
if(callback)callback(ProbeValue<TerraBuildReconstructionStatusChanged>(0));
return 73;
}
void cancelListenReconstructionStatusChanged(int listen_id) override {
ProbeRecord("TerraBuildModule","cancelListenReconstructionStatusChanged",{Convert<int>::to(probeEnv,listen_id)});
}
void uploadModelCallback(
        const TerraUploadCallbackParams& params,
        std::function<void(FlightHubError err, const TerraUploadCallbackResult& result)> callback) override {
ProbeRecord("TerraBuildModule","uploadModelCallback",{Convert<TerraUploadCallbackParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraUploadCallbackResult>(1));
}
void renameModel(
        int file_id,
        const TerraRenameModelParams& params,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("TerraBuildModule","renameModel",{Convert<int>::to(probeEnv,file_id),Convert<TerraRenameModelParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void showModelOnMap(
        const TerraShowOnMapParams& params,
        std::function<void(FlightHubError err, const TerraShowOnMapResult& result)> callback) override {
ProbeRecord("TerraBuildModule","showModelOnMap",{Convert<TerraShowOnMapParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraShowOnMapResult>(1));
}
int listenTerraUnzipProgress(
        const std::function<void(const TerraUnzipProgressMsg& msg)>& callback) override {
ProbeRecord("TerraBuildModule","listenTerraUnzipProgress",{});
if(callback)callback(ProbeValue<TerraUnzipProgressMsg>(0));
return 73;
}
void cancelListenTerraUnzipProgress(int listen_id) override {
ProbeRecord("TerraBuildModule","cancelListenTerraUnzipProgress",{Convert<int>::to(probeEnv,listen_id)});
}
int listenTerraModelStatusChanged(
        const std::function<void(const TerraModelStatusChangedMsg& msg)>& callback) override {
ProbeRecord("TerraBuildModule","listenTerraModelStatusChanged",{});
if(callback)callback(ProbeValue<TerraModelStatusChangedMsg>(0));
return 73;
}
void cancelListenTerraModelStatusChanged(int listen_id) override {
ProbeRecord("TerraBuildModule","cancelListenTerraModelStatusChanged",{Convert<int>::to(probeEnv,listen_id)});
}
int listenTerraFileShowOnMap(
        const std::function<void(const TerraFileShowOnMapMsg& msg)>& callback) override {
ProbeRecord("TerraBuildModule","listenTerraFileShowOnMap",{});
if(callback)callback(ProbeValue<TerraFileShowOnMapMsg>(0));
return 73;
}
void cancelListenTerraFileShowOnMap(int listen_id) override {
ProbeRecord("TerraBuildModule","cancelListenTerraFileShowOnMap",{Convert<int>::to(probeEnv,listen_id)});
}
int listenTerraMediaFileHideOnMap(
        const std::function<void(const TerraMediaFileHideOnMapMsg& msg)>& callback) override {
ProbeRecord("TerraBuildModule","listenTerraMediaFileHideOnMap",{});
if(callback)callback(ProbeValue<TerraMediaFileHideOnMapMsg>(0));
return 73;
}
void cancelListenTerraMediaFileHideOnMap(int listen_id) override {
ProbeRecord("TerraBuildModule","cancelListenTerraMediaFileHideOnMap",{Convert<int>::to(probeEnv,listen_id)});
}
int listenTerraMediaFileShowOnMap(
        const std::function<void(const TerraMediaFileShowOnMapMsg& msg)>& callback) override {
ProbeRecord("TerraBuildModule","listenTerraMediaFileShowOnMap",{});
if(callback)callback(ProbeValue<TerraMediaFileShowOnMapMsg>(0));
return 73;
}
void cancelListenTerraMediaFileShowOnMap(int listen_id) override {
ProbeRecord("TerraBuildModule","cancelListenTerraMediaFileShowOnMap",{Convert<int>::to(probeEnv,listen_id)});
}
void getModelDetail(
        int file_id,
        std::function<void(FlightHubError err, const TerraModelDetailResult& result)> callback) override {
ProbeRecord("TerraBuildModule","getModelDetail",{Convert<int>::to(probeEnv,file_id)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<TerraModelDetailResult>(1));
}
void setLasWkt(
        const TerraSetLasWktParams& params,
        std::function<void(FlightHubError err)> callback) override {
ProbeRecord("TerraBuildModule","setLasWkt",{Convert<TerraSetLasWktParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
};
std::shared_ptr<ITerraBuildModule> MakeProbeTerraBuildModule(){return std::make_shared<ProbeTerraBuildModule>();}
struct ProbeTestFlightModule: ITestFlightModule {
void generateTryFlightWayline(
        const std::string& project_id,
        const GenerateTryFlightWaylineParams& params,
        const std::function<void(const GenerateTryFlightWaylineResponse& response, FlightHubError err)>& callback) override {
ProbeRecord("TestFlightModule","generateTryFlightWayline",{Convert<std::string>::to(probeEnv,project_id),Convert<GenerateTryFlightWaylineParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<GenerateTryFlightWaylineResponse>(0),ProbeValue<FlightHubError>(1));
}
void createTestFlightTask(
        const std::string& project_id,
        const CreateTestFlightTaskParams& params,
        const std::function<void(const CreateTestFlightTaskResponse& response, FlightHubError err)>& callback) override {
ProbeRecord("TestFlightModule","createTestFlightTask",{Convert<std::string>::to(probeEnv,project_id),Convert<CreateTestFlightTaskParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<CreateTestFlightTaskResponse>(0),ProbeValue<FlightHubError>(1));
}
};
std::shared_ptr<ITestFlightModule> MakeProbeTestFlightModule(){return std::make_shared<ProbeTestFlightModule>();}
struct ProbeWaylineManageModule: IWaylineManageModule {
void getWaylineList(const GetWaylineListParam& param, std::function<void(FlightHubError err, GetWaylineListResult result)> callback) override {
ProbeRecord("WaylineManageModule","getWaylineList",{Convert<GetWaylineListParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetWaylineListResult>(1));
}
void getWaylineDetail(const std::string& wayline_uuid, std::function<void(FlightHubError err, GetWaylineDetailResult result)> callback) override {
ProbeRecord("WaylineManageModule","getWaylineDetail",{Convert<std::string>::to(probeEnv,wayline_uuid)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetWaylineDetailResult>(1));
}
void batchDeleteWaylines(const std::vector<std::string>& wayline_uuids,
        std::function<void(FlightHubError err, BatchDeleteWaylinesResult result)> callback) override {
ProbeRecord("WaylineManageModule","batchDeleteWaylines",{Convert<std::vector<std::string>>::to(probeEnv,wayline_uuids)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<BatchDeleteWaylinesResult>(1));
}
void updateWayline(const std::string& wayline_uuid, const std::string& wayline_name, std::function<void(FlightHubError err, UpdateWaylineResult result)> callback) override {
ProbeRecord("WaylineManageModule","updateWayline",{Convert<std::string>::to(probeEnv,wayline_uuid),Convert<std::string>::to(probeEnv,wayline_name)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<UpdateWaylineResult>(1));
}
void submitWaylineInfo(const SubmitWaylineInfoParam& param, std::function<void(FlightHubError err)> callback) override {
ProbeRecord("WaylineManageModule","submitWaylineInfo",{Convert<SubmitWaylineInfoParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0));
}
void batchDownloadWaylines(const BatchDownloadWaylinesParam& param, std::function<void(FlightHubError err, BatchDownloadWaylinesResult result)> callback) override {
ProbeRecord("WaylineManageModule","batchDownloadWaylines",{Convert<BatchDownloadWaylinesParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<BatchDownloadWaylinesResult>(1));
}
void duplicateWayline(const DuplicateWaylineParam& param, std::function<void(FlightHubError err, DuplicateWaylineResult result)> callback) override {
ProbeRecord("WaylineManageModule","duplicateWayline",{Convert<DuplicateWaylineParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<DuplicateWaylineResult>(1));
}
void copyWayline(const CopyWaylineParam& param, std::function<void(FlightHubError err, CopyWaylineResult result)> callback) override {
ProbeRecord("WaylineManageModule","copyWayline",{Convert<CopyWaylineParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<CopyWaylineResult>(1));
}
void concatWayline(const ConcatWaylineParam& param, std::function<void(FlightHubError err, ConcatWaylineResult result)> callback) override {
ProbeRecord("WaylineManageModule","concatWayline",{Convert<ConcatWaylineParam>::to(probeEnv,param)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ConcatWaylineResult>(1));
}
void importKmz(const std::vector<std::string>& file_paths, std::function<void(FlightHubError err, ImportKmzResult result)> callback) override {
ProbeRecord("WaylineManageModule","importKmz",{Convert<std::vector<std::string>>::to(probeEnv,file_paths)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<ImportKmzResult>(1));
}
int listenImportWaylineEvent(const std::function<void(const ImportWaylineEventResult& result)>& callback) override {
ProbeRecord("WaylineManageModule","listenImportWaylineEvent",{});
if(callback)callback(ProbeValue<ImportWaylineEventResult>(0));
return 73;
}
void cancelListenImportWaylineEvent(int listen_id) override {
ProbeRecord("WaylineManageModule","cancelListenImportWaylineEvent",{Convert<int>::to(probeEnv,listen_id)});
}
void getWaylineEditorSts(
        const GetWaylineEditorStsParams& params,
        std::function<void(FlightHubError err, const GetWaylineEditorStsResult& result)> callback) override {
ProbeRecord("WaylineManageModule","getWaylineEditorSts",{Convert<GetWaylineEditorStsParams>::to(probeEnv,params)});
if(callback)callback(ProbeValue<FlightHubError>(0),ProbeValue<GetWaylineEditorStsResult>(1));
}
};
std::shared_ptr<IWaylineManageModule> MakeProbeWaylineManageModule(){return std::make_shared<ProbeWaylineManageModule>();}
struct ProbeWorkspace: IWorkspace {
std::shared_ptr<ILogManagementModule> getLogManagementModule() override {
ProbeRecord("Workspace","getLogManagementModule",{});
return MakeProbeLogManagementModule();
}
std::shared_ptr<IHMSModule> getHMSModule() override {
ProbeRecord("Workspace","getHMSModule",{});
return MakeProbeHMSModule();
}
std::shared_ptr<IMediaServiceModule> getMediaServiceModule() override {
ProbeRecord("Workspace","getMediaServiceModule",{});
return MakeProbeMediaServiceModule();
}
std::shared_ptr<ISafetyServiceModule> getSafetyServiceModule() override {
ProbeRecord("Workspace","getSafetyServiceModule",{});
return MakeProbeSafetyServiceModule();
}
std::shared_ptr<IFlightTaskRecordModule> getFlightTaskRecordModule() override {
ProbeRecord("Workspace","getFlightTaskRecordModule",{});
return MakeProbeFlightTaskRecordModule();
}
std::shared_ptr<IDiagnosisManagementModule> getDiagnosisManagementModule() override {
ProbeRecord("Workspace","getDiagnosisManagementModule",{});
return MakeProbeDiagnosisManagementModule();
}
std::shared_ptr<IMaintenanceManagementModule> getMaintenanceManagementModule() override {
ProbeRecord("Workspace","getMaintenanceManagementModule",{});
return MakeProbeMaintenanceManagementModule();
}
std::shared_ptr<IFlightTaskModule> getFlightTaskModule() override {
ProbeRecord("Workspace","getFlightTaskModule",{});
return MakeProbeFlightTaskModule();
}
std::shared_ptr<IDeviceManageModule> getDeviceManageModule() override {
ProbeRecord("Workspace","getDeviceManageModule",{});
return MakeProbeDeviceManageModule();
}
std::shared_ptr<IFirmwareManageModule> getFirmwareManageModule() override {
ProbeRecord("Workspace","getFirmwareManageModule",{});
return MakeProbeFirmwareManageModule();
}
std::shared_ptr<IWaylineManageModule> getWaylineManageModule() override {
ProbeRecord("Workspace","getWaylineManageModule",{});
return MakeProbeWaylineManageModule();
}
std::shared_ptr<IPsdkResourceModule> getPsdkResourceModule() override {
ProbeRecord("Workspace","getPsdkResourceModule",{});
return MakeProbePsdkResourceModule();
}
std::shared_ptr<IFlashLedModule> getFlashLedModule() override {
ProbeRecord("Workspace","getFlashLedModule",{});
return MakeProbeFlashLedModule();
}
std::shared_ptr<ITerraBuildModule> getTerraBuildModule() override {
ProbeRecord("Workspace","getTerraBuildModule",{});
return MakeProbeTerraBuildModule();
}
std::shared_ptr<IAIInsideManageModule> getAIInsideManageModule() override {
ProbeRecord("Workspace","getAIInsideManageModule",{});
return MakeProbeAIInsideManageModule();
}
std::shared_ptr<IElementModule> getElementModule() override {
ProbeRecord("Workspace","getElementModule",{});
return MakeProbeElementModule();
}
std::shared_ptr<IAIAlertModule> getAIAlertModule() override {
ProbeRecord("Workspace","getAIAlertModule",{});
return MakeProbeAIAlertModule();
}
std::shared_ptr<ILiveSyncModule> getLiveSyncModule() override {
ProbeRecord("Workspace","getLiveSyncModule",{});
return MakeProbeLiveSyncModule();
}
};
std::shared_ptr<IWorkspace> MakeProbeWorkspace(){return std::make_shared<ProbeWorkspace>();}
napi_value CreateProbeModule(napi_env env,napi_callback_info info){return Guard(env,[&]{auto args=Arguments(env,info,2);auto type=String(env,args[0]);ProbeBegin(env,args[1]);
if(type=="AIAlertModule")return WrapGenerated(env,type,MakeProbeAIAlertModule());
if(type=="AIBoxModule")return WrapGenerated(env,type,MakeProbeAIBoxModule());
if(type=="AIInsideManageModule")return WrapGenerated(env,type,MakeProbeAIInsideManageModule());
if(type=="BaseStation")return WrapGenerated(env,type,MakeProbeBaseStation());
if(type=="CameraControlModule")return WrapGenerated(env,type,MakeProbeCameraControlModule());
if(type=="ControlAuthModule")return WrapGenerated(env,type,MakeProbeControlAuthModule());
if(type=="CustomSEIModule")return WrapGenerated(env,type,MakeProbeCustomSEIModule());
if(type=="DeployModule")return WrapGenerated(env,type,MakeProbeDeployModule());
if(type=="DeviceDebugModule")return WrapGenerated(env,type,MakeProbeDeviceDebugModule());
if(type=="DeviceHMSModule")return WrapGenerated(env,type,MakeProbeDeviceHMSModule());
if(type=="DeviceManageModule")return WrapGenerated(env,type,MakeProbeDeviceManageModule());
if(type=="DeviceStateModule")return WrapGenerated(env,type,MakeProbeDeviceStateModule());
if(type=="DiagnosisManagementModule")return WrapGenerated(env,type,MakeProbeDiagnosisManagementModule());
if(type=="Dock")return WrapGenerated(env,type,MakeProbeDock());
if(type=="DockControlModule")return WrapGenerated(env,type,MakeProbeDockControlModule());
if(type=="DockOsdModule")return WrapGenerated(env,type,MakeProbeDockOsdModule());
if(type=="DrcModule")return WrapGenerated(env,type,MakeProbeDrcModule());
if(type=="Drone")return Wrap(env,Kind::Drone,MakeProbeDrone());
if(type=="DroneOsdModule")return WrapGenerated(env,type,MakeProbeDroneOsdModule());
if(type=="ElementModule")return WrapGenerated(env,type,MakeProbeElementModule());
if(type=="FirmwareManageModule")return WrapGenerated(env,type,MakeProbeFirmwareManageModule());
if(type=="FlashLedModule")return WrapGenerated(env,type,MakeProbeFlashLedModule());
if(type=="FlightControlModule")return WrapGenerated(env,type,MakeProbeFlightControlModule());
if(type=="FlightSettingsModule")return WrapGenerated(env,type,MakeProbeFlightSettingsModule());
if(type=="FlightTaskControlModule")return WrapGenerated(env,type,MakeProbeFlightTaskControlModule());
if(type=="FlightTaskModule")return WrapGenerated(env,type,MakeProbeFlightTaskModule());
if(type=="FlightTaskRecordModule")return WrapGenerated(env,type,MakeProbeFlightTaskRecordModule());
if(type=="FlyToPointModule")return WrapGenerated(env,type,MakeProbeFlyToPointModule());
if(type=="HMSModule")return WrapGenerated(env,type,MakeProbeHMSModule());
if(type=="InFlightWaylineModule")return WrapGenerated(env,type,MakeProbeInFlightWaylineModule());
if(type=="LiveDeviceModule")return WrapGenerated(env,type,MakeProbeLiveDeviceModule());
if(type=="LiveRecordModule")return WrapGenerated(env,type,MakeProbeLiveRecordModule());
if(type=="LiveModule")return WrapGenerated(env,type,MakeProbeLiveModule());
if(type=="LiveSyncModule")return WrapGenerated(env,type,MakeProbeLiveSyncModule());
if(type=="LogManagementModule")return WrapGenerated(env,type,MakeProbeLogManagementModule());
if(type=="MaintenanceManagementModule")return WrapGenerated(env,type,MakeProbeMaintenanceManagementModule());
if(type=="MediaServiceModule")return WrapGenerated(env,type,MakeProbeMediaServiceModule());
if(type=="NetworkTestModule")return WrapGenerated(env,type,MakeProbeNetworkTestModule());
if(type=="OnboardAiModule")return WrapGenerated(env,type,MakeProbeOnboardAiModule());
if(type=="PoiModule")return WrapGenerated(env,type,MakeProbePoiModule());
if(type=="PsdkControlModule")return WrapGenerated(env,type,MakeProbePsdkControlModule());
if(type=="PsdkResourceModule")return WrapGenerated(env,type,MakeProbePsdkResourceModule());
if(type=="PullStreamModule")return WrapGenerated(env,type,MakeProbePullStreamModule());
if(type=="Relay")return WrapGenerated(env,type,MakeProbeRelay());
if(type=="RelayControlModule")return WrapGenerated(env,type,MakeProbeRelayControlModule());
if(type=="RemoteController")return WrapGenerated(env,type,MakeProbeRemoteController());
if(type=="RtkCalibrationModule")return WrapGenerated(env,type,MakeProbeRtkCalibrationModule());
if(type=="SafetyServiceModule")return WrapGenerated(env,type,MakeProbeSafetyServiceModule());
if(type=="Stream")return WrapGenerated(env,type,MakeProbeStream());
if(type=="TakeoffModule")return WrapGenerated(env,type,MakeProbeTakeoffModule());
if(type=="TerraBuildModule")return WrapGenerated(env,type,MakeProbeTerraBuildModule());
if(type=="TestFlightModule")return WrapGenerated(env,type,MakeProbeTestFlightModule());
if(type=="WaylineManageModule")return WrapGenerated(env,type,MakeProbeWaylineManageModule());
if(type=="Workspace")return Wrap(env,Kind::Workspace,MakeProbeWorkspace());
throw std::invalid_argument("Unknown probe module");});}
