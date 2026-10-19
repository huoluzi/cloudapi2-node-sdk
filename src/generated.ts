// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
// Generated C++ surface. Java adapters are layered separately.
export interface PostAiAlertDeviceSettingParam {
  droneSn?: string;
  enableTargetAlert?: boolean;
  alarmInfo?: AiAlertAlarmInfo;
}
export interface AiAlertAlarmInfo {
  alarmMethod?: (number)[];
  alarmInterval?: number;
}
export interface FlightHubError {
  errorCode?: number;
  httpCode?: number;
  serverCode?: number;
  deviceCode?: number;
  serverMessage?: string;
}
export interface PostAiAlertDeviceSettingResult {

}
export interface GetAiAlertDeviceSettingParam {
  droneSn?: string;
}
export interface GetAiAlertDeviceSettingResult {
  droneSn?: string;
  enableTargetAlert?: boolean;
  alarmInfo?: AiAlertAlarmInfo;
}
export interface PostAiAlertAlgorithmSettingParam {
  droneSn?: string;
  algorithmType?: number;
  algorithmName?: string;
  alarmTargets?: (AiAlertAlarmTarget)[];
}
export interface AiAlertAlarmTarget {
  targetType?: number;
  targetValue?: number;
  useMinThreshold?: boolean;
  useMaxThreshold?: boolean;
  targetMaxThreshold?: number;
  targetMinThreshold?: number;
}
export interface PostAiAlertAlgorithmSettingResult {

}
export interface GetAiAlertAlgorithmSettingParam {
  droneSn?: string;
  algorithmType?: number;
}
export interface GetAiAlertAlgorithmSettingResult {
  droneSn?: string;
  algorithmType?: number;
  algorithmName?: string;
  alarmTargets?: (AiAlertAlarmTarget)[];
}
export interface GetAiAlertFlightsParam {
  droneSn?: string;
  beginAt?: bigint | number;
  endAt?: bigint | number;
  algorithmSources?: (number)[];
  page?: number;
  pageSize?: number;
}
export interface GetAiAlertFlightsResult {
  data?: (AiAlertFlightItem)[];
  total?: number;
  page?: number;
  pageSize?: number;
  pageCount?: number;
}
export interface AiAlertFlightItem {
  flightId?: string;
  count?: number;
  flightTaskName?: string;
  status?: number;
  startTime?: bigint | number;
}
export interface GetAiAlertRecordsParam {
  flightId?: (string)[];
  droneSn?: (string)[];
  targetType?: (number)[];
  algorithmSources?: (number)[];
  beginAt?: bigint | number;
  endAt?: bigint | number;
  page?: number;
  pageSize?: number;
}
export interface GetAiAlertRecordsResult {
  data?: Record<string, (AiAlertRecordItem)[]>;
  total?: number;
  page?: number;
  pageSize?: number;
  pageCount?: number;
}
export interface AiAlertRecordItem {
  alertUuid?: string;
  flightId?: string;
  droneSn?: string;
  gatewaySn?: string;
  status?: number;
  algorithmSource?: number;
  location?: AiAlertLocation;
  targetAlertInfos?: (AiAlertTargetAlertInfo)[];
  thumbnailUrl?: string;
  labels?: (string)[];
  timestamp?: bigint | number;
  taskName?: string;
  mediaIndex?: number;
}
export interface AiAlertLocation {
  latitude?: number;
  longitude?: number;
  altitude?: number;
}
export interface AiAlertTargetAlertInfo {
  targetType?: number;
  targetValue?: number;
  label?: string;
}
export interface AIBoxInfoListResults {
  aiBoxes?: (AIBoxInfoResults)[];
}
export interface AIBoxInfoResults {
  index?: number;
  type?: number;
  sn?: string;
  firmwareVersion?: string;
  storageTotal?: number;
  storageUsed?: number;
}
export interface FetchFileDownloadUrlParams {
  deviceSn?: string;
  boxSn?: string;
  objectKeys?: (string)[];
}
export interface FileDownloadUrlListResults {
  list?: (string)[];
}
export interface FetchAppListParam {
  deviceSn?: string;
  boxSn?: string;
}
export interface FetchAppListResults {
  bid?: string;
  status?: string;
}
export interface FetchAppListProgressParam {
  deviceSn?: string;
  boxSn?: string;
  bid?: string;
}
export interface FetchAppListProgressResults {
  bid?: string;
  status?: string;
  percent?: number;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  deviceCode?: number;
  ext?: FetchAppListProgressExtResults;
}
export interface FetchAppListProgressExtResults {
  sn?: string;
  aiBoxAppInfo?: (AIBoxAppInfoResults)[];
  errorReason?: string;
}
export interface AIBoxAppInfoResults {
  id?: string;
  name?: string;
  version?: string;
  description?: string;
  publisher?: string;
  appSize?: number;
  dataSize?: number;
  type?: number;
}
export interface ExportFileParam {
  deviceSn?: string;
  boxSn?: string;
  appId?: string;
  exportType?: number;
}
export interface ExportFileResults {
  bid?: string;
  status?: string;
}
export interface ExportFileProgressParam {
  deviceSn?: string;
  boxSn?: string;
  bid?: string;
}
export interface ExportFileProgressResults {
  bid?: string;
  status?: string;
  percent?: number;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  deviceCode?: number;
  ext?: ExportFileProgressExtResults;
}
export interface ExportFileProgressExtResults {
  sn?: string;
  exportType?: number;
  appId?: string;
  objectKey?: string;
}
export interface UploadFileParam {
  filePath?: string;
  deviceSn?: string;
  boxSn?: string;
}
export interface UploadFileResults {
  objectUrl?: string;
  etag?: string;
  objectKey?: string;
}
export interface InstallAppParam {
  deviceSn?: string;
  boxSn?: string;
  objectKey?: string;
}
export interface InstallAppResults {
  bid?: string;
  status?: string;
}
export interface InstallAppProgressParam {
  deviceSn?: string;
  boxSn?: string;
  bid?: string;
}
export interface InstallAppProgressResults {
  bid?: string;
  status?: string;
  percent?: number;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  deviceCode?: number;
  ext?: InstallAppProgressExtResults;
}
export interface InstallAppProgressExtResults {
  sn?: string;
}
export interface OperateAppParam {
  deviceSn?: string;
  boxSn?: string;
  appId?: string;
  action?: string;
}
export interface OperateAppResults {
  bid?: string;
  status?: string;
}
export interface GetAIInsideModelsResult {
  models?: (AIInsideModelItem)[];
}
export interface AIInsideModelItem {
  signedId?: string;
  signedName?: string;
  modelName?: string;
  signedVersion?: number;
  signedUtc?: bigint | number;
  expiredUtc?: bigint | number;
  modelParam?: AIInsideModelParam;
  labels?: (AIInsideLabel)[];
  snList?: (string)[];
  imageSource?: (number)[];
  digitalEffect?: (number)[];
  vlResolution?: (number)[];
}
export interface AIInsideModelParam {
  confThreshold?: number;
  nmsPre?: number;
  iouThreshold?: number;
}
export interface AIInsideLabel {
  type?: number;
  name?: string;
}
export interface GetAIInsideModelDevicesParam {
  signedId?: string;
  page?: number;
  pageSize?: number;
  droneSn?: (string)[];
}
export interface GetAIInsideModelDevicesResult {
  list?: (AIInsideDeviceItem)[];
  total?: number;
  page?: number;
  pageSize?: number;
}
export interface AIInsideDeviceItem {
  deviceSn?: string;
  deviceModel?: AIInsideDeviceModel;
  completeMachineSn?: string;
  deviceOnlineStatus?: boolean;
  deviceWorkingStatus?: number;
  operateAiModel?: AIInsideOperateProgress;
  associateDroneDeviceInfo?: AIInsideAssociateDrone;
}
export interface AIInsideDeviceModel {
  deviceModelKey?: string;
  domain?: string;
  name?: string;
}
export interface AIInsideOperateProgress {
  deviceCmdMethod?: string;
  status?: string;
  progress?: AIInsideOperateProgressDetail;
  deviceCode?: number;
  createTime?: bigint | number;
}
export interface AIInsideOperateProgressDetail {
  percent?: number;
  currentStep?: number;
}
export interface AIInsideAssociateDrone {
  deviceSn?: string;
  deviceModel?: AIInsideDeviceModel;
  deviceOnlineStatus?: boolean;
  deviceWorkingStatus?: number;
  aiModelInfo?: AIInsideModelInfo;
}
export interface AIInsideModelInfo {
  signedId?: string;
  modelName?: string;
  signedUtc?: bigint | number;
  expiredUtc?: bigint | number;
  status?: string;
}
export interface GetAIInsideModelDevicesSummaryParam {
  signedId?: string;
  operationType?: string;
}
export interface GetAIInsideModelDevicesSummaryResult {
  totalDevices?: number;
  operableDevices?: number;
}
export interface OperateAIInsideModelParam {
  signedId?: string;
  operationType?: string;
  droneSnList?: (string)[];
}
export interface OperateAIInsideModelResult {
  results?: (AIInsideOperateDeviceResult)[];
}
export interface AIInsideOperateDeviceResult {
  droneSn?: string;
  code?: number;
}
export interface CreateAIInsideAlgorithmParam {
  name?: string;
}
export interface CreateAIInsideAlgorithmResult {
  credentials?: AIInsideCredentials;
  provider?: string;
  bucket?: string;
  region?: string;
  endpoint?: string;
  fileStoreDir?: string;
}
export interface AIInsideCredentials {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: bigint | number;
  securityToken?: string;
}
export interface FileUploadAIInsideAlgorithmParam {
  fileKey?: string;
}
export interface FileUploadAIInsideAlgorithmResult {
  detail?: AIInsideAlgorithmDetail;
}
export interface AIInsideAlgorithmDetail {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  signedId?: string;
  signedName?: string;
  signedVersion?: number;
  signedUtc?: bigint | number;
  modelUuid?: string;
  modelName?: string;
  modelType?: string;
  labels?: (AIInsideLabel)[];
  modelParam?: AIInsideModelParam;
  license?: AIInsideLicense;
  applicableProduct?: (number)[];
  fileKey?: string;
  imageSource?: (number)[];
  digitalEffect?: (number)[];
  vlResolution?: (number)[];
}
export interface AIInsideLicense {
  snList?: (string)[];
  startedUtc?: bigint | number;
  expiredUtc?: bigint | number;
}
export interface DeleteAIInsideAlgorithmParam {
  signedId?: string;
}
export interface UploadAIInsideAlgorithmFileParam {
  filePath?: string;
}
export interface UploadAIInsideAlgorithmFileResult {
  objectKey?: string;
  objectUrl?: string;
  etag?: string;
  detail?: AIInsideAlgorithmDetail;
}
export interface LiveInfo {
  deviceSn?: string;
  payloadIndex?: string;
  videoId?: string;
  switchableLensTypes?: (number)[];
}
export interface SwitchLiveLensParams {
  payloadIndex?: string;
  lensType?: number;
}
export interface SetPhotoStorageSettingsParams {
  payloadIndex?: string;
  photoStorageSettings?: (string)[];
}
export interface SetVideoStorageSettingsParams {
  payloadIndex?: string;
  videoStorageSettings?: (string)[];
}
export interface SetNightSceneModeParams {
  payloadIndex?: string;
  mode?: number;
}
export interface ZoomAtTargetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
export interface CameraFocalLengthParams {
  payloadIndex?: string;
  cameraType?: number;
  zoomFactor?: number;
}
export interface LinkageZoomParams {
  payloadIndex?: string;
  state?: number;
}
export interface GimbalResetParams {
  payloadIndex?: string;
  resetMode?: number;
}
export interface LookAtTargetParams {
  payloadIndex?: string;
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface CameraScreenDragParams {
  payloadIndex?: string;
  locked?: boolean;
  pitchSpeed?: number;
  yawSpeed?: number;
}
export interface PanoramaParam {
  payloadIndex?: string;
}
export interface PanoramaStatus {
  currentStep?: number;
  percent?: number;
  status?: number;
}
export interface PhotoSizeParam {
  payloadIndex?: string;
  photoSize?: number;
  cameraType?: string;
}
export interface IntervalTakePhotoSetParam {
  payloadIndex?: string;
  interval?: number;
}
export interface IntervalTakePhotoParam {
  payloadIndex?: string;
}
export interface IntervalTakePhotoStatus {
  countdownTime?: number;
}
export interface CameraAimParam {
  cameraType?: string;
  locked?: boolean;
  payloadIndex?: string;
  x?: number;
  y?: number;
}
export interface SwitchCameraModeParams {
  payloadIndex?: string;
  cameraMode?: number;
}
export interface CameraState {
  payloadIndex?: string;
  cameraMode?: number;
  recordTime?: number;
  recordingState?: boolean;
  remainRecordDuration?: number;
  photoState?: boolean;
  remainPhotoNum?: number;
  intervalPhotoInterval?: number;
  videoResolution?: number;
  linkageZoomState?: number;
  photoSize?: number;
  videoResolutionWide?: number;
  videoResolutionZoom?: number;
  photoSizeWide?: number;
  photoSizeZoom?: number;
  photoFormat?: number;
  thermalTempExceedRangeValid?: boolean;
  thermalSuperResolutionEnable?: boolean;
  isothermEnable?: number;
  isothermRoiBasedRenderingEnable?: number;
  isothermColorRenderingType?: number;
  isothermLowerThreshold?: number;
  isothermUpperThreshold?: number;
}
export interface LiveviewWorldRegion {
  payloadIndex?: string;
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}
export interface CameraWideLensState {
  payloadIndex?: string;
  wideCalibrateFarthestFocusValue?: number;
  wideCalibrateNearestFocusValue?: number;
  wideExposureMode?: number;
  wideExposureValue?: number;
  wideFocusMode?: number;
  wideFocusState?: number;
  wideFocusValue?: number;
  wideIso?: number;
  wideMaxFocusValue?: number;
  wideMinFocusValue?: number;
  wideShutterSpeed?: number;
  wideDewarpingState?: boolean;
  wideMechanicalShutterState?: boolean;
  wideApertureValue?: number;
  wideFovInfo?: CameraLensFovInfo;
}
export interface CameraLensFovInfo {
  payloadIndex?: string;
  width?: number;
  height?: number;
  imageRatio?: number;
  focalLength?: number;
}
export interface CameraZoomLensState {
  payloadIndex?: string;
  zoomCalibrateFarthestFocusValue?: number;
  zoomCalibrateNearestFocusValue?: number;
  zoomExposureMode?: number;
  zoomExposureValue?: number;
  zoomFactor?: number;
  zoomFocusMode?: number;
  zoomFocusState?: number;
  zoomFocusValue?: number;
  zoomIso?: number;
  zoomMaxFocusValue?: number;
  zoomMinFocusValue?: number;
  zoomShutterSpeed?: number;
  zoomApertureValue?: number;
  zoomFovInfo?: CameraLensFovInfo;
}
export interface CameraMeasureTarget {
  payloadIndex?: string;
  altitude?: number;
  distance?: number;
  latitude?: number;
  longitude?: number;
  laserMeasureState?: number;
}
export interface NightModeSettings {
  payloadIndex?: string;
  nightMode?: number;
  isWorking?: boolean;
  denoiseLevel?: number;
  nightVisionEnable?: boolean;
  infraredFillLightEnable?: boolean;
  nightSceneModeSuggestion?: number;
}
export interface GimbalState {
  payloadIndex?: string;
  yaw?: number;
  pitch?: number;
  roll?: number;
}
export interface LiveVideoInfo {
  payloadIndex?: string;
  videoIndex?: string;
  videoType?: number;
  switchableVideoTypes?: (number)[];
}
export interface ThermalGainModeInfo {
  payloadIndex?: string;
  thermalGainMode?: number;
}
export interface CameraIrLensState {
  payloadIndex?: string;
  screenSplitEnable?: boolean;
  irZoomFactor?: number;
  thermalCurrentPaletteStyle?: number;
  thermalGainMode?: number;
  thermalGlobalTemperatureMax?: number;
  thermalGlobalTemperatureMin?: number;
  thermalIsothermLowerLimit?: number;
  thermalIsothermState?: number;
  thermalIsothermUpperLimit?: number;
  irFovInfo?: CameraLensFovInfo;
}
export interface CameraIrThermometryInfo {
  payloadIndex?: string;
  irMeteringMode?: number;
  irMeteringPoint?: CameraIrMeteringPoint;
  irMeteringArea?: CameraIrMeteringArea;
}
export interface CameraIrMeteringPoint {
  temperature?: number;
  x?: number;
  y?: number;
}
export interface CameraIrMeteringArea {
  averTemperature?: number;
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  maxTemperaturePoint?: CameraIrMeteringPoint;
  minTemperaturePoint?: CameraIrMeteringPoint;
}
export interface CameraWatermarkSettings {
  payloadIndex?: string;
  globalEnable?: number;
  droneTypeEnable?: number;
  manufacturerEnable?: number;
  droneSnEnable?: number;
  datetimeEnable?: number;
  gpsEnable?: number;
  userCustomStringEnable?: number;
  userCustomString?: string;
  layout?: number;
}
export interface CameraStorageInfo {
  payloadIndex?: string;
  total?: number;
  used?: number;
}
export interface CameraIrPipState {
  payloadIndex?: string;
  displayMode?: number;
  enhanceMode?: number;
  irMixRate?: number;
  irMeterRegion?: CameraIrMeterRegion;
}
export interface CameraIrMeterRegion {
  topLeftX?: number;
  topLeftY?: number;
  bottomRightX?: number;
  bottomRightY?: number;
}
export interface CameraIsothermPolygon {
  payloadIndex?: string;
  points?: (CameraIsothermPolygonPoint)[];
}
export interface CameraIsothermPolygonPoint {
  x?: number;
  y?: number;
}
export interface CameraMediaStorage {
  payloadIndex?: string;
  photoStorageSettings?: (string)[];
  videoStorageSettings?: (string)[];
}
export interface CameraAlgorithmDehazeInfo {
  payloadIndex?: string;
  mode?: number;
  level?: number;
  isWorking?: boolean;
}
export interface CameraPreRecordedInfo {
  payloadIndex?: string;
  status?: number;
  preRecordedTime?: number;
}
export interface CameraCapability {
  payloadIndex?: string;
  zoomFactorRange?: (number)[];
  irFactorRange?: (number)[];
  basePhotoStorageFormat?: CameraPhotoStorageFormat;
}
export interface CameraPhotoStorageFormat {
  photoStorageFormatNum?: number;
  photoStorageFormats?: (string)[];
}
export interface CameraSettableCapability {
  payloadIndex?: string;
  events?: (CameraSettableEvent)[];
}
export interface CameraSettableEvent {
  eventId?: number;
  settable?: number;
}
export interface CameraVisibleCapability {
  payloadIndex?: string;
  cameraMode?: number;
  events?: (CameraVisibleCapabilityItem)[];
}
export interface CameraVisibleCapabilityItem {
  eventId?: number;
  visible?: number;
}
export interface CameraPhotoInfo {
  payloadIndex?: string;
  cameraMode?: number;
  currentStep?: number;
  percent?: number;
  countdownTime?: number;
  result?: number;
  status?: string;
}
export interface ThermalGainModeSetParams {
  payloadIndex?: string;
  thermalGainMode?: number;
}
export interface CameraApertureValueSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  apertureValue?: number;
}
export interface CameraExposureModeSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  exposureMode?: number;
}
export interface CameraExposureSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  exposureValue?: number;
}
export interface CameraFocusModeSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  focusMode?: number;
}
export interface CameraFocusValueSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  focusValue?: number;
}
export interface CameraIsoSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  isoValue?: number;
}
export interface CameraMechanicalShutterSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  state?: number;
}
export interface CameraPointFocusActionParams {
  payloadIndex?: string;
  cameraLensType?: number;
  x?: number;
  y?: number;
}
export interface CameraShutterSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  shutterValue?: number;
}
export interface CameraWatermarkParams {
  payloadIndex?: string;
  globalEnable?: number;
  droneTypeEnable?: number;
  manufacturerEnable?: number;
  droneSnEnable?: number;
  datetimeEnable?: number;
  gpsEnable?: number;
  userCustomStringEnable?: number;
  userCustomString?: string;
  layout?: number;
}
export interface CameraDewarpingSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  dewarpingState?: number;
}
export interface CameraScreenSplitParams {
  payloadIndex?: string;
  enable?: boolean;
}
export interface CleanFogParams {
  payloadIndex?: string;
}
export interface ThermalCurrentPaletteSetParams {
  payloadIndex?: string;
  paletteStyle?: number;
}
export interface ThermalSuperResolutionEnableParams {
  payloadIndex?: string;
  enable?: number;
}
export interface IrMeteringModeSetParams {
  payloadIndex?: string;
  mode?: number;
}
export interface IrMeteringPointSetParams {
  payloadIndex?: string;
  x?: number;
  y?: number;
}
export interface IrMeteringAreaSetParams {
  payloadIndex?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
export interface SetIrDisplayModeParams {
  payloadIndex?: string;
  displayMode?: number;
}
export interface SetIrEnhanceModeParams {
  payloadIndex?: string;
  enhanceMode?: number;
}
export interface SetIrMixRateParams {
  payloadIndex?: string;
  irMixRate?: number;
}
export interface SetIsothermEnableParams {
  payloadIndex?: string;
  enable?: number;
}
export interface SetIsothermColorRenderingTypeParams {
  payloadIndex?: string;
  type?: number;
}
export interface SetIsothermLowerUpperRangeParams {
  payloadIndex?: string;
  lower?: number;
  upper?: number;
}
export interface SetIsothermRenderingPolygonParams {
  payloadIndex?: string;
  polygon?: (IsothermPolygonPoint)[];
}
export interface IsothermPolygonPoint {
  x?: number;
  y?: number;
}
export interface SetIsothermRoiBasedRenderingEnableParams {
  payloadIndex?: string;
  enable?: number;
}
export interface InfraredFillLightEnableParams {
  payloadIndex?: string;
  enable?: boolean;
}
export interface CameraNightVisionEnableParams {
  payloadIndex?: string;
  enable?: boolean;
}
export interface CameraSettingsResetParams {
  payloadIndex?: string;
}
export interface CameraDenoiseLevelSetParams {
  payloadIndex?: string;
  level?: number;
}
export interface VideoResolutionSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  videoResolution?: number;
}
export interface CameraPhotoFormatSetParams {
  payloadIndex?: string;
  photoFormat?: number;
}
export interface PreRecordedStatusSetParams {
  payloadIndex?: string;
  status?: number;
}
export interface PreRecordedTimeSetParams {
  payloadIndex?: string;
  preRecordedTime?: number;
}
export interface AlgorithmDehazeModeSetParams {
  payloadIndex?: string;
  mode?: number;
}
export interface AlgorithmDehazeLevelSetParams {
  payloadIndex?: string;
  level?: number;
}
export interface DroneCameraWatermarkSettingsPush {
  globalEnable?: bigint | number;
  droneTypeEnable?: bigint | number;
  droneSnEnable?: bigint | number;
  datetimeEnable?: bigint | number;
  gpsEnable?: bigint | number;
  userCustomStringEnable?: bigint | number;
  userCustomString?: string;
  layout?: bigint | number;
}
export interface SeiItem {
  type?: number;
  customData?: SeiData;
  detectionBox?: SeiDetectionBox;
  detectionPolygon?: SeiDetectionPolygon;
  textOverlay?: SeiTextOverlay;
}
export interface SeiData {
  data?: (number)[];
}
export interface SeiDetectionBox {
  id?: number;
  type?: number;
  state?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  confidence?: number;
}
export interface SeiDetectionPolygon {
  id?: number;
  type?: number;
  state?: number;
  confidence?: number;
  points?: (SeiPoint2D)[];
}
export interface SeiPoint2D {
  x?: number;
  y?: number;
}
export interface SeiTextOverlay {
  id?: number;
  x?: number;
  y?: number;
  fontSize?: number;
  colorR?: number;
  colorG?: number;
  colorB?: number;
  alpha?: number;
  text?: string;
}
export interface SeiHeader {
  version?: number;
  reserved?: number;
  dataSize?: number;
  timestamp?: bigint | number;
}
export interface DockDeparturePoint {
  longitude?: number;
  latitude?: number;
  height?: number;
}
export interface AircraftVisualScoutStatus {
  taskId?: string;
  visualScoutStage?: number;
  scoutWaylineGenerateRemainTime?: bigint | number;
}
export interface AircraftVisualScoutAbnormalInfo {
  taskId?: string;
  errCode?: number;
}
export interface AircraftVisualScoutObstacleInfo {
  taskId?: string;
  obstacleTag?: boolean;
}
export interface EphemerisDownloadState {
  state?: number;
}
export interface EphemerisInfo {
  ephemeris?: string;
}
export interface DownloadEphemerisParams {
  ephemerisUrl?: string;
  ephemerisFileName?: string;
}
export interface InOutWaylineDetectParams {
  taskId?: string;
  taskCmd?: number;
  isAutoVisualScout?: boolean;
  scoutRelativeHeight?: number;
  patrolRelativeHeight?: number;
}
export interface InOutWaylineFlightSettingParams {
  sn?: string;
  minReturnHomeHeight?: number;
  lostContactAction?: number;
  maxHeightLimit?: number;
  maxDistanceLimit?: number;
}
export interface OpenDebugModeResult {
  message?: string;
  bid?: string;
}
export interface CloseDebugModeResult {
  message?: string;
  bid?: string;
}
export interface OpenDockCoverResult {
  message?: string;
  bid?: string;
}
export interface OpenDockCoverProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface CloseDockCoverResult {
  message?: string;
  bid?: string;
}
export interface CloseDockCoverProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface DeviceRebootResult {
  message?: string;
  bid?: string;
}
export interface DeviceRebootProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface DeviceFormatResult {
  message?: string;
  bid?: string;
}
export interface DeviceFormatProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface OpenDroneResult {
  message?: string;
  bid?: string;
}
export interface CloseDroneResult {
  message?: string;
  bid?: string;
}
export interface DroneFormatResult {
  message?: string;
  bid?: string;
}
export interface OpenChargeResult {
  message?: string;
  bid?: string;
}
export interface CloseChargeResult {
  message?: string;
  bid?: string;
}
export interface SetDistanceLimitResult {
  message?: string;
}
export interface SetHeightLimitResult {
  message?: string;
}
export interface SetObstacleAvoidanceResult {
  message?: string;
}
export interface SetRemainingPowerForRthResult {
  message?: string;
}
export interface SetNightLightsStateResult {
  message?: string;
}
export interface SwitchAlarmStateResult {
  message?: string;
}
export interface EsimOperatorSwitchResult {
  message?: string;
  bid?: string;
}
export interface SimSlotSwitchResult {
  message?: string;
  bid?: string;
}
export interface SetBatteryStoreModeResult {
  message?: string;
  bid?: string;
}
export interface ManualBatterySwapResult {
  message?: string;
  bid?: string;
}
export interface ManualBatterySwapProgressResult {
  message?: string;
  bid?: string;
  dataJson?: string;
}
export interface DonglePowerSwitchResult {
  message?: string;
  bid?: string;
}
export interface LowPowerSwitchResult {
  message?: string;
  bid?: string;
}
export interface EsimOperatorSwitchProgressResult {
  message?: string;
  bid?: string;
  dataJson?: string;
}
export interface GeoCagingInfoParam {
  fgLongitude?: number;
  fgLatitude?: number;
  fgRadius?: number;
  fgHeight?: number;
  cvLongitude?: number;
  cvLatitude?: number;
  cvRadius?: number;
  cvHeight?: number;
}
export interface CloudEnvironmentSwitchParam {
  devicesList?: (CloudEnvDeviceList)[];
  targetConfig?: CloudEnvTargetConfig;
}
export interface CloudEnvDeviceList {
  host?: (CloudEnvDeviceInfo)[];
  nodes?: (CloudEnvDeviceInfo)[];
  parents?: (CloudEnvDeviceInfo)[];
}
export interface CloudEnvDeviceInfo {
  callsign?: string;
  deviceModelKey?: string;
  deviceSn?: string;
}
export interface CloudEnvTargetConfig {
  type?: number;
  publicCloudConfig?: CloudEnvPublicCloudConfig;
  privateCloudConfig?: CloudEnvPrivateCloudConfig;
  thirdCloudConfig?: CloudEnvThirdCloudConfig;
}
export interface CloudEnvPublicCloudConfig {
  bindCode?: string;
  orgId?: string;
  zoneId?: string;
}
export interface CloudEnvPrivateCloudConfig {
  bindCode?: string;
  orgId?: string;
  url?: string;
}
export interface CloudEnvThirdCloudConfig {
  bindCode?: string;
  orgId?: string;
  mqttAddr?: string;
  mqttPassword?: string;
  mqttUsername?: string;
}
export interface CloudEnvironmentSwitchCallbackParam {
  code?: number;
  status?: string;
  deviceAuthVerify?: DeviceAuthVerifyParam;
  devicesList?: (CloudEnvDeviceList)[];
  targetConfig?: CloudEnvTargetConfig;
}
export interface DeviceAuthVerifyParam {
  sn?: string;
  secret?: string;
  nonce?: string;
}
export interface CloudEnvironmentSwitchResult {
  message?: string;
  bid?: string;
  progress?: number;
}
export interface HmsData {
  hmsDataItems?: (HmsDataItem)[];
}
export interface HmsDataItem {
  basics?: HmsDataBasics;
  subHmsData?: (HmsDataBasics)[];
}
export interface HmsDataBasics {
  level?: number;
  moduleId?: number;
  code?: string;
  deviceType?: string;
  domainType?: string;
  inTheSky?: number;
  imminent?: number;
  args?: HmsArgs;
  statusKey?: string;
  jointKey?: string;
  id?: number;
  parentId?: number;
}
export interface HmsArgs {
  componentIndex?: number;
  sensorIndex?: number;
  deviceId?: string;
  senderHostId?: string;
  ignore?: number;
  alarmInfo?: number;
  createTimestamp?: bigint | number;
  displayScene?: number;
}
export interface DeviceTopo {
  device?: Device;
  subDevices?: (Device)[];
}
export interface Device {
  deviceSn?: string;
  deviceClass?: string;
  deviceName?: string;
  nickname?: string;
  modelKey?: string;
  online?: boolean;
  parentSns?: (string)[];
}
export interface DeviceDetailInfo {
  deviceSn?: string;
  nickname?: string;
  modelInfo?: ModelInfo;
  deviceAddTime?: number;
  deviceOnlineStatus?: boolean;
  deviceFirmwareVersion?: string;
  deviceFirmwareStatus?: number;
  deviceWorkingStatus?: number;
  completeMachineSn?: string;
  subDevices?: (SubDeviceInfo)[];
}
export interface ModelInfo {
  key?: string;
  domain?: string;
  type?: string;
  subType?: string;
  name?: string;
  deviceClass?: string;
  developCode?: string;
}
export interface SubDeviceInfo {
  deviceSn?: string;
  modelInfo?: ModelInfo;
  deviceOnlineStatus?: boolean;
  deviceFirmwareVersion?: string;
  deviceFirmwareStatus?: number;
  deviceWorkingStatus?: number;
  flysafeDatabaseVersion?: string;
  parentSns?: (string)[];
  nickname?: string;
}
export interface ModifyDeviceNameParam {
  deviceList?: (ModifyDeviceNameItem)[];
}
export interface ModifyDeviceNameItem {
  deviceSn?: string;
  deviceCallsign?: string;
}
export interface WorkspaceDeviceChange {
  deviceChanges?: (DeviceChange)[];
}
export interface DeviceChange {
  changeType?: string;
  changeDevices?: (string)[];
}
export interface DeviceTopoChange {
  gatewaySn?: string;
  devices?: (string)[];
}
export interface DockDeviceStatusResultList {
  list?: (DockStatusItemResult)[];
}
export interface DockStatusItemResult {
  sn?: string;
  onlineStatus?: boolean;
  updatedTime?: bigint | number;
  deviceModel?: DockStatusDeviceModelResult;
  properties?: DockStatusPropertiesResult;
}
export interface DockStatusDeviceModelResult {
  deviceClass?: string;
  key?: string;
  name?: string;
}
export interface DockStatusPropertiesResult {
  accTime?: number;
  acdcPowerInput?: number;
  airConditioner?: DockStatusAirConditionerResult;
  alternateLandPoint?: DockStatusAlternateLandPointResult;
  backupBattery?: DockStatusBackupBatteryResult;
  electricSupplyVoltage?: number;
  environmentTemperature?: number;
  humidity?: number;
  jobNumber?: number;
  networkState?: DockStatusNetworkStateResult;
  poeLinkStatus?: number;
  poePowerOutput?: number;
  positionState?: DockStatusPositionStateResult;
  rainfall?: number;
  temperature?: number;
  tiltAngle?: DockStatusTiltAngleResult;
  workingVoltage?: number;
}
export interface DockStatusAirConditionerResult {
  airConditionerState?: number;
  switchTime?: number;
}
export interface DockStatusAlternateLandPointResult {
  height?: number;
  isConfigured?: number;
  latitude?: number;
  longitude?: number;
  safeLandHeight?: number;
}
export interface DockStatusBackupBatteryResult {
  switchState?: number;
  temperature?: number;
  voltage?: number;
}
export interface DockStatusNetworkStateResult {
  quality?: number;
  rate?: number;
  type?: number;
}
export interface DockStatusPositionStateResult {
  gpsNumber?: number;
  isCalibration?: number;
  isFixed?: number;
  quality?: number;
  rtkNumber?: number;
}
export interface DockStatusTiltAngleResult {
  valid?: number;
  value?: number;
}
export interface DroneDeviceStatusResultList {
  list?: (DroneStatusItemResult)[];
}
export interface DroneStatusItemResult {
  sn?: string;
  onlineStatus?: boolean;
  updatedTime?: bigint | number;
  deviceModel?: DroneStatusDeviceModelResult;
  properties?: DroneStatusPropertiesResult;
}
export interface DroneStatusDeviceModelResult {
  deviceClass?: string;
  key?: string;
  name?: string;
}
export interface DroneStatusPropertiesResult {
  battery?: DroneStatusBatteryResult;
  distanceLimitStatus?: DroneStatusDistanceLimitStatusResult;
  heightLimit?: number;
  homeDistance?: number;
  homeLatitude?: number;
  homeLongitude?: number;
  horizontalSpeed?: number;
  lowBatteryWarningThreshold?: number;
  modeCode?: number;
  modeCodeReason?: number;
  nightLightsState?: number;
  obstacleAvoidance?: DroneStatusObstacleAvoidanceResult;
  positionState?: DroneStatusPositionStateResult;
  remainingPowerForReturnHome?: number;
  seriousLowBatteryWarningThreshold?: number;
  storage?: DroneStatusStorageResult;
  totalFlightDistance?: number;
  totalFlightSorties?: number;
  totalFlightTime?: number;
  verticalSpeed?: number;
}
export interface DroneStatusBatteryResult {
  batteries?: (DroneStatusBatteryItemResult)[];
  capacityPercent?: number;
  landingPower?: number;
  remainFlightTime?: number;
  remainJobTime?: number;
  returnHomePower?: number;
}
export interface DroneStatusBatteryItemResult {
  capacityPercent?: number;
  firmwareVersion?: string;
  highVoltageStorageDays?: number;
  index?: number;
  loopTimes?: number;
  sn?: string;
  subType?: number;
  temperature?: number;
  type?: number;
  voltage?: number;
}
export interface DroneStatusDistanceLimitStatusResult {
  distanceLimit?: number;
  isNearDistanceLimit?: number;
  state?: number;
}
export interface DroneStatusObstacleAvoidanceResult {
  downside?: number;
  horizon?: number;
  upside?: number;
}
export interface DroneStatusPositionStateResult {
  gpsNumber?: number;
  isFixed?: number;
  quality?: number;
  rtkNumber?: number;
}
export interface DroneStatusStorageResult {
  total?: bigint | number;
  used?: bigint | number;
}
export interface DockOnlineStatus {
  isOnline?: boolean;
}
export interface DroneOnlineStatus {
  isOnline?: boolean;
}
export interface CreateSelfDiagnosisParams {
  deviceSn?: string;
  type?: number;
  part?: number;
  index?: number;
  motorAction?: number;
  deviceTopo?: SelfDiagnosisDeviceTopoParams;
}
export interface SelfDiagnosisDeviceTopoParams {
  index?: string;
  hosts?: (SelfDiagnosisTopoNodeParams)[];
  parents?: (SelfDiagnosisTopoNodeParams)[];
  nodes?: (SelfDiagnosisTopoNodeParams)[];
  others?: (SelfDiagnosisTopoNodeParams)[];
  docks?: (SelfDiagnosisTopoNodeParams)[];
}
export interface SelfDiagnosisTopoNodeParams {
  sn?: string;
  type?: string;
  domain?: number;
  deviceModel?: string;
}
export interface OperateSelfDiagnosisParams {
  reportUuid?: string;
  reportCmdMethod?: string;
}
export interface GetSelfDiagnosisReportResults {
  reportUuid?: string;
  reportUserId?: string;
  reportUserOrganizationCallsign?: string;
  createTime?: bigint | number;
  completeMachineSn?: string;
  deviceSn?: string;
  deviceModelKey?: string;
  deviceOrganizationCallsign?: string;
  status?: string;
  resultCode?: number;
  bid?: string;
  part?: number;
  origin?: number;
  selfDiagnosticResult?: SelfDiagnosticResultData;
  deviceReportProgress?: DiagnosisDeviceReportProgressResult;
  qrCodeContent?: string;
  qrGuideText?: string;
}
export interface SelfDiagnosticResultData {
  high?: (DiagnosisMaterialItemResult)[];
  mid?: (DiagnosisMaterialItemResult)[];
  low?: (DiagnosisMaterialItemResult)[];
}
export interface DiagnosisMaterialItemResult {
  errorCodeList?: DiagnosisErrorCodeListResult;
  materialNum?: string;
  materialName?: string;
  materialProbability?: string;
  hmsTotal?: number;
}
export interface DiagnosisErrorCodeListResult {
  notice?: (DiagnosisErrorCodeItemResult)[];
  warning?: (DiagnosisErrorCodeItemResult)[];
  alert?: (DiagnosisErrorCodeItemResult)[];
}
export interface DiagnosisErrorCodeItemResult {
  errorCode?: string;
  errorCodeDescribe?: string;
  errorCodeDescribeEn?: string;
  level?: number;
}
export interface DiagnosisDeviceReportProgressResult {
  result?: number;
  sn?: string;
  status?: string;
  percent?: number;
  allDevice?: (DiagnosisDeviceProgressItemResult)[];
}
export interface DiagnosisDeviceProgressItemResult {
  sn?: string;
  status?: string;
  percent?: number;
}
export interface GetSelfDiagnosisReportListParams {
  page?: number;
  pageSize?: number;
  status?: (string)[];
  deviceSn?: string;
  reportTimeBegin?: string;
  reportTimeEnd?: string;
  part?: number;
  origin?: number;
  query?: string;
  reportUser?: (string)[];
  sortBy?: string;
  sortType?: string;
}
export interface GetSelfDiagnosisReportListResults {
  pagination?: CommonPaginationData;
  list?: (GetSelfDiagnosisReportResults)[];
}
export interface CommonPaginationData {
  page?: number;
  pageSize?: number;
  total?: number;
}
export interface DockAirConditionerStatusInfo {
  airConditionerState?: number;
  switchTime?: number;
}
export interface DockSupplementLightState {
  supplementLightState?: number;
}
export interface DockLocation {
  heading?: number;
  height?: number;
  latitude?: number;
  longitude?: number;
}
export interface DroneInDock {
  droneInDock?: number;
}
export interface DockCoverState {
  coverState?: number;
}
export interface DockDroneChargeState {
  state?: number;
  capacityPercent?: number;
}
export interface DockMeteorologicalInfo {
  temperature?: number;
  environmentTemperature?: number;
  humidity?: number;
  windSpeed?: number;
  rainfall?: number;
}
export interface DockBackupBatteryInfo {
  switchState?: number;
  voltage?: number;
  temperature?: number;
}
export interface DockMaintainStatusInfo {
  maintainStatusInfo?: (DockMaintainStatus)[];
}
export interface DockMaintainStatus {
  state?: number;
  lastMaintainType?: number;
  lastMaintainTime?: bigint | number;
  lastMaintainWorkSorties?: number;
}
export interface DockModeCode {
  modeCode?: number;
}
export interface FlightTaskStepCode {
  flighttaskStepCode?: number;
}
export interface DockSubDeviceInfoList {
  subDeviceInfoVec?: (DockSubDeviceInfo)[];
}
export interface DockSubDeviceInfo {
  deviceSn?: string;
  deviceModelKey?: string;
  deviceOnlineStatus?: number;
  devicePaired?: number;
}
export interface DockNetworkState {
  type?: number;
  quality?: number;
  rate?: number;
}
export interface DockMediaFileDetail {
  remainUpload?: number;
}
export interface DockWirelessLink {
  dongleNum?: number;
  linkState4g?: number;
  sdrLinkState?: number;
  linkWorkmode?: number;
  sdrQuality?: number;
  quality4g?: number;
  uavQuality4g?: number;
  gndQuality4g?: number;
  sdrFreqBand?: number;
  freqBand4g?: number;
}
export interface DockJobNumber {
  jobNumber?: number;
}
export interface DockPowerState {
  electricSupplyVoltage?: number;
  workingVoltage?: number;
  workingCurrent?: number;
}
export interface DockStorageState {
  total?: number;
  used?: number;
}
export interface DockFirstPowerOnTime {
  firstPowerOn?: string;
}
export interface DockAccTime {
  accTime?: number;
}
export interface DockAlternateLandPoint {
  isConfigured?: number;
  longitude?: number;
  latitude?: number;
  safeLandHeight?: number;
  height?: number;
}
export interface DockPositionState {
  isCalibration?: number;
  isFixed?: number;
  quality?: number;
  gpsNumber?: number;
  rtkNumber?: number;
}
export interface DockActivationTime {
  activationTime?: number;
}
export interface DockBatteryStoreMode {
  batteryStoreMode?: number;
}
export interface DockAlarmState {
  alarmState?: number;
}
export interface DockDroneBatteryMaintenanceInfo {
  maintenanceState?: number;
  maintenanceTimeLeft?: number;
  heatState?: number;
  batteries?: (BatteryBasicInfo)[];
}
export interface BatteryBasicInfo {
  index?: number;
  capacityPercent?: number;
  voltage?: number;
  temperature?: number;
}
export interface DockEmergencyStopState {
  emergencyStopState?: number;
}
export interface DockSilentMode {
  silentMode?: number;
}
export interface DockUserExperienceImprovement {
  userExperienceImprovement?: number;
}
export interface DockDrcState {
  drcState?: number;
}
export interface DockPutterState {
  putterState?: number;
}
export interface DockRelativeAlternateLandPoint {
  longitude?: number;
  latitude?: number;
  safeLandHeight?: number;
  status?: number;
}
export interface DockSelfConvergeCoordinate {
  height?: number;
  longitude?: number;
  latitude?: number;
}
export interface DockFirmwareInfo {
  firmwareVersion?: string;
  compatibleStatus?: number;
  firmwareUpgradeStatus?: number;
}
export interface DockDongleInfos {
  dongleInfos?: (DongleInfoItem)[];
}
export interface DongleInfoItem {
  dongleType?: bigint | number;
  eid?: string;
  esimActivateState?: bigint | number;
  esimInfos?: (EsimInfoItem)[];
  imei?: string;
  simCardState?: bigint | number;
  simSlot?: bigint | number;
  simInfo?: SimInfoItem;
  telecomOperator?: bigint | number;
}
export interface EsimInfoItem {
  enabled?: boolean;
  iccid?: string;
  telecomOperator?: bigint | number;
}
export interface SimInfoItem {
  iccid?: string;
  telecomOperator?: bigint | number;
}
export interface DockAirConditionerMode {
  airConditionerMode?: bigint | number;
}
export interface LinkStatus {
  ctrlLinkStatus?: number;
  dataLinkStatus?: number;
  liveLinkStatus?: number;
}
export interface RtcQualityTestParams {
  index?: number;
  length?: number;
  data?: string;
  diffTime?: number;
  timestamp?: number;
  isNeedAck?: boolean;
  isTestEnd?: boolean;
}
export interface DrcDelayInfo {
  stickDelay?: number;
  sdrCmdDelay?: number;
}
export interface DrcCountDownInfo {
  countDownType?: number;
  countDownTime?: number;
  canCancel?: boolean;
}
export interface AircraftBatteryInfo {
  batteries?: (BatteryInfo)[];
  capacityPercent?: number;
  landingPower?: number;
  remainFlightTime?: number;
  returnHomePower?: number;
}
export interface BatteryInfo {
  capacityPercent?: number;
  firmwareVersion?: string;
  highVoltageStorageDays?: number;
  index?: number;
  loopTimes?: number;
  sn?: string;
  subType?: number;
  temperature?: number;
  type?: number;
  voltage?: number;
}
export interface AircraftAttitude {
  attitudeHead?: number;
  attitudePitch?: number;
  attitudeRoll?: number;
}
export interface AircraftLocation {
  height?: number;
  elevation?: number;
  longitude?: number;
  latitude?: number;
}
export interface AircraftModeCode {
  modeCode?: number;
}
export interface AircraftWindSpeed {
  windDirection?: number;
  windSpeed?: number;
}
export interface FlightTaskException {
  uuid?: string;
  name?: string;
  sn?: string;
  taskType?: number;
  status?: number;
  progress?: number;
  exceptions?: (FlightTaskExceptionDetail)[];
  timestamp?: bigint | number;
}
export interface FlightTaskExceptionDetail {
  code?: number;
  message?: string;
  taskId?: number;
  happenAt?: string;
  sn?: string;
}
export interface AircraftControlCode {
  controlMode?: number;
}
export interface AircraftSpeed {
  horizontalSpeed?: number;
  verticalSpeed?: number;
}
export interface AircraftPayloadsCameraLiveviewWorldRegion {
  payloadsList?: Record<string, LiveviewWorldRegion>;
}
export interface AircraftPayloadsGimbalAttitude {
  payloadsGimbalAttitude?: (AircraftPayloadGimbalAttitude)[];
}
export interface AircraftPayloadGimbalAttitude {
  payloadIndex?: string;
  gimbalPitch?: number;
  gimbalRoll?: number;
  gimbalYaw?: number;
}
export interface AircraftPayloadsList {
  payloadsList?: (string)[];
}
export interface ControlRightsCloudControlStatus {
  sn?: string;
  reason?: string;
  controls?: (ControlRightsCloudControlStatusItem)[];
}
export interface ControlRightsCloudControlStatusItem {
  type?: string;
  key?: string;
  userId?: string;
  isLocked?: boolean;
  version?: number;
}
export interface ControlRightsDeviceControlStatus {
  sn?: string;
  reason?: string;
  controls?: (ControlRightsDeviceControlStatusItem)[];
}
export interface ControlRightsDeviceControlStatusItem {
  type?: string;
  key?: string;
  owner?: string;
  version?: number;
}
export interface FlightTasksMediaFileDisplayAvailable {
  uuid?: string;
  idxParentId?: number;
  fileType?: number;
  subFileType?: number;
  mediaFileId?: number;
  flightId?: string;
  sn?: string;
  mediaSource?: number;
  url?: string;
}
export interface AircraftPayloadsOsdInfoList {
  payloadsInfoList?: (AircraftPayloadsOsdInfo)[];
}
export interface AircraftPayloadsOsdInfo {
  payloadIndex?: string;
  gimbalPitch?: number;
  gimbalRoll?: number;
  gimbalYaw?: number;
  measureTargetAltitude?: number;
  measureTargetLongitude?: number;
  measureTargetLatitude?: number;
  measureTargetDistance?: number;
  measureTargetErrorState?: number;
  smartTrackPoints?: (SmartTrackPointInfo)[];
  zoomFactor?: number;
  thermalCurrentPaletteStyle?: number;
  thermalGainMode?: number;
  thermalGlobalTemperatureMin?: number;
  thermalGlobalTemperatureMax?: number;
  thermalIsothermState?: number;
  thermalIsothermLowerLimit?: number;
  thermalIsothermUpperLimit?: number;
  thermalSupportedPaletteStyles?: (number)[];
  controlSource?: string;
  firmwareVersion?: string;
  sn?: string;
}
export interface SmartTrackPointInfo {
  trackAltitude?: number;
  trackLatitude?: number;
  trackLongitude?: number;
  trackTargetMode?: number;
}
export interface DroneModeCodeReason {
  modeCodeReason?: bigint | number;
}
export interface DroneDongleInfos {
  dongleInfos?: (DongleInfoItem)[];
}
export interface DroneFlysafeDatabaseVersion {
  flysafeDatabaseVersion?: string;
}
export interface DroneWpmzVersion {
  wpmzVersion?: string;
}
export interface AircraftGear {
  gear?: number;
}
export interface AircraftHomeDistance {
  homeDistance?: number;
}
export interface AircraftPositionState {
  isFixed?: number;
  quality?: number;
  gpsNumber?: number;
  rtkNumber?: number;
}
export interface AircraftControlSource {
  controlSource?: string;
}
export interface AircraftLimitsInfo {
  heightLimit?: number;
  isNearHeightLimit?: number;
  isNearAreaLimit?: number;
  distanceLimitState?: number;
  distanceLimit?: number;
  isNearDistanceLimit?: number;
}
export interface AircraftBatteryWarningThresholds {
  lowBatteryWarningThreshold?: number;
  seriousLowBatteryWarningThreshold?: number;
}
export interface AircraftFirmwareStatus {
  firmwareVersion?: string;
  compatibleStatus?: number;
  firmwareUpgradeStatus?: number;
}
export interface AircraftTotalFlightInfo {
  totalFlightTime?: number;
  totalFlightDistance?: number;
  totalFlightSorties?: number;
}
export interface AircraftActivationTime {
  activationTime?: bigint | number;
}
export interface AircraftMaintainStatusInfo {
  maintainStatusInfo?: (AircraftMaintainStatus)[];
}
export interface AircraftMaintainStatus {
  state?: number;
  lastMaintainType?: number;
  lastMaintainTime?: bigint | number;
  lastMaintainFlightTime?: number;
  lastMaintainFlightSorties?: number;
}
export interface AircraftNightLightsState {
  nightLightsState?: number;
}
export interface AircraftObstacleAvoidanceState {
  horizon?: number;
  upside?: number;
  downside?: number;
}
export interface AircraftStorageInfo {
  total?: number;
  used?: number;
}
export interface AircraftTrackId {
  trackId?: string;
}
export interface AircraftComplianceInfo {
  ridState?: number;
  country?: string;
}
export interface AircraftPayloadsCamerasList {
  camerasList?: (AircraftPayloadCameraInfo)[];
}
export interface AircraftPayloadCameraInfo {
  payloadIndex?: string;
  cameraMode?: number;
  irMeteringMode?: number;
  irMeteringPoint?: CameraIrMeteringPoint;
  irZoomFactor?: number;
  liveviewWorldRegion?: CameraLiveviewWorldRegion;
  photoState?: number;
  photoStorageSettings?: (string)[];
  recordTime?: number;
  recordingState?: number;
  remainPhotoNum?: number;
  remainRecordDuration?: number;
  screenSplitEnable?: boolean;
  wideCalibrateFarthestFocusValue?: number;
  wideCalibrateNearestFocusValue?: number;
  wideExposureMode?: number;
  wideExposureValue?: number;
  wideFocusMode?: number;
  wideFocusState?: number;
  wideFocusValue?: number;
  wideIso?: number;
  wideMaxFocusValue?: number;
  wideMinFocusValue?: number;
  wideShutterSpeed?: number;
  zoomCalibrateFarthestFocusValue?: number;
  zoomCalibrateNearestFocusValue?: number;
  zoomExposureMode?: number;
  zoomExposureValue?: number;
  zoomFactor?: number;
  zoomFocusMode?: number;
  zoomFocusState?: number;
  zoomFocusValue?: number;
  zoomIso?: number;
  zoomMaxFocusValue?: number;
  zoomMinFocusValue?: number;
  zoomShutterSpeed?: number;
}
export interface CameraLiveviewWorldRegion {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}
export interface AircraftRcLostAction {
  rcLostAction?: number;
}
export interface AircraftRthInfo {
  rthMode?: number;
  rthAltitude?: number;
}
export interface AircraftHomeGeographicalInfo {
  homeLongitude?: number;
  homeLatitude?: number;
}
export interface AircraftCurrentRthMode {
  currentRthMode?: number;
}
export interface HsiInfo {
  aroundDistances?: (number)[];
  backEnable?: boolean;
  backWork?: boolean;
  downDistance?: number;
  downEnable?: boolean;
  downWork?: boolean;
  frontEnable?: boolean;
  frontWork?: boolean;
  horizontalEnable?: boolean;
  horizontalWork?: boolean;
  leftEnable?: boolean;
  leftWork?: boolean;
  rightEnable?: boolean;
  rightWork?: boolean;
  upDistance?: number;
  upEnable?: boolean;
  upWork?: boolean;
  verticalEnable?: boolean;
  verticalWork?: boolean;
}
export interface CreateElementParams {
  id?: string;
  source?: number;
  resource?: ElementResourceItem;
  name?: string;
  elementSource?: number;
  desc?: string;
}
export interface ElementResourceItem {
  content?: ElementResourceContent;
  type?: number;
  remark?: string;
}
export interface ElementResourceContent {
  type?: string;
  properties?: ElementProperties;
  geometry?: ElementGeometry;
  mediaResources?: ElementMediaResources;
}
export interface ElementProperties {
  color?: string;
  clampToGround?: boolean;
  is3d?: boolean;
  isTransparent?: boolean;
  fontSize?: number;
  icon?: number;
}
export interface ElementGeometry {
  type?: string;
  radius?: number;
  coordinates?: string;
  breadCrumbs?: string;
}
export interface ElementMediaResources {
  images?: (ElementMediaImage)[];
}
export interface ElementMediaImage {
  objectKey?: string;
  mediaFileId?: number;
  mediaFileUuid?: string;
}
export interface CreateElementResult {
  id?: string;
}
export interface UpdateElementParams {
  id?: string;
  name?: string | null;
  content?: ElementResourceContent | null;
  display?: number | null;
  remark?: string | null;
  status?: number | null;
  elevationLoadStatus?: number | null;
  userStatus?: number | null;
  targetLayerId?: string;
  orders?: (ElementResourceOrderItem)[];
}
export interface ElementResourceOrderItem {
  id?: string;
  order?: number;
}
export interface UpdateElementResult {
  id?: string;
}
export interface ListElementHierarchyParams {
  groupId?: string;
  pid?: string;
  isDistributed?: boolean | null;
  type?: number | null;
  elementUuid?: string | null;
  excludeCopy?: boolean;
}
export interface ListElementHierarchyResult {
  list?: (ElementGroupInfo)[];
}
export interface ElementGroupInfo {
  id?: string;
  name?: string;
  order?: number;
  isDistributed?: boolean;
  type?: number;
  isLock?: boolean;
  triState?: string;
  createTime?: bigint | number;
  pid?: string;
  elements?: (ElementItemInfo)[];
  children?: (ElementGroupInfo)[];
}
export interface ElementItemInfo {
  id?: string;
  name?: string;
  desc?: string;
  source?: number;
  order?: number;
  status?: number;
  display?: number;
  resource?: ElementResourceData;
  updateTime?: bigint | number;
  createTime?: bigint | number;
  elevationLoadStatus?: number;
  notify?: boolean;
}
export interface ElementResourceData {
  content?: ElementResourceContent;
  type?: number;
  userName?: string;
  userId?: string;
  remark?: string;
}
export interface SetElementVisibilityParams {
  id?: string;
  display?: number;
}
export interface SetElementVisibilityResult {
  id?: string;
}
export interface DeleteElementParams {
  id?: string;
  fromBatchDelete?: boolean;
}
export interface DeleteElementResult {
  id?: string;
}
export interface ElementCreateMsg {
  id?: string;
  groupId?: string;
  name?: string;
  display?: number;
}
export interface ElementUpdateMsg {
  id?: string;
  groupId?: string;
  name?: string;
  display?: number;
}
export interface ElementDeleteMsg {
  id?: string;
  groupId?: string;
}
export interface FirmwareReleaseNoteListResult {
  list?: (FirmwareReleaseNoteResult)[];
}
export interface FirmwareReleaseNoteResult {
  deviceModelKey?: string;
  lang?: string;
  productVersion?: string;
  releaseNote?: string;
  releasedTime?: string;
}
export interface FirmwareUpgradeParam {
  orgUuid?: string;
  devices?: (FirmwareUpgradeDeviceItem)[];
}
export interface FirmwareUpgradeDeviceItem {
  sn?: string;
  deviceModelKey?: string;
  firmwareUpgradeType?: number;
  productVersion?: string;
}
export interface FirmwareUpgradeResult {
  deviceCode?: number;
  devices?: (FirmwareUpgradeResponseDeviceItemResult)[];
  status?: string;
}
export interface FirmwareUpgradeResponseDeviceItemResult {
  firmwareUpgradeType?: number;
  productVersion?: string;
  sn?: string;
}
export interface FirmwareUpgradeProgressResult {
  list?: (FirmwareUpgradeProgressItem)[];
}
export interface FirmwareUpgradeProgressItem {
  associateDrone?: FirmwareUpgradeAssociateDrone;
  associateRelay?: FirmwareUpgradeAssociateRelay;
  deviceCode?: number;
  firmwareStatus?: number;
  ota?: FirmwareUpgradeProgressOTA;
  sn?: string;
  workingStatus?: number;
}
export interface FirmwareUpgradeAssociateDrone {
  firmwareStatus?: number;
  sn?: string;
  workingStatus?: number;
}
export interface FirmwareUpgradeAssociateRelay {
  firmwareStatus?: number;
  sn?: string;
}
export interface FirmwareUpgradeProgressOTA {
  progress?: FirmwareUpgradeProgressStep;
  status?: string;
}
export interface FirmwareUpgradeProgressStep {
  currentStep?: number;
  percent?: number;
}
export interface FirmwareListResult {
  list?: (FirmwareItemResult)[];
}
export interface FirmwareItemResult {
  id?: number;
  createdAt?: string;
  deviceModelKey?: string;
  status?: string;
  version?: string;
  desc?: string;
}
export interface FirmwareCompatibilityConfigResult {
  data?: (FirmwareCompatibilityConfigItemResult)[];
}
export interface FirmwareCompatibilityConfigItemResult {
  deviceModelKey?: string;
  compatibleVersions?: (string)[];
  rules?: FirmwareCompatibilityRulesResult;
}
export interface FirmwareCompatibilityRulesResult {
  minVersion?: string;
  maxVersion?: string;
}
export interface FirmwareStatusListResult {
  list?: (FirmwareStatusItem)[];
}
export interface FirmwareStatusItem {
  sn?: string;
  firmwareVersion?: string;
  firmwareStatus?: number;
  deviceModelKey?: string;
  services?: FirmwareService;
}
export interface FirmwareService {
  bid?: string;
  status?: string;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  deviceCode?: number;
  progress?: FirmwareServiceProgress;
  data?: FirmwareServiceData;
}
export interface FirmwareServiceProgress {
  percent?: number;
  currentStep?: number;
}
export interface FirmwareServiceData {
  devices?: (FirmwareServiceDevice)[];
}
export interface FirmwareServiceDevice {
  sn?: string;
  firmwareUpgradeType?: number;
  productVersion?: string;
}
export interface FirmwareInfoParam {
  deviceModelKey?: string;
  version?: string;
  desc?: string;
  objectKey?: string;
  md5?: string;
}
export interface DeviceOtaProgress {
  bid?: string;
  timestamp?: bigint | number;
  status?: string;
  result?: number;
  progress?: DeviceOtaProgressInfo;
}
export interface DeviceOtaProgressInfo {
  percent?: number;
  currentStep?: number;
  ext?: string;
}
export interface FlashLedConfigList {
  configs?: (FlashLedConfig)[];
}
export interface FlashLedConfig {
  id?: string;
  name?: string;
  flashSegments?: (FlashLedSegment)[];
}
export interface FlashLedSegment {
  color?: number;
  count?: number;
  on?: number;
  off?: number;
  interval?: number;
}
export interface FlashLedConfigParams {
  name?: string;
  flashSegments?: (FlashLedSegment)[];
}
export interface StickControlData {
  roll?: number;
  pitch?: number;
  throttle?: number;
  yaw?: number;
  gimbalPitch?: number;
}
export interface FlashLedParams {
  on?: number;
  patternUuid?: string;
  patternName?: string;
  patterns?: (FlashLedPatternInfo)[];
}
export interface FlashLedPatternInfo {
  color?: number;
  period?: number;
  brightness?: number;
}
export interface FlashLedStateInfo {
  on?: number;
  patternUuid?: string;
  patternName?: string;
  patterns?: (FlashLedPatternInfo)[];
}
export interface CameraLookAtParams {
  payloadIndex?: string;
  locked?: boolean;
  height?: number;
  latitude?: number;
  longitude?: number;
}
export interface DrcOsdInfo {
  attitudeHead?: number;
  height?: number;
  latitude?: number;
  longitude?: number;
  speedX?: number;
  speedY?: number;
  speedZ?: number;
  ultrasonicHeight?: number;
  horizontalSpeed?: number;
  verticalSpeed?: number;
  homeDistance?: number;
  windDirection?: number;
  windSpeed?: number;
  elevation?: number;
  gimbalPitch?: number;
  gimbalYaw?: number;
  gimbalRoll?: number;
}
export interface DrcBatteriesInfo {
  batteries?: (DrcBatteryItem)[];
  capacityPercent?: number;
  landingPower?: number;
  remainFlightTime?: number;
  returnHomePower?: number;
  remainJobTime?: number;
  lowBatteryWarningThreshold?: number;
  seriousLowBatteryWarningThreshold?: number;
}
export interface DrcBatteryItem {
  capacityPercent?: number;
  firmwareVersion?: string;
  highVoltageStorageDays?: number;
  index?: number;
  loopTimes?: number;
  sn?: string;
  temperature?: number;
  voltage?: number;
}
export interface DrcParachuteInfo {
  parachuteFirmwareVersion?: string;
  parachuteIsFired?: number;
  parachuteOnFireStatus?: number;
  parachuteType?: number;
  parachuteSn?: string;
  parachuteIsAbnormal?: number;
}
export interface FlightSmartPlanModeResult {
  settings?: FlightSmartPlanSettings;
  deviceShadowSync?: FlightSafeSyncResult;
}
export interface FlightSmartPlanSettings {
  smartPlanningMode?: number;
}
export interface FlightSafeSyncResult {
  status?: string;
  results?: (FlightSafeSyncField)[];
}
export interface FlightSafeSyncField {
  field?: string;
  synced?: boolean;
}
export interface FlightOutOfControlActionResult {
  settings?: FlightOutOfControlSettings;
  deviceShadowSync?: FlightSafeSyncResult;
}
export interface FlightOutOfControlSettings {
  outOfControlAction?: string;
}
export interface FlightCommanderHeightResult {
  settings?: FlightCommanderHeightSetting;
  deviceShadowSync?: FlightSafeSyncResult;
}
export interface FlightCommanderHeightSetting {
  commanderFlightHeight?: number;
}
export interface FlightRthAltitudeResult {
  settings?: FlightRthAltitudeSetting;
  deviceShadowSync?: FlightSafeSyncResult;
}
export interface FlightRthAltitudeSetting {
  rthAltitude?: number;
}
export interface WaylineTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: WaylineTaskData;
}
export interface WaylineTaskData {
  name?: string;
  uuid?: string;
  taskType?: number;
  status?: number;
  sn?: string;
  landingDockSn?: string;
  waylineUuid?: string;
  waylinePrecisionType?: number;
  waylineDuration?: number;
  waylineSegmentIndexes?: (number)[];
  totalWaypoints?: number;
  currentWaypointIndex?: number;
  bid?: string;
  beginAt?: string;
  endAt?: string;
  runAt?: string;
  completedAt?: string;
  outOfControlActionInFlight?: number;
  rthAltitude?: number;
  rthMode?: number;
  minBatteryCapacity?: number;
  tags?: (string)[];
  cloudToCloudId?: string;
  breakPoint?: WaylineBreakPoint;
  isBreakPointResume?: boolean;
  mediaUploadStatus?: number;
  fastReconstruction?: boolean;
  deviceType?: number;
  obstacles?: (WaylineObstacle)[];
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}
export interface WaylineBreakPoint {
  index?: number;
  state?: number;
  progress?: number;
  waylineId?: number;
  breakReason?: number;
  latitude?: number;
  longitude?: number;
  height?: number;
  attitudeHead?: number;
}
export interface WaylineObstacle {
  id?: number;
  type?: number;
  timestamp?: bigint | number;
  latitude?: number;
  longitude?: number;
  height?: number;
  waylineId?: number;
  waypointIndex?: number;
}
export interface FlightTaskListParams {
  page?: number;
  pageSize?: number;
  sn?: (string)[];
  beginAt?: string;
  endAt?: string;
  name?: string;
  status?: (number)[];
  taskType?: number;
  mediaUploadType?: number;
}
export interface FlightTaskListResult {
  list?: (TaskDetail)[];
  pagination?: PaginationInfo;
}
export interface TaskDetail {
  uuid?: string;
  name?: string;
  taskType?: number;
  status?: number;
  sn?: string;
  landingDockSn?: string;
  waylineUuid?: string;
  beginAt?: string;
  endAt?: string;
  outOfControlActionInFlight?: number;
  rthAltitude?: number;
  rthMode?: number;
  minBatteryCapacity?: number;
  waylinePrecisionType?: number;
  waylineSegmentIndexes?: (number)[];
  currentWaypointIndex?: number;
  totalWaypoints?: number;
  timeZone?: string;
  deviceType?: number;
  bid?: string;
  breakPoint?: WaylineBreakPoint;
  completedAt?: string;
  createdAt?: string;
  deletedAt?: string;
  isBreakPointResume?: boolean;
  mediaUploadStatus?: number;
  obstacles?: (WaylineObstacle)[];
  runAt?: string;
  tags?: (string)[];
  updatedAt?: string;
  waylineDuration?: number;
}
export interface PaginationInfo {
  page?: number;
  pageSize?: number;
  total?: number;
}
export interface GetCommandTaskListParams {
  page?: number;
  pageSize?: number;
  sn?: string;
  droneSn?: string;
  beginAt?: bigint | number;
  endAt?: bigint | number;
  status?: (number)[];
}
export interface GetCommandTaskListResults {
  list?: (CommandTaskListItemData)[];
  pagination?: PaginationInfo;
}
export interface CommandTaskListItemData {
  uuid?: string;
  sn?: string;
  droneSn?: string;
  status?: number;
  errCode?: number;
  takeoffMode?: string;
  securityTakeoffHeight?: number;
  maxSpeed?: number;
  rthAltitude?: number;
  createdAt?: string;
  userId?: string;
}
export interface GetFlightTaskTrackParams {
  taskUuid?: string;
}
export interface GetFlightTaskTrackResults {
  uuid?: string;
  runAt?: string;
  completedAt?: string;
  name?: string;
  status?: number;
  waylineUuid?: string;
  track?: FlightTrackInfo;
}
export interface FlightTrackInfo {
  trackId?: string;
  droneSn?: string;
  flightDistance?: number;
  flightDuration?: number;
  points?: (FlightTrackPoint)[];
}
export interface FlightTrackPoint {
  timestamp?: bigint | number;
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface CreateTaskReq {
  name?: string;
  sn?: string;
  taskType?: number;
  timeZone?: string;
  waylineUuid?: string;
  outOfControlActionInFlight?: number;
  rthAltitude?: number;
  rthMode?: number;
  beginAt?: bigint | number;
  endAt?: bigint | number;
  deviceType?: number;
  landingDockSn?: string;
  minBatteryCapacity?: number;
  waylinePrecisionType?: number;
  waylineSegmentIndexes?: (number)[];
  waylineDuration?: number;
  uuid?: string;
  tags?: (string)[];
  isBreakPointResume?: boolean;
  breakPoint?: WaylineBreakPoint;
  signalType?: number;
  resumableStatus?: string;
}
export interface CreateTaskResp {
  uuid?: string;
  waylineValidityCheckCodes?: (number)[];
}
export interface EditTaskReq {
  uuid?: string;
  name?: string;
  taskType?: number;
  timeZone?: string;
  beginAt?: bigint | number;
  endAt?: bigint | number;
  sn?: string;
  landingDockSn?: string;
  waylineUuid?: string;
  waylineSegmentIndexes?: (number)[];
  waylinePrecisionType?: number;
  outOfControlActionInFlight?: number;
  rthAltitude?: number;
  rthMode?: number;
  minBatteryCapacity?: number;
  isBreakPointResume?: boolean;
  tags?: (string)[];
  breakPoint?: WaylineBreakPoint;
}
export interface BatchUpdateStatusReq {
  taskUuids?: (string)[];
  status?: number;
}
export interface DeviceRecommendationReq {
  sn?: (string)[];
  deviceModelKeys?: (string)[];
  strategyId?: number;
  prjUuid?: string;
  waylineUuid?: string;
  waylineHeightType?: number;
  flyToPosition?: DeviceRecommendationPosition;
  waylineStartPosition?: DeviceRecommendationPosition;
  waylineEndPosition?: DeviceRecommendationPosition;
}
export interface DeviceRecommendationPosition {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface DeviceRecommendationResp {
  devices?: (RecommendedDevice)[];
}
export interface RecommendedDevice {
  droneSn?: string;
  gatewaySn?: string;
  distance?: number;
  matched?: boolean;
}
export interface GetTCAInfosResp {
  tcas?: (TCAInfo)[];
}
export interface TCAInfo {
  centerSn?: string;
  dataJson?: string;
}
export interface StartRoamingParams {
  droneSn?: string;
  flightId?: string;
  sourceTaskType?: number;
}
export interface SetRoamingStationSnParams {
  droneSn?: string;
  stationSns?: (string)[];
}
export interface SetRoamingStationSnResult {
  results?: (RoamingStationSnResult)[];
}
export interface RoamingStationSnResult {
  stationSn?: string;
  success?: boolean;
  failReason?: number;
}
export interface GetInFlightTaskToposResult {
  list?: (InFlightTaskTopoItem)[];
}
export interface InFlightTaskTopoItem {
  droneSn?: string;
  flightId?: string;
  takeoffSn?: string;
}
export interface TaskTopoChangedEvent {
  droneSn?: string;
  flightId?: string;
  takeoffSn?: string;
}
export interface ExportFlightRecordsRequestParams {
  contentType?: string;
  fileType?: (string)[];
  fileName?: string;
  flightTaskIds?: (string)[];
  metrics?: (string)[];
  timeZone?: string;
  locale?: string;
}
export interface ExportFlightRecordsResults {
  exportId?: string;
}
export interface GetExportFlightRecordsProgressParams {
  contentType?: string;
  status?: number;
  sort?: string;
  page?: number;
  pageSize?: number;
  exportId?: string;
}
export interface GetExportFlightRecordsProgressResults {
  pagination?: CommonPaginationData;
  list?: (FlightRecordExportProgressItemData)[];
}
export interface FlightRecordExportProgressItemData {
  id?: bigint | number;
  exportId?: string;
  createdAt?: string;
  contentType?: string;
  status?: number;
  progress?: number;
  failedReasonCode?: number;
  objectKey?: string;
  fileName?: string;
  userId?: string;
  prjUuid?: string;
  fileType?: (string)[];
  downloadUrl?: string;
}
export interface FlyToPointParams {
  latitude?: number;
  longitude?: number;
  height?: number;
  maxSpeed?: number;
}
export interface FlyToUpdateTargetPointsParams {
  flyToId?: string;
  startPoint?: FlyToTargetPoint;
  points?: (FlyToTargetPoint)[];
  maxSpeed?: number;
}
export interface FlyToTargetPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface FlyToTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: FlyToTaskData;
}
export interface FlyToTaskData {
  id?: number;
  uuid?: string;
  prjUuid?: string;
  sn?: string;
  droneSn?: string;
  userId?: string;
  seqNo?: number;
  flightTaskUuid?: string;
  flightTaskType?: number;
  status?: number;
  errCode?: number;
  wayPointIndex?: number;
  wayPoints?: (FlyToWayPoint)[];
  plannedPathPoints?: (FlyToWayPoint)[];
  remainingDistance?: number;
  remainingTime?: number;
}
export interface FlyToWayPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface FlyToDroneSelfPlanPath {
  flyToId?: string;
  sn?: string;
  timestamp?: bigint | number;
  plannedPathPoints?: (FlyToDroneSelfPlanPathPoint)[];
  remainingDistance?: number;
  remainingTime?: number;
}
export interface FlyToDroneSelfPlanPathPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface FlyToPointProgress {
  bid?: string;
  tid?: string;
  timestamp?: bigint | number;
  flyToId?: string;
  flightId?: string;
  taskSeq?: number;
  sn?: string;
  status?: string;
  result?: number;
  waypointIndex?: number;
}
export interface HistoryHmsDataParam {
  snList?: (string)[];
  createTimeBegin?: bigint | number;
  createTimeEnd?: bigint | number;
  pageSize?: number;
  pageNum?: number;
}
export interface HistoryHmsDataResult {
  pagination?: HistoryHmsDataResultPagination;
  list?: (HistoryHmsDataResultItem)[];
}
export interface HistoryHmsDataResultPagination {
  pageNum?: number;
  pageSize?: number;
  total?: number;
}
export interface HistoryHmsDataResultItem {
  Id?: string;
  bid?: string;
  tid?: string;
  level?: number;
  module?: number;
  message?: string;
  status?: number;
  code?: string;
  deviceDataCreateTime?: bigint | number;
  deviceDataUpdateTime?: bigint | number;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  args?: HistoryHmsDataResultArgs;
  deviceType?: string;
  domainType?: string;
  imminent?: number;
  inTheSky?: number;
  jointKey?: string;
  statusKey?: string;
  sn?: string;
}
export interface HistoryHmsDataResultArgs {
  alarmInfo?: number;
  componentIndex?: number;
  createTimestamp?: bigint | number;
  deviceId?: string;
  displayScene?: number;
  ignore?: number;
  senderHostId?: string;
  sensorIndex?: number;
}
export interface CreateInFlightWaylineTaskParams {
  waylineUuid?: string;
  rthAltitude?: number;
  waylinePrecisionType?: number;
  rthMode?: number;
  outOfControlAction?: number;
  exitWaylineWhenRcLost?: number;
  waylineDuration?: number;
  waylineLength?: number;
  taskName?: string;
  fastReconstruction?: number;
}
export interface CreateInFlightWaylineTaskResult {
  flightTaskId?: string;
  inFlightWaylineTaskId?: string;
}
export interface ActiveInFlightWaylineTaskInfo {
  flightId?: string;
  flightType?: number;
  sn?: string;
  inFlightTask?: InFlightWaylineTaskDetail;
  flightTaskData?: string;
}
export interface InFlightWaylineTaskDetail {
  uuid?: string;
  userId?: string;
  status?: number;
  waylineId?: string;
  errCode?: number;
  wayPointIndex?: number;
  progressPercent?: number;
  waylineDuration?: number;
  waylineLength?: number;
  taskName?: string;
}
export interface InFlightWaylineProgress {
  inFlightWaylineId?: string;
  percent?: number;
  status?: number;
  result?: number;
  gatewaySn?: string;
  wayPointIndex?: number;
  waylineDuration?: number;
  waylineLength?: number;
  taskName?: string;
  timestamp?: bigint | number;
}
export interface AudienceCountGroup {
  level1Group?: string;
  level2Group?: string;
}
export interface DeviceAudienceCountItem {
  sn?: string;
  count?: number;
}
export interface DockLiveStatus {
  liveStatus?: (LiveStatusItem)[];
}
export interface LiveStatusItem {
  videoId?: string;
  videoType?: string;
  videoQuality?: bigint | number;
  status?: bigint | number;
  errorStatus?: bigint | number;
}
export interface DockLiveCapacity {
  availableVideoNumber?: bigint | number;
  coexistVideoNumberMax?: bigint | number;
  deviceList?: (LiveCapacityDevice)[];
}
export interface LiveCapacityDevice {
  sn?: string;
  availableVideoNumber?: bigint | number;
  coexistVideoNumberMax?: bigint | number;
  cameraList?: (LiveCapacityCamera)[];
}
export interface LiveCapacityCamera {
  cameraIndex?: string;
  availableVideoNumber?: bigint | number;
  coexistVideoNumberMax?: bigint | number;
  videoList?: (LiveCapacityVideo)[];
}
export interface LiveCapacityVideo {
  videoIndex?: string;
  videoType?: string;
  switchableVideoTypes?: (string)[];
}
export interface LiveRecordItem {
  bid?: string;
  sn?: string;
  state?: number;
  camera?: string;
  createdBy?: string;
  duration?: bigint | number;
}
export interface LiveRecordStateInfo {
  bid?: string;
  sn?: string;
  camera?: string;
  video?: string;
  state?: number;
  createdBy?: string;
  duration?: number;
  createTime?: bigint | number;
}
export interface LiveStreamStartResult {
  expireTs?: string;
  urlType?: string;
  url?: string;
  publishUid?: string;
  providerUrl?: string;
}
export interface FrameInfo {
  isKeyFrame?: boolean;
}
export interface AiSeiInfo {
  targets?: (AiDetectionTarget)[];
}
export interface AiDetectionTarget {
  targetId?: number;
  targetType?: number;
  targetState?: number;
  targetCx?: number;
  targetCy?: number;
  targetW?: number;
  targetH?: number;
  targetDistance?: bigint | number;
}
export interface ArSeiInfo {
  cameraYaw?: number;
  cameraPitch?: number;
  cameraRoll?: number;
  cameraPosX?: number;
  cameraPosY?: number;
  cameraPosZ?: number;
  latitude?: number;
  longitude?: number;
  gndOriginZ?: number;
  altitude?: number;
}
export interface FovSeiInfo {
  fovHorizontal?: bigint | number;
  fovVertical?: bigint | number;
  curActualFocalLength?: bigint | number;
}
export interface AssistantSeiInfo {
  isAutoDirection?: boolean;
  direction?: number;
}
export interface EisSeiInfo {
  version?: number;
  leftTop?: CamCropPos;
  rightTop?: CamCropPos;
  rightBottom?: CamCropPos;
  leftBottom?: CamCropPos;
}
export interface CamCropPos {
  x?: number;
  y?: number;
}
export interface LiveQualitySettingParams {
  sn?: string;
  camera?: string;
  video?: string;
  videoQuality?: number;
}
export interface LiveSyncCreateParams {
  converterName?: string;
  sn?: string;
  cameraIndex?: string;
  videoType?: string;
  videoQuality?: number;
  schema?: string;
  schemaOption?: LiveSyncSchemaOption;
}
export interface LiveSyncSchemaOption {
  serverId?: string;
  serverIp?: string;
  serverPort?: string;
  devicePassword?: string;
  localPort?: string;
  deviceId?: string;
  localChannel?: string;
  url?: string;
  provider?: string;
  volcUserId?: string;
  rtspUrl?: string;
  username?: string;
  password?: string;
  enableTs?: boolean;
}
export interface LiveSyncCreateResult {
  item?: LiveSyncItem;
  limit?: number;
  hasLimit?: boolean;
}
export interface LiveSyncItem {
  uuid?: string;
  status?: number;
  orgUuid?: string;
  sn?: string;
  cameraIndex?: string;
  name?: string;
  schema?: string;
  schemaOption?: LiveSyncSchemaOption;
  deviceName?: string;
  deviceOnline?: boolean;
  deviceModelKey?: string;
  isAirport?: boolean;
  videoType?: string;
  videoQuality?: number;
  region?: string;
  enable?: boolean;
  errMsg?: string;
  deviceType?: string;
}
export interface LiveSyncUpdateParams {
  id?: string;
  setEnable?: boolean;
  enable?: boolean;
  setSchema?: boolean;
  schema?: string;
  setSchemaOption?: boolean;
  schemaOption?: LiveSyncSchemaOption;
  setConverterName?: boolean;
  converterName?: string;
  setSn?: boolean;
  sn?: string;
  setCameraIndex?: boolean;
  cameraIndex?: string;
  setVideoType?: boolean;
  videoType?: string;
  setVideoQuality?: boolean;
  videoQuality?: number;
}
export interface LiveSyncListParams {
  page?: number;
  size?: number;
  setSn?: boolean;
  sn?: string;
  setSchema?: boolean;
  schema?: string;
  setEnable?: boolean;
  enable?: boolean;
}
export interface LiveSyncListResult {
  page?: number;
  size?: number;
  total?: bigint | number;
  list?: (LiveSyncItem)[];
}
export interface LiveSyncDevicesV2Result {
  total?: bigint | number;
  list?: (LiveSyncDeviceItemV2)[];
}
export interface LiveSyncDeviceItemV2 {
  gateway?: LiveSyncDeviceV2;
  hosts?: (LiveSyncDeviceV2)[];
}
export interface LiveSyncDeviceV2 {
  sn?: string;
  name?: string;
  deviceModelKey?: string;
  deviceType?: string;
  cameraCapacity?: (LiveSyncCameraCapacity)[];
}
export interface LiveSyncCameraCapacity {
  cameraIndex?: string;
  videosList?: (LiveSyncVideoCapacity)[];
}
export interface LiveSyncVideoCapacity {
  videoType?: string;
  videoIndex?: string;
}
export interface LiveSyncSummaryResult {
  total?: bigint | number;
  enableCnt?: bigint | number;
}
export interface DeviceLogListResult {
  files?: (DeviceLogListResultFileItem)[];
}
export interface DeviceLogListResultFileItem {
  deviceSn?: string;
  module?: string;
  result?: number;
  list?: (DeviceLogListResultLogItem)[];
  ObjectKey?: string;
  logType?: number;
  responsibilityLogType?: number;
}
export interface DeviceLogListResultLogItem {
  bootIndex?: number;
  startTime?: bigint | number;
  endTime?: bigint | number;
  size?: bigint | number;
  md5?: string;
}
export interface CreateDeviceLogReportRequestParam {
  reportInformation?: string;
  errorStartTime?: bigint | number;
  deviceTopo?: DeviceLogReportDeviceTopoParam;
  reportContactInformation?: DeviceLogReportContactInformationParam;
  appendixFiles?: (string)[];
  logList?: (DeviceLogReportLogListItemParam)[];
  domains?: (DeviceLogReportDomainItemParam)[];
  isCrashed?: boolean;
}
export interface DeviceLogReportDeviceTopoParam {
  parents?: (DeviceLogReportDeviceTopoItemParam)[];
  hosts?: (DeviceLogReportDeviceTopoItemParam)[];
}
export interface DeviceLogReportDeviceTopoItemParam {
  deviceModelKey?: string;
  sn?: string;
}
export interface DeviceLogReportContactInformationParam {
  email?: string;
  phone?: string;
}
export interface DeviceLogReportLogListItemParam {
  deviceSn?: string;
  list?: (DeviceLogReportLogItemParam)[];
  module?: string;
}
export interface DeviceLogReportLogItemParam {
  bootIndex?: number;
  startTime?: bigint | number;
  endTime?: bigint | number;
  size?: bigint | number;
  md5?: string;
}
export interface DeviceLogReportDomainItemParam {
  key?: bigint | number;
  value?: string;
}
export interface CreateDeviceLogReportResult {
  trackNumber?: string;
  reportUuid?: string;
  errorLogList?: string;
  creatDeviceJobData?: CreateDeviceJobDataResult;
}
export interface CreateDeviceJobDataResult {
  bid?: string;
  sn?: string;
  bizCode?: string;
  status?: string;
  result?: number;
  progress?: CreateDeviceJobProgressResult;
  serviceIdentifier?: string;
}
export interface CreateDeviceJobProgressResult {
  percent?: number;
  currentStep?: number;
  ext?: string;
}
export interface LogReportListResult {
  pagination?: LogReportListResultPagination;
  list?: (LogReportListResultItem)[];
}
export interface LogReportListResultPagination {
  page?: number;
  pageSize?: number;
  total?: number;
}
export interface LogReportListResultItem {
  reportUuid?: string;
  reportTime?: bigint | number;
  reportUserId?: string;
  reportUserOrganizationCallsign?: string;
  deviceTopo?: LogReportListResultDeviceTopo;
  reportInformation?: string;
  trackNumber?: string;
  errorStartTime?: bigint | number;
  appendixFiles?: LogReportListResultAppendixFiles;
  deviceLogs?: LogReportListResultDeviceLogs;
  deviceUploadFiles?: LogReportListResultDeviceUploadFiles;
  status?: string;
  reportContactInformation?: LogReportListResultContactInformation;
  bid?: string;
  deviceReportFeedback?: string;
  readStatus?: number;
  url?: string;
}
export interface LogReportListResultDeviceTopo {
  hosts?: (LogReportListResultDeviceTopoItem)[];
  parents?: (LogReportListResultDeviceTopoItem)[];
}
export interface LogReportListResultDeviceTopoItem {
  sn?: string;
  deviceModelKey?: string;
  deviceOrganizationCallsign?: string;
}
export interface LogReportListResultAppendixFiles {
  files?: (LogReportListResultAppendixFileItem)[];
}
export interface LogReportListResultAppendixFileItem {
  fileName?: string;
  fileObjectKey?: string;
  fileSize?: bigint | number;
}
export interface LogReportListResultDeviceLogs {
  files?: (LogReportListResultDeviceLog)[];
}
export interface LogReportListResultDeviceLog {
  deviceSn?: string;
  module?: string;
  result?: number;
  list?: (LogReportListResultDeviceLogItemList)[];
  objectKey?: string;
}
export interface LogReportListResultDeviceLogItemList {
  bootIndex?: number;
  startTime?: bigint | number;
  endTime?: bigint | number;
  size?: bigint | number;
}
export interface LogReportListResultDeviceUploadFiles {
  files?: (LogReportListResultDeviceUploadFilesItem)[];
}
export interface LogReportListResultDeviceUploadFilesItem {
  module?: string;
  size?: bigint | number;
  deviceSn?: string;
  key?: string;
  fingerprint?: string;
  progress?: LogReportListResultDeviceUploadFilesItemProgress;
  downloadUrl?: string;
}
export interface LogReportListResultDeviceUploadFilesItemProgress {
  currentStep?: number;
  totalStep?: number;
  progress?: number;
  finishTime?: bigint | number;
  uploadRate?: number;
  result?: number;
  status?: string;
}
export interface LogReportListResultContactInformation {
  email?: string;
  phone?: string;
}
export interface DeviceFileUploadProgress {
  bid?: string;
  timestamp?: bigint | number;
  status?: string;
  result?: number;
  files?: (DeviceFileUploadFileInfo)[];
}
export interface DeviceFileUploadFileInfo {
  deviceSn?: string;
  key?: string;
  module?: string;
  progress?: DeviceFileUploadFileProgress;
  size?: bigint | number;
}
export interface DeviceFileUploadFileProgress {
  percent?: number;
  currentStep?: number;
  status?: string;
  totalStep?: number;
  uploadRate?: bigint | number;
}
export interface GetDeviceRepairConfigParams {
  deviceSns?: (string)[];
}
export interface DeviceRepairConfigResults {
  data?: (DeviceRepairConfig)[];
}
export interface DeviceRepairConfig {
  deviceSn?: string;
  supportRepair?: boolean;
  allowedSourceTypes?: (number)[];
  repairGuidance?: RepairGuidance;
}
export interface RepairGuidance {
  redirectUrl?: string;
  description?: string;
}
export interface CreateMaintenanceOrderParams {
  faultOccurrenceTime?: string;
  deviceList?: (MaintenanceOrderDeviceItemParams)[];
  faultDescription?: string;
  attachments?: (MaintenanceOrderAttachmentsParams)[];
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactAddress?: MaintenanceOrderContactAddressParams;
  expectedServiceTime?: string;
  reportUuid?: string;
  deviceTopo?: MaintenanceOrderDeviceTopoParams;
  logList?: (MaintenanceOrderLogInfoParams)[];
}
export interface MaintenanceOrderDeviceItemParams {
  deviceModelKey?: string;
  deviceSn?: string;
  module?: string;
  nameplateSn?: string;
  sourceType?: number;
  sourceRefId?: string;
}
export interface MaintenanceOrderAttachmentsParams {
  fileName?: string;
  fileKey?: string;
  fileSize?: bigint | number;
}
export interface MaintenanceOrderContactAddressParams {
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  detail?: string;
}
export interface MaintenanceOrderDeviceTopoParams {
  hosts?: (MaintenanceOrderTopoNodeParams)[];
  parents?: (MaintenanceOrderTopoNodeParams)[];
  nodes?: (MaintenanceOrderTopoNodeParams)[];
}
export interface MaintenanceOrderTopoNodeParams {
  sn?: string;
  deviceModelKey?: string;
  onlineStatus?: boolean;
}
export interface MaintenanceOrderLogInfoParams {
  deviceSn?: string;
  module?: string;
  objectKey?: string;
}
export interface CreateMaintenanceOrderResults {
  success?: boolean;
  generatedOrders?: (GeneratedOrderInfoResult)[];
}
export interface GeneratedOrderInfoResult {
  orderNumber?: string;
  status?: number;
  ruiyunOrderNumber?: string;
}
export interface MaintenanceOrderDetailResults {
  orderNumber?: string;
  organizationUuid?: string;
  creatorId?: string;
  creatorName?: string;
  sourceType?: number;
  sourceTypeText?: string;
  status?: number;
  statusText?: string;
  faultDescription?: string;
  faultOccurrenceTime?: string;
  expectedServiceTime?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactAddressFull?: MaintenanceOrderFullContactAddress;
  createdAt?: string;
  updatedAt?: string;
  submissionTime?: string;
  acceptedTime?: string;
  completedTime?: string;
  ruiyunOrderNumber?: string;
  ruiyunSyncStatus?: string;
  deviceSn?: string;
  deviceModelKey?: string;
  module?: string;
  nameplateSn?: string;
  diagnosticId?: string;
  deviceReportId?: string;
  attachments?: (MaintenanceOrderDetailAttachments)[];
  statusHistory?: (MaintenanceOrderStatusHistory)[];
  repairInfo?: MaintenanceOrderRepairInfo;
  logReport?: MaintenanceOrderLogReport;
}
export interface MaintenanceOrderFullContactAddress {
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  detail?: string;
}
export interface MaintenanceOrderDetailAttachments {
  id?: bigint | number;
  fileName?: string;
  objectKey?: string;
  fileSize?: bigint | number;
  uploadTime?: string;
  createdAt?: string;
}
export interface MaintenanceOrderStatusHistory {
  fromStatus?: number;
  toStatus?: number;
  changeTime?: string;
  operatorId?: string;
  operatorName?: string;
  remark?: string;
}
export interface MaintenanceOrderRepairInfo {
  assignee?: string;
  assigneePhone?: string;
  repairStartTime?: string;
}
export interface MaintenanceOrderLogReport {
  reportUuid?: string;
  trackNumber?: string;
  status?: string;
}
export interface GetMaintenanceOrdersListParams {
  page?: number;
  pageSize?: number;
  orderNumber?: string;
  status?: string;
  initiatedFrom?: string;
  deviceSn?: string;
  creatorIds?: (string)[];
  keyWord?: string;
  createdAtStart?: string;
  createdAtEnd?: string;
  sortColumn?: string;
  sortType?: string;
}
export interface MaintenanceOrdersListResults {
  pagination?: CommonPaginationData;
  list?: (MaintenanceOrdersListItem)[];
}
export interface MaintenanceOrdersListItem {
  orderNumber?: string;
  ruiyunOrderNumber?: string;
  status?: number;
  statusText?: string;
  sourceType?: number;
  sourceTypeText?: string;
  creatorId?: string;
  creatorName?: string;
  contactPerson?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactAddressFull?: MaintenanceOrderFullContactAddress;
  faultDescription?: string;
  faultOccurrenceTime?: string;
  expectedServiceTime?: string;
  createdAt?: string;
  updatedAt?: string;
  submissionTime?: string;
  acceptedTime?: string;
  completedTime?: string;
  deviceSn?: string;
  deviceModelKey?: string;
  deviceModelName?: string;
  nameplateSn?: string;
  module?: string;
  deviceOrganizationCallsign?: string;
  attachments?: (MaintenanceOrderDetailAttachments)[];
  statusHistory?: (MaintenanceOrderStatusHistory)[];
  repairInfo?: MaintenanceOrderRepairInfo;
  logReport?: MaintenanceOrderLogReport;
}
export interface GetMediaFilesListParams {
  flightId?: string;
  startIndex?: number;
  pageSize?: number;
  fileTypes?: (string)[];
  deviceSn?: string;
  startCreateTime?: bigint | number;
  endCreateTime?: bigint | number;
}
export interface GetMediaFilesListResults {
  list?: (MediaFilesListItemInfoData)[];
  pageSize?: number;
  nextIndex?: number;
  total?: number;
}
export interface MediaFilesListItemInfoData {
  fileId?: bigint | number;
  flightId?: string;
  waylineActionUuid?: string;
  size?: bigint | number;
  objectKey?: string;
  fileName?: string;
  suffix?: string;
  ext?: MediaFilesListItemExtData;
  createdAt?: string;
  filePath?: string;
  deviceSn?: string;
  payloadType?: string;
  type?: number;
}
export interface MediaFilesListItemExtData {
  createTime?: string;
  flightYaw?: number;
  focalLength?: number;
  gimbalPitch?: number;
  gimbalRoll?: number;
  gimbalYaw?: number;
  width?: number;
  height?: number;
  imageType?: string;
  photoPosition?: PositionData;
  shootPosition?: PositionData;
  zoomFactor?: number;
}
export interface PositionData {
  lat?: number;
  lng?: number;
  absAlt?: number;
  relAlt?: number;
}
export interface GetMediaFilesDownloadUrlResults {
  url?: string;
}
export interface GetMediaFilesDownloadUrlListResults {
  list?: (MediaFileDownloadInfo)[];
}
export interface MediaFileDownloadInfo {
  objectKey?: string;
  url?: string;
}
export interface MediaFilePostProcess {
  fileId?: bigint | number;
  flightId?: string;
  deviceSn?: string;
  objectKey?: string;
  objectSize?: bigint | number;
  fileType?: number;
  previewObjectKey?: string;
  imageMetadata?: MediaFileImageMetaData;
  videoMetadata?: MediaFileVideoMetaData;
}
export interface MediaFileImageMetaData {
  photoCreateTime?: string;
  flightYaw?: number;
  focalLength?: number;
  gimbalPitch?: number;
  gimbalRoll?: number;
  gimbalYaw?: number;
  height?: number;
  width?: number;
  zoomFactor?: number;
  digitalZoomRatio?: number;
  lengthIn35mmFilm?: number;
  imageType?: string;
  payloadType?: string;
  actionUuid?: string;
  photoPosition?: PositionData;
  shootPosition?: PositionData;
}
export interface MediaFileVideoMetaData {
  duration?: number;
  encoder?: string;
  formatLongName?: string;
  formatName?: string;
  height?: number;
  width?: number;
}
export interface MediaFileDeviceUpload {
  fileId?: bigint | number;
  flightId?: string;
  deviceSn?: string;
  objectKey?: string;
  objectSize?: bigint | number;
  fileType?: number;
}
export interface GetMediaUploadStsParams {
  filePath?: string;
  expire?: number;
  sn?: string;
  module?: number;
}
export interface GetMediaUploadStsResult {
  bucket?: string;
  credentials?: MediaUploadStsCredentials;
  objectKeyPrefix?: string;
  endpoint?: string;
  provider?: string;
  region?: string;
}
export interface MediaUploadStsCredentials {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: number;
  securityToken?: string;
}
export interface MediaUploadCallbackParams {
  sn?: string;
  result?: number;
  progress?: number;
  file?: MediaUploadCallbackFile;
  expectedFileCount?: number;
  uploadedFileCount?: number;
  flightType?: number;
  bizCode?: string;
  version?: string;
}
export interface MediaUploadCallbackFile {
  objectKey?: string;
  fingerprint?: string;
  name?: string;
  type?: number;
  cloudToCloudId?: string;
  ext?: MediaUploadCallbackFileExt;
  metadata?: MediaUploadCallbackMetadata;
  createdTime?: string;
  source?: string;
}
export interface MediaUploadCallbackFileExt {
  prjUuid?: string;
  workspaceId?: string;
  flightId?: string;
  droneModelKey?: string;
  payloadModelKey?: string;
  isOriginal?: boolean;
  userId?: string;
  waylineId?: string;
  tinnyFingerprint?: string;
  fastReconstructionMediaType?: number;
  mediaIndex?: bigint | number;
}
export interface MediaUploadCallbackMetadata {
  absoluteAltitude?: number;
  relativeAltitude?: number;
  gimbalYawDegree?: number;
  createdTime?: string;
  shootPosition?: MediaUploadCallbackShootPosition;
}
export interface MediaUploadCallbackShootPosition {
  lat?: number;
  lng?: number;
}
export interface MediaUploadCallbackResult {
  objectKey?: string;
  filename?: string;
  flightId?: string;
  uuid?: string;
  id?: number;
  mediaId?: number;
}
export interface UploadGeoMediaFileParams {
  name?: string;
  objectKey?: string;
  fingerprint?: string;
  mediaSource?: number;
}
export interface UploadGeoMediaFileResult {
  fileId?: number;
  fileUuid?: string;
  mediaFileId?: number;
}
export interface GetMediaFileDetailByIdResult {
  url?: string;
  thumbnailUrl?: string;
  alertImageUrl?: string;
  name?: string;
  suffix?: string;
  size?: bigint | number;
  createAt?: string;
  ext?: MediaFileDetailExt;
}
export interface MediaFileDetailExt {
  width?: number;
  height?: number;
  photoPosition?: MediaFileGeoPosition;
}
export interface MediaFileGeoPosition {
  lat?: number;
  lng?: number;
  absAlt?: number;
}
export interface NetworkTestProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
  downloadSpeed?: number;
  uploadSpeed?: number;
}
export interface AiDataInfo {
  identifyOn?: number;
  aiModelList?: (AiModelItem)[];
  selectedAiModel?: SelectedAiModel;
  aiModelsConfig?: (AiModelsConfigSet)[];
  selectedAiModelsStatus?: (AiModelsStatusItem)[];
  aiModelsInfos?: (AiModelsInfoItem)[];
}
export interface AiModelItem {
  index?: number;
  signedName?: string;
}
export interface SelectedAiModel {
  index?: number;
  score?: number;
  scoreMode?: number;
  imageSource?: (number)[];
  digitalEffect?: (number)[];
  filters?: (number)[];
  labels?: (AiModelLabel)[];
}
export interface AiModelLabel {
  index?: number;
  name?: string;
}
export interface AiModelsConfigSet {
  streamType?: number;
  models?: (number)[];
}
export interface AiModelsStatusItem {
  index?: number;
  lightType?: number;
  score?: number;
  scoreMode?: number;
  filters?: (number)[];
}
export interface AiModelsInfoItem {
  index?: number;
  imageSource?: (number)[];
  digitalEffect?: (number)[];
  labels?: (AiModelLabel)[];
}
export interface AiIdentifySetParam {
  on?: number;
}
export interface AiIdentifyFilterSetParam {
  index?: number;
  lightType?: number;
  filters?: (number)[];
}
export interface AiIdentifyScoreSetParam {
  index?: number;
  lightType?: number;
  score?: number;
}
export interface AiIdentifyScoreModeSetParam {
  index?: number;
  lightType?: number;
  scoreMode?: number;
}
export interface AiIdentifyScoreResetParam {
  index?: number;
  lightType?: number;
}
export interface AiModelSelectParam {
  index?: number;
}
export interface AiSpotlightZoomSelectParams {
  centerX?: number;
  centerY?: number;
  width?: number;
  height?: number;
}
export interface AiAlarmStartParams {
  streamInputConfs?: (AiAlarmStreamInputConf)[];
}
export interface AiAlarmStreamInputConf {
  streamSource?: number;
  modelIdx?: number;
  algorithmType?: number;
  alarmInterval?: number;
  alarmTargets?: (AiAlarmTarget)[];
}
export interface AiAlarmTarget {
  targetType?: number;
  targetValue?: number;
  useMinThreshold?: boolean;
  useMaxThreshold?: boolean;
  targetMinThreshold?: number;
  targetMaxThreshold?: number;
}
export interface AiModelsConfigParams {
  aiModelsConfig?: (AiModelsConfigSet)[];
}
export interface AiAlarmStateInfo {
  alarmOn?: boolean;
  streamInputConfs?: (AiAlarmStreamInputConf)[];
}
export interface POIEnterParams {
  payloadIndex?: string;
  poiCenterPoint?: Waypoint;
  speed?: number;
  circleRadius?: number;
}
export interface Waypoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface POITaskInfo {
  uuid?: string;
  deviceSn?: string;
  sn?: string;
  status?: number;
  errCode?: number;
  poiCenterPoint?: Waypoint;
  speed?: number;
  circleRadius?: number;
  payloadIndex?: string;
}
export interface PoiTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: PoiTaskData;
}
export interface PoiTaskData {
  uuid?: string;
  sn?: string;
  deviceSn?: string;
  poiCenterPoint?: PoiCenterPoint;
  speed?: number;
  circleRadius?: number;
  payloadIndex?: string;
  status?: number;
  errCode?: number;
}
export interface PoiCenterPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface FlightPoiProgress {
  uuid?: string;
  sn?: string;
  deviceSn?: string;
  poiCenterPoint?: FlightPoiProgressCenterPoint;
  speed?: number;
  circleRadius?: number;
  payloadIndex?: string;
  status?: number;
  errCode?: number;
}
export interface FlightPoiProgressCenterPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface PsdkDeviceList {
  psdkDeviceList?: (PsdkDeviceInfo)[];
}
export interface PsdkDeviceInfo {
  psdkIndex?: number;
  objectKey?: string;
}
export interface PsdkStateSummaryInfo {
  psdkIndex?: number;
  psdkType?: number;
  psdkSubType?: number;
  psdkName?: string;
  psdkSn?: string;
  psdkVersion?: string;
  psdkLibVersion?: string;
  psdkRestrictState?: number;
}
export interface PsdkStateSpeakerInfo {
  workMode?: number;
  playMode?: number;
  systemState?: number;
  playVolume?: number;
  playFileName?: string;
  playFileMd5?: string;
  ttsVolume?: number;
  ttsType?: number;
  ttsLanguage?: number;
  ttsSpeed?: number;
}
export interface PsdkStateSearchlightInfo {
  workMode?: number;
  brightness?: number;
  calibrationStatus?: number;
  calibrationProgress?: number;
  leftValue?: number;
  rightValue?: number;
  wideFieldMode?: number;
  lightGimbalControl?: number;
  lightingType?: number;
}
export interface PsdkSpeakerPlayProgressInfo {
  psdkIndex?: number;
  result?: number;
  status?: string;
  stepKey?: string;
  percent?: number;
  md5?: string;
}
export interface PsdkFloatingWindowTextInfo {
  psdkIndex?: number;
  floatingWindowText?: string;
}
export interface PsdkSpeakerAudioPlayInfo {
  name?: string;
  url?: string;
  md5?: string;
  format?: string;
}
export interface PsdkSpeakerTTSPlayInfo {
  name?: string;
  text?: string;
  md5?: string;
}
export interface PsdkSpeakerTTSconfig {
  volume?: number;
  type?: number;
  language?: number;
  speed?: number;
}
export interface PsdkSpeakerPlayStartProgress {
  gateway?: string;
  output?: PsdkSpeakerOutputDetail;
  result?: number;
  sn?: string;
}
export interface PsdkSpeakerOutputDetail {
  md5?: string;
  progress?: PsdkSpeakerPlayProgressDetail;
  psdkIndex?: number;
  status?: string;
}
export interface PsdkSpeakerPlayProgressDetail {
  percent?: number;
  stepKey?: string;
}
export interface DronePsdkUiResource {
  psdkUiResource?: (PsdkUiResourceItem)[];
}
export interface PsdkUiResourceItem {
  psdkIndex?: bigint | number;
  psdkReady?: bigint | number;
  objectKey?: string;
}
export interface PsdkSpeakerResourceList {
  resources?: (PsdkSpeakerResource)[];
}
export interface PsdkSpeakerResource {
  id?: number;
  name?: string;
  fileType?: string;
  objectKey?: string;
  objectUrl?: string;
  format?: string;
  size?: bigint | number;
  duration?: bigint | number;
  state?: string;
  stateMessage?: string;
  pcmObjectKey?: string;
  pcmObjectUrl?: string;
  pcmSize?: bigint | number;
  pcmMd5Sum?: string;
  content?: string;
  md5Sum?: string;
  createdAt?: bigint | number;
  opusObjectKey?: string;
  opusSize?: bigint | number;
  opusMd5Sum?: string;
}
export interface CreatePsdkSpeakerResourceParams {
  name?: string;
  fileType?: string;
  objectKey?: string;
  duration?: bigint | number;
  content?: string;
  createScene?: string;
  needOpus?: boolean;
  size?: bigint | number;
  visible?: boolean;
}
export interface EditPsdkSpeakerResourceParams {
  id?: string;
  name?: string;
  fileType?: string;
  visible?: boolean;
  content?: string;
}
export interface STSInfo {
  objectKeyPrefix?: string;
  bucket?: string;
  endpoint?: string;
  provider?: string;
  region?: string;
  credentials?: STSCredential;
}
export interface STSCredential {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: bigint | number;
  securityToken?: string;
  platform?: number;
}
export interface GetPsdkWidgetResourceParams {
  objectKeys?: (string)[];
}
export interface PsdkWidgetResourceList {
  uiResourceUrls?: (PsdkWidgetResource)[];
}
export interface PsdkWidgetResource {
  objectKey?: string;
  url?: string;
}
export interface SetRelayOccupiedStatusResult {
  status?: string;
  bid?: string;
}
export interface RelayRebootResult {
  status?: string;
  bid?: string;
}
export interface RelayDisconnectResult {
  status?: string;
  bid?: string;
}
export interface NetworkRtkCalibrationParams {
  host?: string;
  port?: number;
  account?: string;
  password?: string;
  mountPoint?: string;
  version?: number;
}
export interface RtkCalibrationResult {
  message?: string;
  bid?: string;
}
export interface ManulRtkCalibrationParams {
  longitude?: number;
  latitude?: number;
  height?: number;
}
export interface SignalMapsResults {
  lists?: (DeviceSignalItem)[];
}
export interface DeviceSignalItem {
  deviceSn?: string;
  grids?: (GridSignalItem)[];
}
export interface GridSignalItem {
  h3Index?: string;
  sdrAvg?: number;
  sdrMax?: number;
  sdrMin?: number;
  signal4gAvg?: number;
  signal4gMax?: number;
  signal4gMin?: number;
}
export interface CreateCustomizedFlightAreasParams {
  name?: string;
  type?: string;
  content?: FlightAreasContentData;
  createdBy?: string;
}
export interface FlightAreasContentData {
  type?: string;
  properties?: ContentsPropertyData;
  geometry?: ContentsGeometryData;
}
export interface ContentsPropertyData {
  color?: string;
  width?: number;
  clampToGround?: boolean;
}
export interface ContentsGeometryData {
  type?: string;
  coordinates?: (((number)[])[])[];
  center?: (number)[];
  radius?: number;
}
export interface CreateFlightAreasResults {
  id?: string;
  name?: string;
}
export interface GetCustomizedFlightAreasParams {
  name?: string;
  type?: string;
  status?: string;
  ids?: (string)[];
  pageIndex?: number;
  pageSize?: number;
}
export interface GetFlightAreasResults {
  list?: (FlightAreaInfoItem)[];
  pagination?: FlightAreaPagination;
}
export interface FlightAreaInfoItem {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  content?: FlightAreasContentData;
  createdTime?: bigint | number;
  createdBy?: string;
  updatedTime?: bigint | number;
  updatedBy?: string;
}
export interface FlightAreaPagination {
  page?: number;
  pageSize?: number;
  total?: number;
}
export interface UpdateCustomizedFlightAreasParams {
  flightAreaId?: string;
  name?: string;
  content?: FlightAreasContentData;
  updateBy?: string;
}
export interface UpdateFlightAreasResults {
  id?: string;
  updatedArea?: UpdatedAreaData;
}
export interface UpdatedAreaData {
  id?: string;
  name?: string;
  status?: string;
  type?: string;
  content?: FlightAreasContentData;
  createdTime?: bigint | number;
  createdBy?: string;
  updatedTime?: bigint | number;
  updatedBy?: string;
}
export interface SyncFlightAreasResults {
  results?: (DeviceSyncResults)[];
}
export interface DeviceSyncResults {
  deviceSn?: string;
  code?: number;
}
export interface GetAreasSyncStatusResults {
  list?: (DeviceSyncStatusResults)[];
}
export interface DeviceSyncStatusResults {
  sn?: string;
  status?: string;
  reason?: number;
}
export interface GetOfflineMapsModelInfoResults {
  disable?: boolean;
  offlineMap?: OfflineMapsModelData;
}
export interface OfflineMapsModelData {
  id?: number;
  updatedTime?: bigint | number;
  models?: (OfflineMapsModelInfoData)[];
  percent?: number;
  status?: string;
  result?: number;
}
export interface OfflineMapsModelInfoData {
  uuid?: string;
}
export interface UpdateOfflineMapsParams {
  model3dItems?: (ModelItemInfoData)[];
  model2dItems?: (ModelItemInfoData)[];
}
export interface ModelItemInfoData {
  uuid?: string;
  objectKey?: string;
  fileType?: string;
}
export interface SetOfflineMapsParams {
  offlineMapEnable?: boolean;
}
export interface OfflineMapsSyncResults {
  results?: (DeviceSyncResults)[];
}
export interface GetOfflineMapsSyncStatusResults {
  list?: (DeviceSyncStatusResults)[];
}
export interface QueryDeviceUnlockLicenseListParam {
  deviceSn?: string;
  deviceModelDomain?: number;
  licenseType?: string;
  licenseId?: string;
  detail?: boolean;
}
export interface QueryDeviceUnlockLicenseListResult {
  result?: number;
  deviceModelDomain?: number;
  consistence?: boolean;
  licenses?: (DeviceUnlockLicenseItem)[];
}
export interface DeviceUnlockLicenseItem {
  commonFields?: DeviceUnlockLicenseCommonFields;
  areaUnlock?: DeviceUnlockAreaUnlock;
  circleUnlock?: DeviceUnlockCircleUnlock;
  countryUnlock?: DeviceUnlockCountryUnlock;
  heightUnlock?: DeviceUnlockHeightUnlock;
  polygonUnlock?: DeviceUnlockPolygonUnlock;
  powerUnlock?: DeviceUnlockPowerUnlock;
  ridUnlock?: DeviceUnlockRidUnlock;
}
export interface DeviceUnlockLicenseCommonFields {
  id?: number;
  name?: string;
  type?: number;
  groupId?: number;
  userId?: string;
  deviceSn?: string;
  beginTime?: bigint | number;
  endTime?: bigint | number;
  userOnly?: boolean;
  enabled?: boolean;
}
export interface DeviceUnlockAreaUnlock {
  areaIds?: (number)[];
}
export interface DeviceUnlockCircleUnlock {
  radius?: number;
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface DeviceUnlockCountryUnlock {
  countryNumber?: number;
  height?: number;
}
export interface DeviceUnlockHeightUnlock {
  height?: number;
}
export interface DeviceUnlockPolygonUnlock {
  points?: (DeviceUnlockPolygonPoint)[];
}
export interface DeviceUnlockPolygonPoint {
  latitude?: number;
  longitude?: number;
}
export interface DeviceUnlockPowerUnlock {
  level?: number;
}
export interface DeviceUnlockRidUnlock {
  level?: number;
}
export interface SwitchUnlockLicenseParam {
  deviceSn?: string;
  licenseId?: number;
  enable?: boolean;
}
export interface CheckUnlockLicenseParam {
  fileKey?: string;
  deviceSn?: string;
}
export interface CheckUnlockLicenseResult {
  errFileName?: (string)[];
  errCertMismatch?: (string)[];
  list?: (CheckUnlockLicenseResultItem)[];
}
export interface CheckUnlockLicenseResultItem {
  fileName?: string;
  name?: string;
  type?: string;
  beginTime?: bigint | number;
  endTime?: bigint | number;
  url?: string;
}
export interface ImportUnlockLicenseParam {
  deviceSn?: string;
  certUrl?: (string)[];
}
export interface UploadUnlockLicenseFileResult {
  fileStoreDir?: string;
}
export interface DroneOfflineMapEnable {
  offlineMapEnable?: boolean;
}
export interface TakeoffParams {
  securityTakeoffHeight?: number;
  maxSpeed?: number;
  outOfControlAction?: number;
  rthAltitude?: number;
  targetHeight?: number;
  takeoffMode?: number;
  targetLatitude?: number;
  targetLongitude?: number;
  commanderFlightMode?: number;
  commanderFlightHeight?: number;
  rthMode?: number;
  cloudToCloudId?: string;
  needVerifyFlightControl?: number;
}
export interface TakeoffResult {
  flightId?: string;
  flyToId?: string;
}
export interface CommandTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: CommandTaskData;
}
export interface CommandTaskData {
  id?: number;
  createdAt?: string;
  uuid?: string;
  prjUuid?: string;
  sn?: string;
  droneSn?: string;
  trackId?: string;
  userId?: string;
  status?: number;
  errCode?: number;
  takeoffMode?: string;
  securityTakeoffHeight?: number;
  maxSpeed?: number;
  outOfControlAction?: number;
  rthAltitude?: number;
  commanderFlightMode?: number;
  commanderFlightHeight?: number;
  rthMode?: number;
  cloudToCloudId?: string;
}
export interface DroneCommanderFlightMode {
  commanderFlightMode?: bigint | number;
}
export interface DroneCurrentCommanderFlightMode {
  currentCommanderFlightMode?: bigint | number;
}
export interface DroneCommanderModeLostAction {
  commanderModeLostAction?: bigint | number;
}
export interface TerraBuildSettingsResult {
  state?: number;
  reconstructionSettings?: TerraBuildSettingsDetail;
  mediaInputObjectKey?: string;
  sfmOutputObjectPrefix?: string;
  folderList?: (TerraBuildFolderInfo)[];
}
export interface TerraBuildSettingsDetail {
  name?: string;
  reconstructionType?: (number)[];
  simplifiedFactor?: number;
  reconstructionMode?: number;
  predefineArea?: ReconPredefineArea;
  generateModelFormats?: (number)[];
  wkt?: string;
  qualityLevel?: number;
  qualityLevel3dgs?: number;
}
export interface ReconPredefineArea {
  polygonPoints?: (ReconstructionPolygonPoint)[];
}
export interface ReconstructionPolygonPoint {
  lat?: number;
  lng?: number;
}
export interface TerraBuildFolderInfo {
  folderId?: number;
  folderUuid?: string;
  folderName?: string;
}
export interface TerraBuildQualityReportResult {
  qualityReportUrl?: string;
}
export interface TerraBuildModelFileListResult {
  list?: (TerraBuildModelFileItem)[];
  total?: bigint | number;
  page?: number;
  pageSize?: number;
}
export interface TerraBuildModelFileItem {
  id?: number;
  uuid?: string;
  name?: string;
  fileType?: number;
  subFileType?: number;
  state?: number;
  reconstructionType?: (number)[];
  thumbnailUrl?: string;
  zipUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}
export interface TerraBuildModelFileUrlResult {
  url?: string;
}
export interface CreateReconstructionParams {
  reconstructionType?: (number)[];
  name?: string;
  folderUuids?: (string)[];
  folderIds?: (number)[];
  simplifiedFactor?: number | null;
  predefineArea?: ReconPredefineArea | null;
  generateModelFormats?: (number)[];
  wkt?: string;
  qualityLevel?: number | null;
  qualityLevel3dgs?: number | null;
  isShownOnMap?: boolean | null;
  optimize_SfM?: boolean | null;
  customStorageParentId?: number | null;
  qualityReportSetting?: ReconQualityReportSetting | null;
  parameter2d?: ReconParameter2D | null;
  parameter3d?: ReconParameter3D | null;
  parameter3dgs?: ReconParameter3DGS | null;
  parameterLidar?: ReconParameterLidar | null;
}
export interface ReconQualityReportSetting {
  language?: string;
  measureUnitSystem?: string;
}
export interface ReconParameter2D {
  SfMMethod?: string;
  sfmFeatureQuantityLevel?: number | null;
  useImagePosition?: boolean | null;
  generateBlocksExchanggeXml?: boolean | null;
  blocksExchangeXmlGeoDesc?: ReconGeoDesc;
  usableMemory_GB?: number | null;
  mapMode?: number | null;
  qualityLevel?: number | null;
  resolutionType2d?: number | null;
  domTileSize?: number | null;
  outputGeoDesc?: ReconGeoDesc;
  resolutionGsd2d?: number | null;
  use_Wallis?: boolean | null;
  use_Dehaze?: boolean | null;
  useGcj02?: boolean | null;
  generateMaps2dTiff?: boolean | null;
  generateMaps2dTiffCog?: boolean | null;
  useSmartFillHole?: boolean | null;
}
export interface ReconGeoDesc {
  csType?: string;
  geoCs?: string;
  geoCsWkt?: string;
  geoidFileName?: string;
  offset?: (number)[];
  overrideVerticalCs?: string;
}
export interface ReconParameter3D {
  SfMMethod?: string;
  sfmFeatureQuantityLevel?: number | null;
  useImagePosition?: boolean | null;
  generateBlocksExchanggeXml?: boolean | null;
  blocksExchangeXmlGeoDesc?: ReconGeoDesc;
  outputPointcloud?: boolean | null;
  densityPercentLevel?: number | null;
  generatePnts?: boolean | null;
  generateLas?: boolean | null;
  generateLaz?: boolean | null;
  generatePcd?: boolean | null;
  generatePointS3mb?: boolean | null;
  generatePointPly?: boolean | null;
  mergePoint?: boolean | null;
  outputPlyWithNormals?: boolean | null;
  plyWithNormalsLevel?: number | null;
  groudExtract?: boolean | null;
  sceneType?: number | null;
  maxSizeBuilding?: number | null;
  iterDist?: number | null;
  iterAngle?: number | null;
  usableMemory_GB?: number | null;
  stereoMode?: boolean | null;
  globalMinDepth?: number | null;
  outputMesh?: boolean | null;
  generatePly?: boolean | null;
  generateObj?: boolean | null;
  generateFbx?: boolean | null;
  generateB3dm?: boolean | null;
  generateOsgb?: boolean | null;
  generateS3mb?: boolean | null;
  generateI3s?: boolean | null;
  waterRefine?: boolean | null;
  waterRemove?: boolean | null;
  modelSimplify?: number | null;
  generateDem?: boolean | null;
  demResolution?: number | null;
  generateContour?: boolean | null;
  contourDatum?: number | null;
  contourInterval?: number | null;
  contourElevationAnnotationRadius?: number | null;
  useContourFilter?: boolean | null;
  contourFilterLength?: number | null;
  generateGridAndTin?: boolean | null;
  gridInterval?: number | null;
  cut_AOI?: boolean | null;
  qualityLevel?: number | null;
  outputGeoDesc?: ReconGeoDesc;
}
export interface ReconParameter3DGS {
  SfMMethod?: string;
  sfmFeatureQuantityLevel?: number | null;
  useImagePosition?: boolean | null;
  generateBlocksExchanggeXml?: boolean | null;
  blocksExchangeXmlGeoDesc?: ReconGeoDesc;
  globalDataType?: string;
  qualityLevel3dgs?: number | null;
  generateTerrags?: boolean | null;
  generate3dtiles?: boolean | null;
  generate3dgsDom?: boolean | null;
  outputGeoDesc?: ReconGeoDesc;
}
export interface ReconParameterLidar {
  outputPointcloud?: boolean | null;
  densityPercentLevel?: number | null;
  generatePnts?: boolean | null;
  generateLas?: boolean | null;
  generateLaz?: boolean | null;
  generatePcd?: boolean | null;
  generatePointS3mb?: boolean | null;
  generatePointPly?: boolean | null;
  mergePoint?: boolean | null;
  outputPlyWithNormals?: boolean | null;
  plyWithNormalsLevel?: number | null;
  groudExtract?: boolean | null;
  sceneType?: number | null;
  maxSizeBuilding?: number | null;
  iterDist?: number | null;
  iterAngle?: number | null;
  usableMemory_GB?: number | null;
  colorizePoint?: boolean | null;
  lppOptimise?: boolean | null;
  refineCalibrate?: number | null;
  smoothPoint?: boolean | null;
  sampleDistance?: number | null;
  outputHeightOffset?: number | null;
  qualityLevel?: number | null;
  canProcess_L1?: boolean | null;
  outputGeoDesc?: ReconGeoDesc;
  outputMesh?: boolean | null;
  qualityLevelMesh?: number | null;
  modelSimplify?: number | null;
  generateObj?: boolean | null;
  generateFbx?: boolean | null;
  generatePly?: boolean | null;
  generateOsgb?: boolean | null;
  generateB3dm?: boolean | null;
  generateI3s?: boolean | null;
  generateMaps2d?: boolean | null;
  generateMaps2dTiff?: boolean | null;
  generateMaps2dTiffCog?: boolean | null;
  resolutionType2d?: number | null;
  resolutionLevel2d?: number | null;
  resolutionGsd2d?: number | null;
  domTileSize?: number | null;
  useGcj02?: boolean | null;
  generateDem?: boolean | null;
  demResolution?: number | null;
  generateContour?: boolean | null;
  contourDatum?: number | null;
  contourInterval?: number | null;
  contourElevationAnnotationRadius?: number | null;
  useContourFilter?: boolean | null;
  contourFilterLength?: number | null;
  generate3dgs?: boolean | null;
  qualityLevel3dgs?: number | null;
  generate3dtiles?: boolean | null;
}
export interface TerraBuildCreateReconstructionResult {
  id?: number;
  uuid?: string;
  jobUuid?: string;
}
export interface TerraBuildSfmResult {
  sfmJsonUrl?: string;
  sfmReportJsonUrl?: string;
  gcpOutJsonUrl?: string;
  reProjectionErrorPicUrlList?: (string)[];
}
export interface CreatePanoramaParams {
  name?: string;
  folderUuids?: (string)[];
  wkt?: string;
  isShownOnMap?: boolean | null;
}
export interface TerraBuildCreatePanoramaResult {
  id?: number;
  uuid?: string;
  jobUuid?: string;
}
export interface TerraBuildReconstructionImagesResult {
  list?: (TerraBuildReconstructionImageItem)[];
  total?: number;
}
export interface TerraBuildReconstructionImageItem {
  imageId?: string;
  fileName?: string;
  thumbnailImageUrl?: string;
  originImageUrl?: string;
}
export interface TerraBuildReconstructionStatusChanged {
  workspaceId?: string;
  id?: bigint | number;
  name?: string;
  state?: number;
  uuid?: string;
  fileType?: number;
  subFileType?: number;
  code?: number;
  size?: bigint | number;
  jobInfo?: TerraBuildJobInfo;
  jobInfos?: (TerraBuildJobInfo)[];
  fastReconstructionId?: number;
}
export interface TerraBuildJobInfo {
  type?: number;
  uuid?: string;
  jobStatus?: number;
  percent?: number;
  code?: number;
}
export interface TerraUploadCallbackParams {
  objectKey?: string;
  name?: string;
  parentId?: bigint | number | null;
  driveUuid?: string | null;
  showOnMap?: boolean | null;
}
export interface TerraUploadCallbackResult {
  id?: bigint | number;
  uuid?: string;
  name?: string;
}
export interface TerraRenameModelParams {
  name?: string;
  inUniformHeight?: boolean | null;
  modelDisplayMode?: number | null;
  collectedAt?: bigint | number | null;
}
export interface TerraShowOnMapParams {
  ids?: (number)[];
  showOnMap?: boolean | null;
  isDistributed?: boolean | null;
  selectFilter?: TerraSelectFilterParams | null;
}
export interface TerraSelectFilterParams {
  selectedParentId?: number | null;
  exceptIds?: (number)[];
  key?: string;
}
export interface TerraShowOnMapResult {
  ids?: (number)[];
}
export interface TerraUnzipProgressMsg {
  fileId?: bigint | number;
  uuid?: string;
  name?: string;
  percent?: number;
}
export interface TerraModelStatusChangedMsg {
  fileId?: bigint | number;
  uuid?: string;
  name?: string;
  state?: number;
  fileType?: number;
  subFileType?: number;
  errorCode?: number;
}
export interface TerraFileShowOnMapMsg {
  list?: (TerraFileShowOnMapItem)[];
}
export interface TerraFileShowOnMapItem {
  id?: bigint | number;
  name?: string;
  fileType?: number;
  subFileType?: number;
  previewUrl?: string;
}
export interface TerraMediaFileHideOnMapMsg {
  ids?: (number)[];
}
export interface TerraMediaFileShowOnMapMsg {
  list?: (TerraMediaFileShowOnMapItem)[];
}
export interface TerraMediaFileShowOnMapItem {
  name?: string;
  id?: number;
  shootLat?: number;
  shootLng?: number;
  shootAbsAlt?: number;
  shootRelAlt?: number;
  photoLat?: number;
  photoLng?: number;
  photoAbsAlt?: number;
  photoRelAlt?: number;
  previewUrl?: string;
  fileType?: number;
  subFileType?: number;
}
export interface TerraModelDetailResult {
  id?: bigint | number;
  uuid?: string;
  name?: string;
  fileType?: number;
  subFileType?: number;
  size?: bigint | number;
  suffix?: string;
  mod?: number;
  showOnMap?: boolean;
  state?: number;
  selectedWkt?: string;
  parentId?: bigint | number;
  updateAt?: bigint | number;
  createAt?: bigint | number;
  url?: string;
  webpUrl?: string;
  previewUrl?: string;
  thumbnailUrl?: string;
  objectKey?: string;
  indexFileKey?: string;
  filePrefix?: string;
  webpFilePrefix?: string;
  boundary?: TerraModelBoundaryInfo;
  intensityInfo?: TerraModelIntensityInfo;
  maxReturnNumber?: number;
  boundingPoints?: (TerraModelGeo2DPoint)[];
  ext?: TerraModelExtInfo;
  fileTags?: (string)[];
  userName?: string;
}
export interface TerraModelBoundaryInfo {
  maxLat?: number;
  minLat?: number;
  maxLng?: number;
  minLng?: number;
  maxAlt?: number;
  minAlt?: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  halfX?: number;
  halfY?: number;
  halfZ?: number;
  transform?: (number)[];
  maxLevel?: number;
  minLevel?: number;
  startLat?: number;
  endLat?: number;
  startLng?: number;
  endLng?: number;
}
export interface TerraModelIntensityInfo {
  maxIntensity?: number;
  minIntensity?: number;
}
export interface TerraModelGeo2DPoint {
  lng?: number;
  lat?: number;
}
export interface TerraModelExtInfo {
  device?: string;
  duration?: number;
  photographer?: string;
  resolution?: string;
  height?: number;
  width?: number;
  zoomFactor?: number;
  taskName?: string;
  shootPosition?: TerraModelPosition;
  photoPosition?: TerraModelPosition;
  lineName?: string;
  isOriginal?: boolean;
  gimbalPitch?: number;
  gimbalYaw?: number;
  gimbalYawDegree?: number;
  gimbalRoll?: number;
  focalLength?: number;
  payloadModelKey?: string;
  droneModelKey?: string;
  createTime?: string;
  waylineActionUuid?: string;
  waylineUuid?: string;
  originWaylineUuid?: string;
  digitalZoomRatio?: number;
  lengthIn35mmFilm?: number;
}
export interface TerraModelPosition {
  lng?: number;
  lat?: number;
  absAlt?: number;
  relAlt?: number;
}
export interface TerraSetLasWktParams {
  fileUuid?: string;
  wkt?: string;
}
export interface GenerateTryFlightWaylineParams {
  name?: string;
  deviceType?: string;
  targetPoint?: TryFlightWaylinePoint;
  observerPoint?: TryFlightWaylinePoint;
}
export interface TryFlightWaylinePoint {
  lng?: number;
  lat?: number;
  alt?: number;
}
export interface GenerateTryFlightWaylineResponse {
  key?: string;
  name?: string;
  uuid?: string;
  requestId?: string;
}
export interface CreateTestFlightTaskParams {
  name?: string;
  waylineUuid?: string;
  sn?: string;
  landingDockSn?: string;
  taskType?: number;
  outOfControlActionInFlight?: number;
  rthMode?: number;
  repeatType?: number;
  timeZone?: string;
  defaultName?: string;
  waylinePrecisionType?: number;
  waylineDuration?: number;
  rthAltitude?: number;
  resumableStatus?: string;
  mediaFolderIdPaths?: string;
  deviceType?: number;
}
export interface CreateTestFlightTaskResponse {
  uuid?: string;
  beginAt?: number;
  endAt?: number;
}
export interface GetWaylineListParam {
  page?: number;
  pageSize?: number;
  startTimestamp?: bigint | number;
  endTimestamp?: bigint | number;
  droneTypes?: (string)[];
  waylineUuids?: (string)[];
  payloadTypes?: (string)[];
  waylineTypes?: (string)[];
}
export interface GetWaylineListResult {
  pagination?: WaylineListPaginationResult;
  list?: (WaylineListItemResult)[];
}
export interface WaylineListPaginationResult {
  page?: number;
  pageSize?: number;
  total?: number;
}
export interface WaylineListItemResult {
  waylineUuid?: string;
  waylineTypes?: (number)[];
  waylineName?: string;
  size?: number;
  payloadTypes?: (string)[];
  payloadTypesWithIndex?: (string)[];
  droneType?: string;
  updatedAt?: bigint | number;
  withMegaphone?: boolean;
  withSearchLight?: boolean;
  isAiWayline?: boolean;
}
export interface GetWaylineDetailResult {
  waylineUuid?: string;
  md5?: string;
  waylineName?: string;
  kmzObjectKey?: string;
  url?: string;
  suffix?: string;
  deletedAt?: bigint | number;
  updatedAt?: bigint | number;
  kmzWithoutResUrl?: string;
  targetAreaFileUrl?: string;
  businessFileUrl?: string;
  kmzData?: WaylineDetailKmzData;
  extData?: WaylineDetailExtData;
  editorWarnings?: Record<string, string>;
  executeWarnings?: Record<string, string>;
}
export interface WaylineDetailKmzData {
  waylineType?: number;
  waylinePointCount?: number;
  exitOnRcLostType?: number;
  exitOnRcLostBehavior?: number;
  startRecordActionCount?: number;
  stopRecordActionCount?: number;
  orthoCameraOverlapH?: number;
  orthoCameraOverlapW?: number;
  inclinedCameraOverlapH?: number;
  inclinedCameraOverlapW?: number;
  supplementPrismModelCount?: number;
  estimatedPhotoCount?: number;
  duration?: number;
  distance?: number;
  surveyArea?: number;
  startLatitude?: number;
  startLongitude?: number;
  startAltitude?: number;
  marginDistance?: number;
  orthoGsd?: number;
  inclineGsd?: number;
  isWaylineValidityCheck?: boolean;
  hasOrientedAction?: boolean;
  hasAccurateAction?: boolean;
  isSurfaceFlyOn?: boolean;
  isElevationOptimizationOn?: boolean;
  isSmartObliqueOn?: boolean;
  isMappingStripUseTemplateAltitude?: boolean;
  isWithMegaphone?: boolean;
  isWithSearchLight?: boolean;
  isAiWayline?: boolean;
  droneType?: string;
  targetDetectAreaFilePath?: string;
  waylineValidityCheckCodes?: (number)[];
  elevationFileNames?: (string)[];
  payloadTypes?: (string)[];
  payloadTypesWithIndex?: (string)[];
  accurateActionUuids?: (string)[];
  actionUuids?: (string)[];
  resFileMd5s?: (string)[];
  audioFileMd5s?: (string)[];
  targetDetectActionUuids?: (string)[];
  aiAudioFileMd5s?: (string)[];
  actionUuidToMd5Map?: Record<string, string>;
  audioActionUuidToFilePathMap?: Record<string, string>;
  aiAudioActionUuidToFilePathMap?: Record<string, string>;
  surveyAreaScope?: WaylineDetailSurveyAreaScope;
}
export interface WaylineDetailSurveyAreaScope {
  points?: (WaylineDetailSurveyAreaScopePoint)[];
}
export interface WaylineDetailSurveyAreaScopePoint {
  lng?: number;
  lat?: number;
  alt?: number;
}
export interface WaylineDetailExtData {
  kmzWithoutResObjectKey?: string;
  kmzWithoutResMd5?: string;
  targetAreaFileObjectKey?: string;
  businessFileObjectKey?: string;
  modelFileObjectKeys?: (string)[];
}
export interface BatchDeleteWaylinesResult {
  serverCode?: number;
  serverMessage?: string;
}
export interface UpdateWaylineResult {
  status?: string;
}
export interface SubmitWaylineInfoParam {
  kmzObjectKey?: string;
  waylineName?: string;
  asyncRequestId?: string;
  returnPaasData?: boolean;
  timestamp?: bigint | number;
  transparent?: Record<string, string>;
}
export interface BatchDownloadWaylinesParam {
  waylineUuids?: (string)[];
}
export interface BatchDownloadWaylinesResult {
  list?: (BatchDownloadWaylinesItemResult)[];
}
export interface BatchDownloadWaylinesItemResult {
  waylineUuid?: string;
  waylineName?: string;
  kmzObjectKey?: string;
  url?: string;
  size?: number;
}
export interface DuplicateWaylineParam {
  originalWaylineUuid?: string;
  targetWaylineName?: string;
  targetObjectKeyPrefix?: string;
}
export interface DuplicateWaylineResult {
  waylineUuid?: string;
  waylineName?: string;
}
export interface CopyWaylineParam {
  originalWaylineUuid?: string;
  targetWaylineName?: string;
}
export interface CopyWaylineResult {
  waylineUuid?: string;
  waylineName?: string;
}
export interface ConcatWaylineParam {
  targetWaylineName?: string;
  kmzObjectKey?: string;
  subWaylineUuids?: (string)[];
  editorWarnings?: Record<string, string>;
}
export interface ConcatWaylineResult {
  waylineUuid?: string;
  kmzData?: WaylineDetailKmzData;
  extData?: ConcatWaylineExtData;
}
export interface ConcatWaylineExtData {
  kmzWithoutResObjectKey?: string;
  kmzWithoutResMd5?: string;
  targetAreaFileObjectKey?: string;
  businessFileObjectKey?: string;
  modelFileObjectKeys?: (string)[];
  elevationFileObjectKeys?: (string)[];
  contentLength?: bigint | number;
  models?: (ConcatWaylineExtDataModel)[];
}
export interface ConcatWaylineExtDataModel {
  uuid?: string;
  fileKey?: string;
  boundary?: ConcatWaylineExtDataModelBoundary;
  bounding?: ConcatWaylineExtDataModelBounding;
}
export interface ConcatWaylineExtDataModelBoundary {
  latitude?: number;
  longitude?: number;
  altitude?: number;
  halfX?: number;
  halfY?: number;
  halfZ?: number;
  transform?: (number)[];
}
export interface ConcatWaylineExtDataModelBounding {
  points?: (ConcatWaylineExtDataModelBoundingPoint)[];
}
export interface ConcatWaylineExtDataModelBoundingPoint {
  lng?: number;
  lat?: number;
}
export interface ImportKmzResult {
  list?: (ImportKmzItem)[];
  total?: number;
}
export interface ImportKmzItem {
  kmzObjectKey?: string;
  waylineName?: string;
  asyncRequestId?: string;
}
export interface ImportWaylineEventResult {
  asyncRequestId?: string;
  timestamp?: bigint | number;
  kmzObjectKey?: string;
  waylineUuid?: string;
  code?: number;
  message?: string;
  kmzData?: ImportWaylineEventKmzData;
  extData?: ImportWaylineEventExtData;
}
export interface ImportWaylineEventKmzData {
  waylineType?: number;
  waylinePointCount?: number;
  exitOnRcLostType?: number;
  exitOnRcLostBehavior?: number;
  startRecordActionCount?: number;
  stopRecordActionCount?: number;
  orthoCameraOverlapH?: number;
  orthoCameraOverlapW?: number;
  inclinedCameraOverlapH?: number;
  inclinedCameraOverlapW?: number;
  supplementPrismModelCount?: number;
  estimatedPhotoCount?: number;
  duration?: number;
  distance?: number;
  surveyArea?: number;
  startLatitude?: number;
  startLongitude?: number;
  startAltitude?: number;
  marginDistance?: number;
  orthoGsd?: number;
  inclineGsd?: number;
  isWaylineValidityCheck?: boolean;
  hasOrientedAction?: boolean;
  hasAccurateAction?: boolean;
  isSurfaceFlyOn?: boolean;
  isElevationOptimizationOn?: boolean;
  isSmartObliqueOn?: boolean;
  isMappingStripUseTemplateAltitude?: boolean;
  isWithMegaphone?: boolean;
  isWithSearchLight?: boolean;
  isAiWayline?: boolean;
  droneType?: string;
  targetDetectAreaFilePath?: string;
  waylineValidityCheckCodes?: (number)[];
  elevationFileNames?: (string)[];
  payloadTypes?: (string)[];
  payloadTypesWithIndex?: (string)[];
  accurateActionUuids?: (string)[];
  actionUuids?: (string)[];
  resFileMd5s?: (string)[];
  audioFileMd5s?: (string)[];
  targetDetectActionUuids?: (string)[];
  aiAudioFileMd5s?: (string)[];
  actionUuidToMd5Map?: Record<string, string>;
  audioActionUuidToFilePathMap?: Record<string, string>;
  aiAudioActionUuidToFilePathMap?: Record<string, string>;
  surveyAreaScope?: ImportWaylineEventSurveyAreaScope;
}
export interface ImportWaylineEventSurveyAreaScope {
  points?: (ImportWaylineEventPoint)[];
}
export interface ImportWaylineEventPoint {
  lng?: number;
  lat?: number;
  alt?: number;
}
export interface ImportWaylineEventExtData {
  kmzWithoutResObjectKey?: string;
  kmzWithoutResMd5?: string;
  targetAreaFileObjectKey?: string;
  businessFileObjectKey?: string;
  modelFileObjectKeys?: (string)[];
}
export interface GetWaylineEditorStsParams {
  objectKeyPrefix?: string;
  expire?: number;
}
export interface GetWaylineEditorStsResult {
  credentials?: WaylineEditorStsCredentials;
  objectKeyPrefix?: string;
  bucket?: string;
  endpoint?: string;
  provider?: string;
  region?: string;
}
export interface WaylineEditorStsCredentials {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: number;
  securityToken?: string;
  platform?: number;
}
export interface AIAlertModule {
  postDeviceSetting(arg0: PostAiAlertDeviceSettingParam, callback: (value0: FlightHubError, value1: PostAiAlertDeviceSettingResult) => void): void;
  getDeviceSetting(arg0: GetAiAlertDeviceSettingParam, callback: (value0: FlightHubError, value1: GetAiAlertDeviceSettingResult) => void): void;
  postAlgorithmSetting(arg0: PostAiAlertAlgorithmSettingParam, callback: (value0: FlightHubError, value1: PostAiAlertAlgorithmSettingResult) => void): void;
  getAlgorithmSetting(arg0: GetAiAlertAlgorithmSettingParam, callback: (value0: FlightHubError, value1: GetAiAlertAlgorithmSettingResult) => void): void;
  getAiAlertFlights(arg0: GetAiAlertFlightsParam, callback: (value0: FlightHubError, value1: GetAiAlertFlightsResult) => void): void;
  getAiAlertRecords(arg0: GetAiAlertRecordsParam, callback: (value0: FlightHubError, value1: GetAiAlertRecordsResult) => void): void;

}
export interface AIBoxModule {
  fetchAIBoxInfo(arg0: string, callback: (value0: FlightHubError, value1: AIBoxInfoListResults) => void): void;
  fetchFileDownloadUrl(arg0: FetchFileDownloadUrlParams, callback: (value0: FlightHubError, value1: FileDownloadUrlListResults) => void): void;
  fetchAppList(arg0: FetchAppListParam, callback: (value0: FlightHubError, value1: FetchAppListResults) => void): void;
  fetchAppListProgress(arg0: FetchAppListProgressParam, callback: (value0: FlightHubError, value1: FetchAppListProgressResults) => void): void;
  exportFile(arg0: ExportFileParam, callback: (value0: FlightHubError, value1: ExportFileResults) => void): void;
  exportFileProgress(arg0: ExportFileProgressParam, callback: (value0: FlightHubError, value1: ExportFileProgressResults) => void): void;
  uploadAIBoxFile(arg0: UploadFileParam, callback: (value0: FlightHubError, value1: UploadFileResults) => void): void;
  installApp(arg0: InstallAppParam, callback: (value0: FlightHubError, value1: InstallAppResults) => void): void;
  installAppProgress(arg0: InstallAppProgressParam, callback: (value0: FlightHubError, value1: InstallAppProgressResults) => void): void;
  operateApp(arg0: OperateAppParam, callback: (value0: FlightHubError, value1: OperateAppResults) => void): void;

}
export interface AIInsideManageModule {
  getAIInsideModels(callback: (value0: FlightHubError, value1: GetAIInsideModelsResult) => void): void;
  getAIInsideModelDevices(arg0: GetAIInsideModelDevicesParam, callback: (value0: FlightHubError, value1: GetAIInsideModelDevicesResult) => void): void;
  getAIInsideModelDevicesSummary(arg0: GetAIInsideModelDevicesSummaryParam, callback: (value0: FlightHubError, value1: GetAIInsideModelDevicesSummaryResult) => void): void;
  operateAIInsideModel(arg0: OperateAIInsideModelParam, callback: (value0: FlightHubError, value1: OperateAIInsideModelResult) => void): void;
  createAIInsideAlgorithm(arg0: CreateAIInsideAlgorithmParam, callback: (value0: FlightHubError, value1: CreateAIInsideAlgorithmResult) => void): void;
  fileUploadAIInsideAlgorithm(arg0: FileUploadAIInsideAlgorithmParam, callback: (value0: FlightHubError, value1: FileUploadAIInsideAlgorithmResult) => void): void;
  deleteAIInsideAlgorithm(arg0: DeleteAIInsideAlgorithmParam, callback: (value0: FlightHubError) => void): void;
  uploadAlgorithmFile(arg0: UploadAIInsideAlgorithmFileParam, callback: (value0: FlightHubError, value1: UploadAIInsideAlgorithmFileResult) => void): void;

}
export interface BaseStation {
  getSn(): string;
  getLiveStream(arg0: LiveInfo): LiveModule | null;
  getLiveDeviceModule(): LiveDeviceModule | null;
  getRtkCalibrationModule(): RtkCalibrationModule | null;
  getNetworkTestModule(): NetworkTestModule | null;

}
export interface CameraControlModule {
  drcSwitchLiveLens(arg0: SwitchLiveLensParams, callback: (value0: FlightHubError) => void): void;
  drcSetPhotoStorageSettings(arg0: SetPhotoStorageSettingsParams, callback: (value0: FlightHubError) => void): void;
  drcSetVideoStorageSettings(arg0: SetVideoStorageSettingsParams, callback: (value0: FlightHubError) => void): void;
  drcSetNightSceneMode(arg0: SetNightSceneModeParams, callback: (value0: FlightHubError) => void): void;
  drcTakePhoto(arg0: string, callback: (value0: FlightHubError) => void): void;
  drcSmartPhotoTakePhoto(arg0: string, callback: (value0: FlightHubError) => void): void;
  drcStartRecord(arg0: string, callback: (value0: FlightHubError) => void): void;
  drcStopRecord(arg0: string, callback: (value0: FlightHubError) => void): void;
  drcZoomAtTarget(arg0: ZoomAtTargetParams, callback: (value0: FlightHubError) => void): void;
  drcSetFocalLength(arg0: CameraFocalLengthParams, callback: (value0: FlightHubError) => void): void;
  drcSetLinkageZoom(arg0: LinkageZoomParams, callback: (value0: FlightHubError) => void): void;
  drcResetGimbal(arg0: GimbalResetParams, callback: (value0: FlightHubError) => void): void;
  lookAtTarget(arg0: LookAtTargetParams, callback: (value0: FlightHubError) => void): void;
  drcSendCameraScreenDrag(arg0: CameraScreenDragParams, callback: (value0: FlightHubError) => void): void;
  drcStartPanorama(arg0: PanoramaParam, callback: (value0: FlightHubError) => void): void;
  drcStopPanorama(arg0: string, callback: (value0: FlightHubError) => void): void;
  listenDrcPanoramaStatus(arg0: string, callback: (value0: PanoramaStatus) => void): number;
  cancelListenDrcPanoramaStatus(arg0: string, arg1: number): void;
  drcSetPhotoSize(arg0: PhotoSizeParam, callback: (value0: FlightHubError) => void): void;
  drcSetIntervalTakePhoto(arg0: IntervalTakePhotoSetParam, callback: (value0: FlightHubError) => void): void;
  drcIntervalTakePhoto(arg0: IntervalTakePhotoParam, callback: (value0: FlightHubError) => void): void;
  listenDrcIntervalTakePhotoStatus(arg0: string, callback: (value0: IntervalTakePhotoStatus) => void): number;
  cancelListenDrcIntervalTakePhotoStatus(arg0: string, arg1: number): void;
  drcStopTakePhoto(arg0: string, callback: (value0: FlightHubError) => void): void;
  drcCameraAimAtTarget(arg0: CameraAimParam, callback: (value0: FlightHubError) => void): void;
  drcSwitchCameraMode(arg0: SwitchCameraModeParams, callback: (value0: FlightHubError) => void): void;
  listenDrcCameraModeAvailableRange(arg0: string, callback: (value0: (number)[]) => void): number;
  cancelListenDrcCameraModeAvailableRange(arg0: string, arg1: number): void;
  listenDrcCameraState(arg0: string, callback: (value0: CameraState) => void): number;
  cancelListenDrcCameraState(arg0: string, arg1: number): void;
  listenDrcLiveviewWorldRegion(arg0: string, callback: (value0: LiveviewWorldRegion) => void): number;
  cancelListenDrcLiveviewWorldRegion(arg0: string, arg1: number): void;
  listenDrcCameraWideLensState(arg0: string, callback: (value0: CameraWideLensState) => void): number;
  cancelListenDrcCameraWideLensState(arg0: string, arg1: number): void;
  listenDrcCameraZoomLensState(arg0: string, callback: (value0: CameraZoomLensState) => void): number;
  cancelListenDrcCameraZoomLensState(arg0: string, arg1: number): void;
  listenDrcCameraMeasureTarget(arg0: string, callback: (value0: CameraMeasureTarget) => void): number;
  cancelListenDrcCameraMeasureTarget(arg0: string, arg1: number): void;
  listenDrcNightModeSettings(arg0: string, callback: (value0: NightModeSettings) => void): number;
  cancelListenDrcNightModeSettings(arg0: string, arg1: number): void;
  listenDrcGimbalState(arg0: string, callback: (value0: GimbalState) => void): number;
  cancelListenDrcGimbalState(arg0: string, arg1: number): void;
  listenDrcLiveVideoInfo(arg0: string, callback: (value0: LiveVideoInfo) => void): number;
  cancelListenDrcLiveVideoInfo(arg0: string, arg1: number): void;
  listenDrcThermalGainMode(arg0: string, callback: (value0: ThermalGainModeInfo) => void): number;
  cancelListenDrcThermalGainMode(arg0: string, arg1: number): void;
  listenDrcCameraIrLensState(arg0: string, callback: (value0: CameraIrLensState) => void): number;
  cancelListenDrcCameraIrLensState(arg0: string, arg1: number): void;
  listenDrcCameraIrThermometry(arg0: string, callback: (value0: CameraIrThermometryInfo) => void): number;
  cancelListenDrcCameraIrThermometry(arg0: string, arg1: number): void;
  listenDrcCameraWatermarkSettings(arg0: string, callback: (value0: CameraWatermarkSettings) => void): number;
  cancelListenDrcCameraWatermarkSettings(arg0: string, arg1: number): void;
  listenDrcCameraStorageInfo(arg0: string, callback: (value0: CameraStorageInfo) => void): number;
  cancelListenDrcCameraStorageInfo(arg0: string, arg1: number): void;
  listenDrcCameraIrPipState(arg0: string, callback: (value0: CameraIrPipState) => void): number;
  cancelListenDrcCameraIrPipState(arg0: string, arg1: number): void;
  listenDrcCameraIsothermPolygon(arg0: string, callback: (value0: CameraIsothermPolygon) => void): number;
  cancelListenDrcCameraIsothermPolygon(arg0: string, arg1: number): void;
  listenDrcCameraMediaStorage(arg0: string, callback: (value0: CameraMediaStorage) => void): number;
  cancelListenDrcCameraMediaStorage(arg0: string, arg1: number): void;
  listenDrcCameraAlgorithmDehazeInfo(arg0: string, callback: (value0: CameraAlgorithmDehazeInfo) => void): number;
  cancelListenDrcCameraAlgorithmDehazeInfo(arg0: string, arg1: number): void;
  listenDrcCameraPreRecordedInfo(arg0: string, callback: (value0: CameraPreRecordedInfo) => void): number;
  cancelListenDrcCameraPreRecordedInfo(arg0: string, arg1: number): void;
  listenDrcCameraCapability(arg0: string, callback: (value0: CameraCapability) => void): number;
  cancelListenDrcCameraCapability(arg0: string, arg1: number): void;
  listenDrcCameraSettableCapability(arg0: string, callback: (value0: CameraSettableCapability) => void): number;
  cancelListenDrcCameraSettableCapability(arg0: string, arg1: number): void;
  listenDrcCameraVisibleCapability(arg0: string, callback: (value0: CameraVisibleCapability) => void): number;
  cancelListenDrcCameraVisibleCapability(arg0: string, arg1: number): void;
  listenDrcCameraPhotoInfo(arg0: string, callback: (value0: CameraPhotoInfo) => void): number;
  cancelListenDrcCameraPhotoInfo(arg0: string, arg1: number): void;
  drcSetThermalGainMode(arg0: ThermalGainModeSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraApertureValue(arg0: CameraApertureValueSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraExposureMode(arg0: CameraExposureModeSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraExposureValue(arg0: CameraExposureSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraFocusMode(arg0: CameraFocusModeSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraFocusValue(arg0: CameraFocusValueSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraIso(arg0: CameraIsoSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraMechanicalShutter(arg0: CameraMechanicalShutterSetParams, callback: (value0: FlightHubError) => void): void;
  drcCameraPointFocusAction(arg0: CameraPointFocusActionParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraShutter(arg0: CameraShutterSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraWatermark(arg0: CameraWatermarkParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraDewarping(arg0: CameraDewarpingSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraScreenSplit(arg0: CameraScreenSplitParams, callback: (value0: FlightHubError) => void): void;
  drcCleanFog(arg0: CleanFogParams, callback: (value0: FlightHubError) => void): void;
  drcSetThermalCurrentPalette(arg0: ThermalCurrentPaletteSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetThermalSuperResolutionEnable(arg0: ThermalSuperResolutionEnableParams, callback: (value0: FlightHubError) => void): void;
  drcSetIrMeteringMode(arg0: IrMeteringModeSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetIrMeteringPoint(arg0: IrMeteringPointSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetIrMeteringArea(arg0: IrMeteringAreaSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetIrDisplayMode(arg0: SetIrDisplayModeParams, callback: (value0: FlightHubError) => void): void;
  drcSetIrEnhanceMode(arg0: SetIrEnhanceModeParams, callback: (value0: FlightHubError) => void): void;
  drcSetIrMixRate(arg0: SetIrMixRateParams, callback: (value0: FlightHubError) => void): void;
  drcSetIsothermEnable(arg0: SetIsothermEnableParams, callback: (value0: FlightHubError) => void): void;
  drcSetIsothermColorRenderingType(arg0: SetIsothermColorRenderingTypeParams, callback: (value0: FlightHubError) => void): void;
  drcSetIsothermLowerUpperRange(arg0: SetIsothermLowerUpperRangeParams, callback: (value0: FlightHubError) => void): void;
  drcSetIsothermRenderingPolygon(arg0: SetIsothermRenderingPolygonParams, callback: (value0: FlightHubError) => void): void;
  drcSetIsothermRoiBasedRenderingEnable(arg0: SetIsothermRoiBasedRenderingEnableParams, callback: (value0: FlightHubError) => void): void;
  drcSetInfraredFillLightEnable(arg0: InfraredFillLightEnableParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraNightVisionEnable(arg0: CameraNightVisionEnableParams, callback: (value0: FlightHubError) => void): void;
  drcResetCameraSettings(arg0: CameraSettingsResetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraDenoiseLevelSet(arg0: CameraDenoiseLevelSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetVideoResolution(arg0: VideoResolutionSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCameraPhotoFormat(arg0: CameraPhotoFormatSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetPreRecordedStatus(arg0: PreRecordedStatusSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetPreRecordedTime(arg0: PreRecordedTimeSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetCountDownAction(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  drcSetAssistantVideoMode(arg0: number, callback: (value0: FlightHubError) => void): void;
  drcSetAssistantVideoSwitch(arg0: number, callback: (value0: FlightHubError) => void): void;
  drcSetAlgorithmDehazeMode(arg0: AlgorithmDehazeModeSetParams, callback: (value0: FlightHubError) => void): void;
  drcSetAlgorithmDehazeLevel(arg0: AlgorithmDehazeLevelSetParams, callback: (value0: FlightHubError) => void): void;
  listenDroneCameraWatermarkSettings(callback: (value0: DroneCameraWatermarkSettingsPush) => void): number;
  cancelListenDroneCameraWatermarkSettings(arg0: number): void;

}
export interface ControlAuthModule {
  acquireFlightControlAuthority(callback: (value0: FlightHubError) => void): void;
  releaseFlightControlAuthority(callback: (value0: FlightHubError) => void): void;
  listenFlightControlAuthority(callback: (value0: boolean) => void): number;
  cancelListenFlightControlAuthority(arg0: number): void;
  acquirePayloadControlAuthority(arg0: string, callback: (value0: FlightHubError) => void): void;
  releasePayloadControlAuthority(arg0: string, callback: (value0: FlightHubError) => void): void;
  listenPayloadControlAuthority(arg0: string, callback: (value0: boolean) => void): number;
  cancelListenPayloadControlAuthority(arg0: string, arg1: number): void;

}
export interface CustomSEIModule {
  CustomSEIEncode(arg0: (number)[], arg1: (SeiItem)[]): number[];
  CustomSEIDecode(arg0: (number)[]): {header: SeiHeader; seiData: SeiItem[]} | null;

}
export interface DeployModule {
  listenDockDeparturePoint(callback: (value0: DockDeparturePoint) => void): number;
  cancelListenDockDeparturePoint(arg0: number): void;
  listenAircraftVisualScoutStatus(callback: (value0: AircraftVisualScoutStatus) => void): number;
  cancelListenAircraftVisualScoutStatus(arg0: number): void;
  listenAircraftVisualScoutAbnormalInfo(callback: (value0: AircraftVisualScoutAbnormalInfo) => void): number;
  cancelListenAircraftVisualScoutAbnormalInfo(arg0: number): void;
  listenAircraftVisualScoutObstacleInfo(callback: (value0: AircraftVisualScoutObstacleInfo) => void): number;
  cancelListenAircraftVisualScoutObstacleInfo(arg0: number): void;
  listenAircraftEphemerisDownloadState(callback: (value0: EphemerisDownloadState) => void): number;
  cancelListenAircraftEphemerisDownloadState(arg0: number): void;
  listenAircraftEphemerisInfo(callback: (value0: EphemerisInfo) => void): number;
  cancelListenAircraftEphemerisInfo(arg0: number): void;
  downloadEphemeris(arg0: DownloadEphemerisParams, callback: (value0: FlightHubError) => void): void;
  executeInOutWaylineDetect(arg0: InOutWaylineDetectParams, callback: (value0: FlightHubError) => void): void;
  setInOutWaylineFlight(arg0: InOutWaylineFlightSettingParams, callback: (value0: FlightHubError) => void): void;
  getInOutWaylineFlightSetting(callback: (value0: InOutWaylineFlightSettingParams, value1: FlightHubError) => void): void;

}
export interface DeviceDebugModule {
  openDebugMode(arg0: string, callback: (value0: FlightHubError, value1: OpenDebugModeResult) => void): void;
  closeDebugMode(arg0: string, callback: (value0: FlightHubError, value1: CloseDebugModeResult) => void): void;
  openDockCover(arg0: string, callback: (value0: FlightHubError, value1: OpenDockCoverResult) => void): void;
  getOpenDockCoverProgress(arg0: string, callback: (value0: FlightHubError, value1: OpenDockCoverProgressResult) => void): void;
  subscribeDockCoverOpenProgress(arg0: string, callback: (value0: OpenDockCoverResult) => void): number;
  unsubscribeDockCoverOpenProgress(arg0: number): void;
  closeDockCover(arg0: string, callback: (value0: FlightHubError, value1: CloseDockCoverResult) => void): void;
  getCloseDockCoverProgress(arg0: string, callback: (value0: FlightHubError, value1: CloseDockCoverProgressResult) => void): void;
  subscribeDockCoverCloseProgress(arg0: string, callback: (value0: CloseDockCoverResult) => void): number;
  unsubscribeDockCoverCloseProgress(arg0: number): void;
  deviceReboot(arg0: string, callback: (value0: FlightHubError, value1: DeviceRebootResult) => void): void;
  subscribeDeviceRebootProgress(arg0: string, callback: (value0: DeviceRebootResult) => void): number;
  unsubscribeDeviceRebootProgress(arg0: number): void;
  getDeviceRebootProgress(arg0: string, callback: (value0: FlightHubError, value1: DeviceRebootProgressResult) => void): void;
  deviceFormat(arg0: string, callback: (value0: FlightHubError, value1: DeviceFormatResult) => void): void;
  getDeviceFormatProgress(arg0: string, callback: (value0: FlightHubError, value1: DeviceFormatProgressResult) => void): void;
  subscribeDeviceFormatProgress(arg0: string, callback: (value0: DeviceFormatResult) => void): number;
  unsubscribeDeviceFormatProgress(arg0: number): void;
  openDrone(arg0: string, callback: (value0: FlightHubError, value1: OpenDroneResult) => void): void;
  subscribeDroneOpenProgress(arg0: string, callback: (value0: OpenDroneResult) => void): number;
  unsubscribeDroneOpenProgress(arg0: number): void;
  closeDrone(arg0: string, callback: (value0: FlightHubError, value1: CloseDroneResult) => void): void;
  subscribeDroneCloseProgress(arg0: string, callback: (value0: CloseDroneResult) => void): number;
  unsubscribeDroneCloseProgress(arg0: number): void;
  subscribeDroneFormatProgress(arg0: string, callback: (value0: DroneFormatResult) => void): number;
  unsubscribeDroneFormatProgress(arg0: number): void;
  droneFormat(arg0: string, callback: (value0: FlightHubError, value1: DroneFormatResult) => void): void;
  droneSdrWorkMode(arg0: string, arg1: number, callback: (value0: FlightHubError) => void): void;
  openCharge(arg0: string, callback: (value0: FlightHubError, value1: OpenChargeResult) => void): void;
  subscribeDroneChargeOpenProgress(arg0: string, callback: (value0: OpenChargeResult) => void): number;
  unsubscribeDroneChargeOpenProgress(arg0: number): void;
  closeCharge(arg0: string, callback: (value0: FlightHubError, value1: CloseChargeResult) => void): void;
  subscribeDroneChargeCloseProgress(arg0: string, callback: (value0: CloseChargeResult) => void): number;
  unsubscribeDroneChargeCloseProgress(arg0: number): void;
  setDockAirConditionerMode(arg0: string, arg1: number, callback: (value0: FlightHubError) => void): void;
  setDockSilentMode(arg0: string, arg1: number, callback: (value0: FlightHubError) => void): void;
  setDistanceLimit(arg0: string, arg1: number, arg2: number, callback: (value0: FlightHubError, value1: SetDistanceLimitResult) => void): void;
  setHeightLimit(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: SetHeightLimitResult) => void): void;
  setObstacleAvoidance(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: SetObstacleAvoidanceResult) => void): void;
  setRemainingPowerForRth(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: SetRemainingPowerForRthResult) => void): void;
  setNightLightsState(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: SetNightLightsStateResult) => void): void;
  switchAlarmLightState(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: SwitchAlarmStateResult) => void): void;
  esimOperatorSwitch(arg0: string, arg1: string, arg2: number, arg3: string, callback: (value0: FlightHubError, value1: EsimOperatorSwitchResult) => void): void;
  subscribeDeviceEsimOperatorSwitchProgress(arg0: string, callback: (value0: EsimOperatorSwitchResult) => void): number;
  unsubscribeDeviceEsimOperatorSwitchProgress(arg0: number): void;
  simSlotSwitch(arg0: string, arg1: string, arg2: number, arg3: string, callback: (value0: FlightHubError, value1: SimSlotSwitchResult) => void): void;
  subscribeDeviceSimSlotSwitchProgress(arg0: string, callback: (value0: SimSlotSwitchResult) => void): number;
  unsubscribeDeviceSimSlotSwitchProgress(arg0: number): void;
  setBatteryStoreMode(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: SetBatteryStoreModeResult) => void): void;
  startManualBatterySwap(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: ManualBatterySwapResult) => void): void;
  getManualBatterySwapProgress(arg0: string, callback: (value0: FlightHubError, value1: ManualBatterySwapProgressResult) => void): void;
  setDonglePowerSwitch(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: DonglePowerSwitchResult) => void): void;
  setLowPowerSwitch(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: LowPowerSwitchResult) => void): void;
  getEsimOperatorSwitchProgress(arg0: string, callback: (value0: FlightHubError, value1: EsimOperatorSwitchProgressResult) => void): void;
  setGeoCagingEnable(arg0: string, arg1: number, arg2: (GeoCagingInfoParam)[], callback: (value0: FlightHubError) => void): void;
  cloudEnvironmentSwitch(arg0: CloudEnvironmentSwitchParam, callback: (value0: FlightHubError) => void): void;
  cloudEnvironmentSwitchCallback(arg0: CloudEnvironmentSwitchCallbackParam, callback: (value0: FlightHubError) => void): void;
  listenDeviceCloudEnvironmentSwitchProgress(arg0: string, callback: (value0: CloudEnvironmentSwitchResult) => void): number;
  cancelListenDeviceCloudEnvironmentSwitchProgress(arg0: number): void;

}
export interface DeviceHMSModule {
  listenDeviceHMS(callback: (value0: HmsData) => void): number;
  cancelListenDeviceHMS(arg0: number): void;

}
export interface DeviceManageModule {
  getDeviceList(callback: (value0: (DeviceTopo)[], value1: FlightHubError) => void): void;
  getDeviceDetailInfo(arg0: string, callback: (value0: FlightHubError, value1: DeviceDetailInfo) => void): void;
  modifyDeviceName(arg0: ModifyDeviceNameParam, callback: (value0: FlightHubError) => void): void;
  listenWorkspaceDeviceChanged(callback: (value0: WorkspaceDeviceChange) => void): number;
  cancelListenWorkspaceDeviceChanged(arg0: number): void;
  listenDeviceTopoChanged(callback: (value0: DeviceTopoChange) => void): number;
  cancelListenDeviceTopoChanged(arg0: number): void;
  unbindDevice(arg0: (string)[], callback: (value0: FlightHubError) => void): void;
  getDockDeviceStatus(arg0: (string)[], callback: (value0: FlightHubError, value1: DockDeviceStatusResultList) => void): void;
  getDroneDeviceStatus(arg0: (string)[], callback: (value0: FlightHubError, value1: DroneDeviceStatusResultList) => void): void;

}
export interface DeviceStateModule {
  listenDockOnlineStatus(callback: (value0: DockOnlineStatus) => void): number;
  cancelListenDockOnlineStatus(arg0: number): void;
  listenDroneOnlineStatus(callback: (value0: DroneOnlineStatus) => void): number;
  cancelListenDroneOnlineStatus(arg0: number): void;

}
export interface DiagnosisManagementModule {
  createSelfDiagnosis(arg0: CreateSelfDiagnosisParams, callback: (value0: FlightHubError) => void): void;
  operateSelfDiagnosis(arg0: OperateSelfDiagnosisParams, callback: (value0: FlightHubError) => void): void;
  getSelfDiagnosisReport(arg0: string, callback: (value0: GetSelfDiagnosisReportResults, value1: FlightHubError) => void): void;
  getSelfDiagnosisReportList(arg0: GetSelfDiagnosisReportListParams, callback: (value0: GetSelfDiagnosisReportListResults, value1: FlightHubError) => void): void;

}
export interface Dock {
  getLiveStream(arg0: LiveInfo): LiveModule | null;
  getLiveRecord(arg0: LiveInfo): LiveRecordModule | null;
  getLiveDeviceModule(): LiveDeviceModule | null;
  getDockOsdModule(): DockOsdModule | null;
  getDeployModule(): DeployModule | null;
  getDockControlModule(): DockControlModule | null;
  getRtkCalibrationModule(): RtkCalibrationModule | null;
  getNetworkTestModule(): NetworkTestModule | null;
  getDeviceDebugModule(): DeviceDebugModule | null;
  getDeviceStateModule(): DeviceStateModule | null;
  getDeviceHMSModule(): DeviceHMSModule | null;

}
export interface DockControlModule {
  changeDockCameraPosition(arg0: LiveInfo, arg1: number, arg2: string, callback: (value0: FlightHubError) => void): void;
  listenDockAirConditionerStatusInfo(callback: (value0: DockAirConditionerStatusInfo) => void): number;
  cancelListenDockAirConditionerStatusInfo(arg0: number): void;
  listenDockSupplementLightState(callback: (value0: DockSupplementLightState) => void): number;
  cancelListenDockSupplementLightState(arg0: number): void;
  setDockSupplementLightState(arg0: boolean, callback: (value0: FlightHubError) => void): void;
  setDockChargeState(arg0: boolean, callback: (value0: FlightHubError) => void): void;
  setDockCoverState(arg0: number, callback: (value0: FlightHubError) => void): void;
  setDockAirConditionerMode(arg0: number, callback: (value0: FlightHubError) => void): void;

}
export interface DockOsdModule {
  listenDockLocation(callback: (value0: DockLocation) => void): number;
  cancelListenDockLocation(arg0: number): void;
  listenDroneInDock(callback: (value0: DroneInDock) => void): number;
  cancelListenDroneInDock(arg0: number): void;
  listenDockCoverState(callback: (value0: DockCoverState) => void): number;
  cancelListenDockCoverState(arg0: number): void;
  listenDockDroneChargeState(callback: (value0: DockDroneChargeState) => void): number;
  cancelListenDockDroneChargeState(arg0: number): void;
  listenDockMeteorologicalInfo(callback: (value0: DockMeteorologicalInfo) => void): number;
  cancelListenDockMeteorologicalInfo(arg0: number): void;
  listenDockBackupBatteryInfo(callback: (value0: DockBackupBatteryInfo) => void): number;
  cancelListenDockBackupBatteryInfo(arg0: number): void;
  listenDockMaintainStatusInfo(callback: (value0: DockMaintainStatusInfo) => void): number;
  cancelListenDockMaintainStatusInfo(arg0: number): void;
  listenDockModeCode(callback: (value0: DockModeCode) => void): number;
  cancelListenDockModeCode(arg0: number): void;
  listenFlightTaskStepCode(callback: (value0: FlightTaskStepCode) => void): number;
  cancelListenFlightTaskStepCode(arg0: number): void;
  listenDockSubDevice(callback: (value0: DockSubDeviceInfoList) => void): number;
  cancelListenDockSubDevice(arg0: number): void;
  listenDockNetworkState(callback: (value0: DockNetworkState) => void): number;
  cancelListenDockNetworkState(arg0: number): void;
  listenDockMediaFileDetail(callback: (value0: DockMediaFileDetail) => void): number;
  cancelListenDockMediaFileDetail(arg0: number): void;
  listenDockWirelessLink(callback: (value0: DockWirelessLink) => void): number;
  cancelListenDockWirelessLink(arg0: number): void;
  listenDockJobNumber(callback: (value0: DockJobNumber) => void): number;
  cancelListenDockJobNumber(arg0: number): void;
  listenDockPowerState(callback: (value0: DockPowerState) => void): number;
  cancelListenDockPowerState(arg0: number): void;
  listenDockStorageState(callback: (value0: DockStorageState) => void): number;
  cancelListenDockStorageState(arg0: number): void;
  listenDockFirstPowerOnTime(callback: (value0: DockFirstPowerOnTime) => void): number;
  cancelListenDockFirstPowerOnTime(arg0: number): void;
  listenDockAccumulatedRunningTime(callback: (value0: DockAccTime) => void): number;
  cancelListenDockAccumulatedRunningTime(arg0: number): void;
  listenDockAlternateLandPoint(callback: (value0: DockAlternateLandPoint) => void): number;
  cancelListenDockAlternateLandPoint(arg0: number): void;
  listenDockPositionState(callback: (value0: DockPositionState) => void): number;
  cancelListenDockPositionState(arg0: number): void;
  listenDockActivationTime(callback: (value0: DockActivationTime) => void): number;
  cancelListenDockActivationTime(arg0: number): void;
  listenDockBatteryStoreMode(callback: (value0: DockBatteryStoreMode) => void): number;
  cancelListenDockBatteryStoreMode(arg0: number): void;
  listenDockAlarmState(callback: (value0: DockAlarmState) => void): number;
  cancelListenDockAlarmState(arg0: number): void;
  listenDockDroneBatteryMaintenanceInfo(callback: (value0: DockDroneBatteryMaintenanceInfo) => void): number;
  cancelListenDockDroneBatteryMaintenanceInfo(arg0: number): void;
  listenDockEmergencyStopState(callback: (value0: DockEmergencyStopState) => void): number;
  cancelListenDockEmergencyStopState(arg0: number): void;
  listenDockSilentMode(callback: (value0: DockSilentMode) => void): number;
  cancelListenDockSilentMode(arg0: number): void;
  listenDockUserExperienceImprovement(callback: (value0: DockUserExperienceImprovement) => void): number;
  cancelListenDockUserExperienceImprovement(arg0: number): void;
  listenDockDrcState(callback: (value0: DockDrcState) => void): number;
  cancelListenDockDrcState(arg0: number): void;
  listenDockPutterState(callback: (value0: DockPutterState) => void): number;
  cancelListenDockPutterState(arg0: number): void;
  listenDockRelativeAlternateLandPoint(callback: (value0: DockRelativeAlternateLandPoint) => void): number;
  cancelListenDockRelativeAlternateLandPoint(arg0: number): void;
  listenDockSelfConvergeCoordinate(callback: (value0: DockSelfConvergeCoordinate) => void): number;
  cancelListenDockSelfConvergeCoordinate(arg0: number): void;
  listenDockFirmwareInfo(callback: (value0: DockFirmwareInfo) => void): number;
  cancelListenDockFirmwareInfo(arg0: number): void;
  listenDockDongleInfos(callback: (value0: DockDongleInfos) => void): number;
  cancelListenDockDongleInfos(arg0: number): void;
  listenDockAirConditionerMode(callback: (value0: DockAirConditionerMode) => void): number;
  cancelListenDockAirConditionerMode(arg0: number): void;

}
export interface DrcModule {
  listenLinkStatus(callback: (value0: LinkStatus) => void): number;
  cancelListenLinkStatus(arg0: number): void;
  connectDrcLink(callback: (value0: number) => void): void;
  disconnectDrcLink(callback: (value0: number) => void): void;
  drcRtcQualityTest(arg0: RtcQualityTestParams, callback: (value0: FlightHubError) => void): void;
  listenDrcDelayInfo(callback: (value0: DrcDelayInfo) => void): number;
  cancelListenDrcDelayInfo(arg0: number): void;
  listenDrcCountDownInfo(callback: (value0: DrcCountDownInfo) => void): number;
  cancelListenDrcCountDownInfo(arg0: number): void;

}
export interface Drone {
  getLiveStream(arg0: LiveInfo): LiveModule | null;
  getLiveRecord(arg0: LiveInfo): LiveRecordModule | null;
  getLiveDeviceModule(): LiveDeviceModule | null;
  getTakeoffModule(): TakeoffModule | null;
  getFlightControlModule(): FlightControlModule | null;
  getControlAuthModule(): ControlAuthModule | null;
  getDrcModule(): DrcModule | null;
  getFlightSettingsModule(): FlightSettingsModule | null;
  getTestFlightModule(): TestFlightModule | null;
  getOnboardAiModule(): OnboardAiModule | null;
  getPsdkControlModule(): PsdkControlModule | null;
  getCameraControlModule(): CameraControlModule | null;
  getFlyToPointModule(): FlyToPointModule | null;
  getFlightTaskControlModule(): FlightTaskControlModule | null;
  getPoiModule(): PoiModule | null;
  getInFlightWaylineModule(): InFlightWaylineModule | null;
  getDroneOsdModule(): DroneOsdModule | null;
  getDeviceStateModule(): DeviceStateModule | null;
  getDeviceHMSModule(): DeviceHMSModule | null;
  getDeviceDebugModule(): DeviceDebugModule | null;
  getAIBoxModule(): AIBoxModule | null;

}
export interface DroneOsdModule {
  listenAircraftBatteryInfo(callback: (value0: AircraftBatteryInfo) => void): number;
  cancelListenAircraftBatteryInfo(arg0: number): void;
  listenAircraftAttitude(callback: (value0: AircraftAttitude) => void): number;
  cancelListenAircraftAttitude(arg0: number): void;
  listenAircraftLocation(callback: (value0: AircraftLocation) => void): number;
  cancelListenAircraftLocation(arg0: number): void;
  listenAircraftModeCode(callback: (value0: AircraftModeCode) => void): number;
  cancelListenAircraftModeCode(arg0: number): void;
  listenAircraftWindSpeed(callback: (value0: AircraftWindSpeed) => void): number;
  cancelListenAircraftWindSpeed(arg0: number): void;
  listenFlightTasksException(callback: (value0: FlightTaskException) => void): number;
  cancelListenFlightTasksException(arg0: number): void;
  listenAircraftControlCode(callback: (value0: AircraftControlCode) => void): number;
  cancelListenAircraftControlCode(arg0: number): void;
  listenAircraftSpeed(callback: (value0: AircraftSpeed) => void): number;
  cancelListenAircraftSpeed(arg0: number): void;
  listenAircraftPayloadsCameraLiveviewWorldRegion(callback: (value0: AircraftPayloadsCameraLiveviewWorldRegion) => void): number;
  cancelListenAircraftPayloadsCameraLiveviewWorldRegion(arg0: number): void;
  listenAircraftPayloadsGimbalAttitude(callback: (value0: AircraftPayloadsGimbalAttitude) => void): number;
  cancelListenAircraftPayloadsGimbalAttitude(arg0: number): void;
  listenAircraftPayloadsList(callback: (value0: AircraftPayloadsList) => void): number;
  cancelListenAircraftPayloadsList(arg0: number): void;
  listenControlRightsCloudControlStatus(callback: (value0: ControlRightsCloudControlStatus) => void): number;
  cancelListenControlRightsCloudControlStatus(arg0: number): void;
  listenControlRightsDeviceControlStatus(callback: (value0: ControlRightsDeviceControlStatus) => void): number;
  cancelListenControlRightsDeviceControlStatus(arg0: number): void;
  listenFlightTasksMediaFileDisplayAvailable(callback: (value0: FlightTasksMediaFileDisplayAvailable) => void): number;
  cancelListenFlightTasksMediaFileDisplayAvailable(arg0: number): void;
  listenAircraftPayloadsOsdInfo(callback: (value0: AircraftPayloadsOsdInfoList) => void): number;
  cancelListenAircraftPayloadsOsdInfo(arg0: number): void;
  listenDroneModeCodeReason(callback: (value0: DroneModeCodeReason) => void): number;
  cancelListenDroneModeCodeReason(arg0: number): void;
  listenDroneDongleInfos(callback: (value0: DroneDongleInfos) => void): number;
  cancelListenDroneDongleInfos(arg0: number): void;
  listenDroneFlysafeDatabaseVersion(callback: (value0: DroneFlysafeDatabaseVersion) => void): number;
  cancelListenDroneFlysafeDatabaseVersion(arg0: number): void;
  listenDroneWpmzVersion(callback: (value0: DroneWpmzVersion) => void): number;
  cancelListenDroneWpmzVersion(arg0: number): void;
  listenAircraftGear(callback: (value0: AircraftGear) => void): number;
  cancelListenAircraftGear(arg0: number): void;
  listenAircraftHomeDistance(callback: (value0: AircraftHomeDistance) => void): number;
  cancelListenAircraftHomeDistance(arg0: number): void;
  listenAircraftPositionState(callback: (value0: AircraftPositionState) => void): number;
  cancelListenAircraftPositionState(arg0: number): void;
  listenAircraftControlSource(callback: (value0: AircraftControlSource) => void): number;
  cancelListenAircraftControlSource(arg0: number): void;
  listenAircraftLimitsInfo(callback: (value0: AircraftLimitsInfo) => void): number;
  cancelListenAircraftLimitsInfo(arg0: number): void;
  listenAircraftBatteryWarningThresholds(callback: (value0: AircraftBatteryWarningThresholds) => void): number;
  cancelListenAircraftBatteryWarningThresholds(arg0: number): void;
  listenAircraftFirmwareStatus(callback: (value0: AircraftFirmwareStatus) => void): number;
  cancelListenAircraftFirmwareStatus(arg0: number): void;
  listenAircraftTotalFlightInfo(callback: (value0: AircraftTotalFlightInfo) => void): number;
  cancelListenAircraftTotalFlightInfo(arg0: number): void;
  listenAircraftActivationTime(callback: (value0: AircraftActivationTime) => void): number;
  cancelListenAircraftActivationTime(arg0: number): void;
  listenAircraftMaintainStatusInfo(callback: (value0: AircraftMaintainStatusInfo) => void): number;
  cancelListenAircraftMaintainStatusInfo(arg0: number): void;
  listenAircraftNightLightsState(callback: (value0: AircraftNightLightsState) => void): number;
  cancelListenAircraftNightLightsState(arg0: number): void;
  listenAircraftObstacleAvoidanceState(callback: (value0: AircraftObstacleAvoidanceState) => void): number;
  cancelListenAircraftObstacleAvoidanceState(arg0: number): void;
  listenAircraftStorageInfo(callback: (value0: AircraftStorageInfo) => void): number;
  cancelListenAircraftStorageInfo(arg0: number): void;
  listenAircraftTrackId(callback: (value0: AircraftTrackId) => void): number;
  cancelListenAircraftTrackId(arg0: number): void;
  listenAircraftComplianceInfo(callback: (value0: AircraftComplianceInfo) => void): number;
  cancelListenAircraftComplianceInfo(arg0: number): void;
  listenAircraftPayloadsCamerasList(callback: (value0: AircraftPayloadsCamerasList) => void): number;
  cancelListenAircraftPayloadsCamerasList(arg0: number): void;
  listenAircraftRcLostAction(callback: (value0: AircraftRcLostAction) => void): number;
  cancelListenAircraftRcLostAction(arg0: number): void;
  listenAircraftRthInfo(callback: (value0: AircraftRthInfo) => void): number;
  cancelListenAircraftRthInfo(arg0: number): void;
  listenAircraftHomeGeographicalInfo(callback: (value0: AircraftHomeGeographicalInfo) => void): number;
  cancelListenAircraftHomeGeographicalInfo(arg0: number): void;
  listenAircraftCurrentRthMode(callback: (value0: AircraftCurrentRthMode) => void): number;
  cancelListenAircraftCurrentRthMode(arg0: number): void;
  listenHsiInfo(callback: (value0: HsiInfo) => void): number;
  cancelListenHsiInfo(arg0: number): void;

}
export interface ElementModule {
  createElement(arg0: CreateElementParams, callback: (value0: FlightHubError, value1: CreateElementResult) => void): void;
  updateElement(arg0: UpdateElementParams, callback: (value0: FlightHubError, value1: UpdateElementResult) => void): void;
  listElementHierarchy(arg0: ListElementHierarchyParams, callback: (value0: FlightHubError, value1: ListElementHierarchyResult) => void): void;
  setElementVisibility(arg0: SetElementVisibilityParams, callback: (value0: FlightHubError, value1: SetElementVisibilityResult) => void): void;
  deleteElement(arg0: DeleteElementParams, callback: (value0: FlightHubError, value1: DeleteElementResult) => void): void;
  listenElementCreate(callback: (value0: ElementCreateMsg) => void): number;
  cancelListenElementCreate(arg0: number): void;
  listenElementUpdate(callback: (value0: ElementUpdateMsg) => void): number;
  cancelListenElementUpdate(arg0: number): void;
  listenElementDelete(callback: (value0: ElementDeleteMsg) => void): number;
  cancelListenElementDelete(arg0: number): void;

}
export interface FirmwareManageModule {
  getLatestFirmwareReleaseNote(arg0: (string)[], arg1: string, callback: (value0: FlightHubError, value1: FirmwareReleaseNoteListResult) => void): void;
  invokeFirmwareUpgrade(arg0: FirmwareUpgradeParam, callback: (value0: FlightHubError, value1: FirmwareUpgradeResult) => void): void;
  queryFirmwareUpgradeProgress(arg0: string, callback: (value0: FlightHubError, value1: FirmwareUpgradeProgressResult) => void): void;
  uploadFirmwareFile(arg0: string, callback: (value0: FlightHubError, value1: UploadFileResults) => void): void;
  releaseFirmware(arg0: string, callback: (value0: FlightHubError) => void): void;
  unReleaseFirmware(arg0: string, callback: (value0: FlightHubError) => void): void;
  deleteFirmware(arg0: string, callback: (value0: FlightHubError) => void): void;
  queryFirmwareList(arg0: number, arg1: number, callback: (value0: FlightHubError, value1: FirmwareListResult) => void): void;
  queryFirmwareCompatibilityConfig(callback: (value0: FlightHubError, value1: FirmwareCompatibilityConfigResult) => void): void;
  checkFirmwareStatus(arg0: (string)[], arg1: (string)[], callback: (value0: FlightHubError, value1: FirmwareStatusListResult) => void): void;
  submitFirmwareInfo(arg0: FirmwareInfoParam, callback: (value0: FlightHubError) => void): void;
  listenDeviceOtaProgress(arg0: string, callback: (value0: DeviceOtaProgress) => void): number;
  cancelListenDeviceOtaProgress(arg0: number): void;

}
export interface FlashLedModule {
  getFlashLedConfigList(callback: (value0: FlightHubError, value1: FlashLedConfigList) => void): void;
  createFlashLedConfig(arg0: FlashLedConfigParams, callback: (value0: FlightHubError, value1: FlashLedConfig) => void): void;
  updateFlashLedConfig(arg0: string, arg1: FlashLedConfigParams, callback: (value0: FlightHubError, value1: FlashLedConfig) => void): void;
  deleteFlashLedConfig(arg0: string, callback: (value0: FlightHubError) => void): void;

}
export interface FlightControlModule {
  drcEmergencyStop(callback: (value0: FlightHubError) => void): void;
  drcEmergencyLanding(callback: (value0: FlightHubError) => void): void;
  drcForceLanding(callback: (value0: FlightHubError) => void): void;
  returnHome(callback: (value0: FlightHubError) => void): void;
  returnHomeCancel(callback: (value0: FlightHubError) => void): void;
  drcSendStickControl(arg0: StickControlData): void;
  drcSetDroneHover(arg0: number, callback: (value0: FlightHubError) => void): void;
  drcSetFollowMouseParameter(arg0: number, callback: (value0: FlightHubError) => void): void;
  drcSetNightLightsState(arg0: number, callback: (value0: FlightHubError) => void): void;
  drcSetStealthState(arg0: number, callback: (value0: FlightHubError) => void): void;
  drcOpenParachute(arg0: number, callback: (value0: FlightHubError) => void): void;
  drcSetFlashLed(arg0: FlashLedParams, callback: (value0: FlightHubError) => void): void;
  listenDrcFlashLed(callback: (value0: FlashLedStateInfo) => void): number;
  cancelListenDrcFlashLed(arg0: number): void;
  drcCameraLookAt(arg0: CameraLookAtParams, callback: (value0: FlightHubError) => void): void;
  listenDrcOsdInfo(callback: (value0: DrcOsdInfo) => void): number;
  cancelListenDrcOsdInfo(arg0: number): void;
  listenDrcBatteriesInfo(callback: (value0: DrcBatteriesInfo) => void): number;
  cancelListenDrcBatteriesInfo(arg0: number): void;
  listenDrcParachuteInfo(callback: (value0: DrcParachuteInfo) => void): number;
  cancelListenDrcParachuteInfo(arg0: number): void;

}
export interface FlightSettingsModule {
  setFlightSmartPlanMode(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: FlightSmartPlanModeResult) => void): void;
  setOutOfControlAction(arg0: string, arg1: string, callback: (value0: FlightHubError, value1: FlightOutOfControlActionResult) => void): void;
  setFlightTaskHeight(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: FlightCommanderHeightResult) => void): void;
  setRthAltitude(arg0: string, arg1: number, callback: (value0: FlightHubError, value1: FlightRthAltitudeResult) => void): void;
  setAirTransferEnable(arg0: string, arg1: boolean, callback: (value0: FlightHubError) => void): void;

}
export interface FlightTaskControlModule {
  pause(callback: (value0: FlightHubError) => void): void;
  resume(callback: (value0: FlightHubError) => void): void;
  listenWaylineTaskEvent(callback: (value0: WaylineTaskEvent) => void): number;
  cancelListenWaylineTaskEvent(arg0: number): void;

}
export interface FlightTaskModule {
  getFlightTaskList(arg0: FlightTaskListParams, callback: (value0: FlightHubError, value1: FlightTaskListResult) => void): void;
  getCommandTaskList(arg0: GetCommandTaskListParams, callback: (value0: FlightHubError, value1: GetCommandTaskListResults) => void): void;
  getFlightTaskTrack(arg0: GetFlightTaskTrackParams, callback: (value0: FlightHubError, value1: GetFlightTaskTrackResults) => void): void;
  createFlightTask(arg0: CreateTaskReq, callback: (value0: FlightHubError, value1: CreateTaskResp) => void): void;
  getFlightTaskDetail(arg0: string, callback: (value0: FlightHubError, value1: TaskDetail) => void): void;
  editFlightTask(arg0: string, arg1: EditTaskReq, callback: (value0: FlightHubError, value1: CreateTaskResp) => void): void;
  deleteFlightTask(arg0: string, callback: (value0: FlightHubError) => void): void;
  updateFlightTaskStatus(arg0: string, arg1: number, callback: (value0: FlightHubError) => void): void;
  batchUpdateFlightTaskStatus(arg0: BatchUpdateStatusReq, callback: (value0: FlightHubError) => void): void;
  getDeviceRecommendation(arg0: DeviceRecommendationReq, callback: (value0: FlightHubError, value1: DeviceRecommendationResp) => void): void;
  getDeviceTcas(arg0: (string)[], callback: (value0: FlightHubError, value1: GetTCAInfosResp) => void): void;
  updateDeviceTcas(arg0: (string)[], callback: (value0: FlightHubError) => void): void;
  startRoaming(arg0: StartRoamingParams, callback: (value0: FlightHubError) => void): void;
  setRoamingStationSn(arg0: SetRoamingStationSnParams, callback: (value0: FlightHubError, value1: SetRoamingStationSnResult) => void): void;
  getInFlightTaskTopos(arg0: (string)[], callback: (value0: FlightHubError, value1: GetInFlightTaskToposResult) => void): void;
  listenTaskTopoChanged(callback: (value0: TaskTopoChangedEvent) => void): number;
  cancelListenTaskTopoChanged(arg0: number): void;

}
export interface FlightTaskRecordModule {
  exportFlightRecords(arg0: string, arg1: ExportFlightRecordsRequestParams, callback: (value0: FlightHubError, value1: ExportFlightRecordsResults) => void): void;
  getExportFlightRecordsProgress(arg0: GetExportFlightRecordsProgressParams, callback: (value0: FlightHubError, value1: GetExportFlightRecordsProgressResults) => void): void;

}
export interface FlyToPointModule {
  start(arg0: FlyToPointParams, callback: (value0: FlightHubError, value1: string) => void): void;
  drcStop(callback: (value0: FlightHubError) => void): void;
  updateTargetPoints(arg0: FlyToUpdateTargetPointsParams, callback: (value0: FlightHubError) => void): void;
  listenFlyToTaskEvent(callback: (value0: FlyToTaskEvent) => void): number;
  cancelListenFlyToTaskEvent(arg0: number): void;
  subscribeFlyToDroneSelfPlanPath(callback: (value0: FlyToDroneSelfPlanPath) => void): number;
  unsubscribeFlyToDroneSelfPlanPath(arg0: number): void;
  subscribeFlyToPointProgress(callback: (value0: FlyToPointProgress) => void): number;
  unsubscribeFlyToPointProgress(arg0: number): void;

}
export interface HMSModule {
  QueryHistoryHMSData(arg0: HistoryHmsDataParam, callback: (value0: FlightHubError, value1: HistoryHmsDataResult) => void): void;

}
export interface InFlightWaylineModule {
  createInFlightWaylineTask(arg0: CreateInFlightWaylineTaskParams, callback: (value0: CreateInFlightWaylineTaskResult, value1: FlightHubError) => void): void;
  controlInFlightWaylineTask(arg0: number, callback: (value0: FlightHubError) => void): void;
  getActiveInFlightWaylineTask(callback: (value0: ActiveInFlightWaylineTaskInfo, value1: FlightHubError) => void): void;
  listenInFlightWaylineProgress(callback: (value0: InFlightWaylineProgress) => void): number;
  cancelListenInFlightWaylineProgress(arg0: number): void;

}
export interface LiveDeviceModule {
  listenLiveAvailableRange(callback: (value0: (LiveInfo)[]) => void): number;
  cancelListenLiveAvailableRange(arg0: number): void;
  getAudienceCount(arg0: AudienceCountGroup | null, callback: (value0: FlightHubError, value1: (DeviceAudienceCountItem)[]) => void): void;
  listenDockLiveStatus(callback: (value0: DockLiveStatus) => void): number;
  cancelListenDockLiveStatus(arg0: number): void;
  listenDockLiveCapacity(callback: (value0: DockLiveCapacity) => void): number;
  cancelListenDockLiveCapacity(arg0: number): void;

}
export interface LiveRecordModule {
  startLiveRecord(arg0: string, callback: (value0: FlightHubError) => void): void;
  stopLiveRecord(callback: (value0: FlightHubError) => void): void;
  getDeviceLiveRecords(arg0: string, callback: (value0: FlightHubError, value1: (LiveRecordItem)[]) => void): void;
  listenRecordState(callback: (value0: LiveRecordStateInfo) => void): number;
  cancelListenRecordState(arg0: number): void;
  notifyRecordState(arg0: LiveRecordStateInfo): void;

}
export interface LiveModule {
  start(callback: (value0: FlightHubError) => void): void;
  startWithURL(callback: (value0: FlightHubError, value1: LiveStreamStartResult) => void): void;
  stop(): void;
  stopWithURL(callback: (value0: FlightHubError) => void): void;
  subscribeLiveStream(callback: (value0: Uint8Array, value1: FrameInfo) => void): number;
  unSubscribeLiveStream(arg0: number): void;
  subscribeAiSeiInfo(callback: (value0: AiSeiInfo) => void): number;
  unSubscribeAiSeiInfo(arg0: number): void;
  subscribeArSeiInfo(callback: (value0: ArSeiInfo) => void): number;
  unSubscribeArSeiInfo(arg0: number): void;
  subscribeFovSeiInfo(callback: (value0: FovSeiInfo) => void): number;
  unSubscribeFovSeiInfo(arg0: number): void;
  subscribeAssistantSeiInfo(callback: (value0: AssistantSeiInfo) => void): number;
  unSubscribeAssistantSeiInfo(arg0: number): void;
  subscribeEisSeiInfo(callback: (value0: EisSeiInfo) => void): number;
  unSubscribeEisSeiInfo(arg0: number): void;
  setLiveQuality(arg0: LiveQualitySettingParams, callback: (value0: FlightHubError) => void): void;

}
export interface LiveSyncModule {
  createLiveSync(arg0: LiveSyncCreateParams, callback: (value0: FlightHubError, value1: LiveSyncCreateResult) => void): void;
  deleteLiveSync(arg0: string, callback: (value0: FlightHubError) => void): void;
  updateLiveSync(arg0: LiveSyncUpdateParams, callback: (value0: FlightHubError, value1: LiveSyncItem) => void): void;
  getLiveSyncList(arg0: LiveSyncListParams, callback: (value0: FlightHubError, value1: LiveSyncListResult) => void): void;
  getLiveSyncDevicesV2(callback: (value0: FlightHubError, value1: LiveSyncDevicesV2Result) => void): void;
  getLiveSyncSummary(callback: (value0: FlightHubError, value1: LiveSyncSummaryResult) => void): void;

}
export interface LogManagementModule {
  QueryDeviceLogList(arg0: string, arg1: (number)[], callback: (value0: FlightHubError, value1: DeviceLogListResult) => void): void;
  CreateDeviceLogReport(arg0: CreateDeviceLogReportRequestParam, callback: (value0: FlightHubError, value1: CreateDeviceLogReportResult) => void): void;
  LogReportList(arg0: string, arg1: number, arg2: number, callback: (value0: FlightHubError, value1: LogReportListResult) => void): void;
  LogReportOperation(arg0: string, arg1: string, callback: (value0: FlightHubError) => void): void;
  UploadLogAppendFile(arg0: string, callback: (value0: FlightHubError) => void): void;
  listenDeviceFileUploadProgress(arg0: string, callback: (value0: DeviceFileUploadProgress) => void): number;
  cancelListenDeviceFileUploadProgress(arg0: number): void;

}
export interface MaintenanceManagementModule {
  getRepairConfigs(arg0: GetDeviceRepairConfigParams, callback: (value0: FlightHubError, value1: DeviceRepairConfigResults) => void): void;
  createMaintenanceOrder(arg0: CreateMaintenanceOrderParams, callback: (value0: FlightHubError, value1: CreateMaintenanceOrderResults) => void): void;
  getMaintenanceOrderDetail(arg0: string, callback: (value0: FlightHubError, value1: MaintenanceOrderDetailResults) => void): void;
  getMaintenanceOrdersList(arg0: GetMaintenanceOrdersListParams, callback: (value0: FlightHubError, value1: MaintenanceOrdersListResults) => void): void;

}
export interface MediaServiceModule {
  getMediaFilesList(arg0: GetMediaFilesListParams, callback: (value0: FlightHubError, value1: GetMediaFilesListResults) => void): void;
  deleteMediaFiles(arg0: (bigint | number)[], callback: (value0: FlightHubError) => void): void;
  getMediaFilesDownloadURL(arg0: bigint | number, callback: (value0: FlightHubError, value1: GetMediaFilesDownloadUrlResults) => void): void;
  getMediaFilesDownloadURL(arg0: (string)[], callback: (value0: FlightHubError, value1: GetMediaFilesDownloadUrlListResults) => void): void;
  listenMediaFilePostProcessMessage(arg0: string, callback: (value0: MediaFilePostProcess) => void): number;
  cancelListenMediaFilePostProcessMessage(arg0: number): void;
  listenMediaFileDeviceUploadMessage(arg0: string, callback: (value0: MediaFileDeviceUpload) => void): number;
  cancelListenMediaFileDeviceUploadMessage(arg0: number): void;
  getMediaUploadSts(arg0: GetMediaUploadStsParams, callback: (value0: FlightHubError, value1: GetMediaUploadStsResult) => void): void;
  mediaUploadCallback(arg0: MediaUploadCallbackParams, callback: (value0: FlightHubError, value1: MediaUploadCallbackResult) => void): void;
  uploadGeoMediaFile(arg0: UploadGeoMediaFileParams, callback: (value0: FlightHubError, value1: UploadGeoMediaFileResult) => void): void;
  getMediaFileDetailById(arg0: number, callback: (value0: FlightHubError, value1: GetMediaFileDetailByIdResult) => void): void;
  getMediaFilesList(flightId: string, startIndex: number, pageSize: number, fileTypes: string[], deviceSn: string, startCreateTime: bigint | number, endCreateTime: bigint | number, callback: (error: FlightHubError, result: GetMediaFilesListResults) => void): void;
}
export interface NetworkTestModule {
  startNetworkTest(callback: (value0: FlightHubError, value1: NetworkTestProgressResult) => void): void;
  stopNetworkTest(callback: (value0: FlightHubError) => void): void;
  getNetworkTestProgress(callback: (value0: FlightHubError, value1: NetworkTestProgressResult) => void): void;
  subscribeNetworkTestProgress(callback: (value0: NetworkTestProgressResult) => void): number;
  unsubscribeNetworkTestProgress(arg0: number): void;

}
export interface OnboardAiModule {
  listenAIDataInfo(callback: (value0: AiDataInfo) => void): number;
  cancelListenAIDataInfo(arg0: number): void;
  AIIdentifySet(arg0: AiIdentifySetParam, callback: (value0: FlightHubError) => void): void;
  AIIdentifyFilterSet(arg0: AiIdentifyFilterSetParam, callback: (value0: FlightHubError) => void): void;
  AIIdentifyScoreSet(arg0: AiIdentifyScoreSetParam, callback: (value0: FlightHubError) => void): void;
  AIIdentifyScoreModeSet(arg0: AiIdentifyScoreModeSetParam, callback: (value0: FlightHubError) => void): void;
  AIIdentifyScoreReset(arg0: AiIdentifyScoreResetParam, callback: (value0: FlightHubError) => void): void;
  AIModelSelect(arg0: AiModelSelectParam, callback: (value0: FlightHubError) => void): void;
  DrcAISpotlightZoomSet(arg0: number, callback: (value0: FlightHubError) => void): void;
  DrcAISpotlightZoomSelect(arg0: AiSpotlightZoomSelectParams, callback: (value0: FlightHubError) => void): void;
  DrcAISpotlightZoomConfirm(callback: (value0: FlightHubError) => void): void;
  DrcAISpotlightZoomStop(callback: (value0: FlightHubError) => void): void;
  DrcAISpotlightZoomTrack(arg0: number, callback: (value0: FlightHubError) => void): void;
  DrcAIAlarmStart(arg0: AiAlarmStartParams, callback: (value0: FlightHubError) => void): void;
  DrcAIAlarmStop(callback: (value0: FlightHubError) => void): void;
  DrcAIModelsConfig(arg0: AiModelsConfigParams, callback: (value0: FlightHubError) => void): void;
  listenDrcAIAlarmState(callback: (value0: AiAlarmStateInfo) => void): number;
  cancelListenDrcAIAlarmState(arg0: number): void;

}
export interface PoiModule {
  enter(arg0: POIEnterParams, callback: (value0: FlightHubError, value1: string) => void): void;
  exit(callback: (value0: FlightHubError) => void): void;
  updateSpeed(arg0: number, callback: (value0: FlightHubError) => void): void;
  getTask(callback: (value0: FlightHubError, value1: POITaskInfo) => void): void;
  listenPoiTaskEvent(callback: (value0: PoiTaskEvent) => void): number;
  cancelListenPoiTaskEvent(arg0: number): void;
  listenFlightPoiProgress(callback: (value0: FlightPoiProgress) => void): number;
  cancelListenFlightPoiProgress(arg0: number): void;

}
export interface PsdkControlModule {
  listenDrcPsdkDeviceList(callback: (value0: PsdkDeviceList) => void): number;
  cancelListenDrcPsdkDeviceList(arg0: number): void;
  listenDrcPsdkStateSummaryInfo(arg0: number, callback: (value0: PsdkStateSummaryInfo) => void): number;
  cancelListenDrcPsdkStateSummaryInfo(arg0: number, arg1: number): void;
  listenDrcPsdkStateSpeakerInfo(arg0: number, callback: (value0: PsdkStateSpeakerInfo) => void): number;
  cancelListenDrcPsdkStateSpeakerInfo(arg0: number, arg1: number): void;
  listenDrcPsdkStateSearchlightInfo(arg0: number, callback: (value0: PsdkStateSearchlightInfo) => void): number;
  cancelListenDrcPsdkStateSearchlightInfo(arg0: number, arg1: number): void;
  DrcSearchlightModeSet(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  DrcSearchlightBrightnessSet(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  DrcSearchlightCalibration(arg0: number, callback: (value0: FlightHubError) => void): void;
  DrcSearchlightFineTuningSet(arg0: number, arg1: number, arg2: number, arg3: boolean, callback: (value0: FlightHubError) => void): void;
  DrcSearchlightWideFieldModeSet(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  DrcSearchlightLightGimbalControlSet(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  DrcSearchlightTypeSet(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  listenDrcPsdkSpeakerPlayProgressInfo(arg0: number, callback: (value0: PsdkSpeakerPlayProgressInfo) => void): number;
  cancelListenDrcPsdkSpeakerPlayProgressInfo(arg0: number, arg1: number): void;
  listenDrcPsdkFloatingWindowTextInfo(arg0: number, callback: (value0: PsdkFloatingWindowTextInfo) => void): number;
  cancelListenDrcPsdkFloatingWindowTextInfo(arg0: number, arg1: number): void;
  DrcSpeakerAudioPlayStart(arg0: number, arg1: PsdkSpeakerAudioPlayInfo, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerTTSPlayStart(arg0: number, arg1: PsdkSpeakerTTSPlayInfo, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerRealTimeStart(arg0: number, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerRealTimeStop(arg0: number, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerReplay(arg0: number, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerPlayStop(arg0: number, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerPlayVolumeSet(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerPlayModeSet(arg0: number, arg1: number, callback: (value0: FlightHubError) => void): void;
  DrcSpeakerTTSSet(arg0: number, arg1: PsdkSpeakerTTSconfig, callback: (value0: FlightHubError) => void): void;
  DrcWidgetValueSet(arg0: number, arg1: number, arg2: number, callback: (value0: FlightHubError) => void): void;
  DrcWidgetInputBoxTextSet(arg0: number, arg1: string, callback: (value0: FlightHubError) => void): void;
  listenPsdkSpeakerAudioPlayStartProgress(callback: (value0: PsdkSpeakerPlayStartProgress) => void): number;
  cancelListenPsdkSpeakerAudioPlayStartProgress(arg0: number): void;
  listenPsdkSpeakerTtsPlayStartProgress(callback: (value0: PsdkSpeakerPlayStartProgress) => void): number;
  cancelListenPsdkSpeakerTtsPlayStartProgress(arg0: number): void;
  listenDronePsdkUiResource(callback: (value0: DronePsdkUiResource) => void): number;
  cancelListenDronePsdkUiResource(arg0: number): void;

}
export interface PsdkResourceModule {
  getPsdkSpeakerResourceList(callback: (value0: FlightHubError, value1: PsdkSpeakerResourceList) => void): void;
  createPsdkSpeakerResource(arg0: CreatePsdkSpeakerResourceParams, callback: (value0: FlightHubError, value1: PsdkSpeakerResource) => void): void;
  editPsdkSpeakerResource(arg0: EditPsdkSpeakerResourceParams, callback: (value0: FlightHubError, value1: PsdkSpeakerResource) => void): void;
  deletePsdkSpeakerResource(arg0: number, callback: (value0: FlightHubError) => void): void;
  getSTS(callback: (value0: FlightHubError, value1: STSInfo) => void): void;
  getPsdkWidgetResources(arg0: GetPsdkWidgetResourceParams, callback: (value0: FlightHubError, value1: PsdkWidgetResourceList) => void): void;
  uploadSpeakerAudioFile(arg0: string, arg1: STSInfo, callback: (value0: FlightHubError) => void): void;

}
export interface PullStreamModule {
  start(arg0: string, callback: (value0: number) => void): void;
  stop(): void;
  subscribeStream(callback: (value0: Uint8Array, value1: FrameInfo) => void): number;
  unSubscribeStream(arg0: number): void;
  setErrorCallback(callback: (value0: number, value1: string) => void): void;
  isStreaming(): boolean;
  getStreamInfo(): string;

}
export interface Relay {
  getSn(): string;
  getRelayControlModule(): RelayControlModule | null;
  getRtkCalibrationModule(): RtkCalibrationModule | null;

}
export interface RelayControlModule {
  setRelayBroadcastHide(arg0: boolean, callback: (value0: FlightHubError) => void): void;
  setRelaySSID(arg0: string, callback: (value0: FlightHubError) => void): void;
  setRelayPassword(arg0: string, callback: (value0: FlightHubError) => void): void;
  setRelaySearchMode(arg0: number, callback: (value0: FlightHubError) => void): void;
  setRelayOccupiedStatus(arg0: number, callback: (value0: FlightHubError, value1: SetRelayOccupiedStatusResult) => void): void;
  relayReboot(callback: (value0: FlightHubError, value1: RelayRebootResult) => void): void;
  relayDisconnect(callback: (value0: FlightHubError, value1: RelayDisconnectResult) => void): void;

}
export interface RemoteController {
  getSn(): string;

}
export interface RtkCalibrationModule {
  calibrationByNetwork(arg0: NetworkRtkCalibrationParams, callback: (value0: FlightHubError, value1: RtkCalibrationResult) => void): void;
  calibrationByManual(arg0: ManulRtkCalibrationParams, callback: (value0: FlightHubError, value1: RtkCalibrationResult) => void): void;
  subscribeCalibrationProgress(callback: (value0: RtkCalibrationResult) => void): number;
  unsubscribeCalibrationProgress(arg0: number): void;

}
export interface SafetyServiceModule {
  searchSignalMaps(arg0: (string)[], arg1: (string)[], callback: (value0: FlightHubError, value1: SignalMapsResults) => void): void;
  createCustomizedFlightAreas(arg0: CreateCustomizedFlightAreasParams, callback: (value0: FlightHubError, value1: CreateFlightAreasResults) => void): void;
  getCustomizedFlightAreas(arg0: GetCustomizedFlightAreasParams, callback: (value0: FlightHubError, value1: GetFlightAreasResults) => void): void;
  updateCustomizedFlightAreas(arg0: UpdateCustomizedFlightAreasParams, callback: (value0: FlightHubError, value1: UpdateFlightAreasResults) => void): void;
  deleteCustomizedFlightAreas(arg0: string, callback: (value0: FlightHubError) => void): void;
  syncCustomizedFlightAreas(arg0: (string)[], callback: (value0: FlightHubError, value1: SyncFlightAreasResults) => void): void;
  getFlightAreasSyncStatus(arg0: (string)[], callback: (value0: FlightHubError, value1: GetAreasSyncStatusResults) => void): void;
  getOfflineMapsModelInfo(callback: (value0: FlightHubError, value1: GetOfflineMapsModelInfoResults) => void): void;
  updateOfflineMapsModelInfo(arg0: UpdateOfflineMapsParams, callback: (value0: FlightHubError) => void): void;
  cancelOfflineMapsModelInfo(callback: (value0: FlightHubError) => void): void;
  setOfflineMaps(arg0: SetOfflineMapsParams, callback: (value0: FlightHubError) => void): void;
  syncOfflineMaps(arg0: (string)[], callback: (value0: FlightHubError, value1: OfflineMapsSyncResults) => void): void;
  getOfflineMapsSyncStatus(arg0: (string)[], callback: (value0: FlightHubError, value1: GetOfflineMapsSyncStatusResults) => void): void;
  getUnlockLicenseList(arg0: QueryDeviceUnlockLicenseListParam, callback: (value0: FlightHubError, value1: QueryDeviceUnlockLicenseListResult) => void): void;
  switchUnlockLicense(arg0: SwitchUnlockLicenseParam, callback: (value0: FlightHubError) => void): void;
  checkUnlockLicense(arg0: CheckUnlockLicenseParam, callback: (value0: FlightHubError, value1: CheckUnlockLicenseResult) => void): void;
  submitUnlockLicense(arg0: ImportUnlockLicenseParam, callback: (value0: FlightHubError) => void): void;
  clearDeviceUnlockLicense(arg0: string, callback: (value0: FlightHubError) => void): void;
  uploadUnlockLicenseFile(arg0: string, callback: (value0: FlightHubError, value1: UploadUnlockLicenseFileResult) => void): void;
  listenDroneOfflineMapEnable(arg0: string, callback: (value0: DroneOfflineMapEnable) => void): number;
  cancelListenDroneOfflineMapEnable(arg0: number): void;

}
export interface Stream {
  getCustomSEIModule(): CustomSEIModule | null;
  getPullStreamModule(arg0: string): PullStreamModule | null;

}
export interface TakeoffModule {
  takeoff(arg0: TakeoffParams, callback: (value0: FlightHubError, value1: TakeoffResult) => void): void;
  listenCommandTaskEvent(callback: (value0: CommandTaskEvent) => void): number;
  cancelListenCommandTaskEvent(arg0: number): void;
  listenDroneCommanderFlightMode(callback: (value0: DroneCommanderFlightMode) => void): number;
  cancelListenDroneCommanderFlightMode(arg0: number): void;
  listenDroneCurrentCommanderFlightMode(callback: (value0: DroneCurrentCommanderFlightMode) => void): number;
  cancelListenDroneCurrentCommanderFlightMode(arg0: number): void;
  listenDroneCommanderModeLostAction(callback: (value0: DroneCommanderModeLostAction) => void): number;
  cancelListenDroneCommanderModeLostAction(arg0: number): void;

}
export interface TerraBuildModule {
  getReconstructionSettings(arg0: string, callback: (value0: FlightHubError, value1: TerraBuildSettingsResult) => void): void;
  getQualityReport(arg0: string, arg1: string, arg2: string, callback: (value0: FlightHubError, value1: TerraBuildQualityReportResult) => void): void;
  getModelFileList(arg0: number, arg1: number, callback: (value0: FlightHubError, value1: TerraBuildModelFileListResult) => void): void;
  getModelFileUrl(arg0: number, arg1: number, callback: (value0: FlightHubError, value1: TerraBuildModelFileUrlResult) => void): void;
  createReconstruction(arg0: CreateReconstructionParams, callback: (value0: FlightHubError, value1: TerraBuildCreateReconstructionResult) => void): void;
  retryReconstruction(arg0: string, callback: (value0: FlightHubError) => void): void;
  stopReconstruction(arg0: string, callback: (value0: FlightHubError) => void): void;
  getSfmResult(arg0: string, callback: (value0: FlightHubError, value1: TerraBuildSfmResult) => void): void;
  deleteModelFile(arg0: number, callback: (value0: FlightHubError) => void): void;
  batchDeleteModelFiles(arg0: (number)[], callback: (value0: FlightHubError) => void): void;
  createPanorama(arg0: CreatePanoramaParams, callback: (value0: FlightHubError, value1: TerraBuildCreatePanoramaResult) => void): void;
  getReconstructionImages(arg0: string, callback: (value0: FlightHubError, value1: TerraBuildReconstructionImagesResult) => void): void;
  listenReconstructionStatusChanged(callback: (value0: TerraBuildReconstructionStatusChanged) => void): number;
  cancelListenReconstructionStatusChanged(arg0: number): void;
  uploadModelCallback(arg0: TerraUploadCallbackParams, callback: (value0: FlightHubError, value1: TerraUploadCallbackResult) => void): void;
  renameModel(arg0: number, arg1: TerraRenameModelParams, callback: (value0: FlightHubError) => void): void;
  showModelOnMap(arg0: TerraShowOnMapParams, callback: (value0: FlightHubError, value1: TerraShowOnMapResult) => void): void;
  listenTerraUnzipProgress(callback: (value0: TerraUnzipProgressMsg) => void): number;
  cancelListenTerraUnzipProgress(arg0: number): void;
  listenTerraModelStatusChanged(callback: (value0: TerraModelStatusChangedMsg) => void): number;
  cancelListenTerraModelStatusChanged(arg0: number): void;
  listenTerraFileShowOnMap(callback: (value0: TerraFileShowOnMapMsg) => void): number;
  cancelListenTerraFileShowOnMap(arg0: number): void;
  listenTerraMediaFileHideOnMap(callback: (value0: TerraMediaFileHideOnMapMsg) => void): number;
  cancelListenTerraMediaFileHideOnMap(arg0: number): void;
  listenTerraMediaFileShowOnMap(callback: (value0: TerraMediaFileShowOnMapMsg) => void): number;
  cancelListenTerraMediaFileShowOnMap(arg0: number): void;
  getModelDetail(arg0: number, callback: (value0: FlightHubError, value1: TerraModelDetailResult) => void): void;
  setLasWkt(arg0: TerraSetLasWktParams, callback: (value0: FlightHubError) => void): void;
  createPanorama(name: string, folderUuids: string[], wkt: string, isShownOnMap: boolean, callback: (error: FlightHubError, result: TerraBuildCreatePanoramaResult) => void): void;
}
export interface TestFlightModule {
  generateTryFlightWayline(arg0: string, arg1: GenerateTryFlightWaylineParams, callback: (value0: GenerateTryFlightWaylineResponse, value1: FlightHubError) => void): void;
  createTestFlightTask(arg0: string, arg1: CreateTestFlightTaskParams, callback: (value0: CreateTestFlightTaskResponse, value1: FlightHubError) => void): void;

}
export interface WaylineManageModule {
  getWaylineList(arg0: GetWaylineListParam, callback: (value0: FlightHubError, value1: GetWaylineListResult) => void): void;
  getWaylineDetail(arg0: string, callback: (value0: FlightHubError, value1: GetWaylineDetailResult) => void): void;
  batchDeleteWaylines(arg0: (string)[], callback: (value0: FlightHubError, value1: BatchDeleteWaylinesResult) => void): void;
  updateWayline(arg0: string, arg1: string, callback: (value0: FlightHubError, value1: UpdateWaylineResult) => void): void;
  submitWaylineInfo(arg0: SubmitWaylineInfoParam, callback: (value0: FlightHubError) => void): void;
  batchDownloadWaylines(arg0: BatchDownloadWaylinesParam, callback: (value0: FlightHubError, value1: BatchDownloadWaylinesResult) => void): void;
  duplicateWayline(arg0: DuplicateWaylineParam, callback: (value0: FlightHubError, value1: DuplicateWaylineResult) => void): void;
  copyWayline(arg0: CopyWaylineParam, callback: (value0: FlightHubError, value1: CopyWaylineResult) => void): void;
  concatWayline(arg0: ConcatWaylineParam, callback: (value0: FlightHubError, value1: ConcatWaylineResult) => void): void;
  importKmz(arg0: (string)[], callback: (value0: FlightHubError, value1: ImportKmzResult) => void): void;
  listenImportWaylineEvent(callback: (value0: ImportWaylineEventResult) => void): number;
  cancelListenImportWaylineEvent(arg0: number): void;
  getWaylineEditorSts(arg0: GetWaylineEditorStsParams, callback: (value0: FlightHubError, value1: GetWaylineEditorStsResult) => void): void;

}
export interface Workspace {
  getLogManagementModule(): LogManagementModule | null;
  getHMSModule(): HMSModule | null;
  getMediaServiceModule(): MediaServiceModule | null;
  getSafetyServiceModule(): SafetyServiceModule | null;
  getFlightTaskRecordModule(): FlightTaskRecordModule | null;
  getDiagnosisManagementModule(): DiagnosisManagementModule | null;
  getMaintenanceManagementModule(): MaintenanceManagementModule | null;
  getFlightTaskModule(): FlightTaskModule | null;
  getDeviceManageModule(): DeviceManageModule | null;
  getFirmwareManageModule(): FirmwareManageModule | null;
  getWaylineManageModule(): WaylineManageModule | null;
  getPsdkResourceModule(): PsdkResourceModule | null;
  getFlashLedModule(): FlashLedModule | null;
  getTerraBuildModule(): TerraBuildModule | null;
  getAIInsideManageModule(): AIInsideManageModule | null;
  getElementModule(): ElementModule | null;
  getAIAlertModule(): AIAlertModule | null;
  getLiveSyncModule(): LiveSyncModule | null;

}
export const MODULE_METHODS = {"AIAlertModule":["postDeviceSetting","getDeviceSetting","postAlgorithmSetting","getAlgorithmSetting","getAiAlertFlights","getAiAlertRecords"],"AIBoxModule":["fetchAIBoxInfo","fetchFileDownloadUrl","fetchAppList","fetchAppListProgress","exportFile","exportFileProgress","uploadAIBoxFile","installApp","installAppProgress","operateApp"],"AIInsideManageModule":["getAIInsideModels","getAIInsideModelDevices","getAIInsideModelDevicesSummary","operateAIInsideModel","createAIInsideAlgorithm","fileUploadAIInsideAlgorithm","deleteAIInsideAlgorithm","uploadAlgorithmFile"],"BaseStation":["getSn","getLiveStream","getLiveDeviceModule","getRtkCalibrationModule","getNetworkTestModule"],"CameraControlModule":["drcSwitchLiveLens","drcSetPhotoStorageSettings","drcSetVideoStorageSettings","drcSetNightSceneMode","drcTakePhoto","drcSmartPhotoTakePhoto","drcStartRecord","drcStopRecord","drcZoomAtTarget","drcSetFocalLength","drcSetLinkageZoom","drcResetGimbal","lookAtTarget","drcSendCameraScreenDrag","drcStartPanorama","drcStopPanorama","listenDrcPanoramaStatus","cancelListenDrcPanoramaStatus","drcSetPhotoSize","drcSetIntervalTakePhoto","drcIntervalTakePhoto","listenDrcIntervalTakePhotoStatus","cancelListenDrcIntervalTakePhotoStatus","drcStopTakePhoto","drcCameraAimAtTarget","drcSwitchCameraMode","listenDrcCameraModeAvailableRange","cancelListenDrcCameraModeAvailableRange","listenDrcCameraState","cancelListenDrcCameraState","listenDrcLiveviewWorldRegion","cancelListenDrcLiveviewWorldRegion","listenDrcCameraWideLensState","cancelListenDrcCameraWideLensState","listenDrcCameraZoomLensState","cancelListenDrcCameraZoomLensState","listenDrcCameraMeasureTarget","cancelListenDrcCameraMeasureTarget","listenDrcNightModeSettings","cancelListenDrcNightModeSettings","listenDrcGimbalState","cancelListenDrcGimbalState","listenDrcLiveVideoInfo","cancelListenDrcLiveVideoInfo","listenDrcThermalGainMode","cancelListenDrcThermalGainMode","listenDrcCameraIrLensState","cancelListenDrcCameraIrLensState","listenDrcCameraIrThermometry","cancelListenDrcCameraIrThermometry","listenDrcCameraWatermarkSettings","cancelListenDrcCameraWatermarkSettings","listenDrcCameraStorageInfo","cancelListenDrcCameraStorageInfo","listenDrcCameraIrPipState","cancelListenDrcCameraIrPipState","listenDrcCameraIsothermPolygon","cancelListenDrcCameraIsothermPolygon","listenDrcCameraMediaStorage","cancelListenDrcCameraMediaStorage","listenDrcCameraAlgorithmDehazeInfo","cancelListenDrcCameraAlgorithmDehazeInfo","listenDrcCameraPreRecordedInfo","cancelListenDrcCameraPreRecordedInfo","listenDrcCameraCapability","cancelListenDrcCameraCapability","listenDrcCameraSettableCapability","cancelListenDrcCameraSettableCapability","listenDrcCameraVisibleCapability","cancelListenDrcCameraVisibleCapability","listenDrcCameraPhotoInfo","cancelListenDrcCameraPhotoInfo","drcSetThermalGainMode","drcSetCameraApertureValue","drcSetCameraExposureMode","drcSetCameraExposureValue","drcSetCameraFocusMode","drcSetCameraFocusValue","drcSetCameraIso","drcSetCameraMechanicalShutter","drcCameraPointFocusAction","drcSetCameraShutter","drcSetCameraWatermark","drcSetCameraDewarping","drcSetCameraScreenSplit","drcCleanFog","drcSetThermalCurrentPalette","drcSetThermalSuperResolutionEnable","drcSetIrMeteringMode","drcSetIrMeteringPoint","drcSetIrMeteringArea","drcSetIrDisplayMode","drcSetIrEnhanceMode","drcSetIrMixRate","drcSetIsothermEnable","drcSetIsothermColorRenderingType","drcSetIsothermLowerUpperRange","drcSetIsothermRenderingPolygon","drcSetIsothermRoiBasedRenderingEnable","drcSetInfraredFillLightEnable","drcSetCameraNightVisionEnable","drcResetCameraSettings","drcSetCameraDenoiseLevelSet","drcSetVideoResolution","drcSetCameraPhotoFormat","drcSetPreRecordedStatus","drcSetPreRecordedTime","drcSetCountDownAction","drcSetAssistantVideoMode","drcSetAssistantVideoSwitch","drcSetAlgorithmDehazeMode","drcSetAlgorithmDehazeLevel","listenDroneCameraWatermarkSettings","cancelListenDroneCameraWatermarkSettings"],"ControlAuthModule":["acquireFlightControlAuthority","releaseFlightControlAuthority","listenFlightControlAuthority","cancelListenFlightControlAuthority","acquirePayloadControlAuthority","releasePayloadControlAuthority","listenPayloadControlAuthority","cancelListenPayloadControlAuthority"],"CustomSEIModule":["CustomSEIEncode","CustomSEIDecode"],"DeployModule":["listenDockDeparturePoint","cancelListenDockDeparturePoint","listenAircraftVisualScoutStatus","cancelListenAircraftVisualScoutStatus","listenAircraftVisualScoutAbnormalInfo","cancelListenAircraftVisualScoutAbnormalInfo","listenAircraftVisualScoutObstacleInfo","cancelListenAircraftVisualScoutObstacleInfo","listenAircraftEphemerisDownloadState","cancelListenAircraftEphemerisDownloadState","listenAircraftEphemerisInfo","cancelListenAircraftEphemerisInfo","downloadEphemeris","executeInOutWaylineDetect","setInOutWaylineFlight","getInOutWaylineFlightSetting"],"DeviceDebugModule":["openDebugMode","closeDebugMode","openDockCover","getOpenDockCoverProgress","subscribeDockCoverOpenProgress","unsubscribeDockCoverOpenProgress","closeDockCover","getCloseDockCoverProgress","subscribeDockCoverCloseProgress","unsubscribeDockCoverCloseProgress","deviceReboot","subscribeDeviceRebootProgress","unsubscribeDeviceRebootProgress","getDeviceRebootProgress","deviceFormat","getDeviceFormatProgress","subscribeDeviceFormatProgress","unsubscribeDeviceFormatProgress","openDrone","subscribeDroneOpenProgress","unsubscribeDroneOpenProgress","closeDrone","subscribeDroneCloseProgress","unsubscribeDroneCloseProgress","subscribeDroneFormatProgress","unsubscribeDroneFormatProgress","droneFormat","droneSdrWorkMode","openCharge","subscribeDroneChargeOpenProgress","unsubscribeDroneChargeOpenProgress","closeCharge","subscribeDroneChargeCloseProgress","unsubscribeDroneChargeCloseProgress","setDockAirConditionerMode","setDockSilentMode","setDistanceLimit","setHeightLimit","setObstacleAvoidance","setRemainingPowerForRth","setNightLightsState","switchAlarmLightState","esimOperatorSwitch","subscribeDeviceEsimOperatorSwitchProgress","unsubscribeDeviceEsimOperatorSwitchProgress","simSlotSwitch","subscribeDeviceSimSlotSwitchProgress","unsubscribeDeviceSimSlotSwitchProgress","setBatteryStoreMode","startManualBatterySwap","getManualBatterySwapProgress","setDonglePowerSwitch","setLowPowerSwitch","getEsimOperatorSwitchProgress","setGeoCagingEnable","cloudEnvironmentSwitch","cloudEnvironmentSwitchCallback","listenDeviceCloudEnvironmentSwitchProgress","cancelListenDeviceCloudEnvironmentSwitchProgress"],"DeviceHMSModule":["listenDeviceHMS","cancelListenDeviceHMS"],"DeviceManageModule":["getDeviceList","getDeviceDetailInfo","modifyDeviceName","listenWorkspaceDeviceChanged","cancelListenWorkspaceDeviceChanged","listenDeviceTopoChanged","cancelListenDeviceTopoChanged","unbindDevice","getDockDeviceStatus","getDroneDeviceStatus"],"DeviceStateModule":["listenDockOnlineStatus","cancelListenDockOnlineStatus","listenDroneOnlineStatus","cancelListenDroneOnlineStatus"],"DiagnosisManagementModule":["createSelfDiagnosis","operateSelfDiagnosis","getSelfDiagnosisReport","getSelfDiagnosisReportList"],"Dock":["getLiveStream","getLiveRecord","getLiveDeviceModule","getDockOsdModule","getDeployModule","getDockControlModule","getRtkCalibrationModule","getNetworkTestModule","getDeviceDebugModule","getDeviceStateModule","getDeviceHMSModule"],"DockControlModule":["changeDockCameraPosition","listenDockAirConditionerStatusInfo","cancelListenDockAirConditionerStatusInfo","listenDockSupplementLightState","cancelListenDockSupplementLightState","setDockSupplementLightState","setDockChargeState","setDockCoverState","setDockAirConditionerMode"],"DockOsdModule":["listenDockLocation","cancelListenDockLocation","listenDroneInDock","cancelListenDroneInDock","listenDockCoverState","cancelListenDockCoverState","listenDockDroneChargeState","cancelListenDockDroneChargeState","listenDockMeteorologicalInfo","cancelListenDockMeteorologicalInfo","listenDockBackupBatteryInfo","cancelListenDockBackupBatteryInfo","listenDockMaintainStatusInfo","cancelListenDockMaintainStatusInfo","listenDockModeCode","cancelListenDockModeCode","listenFlightTaskStepCode","cancelListenFlightTaskStepCode","listenDockSubDevice","cancelListenDockSubDevice","listenDockNetworkState","cancelListenDockNetworkState","listenDockMediaFileDetail","cancelListenDockMediaFileDetail","listenDockWirelessLink","cancelListenDockWirelessLink","listenDockJobNumber","cancelListenDockJobNumber","listenDockPowerState","cancelListenDockPowerState","listenDockStorageState","cancelListenDockStorageState","listenDockFirstPowerOnTime","cancelListenDockFirstPowerOnTime","listenDockAccumulatedRunningTime","cancelListenDockAccumulatedRunningTime","listenDockAlternateLandPoint","cancelListenDockAlternateLandPoint","listenDockPositionState","cancelListenDockPositionState","listenDockActivationTime","cancelListenDockActivationTime","listenDockBatteryStoreMode","cancelListenDockBatteryStoreMode","listenDockAlarmState","cancelListenDockAlarmState","listenDockDroneBatteryMaintenanceInfo","cancelListenDockDroneBatteryMaintenanceInfo","listenDockEmergencyStopState","cancelListenDockEmergencyStopState","listenDockSilentMode","cancelListenDockSilentMode","listenDockUserExperienceImprovement","cancelListenDockUserExperienceImprovement","listenDockDrcState","cancelListenDockDrcState","listenDockPutterState","cancelListenDockPutterState","listenDockRelativeAlternateLandPoint","cancelListenDockRelativeAlternateLandPoint","listenDockSelfConvergeCoordinate","cancelListenDockSelfConvergeCoordinate","listenDockFirmwareInfo","cancelListenDockFirmwareInfo","listenDockDongleInfos","cancelListenDockDongleInfos","listenDockAirConditionerMode","cancelListenDockAirConditionerMode"],"DrcModule":["listenLinkStatus","cancelListenLinkStatus","connectDrcLink","disconnectDrcLink","drcRtcQualityTest","listenDrcDelayInfo","cancelListenDrcDelayInfo","listenDrcCountDownInfo","cancelListenDrcCountDownInfo"],"Drone":["getLiveStream","getLiveRecord","getLiveDeviceModule","getTakeoffModule","getFlightControlModule","getControlAuthModule","getDrcModule","getFlightSettingsModule","getTestFlightModule","getOnboardAiModule","getPsdkControlModule","getCameraControlModule","getFlyToPointModule","getFlightTaskControlModule","getPoiModule","getInFlightWaylineModule","getDroneOsdModule","getDeviceStateModule","getDeviceHMSModule","getDeviceDebugModule","getAIBoxModule"],"DroneOsdModule":["listenAircraftBatteryInfo","cancelListenAircraftBatteryInfo","listenAircraftAttitude","cancelListenAircraftAttitude","listenAircraftLocation","cancelListenAircraftLocation","listenAircraftModeCode","cancelListenAircraftModeCode","listenAircraftWindSpeed","cancelListenAircraftWindSpeed","listenFlightTasksException","cancelListenFlightTasksException","listenAircraftControlCode","cancelListenAircraftControlCode","listenAircraftSpeed","cancelListenAircraftSpeed","listenAircraftPayloadsCameraLiveviewWorldRegion","cancelListenAircraftPayloadsCameraLiveviewWorldRegion","listenAircraftPayloadsGimbalAttitude","cancelListenAircraftPayloadsGimbalAttitude","listenAircraftPayloadsList","cancelListenAircraftPayloadsList","listenControlRightsCloudControlStatus","cancelListenControlRightsCloudControlStatus","listenControlRightsDeviceControlStatus","cancelListenControlRightsDeviceControlStatus","listenFlightTasksMediaFileDisplayAvailable","cancelListenFlightTasksMediaFileDisplayAvailable","listenAircraftPayloadsOsdInfo","cancelListenAircraftPayloadsOsdInfo","listenDroneModeCodeReason","cancelListenDroneModeCodeReason","listenDroneDongleInfos","cancelListenDroneDongleInfos","listenDroneFlysafeDatabaseVersion","cancelListenDroneFlysafeDatabaseVersion","listenDroneWpmzVersion","cancelListenDroneWpmzVersion","listenAircraftGear","cancelListenAircraftGear","listenAircraftHomeDistance","cancelListenAircraftHomeDistance","listenAircraftPositionState","cancelListenAircraftPositionState","listenAircraftControlSource","cancelListenAircraftControlSource","listenAircraftLimitsInfo","cancelListenAircraftLimitsInfo","listenAircraftBatteryWarningThresholds","cancelListenAircraftBatteryWarningThresholds","listenAircraftFirmwareStatus","cancelListenAircraftFirmwareStatus","listenAircraftTotalFlightInfo","cancelListenAircraftTotalFlightInfo","listenAircraftActivationTime","cancelListenAircraftActivationTime","listenAircraftMaintainStatusInfo","cancelListenAircraftMaintainStatusInfo","listenAircraftNightLightsState","cancelListenAircraftNightLightsState","listenAircraftObstacleAvoidanceState","cancelListenAircraftObstacleAvoidanceState","listenAircraftStorageInfo","cancelListenAircraftStorageInfo","listenAircraftTrackId","cancelListenAircraftTrackId","listenAircraftComplianceInfo","cancelListenAircraftComplianceInfo","listenAircraftPayloadsCamerasList","cancelListenAircraftPayloadsCamerasList","listenAircraftRcLostAction","cancelListenAircraftRcLostAction","listenAircraftRthInfo","cancelListenAircraftRthInfo","listenAircraftHomeGeographicalInfo","cancelListenAircraftHomeGeographicalInfo","listenAircraftCurrentRthMode","cancelListenAircraftCurrentRthMode","listenHsiInfo","cancelListenHsiInfo"],"ElementModule":["createElement","updateElement","listElementHierarchy","setElementVisibility","deleteElement","listenElementCreate","cancelListenElementCreate","listenElementUpdate","cancelListenElementUpdate","listenElementDelete","cancelListenElementDelete"],"FirmwareManageModule":["getLatestFirmwareReleaseNote","invokeFirmwareUpgrade","queryFirmwareUpgradeProgress","uploadFirmwareFile","releaseFirmware","unReleaseFirmware","deleteFirmware","queryFirmwareList","queryFirmwareCompatibilityConfig","checkFirmwareStatus","submitFirmwareInfo","listenDeviceOtaProgress","cancelListenDeviceOtaProgress"],"FlashLedModule":["getFlashLedConfigList","createFlashLedConfig","updateFlashLedConfig","deleteFlashLedConfig"],"FlightControlModule":["drcEmergencyStop","drcEmergencyLanding","drcForceLanding","returnHome","returnHomeCancel","drcSendStickControl","drcSetDroneHover","drcSetFollowMouseParameter","drcSetNightLightsState","drcSetStealthState","drcOpenParachute","drcSetFlashLed","listenDrcFlashLed","cancelListenDrcFlashLed","drcCameraLookAt","listenDrcOsdInfo","cancelListenDrcOsdInfo","listenDrcBatteriesInfo","cancelListenDrcBatteriesInfo","listenDrcParachuteInfo","cancelListenDrcParachuteInfo"],"FlightSettingsModule":["setFlightSmartPlanMode","setOutOfControlAction","setFlightTaskHeight","setRthAltitude","setAirTransferEnable"],"FlightTaskControlModule":["pause","resume","listenWaylineTaskEvent","cancelListenWaylineTaskEvent"],"FlightTaskModule":["getFlightTaskList","getCommandTaskList","getFlightTaskTrack","createFlightTask","getFlightTaskDetail","editFlightTask","deleteFlightTask","updateFlightTaskStatus","batchUpdateFlightTaskStatus","getDeviceRecommendation","getDeviceTcas","updateDeviceTcas","startRoaming","setRoamingStationSn","getInFlightTaskTopos","listenTaskTopoChanged","cancelListenTaskTopoChanged"],"FlightTaskRecordModule":["exportFlightRecords","getExportFlightRecordsProgress"],"FlyToPointModule":["start","drcStop","updateTargetPoints","listenFlyToTaskEvent","cancelListenFlyToTaskEvent","subscribeFlyToDroneSelfPlanPath","unsubscribeFlyToDroneSelfPlanPath","subscribeFlyToPointProgress","unsubscribeFlyToPointProgress"],"HMSModule":["QueryHistoryHMSData"],"InFlightWaylineModule":["createInFlightWaylineTask","controlInFlightWaylineTask","getActiveInFlightWaylineTask","listenInFlightWaylineProgress","cancelListenInFlightWaylineProgress"],"LiveDeviceModule":["listenLiveAvailableRange","cancelListenLiveAvailableRange","getAudienceCount","listenDockLiveStatus","cancelListenDockLiveStatus","listenDockLiveCapacity","cancelListenDockLiveCapacity"],"LiveRecordModule":["startLiveRecord","stopLiveRecord","getDeviceLiveRecords","listenRecordState","cancelListenRecordState","notifyRecordState"],"LiveModule":["start","startWithURL","stop","stopWithURL","subscribeLiveStream","unSubscribeLiveStream","subscribeAiSeiInfo","unSubscribeAiSeiInfo","subscribeArSeiInfo","unSubscribeArSeiInfo","subscribeFovSeiInfo","unSubscribeFovSeiInfo","subscribeAssistantSeiInfo","unSubscribeAssistantSeiInfo","subscribeEisSeiInfo","unSubscribeEisSeiInfo","setLiveQuality"],"LiveSyncModule":["createLiveSync","deleteLiveSync","updateLiveSync","getLiveSyncList","getLiveSyncDevicesV2","getLiveSyncSummary"],"LogManagementModule":["QueryDeviceLogList","CreateDeviceLogReport","LogReportList","LogReportOperation","UploadLogAppendFile","listenDeviceFileUploadProgress","cancelListenDeviceFileUploadProgress"],"MaintenanceManagementModule":["getRepairConfigs","createMaintenanceOrder","getMaintenanceOrderDetail","getMaintenanceOrdersList"],"MediaServiceModule":["getMediaFilesList","deleteMediaFiles","getMediaFilesDownloadURL","getMediaFilesDownloadURL","listenMediaFilePostProcessMessage","cancelListenMediaFilePostProcessMessage","listenMediaFileDeviceUploadMessage","cancelListenMediaFileDeviceUploadMessage","getMediaUploadSts","mediaUploadCallback","uploadGeoMediaFile","getMediaFileDetailById"],"NetworkTestModule":["startNetworkTest","stopNetworkTest","getNetworkTestProgress","subscribeNetworkTestProgress","unsubscribeNetworkTestProgress"],"OnboardAiModule":["listenAIDataInfo","cancelListenAIDataInfo","AIIdentifySet","AIIdentifyFilterSet","AIIdentifyScoreSet","AIIdentifyScoreModeSet","AIIdentifyScoreReset","AIModelSelect","DrcAISpotlightZoomSet","DrcAISpotlightZoomSelect","DrcAISpotlightZoomConfirm","DrcAISpotlightZoomStop","DrcAISpotlightZoomTrack","DrcAIAlarmStart","DrcAIAlarmStop","DrcAIModelsConfig","listenDrcAIAlarmState","cancelListenDrcAIAlarmState"],"PoiModule":["enter","exit","updateSpeed","getTask","listenPoiTaskEvent","cancelListenPoiTaskEvent","listenFlightPoiProgress","cancelListenFlightPoiProgress"],"PsdkControlModule":["listenDrcPsdkDeviceList","cancelListenDrcPsdkDeviceList","listenDrcPsdkStateSummaryInfo","cancelListenDrcPsdkStateSummaryInfo","listenDrcPsdkStateSpeakerInfo","cancelListenDrcPsdkStateSpeakerInfo","listenDrcPsdkStateSearchlightInfo","cancelListenDrcPsdkStateSearchlightInfo","DrcSearchlightModeSet","DrcSearchlightBrightnessSet","DrcSearchlightCalibration","DrcSearchlightFineTuningSet","DrcSearchlightWideFieldModeSet","DrcSearchlightLightGimbalControlSet","DrcSearchlightTypeSet","listenDrcPsdkSpeakerPlayProgressInfo","cancelListenDrcPsdkSpeakerPlayProgressInfo","listenDrcPsdkFloatingWindowTextInfo","cancelListenDrcPsdkFloatingWindowTextInfo","DrcSpeakerAudioPlayStart","DrcSpeakerTTSPlayStart","DrcSpeakerRealTimeStart","DrcSpeakerRealTimeStop","DrcSpeakerReplay","DrcSpeakerPlayStop","DrcSpeakerPlayVolumeSet","DrcSpeakerPlayModeSet","DrcSpeakerTTSSet","DrcWidgetValueSet","DrcWidgetInputBoxTextSet","listenPsdkSpeakerAudioPlayStartProgress","cancelListenPsdkSpeakerAudioPlayStartProgress","listenPsdkSpeakerTtsPlayStartProgress","cancelListenPsdkSpeakerTtsPlayStartProgress","listenDronePsdkUiResource","cancelListenDronePsdkUiResource"],"PsdkResourceModule":["getPsdkSpeakerResourceList","createPsdkSpeakerResource","editPsdkSpeakerResource","deletePsdkSpeakerResource","getSTS","getPsdkWidgetResources","uploadSpeakerAudioFile"],"PullStreamModule":["start","stop","subscribeStream","unSubscribeStream","setErrorCallback","isStreaming","getStreamInfo"],"Relay":["getSn","getRelayControlModule","getRtkCalibrationModule"],"RelayControlModule":["setRelayBroadcastHide","setRelaySSID","setRelayPassword","setRelaySearchMode","setRelayOccupiedStatus","relayReboot","relayDisconnect"],"RemoteController":["getSn"],"RtkCalibrationModule":["calibrationByNetwork","calibrationByManual","subscribeCalibrationProgress","unsubscribeCalibrationProgress"],"SafetyServiceModule":["searchSignalMaps","createCustomizedFlightAreas","getCustomizedFlightAreas","updateCustomizedFlightAreas","deleteCustomizedFlightAreas","syncCustomizedFlightAreas","getFlightAreasSyncStatus","getOfflineMapsModelInfo","updateOfflineMapsModelInfo","cancelOfflineMapsModelInfo","setOfflineMaps","syncOfflineMaps","getOfflineMapsSyncStatus","getUnlockLicenseList","switchUnlockLicense","checkUnlockLicense","submitUnlockLicense","clearDeviceUnlockLicense","uploadUnlockLicenseFile","listenDroneOfflineMapEnable","cancelListenDroneOfflineMapEnable"],"Stream":["getCustomSEIModule","getPullStreamModule"],"TakeoffModule":["takeoff","listenCommandTaskEvent","cancelListenCommandTaskEvent","listenDroneCommanderFlightMode","cancelListenDroneCommanderFlightMode","listenDroneCurrentCommanderFlightMode","cancelListenDroneCurrentCommanderFlightMode","listenDroneCommanderModeLostAction","cancelListenDroneCommanderModeLostAction"],"TerraBuildModule":["getReconstructionSettings","getQualityReport","getModelFileList","getModelFileUrl","createReconstruction","retryReconstruction","stopReconstruction","getSfmResult","deleteModelFile","batchDeleteModelFiles","createPanorama","getReconstructionImages","listenReconstructionStatusChanged","cancelListenReconstructionStatusChanged","uploadModelCallback","renameModel","showModelOnMap","listenTerraUnzipProgress","cancelListenTerraUnzipProgress","listenTerraModelStatusChanged","cancelListenTerraModelStatusChanged","listenTerraFileShowOnMap","cancelListenTerraFileShowOnMap","listenTerraMediaFileHideOnMap","cancelListenTerraMediaFileHideOnMap","listenTerraMediaFileShowOnMap","cancelListenTerraMediaFileShowOnMap","getModelDetail","setLasWkt"],"TestFlightModule":["generateTryFlightWayline","createTestFlightTask"],"WaylineManageModule":["getWaylineList","getWaylineDetail","batchDeleteWaylines","updateWayline","submitWaylineInfo","batchDownloadWaylines","duplicateWayline","copyWayline","concatWayline","importKmz","listenImportWaylineEvent","cancelListenImportWaylineEvent","getWaylineEditorSts"],"Workspace":["getLogManagementModule","getHMSModule","getMediaServiceModule","getSafetyServiceModule","getFlightTaskRecordModule","getDiagnosisManagementModule","getMaintenanceManagementModule","getFlightTaskModule","getDeviceManageModule","getFirmwareManageModule","getWaylineManageModule","getPsdkResourceModule","getFlashLedModule","getTerraBuildModule","getAIInsideManageModule","getElementModule","getAIAlertModule","getLiveSyncModule"]} as const;
export const MODULE_RETURNS: Record<string, Record<string, string>> = {"AIAlertModule":{},"AIBoxModule":{},"AIInsideManageModule":{},"BaseStation":{"getLiveStream":"LiveModule","getLiveDeviceModule":"LiveDeviceModule","getRtkCalibrationModule":"RtkCalibrationModule","getNetworkTestModule":"NetworkTestModule"},"CameraControlModule":{},"ControlAuthModule":{},"CustomSEIModule":{},"DeployModule":{},"DeviceDebugModule":{},"DeviceHMSModule":{},"DeviceManageModule":{},"DeviceStateModule":{},"DiagnosisManagementModule":{},"Dock":{"getLiveStream":"LiveModule","getLiveRecord":"LiveRecordModule","getLiveDeviceModule":"LiveDeviceModule","getDockOsdModule":"DockOsdModule","getDeployModule":"DeployModule","getDockControlModule":"DockControlModule","getRtkCalibrationModule":"RtkCalibrationModule","getNetworkTestModule":"NetworkTestModule","getDeviceDebugModule":"DeviceDebugModule","getDeviceStateModule":"DeviceStateModule","getDeviceHMSModule":"DeviceHMSModule"},"DockControlModule":{},"DockOsdModule":{},"DrcModule":{},"Drone":{"getLiveStream":"LiveModule","getLiveRecord":"LiveRecordModule","getLiveDeviceModule":"LiveDeviceModule","getTakeoffModule":"TakeoffModule","getFlightControlModule":"FlightControlModule","getControlAuthModule":"ControlAuthModule","getDrcModule":"DrcModule","getFlightSettingsModule":"FlightSettingsModule","getTestFlightModule":"TestFlightModule","getOnboardAiModule":"OnboardAiModule","getPsdkControlModule":"PsdkControlModule","getCameraControlModule":"CameraControlModule","getFlyToPointModule":"FlyToPointModule","getFlightTaskControlModule":"FlightTaskControlModule","getPoiModule":"PoiModule","getInFlightWaylineModule":"InFlightWaylineModule","getDroneOsdModule":"DroneOsdModule","getDeviceStateModule":"DeviceStateModule","getDeviceHMSModule":"DeviceHMSModule","getDeviceDebugModule":"DeviceDebugModule","getAIBoxModule":"AIBoxModule"},"DroneOsdModule":{},"ElementModule":{},"FirmwareManageModule":{},"FlashLedModule":{},"FlightControlModule":{},"FlightSettingsModule":{},"FlightTaskControlModule":{},"FlightTaskModule":{},"FlightTaskRecordModule":{},"FlyToPointModule":{},"HMSModule":{},"InFlightWaylineModule":{},"LiveDeviceModule":{},"LiveRecordModule":{},"LiveModule":{},"LiveSyncModule":{},"LogManagementModule":{},"MaintenanceManagementModule":{},"MediaServiceModule":{},"NetworkTestModule":{},"OnboardAiModule":{},"PoiModule":{},"PsdkControlModule":{},"PsdkResourceModule":{},"PullStreamModule":{},"Relay":{"getRelayControlModule":"RelayControlModule","getRtkCalibrationModule":"RtkCalibrationModule"},"RelayControlModule":{},"RemoteController":{},"RtkCalibrationModule":{},"SafetyServiceModule":{},"Stream":{"getCustomSEIModule":"CustomSEIModule","getPullStreamModule":"PullStreamModule"},"TakeoffModule":{},"TerraBuildModule":{},"TestFlightModule":{},"WaylineManageModule":{},"Workspace":{"getLogManagementModule":"LogManagementModule","getHMSModule":"HMSModule","getMediaServiceModule":"MediaServiceModule","getSafetyServiceModule":"SafetyServiceModule","getFlightTaskRecordModule":"FlightTaskRecordModule","getDiagnosisManagementModule":"DiagnosisManagementModule","getMaintenanceManagementModule":"MaintenanceManagementModule","getFlightTaskModule":"FlightTaskModule","getDeviceManageModule":"DeviceManageModule","getFirmwareManageModule":"FirmwareManageModule","getWaylineManageModule":"WaylineManageModule","getPsdkResourceModule":"PsdkResourceModule","getFlashLedModule":"FlashLedModule","getTerraBuildModule":"TerraBuildModule","getAIInsideManageModule":"AIInsideManageModule","getElementModule":"ElementModule","getAIAlertModule":"AIAlertModule","getLiveSyncModule":"LiveSyncModule"}};
