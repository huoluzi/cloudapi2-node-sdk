// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
// Generated; do not edit.
if(type=="AIAlertModule") { auto module=UnwrapGenerated<IAIAlertModule>(env,handle,type); if(method=="postDeviceSetting"){ RequireLength(env,values,2);
auto arg0=Convert<PostAiAlertDeviceSettingParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->postDeviceSetting(arg0,[cb](FlightHubError p0,PostAiAlertDeviceSettingResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<PostAiAlertDeviceSettingResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDeviceSetting"){ RequireLength(env,values,2);
auto arg0=Convert<GetAiAlertDeviceSettingParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDeviceSetting(arg0,[cb](FlightHubError p0,GetAiAlertDeviceSettingResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAiAlertDeviceSettingResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="postAlgorithmSetting"){ RequireLength(env,values,2);
auto arg0=Convert<PostAiAlertAlgorithmSettingParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->postAlgorithmSetting(arg0,[cb](FlightHubError p0,PostAiAlertAlgorithmSettingResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<PostAiAlertAlgorithmSettingResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getAlgorithmSetting"){ RequireLength(env,values,2);
auto arg0=Convert<GetAiAlertAlgorithmSettingParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getAlgorithmSetting(arg0,[cb](FlightHubError p0,GetAiAlertAlgorithmSettingResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAiAlertAlgorithmSettingResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getAiAlertFlights"){ RequireLength(env,values,2);
auto arg0=Convert<GetAiAlertFlightsParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getAiAlertFlights(arg0,[cb](FlightHubError p0,GetAiAlertFlightsResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAiAlertFlightsResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getAiAlertRecords"){ RequireLength(env,values,2);
auto arg0=Convert<GetAiAlertRecordsParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getAiAlertRecords(arg0,[cb](FlightHubError p0,GetAiAlertRecordsResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAiAlertRecordsResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="AIBoxModule") { auto module=UnwrapGenerated<IAIBoxModule>(env,handle,type); if(method=="fetchAIBoxInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->fetchAIBoxInfo(arg0,[cb](FlightHubError p0,AIBoxInfoListResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<AIBoxInfoListResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="fetchFileDownloadUrl"){ RequireLength(env,values,2);
auto arg0=Convert<FetchFileDownloadUrlParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->fetchFileDownloadUrl(arg0,[cb](FlightHubError p0,FileDownloadUrlListResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FileDownloadUrlListResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="fetchAppList"){ RequireLength(env,values,2);
auto arg0=Convert<FetchAppListParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->fetchAppList(arg0,[cb](FlightHubError p0,FetchAppListResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FetchAppListResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="fetchAppListProgress"){ RequireLength(env,values,2);
auto arg0=Convert<FetchAppListProgressParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->fetchAppListProgress(arg0,[cb](FlightHubError p0,FetchAppListProgressResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FetchAppListProgressResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="exportFile"){ RequireLength(env,values,2);
auto arg0=Convert<ExportFileParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->exportFile(arg0,[cb](FlightHubError p0,ExportFileResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ExportFileResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="exportFileProgress"){ RequireLength(env,values,2);
auto arg0=Convert<ExportFileProgressParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->exportFileProgress(arg0,[cb](FlightHubError p0,ExportFileProgressResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ExportFileProgressResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="uploadAIBoxFile"){ RequireLength(env,values,2);
auto arg0=Convert<UploadFileParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->uploadAIBoxFile(arg0,[cb](FlightHubError p0,UploadFileResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UploadFileResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="installApp"){ RequireLength(env,values,2);
auto arg0=Convert<InstallAppParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->installApp(arg0,[cb](FlightHubError p0,InstallAppResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<InstallAppResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="installAppProgress"){ RequireLength(env,values,2);
auto arg0=Convert<InstallAppProgressParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->installAppProgress(arg0,[cb](FlightHubError p0,InstallAppProgressResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<InstallAppProgressResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="operateApp"){ RequireLength(env,values,2);
auto arg0=Convert<OperateAppParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->operateApp(arg0,[cb](FlightHubError p0,OperateAppResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OperateAppResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="AIInsideManageModule") { auto module=UnwrapGenerated<IAIInsideManageModule>(env,handle,type); if(method=="getAIInsideModels"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getAIInsideModels([cb](FlightHubError p0,GetAIInsideModelsResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAIInsideModelsResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getAIInsideModelDevices"){ RequireLength(env,values,2);
auto arg0=Convert<GetAIInsideModelDevicesParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getAIInsideModelDevices(arg0,[cb](FlightHubError p0,GetAIInsideModelDevicesResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAIInsideModelDevicesResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getAIInsideModelDevicesSummary"){ RequireLength(env,values,2);
auto arg0=Convert<GetAIInsideModelDevicesSummaryParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getAIInsideModelDevicesSummary(arg0,[cb](FlightHubError p0,GetAIInsideModelDevicesSummaryResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAIInsideModelDevicesSummaryResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="operateAIInsideModel"){ RequireLength(env,values,2);
auto arg0=Convert<OperateAIInsideModelParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->operateAIInsideModel(arg0,[cb](FlightHubError p0,OperateAIInsideModelResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OperateAIInsideModelResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createAIInsideAlgorithm"){ RequireLength(env,values,2);
auto arg0=Convert<CreateAIInsideAlgorithmParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createAIInsideAlgorithm(arg0,[cb](FlightHubError p0,CreateAIInsideAlgorithmResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CreateAIInsideAlgorithmResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="fileUploadAIInsideAlgorithm"){ RequireLength(env,values,2);
auto arg0=Convert<FileUploadAIInsideAlgorithmParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->fileUploadAIInsideAlgorithm(arg0,[cb](FlightHubError p0,FileUploadAIInsideAlgorithmResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FileUploadAIInsideAlgorithmResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteAIInsideAlgorithm"){ RequireLength(env,values,2);
auto arg0=Convert<DeleteAIInsideAlgorithmParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteAIInsideAlgorithm(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="uploadAlgorithmFile"){ RequireLength(env,values,2);
auto arg0=Convert<UploadAIInsideAlgorithmFileParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->uploadAlgorithmFile(arg0,[cb](FlightHubError p0,UploadAIInsideAlgorithmFileResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UploadAIInsideAlgorithmFileResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="BaseStation") { auto module=UnwrapGenerated<IBaseStation>(env,handle,type); if(method=="getSn"){ RequireLength(env,values,0);
return Convert<std::string>::to(env,module->getSn());}
if(method=="getLiveStream"){ RequireLength(env,values,1);
auto arg0=Convert<LiveInfo>::from(env,Element(env,values,0));
return WrapGenerated(env,"LiveModule",module->getLiveStream(arg0));}
if(method=="getLiveDeviceModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"LiveDeviceModule",module->getLiveDeviceModule());}
if(method=="getRtkCalibrationModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"RtkCalibrationModule",module->getRtkCalibrationModule());}
if(method=="getNetworkTestModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"NetworkTestModule",module->getNetworkTestModule());} }
if(type=="CameraControlModule") { auto module=UnwrapGenerated<ICameraControlModule>(env,handle,type); if(method=="drcSwitchLiveLens"){ RequireLength(env,values,2);
auto arg0=Convert<SwitchLiveLensParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSwitchLiveLens(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetPhotoStorageSettings"){ RequireLength(env,values,2);
auto arg0=Convert<SetPhotoStorageSettingsParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetPhotoStorageSettings(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetVideoStorageSettings"){ RequireLength(env,values,2);
auto arg0=Convert<SetVideoStorageSettingsParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetVideoStorageSettings(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetNightSceneMode"){ RequireLength(env,values,2);
auto arg0=Convert<SetNightSceneModeParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetNightSceneMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcTakePhoto"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcTakePhoto(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSmartPhotoTakePhoto"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSmartPhotoTakePhoto(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcStartRecord"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcStartRecord(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcStopRecord"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcStopRecord(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcZoomAtTarget"){ RequireLength(env,values,2);
auto arg0=Convert<ZoomAtTargetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcZoomAtTarget(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetFocalLength"){ RequireLength(env,values,2);
auto arg0=Convert<CameraFocalLengthParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetFocalLength(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetLinkageZoom"){ RequireLength(env,values,2);
auto arg0=Convert<LinkageZoomParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetLinkageZoom(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcResetGimbal"){ RequireLength(env,values,2);
auto arg0=Convert<GimbalResetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcResetGimbal(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="lookAtTarget"){ RequireLength(env,values,2);
auto arg0=Convert<LookAtTargetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->lookAtTarget(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSendCameraScreenDrag"){ RequireLength(env,values,2);
auto arg0=Convert<CameraScreenDragParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSendCameraScreenDrag(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcStartPanorama"){ RequireLength(env,values,2);
auto arg0=Convert<PanoramaParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcStartPanorama(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcStopPanorama"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcStopPanorama(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcPanoramaStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcPanoramaStatus(arg0,[cb](PanoramaStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PanoramaStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcPanoramaStatus",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcPanoramaStatus(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcPanoramaStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcPanoramaStatus",arg0),arg1))module->cancelListenDrcPanoramaStatus(arg0,arg1);return Undefined(env);}
if(method=="drcSetPhotoSize"){ RequireLength(env,values,2);
auto arg0=Convert<PhotoSizeParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetPhotoSize(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIntervalTakePhoto"){ RequireLength(env,values,2);
auto arg0=Convert<IntervalTakePhotoSetParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIntervalTakePhoto(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcIntervalTakePhoto"){ RequireLength(env,values,2);
auto arg0=Convert<IntervalTakePhotoParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcIntervalTakePhoto(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcIntervalTakePhotoStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcIntervalTakePhotoStatus(arg0,[cb](IntervalTakePhotoStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<IntervalTakePhotoStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcIntervalTakePhotoStatus",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcIntervalTakePhotoStatus(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcIntervalTakePhotoStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcIntervalTakePhotoStatus",arg0),arg1))module->cancelListenDrcIntervalTakePhotoStatus(arg0,arg1);return Undefined(env);}
if(method=="drcStopTakePhoto"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcStopTakePhoto(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcCameraAimAtTarget"){ RequireLength(env,values,2);
auto arg0=Convert<CameraAimParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcCameraAimAtTarget(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSwitchCameraMode"){ RequireLength(env,values,2);
auto arg0=Convert<SwitchCameraModeParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSwitchCameraMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcCameraModeAvailableRange"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraModeAvailableRange(arg0,[cb](std::vector<int> p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<std::vector<int>>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraModeAvailableRange",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraModeAvailableRange(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraModeAvailableRange"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraModeAvailableRange",arg0),arg1))module->cancelListenDrcCameraModeAvailableRange(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraState(arg0,[cb](CameraState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraState",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraState(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraState",arg0),arg1))module->cancelListenDrcCameraState(arg0,arg1);return Undefined(env);}
if(method=="listenDrcLiveviewWorldRegion"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcLiveviewWorldRegion(arg0,[cb](LiveviewWorldRegion p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<LiveviewWorldRegion>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcLiveviewWorldRegion",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcLiveviewWorldRegion(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcLiveviewWorldRegion"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcLiveviewWorldRegion",arg0),arg1))module->cancelListenDrcLiveviewWorldRegion(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraWideLensState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraWideLensState(arg0,[cb](CameraWideLensState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraWideLensState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraWideLensState",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraWideLensState(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraWideLensState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraWideLensState",arg0),arg1))module->cancelListenDrcCameraWideLensState(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraZoomLensState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraZoomLensState(arg0,[cb](CameraZoomLensState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraZoomLensState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraZoomLensState",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraZoomLensState(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraZoomLensState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraZoomLensState",arg0),arg1))module->cancelListenDrcCameraZoomLensState(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraMeasureTarget"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraMeasureTarget(arg0,[cb](CameraMeasureTarget p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraMeasureTarget>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraMeasureTarget",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraMeasureTarget(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraMeasureTarget"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraMeasureTarget",arg0),arg1))module->cancelListenDrcCameraMeasureTarget(arg0,arg1);return Undefined(env);}
if(method=="listenDrcNightModeSettings"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcNightModeSettings(arg0,[cb](NightModeSettings p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<NightModeSettings>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcNightModeSettings",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcNightModeSettings(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcNightModeSettings"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcNightModeSettings",arg0),arg1))module->cancelListenDrcNightModeSettings(arg0,arg1);return Undefined(env);}
if(method=="listenDrcGimbalState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcGimbalState(arg0,[cb](GimbalState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<GimbalState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcGimbalState",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcGimbalState(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcGimbalState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcGimbalState",arg0),arg1))module->cancelListenDrcGimbalState(arg0,arg1);return Undefined(env);}
if(method=="listenDrcLiveVideoInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcLiveVideoInfo(arg0,[cb](LiveVideoInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<LiveVideoInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcLiveVideoInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcLiveVideoInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcLiveVideoInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcLiveVideoInfo",arg0),arg1))module->cancelListenDrcLiveVideoInfo(arg0,arg1);return Undefined(env);}
if(method=="listenDrcThermalGainMode"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcThermalGainMode(arg0,[cb](ThermalGainModeInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ThermalGainModeInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcThermalGainMode",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcThermalGainMode(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcThermalGainMode"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcThermalGainMode",arg0),arg1))module->cancelListenDrcThermalGainMode(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraIrLensState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraIrLensState(arg0,[cb](CameraIrLensState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraIrLensState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraIrLensState",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraIrLensState(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraIrLensState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraIrLensState",arg0),arg1))module->cancelListenDrcCameraIrLensState(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraIrThermometry"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraIrThermometry(arg0,[cb](CameraIrThermometryInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraIrThermometryInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraIrThermometry",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraIrThermometry(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraIrThermometry"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraIrThermometry",arg0),arg1))module->cancelListenDrcCameraIrThermometry(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraWatermarkSettings"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraWatermarkSettings(arg0,[cb](CameraWatermarkSettings p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraWatermarkSettings>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraWatermarkSettings",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraWatermarkSettings(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraWatermarkSettings"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraWatermarkSettings",arg0),arg1))module->cancelListenDrcCameraWatermarkSettings(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraStorageInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraStorageInfo(arg0,[cb](CameraStorageInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraStorageInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraStorageInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraStorageInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraStorageInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraStorageInfo",arg0),arg1))module->cancelListenDrcCameraStorageInfo(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraIrPipState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraIrPipState(arg0,[cb](CameraIrPipState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraIrPipState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraIrPipState",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraIrPipState(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraIrPipState"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraIrPipState",arg0),arg1))module->cancelListenDrcCameraIrPipState(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraIsothermPolygon"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraIsothermPolygon(arg0,[cb](CameraIsothermPolygon p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraIsothermPolygon>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraIsothermPolygon",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraIsothermPolygon(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraIsothermPolygon"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraIsothermPolygon",arg0),arg1))module->cancelListenDrcCameraIsothermPolygon(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraMediaStorage"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraMediaStorage(arg0,[cb](CameraMediaStorage p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraMediaStorage>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraMediaStorage",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraMediaStorage(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraMediaStorage"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraMediaStorage",arg0),arg1))module->cancelListenDrcCameraMediaStorage(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraAlgorithmDehazeInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraAlgorithmDehazeInfo(arg0,[cb](CameraAlgorithmDehazeInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraAlgorithmDehazeInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraAlgorithmDehazeInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraAlgorithmDehazeInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraAlgorithmDehazeInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraAlgorithmDehazeInfo",arg0),arg1))module->cancelListenDrcCameraAlgorithmDehazeInfo(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraPreRecordedInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraPreRecordedInfo(arg0,[cb](CameraPreRecordedInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraPreRecordedInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraPreRecordedInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraPreRecordedInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraPreRecordedInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraPreRecordedInfo",arg0),arg1))module->cancelListenDrcCameraPreRecordedInfo(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraCapability"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraCapability(arg0,[cb](CameraCapability p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraCapability>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraCapability",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraCapability(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraCapability"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraCapability",arg0),arg1))module->cancelListenDrcCameraCapability(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraSettableCapability"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraSettableCapability(arg0,[cb](CameraSettableCapability p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraSettableCapability>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraSettableCapability",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraSettableCapability(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraSettableCapability"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraSettableCapability",arg0),arg1))module->cancelListenDrcCameraSettableCapability(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraVisibleCapability"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraVisibleCapability(arg0,[cb](CameraVisibleCapability p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraVisibleCapability>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraVisibleCapability",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraVisibleCapability(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraVisibleCapability"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraVisibleCapability",arg0),arg1))module->cancelListenDrcCameraVisibleCapability(arg0,arg1);return Undefined(env);}
if(method=="listenDrcCameraPhotoInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcCameraPhotoInfo(arg0,[cb](CameraPhotoInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CameraPhotoInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCameraPhotoInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcCameraPhotoInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCameraPhotoInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCameraPhotoInfo",arg0),arg1))module->cancelListenDrcCameraPhotoInfo(arg0,arg1);return Undefined(env);}
if(method=="drcSetThermalGainMode"){ RequireLength(env,values,2);
auto arg0=Convert<ThermalGainModeSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetThermalGainMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraApertureValue"){ RequireLength(env,values,2);
auto arg0=Convert<CameraApertureValueSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraApertureValue(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraExposureMode"){ RequireLength(env,values,2);
auto arg0=Convert<CameraExposureModeSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraExposureMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraExposureValue"){ RequireLength(env,values,2);
auto arg0=Convert<CameraExposureSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraExposureValue(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraFocusMode"){ RequireLength(env,values,2);
auto arg0=Convert<CameraFocusModeSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraFocusMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraFocusValue"){ RequireLength(env,values,2);
auto arg0=Convert<CameraFocusValueSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraFocusValue(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraIso"){ RequireLength(env,values,2);
auto arg0=Convert<CameraIsoSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraIso(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraMechanicalShutter"){ RequireLength(env,values,2);
auto arg0=Convert<CameraMechanicalShutterSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraMechanicalShutter(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcCameraPointFocusAction"){ RequireLength(env,values,2);
auto arg0=Convert<CameraPointFocusActionParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcCameraPointFocusAction(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraShutter"){ RequireLength(env,values,2);
auto arg0=Convert<CameraShutterSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraShutter(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraWatermark"){ RequireLength(env,values,2);
auto arg0=Convert<CameraWatermarkParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraWatermark(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraDewarping"){ RequireLength(env,values,2);
auto arg0=Convert<CameraDewarpingSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraDewarping(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraScreenSplit"){ RequireLength(env,values,2);
auto arg0=Convert<CameraScreenSplitParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraScreenSplit(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcCleanFog"){ RequireLength(env,values,2);
auto arg0=Convert<CleanFogParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcCleanFog(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetThermalCurrentPalette"){ RequireLength(env,values,2);
auto arg0=Convert<ThermalCurrentPaletteSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetThermalCurrentPalette(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetThermalSuperResolutionEnable"){ RequireLength(env,values,2);
auto arg0=Convert<ThermalSuperResolutionEnableParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetThermalSuperResolutionEnable(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIrMeteringMode"){ RequireLength(env,values,2);
auto arg0=Convert<IrMeteringModeSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIrMeteringMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIrMeteringPoint"){ RequireLength(env,values,2);
auto arg0=Convert<IrMeteringPointSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIrMeteringPoint(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIrMeteringArea"){ RequireLength(env,values,2);
auto arg0=Convert<IrMeteringAreaSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIrMeteringArea(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIrDisplayMode"){ RequireLength(env,values,2);
auto arg0=Convert<SetIrDisplayModeParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIrDisplayMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIrEnhanceMode"){ RequireLength(env,values,2);
auto arg0=Convert<SetIrEnhanceModeParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIrEnhanceMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIrMixRate"){ RequireLength(env,values,2);
auto arg0=Convert<SetIrMixRateParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIrMixRate(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIsothermEnable"){ RequireLength(env,values,2);
auto arg0=Convert<SetIsothermEnableParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIsothermEnable(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIsothermColorRenderingType"){ RequireLength(env,values,2);
auto arg0=Convert<SetIsothermColorRenderingTypeParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIsothermColorRenderingType(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIsothermLowerUpperRange"){ RequireLength(env,values,2);
auto arg0=Convert<SetIsothermLowerUpperRangeParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIsothermLowerUpperRange(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIsothermRenderingPolygon"){ RequireLength(env,values,2);
auto arg0=Convert<SetIsothermRenderingPolygonParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIsothermRenderingPolygon(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetIsothermRoiBasedRenderingEnable"){ RequireLength(env,values,2);
auto arg0=Convert<SetIsothermRoiBasedRenderingEnableParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetIsothermRoiBasedRenderingEnable(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetInfraredFillLightEnable"){ RequireLength(env,values,2);
auto arg0=Convert<InfraredFillLightEnableParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetInfraredFillLightEnable(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraNightVisionEnable"){ RequireLength(env,values,2);
auto arg0=Convert<CameraNightVisionEnableParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraNightVisionEnable(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcResetCameraSettings"){ RequireLength(env,values,2);
auto arg0=Convert<CameraSettingsResetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcResetCameraSettings(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraDenoiseLevelSet"){ RequireLength(env,values,2);
auto arg0=Convert<CameraDenoiseLevelSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraDenoiseLevelSet(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetVideoResolution"){ RequireLength(env,values,2);
auto arg0=Convert<VideoResolutionSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetVideoResolution(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCameraPhotoFormat"){ RequireLength(env,values,2);
auto arg0=Convert<CameraPhotoFormatSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetCameraPhotoFormat(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetPreRecordedStatus"){ RequireLength(env,values,2);
auto arg0=Convert<PreRecordedStatusSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetPreRecordedStatus(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetPreRecordedTime"){ RequireLength(env,values,2);
auto arg0=Convert<PreRecordedTimeSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetPreRecordedTime(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetCountDownAction"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->drcSetCountDownAction(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetAssistantVideoMode"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetAssistantVideoMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetAssistantVideoSwitch"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetAssistantVideoSwitch(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetAlgorithmDehazeMode"){ RequireLength(env,values,2);
auto arg0=Convert<AlgorithmDehazeModeSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetAlgorithmDehazeMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetAlgorithmDehazeLevel"){ RequireLength(env,values,2);
auto arg0=Convert<AlgorithmDehazeLevelSetParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetAlgorithmDehazeLevel(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDroneCameraWatermarkSettings"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneCameraWatermarkSettings([cb](DroneCameraWatermarkSettingsPush p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneCameraWatermarkSettingsPush>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneCameraWatermarkSettings"),id,cb,[module,id]{module->cancelListenDroneCameraWatermarkSettings(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneCameraWatermarkSettings"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneCameraWatermarkSettings"),arg0))module->cancelListenDroneCameraWatermarkSettings(arg0);return Undefined(env);} }
if(type=="ControlAuthModule") { auto module=UnwrapGenerated<IControlAuthModule>(env,handle,type); if(method=="acquireFlightControlAuthority"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->acquireFlightControlAuthority([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="releaseFlightControlAuthority"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->releaseFlightControlAuthority([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenFlightControlAuthority"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenFlightControlAuthority([cb](bool p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<bool>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenFlightControlAuthority"),id,cb,[module,id]{module->cancelListenFlightControlAuthority(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenFlightControlAuthority"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenFlightControlAuthority"),arg0))module->cancelListenFlightControlAuthority(arg0);return Undefined(env);}
if(method=="acquirePayloadControlAuthority"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->acquirePayloadControlAuthority(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="releasePayloadControlAuthority"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->releasePayloadControlAuthority(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenPayloadControlAuthority"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenPayloadControlAuthority(arg0,[cb](bool p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<bool>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenPayloadControlAuthority",arg0),id,cb,[module,id,arg0]{module->cancelListenPayloadControlAuthority(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenPayloadControlAuthority"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenPayloadControlAuthority",arg0),arg1))module->cancelListenPayloadControlAuthority(arg0,arg1);return Undefined(env);} }
if(type=="CustomSEIModule") { auto module=UnwrapGenerated<ICustomSEIModule>(env,handle,type); if(method=="CustomSEIEncode"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<int>>::from(env,Element(env,values,0));
auto arg1=Convert<std::vector<SeiItem>>::from(env,Element(env,values,1));
std::vector<int> arg2{};
if(!module->CustomSEIEncode(arg0,arg1,arg2))arg2.clear();return Convert<std::vector<int>>::to(env,arg2);}
if(method=="CustomSEIDecode"){ RequireLength(env,values,1);
auto arg0=Convert<std::vector<int>>::from(env,Element(env,values,0));
SeiHeader arg1{};
std::vector<SeiItem> arg2{};
if(!module->CustomSEIDecode(arg0,arg1,arg2))return Null(env);auto out=Object(env);Put(env,out,"header",Convert<SeiHeader>::to(env,arg1));Put(env,out,"seiData",Convert<std::vector<SeiItem>>::to(env,arg2));return out;} }
if(type=="DeployModule") { auto module=UnwrapGenerated<IDeployModule>(env,handle,type); if(method=="listenDockDeparturePoint"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockDeparturePoint([cb](DockDeparturePoint p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockDeparturePoint>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockDeparturePoint"),id,cb,[module,id]{module->cancelListenDockDeparturePoint(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockDeparturePoint"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockDeparturePoint"),arg0))module->cancelListenDockDeparturePoint(arg0);return Undefined(env);}
if(method=="listenAircraftVisualScoutStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftVisualScoutStatus([cb](AircraftVisualScoutStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftVisualScoutStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftVisualScoutStatus"),id,cb,[module,id]{module->cancelListenAircraftVisualScoutStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftVisualScoutStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftVisualScoutStatus"),arg0))module->cancelListenAircraftVisualScoutStatus(arg0);return Undefined(env);}
if(method=="listenAircraftVisualScoutAbnormalInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftVisualScoutAbnormalInfo([cb](AircraftVisualScoutAbnormalInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftVisualScoutAbnormalInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftVisualScoutAbnormalInfo"),id,cb,[module,id]{module->cancelListenAircraftVisualScoutAbnormalInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftVisualScoutAbnormalInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftVisualScoutAbnormalInfo"),arg0))module->cancelListenAircraftVisualScoutAbnormalInfo(arg0);return Undefined(env);}
if(method=="listenAircraftVisualScoutObstacleInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftVisualScoutObstacleInfo([cb](AircraftVisualScoutObstacleInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftVisualScoutObstacleInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftVisualScoutObstacleInfo"),id,cb,[module,id]{module->cancelListenAircraftVisualScoutObstacleInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftVisualScoutObstacleInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftVisualScoutObstacleInfo"),arg0))module->cancelListenAircraftVisualScoutObstacleInfo(arg0);return Undefined(env);}
if(method=="listenAircraftEphemerisDownloadState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftEphemerisDownloadState([cb](EphemerisDownloadState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<EphemerisDownloadState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftEphemerisDownloadState"),id,cb,[module,id]{module->cancelListenAircraftEphemerisDownloadState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftEphemerisDownloadState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftEphemerisDownloadState"),arg0))module->cancelListenAircraftEphemerisDownloadState(arg0);return Undefined(env);}
if(method=="listenAircraftEphemerisInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftEphemerisInfo([cb](EphemerisInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<EphemerisInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftEphemerisInfo"),id,cb,[module,id]{module->cancelListenAircraftEphemerisInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftEphemerisInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftEphemerisInfo"),arg0))module->cancelListenAircraftEphemerisInfo(arg0);return Undefined(env);}
if(method=="downloadEphemeris"){ RequireLength(env,values,2);
auto arg0=Convert<DownloadEphemerisParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->downloadEphemeris(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="executeInOutWaylineDetect"){ RequireLength(env,values,2);
auto arg0=Convert<InOutWaylineDetectParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->executeInOutWaylineDetect(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setInOutWaylineFlight"){ RequireLength(env,values,2);
auto arg0=Convert<InOutWaylineFlightSettingParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setInOutWaylineFlight(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getInOutWaylineFlightSetting"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getInOutWaylineFlightSetting([cb](InOutWaylineFlightSettingParams p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<InOutWaylineFlightSettingParams>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="DeviceDebugModule") { auto module=UnwrapGenerated<IDeviceDebugModule>(env,handle,type); if(method=="openDebugMode"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->openDebugMode(arg0,[cb](FlightHubError p0,OpenDebugModeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OpenDebugModeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="closeDebugMode"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->closeDebugMode(arg0,[cb](FlightHubError p0,CloseDebugModeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CloseDebugModeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="openDockCover"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->openDockCover(arg0,[cb](FlightHubError p0,OpenDockCoverResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OpenDockCoverResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getOpenDockCoverProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getOpenDockCoverProgress(arg0,[cb](FlightHubError p0,OpenDockCoverProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OpenDockCoverProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDockCoverOpenProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDockCoverOpenProgress(arg0,[cb](OpenDockCoverResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<OpenDockCoverResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDockCoverOpenProgress"),id,cb,[module,id]{module->unsubscribeDockCoverOpenProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDockCoverOpenProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDockCoverOpenProgress"),arg0))module->unsubscribeDockCoverOpenProgress(arg0);return Undefined(env);}
if(method=="closeDockCover"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->closeDockCover(arg0,[cb](FlightHubError p0,CloseDockCoverResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CloseDockCoverResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getCloseDockCoverProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getCloseDockCoverProgress(arg0,[cb](FlightHubError p0,CloseDockCoverProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CloseDockCoverProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDockCoverCloseProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDockCoverCloseProgress(arg0,[cb](CloseDockCoverResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CloseDockCoverResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDockCoverCloseProgress"),id,cb,[module,id]{module->unsubscribeDockCoverCloseProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDockCoverCloseProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDockCoverCloseProgress"),arg0))module->unsubscribeDockCoverCloseProgress(arg0);return Undefined(env);}
if(method=="deviceReboot"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deviceReboot(arg0,[cb](FlightHubError p0,DeviceRebootResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceRebootResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDeviceRebootProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDeviceRebootProgress(arg0,[cb](DeviceRebootResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DeviceRebootResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDeviceRebootProgress"),id,cb,[module,id]{module->unsubscribeDeviceRebootProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDeviceRebootProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDeviceRebootProgress"),arg0))module->unsubscribeDeviceRebootProgress(arg0);return Undefined(env);}
if(method=="getDeviceRebootProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDeviceRebootProgress(arg0,[cb](FlightHubError p0,DeviceRebootProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceRebootProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deviceFormat"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deviceFormat(arg0,[cb](FlightHubError p0,DeviceFormatResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceFormatResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDeviceFormatProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDeviceFormatProgress(arg0,[cb](FlightHubError p0,DeviceFormatProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceFormatProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDeviceFormatProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDeviceFormatProgress(arg0,[cb](DeviceFormatResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DeviceFormatResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDeviceFormatProgress"),id,cb,[module,id]{module->unsubscribeDeviceFormatProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDeviceFormatProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDeviceFormatProgress"),arg0))module->unsubscribeDeviceFormatProgress(arg0);return Undefined(env);}
if(method=="openDrone"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->openDrone(arg0,[cb](FlightHubError p0,OpenDroneResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OpenDroneResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDroneOpenProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDroneOpenProgress(arg0,[cb](OpenDroneResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<OpenDroneResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDroneOpenProgress"),id,cb,[module,id]{module->unsubscribeDroneOpenProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDroneOpenProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDroneOpenProgress"),arg0))module->unsubscribeDroneOpenProgress(arg0);return Undefined(env);}
if(method=="closeDrone"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->closeDrone(arg0,[cb](FlightHubError p0,CloseDroneResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CloseDroneResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDroneCloseProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDroneCloseProgress(arg0,[cb](CloseDroneResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CloseDroneResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDroneCloseProgress"),id,cb,[module,id]{module->unsubscribeDroneCloseProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDroneCloseProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDroneCloseProgress"),arg0))module->unsubscribeDroneCloseProgress(arg0);return Undefined(env);}
if(method=="subscribeDroneFormatProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDroneFormatProgress(arg0,[cb](DroneFormatResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneFormatResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDroneFormatProgress"),id,cb,[module,id]{module->unsubscribeDroneFormatProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDroneFormatProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDroneFormatProgress"),arg0))module->unsubscribeDroneFormatProgress(arg0);return Undefined(env);}
if(method=="droneFormat"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->droneFormat(arg0,[cb](FlightHubError p0,DroneFormatResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DroneFormatResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="droneSdrWorkMode"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->droneSdrWorkMode(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="openCharge"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->openCharge(arg0,[cb](FlightHubError p0,OpenChargeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OpenChargeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDroneChargeOpenProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDroneChargeOpenProgress(arg0,[cb](OpenChargeResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<OpenChargeResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDroneChargeOpenProgress"),id,cb,[module,id]{module->unsubscribeDroneChargeOpenProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDroneChargeOpenProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDroneChargeOpenProgress"),arg0))module->unsubscribeDroneChargeOpenProgress(arg0);return Undefined(env);}
if(method=="closeCharge"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->closeCharge(arg0,[cb](FlightHubError p0,CloseChargeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CloseChargeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDroneChargeCloseProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDroneChargeCloseProgress(arg0,[cb](CloseChargeResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CloseChargeResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDroneChargeCloseProgress"),id,cb,[module,id]{module->unsubscribeDroneChargeCloseProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDroneChargeCloseProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDroneChargeCloseProgress"),arg0))module->unsubscribeDroneChargeCloseProgress(arg0);return Undefined(env);}
if(method=="setDockAirConditionerMode"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setDockAirConditionerMode(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setDockSilentMode"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setDockSilentMode(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setDistanceLimit"){ RequireLength(env,values,4);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto arg2=Convert<int>::from(env,Element(env,values,2));
auto cb=NewCallback(env,Element(env,values,3),true);
try { module->setDistanceLimit(arg0,arg1,arg2,[cb](FlightHubError p0,SetDistanceLimitResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetDistanceLimitResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setHeightLimit"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setHeightLimit(arg0,arg1,[cb](FlightHubError p0,SetHeightLimitResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetHeightLimitResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setObstacleAvoidance"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setObstacleAvoidance(arg0,arg1,[cb](FlightHubError p0,SetObstacleAvoidanceResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetObstacleAvoidanceResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setRemainingPowerForRth"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setRemainingPowerForRth(arg0,arg1,[cb](FlightHubError p0,SetRemainingPowerForRthResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetRemainingPowerForRthResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setNightLightsState"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setNightLightsState(arg0,arg1,[cb](FlightHubError p0,SetNightLightsStateResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetNightLightsStateResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="switchAlarmLightState"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->switchAlarmLightState(arg0,arg1,[cb](FlightHubError p0,SwitchAlarmStateResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SwitchAlarmStateResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="esimOperatorSwitch"){ RequireLength(env,values,5);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto arg2=Convert<int>::from(env,Element(env,values,2));
auto arg3=Convert<std::string>::from(env,Element(env,values,3));
auto cb=NewCallback(env,Element(env,values,4),true);
try { module->esimOperatorSwitch(arg0,arg1,arg2,arg3,[cb](FlightHubError p0,EsimOperatorSwitchResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<EsimOperatorSwitchResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDeviceEsimOperatorSwitchProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDeviceEsimOperatorSwitchProgress(arg0,[cb](EsimOperatorSwitchResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<EsimOperatorSwitchResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDeviceEsimOperatorSwitchProgress"),id,cb,[module,id]{module->unsubscribeDeviceEsimOperatorSwitchProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDeviceEsimOperatorSwitchProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDeviceEsimOperatorSwitchProgress"),arg0))module->unsubscribeDeviceEsimOperatorSwitchProgress(arg0);return Undefined(env);}
if(method=="simSlotSwitch"){ RequireLength(env,values,5);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto arg2=Convert<int>::from(env,Element(env,values,2));
auto arg3=Convert<std::string>::from(env,Element(env,values,3));
auto cb=NewCallback(env,Element(env,values,4),true);
try { module->simSlotSwitch(arg0,arg1,arg2,arg3,[cb](FlightHubError p0,SimSlotSwitchResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SimSlotSwitchResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeDeviceSimSlotSwitchProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->subscribeDeviceSimSlotSwitchProgress(arg0,[cb](SimSlotSwitchResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<SimSlotSwitchResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeDeviceSimSlotSwitchProgress"),id,cb,[module,id]{module->unsubscribeDeviceSimSlotSwitchProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeDeviceSimSlotSwitchProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeDeviceSimSlotSwitchProgress"),arg0))module->unsubscribeDeviceSimSlotSwitchProgress(arg0);return Undefined(env);}
if(method=="setBatteryStoreMode"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setBatteryStoreMode(arg0,arg1,[cb](FlightHubError p0,SetBatteryStoreModeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetBatteryStoreModeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="startManualBatterySwap"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->startManualBatterySwap(arg0,arg1,[cb](FlightHubError p0,ManualBatterySwapResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ManualBatterySwapResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getManualBatterySwapProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getManualBatterySwapProgress(arg0,[cb](FlightHubError p0,ManualBatterySwapProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ManualBatterySwapProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setDonglePowerSwitch"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setDonglePowerSwitch(arg0,arg1,[cb](FlightHubError p0,DonglePowerSwitchResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DonglePowerSwitchResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setLowPowerSwitch"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setLowPowerSwitch(arg0,arg1,[cb](FlightHubError p0,LowPowerSwitchResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LowPowerSwitchResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getEsimOperatorSwitchProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getEsimOperatorSwitchProgress(arg0,[cb](FlightHubError p0,EsimOperatorSwitchProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<EsimOperatorSwitchProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setGeoCagingEnable"){ RequireLength(env,values,4);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto arg2=Convert<std::vector<GeoCagingInfoParam>>::from(env,Element(env,values,2));
auto cb=NewCallback(env,Element(env,values,3),true);
try { module->setGeoCagingEnable(arg0,arg1,arg2,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="cloudEnvironmentSwitch"){ RequireLength(env,values,2);
auto arg0=Convert<CloudEnvironmentSwitchParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->cloudEnvironmentSwitch(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="cloudEnvironmentSwitchCallback"){ RequireLength(env,values,2);
auto arg0=Convert<CloudEnvironmentSwitchCallbackParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->cloudEnvironmentSwitchCallback(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDeviceCloudEnvironmentSwitchProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDeviceCloudEnvironmentSwitchProgress(arg0,[cb](CloudEnvironmentSwitchResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CloudEnvironmentSwitchResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDeviceCloudEnvironmentSwitchProgress"),id,cb,[module,id]{module->cancelListenDeviceCloudEnvironmentSwitchProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDeviceCloudEnvironmentSwitchProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDeviceCloudEnvironmentSwitchProgress"),arg0))module->cancelListenDeviceCloudEnvironmentSwitchProgress(arg0);return Undefined(env);} }
if(type=="DeviceHMSModule") { auto module=UnwrapGenerated<IDeviceHMSModule>(env,handle,type); if(method=="listenDeviceHMS"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDeviceHMS([cb](HmsData p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<HmsData>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDeviceHMS"),id,cb,[module,id]{module->cancelListenDeviceHMS(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDeviceHMS"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDeviceHMS"),arg0))module->cancelListenDeviceHMS(arg0);return Undefined(env);} }
if(type=="DeviceManageModule") { auto module=UnwrapGenerated<IDeviceManageModule>(env,handle,type); if(method=="getDeviceList"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getDeviceList([cb](std::vector<DeviceTopo> p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<std::vector<DeviceTopo>>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDeviceDetailInfo"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDeviceDetailInfo(arg0,[cb](FlightHubError p0,DeviceDetailInfo p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceDetailInfo>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="modifyDeviceName"){ RequireLength(env,values,2);
auto arg0=Convert<ModifyDeviceNameParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->modifyDeviceName(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenWorkspaceDeviceChanged"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenWorkspaceDeviceChanged([cb](WorkspaceDeviceChange p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<WorkspaceDeviceChange>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenWorkspaceDeviceChanged"),id,cb,[module,id]{module->cancelListenWorkspaceDeviceChanged(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenWorkspaceDeviceChanged"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenWorkspaceDeviceChanged"),arg0))module->cancelListenWorkspaceDeviceChanged(arg0);return Undefined(env);}
if(method=="listenDeviceTopoChanged"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDeviceTopoChanged([cb](DeviceTopoChange p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DeviceTopoChange>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDeviceTopoChanged"),id,cb,[module,id]{module->cancelListenDeviceTopoChanged(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDeviceTopoChanged"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDeviceTopoChanged"),arg0))module->cancelListenDeviceTopoChanged(arg0);return Undefined(env);}
if(method=="unbindDevice"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->unbindDevice(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDockDeviceStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDockDeviceStatus(arg0,[cb](FlightHubError p0,DockDeviceStatusResultList p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DockDeviceStatusResultList>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDroneDeviceStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDroneDeviceStatus(arg0,[cb](FlightHubError p0,DroneDeviceStatusResultList p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DroneDeviceStatusResultList>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="DeviceStateModule") { auto module=UnwrapGenerated<IDeviceStateModule>(env,handle,type); if(method=="listenDockOnlineStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockOnlineStatus([cb](DockOnlineStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockOnlineStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockOnlineStatus"),id,cb,[module,id]{module->cancelListenDockOnlineStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockOnlineStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockOnlineStatus"),arg0))module->cancelListenDockOnlineStatus(arg0);return Undefined(env);}
if(method=="listenDroneOnlineStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneOnlineStatus([cb](DroneOnlineStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneOnlineStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneOnlineStatus"),id,cb,[module,id]{module->cancelListenDroneOnlineStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneOnlineStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneOnlineStatus"),arg0))module->cancelListenDroneOnlineStatus(arg0);return Undefined(env);} }
if(type=="DiagnosisManagementModule") { auto module=UnwrapGenerated<IDiagnosisManagementModule>(env,handle,type); if(method=="createSelfDiagnosis"){ RequireLength(env,values,2);
auto arg0=Convert<CreateSelfDiagnosisParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createSelfDiagnosis(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="operateSelfDiagnosis"){ RequireLength(env,values,2);
auto arg0=Convert<OperateSelfDiagnosisParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->operateSelfDiagnosis(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getSelfDiagnosisReport"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getSelfDiagnosisReport(arg0,[cb](GetSelfDiagnosisReportResults p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<GetSelfDiagnosisReportResults>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getSelfDiagnosisReportList"){ RequireLength(env,values,2);
auto arg0=Convert<GetSelfDiagnosisReportListParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getSelfDiagnosisReportList(arg0,[cb](GetSelfDiagnosisReportListResults p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<GetSelfDiagnosisReportListResults>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="Dock") { auto module=UnwrapGenerated<IDock>(env,handle,type); if(method=="getLiveStream"){ RequireLength(env,values,1);
auto arg0=Convert<LiveInfo>::from(env,Element(env,values,0));
return WrapGenerated(env,"LiveModule",module->getLiveStream(arg0));}
if(method=="getLiveRecord"){ RequireLength(env,values,1);
auto arg0=Convert<LiveInfo>::from(env,Element(env,values,0));
return WrapGenerated(env,"LiveRecordModule",module->getLiveRecord(arg0));}
if(method=="getLiveDeviceModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"LiveDeviceModule",module->getLiveDeviceModule());}
if(method=="getDockOsdModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DockOsdModule",module->getDockOsdModule());}
if(method=="getDeployModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeployModule",module->getDeployModule());}
if(method=="getDockControlModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DockControlModule",module->getDockControlModule());}
if(method=="getRtkCalibrationModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"RtkCalibrationModule",module->getRtkCalibrationModule());}
if(method=="getNetworkTestModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"NetworkTestModule",module->getNetworkTestModule());}
if(method=="getDeviceDebugModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeviceDebugModule",module->getDeviceDebugModule());}
if(method=="getDeviceStateModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeviceStateModule",module->getDeviceStateModule());}
if(method=="getDeviceHMSModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeviceHMSModule",module->getDeviceHMSModule());} }
if(type=="DockControlModule") { auto module=UnwrapGenerated<IDockControlModule>(env,handle,type); if(method=="changeDockCameraPosition"){ RequireLength(env,values,4);
auto arg0=Convert<LiveInfo>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto arg2=Convert<std::string>::from(env,Element(env,values,2));
auto cb=NewCallback(env,Element(env,values,3),true);
try { module->changeDockCameraPosition(arg0,arg1,arg2,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDockAirConditionerStatusInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockAirConditionerStatusInfo([cb](DockAirConditionerStatusInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockAirConditionerStatusInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockAirConditionerStatusInfo"),id,cb,[module,id]{module->cancelListenDockAirConditionerStatusInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockAirConditionerStatusInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockAirConditionerStatusInfo"),arg0))module->cancelListenDockAirConditionerStatusInfo(arg0);return Undefined(env);}
if(method=="listenDockSupplementLightState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockSupplementLightState([cb](DockSupplementLightState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockSupplementLightState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockSupplementLightState"),id,cb,[module,id]{module->cancelListenDockSupplementLightState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockSupplementLightState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockSupplementLightState"),arg0))module->cancelListenDockSupplementLightState(arg0);return Undefined(env);}
if(method=="setDockSupplementLightState"){ RequireLength(env,values,2);
auto arg0=Convert<bool>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setDockSupplementLightState(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setDockChargeState"){ RequireLength(env,values,2);
auto arg0=Convert<bool>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setDockChargeState(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setDockCoverState"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setDockCoverState(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setDockAirConditionerMode"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setDockAirConditionerMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="DockOsdModule") { auto module=UnwrapGenerated<IDockOsdModule>(env,handle,type); if(method=="listenDockLocation"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockLocation([cb](DockLocation p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockLocation>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockLocation"),id,cb,[module,id]{module->cancelListenDockLocation(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockLocation"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockLocation"),arg0))module->cancelListenDockLocation(arg0);return Undefined(env);}
if(method=="listenDroneInDock"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneInDock([cb](DroneInDock p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneInDock>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneInDock"),id,cb,[module,id]{module->cancelListenDroneInDock(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneInDock"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneInDock"),arg0))module->cancelListenDroneInDock(arg0);return Undefined(env);}
if(method=="listenDockCoverState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockCoverState([cb](DockCoverState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockCoverState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockCoverState"),id,cb,[module,id]{module->cancelListenDockCoverState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockCoverState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockCoverState"),arg0))module->cancelListenDockCoverState(arg0);return Undefined(env);}
if(method=="listenDockDroneChargeState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockDroneChargeState([cb](DockDroneChargeState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockDroneChargeState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockDroneChargeState"),id,cb,[module,id]{module->cancelListenDockDroneChargeState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockDroneChargeState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockDroneChargeState"),arg0))module->cancelListenDockDroneChargeState(arg0);return Undefined(env);}
if(method=="listenDockMeteorologicalInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockMeteorologicalInfo([cb](DockMeteorologicalInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockMeteorologicalInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockMeteorologicalInfo"),id,cb,[module,id]{module->cancelListenDockMeteorologicalInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockMeteorologicalInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockMeteorologicalInfo"),arg0))module->cancelListenDockMeteorologicalInfo(arg0);return Undefined(env);}
if(method=="listenDockBackupBatteryInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockBackupBatteryInfo([cb](DockBackupBatteryInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockBackupBatteryInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockBackupBatteryInfo"),id,cb,[module,id]{module->cancelListenDockBackupBatteryInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockBackupBatteryInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockBackupBatteryInfo"),arg0))module->cancelListenDockBackupBatteryInfo(arg0);return Undefined(env);}
if(method=="listenDockMaintainStatusInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockMaintainStatusInfo([cb](DockMaintainStatusInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockMaintainStatusInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockMaintainStatusInfo"),id,cb,[module,id]{module->cancelListenDockMaintainStatusInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockMaintainStatusInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockMaintainStatusInfo"),arg0))module->cancelListenDockMaintainStatusInfo(arg0);return Undefined(env);}
if(method=="listenDockModeCode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockModeCode([cb](DockModeCode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockModeCode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockModeCode"),id,cb,[module,id]{module->cancelListenDockModeCode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockModeCode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockModeCode"),arg0))module->cancelListenDockModeCode(arg0);return Undefined(env);}
if(method=="listenFlightTaskStepCode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenFlightTaskStepCode([cb](FlightTaskStepCode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightTaskStepCode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenFlightTaskStepCode"),id,cb,[module,id]{module->cancelListenFlightTaskStepCode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenFlightTaskStepCode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenFlightTaskStepCode"),arg0))module->cancelListenFlightTaskStepCode(arg0);return Undefined(env);}
if(method=="listenDockSubDevice"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockSubDevice([cb](DockSubDeviceInfoList p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockSubDeviceInfoList>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockSubDevice"),id,cb,[module,id]{module->cancelListenDockSubDevice(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockSubDevice"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockSubDevice"),arg0))module->cancelListenDockSubDevice(arg0);return Undefined(env);}
if(method=="listenDockNetworkState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockNetworkState([cb](DockNetworkState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockNetworkState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockNetworkState"),id,cb,[module,id]{module->cancelListenDockNetworkState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockNetworkState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockNetworkState"),arg0))module->cancelListenDockNetworkState(arg0);return Undefined(env);}
if(method=="listenDockMediaFileDetail"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockMediaFileDetail([cb](DockMediaFileDetail p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockMediaFileDetail>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockMediaFileDetail"),id,cb,[module,id]{module->cancelListenDockMediaFileDetail(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockMediaFileDetail"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockMediaFileDetail"),arg0))module->cancelListenDockMediaFileDetail(arg0);return Undefined(env);}
if(method=="listenDockWirelessLink"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockWirelessLink([cb](DockWirelessLink p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockWirelessLink>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockWirelessLink"),id,cb,[module,id]{module->cancelListenDockWirelessLink(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockWirelessLink"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockWirelessLink"),arg0))module->cancelListenDockWirelessLink(arg0);return Undefined(env);}
if(method=="listenDockJobNumber"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockJobNumber([cb](DockJobNumber p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockJobNumber>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockJobNumber"),id,cb,[module,id]{module->cancelListenDockJobNumber(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockJobNumber"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockJobNumber"),arg0))module->cancelListenDockJobNumber(arg0);return Undefined(env);}
if(method=="listenDockPowerState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockPowerState([cb](DockPowerState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockPowerState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockPowerState"),id,cb,[module,id]{module->cancelListenDockPowerState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockPowerState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockPowerState"),arg0))module->cancelListenDockPowerState(arg0);return Undefined(env);}
if(method=="listenDockStorageState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockStorageState([cb](DockStorageState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockStorageState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockStorageState"),id,cb,[module,id]{module->cancelListenDockStorageState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockStorageState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockStorageState"),arg0))module->cancelListenDockStorageState(arg0);return Undefined(env);}
if(method=="listenDockFirstPowerOnTime"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockFirstPowerOnTime([cb](DockFirstPowerOnTime p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockFirstPowerOnTime>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockFirstPowerOnTime"),id,cb,[module,id]{module->cancelListenDockFirstPowerOnTime(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockFirstPowerOnTime"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockFirstPowerOnTime"),arg0))module->cancelListenDockFirstPowerOnTime(arg0);return Undefined(env);}
if(method=="listenDockAccumulatedRunningTime"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockAccumulatedRunningTime([cb](DockAccTime p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockAccTime>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockAccumulatedRunningTime"),id,cb,[module,id]{module->cancelListenDockAccumulatedRunningTime(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockAccumulatedRunningTime"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockAccumulatedRunningTime"),arg0))module->cancelListenDockAccumulatedRunningTime(arg0);return Undefined(env);}
if(method=="listenDockAlternateLandPoint"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockAlternateLandPoint([cb](DockAlternateLandPoint p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockAlternateLandPoint>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockAlternateLandPoint"),id,cb,[module,id]{module->cancelListenDockAlternateLandPoint(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockAlternateLandPoint"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockAlternateLandPoint"),arg0))module->cancelListenDockAlternateLandPoint(arg0);return Undefined(env);}
if(method=="listenDockPositionState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockPositionState([cb](DockPositionState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockPositionState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockPositionState"),id,cb,[module,id]{module->cancelListenDockPositionState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockPositionState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockPositionState"),arg0))module->cancelListenDockPositionState(arg0);return Undefined(env);}
if(method=="listenDockActivationTime"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockActivationTime([cb](DockActivationTime p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockActivationTime>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockActivationTime"),id,cb,[module,id]{module->cancelListenDockActivationTime(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockActivationTime"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockActivationTime"),arg0))module->cancelListenDockActivationTime(arg0);return Undefined(env);}
if(method=="listenDockBatteryStoreMode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockBatteryStoreMode([cb](DockBatteryStoreMode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockBatteryStoreMode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockBatteryStoreMode"),id,cb,[module,id]{module->cancelListenDockBatteryStoreMode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockBatteryStoreMode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockBatteryStoreMode"),arg0))module->cancelListenDockBatteryStoreMode(arg0);return Undefined(env);}
if(method=="listenDockAlarmState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockAlarmState([cb](DockAlarmState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockAlarmState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockAlarmState"),id,cb,[module,id]{module->cancelListenDockAlarmState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockAlarmState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockAlarmState"),arg0))module->cancelListenDockAlarmState(arg0);return Undefined(env);}
if(method=="listenDockDroneBatteryMaintenanceInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockDroneBatteryMaintenanceInfo([cb](DockDroneBatteryMaintenanceInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockDroneBatteryMaintenanceInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockDroneBatteryMaintenanceInfo"),id,cb,[module,id]{module->cancelListenDockDroneBatteryMaintenanceInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockDroneBatteryMaintenanceInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockDroneBatteryMaintenanceInfo"),arg0))module->cancelListenDockDroneBatteryMaintenanceInfo(arg0);return Undefined(env);}
if(method=="listenDockEmergencyStopState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockEmergencyStopState([cb](DockEmergencyStopState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockEmergencyStopState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockEmergencyStopState"),id,cb,[module,id]{module->cancelListenDockEmergencyStopState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockEmergencyStopState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockEmergencyStopState"),arg0))module->cancelListenDockEmergencyStopState(arg0);return Undefined(env);}
if(method=="listenDockSilentMode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockSilentMode([cb](DockSilentMode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockSilentMode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockSilentMode"),id,cb,[module,id]{module->cancelListenDockSilentMode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockSilentMode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockSilentMode"),arg0))module->cancelListenDockSilentMode(arg0);return Undefined(env);}
if(method=="listenDockUserExperienceImprovement"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockUserExperienceImprovement([cb](DockUserExperienceImprovement p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockUserExperienceImprovement>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockUserExperienceImprovement"),id,cb,[module,id]{module->cancelListenDockUserExperienceImprovement(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockUserExperienceImprovement"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockUserExperienceImprovement"),arg0))module->cancelListenDockUserExperienceImprovement(arg0);return Undefined(env);}
if(method=="listenDockDrcState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockDrcState([cb](DockDrcState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockDrcState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockDrcState"),id,cb,[module,id]{module->cancelListenDockDrcState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockDrcState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockDrcState"),arg0))module->cancelListenDockDrcState(arg0);return Undefined(env);}
if(method=="listenDockPutterState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockPutterState([cb](DockPutterState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockPutterState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockPutterState"),id,cb,[module,id]{module->cancelListenDockPutterState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockPutterState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockPutterState"),arg0))module->cancelListenDockPutterState(arg0);return Undefined(env);}
if(method=="listenDockRelativeAlternateLandPoint"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockRelativeAlternateLandPoint([cb](DockRelativeAlternateLandPoint p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockRelativeAlternateLandPoint>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockRelativeAlternateLandPoint"),id,cb,[module,id]{module->cancelListenDockRelativeAlternateLandPoint(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockRelativeAlternateLandPoint"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockRelativeAlternateLandPoint"),arg0))module->cancelListenDockRelativeAlternateLandPoint(arg0);return Undefined(env);}
if(method=="listenDockSelfConvergeCoordinate"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockSelfConvergeCoordinate([cb](DockSelfConvergeCoordinate p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockSelfConvergeCoordinate>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockSelfConvergeCoordinate"),id,cb,[module,id]{module->cancelListenDockSelfConvergeCoordinate(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockSelfConvergeCoordinate"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockSelfConvergeCoordinate"),arg0))module->cancelListenDockSelfConvergeCoordinate(arg0);return Undefined(env);}
if(method=="listenDockFirmwareInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockFirmwareInfo([cb](DockFirmwareInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockFirmwareInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockFirmwareInfo"),id,cb,[module,id]{module->cancelListenDockFirmwareInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockFirmwareInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockFirmwareInfo"),arg0))module->cancelListenDockFirmwareInfo(arg0);return Undefined(env);}
if(method=="listenDockDongleInfos"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockDongleInfos([cb](DockDongleInfos p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockDongleInfos>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockDongleInfos"),id,cb,[module,id]{module->cancelListenDockDongleInfos(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockDongleInfos"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockDongleInfos"),arg0))module->cancelListenDockDongleInfos(arg0);return Undefined(env);}
if(method=="listenDockAirConditionerMode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockAirConditionerMode([cb](DockAirConditionerMode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockAirConditionerMode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockAirConditionerMode"),id,cb,[module,id]{module->cancelListenDockAirConditionerMode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockAirConditionerMode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockAirConditionerMode"),arg0))module->cancelListenDockAirConditionerMode(arg0);return Undefined(env);} }
if(type=="DrcModule") { auto module=UnwrapGenerated<IDrcModule>(env,handle,type); if(method=="listenLinkStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenLinkStatus([cb](LinkStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<LinkStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenLinkStatus"),id,cb,[module,id]{module->cancelListenLinkStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenLinkStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenLinkStatus"),arg0))module->cancelListenLinkStatus(arg0);return Undefined(env);}
if(method=="connectDrcLink"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->connectDrcLink([cb](FlightHubSdkErrorCode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubSdkErrorCode>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="disconnectDrcLink"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->disconnectDrcLink([cb](FlightHubSdkErrorCode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubSdkErrorCode>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcRtcQualityTest"){ RequireLength(env,values,2);
auto arg0=Convert<RtcQualityTestParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcRtcQualityTest(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcDelayInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcDelayInfo([cb](DrcDelayInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DrcDelayInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcDelayInfo"),id,cb,[module,id]{module->cancelListenDrcDelayInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcDelayInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcDelayInfo"),arg0))module->cancelListenDrcDelayInfo(arg0);return Undefined(env);}
if(method=="listenDrcCountDownInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcCountDownInfo([cb](DrcCountDownInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DrcCountDownInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcCountDownInfo"),id,cb,[module,id]{module->cancelListenDrcCountDownInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcCountDownInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcCountDownInfo"),arg0))module->cancelListenDrcCountDownInfo(arg0);return Undefined(env);} }
if(type=="Drone") { auto module=UnwrapGenerated<IDrone>(env,handle,type); if(method=="getLiveStream"){ RequireLength(env,values,1);
auto arg0=Convert<LiveInfo>::from(env,Element(env,values,0));
return WrapGenerated(env,"LiveModule",module->getLiveStream(arg0));}
if(method=="getLiveRecord"){ RequireLength(env,values,1);
auto arg0=Convert<LiveInfo>::from(env,Element(env,values,0));
return WrapGenerated(env,"LiveRecordModule",module->getLiveRecord(arg0));}
if(method=="getLiveDeviceModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"LiveDeviceModule",module->getLiveDeviceModule());}
if(method=="getTakeoffModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"TakeoffModule",module->getTakeoffModule());}
if(method=="getFlightControlModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FlightControlModule",module->getFlightControlModule());}
if(method=="getControlAuthModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"ControlAuthModule",module->getControlAuthModule());}
if(method=="getDrcModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DrcModule",module->getDrcModule());}
if(method=="getFlightSettingsModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FlightSettingsModule",module->getFlightSettingsModule());}
if(method=="getTestFlightModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"TestFlightModule",module->getTestFlightModule());}
if(method=="getOnboardAiModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"OnboardAiModule",module->getOnboardAiModule());}
if(method=="getPsdkControlModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"PsdkControlModule",module->getPsdkControlModule());}
if(method=="getCameraControlModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"CameraControlModule",module->getCameraControlModule());}
if(method=="getFlyToPointModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FlyToPointModule",module->getFlyToPointModule());}
if(method=="getFlightTaskControlModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FlightTaskControlModule",module->getFlightTaskControlModule());}
if(method=="getPoiModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"PoiModule",module->getPoiModule());}
if(method=="getInFlightWaylineModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"InFlightWaylineModule",module->getInFlightWaylineModule());}
if(method=="getDroneOsdModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DroneOsdModule",module->getDroneOsdModule());}
if(method=="getDeviceStateModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeviceStateModule",module->getDeviceStateModule());}
if(method=="getDeviceHMSModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeviceHMSModule",module->getDeviceHMSModule());}
if(method=="getDeviceDebugModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeviceDebugModule",module->getDeviceDebugModule());}
if(method=="getAIBoxModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"AIBoxModule",module->getAIBoxModule());} }
if(type=="DroneOsdModule") { auto module=UnwrapGenerated<IDroneOsdModule>(env,handle,type); if(method=="listenAircraftBatteryInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftBatteryInfo([cb](AircraftBatteryInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftBatteryInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftBatteryInfo"),id,cb,[module,id]{module->cancelListenAircraftBatteryInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftBatteryInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftBatteryInfo"),arg0))module->cancelListenAircraftBatteryInfo(arg0);return Undefined(env);}
if(method=="listenAircraftAttitude"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftAttitude([cb](AircraftAttitude p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftAttitude>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftAttitude"),id,cb,[module,id]{module->cancelListenAircraftAttitude(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftAttitude"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftAttitude"),arg0))module->cancelListenAircraftAttitude(arg0);return Undefined(env);}
if(method=="listenAircraftLocation"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftLocation([cb](AircraftLocation p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftLocation>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftLocation"),id,cb,[module,id]{module->cancelListenAircraftLocation(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftLocation"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftLocation"),arg0))module->cancelListenAircraftLocation(arg0);return Undefined(env);}
if(method=="listenAircraftModeCode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftModeCode([cb](AircraftModeCode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftModeCode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftModeCode"),id,cb,[module,id]{module->cancelListenAircraftModeCode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftModeCode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftModeCode"),arg0))module->cancelListenAircraftModeCode(arg0);return Undefined(env);}
if(method=="listenAircraftWindSpeed"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftWindSpeed([cb](AircraftWindSpeed p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftWindSpeed>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftWindSpeed"),id,cb,[module,id]{module->cancelListenAircraftWindSpeed(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftWindSpeed"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftWindSpeed"),arg0))module->cancelListenAircraftWindSpeed(arg0);return Undefined(env);}
if(method=="listenFlightTasksException"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenFlightTasksException([cb](FlightTaskException p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightTaskException>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenFlightTasksException"),id,cb,[module,id]{module->cancelListenFlightTasksException(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenFlightTasksException"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenFlightTasksException"),arg0))module->cancelListenFlightTasksException(arg0);return Undefined(env);}
if(method=="listenAircraftControlCode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftControlCode([cb](AircraftControlCode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftControlCode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftControlCode"),id,cb,[module,id]{module->cancelListenAircraftControlCode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftControlCode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftControlCode"),arg0))module->cancelListenAircraftControlCode(arg0);return Undefined(env);}
if(method=="listenAircraftSpeed"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftSpeed([cb](AircraftSpeed p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftSpeed>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftSpeed"),id,cb,[module,id]{module->cancelListenAircraftSpeed(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftSpeed"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftSpeed"),arg0))module->cancelListenAircraftSpeed(arg0);return Undefined(env);}
if(method=="listenAircraftPayloadsCameraLiveviewWorldRegion"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftPayloadsCameraLiveviewWorldRegion([cb](AircraftPayloadsCameraLiveviewWorldRegion p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftPayloadsCameraLiveviewWorldRegion>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsCameraLiveviewWorldRegion"),id,cb,[module,id]{module->cancelListenAircraftPayloadsCameraLiveviewWorldRegion(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftPayloadsCameraLiveviewWorldRegion"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsCameraLiveviewWorldRegion"),arg0))module->cancelListenAircraftPayloadsCameraLiveviewWorldRegion(arg0);return Undefined(env);}
if(method=="listenAircraftPayloadsGimbalAttitude"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftPayloadsGimbalAttitude([cb](AircraftPayloadsGimbalAttitude p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftPayloadsGimbalAttitude>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsGimbalAttitude"),id,cb,[module,id]{module->cancelListenAircraftPayloadsGimbalAttitude(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftPayloadsGimbalAttitude"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsGimbalAttitude"),arg0))module->cancelListenAircraftPayloadsGimbalAttitude(arg0);return Undefined(env);}
if(method=="listenAircraftPayloadsList"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftPayloadsList([cb](AircraftPayloadsList p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftPayloadsList>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsList"),id,cb,[module,id]{module->cancelListenAircraftPayloadsList(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftPayloadsList"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsList"),arg0))module->cancelListenAircraftPayloadsList(arg0);return Undefined(env);}
if(method=="listenControlRightsCloudControlStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenControlRightsCloudControlStatus([cb](ControlRightsCloudControlStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ControlRightsCloudControlStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenControlRightsCloudControlStatus"),id,cb,[module,id]{module->cancelListenControlRightsCloudControlStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenControlRightsCloudControlStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenControlRightsCloudControlStatus"),arg0))module->cancelListenControlRightsCloudControlStatus(arg0);return Undefined(env);}
if(method=="listenControlRightsDeviceControlStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenControlRightsDeviceControlStatus([cb](ControlRightsDeviceControlStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ControlRightsDeviceControlStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenControlRightsDeviceControlStatus"),id,cb,[module,id]{module->cancelListenControlRightsDeviceControlStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenControlRightsDeviceControlStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenControlRightsDeviceControlStatus"),arg0))module->cancelListenControlRightsDeviceControlStatus(arg0);return Undefined(env);}
if(method=="listenFlightTasksMediaFileDisplayAvailable"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenFlightTasksMediaFileDisplayAvailable([cb](FlightTasksMediaFileDisplayAvailable p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightTasksMediaFileDisplayAvailable>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenFlightTasksMediaFileDisplayAvailable"),id,cb,[module,id]{module->cancelListenFlightTasksMediaFileDisplayAvailable(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenFlightTasksMediaFileDisplayAvailable"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenFlightTasksMediaFileDisplayAvailable"),arg0))module->cancelListenFlightTasksMediaFileDisplayAvailable(arg0);return Undefined(env);}
if(method=="listenAircraftPayloadsOsdInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftPayloadsOsdInfo([cb](AircraftPayloadsOsdInfoList p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftPayloadsOsdInfoList>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsOsdInfo"),id,cb,[module,id]{module->cancelListenAircraftPayloadsOsdInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftPayloadsOsdInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsOsdInfo"),arg0))module->cancelListenAircraftPayloadsOsdInfo(arg0);return Undefined(env);}
if(method=="listenDroneModeCodeReason"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneModeCodeReason([cb](DroneModeCodeReason p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneModeCodeReason>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneModeCodeReason"),id,cb,[module,id]{module->cancelListenDroneModeCodeReason(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneModeCodeReason"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneModeCodeReason"),arg0))module->cancelListenDroneModeCodeReason(arg0);return Undefined(env);}
if(method=="listenDroneDongleInfos"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneDongleInfos([cb](DroneDongleInfos p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneDongleInfos>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneDongleInfos"),id,cb,[module,id]{module->cancelListenDroneDongleInfos(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneDongleInfos"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneDongleInfos"),arg0))module->cancelListenDroneDongleInfos(arg0);return Undefined(env);}
if(method=="listenDroneFlysafeDatabaseVersion"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneFlysafeDatabaseVersion([cb](DroneFlysafeDatabaseVersion p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneFlysafeDatabaseVersion>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneFlysafeDatabaseVersion"),id,cb,[module,id]{module->cancelListenDroneFlysafeDatabaseVersion(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneFlysafeDatabaseVersion"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneFlysafeDatabaseVersion"),arg0))module->cancelListenDroneFlysafeDatabaseVersion(arg0);return Undefined(env);}
if(method=="listenDroneWpmzVersion"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneWpmzVersion([cb](DroneWpmzVersion p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneWpmzVersion>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneWpmzVersion"),id,cb,[module,id]{module->cancelListenDroneWpmzVersion(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneWpmzVersion"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneWpmzVersion"),arg0))module->cancelListenDroneWpmzVersion(arg0);return Undefined(env);}
if(method=="listenAircraftGear"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftGear([cb](AircraftGear p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftGear>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftGear"),id,cb,[module,id]{module->cancelListenAircraftGear(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftGear"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftGear"),arg0))module->cancelListenAircraftGear(arg0);return Undefined(env);}
if(method=="listenAircraftHomeDistance"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftHomeDistance([cb](AircraftHomeDistance p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftHomeDistance>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftHomeDistance"),id,cb,[module,id]{module->cancelListenAircraftHomeDistance(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftHomeDistance"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftHomeDistance"),arg0))module->cancelListenAircraftHomeDistance(arg0);return Undefined(env);}
if(method=="listenAircraftPositionState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftPositionState([cb](AircraftPositionState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftPositionState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftPositionState"),id,cb,[module,id]{module->cancelListenAircraftPositionState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftPositionState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftPositionState"),arg0))module->cancelListenAircraftPositionState(arg0);return Undefined(env);}
if(method=="listenAircraftControlSource"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftControlSource([cb](AircraftControlSource p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftControlSource>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftControlSource"),id,cb,[module,id]{module->cancelListenAircraftControlSource(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftControlSource"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftControlSource"),arg0))module->cancelListenAircraftControlSource(arg0);return Undefined(env);}
if(method=="listenAircraftLimitsInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftLimitsInfo([cb](AircraftLimitsInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftLimitsInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftLimitsInfo"),id,cb,[module,id]{module->cancelListenAircraftLimitsInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftLimitsInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftLimitsInfo"),arg0))module->cancelListenAircraftLimitsInfo(arg0);return Undefined(env);}
if(method=="listenAircraftBatteryWarningThresholds"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftBatteryWarningThresholds([cb](AircraftBatteryWarningThresholds p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftBatteryWarningThresholds>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftBatteryWarningThresholds"),id,cb,[module,id]{module->cancelListenAircraftBatteryWarningThresholds(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftBatteryWarningThresholds"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftBatteryWarningThresholds"),arg0))module->cancelListenAircraftBatteryWarningThresholds(arg0);return Undefined(env);}
if(method=="listenAircraftFirmwareStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftFirmwareStatus([cb](AircraftFirmwareStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftFirmwareStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftFirmwareStatus"),id,cb,[module,id]{module->cancelListenAircraftFirmwareStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftFirmwareStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftFirmwareStatus"),arg0))module->cancelListenAircraftFirmwareStatus(arg0);return Undefined(env);}
if(method=="listenAircraftTotalFlightInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftTotalFlightInfo([cb](AircraftTotalFlightInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftTotalFlightInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftTotalFlightInfo"),id,cb,[module,id]{module->cancelListenAircraftTotalFlightInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftTotalFlightInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftTotalFlightInfo"),arg0))module->cancelListenAircraftTotalFlightInfo(arg0);return Undefined(env);}
if(method=="listenAircraftActivationTime"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftActivationTime([cb](AircraftActivationTime p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftActivationTime>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftActivationTime"),id,cb,[module,id]{module->cancelListenAircraftActivationTime(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftActivationTime"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftActivationTime"),arg0))module->cancelListenAircraftActivationTime(arg0);return Undefined(env);}
if(method=="listenAircraftMaintainStatusInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftMaintainStatusInfo([cb](AircraftMaintainStatusInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftMaintainStatusInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftMaintainStatusInfo"),id,cb,[module,id]{module->cancelListenAircraftMaintainStatusInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftMaintainStatusInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftMaintainStatusInfo"),arg0))module->cancelListenAircraftMaintainStatusInfo(arg0);return Undefined(env);}
if(method=="listenAircraftNightLightsState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftNightLightsState([cb](AircraftNightLightsState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftNightLightsState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftNightLightsState"),id,cb,[module,id]{module->cancelListenAircraftNightLightsState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftNightLightsState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftNightLightsState"),arg0))module->cancelListenAircraftNightLightsState(arg0);return Undefined(env);}
if(method=="listenAircraftObstacleAvoidanceState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftObstacleAvoidanceState([cb](AircraftObstacleAvoidanceState p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftObstacleAvoidanceState>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftObstacleAvoidanceState"),id,cb,[module,id]{module->cancelListenAircraftObstacleAvoidanceState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftObstacleAvoidanceState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftObstacleAvoidanceState"),arg0))module->cancelListenAircraftObstacleAvoidanceState(arg0);return Undefined(env);}
if(method=="listenAircraftStorageInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftStorageInfo([cb](AircraftStorageInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftStorageInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftStorageInfo"),id,cb,[module,id]{module->cancelListenAircraftStorageInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftStorageInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftStorageInfo"),arg0))module->cancelListenAircraftStorageInfo(arg0);return Undefined(env);}
if(method=="listenAircraftTrackId"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftTrackId([cb](AircraftTrackId p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftTrackId>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftTrackId"),id,cb,[module,id]{module->cancelListenAircraftTrackId(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftTrackId"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftTrackId"),arg0))module->cancelListenAircraftTrackId(arg0);return Undefined(env);}
if(method=="listenAircraftComplianceInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftComplianceInfo([cb](AircraftComplianceInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftComplianceInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftComplianceInfo"),id,cb,[module,id]{module->cancelListenAircraftComplianceInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftComplianceInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftComplianceInfo"),arg0))module->cancelListenAircraftComplianceInfo(arg0);return Undefined(env);}
if(method=="listenAircraftPayloadsCamerasList"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftPayloadsCamerasList([cb](AircraftPayloadsCamerasList p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftPayloadsCamerasList>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsCamerasList"),id,cb,[module,id]{module->cancelListenAircraftPayloadsCamerasList(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftPayloadsCamerasList"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftPayloadsCamerasList"),arg0))module->cancelListenAircraftPayloadsCamerasList(arg0);return Undefined(env);}
if(method=="listenAircraftRcLostAction"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftRcLostAction([cb](AircraftRcLostAction p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftRcLostAction>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftRcLostAction"),id,cb,[module,id]{module->cancelListenAircraftRcLostAction(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftRcLostAction"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftRcLostAction"),arg0))module->cancelListenAircraftRcLostAction(arg0);return Undefined(env);}
if(method=="listenAircraftRthInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftRthInfo([cb](AircraftRthInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftRthInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftRthInfo"),id,cb,[module,id]{module->cancelListenAircraftRthInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftRthInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftRthInfo"),arg0))module->cancelListenAircraftRthInfo(arg0);return Undefined(env);}
if(method=="listenAircraftHomeGeographicalInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftHomeGeographicalInfo([cb](AircraftHomeGeographicalInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftHomeGeographicalInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftHomeGeographicalInfo"),id,cb,[module,id]{module->cancelListenAircraftHomeGeographicalInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftHomeGeographicalInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftHomeGeographicalInfo"),arg0))module->cancelListenAircraftHomeGeographicalInfo(arg0);return Undefined(env);}
if(method=="listenAircraftCurrentRthMode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAircraftCurrentRthMode([cb](AircraftCurrentRthMode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AircraftCurrentRthMode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAircraftCurrentRthMode"),id,cb,[module,id]{module->cancelListenAircraftCurrentRthMode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAircraftCurrentRthMode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAircraftCurrentRthMode"),arg0))module->cancelListenAircraftCurrentRthMode(arg0);return Undefined(env);}
if(method=="listenHsiInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenHsiInfo([cb](HsiInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<HsiInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenHsiInfo"),id,cb,[module,id]{module->cancelListenHsiInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenHsiInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenHsiInfo"),arg0))module->cancelListenHsiInfo(arg0);return Undefined(env);} }
if(type=="ElementModule") { auto module=UnwrapGenerated<IElementModule>(env,handle,type); if(method=="createElement"){ RequireLength(env,values,2);
auto arg0=Convert<CreateElementParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createElement(arg0,[cb](FlightHubError p0,CreateElementResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CreateElementResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateElement"){ RequireLength(env,values,2);
auto arg0=Convert<UpdateElementParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->updateElement(arg0,[cb](FlightHubError p0,UpdateElementResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UpdateElementResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listElementHierarchy"){ RequireLength(env,values,2);
auto arg0=Convert<ListElementHierarchyParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->listElementHierarchy(arg0,[cb](FlightHubError p0,ListElementHierarchyResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ListElementHierarchyResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setElementVisibility"){ RequireLength(env,values,2);
auto arg0=Convert<SetElementVisibilityParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setElementVisibility(arg0,[cb](FlightHubError p0,SetElementVisibilityResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetElementVisibilityResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteElement"){ RequireLength(env,values,2);
auto arg0=Convert<DeleteElementParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteElement(arg0,[cb](FlightHubError p0,DeleteElementResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeleteElementResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenElementCreate"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenElementCreate([cb](ElementCreateMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ElementCreateMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenElementCreate"),id,cb,[module,id]{module->cancelListenElementCreate(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenElementCreate"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenElementCreate"),arg0))module->cancelListenElementCreate(arg0);return Undefined(env);}
if(method=="listenElementUpdate"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenElementUpdate([cb](ElementUpdateMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ElementUpdateMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenElementUpdate"),id,cb,[module,id]{module->cancelListenElementUpdate(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenElementUpdate"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenElementUpdate"),arg0))module->cancelListenElementUpdate(arg0);return Undefined(env);}
if(method=="listenElementDelete"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenElementDelete([cb](ElementDeleteMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ElementDeleteMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenElementDelete"),id,cb,[module,id]{module->cancelListenElementDelete(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenElementDelete"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenElementDelete"),arg0))module->cancelListenElementDelete(arg0);return Undefined(env);} }
if(type=="FirmwareManageModule") { auto module=UnwrapGenerated<IFirmwareManageModule>(env,handle,type); if(method=="getLatestFirmwareReleaseNote"){ RequireLength(env,values,3);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->getLatestFirmwareReleaseNote(arg0,arg1,[cb](FlightHubError p0,FirmwareReleaseNoteListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FirmwareReleaseNoteListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="invokeFirmwareUpgrade"){ RequireLength(env,values,2);
auto arg0=Convert<FirmwareUpgradeParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->invokeFirmwareUpgrade(arg0,[cb](FlightHubError p0,FirmwareUpgradeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FirmwareUpgradeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="queryFirmwareUpgradeProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->queryFirmwareUpgradeProgress(arg0,[cb](FlightHubError p0,FirmwareUpgradeProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FirmwareUpgradeProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="uploadFirmwareFile"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->uploadFirmwareFile(arg0,[cb](FlightHubError p0,UploadFileResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UploadFileResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="releaseFirmware"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->releaseFirmware(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="unReleaseFirmware"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->unReleaseFirmware(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteFirmware"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteFirmware(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="queryFirmwareList"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->queryFirmwareList(arg0,arg1,[cb](FlightHubError p0,FirmwareListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FirmwareListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="queryFirmwareCompatibilityConfig"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->queryFirmwareCompatibilityConfig([cb](FlightHubError p0,FirmwareCompatibilityConfigResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FirmwareCompatibilityConfigResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="checkFirmwareStatus"){ RequireLength(env,values,3);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto arg1=Convert<std::vector<std::string>>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->checkFirmwareStatus(arg0,arg1,[cb](FlightHubError p0,FirmwareStatusListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FirmwareStatusListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="submitFirmwareInfo"){ RequireLength(env,values,2);
auto arg0=Convert<FirmwareInfoParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->submitFirmwareInfo(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDeviceOtaProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDeviceOtaProgress(arg0,[cb](DeviceOtaProgress p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DeviceOtaProgress>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDeviceOtaProgress"),id,cb,[module,id]{module->cancelListenDeviceOtaProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDeviceOtaProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDeviceOtaProgress"),arg0))module->cancelListenDeviceOtaProgress(arg0);return Undefined(env);} }
if(type=="FlashLedModule") { auto module=UnwrapGenerated<IFlashLedModule>(env,handle,type); if(method=="getFlashLedConfigList"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getFlashLedConfigList([cb](FlightHubError p0,FlashLedConfigList p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlashLedConfigList>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createFlashLedConfig"){ RequireLength(env,values,2);
auto arg0=Convert<FlashLedConfigParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createFlashLedConfig(arg0,[cb](FlightHubError p0,FlashLedConfig p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlashLedConfig>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateFlashLedConfig"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<FlashLedConfigParams>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->updateFlashLedConfig(arg0,arg1,[cb](FlightHubError p0,FlashLedConfig p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlashLedConfig>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteFlashLedConfig"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteFlashLedConfig(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="FlightControlModule") { auto module=UnwrapGenerated<IFlightControlModule>(env,handle,type); if(method=="drcEmergencyStop"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->drcEmergencyStop([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcEmergencyLanding"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->drcEmergencyLanding([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcForceLanding"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->drcForceLanding([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="returnHome"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->returnHome([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="returnHomeCancel"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->returnHomeCancel([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSendStickControl"){ RequireLength(env,values,1);
auto arg0=Convert<StickControlData>::from(env,Element(env,values,0));
module->drcSendStickControl(arg0);return Undefined(env);}
if(method=="drcSetDroneHover"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetDroneHover(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetFollowMouseParameter"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetFollowMouseParameter(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetNightLightsState"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetNightLightsState(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetStealthState"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetStealthState(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcOpenParachute"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcOpenParachute(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcSetFlashLed"){ RequireLength(env,values,2);
auto arg0=Convert<FlashLedParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcSetFlashLed(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcFlashLed"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcFlashLed([cb](FlashLedStateInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlashLedStateInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcFlashLed"),id,cb,[module,id]{module->cancelListenDrcFlashLed(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcFlashLed"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcFlashLed"),arg0))module->cancelListenDrcFlashLed(arg0);return Undefined(env);}
if(method=="drcCameraLookAt"){ RequireLength(env,values,2);
auto arg0=Convert<CameraLookAtParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->drcCameraLookAt(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcOsdInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcOsdInfo([cb](DrcOsdInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DrcOsdInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcOsdInfo"),id,cb,[module,id]{module->cancelListenDrcOsdInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcOsdInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcOsdInfo"),arg0))module->cancelListenDrcOsdInfo(arg0);return Undefined(env);}
if(method=="listenDrcBatteriesInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcBatteriesInfo([cb](DrcBatteriesInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DrcBatteriesInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcBatteriesInfo"),id,cb,[module,id]{module->cancelListenDrcBatteriesInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcBatteriesInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcBatteriesInfo"),arg0))module->cancelListenDrcBatteriesInfo(arg0);return Undefined(env);}
if(method=="listenDrcParachuteInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcParachuteInfo([cb](DrcParachuteInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DrcParachuteInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcParachuteInfo"),id,cb,[module,id]{module->cancelListenDrcParachuteInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcParachuteInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcParachuteInfo"),arg0))module->cancelListenDrcParachuteInfo(arg0);return Undefined(env);} }
if(type=="FlightSettingsModule") { auto module=UnwrapGenerated<IFlightSettingsModule>(env,handle,type); if(method=="setFlightSmartPlanMode"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setFlightSmartPlanMode(arg0,arg1,[cb](FlightHubError p0,FlightSmartPlanModeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlightSmartPlanModeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setOutOfControlAction"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setOutOfControlAction(arg0,arg1,[cb](FlightHubError p0,FlightOutOfControlActionResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlightOutOfControlActionResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setFlightTaskHeight"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setFlightTaskHeight(arg0,arg1,[cb](FlightHubError p0,FlightCommanderHeightResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlightCommanderHeightResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setRthAltitude"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setRthAltitude(arg0,arg1,[cb](FlightHubError p0,FlightRthAltitudeResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlightRthAltitudeResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setAirTransferEnable"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<bool>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->setAirTransferEnable(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="FlightTaskControlModule") { auto module=UnwrapGenerated<IFlightTaskControlModule>(env,handle,type); if(method=="pause"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->pause([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="resume"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->resume([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenWaylineTaskEvent"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenWaylineTaskEvent([cb](WaylineTaskEvent p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<WaylineTaskEvent>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenWaylineTaskEvent"),id,cb,[module,id]{module->cancelListenWaylineTaskEvent(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenWaylineTaskEvent"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenWaylineTaskEvent"),arg0))module->cancelListenWaylineTaskEvent(arg0);return Undefined(env);} }
if(type=="FlightTaskModule") { auto module=UnwrapGenerated<IFlightTaskModule>(env,handle,type); if(method=="getFlightTaskList"){ RequireLength(env,values,2);
auto arg0=Convert<FlightTaskListParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getFlightTaskList(arg0,[cb](FlightHubError p0,FlightTaskListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<FlightTaskListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getCommandTaskList"){ RequireLength(env,values,2);
auto arg0=Convert<GetCommandTaskListParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getCommandTaskList(arg0,[cb](FlightHubError p0,GetCommandTaskListResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetCommandTaskListResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getFlightTaskTrack"){ RequireLength(env,values,2);
auto arg0=Convert<GetFlightTaskTrackParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getFlightTaskTrack(arg0,[cb](FlightHubError p0,GetFlightTaskTrackResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetFlightTaskTrackResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createFlightTask"){ RequireLength(env,values,2);
auto arg0=Convert<CreateTaskReq>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createFlightTask(arg0,[cb](FlightHubError p0,CreateTaskResp p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CreateTaskResp>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getFlightTaskDetail"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getFlightTaskDetail(arg0,[cb](FlightHubError p0,TaskDetail p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TaskDetail>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="editFlightTask"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<EditTaskReq>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->editFlightTask(arg0,arg1,[cb](FlightHubError p0,CreateTaskResp p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CreateTaskResp>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteFlightTask"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteFlightTask(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateFlightTaskStatus"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->updateFlightTaskStatus(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="batchUpdateFlightTaskStatus"){ RequireLength(env,values,2);
auto arg0=Convert<BatchUpdateStatusReq>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->batchUpdateFlightTaskStatus(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDeviceRecommendation"){ RequireLength(env,values,2);
auto arg0=Convert<DeviceRecommendationReq>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDeviceRecommendation(arg0,[cb](FlightHubError p0,DeviceRecommendationResp p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceRecommendationResp>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDeviceTcas"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDeviceTcas(arg0,[cb](FlightHubError p0,GetTCAInfosResp p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetTCAInfosResp>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateDeviceTcas"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->updateDeviceTcas(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="startRoaming"){ RequireLength(env,values,2);
auto arg0=Convert<StartRoamingParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->startRoaming(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setRoamingStationSn"){ RequireLength(env,values,2);
auto arg0=Convert<SetRoamingStationSnParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setRoamingStationSn(arg0,[cb](FlightHubError p0,SetRoamingStationSnResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetRoamingStationSnResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getInFlightTaskTopos"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getInFlightTaskTopos(arg0,[cb](FlightHubError p0,GetInFlightTaskToposResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetInFlightTaskToposResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenTaskTopoChanged"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenTaskTopoChanged([cb](TaskTopoChangedEvent p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<TaskTopoChangedEvent>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenTaskTopoChanged"),id,cb,[module,id]{module->cancelListenTaskTopoChanged(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenTaskTopoChanged"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenTaskTopoChanged"),arg0))module->cancelListenTaskTopoChanged(arg0);return Undefined(env);} }
if(type=="FlightTaskRecordModule") { auto module=UnwrapGenerated<IFlightTaskRecordModule>(env,handle,type); if(method=="exportFlightRecords"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<ExportFlightRecordsRequestParams>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->exportFlightRecords(arg0,arg1,[cb](FlightHubError p0,ExportFlightRecordsResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ExportFlightRecordsResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getExportFlightRecordsProgress"){ RequireLength(env,values,2);
auto arg0=Convert<GetExportFlightRecordsProgressParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getExportFlightRecordsProgress(arg0,[cb](FlightHubError p0,GetExportFlightRecordsProgressResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetExportFlightRecordsProgressResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="FlyToPointModule") { auto module=UnwrapGenerated<IFlyToPointModule>(env,handle,type); if(method=="start"){ RequireLength(env,values,2);
auto arg0=Convert<FlyToPointParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->start(arg0,[cb](FlightHubError p0,std::string p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<std::string>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="drcStop"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->drcStop([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateTargetPoints"){ RequireLength(env,values,2);
auto arg0=Convert<FlyToUpdateTargetPointsParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->updateTargetPoints(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenFlyToTaskEvent"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenFlyToTaskEvent([cb](FlyToTaskEvent p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlyToTaskEvent>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenFlyToTaskEvent"),id,cb,[module,id]{module->cancelListenFlyToTaskEvent(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenFlyToTaskEvent"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenFlyToTaskEvent"),arg0))module->cancelListenFlyToTaskEvent(arg0);return Undefined(env);}
if(method=="subscribeFlyToDroneSelfPlanPath"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeFlyToDroneSelfPlanPath([cb](FlyToDroneSelfPlanPath p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlyToDroneSelfPlanPath>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeFlyToDroneSelfPlanPath"),id,cb,[module,id]{module->unsubscribeFlyToDroneSelfPlanPath(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeFlyToDroneSelfPlanPath"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeFlyToDroneSelfPlanPath"),arg0))module->unsubscribeFlyToDroneSelfPlanPath(arg0);return Undefined(env);}
if(method=="subscribeFlyToPointProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeFlyToPointProgress([cb](FlyToPointProgress p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlyToPointProgress>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeFlyToPointProgress"),id,cb,[module,id]{module->unsubscribeFlyToPointProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeFlyToPointProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeFlyToPointProgress"),arg0))module->unsubscribeFlyToPointProgress(arg0);return Undefined(env);} }
if(type=="HMSModule") { auto module=UnwrapGenerated<IHMSModule>(env,handle,type); if(method=="QueryHistoryHMSData"){ RequireLength(env,values,2);
auto arg0=Convert<HistoryHmsDataParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->QueryHistoryHMSData(arg0,[cb](FlightHubError p0,HistoryHmsDataResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<HistoryHmsDataResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="InFlightWaylineModule") { auto module=UnwrapGenerated<IInFlightWaylineModule>(env,handle,type); if(method=="createInFlightWaylineTask"){ RequireLength(env,values,2);
auto arg0=Convert<CreateInFlightWaylineTaskParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createInFlightWaylineTask(arg0,[cb](CreateInFlightWaylineTaskResult p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<CreateInFlightWaylineTaskResult>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="controlInFlightWaylineTask"){ RequireLength(env,values,2);
auto arg0=Convert<InFlightWaylineControlAction>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->controlInFlightWaylineTask(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getActiveInFlightWaylineTask"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getActiveInFlightWaylineTask([cb](ActiveInFlightWaylineTaskInfo p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<ActiveInFlightWaylineTaskInfo>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenInFlightWaylineProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenInFlightWaylineProgress([cb](InFlightWaylineProgress p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<InFlightWaylineProgress>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenInFlightWaylineProgress"),id,cb,[module,id]{module->cancelListenInFlightWaylineProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenInFlightWaylineProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenInFlightWaylineProgress"),arg0))module->cancelListenInFlightWaylineProgress(arg0);return Undefined(env);} }
if(type=="LiveDeviceModule") { auto module=UnwrapGenerated<ILiveDeviceModule>(env,handle,type); if(method=="listenLiveAvailableRange"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenLiveAvailableRange([cb](std::vector<LiveInfo> p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<std::vector<LiveInfo>>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenLiveAvailableRange"),id,cb,[module,id]{module->cancelListenLiveAvailableRange(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenLiveAvailableRange"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenLiveAvailableRange"),arg0))module->cancelListenLiveAvailableRange(arg0);return Undefined(env);}
if(method=="getAudienceCount"){ RequireLength(env,values,2);
auto arg0=Convert<std::optional<AudienceCountGroup>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getAudienceCount(arg0?&*arg0:nullptr,[cb](FlightHubError p0,std::vector<DeviceAudienceCountItem> p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<std::vector<DeviceAudienceCountItem>>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDockLiveStatus"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockLiveStatus([cb](DockLiveStatus p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockLiveStatus>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockLiveStatus"),id,cb,[module,id]{module->cancelListenDockLiveStatus(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockLiveStatus"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockLiveStatus"),arg0))module->cancelListenDockLiveStatus(arg0);return Undefined(env);}
if(method=="listenDockLiveCapacity"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDockLiveCapacity([cb](DockLiveCapacity p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DockLiveCapacity>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDockLiveCapacity"),id,cb,[module,id]{module->cancelListenDockLiveCapacity(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDockLiveCapacity"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDockLiveCapacity"),arg0))module->cancelListenDockLiveCapacity(arg0);return Undefined(env);} }
if(type=="LiveRecordModule") { auto module=UnwrapGenerated<ILiveRecordModule>(env,handle,type); if(method=="startLiveRecord"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->startLiveRecord(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="stopLiveRecord"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->stopLiveRecord([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getDeviceLiveRecords"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getDeviceLiveRecords(arg0,[cb](FlightHubError p0,std::vector<LiveRecordItem> p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<std::vector<LiveRecordItem>>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenRecordState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenRecordState([cb](LiveRecordStateInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<LiveRecordStateInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenRecordState"),id,cb,[module,id]{module->cancelListenRecordState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenRecordState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenRecordState"),arg0))module->cancelListenRecordState(arg0);return Undefined(env);}
if(method=="notifyRecordState"){ RequireLength(env,values,1);
auto arg0=Convert<LiveRecordStateInfo>::from(env,Element(env,values,0));
module->notifyRecordState(arg0);return Undefined(env);} }
if(type=="LiveModule") { auto module=UnwrapGenerated<ILiveModule>(env,handle,type); if(method=="start"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->start([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="startWithURL"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->startWithURL([cb](FlightHubError p0,LiveStreamStartResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LiveStreamStartResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="stop"){ RequireLength(env,values,0);
module->stop();StopGeneratedFor(module.get());return Undefined(env);}
if(method=="stopWithURL"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->stopWithURL([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeLiveStream"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeLiveStream([cb](const std::vector<uint8_t>& data,const FrameInfo& frame) { cb->sendFrame(data,frame,true); }); TrackGenerated(module.get(),ScopedSubscription("subscribeLiveStream"),id,cb,[module,id]{module->unSubscribeLiveStream(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unSubscribeLiveStream"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeLiveStream"),arg0))module->unSubscribeLiveStream(arg0);return Undefined(env);}
if(method=="subscribeAiSeiInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeAiSeiInfo([cb](AiSeiInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AiSeiInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeAiSeiInfo"),id,cb,[module,id]{module->unSubscribeAiSeiInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unSubscribeAiSeiInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeAiSeiInfo"),arg0))module->unSubscribeAiSeiInfo(arg0);return Undefined(env);}
if(method=="subscribeArSeiInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeArSeiInfo([cb](ArSeiInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ArSeiInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeArSeiInfo"),id,cb,[module,id]{module->unSubscribeArSeiInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unSubscribeArSeiInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeArSeiInfo"),arg0))module->unSubscribeArSeiInfo(arg0);return Undefined(env);}
if(method=="subscribeFovSeiInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeFovSeiInfo([cb](FovSeiInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FovSeiInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeFovSeiInfo"),id,cb,[module,id]{module->unSubscribeFovSeiInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unSubscribeFovSeiInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeFovSeiInfo"),arg0))module->unSubscribeFovSeiInfo(arg0);return Undefined(env);}
if(method=="subscribeAssistantSeiInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeAssistantSeiInfo([cb](AssistantSeiInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AssistantSeiInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeAssistantSeiInfo"),id,cb,[module,id]{module->unSubscribeAssistantSeiInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unSubscribeAssistantSeiInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeAssistantSeiInfo"),arg0))module->unSubscribeAssistantSeiInfo(arg0);return Undefined(env);}
if(method=="subscribeEisSeiInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeEisSeiInfo([cb](EisSeiInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<EisSeiInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeEisSeiInfo"),id,cb,[module,id]{module->unSubscribeEisSeiInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unSubscribeEisSeiInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeEisSeiInfo"),arg0))module->unSubscribeEisSeiInfo(arg0);return Undefined(env);}
if(method=="setLiveQuality"){ RequireLength(env,values,2);
auto arg0=Convert<LiveQualitySettingParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setLiveQuality(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="LiveSyncModule") { auto module=UnwrapGenerated<ILiveSyncModule>(env,handle,type); if(method=="createLiveSync"){ RequireLength(env,values,2);
auto arg0=Convert<LiveSyncCreateParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createLiveSync(arg0,[cb](FlightHubError p0,LiveSyncCreateResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LiveSyncCreateResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteLiveSync"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteLiveSync(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateLiveSync"){ RequireLength(env,values,2);
auto arg0=Convert<LiveSyncUpdateParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->updateLiveSync(arg0,[cb](FlightHubError p0,LiveSyncItem p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LiveSyncItem>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getLiveSyncList"){ RequireLength(env,values,2);
auto arg0=Convert<LiveSyncListParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getLiveSyncList(arg0,[cb](FlightHubError p0,LiveSyncListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LiveSyncListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getLiveSyncDevicesV2"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getLiveSyncDevicesV2([cb](FlightHubError p0,LiveSyncDevicesV2Result p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LiveSyncDevicesV2Result>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getLiveSyncSummary"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getLiveSyncSummary([cb](FlightHubError p0,LiveSyncSummaryResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LiveSyncSummaryResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="LogManagementModule") { auto module=UnwrapGenerated<ILogManagementModule>(env,handle,type); if(method=="QueryDeviceLogList"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<std::vector<int>>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->QueryDeviceLogList(arg0,arg1,[cb](FlightHubError p0,DeviceLogListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceLogListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="CreateDeviceLogReport"){ RequireLength(env,values,2);
auto arg0=Convert<CreateDeviceLogReportRequestParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->CreateDeviceLogReport(arg0,[cb](FlightHubError p0,CreateDeviceLogReportResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CreateDeviceLogReportResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="LogReportList"){ RequireLength(env,values,4);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto arg2=Convert<int>::from(env,Element(env,values,2));
auto cb=NewCallback(env,Element(env,values,3),true);
try { module->LogReportList(arg0,arg1,arg2,[cb](FlightHubError p0,LogReportListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<LogReportListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="LogReportOperation"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->LogReportOperation(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="UploadLogAppendFile"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->UploadLogAppendFile(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDeviceFileUploadProgress"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDeviceFileUploadProgress(arg0,[cb](DeviceFileUploadProgress p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DeviceFileUploadProgress>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDeviceFileUploadProgress"),id,cb,[module,id]{module->cancelListenDeviceFileUploadProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDeviceFileUploadProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDeviceFileUploadProgress"),arg0))module->cancelListenDeviceFileUploadProgress(arg0);return Undefined(env);} }
if(type=="MaintenanceManagementModule") { auto module=UnwrapGenerated<IMaintenanceManagementModule>(env,handle,type); if(method=="getRepairConfigs"){ RequireLength(env,values,2);
auto arg0=Convert<GetDeviceRepairConfigParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getRepairConfigs(arg0,[cb](FlightHubError p0,DeviceRepairConfigResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DeviceRepairConfigResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createMaintenanceOrder"){ RequireLength(env,values,2);
auto arg0=Convert<CreateMaintenanceOrderParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createMaintenanceOrder(arg0,[cb](FlightHubError p0,CreateMaintenanceOrderResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CreateMaintenanceOrderResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getMaintenanceOrderDetail"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getMaintenanceOrderDetail(arg0,[cb](FlightHubError p0,MaintenanceOrderDetailResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<MaintenanceOrderDetailResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getMaintenanceOrdersList"){ RequireLength(env,values,2);
auto arg0=Convert<GetMaintenanceOrdersListParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getMaintenanceOrdersList(arg0,[cb](FlightHubError p0,MaintenanceOrdersListResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<MaintenanceOrdersListResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="MediaServiceModule") { auto module=UnwrapGenerated<IMediaServiceModule>(env,handle,type); if(method=="getMediaFilesList"){ RequireLength(env,values,2);
auto arg0=Convert<GetMediaFilesListParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getMediaFilesList(arg0,[cb](FlightHubError p0,GetMediaFilesListResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetMediaFilesListResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteMediaFiles"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<long long>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteMediaFiles(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getMediaFilesDownloadURL" && !IsArray(env,Element(env,values,0))){ RequireLength(env,values,2);
auto arg0=Convert<long long>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getMediaFilesDownloadURL(arg0,[cb](FlightHubError p0,GetMediaFilesDownloadUrlResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetMediaFilesDownloadUrlResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getMediaFilesDownloadURL" && IsArray(env,Element(env,values,0))){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getMediaFilesDownloadURL(arg0,[cb](FlightHubError p0,GetMediaFilesDownloadUrlListResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetMediaFilesDownloadUrlListResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenMediaFilePostProcessMessage"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenMediaFilePostProcessMessage(arg0,[cb](MediaFilePostProcess p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<MediaFilePostProcess>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenMediaFilePostProcessMessage"),id,cb,[module,id]{module->cancelListenMediaFilePostProcessMessage(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenMediaFilePostProcessMessage"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenMediaFilePostProcessMessage"),arg0))module->cancelListenMediaFilePostProcessMessage(arg0);return Undefined(env);}
if(method=="listenMediaFileDeviceUploadMessage"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenMediaFileDeviceUploadMessage(arg0,[cb](MediaFileDeviceUpload p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<MediaFileDeviceUpload>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenMediaFileDeviceUploadMessage"),id,cb,[module,id]{module->cancelListenMediaFileDeviceUploadMessage(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenMediaFileDeviceUploadMessage"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenMediaFileDeviceUploadMessage"),arg0))module->cancelListenMediaFileDeviceUploadMessage(arg0);return Undefined(env);}
if(method=="getMediaUploadSts"){ RequireLength(env,values,2);
auto arg0=Convert<GetMediaUploadStsParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getMediaUploadSts(arg0,[cb](FlightHubError p0,GetMediaUploadStsResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetMediaUploadStsResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="mediaUploadCallback"){ RequireLength(env,values,2);
auto arg0=Convert<MediaUploadCallbackParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->mediaUploadCallback(arg0,[cb](FlightHubError p0,MediaUploadCallbackResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<MediaUploadCallbackResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="uploadGeoMediaFile"){ RequireLength(env,values,2);
auto arg0=Convert<UploadGeoMediaFileParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->uploadGeoMediaFile(arg0,[cb](FlightHubError p0,UploadGeoMediaFileResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UploadGeoMediaFileResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getMediaFileDetailById"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getMediaFileDetailById(arg0,[cb](FlightHubError p0,GetMediaFileDetailByIdResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetMediaFileDetailByIdResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="NetworkTestModule") { auto module=UnwrapGenerated<INetworkTestModule>(env,handle,type); if(method=="startNetworkTest"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->startNetworkTest([cb](FlightHubError p0,NetworkTestProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<NetworkTestProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="stopNetworkTest"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->stopNetworkTest([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getNetworkTestProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getNetworkTestProgress([cb](FlightHubError p0,NetworkTestProgressResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<NetworkTestProgressResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeNetworkTestProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeNetworkTestProgress([cb](NetworkTestProgressResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<NetworkTestProgressResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeNetworkTestProgress"),id,cb,[module,id]{module->unsubscribeNetworkTestProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeNetworkTestProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeNetworkTestProgress"),arg0))module->unsubscribeNetworkTestProgress(arg0);return Undefined(env);} }
if(type=="OnboardAiModule") { auto module=UnwrapGenerated<IOnboardAiModule>(env,handle,type); if(method=="listenAIDataInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenAIDataInfo([cb](AiDataInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AiDataInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenAIDataInfo"),id,cb,[module,id]{module->cancelListenAIDataInfo(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenAIDataInfo"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenAIDataInfo"),arg0))module->cancelListenAIDataInfo(arg0);return Undefined(env);}
if(method=="AIIdentifySet"){ RequireLength(env,values,2);
auto arg0=Convert<AiIdentifySetParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->AIIdentifySet(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="AIIdentifyFilterSet"){ RequireLength(env,values,2);
auto arg0=Convert<AiIdentifyFilterSetParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->AIIdentifyFilterSet(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="AIIdentifyScoreSet"){ RequireLength(env,values,2);
auto arg0=Convert<AiIdentifyScoreSetParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->AIIdentifyScoreSet(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="AIIdentifyScoreModeSet"){ RequireLength(env,values,2);
auto arg0=Convert<AiIdentifyScoreModeSetParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->AIIdentifyScoreModeSet(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="AIIdentifyScoreReset"){ RequireLength(env,values,2);
auto arg0=Convert<AiIdentifyScoreResetParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->AIIdentifyScoreReset(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="AIModelSelect"){ RequireLength(env,values,2);
auto arg0=Convert<AiModelSelectParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->AIModelSelect(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAISpotlightZoomSet"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcAISpotlightZoomSet(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAISpotlightZoomSelect"){ RequireLength(env,values,2);
auto arg0=Convert<AiSpotlightZoomSelectParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcAISpotlightZoomSelect(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAISpotlightZoomConfirm"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->DrcAISpotlightZoomConfirm([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAISpotlightZoomStop"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->DrcAISpotlightZoomStop([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAISpotlightZoomTrack"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcAISpotlightZoomTrack(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAIAlarmStart"){ RequireLength(env,values,2);
auto arg0=Convert<AiAlarmStartParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcAIAlarmStart(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAIAlarmStop"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->DrcAIAlarmStop([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcAIModelsConfig"){ RequireLength(env,values,2);
auto arg0=Convert<AiModelsConfigParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcAIModelsConfig(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcAIAlarmState"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcAIAlarmState([cb](AiAlarmStateInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<AiAlarmStateInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcAIAlarmState"),id,cb,[module,id]{module->cancelListenDrcAIAlarmState(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcAIAlarmState"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcAIAlarmState"),arg0))module->cancelListenDrcAIAlarmState(arg0);return Undefined(env);} }
if(type=="PoiModule") { auto module=UnwrapGenerated<IPoiModule>(env,handle,type); if(method=="enter"){ RequireLength(env,values,2);
auto arg0=Convert<POIEnterParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->enter(arg0,[cb](FlightHubError p0,std::string p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<std::string>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="exit"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->exit([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateSpeed"){ RequireLength(env,values,2);
auto arg0=Convert<double>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->updateSpeed(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getTask"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getTask([cb](FlightHubError p0,POITaskInfo p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<POITaskInfo>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenPoiTaskEvent"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenPoiTaskEvent([cb](PoiTaskEvent p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PoiTaskEvent>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenPoiTaskEvent"),id,cb,[module,id]{module->cancelListenPoiTaskEvent(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenPoiTaskEvent"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenPoiTaskEvent"),arg0))module->cancelListenPoiTaskEvent(arg0);return Undefined(env);}
if(method=="listenFlightPoiProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenFlightPoiProgress([cb](FlightPoiProgress p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightPoiProgress>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenFlightPoiProgress"),id,cb,[module,id]{module->cancelListenFlightPoiProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenFlightPoiProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenFlightPoiProgress"),arg0))module->cancelListenFlightPoiProgress(arg0);return Undefined(env);} }
if(type=="PsdkControlModule") { auto module=UnwrapGenerated<IPsdkControlModule>(env,handle,type); if(method=="listenDrcPsdkDeviceList"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDrcPsdkDeviceList([cb](PsdkDeviceList p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkDeviceList>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcPsdkDeviceList"),id,cb,[module,id]{module->cancelListenDrcPsdkDeviceList(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcPsdkDeviceList"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcPsdkDeviceList"),arg0))module->cancelListenDrcPsdkDeviceList(arg0);return Undefined(env);}
if(method=="listenDrcPsdkStateSummaryInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcPsdkStateSummaryInfo(arg0,[cb](PsdkStateSummaryInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkStateSummaryInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcPsdkStateSummaryInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcPsdkStateSummaryInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcPsdkStateSummaryInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcPsdkStateSummaryInfo",arg0),arg1))module->cancelListenDrcPsdkStateSummaryInfo(arg0,arg1);return Undefined(env);}
if(method=="listenDrcPsdkStateSpeakerInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcPsdkStateSpeakerInfo(arg0,[cb](PsdkStateSpeakerInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkStateSpeakerInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcPsdkStateSpeakerInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcPsdkStateSpeakerInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcPsdkStateSpeakerInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcPsdkStateSpeakerInfo",arg0),arg1))module->cancelListenDrcPsdkStateSpeakerInfo(arg0,arg1);return Undefined(env);}
if(method=="listenDrcPsdkStateSearchlightInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcPsdkStateSearchlightInfo(arg0,[cb](PsdkStateSearchlightInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkStateSearchlightInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcPsdkStateSearchlightInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcPsdkStateSearchlightInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcPsdkStateSearchlightInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcPsdkStateSearchlightInfo",arg0),arg1))module->cancelListenDrcPsdkStateSearchlightInfo(arg0,arg1);return Undefined(env);}
if(method=="DrcSearchlightModeSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSearchlightModeSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSearchlightBrightnessSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSearchlightBrightnessSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSearchlightCalibration"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcSearchlightCalibration(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSearchlightFineTuningSet"){ RequireLength(env,values,5);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto arg2=Convert<double>::from(env,Element(env,values,2));
auto arg3=Convert<bool>::from(env,Element(env,values,3));
auto cb=NewCallback(env,Element(env,values,4),true);
try { module->DrcSearchlightFineTuningSet(arg0,arg1,arg2,arg3,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSearchlightWideFieldModeSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSearchlightWideFieldModeSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSearchlightLightGimbalControlSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSearchlightLightGimbalControlSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSearchlightTypeSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSearchlightTypeSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDrcPsdkSpeakerPlayProgressInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcPsdkSpeakerPlayProgressInfo(arg0,[cb](PsdkSpeakerPlayProgressInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkSpeakerPlayProgressInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcPsdkSpeakerPlayProgressInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcPsdkSpeakerPlayProgressInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcPsdkSpeakerPlayProgressInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcPsdkSpeakerPlayProgressInfo",arg0),arg1))module->cancelListenDrcPsdkSpeakerPlayProgressInfo(arg0,arg1);return Undefined(env);}
if(method=="listenDrcPsdkFloatingWindowTextInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDrcPsdkFloatingWindowTextInfo(arg0,[cb](PsdkFloatingWindowTextInfo p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkFloatingWindowTextInfo>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDrcPsdkFloatingWindowTextInfo",arg0),id,cb,[module,id,arg0]{module->cancelListenDrcPsdkFloatingWindowTextInfo(arg0,id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDrcPsdkFloatingWindowTextInfo"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDrcPsdkFloatingWindowTextInfo",arg0),arg1))module->cancelListenDrcPsdkFloatingWindowTextInfo(arg0,arg1);return Undefined(env);}
if(method=="DrcSpeakerAudioPlayStart"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<PsdkSpeakerAudioPlayInfo>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSpeakerAudioPlayStart(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerTTSPlayStart"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<PsdkSpeakerTTSPlayInfo>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSpeakerTTSPlayStart(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerRealTimeStart"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcSpeakerRealTimeStart(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerRealTimeStop"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcSpeakerRealTimeStop(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerReplay"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcSpeakerReplay(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerPlayStop"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->DrcSpeakerPlayStop(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerPlayVolumeSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSpeakerPlayVolumeSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerPlayModeSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSpeakerPlayModeSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcSpeakerTTSSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<PsdkSpeakerTTSconfig>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcSpeakerTTSSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcWidgetValueSet"){ RequireLength(env,values,4);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto arg2=Convert<int>::from(env,Element(env,values,2));
auto cb=NewCallback(env,Element(env,values,3),true);
try { module->DrcWidgetValueSet(arg0,arg1,arg2,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="DrcWidgetInputBoxTextSet"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->DrcWidgetInputBoxTextSet(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenPsdkSpeakerAudioPlayStartProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenPsdkSpeakerAudioPlayStartProgress([cb](PsdkSpeakerPlayStartProgress p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkSpeakerPlayStartProgress>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenPsdkSpeakerAudioPlayStartProgress"),id,cb,[module,id]{module->cancelListenPsdkSpeakerAudioPlayStartProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenPsdkSpeakerAudioPlayStartProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenPsdkSpeakerAudioPlayStartProgress"),arg0))module->cancelListenPsdkSpeakerAudioPlayStartProgress(arg0);return Undefined(env);}
if(method=="listenPsdkSpeakerTtsPlayStartProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenPsdkSpeakerTtsPlayStartProgress([cb](PsdkSpeakerPlayStartProgress p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<PsdkSpeakerPlayStartProgress>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenPsdkSpeakerTtsPlayStartProgress"),id,cb,[module,id]{module->cancelListenPsdkSpeakerTtsPlayStartProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenPsdkSpeakerTtsPlayStartProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenPsdkSpeakerTtsPlayStartProgress"),arg0))module->cancelListenPsdkSpeakerTtsPlayStartProgress(arg0);return Undefined(env);}
if(method=="listenDronePsdkUiResource"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDronePsdkUiResource([cb](DronePsdkUiResource p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DronePsdkUiResource>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDronePsdkUiResource"),id,cb,[module,id]{module->cancelListenDronePsdkUiResource(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDronePsdkUiResource"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDronePsdkUiResource"),arg0))module->cancelListenDronePsdkUiResource(arg0);return Undefined(env);} }
if(type=="PsdkResourceModule") { auto module=UnwrapGenerated<IPsdkResourceModule>(env,handle,type); if(method=="getPsdkSpeakerResourceList"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getPsdkSpeakerResourceList([cb](FlightHubError p0,PsdkSpeakerResourceList p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<PsdkSpeakerResourceList>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createPsdkSpeakerResource"){ RequireLength(env,values,2);
auto arg0=Convert<CreatePsdkSpeakerResourceParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createPsdkSpeakerResource(arg0,[cb](FlightHubError p0,PsdkSpeakerResource p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<PsdkSpeakerResource>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="editPsdkSpeakerResource"){ RequireLength(env,values,2);
auto arg0=Convert<EditPsdkSpeakerResourceParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->editPsdkSpeakerResource(arg0,[cb](FlightHubError p0,PsdkSpeakerResource p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<PsdkSpeakerResource>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deletePsdkSpeakerResource"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deletePsdkSpeakerResource(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getSTS"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getSTS([cb](FlightHubError p0,STSInfo p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<STSInfo>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getPsdkWidgetResources"){ RequireLength(env,values,2);
auto arg0=Convert<GetPsdkWidgetResourceParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getPsdkWidgetResources(arg0,[cb](FlightHubError p0,PsdkWidgetResourceList p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<PsdkWidgetResourceList>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="uploadSpeakerAudioFile"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<STSInfo>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->uploadSpeakerAudioFile(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="PullStreamModule") { auto module=UnwrapGenerated<IPullStreamModule>(env,handle,type); if(method=="start"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->start(arg0,[cb](FlightHubSdkErrorCode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubSdkErrorCode>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="stop"){ RequireLength(env,values,0);
module->stop();StopGeneratedFor(module.get());return Undefined(env);}
if(method=="subscribeStream"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeStream([cb](const std::vector<uint8_t>& data,const FrameInfo& frame) { cb->sendFrame(data,frame,false); }); TrackGenerated(module.get(),ScopedSubscription("subscribeStream"),id,cb,[module,id]{module->unSubscribeStream(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unSubscribeStream"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeStream"),arg0))module->unSubscribeStream(arg0);return Undefined(env);}
if(method=="setErrorCallback"){ RequireLength(env,values,1);
CancelGenerated(module.get(),"setErrorCallback",0);auto cb=NewCallback(env,Element(env,values,0),false);
try { module->setErrorCallback([cb](int p0,std::string p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<int>::to(e,p0),Convert<std::string>::to(e,p1)};}); });TrackGenerated(module.get(),"setErrorCallback",0,cb,[module]{module->setErrorCallback({});});return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="isStreaming"){ RequireLength(env,values,0);
return Convert<bool>::to(env,module->isStreaming());}
if(method=="getStreamInfo"){ RequireLength(env,values,0);
return Convert<std::string>::to(env,module->getStreamInfo());} }
if(type=="Relay") { auto module=UnwrapGenerated<IRelay>(env,handle,type); if(method=="getSn"){ RequireLength(env,values,0);
return Convert<std::string>::to(env,module->getSn());}
if(method=="getRelayControlModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"RelayControlModule",module->getRelayControlModule());}
if(method=="getRtkCalibrationModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"RtkCalibrationModule",module->getRtkCalibrationModule());} }
if(type=="RelayControlModule") { auto module=UnwrapGenerated<IRelayControlModule>(env,handle,type); if(method=="setRelayBroadcastHide"){ RequireLength(env,values,2);
auto arg0=Convert<bool>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setRelayBroadcastHide(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setRelaySSID"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setRelaySSID(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setRelayPassword"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setRelayPassword(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setRelaySearchMode"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setRelaySearchMode(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setRelayOccupiedStatus"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setRelayOccupiedStatus(arg0,[cb](FlightHubError p0,SetRelayOccupiedStatusResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SetRelayOccupiedStatusResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="relayReboot"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->relayReboot([cb](FlightHubError p0,RelayRebootResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<RelayRebootResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="relayDisconnect"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->relayDisconnect([cb](FlightHubError p0,RelayDisconnectResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<RelayDisconnectResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="RemoteController") { auto module=UnwrapGenerated<IRemoteController>(env,handle,type); if(method=="getSn"){ RequireLength(env,values,0);
return Convert<std::string>::to(env,module->getSn());} }
if(type=="RtkCalibrationModule") { auto module=UnwrapGenerated<IRtkCalibrationModule>(env,handle,type); if(method=="calibrationByNetwork"){ RequireLength(env,values,2);
auto arg0=Convert<NetworkRtkCalibrationParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->calibrationByNetwork(arg0,[cb](FlightHubError p0,RtkCalibrationResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<RtkCalibrationResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="calibrationByManual"){ RequireLength(env,values,2);
auto arg0=Convert<ManulRtkCalibrationParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->calibrationByManual(arg0,[cb](FlightHubError p0,RtkCalibrationResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<RtkCalibrationResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="subscribeCalibrationProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->subscribeCalibrationProgress([cb](RtkCalibrationResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<RtkCalibrationResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("subscribeCalibrationProgress"),id,cb,[module,id]{module->unsubscribeCalibrationProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="unsubscribeCalibrationProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("subscribeCalibrationProgress"),arg0))module->unsubscribeCalibrationProgress(arg0);return Undefined(env);} }
if(type=="SafetyServiceModule") { auto module=UnwrapGenerated<ISafetyServiceModule>(env,handle,type); if(method=="searchSignalMaps"){ RequireLength(env,values,3);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto arg1=Convert<std::vector<std::string>>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->searchSignalMaps(arg0,arg1,[cb](FlightHubError p0,SignalMapsResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SignalMapsResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createCustomizedFlightAreas"){ RequireLength(env,values,2);
auto arg0=Convert<CreateCustomizedFlightAreasParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createCustomizedFlightAreas(arg0,[cb](FlightHubError p0,CreateFlightAreasResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CreateFlightAreasResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getCustomizedFlightAreas"){ RequireLength(env,values,2);
auto arg0=Convert<GetCustomizedFlightAreasParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getCustomizedFlightAreas(arg0,[cb](FlightHubError p0,GetFlightAreasResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetFlightAreasResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateCustomizedFlightAreas"){ RequireLength(env,values,2);
auto arg0=Convert<UpdateCustomizedFlightAreasParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->updateCustomizedFlightAreas(arg0,[cb](FlightHubError p0,UpdateFlightAreasResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UpdateFlightAreasResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteCustomizedFlightAreas"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteCustomizedFlightAreas(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="syncCustomizedFlightAreas"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->syncCustomizedFlightAreas(arg0,[cb](FlightHubError p0,SyncFlightAreasResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<SyncFlightAreasResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getFlightAreasSyncStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getFlightAreasSyncStatus(arg0,[cb](FlightHubError p0,GetAreasSyncStatusResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetAreasSyncStatusResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getOfflineMapsModelInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->getOfflineMapsModelInfo([cb](FlightHubError p0,GetOfflineMapsModelInfoResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetOfflineMapsModelInfoResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateOfflineMapsModelInfo"){ RequireLength(env,values,2);
auto arg0=Convert<UpdateOfflineMapsParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->updateOfflineMapsModelInfo(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="cancelOfflineMapsModelInfo"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),true);
try { module->cancelOfflineMapsModelInfo([cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setOfflineMaps"){ RequireLength(env,values,2);
auto arg0=Convert<SetOfflineMapsParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setOfflineMaps(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="syncOfflineMaps"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->syncOfflineMaps(arg0,[cb](FlightHubError p0,OfflineMapsSyncResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<OfflineMapsSyncResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getOfflineMapsSyncStatus"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getOfflineMapsSyncStatus(arg0,[cb](FlightHubError p0,GetOfflineMapsSyncStatusResults p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetOfflineMapsSyncStatusResults>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getUnlockLicenseList"){ RequireLength(env,values,2);
auto arg0=Convert<QueryDeviceUnlockLicenseListParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getUnlockLicenseList(arg0,[cb](FlightHubError p0,QueryDeviceUnlockLicenseListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<QueryDeviceUnlockLicenseListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="switchUnlockLicense"){ RequireLength(env,values,2);
auto arg0=Convert<SwitchUnlockLicenseParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->switchUnlockLicense(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="checkUnlockLicense"){ RequireLength(env,values,2);
auto arg0=Convert<CheckUnlockLicenseParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->checkUnlockLicense(arg0,[cb](FlightHubError p0,CheckUnlockLicenseResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CheckUnlockLicenseResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="submitUnlockLicense"){ RequireLength(env,values,2);
auto arg0=Convert<ImportUnlockLicenseParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->submitUnlockLicense(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="clearDeviceUnlockLicense"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->clearDeviceUnlockLicense(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="uploadUnlockLicenseFile"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->uploadUnlockLicenseFile(arg0,[cb](FlightHubError p0,UploadUnlockLicenseFileResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UploadUnlockLicenseFileResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenDroneOfflineMapEnable"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),false);
try { int id=module->listenDroneOfflineMapEnable(arg0,[cb](DroneOfflineMapEnable p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneOfflineMapEnable>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneOfflineMapEnable"),id,cb,[module,id]{module->cancelListenDroneOfflineMapEnable(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneOfflineMapEnable"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneOfflineMapEnable"),arg0))module->cancelListenDroneOfflineMapEnable(arg0);return Undefined(env);} }
if(type=="Stream") { auto module=UnwrapGenerated<IStream>(env,handle,type); if(method=="getCustomSEIModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"CustomSEIModule",module->getCustomSEIModule());}
if(method=="getPullStreamModule"){ RequireLength(env,values,1);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
return WrapGenerated(env,"PullStreamModule",module->getPullStreamModule(arg0));} }
if(type=="TakeoffModule") { auto module=UnwrapGenerated<ITakeoffModule>(env,handle,type); if(method=="takeoff"){ RequireLength(env,values,2);
auto arg0=Convert<TakeoffParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->takeoff(arg0,[cb](FlightHubError p0,TakeoffResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TakeoffResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenCommandTaskEvent"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenCommandTaskEvent([cb](CommandTaskEvent p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<CommandTaskEvent>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenCommandTaskEvent"),id,cb,[module,id]{module->cancelListenCommandTaskEvent(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenCommandTaskEvent"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenCommandTaskEvent"),arg0))module->cancelListenCommandTaskEvent(arg0);return Undefined(env);}
if(method=="listenDroneCommanderFlightMode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneCommanderFlightMode([cb](DroneCommanderFlightMode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneCommanderFlightMode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneCommanderFlightMode"),id,cb,[module,id]{module->cancelListenDroneCommanderFlightMode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneCommanderFlightMode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneCommanderFlightMode"),arg0))module->cancelListenDroneCommanderFlightMode(arg0);return Undefined(env);}
if(method=="listenDroneCurrentCommanderFlightMode"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneCurrentCommanderFlightMode([cb](DroneCurrentCommanderFlightMode p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneCurrentCommanderFlightMode>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneCurrentCommanderFlightMode"),id,cb,[module,id]{module->cancelListenDroneCurrentCommanderFlightMode(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneCurrentCommanderFlightMode"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneCurrentCommanderFlightMode"),arg0))module->cancelListenDroneCurrentCommanderFlightMode(arg0);return Undefined(env);}
if(method=="listenDroneCommanderModeLostAction"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenDroneCommanderModeLostAction([cb](DroneCommanderModeLostAction p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<DroneCommanderModeLostAction>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenDroneCommanderModeLostAction"),id,cb,[module,id]{module->cancelListenDroneCommanderModeLostAction(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenDroneCommanderModeLostAction"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenDroneCommanderModeLostAction"),arg0))module->cancelListenDroneCommanderModeLostAction(arg0);return Undefined(env);} }
if(type=="TerraBuildModule") { auto module=UnwrapGenerated<ITerraBuildModule>(env,handle,type); if(method=="getReconstructionSettings"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getReconstructionSettings(arg0,[cb](FlightHubError p0,TerraBuildSettingsResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildSettingsResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getQualityReport"){ RequireLength(env,values,4);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto arg2=Convert<std::string>::from(env,Element(env,values,2));
auto cb=NewCallback(env,Element(env,values,3),true);
try { module->getQualityReport(arg0,arg1,arg2,[cb](FlightHubError p0,TerraBuildQualityReportResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildQualityReportResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getModelFileList"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->getModelFileList(arg0,arg1,[cb](FlightHubError p0,TerraBuildModelFileListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildModelFileListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getModelFileUrl"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<int>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->getModelFileUrl(arg0,arg1,[cb](FlightHubError p0,TerraBuildModelFileUrlResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildModelFileUrlResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createReconstruction"){ RequireLength(env,values,2);
auto arg0=Convert<CreateReconstructionParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createReconstruction(arg0,[cb](FlightHubError p0,TerraBuildCreateReconstructionResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildCreateReconstructionResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="retryReconstruction"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->retryReconstruction(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="stopReconstruction"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->stopReconstruction(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getSfmResult"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getSfmResult(arg0,[cb](FlightHubError p0,TerraBuildSfmResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildSfmResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="deleteModelFile"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->deleteModelFile(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="batchDeleteModelFiles"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<int>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->batchDeleteModelFiles(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createPanorama"){ RequireLength(env,values,2);
auto arg0=Convert<CreatePanoramaParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->createPanorama(arg0,[cb](FlightHubError p0,TerraBuildCreatePanoramaResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildCreatePanoramaResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getReconstructionImages"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getReconstructionImages(arg0,[cb](FlightHubError p0,TerraBuildReconstructionImagesResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraBuildReconstructionImagesResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenReconstructionStatusChanged"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenReconstructionStatusChanged([cb](TerraBuildReconstructionStatusChanged p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<TerraBuildReconstructionStatusChanged>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenReconstructionStatusChanged"),id,cb,[module,id]{module->cancelListenReconstructionStatusChanged(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenReconstructionStatusChanged"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenReconstructionStatusChanged"),arg0))module->cancelListenReconstructionStatusChanged(arg0);return Undefined(env);}
if(method=="uploadModelCallback"){ RequireLength(env,values,2);
auto arg0=Convert<TerraUploadCallbackParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->uploadModelCallback(arg0,[cb](FlightHubError p0,TerraUploadCallbackResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraUploadCallbackResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="renameModel"){ RequireLength(env,values,3);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto arg1=Convert<TerraRenameModelParams>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->renameModel(arg0,arg1,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="showModelOnMap"){ RequireLength(env,values,2);
auto arg0=Convert<TerraShowOnMapParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->showModelOnMap(arg0,[cb](FlightHubError p0,TerraShowOnMapResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraShowOnMapResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenTerraUnzipProgress"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenTerraUnzipProgress([cb](TerraUnzipProgressMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<TerraUnzipProgressMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenTerraUnzipProgress"),id,cb,[module,id]{module->cancelListenTerraUnzipProgress(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenTerraUnzipProgress"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenTerraUnzipProgress"),arg0))module->cancelListenTerraUnzipProgress(arg0);return Undefined(env);}
if(method=="listenTerraModelStatusChanged"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenTerraModelStatusChanged([cb](TerraModelStatusChangedMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<TerraModelStatusChangedMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenTerraModelStatusChanged"),id,cb,[module,id]{module->cancelListenTerraModelStatusChanged(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenTerraModelStatusChanged"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenTerraModelStatusChanged"),arg0))module->cancelListenTerraModelStatusChanged(arg0);return Undefined(env);}
if(method=="listenTerraFileShowOnMap"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenTerraFileShowOnMap([cb](TerraFileShowOnMapMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<TerraFileShowOnMapMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenTerraFileShowOnMap"),id,cb,[module,id]{module->cancelListenTerraFileShowOnMap(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenTerraFileShowOnMap"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenTerraFileShowOnMap"),arg0))module->cancelListenTerraFileShowOnMap(arg0);return Undefined(env);}
if(method=="listenTerraMediaFileHideOnMap"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenTerraMediaFileHideOnMap([cb](TerraMediaFileHideOnMapMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<TerraMediaFileHideOnMapMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenTerraMediaFileHideOnMap"),id,cb,[module,id]{module->cancelListenTerraMediaFileHideOnMap(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenTerraMediaFileHideOnMap"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenTerraMediaFileHideOnMap"),arg0))module->cancelListenTerraMediaFileHideOnMap(arg0);return Undefined(env);}
if(method=="listenTerraMediaFileShowOnMap"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenTerraMediaFileShowOnMap([cb](TerraMediaFileShowOnMapMsg p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<TerraMediaFileShowOnMapMsg>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenTerraMediaFileShowOnMap"),id,cb,[module,id]{module->cancelListenTerraMediaFileShowOnMap(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenTerraMediaFileShowOnMap"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenTerraMediaFileShowOnMap"),arg0))module->cancelListenTerraMediaFileShowOnMap(arg0);return Undefined(env);}
if(method=="getModelDetail"){ RequireLength(env,values,2);
auto arg0=Convert<int>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getModelDetail(arg0,[cb](FlightHubError p0,TerraModelDetailResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<TerraModelDetailResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="setLasWkt"){ RequireLength(env,values,2);
auto arg0=Convert<TerraSetLasWktParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->setLasWkt(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="TestFlightModule") { auto module=UnwrapGenerated<ITestFlightModule>(env,handle,type); if(method=="generateTryFlightWayline"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<GenerateTryFlightWaylineParams>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->generateTryFlightWayline(arg0,arg1,[cb](GenerateTryFlightWaylineResponse p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<GenerateTryFlightWaylineResponse>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="createTestFlightTask"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<CreateTestFlightTaskParams>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->createTestFlightTask(arg0,arg1,[cb](CreateTestFlightTaskResponse p0,FlightHubError p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<CreateTestFlightTaskResponse>::to(e,p0),Convert<FlightHubError>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="WaylineManageModule") { auto module=UnwrapGenerated<IWaylineManageModule>(env,handle,type); if(method=="getWaylineList"){ RequireLength(env,values,2);
auto arg0=Convert<GetWaylineListParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getWaylineList(arg0,[cb](FlightHubError p0,GetWaylineListResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetWaylineListResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="getWaylineDetail"){ RequireLength(env,values,2);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getWaylineDetail(arg0,[cb](FlightHubError p0,GetWaylineDetailResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetWaylineDetailResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="batchDeleteWaylines"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->batchDeleteWaylines(arg0,[cb](FlightHubError p0,BatchDeleteWaylinesResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<BatchDeleteWaylinesResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="updateWayline"){ RequireLength(env,values,3);
auto arg0=Convert<std::string>::from(env,Element(env,values,0));
auto arg1=Convert<std::string>::from(env,Element(env,values,1));
auto cb=NewCallback(env,Element(env,values,2),true);
try { module->updateWayline(arg0,arg1,[cb](FlightHubError p0,UpdateWaylineResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<UpdateWaylineResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="submitWaylineInfo"){ RequireLength(env,values,2);
auto arg0=Convert<SubmitWaylineInfoParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->submitWaylineInfo(arg0,[cb](FlightHubError p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="batchDownloadWaylines"){ RequireLength(env,values,2);
auto arg0=Convert<BatchDownloadWaylinesParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->batchDownloadWaylines(arg0,[cb](FlightHubError p0,BatchDownloadWaylinesResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<BatchDownloadWaylinesResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="duplicateWayline"){ RequireLength(env,values,2);
auto arg0=Convert<DuplicateWaylineParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->duplicateWayline(arg0,[cb](FlightHubError p0,DuplicateWaylineResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<DuplicateWaylineResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="copyWayline"){ RequireLength(env,values,2);
auto arg0=Convert<CopyWaylineParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->copyWayline(arg0,[cb](FlightHubError p0,CopyWaylineResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<CopyWaylineResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="concatWayline"){ RequireLength(env,values,2);
auto arg0=Convert<ConcatWaylineParam>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->concatWayline(arg0,[cb](FlightHubError p0,ConcatWaylineResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ConcatWaylineResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="importKmz"){ RequireLength(env,values,2);
auto arg0=Convert<std::vector<std::string>>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->importKmz(arg0,[cb](FlightHubError p0,ImportKmzResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<ImportKmzResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} }
if(method=="listenImportWaylineEvent"){ RequireLength(env,values,1);
auto cb=NewCallback(env,Element(env,values,0),false);
try { int id=module->listenImportWaylineEvent([cb](ImportWaylineEventResult p0) { cb->send([p0](napi_env e){return std::vector<napi_value>{Convert<ImportWaylineEventResult>::to(e,p0)};}); }); TrackGenerated(module.get(),ScopedSubscription("listenImportWaylineEvent"),id,cb,[module,id]{module->cancelListenImportWaylineEvent(id);});return Js(env,id); }catch(...){cb->stop();throw;} }
if(method=="cancelListenImportWaylineEvent"){ RequireLength(env,values,1);
auto arg0=Convert<int>::from(env,Element(env,values,0));
if(!CancelGenerated(module.get(),ScopedSubscription("listenImportWaylineEvent"),arg0))module->cancelListenImportWaylineEvent(arg0);return Undefined(env);}
if(method=="getWaylineEditorSts"){ RequireLength(env,values,2);
auto arg0=Convert<GetWaylineEditorStsParams>::from(env,Element(env,values,0));
auto cb=NewCallback(env,Element(env,values,1),true);
try { module->getWaylineEditorSts(arg0,[cb](FlightHubError p0,GetWaylineEditorStsResult p1) { cb->send([p0,p1](napi_env e){return std::vector<napi_value>{Convert<FlightHubError>::to(e,p0),Convert<GetWaylineEditorStsResult>::to(e,p1)};}); }); return Undefined(env); }catch(...){cb->stop();throw;} } }
if(type=="Workspace") { auto module=UnwrapGenerated<IWorkspace>(env,handle,type); if(method=="getLogManagementModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"LogManagementModule",module->getLogManagementModule());}
if(method=="getHMSModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"HMSModule",module->getHMSModule());}
if(method=="getMediaServiceModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"MediaServiceModule",module->getMediaServiceModule());}
if(method=="getSafetyServiceModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"SafetyServiceModule",module->getSafetyServiceModule());}
if(method=="getFlightTaskRecordModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FlightTaskRecordModule",module->getFlightTaskRecordModule());}
if(method=="getDiagnosisManagementModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DiagnosisManagementModule",module->getDiagnosisManagementModule());}
if(method=="getMaintenanceManagementModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"MaintenanceManagementModule",module->getMaintenanceManagementModule());}
if(method=="getFlightTaskModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FlightTaskModule",module->getFlightTaskModule());}
if(method=="getDeviceManageModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"DeviceManageModule",module->getDeviceManageModule());}
if(method=="getFirmwareManageModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FirmwareManageModule",module->getFirmwareManageModule());}
if(method=="getWaylineManageModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"WaylineManageModule",module->getWaylineManageModule());}
if(method=="getPsdkResourceModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"PsdkResourceModule",module->getPsdkResourceModule());}
if(method=="getFlashLedModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"FlashLedModule",module->getFlashLedModule());}
if(method=="getTerraBuildModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"TerraBuildModule",module->getTerraBuildModule());}
if(method=="getAIInsideManageModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"AIInsideManageModule",module->getAIInsideManageModule());}
if(method=="getElementModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"ElementModule",module->getElementModule());}
if(method=="getAIAlertModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"AIAlertModule",module->getAIAlertModule());}
if(method=="getLiveSyncModule"){ RequireLength(env,values,0);
return WrapGenerated(env,"LiveSyncModule",module->getLiveSyncModule());} }
