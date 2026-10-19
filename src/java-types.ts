// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
// Generated from public Java methods, callbacks, Beans, and enums.
import type * as Native from "./generated.js";
export const AIIdentifyMode = {"DISABLE":0,"VISIBLE_LIGHT":1,"INFRARED_LIGHT":2,"UNKNOWN":65535} as const;
export type AIIdentifyMode = number;
export const AIIdentifyScoreMode = {"MODE_INVALID":0,"MODE_COUNT":1,"MODE_RESCUE":2,"MODE_USER":3,"UNKNOWN":65535} as const;
export type AIIdentifyScoreMode = number;
export const CameraAperture = {"F_AUTO":0,"F1DOT6":160,"F1DOT7":170,"F1DOT8":180,"F2":200,"F2DOT2":220,"F2DOT4":240,"F2DOT5":250,"F2DOT8":280,"F3DOT2":320,"F3DOT4":340,"F3DOT5":350,"F4":400,"F4DOT4":440,"F4DOT5":450,"F4DOT8":480,"F5":500,"F5DOT6":560,"F6DOT3":630,"F6DOT8":680,"F7DOT1":710,"F8":800,"F9":900,"F9DOT5":950,"F9DOT6":960,"F10":1000,"F11":1100,"F13":1300,"F14":1400,"F16":1600,"F18":1800,"F19":1900,"F20":2000,"F22":2200,"F27":2700,"F32":3200,"UNKNOWN":65535} as const;
export type CameraAperture = number;
export const CameraExposureCompensation = {"NEG_5P0EV":1,"NEG_4P7EV":2,"NEG_4P3EV":3,"NEG_4P0EV":4,"NEG_3P7EV":5,"NEG_3P3EV":6,"NEG_3P0EV":7,"NEG_2P7EV":8,"NEG_2P3EV":9,"NEG_2P0EV":10,"NEG_1P7EV":11,"NEG_1P3EV":12,"NEG_1P0EV":13,"NEG_0P7EV":14,"NEG_0P3EV":15,"NEG_0EV":16,"POS_0P3EV":17,"POS_0P7EV":18,"POS_1P0EV":19,"POS_1P3EV":20,"POS_1P7EV":21,"POS_2P0EV":22,"POS_2P3EV":23,"POS_2P7EV":24,"POS_3P0EV":25,"POS_3P3EV":26,"POS_3P7EV":27,"POS_4P0EV":28,"POS_4P3EV":29,"POS_4P7EV":30,"POS_5P0EV":31,"FIXED":255,"UNKNOWN":65535} as const;
export type CameraExposureCompensation = number;
export const CameraExposureMode = {"PROGRAM":1,"SHUTTER_PRIORITY":2,"APERTURE_PRIORITY":3,"MANUAL":4,"UNKNOWN":65535} as const;
export type CameraExposureMode = number;
export const CameraFocusMode = {"MANUAL":0,"AF":1,"AFC":2,"FINE_TUNE":3,"UNKNOWN":65535} as const;
export type CameraFocusMode = number;
export const CameraFocusState = {"IDLE":0,"FOCUSING":1,"SUCCESSFUL":2,"FAILED":3,"UNKNOWN":65535} as const;
export type CameraFocusState = number;
export const CameraISO = {"ISO_AUTO":0,"ISO_50":2,"ISO_100":3,"ISO_200":4,"ISO_400":5,"ISO_800":6,"ISO_1600":7,"ISO_3200":8,"ISO_6400":9,"ISO_12800":10,"ISO_25600":11,"ISO_51200":12,"ISO_102400":13,"ISO_19200":14,"ISO_32000":15,"ISO_9600":16,"ISO_16000":17,"ISO_204800":18,"ISO_409600":19,"ISO_819200":20,"ISO_FIXED":255,"UNKNOWN":65535} as const;
export type CameraISO = number;
export const CameraLaserMeasureState = {"NORMAL":0,"TOO_CLOSE":1,"TOO_FAR":2,"NO_SIGNAL":3,"UNKNOWN":65535} as const;
export type CameraLaserMeasureState = number;
export const CameraLensType = {"NORMAL":0,"WIDE":1,"ZOOM":2,"IR":3,"THERMAL":4,"UNKNOWN":65535} as const;
export type CameraLensType = number;
export const CameraMode = {"PHOTO":0,"VIDEO":1,"SMART_PHOTO":2,"PANO_PHOTO":3,"INTERVAL_PHOTO":4,"UNKNOWN":65535} as const;
export type CameraMode = number;
export const CameraPhotoState = {"IN_PROGRESS":0,"OK":1,"FAILED":2,"CANCELED":3,"UNKNOWN":65535} as const;
export type CameraPhotoState = number;
export const CameraShutterSpeed = {"SHUTTER_SPEED_1_BY_8000":0,"SHUTTER_SPEED_1_BY_6400":1,"SHUTTER_SPEED_1_BY_6000":2,"SHUTTER_SPEED_1_BY_5000":3,"SHUTTER_SPEED_1_BY_4000":4,"SHUTTER_SPEED_1_BY_3200":5,"SHUTTER_SPEED_1_BY_3000":6,"SHUTTER_SPEED_1_BY_2500":7,"SHUTTER_SPEED_1_BY_2000":8,"SHUTTER_SPEED_1_BY_1600":9,"SHUTTER_SPEED_1_BY_1500":10,"SHUTTER_SPEED_1_BY_1250":11,"SHUTTER_SPEED_1_BY_1000":12,"SHUTTER_SPEED_1_BY_800":13,"SHUTTER_SPEED_1_BY_725":14,"SHUTTER_SPEED_1_BY_640":15,"SHUTTER_SPEED_1_BY_500":16,"SHUTTER_SPEED_1_BY_400":17,"SHUTTER_SPEED_1_BY_350":18,"SHUTTER_SPEED_1_BY_320":19,"SHUTTER_SPEED_1_BY_250":20,"SHUTTER_SPEED_1_BY_240":21,"SHUTTER_SPEED_1_BY_200":22,"SHUTTER_SPEED_1_BY_180":23,"SHUTTER_SPEED_1_BY_160":24,"SHUTTER_SPEED_1_BY_125":25,"SHUTTER_SPEED_1_BY_120":26,"SHUTTER_SPEED_1_BY_100":27,"SHUTTER_SPEED_1_BY_90":28,"SHUTTER_SPEED_1_BY_80":29,"SHUTTER_SPEED_1_BY_60":30,"SHUTTER_SPEED_1_BY_50":31,"SHUTTER_SPEED_1_BY_40":32,"SHUTTER_SPEED_1_BY_30":33,"SHUTTER_SPEED_1_BY_25":34,"SHUTTER_SPEED_1_BY_20":35,"SHUTTER_SPEED_1_BY_15":36,"SHUTTER_SPEED_1_BY_12DOT5":37,"SHUTTER_SPEED_1_BY_10":38,"SHUTTER_SPEED_1_BY_8":39,"SHUTTER_SPEED_1_BY_6DOT25":40,"SHUTTER_SPEED_1_BY_5":41,"SHUTTER_SPEED_1_BY_4":42,"SHUTTER_SPEED_1_BY_3":43,"SHUTTER_SPEED_1_BY_2DOT5":44,"SHUTTER_SPEED_1_BY_2":45,"SHUTTER_SPEED_1_BY_1DOT67":46,"SHUTTER_SPEED_1_BY_1DOT25":47,"SHUTTER_SPEED_1":48,"SHUTTER_SPEED_1DOT3":49,"SHUTTER_SPEED_1DOT6":50,"SHUTTER_SPEED_2":51,"SHUTTER_SPEED_2DOT5":52,"SHUTTER_SPEED_3":53,"SHUTTER_SPEED_3DOT2":54,"SHUTTER_SPEED_4":55,"SHUTTER_SPEED_5":56,"SHUTTER_SPEED_6":57,"SHUTTER_SPEED_7":58,"SHUTTER_SPEED_8":59,"SHUTTER_SPEED_9":60,"SHUTTER_SPEED_10":61,"SHUTTER_SPEED_11":62,"SHUTTER_SPEED_13":63,"SHUTTER_SPEED_15":64,"SHUTTER_SPEED_16":65,"SHUTTER_SPEED_20":66,"SHUTTER_SPEED_23":67,"SHUTTER_SPEED_25":68,"SHUTTER_SPEED_30":69,"SHUTTER_SPEED_40":70,"SHUTTER_SPEED_50":71,"SHUTTER_SPEED_60":72,"SHUTTER_SPEED_80":73,"SHUTTER_SPEED_100":74,"SHUTTER_SPEED_120":75,"SHUTTER_SPEED_1_BY_20000":76,"SHUTTER_SPEED_1_BY_16000":77,"SHUTTER_SPEED_1_BY_12800":78,"SHUTTER_SPEED_1_BY_10000":79,"SHUTTER_SPEED_AUTO":65534,"UNKNOWN":65535} as const;
export type CameraShutterSpeed = number;
export const DockAirConditionerState = {"DockAirConditionerState_IDLE":0,"DockAirConditionerState_COOLING":1,"DockAirConditionerState_HEATING":2,"DockAirConditionerState_DEHUMIDIFYING":3,"DockAirConditionerState_COOLING_EXIT":4,"DockAirConditionerState_HEATING_EXIT":5,"DockAirConditionerState_DEHUMIDIFYING_EXIT":6,"DockAirConditionerState_COOLING_PREPARATION":7,"DockAirConditionerState_HEATING_PREPARATION":8,"DockAirConditionerState_DEHUMIDIFYING_PREPARATION":9,"DockAirConditionerState_INVALID":32767,"DockAirConditionerState_UNKNOWN":65535} as const;
export type DockAirConditionerState = number;
export const DockCameraPosition = {"INSIDE":0,"OUTSIDE":1,"AUX2":2,"UNKNOWN":65535} as const;
export type DockCameraPosition = number;
export const DockCoverMode = {"OPEN":0,"CLOSE":1,"FORCE_CLOSE":2,"UNKNOWN":65535} as const;
export type DockCoverMode = number;
export const DroneLinkState = {"IDLE":0,"CONNECTING":1,"CONNECTED":2,"DISCONNECTED":3,"UNKNOWN":65535} as const;
export type DroneLinkState = number;
export const DroneModeCode = {"STANDBY":0,"TAKEOFF_PREPARATION":1,"READY_TO_TAKE_OFF":2,"MANUAL_FLIGHT":3,"AUTOMATIC_TAKEOFF":4,"ROUTE_FLIGHT":5,"PANORAMIC_PHOTO":6,"SMART_FOLLOW":7,"ADSB_AVOIDANCE":8,"RETURN_HOME_AUTOMATICALLY":9,"AUTOMATIC_LANDING":10,"FORCED_LANDING":11,"LANDING_WITH_THREE_BLADES":12,"UPGRADING":13,"NOT_CONNECTED":14,"APAS":15,"JOYSTICK":16,"COMMAND_FLIGHT":17,"RTK_CONVERGING":18,"EXPLORATION_AND_SITING":19,"POI":20,"DEPARTURE_POINT":21,"RELAY_SITING":22,"UNKNOWN":65535} as const;
export type DroneModeCode = number;
export const FlightHubSdkErrorCode = {"SUCCESS":0,"ERROR_INIT_FAILED":-1,"ERROR_ALREADY_INITIALIZED":-2,"ERROR_NOT_INITIALIZED":-3,"ERROR_INVALID_PARAM":-4,"ERROR_OPERATION_FAILED":-5,"ERROR_INVALID_STATE":-6,"FILE_NOT_FOUND":-7,"FILE_TOO_LARGE":-8,"UNSUPPORTED_PROVIDER":-9,"UPLOAD_FAILED":-10,"WAYLINE_ID_NOT_FOUND":-11,"ERROR_DRC_LINK":-12,"UNKNOWN":65535} as const;
export type FlightHubSdkErrorCode = number;
export const InFlightWaylineControlAction = {"PAUSE":1,"RESUME":2,"CANCEL":3,"UNKNOWN":65535} as const;
export type InFlightWaylineControlAction = number;
export const IrGainMode = {"Auto":0,"LowGain":1,"HighGain":2,"UltraHD":3,"UNKNOWN":65535} as const;
export type IrGainMode = number;
export const MediaType = {"NO_TYPE":0,"DIR":1,"IMAGE":2,"VIDEO":3,"MODEL":4,"WAY_LINE":5,"TASK_WAYLINE":6,"ZIP":7,"MODEL_2D":8,"MODEL_3D":9,"CUSTOM_CLOUD":10,"MODEL_GATHER_DIR":11,"PPK":12,"XMP":20,"OPEN_MODEL":21,"OPEN_MEDIA":22} as const;
export type MediaType = number;
export const MegaphonePlayMode = {"SINGLE_PLAY":0,"LOOP_PLAYBACK":1,"UNKNOWN":65535} as const;
export type MegaphonePlayMode = number;
export const MegaphoneTTSLanguageType = {"CHINESE":0,"ENGLISH":1,"UNKNOWN":65535} as const;
export type MegaphoneTTSLanguageType = number;
export const MegaphoneTTSVoiceType = {"MAN":0,"WOMAN":1,"UNKNOWN":65535} as const;
export type MegaphoneTTSVoiceType = number;
export const MegaphoneWorkMode = {"TTS":0,"VOICE":1,"TTS_APP":2,"LIVE_VOICE":3,"REAL_TIME":4,"PLAYING_IN_TRANSMISSION":5,"UNKNOWN":65535} as const;
export type MegaphoneWorkMode = number;
export const NightSceneMode = {"CLOSE":0,"OPEN":1,"AUTO":2,"UNKNOWN":65535} as const;
export type NightSceneMode = number;
export const OutOfControlAction = {"HOVER":0,"RETURN_HOME":1,"CONTINUE":2,"UNKNOWN":65535} as const;
export type OutOfControlAction = number;
export const PanoramaRunningState = {"IDLE":0,"RUNNING":1,"SYNTHESIZING":2,"FINISHED":3,"UNKNOWN":65535} as const;
export type PanoramaRunningState = number;
export const PhotoFormat = {"PhotoFormat_RAW":0,"PhotoFormat_JPEG":1,"PhotoFormat_DLT664":16,"PhotoFormat_UNKNOWN":65535} as const;
export type PhotoFormat = number;
export const POITaskStatus = {"WAITING":0,"STARTING_FAILURE":1,"EXECUTING":2,"PAUSED":3,"TERMINATED":4,"SUCCESS":5,"SUSPENDED":6,"TIMEOUT":7,"PARTIALLY_DONE":8,"PREPARING":9,"QUEUE_FOR_TAKEOFF":10,"UNKNOWN":65535} as const;
export type POITaskStatus = number;
export const PSDKMegaphoneSystemState = {"IDLE":0,"IN_TRANSMISSION":1,"PLAYING":2,"IN_EXCEPTION":3,"TTS_IN_CONVERSION":4,"PLAYING_IN_TRANSMISSION":5,"DOWNLOADING":99,"UNKNOWN":65535} as const;
export type PSDKMegaphoneSystemState = number;
export const PsdkSubType = {"SPEAKER":0,"SEARCHLIGHT":1,"UNKNOWN":65535} as const;
export type PsdkSubType = number;
export const PsdkType = {"UNOFFICIAL":4,"OFFICIAL":5,"MANIFOLD3":8,"UNKNOWN":65535} as const;
export type PsdkType = number;
export const RecordState = {"RECORD_SUCCESS":0,"RECORDING":1,"RECORD_INITIALIZING":2,"RECORD_FAILED":3,"RECORD_UNKNOWN":65535} as const;
export type RecordState = number;
export const SearchLightWorkMode = {"CLOSE":0,"OPEN":1,"STROBE":2,"QUICK_STROBE":3,"ALTERNATION_STROBE":4,"UNKNOWN":65535} as const;
export type SearchLightWorkMode = number;
export const SeiDataType = {"CUSTOM_DATA":1,"DETECTION_BOX":2,"DETECTION_POLYGON":3,"TEXT_OVERLAY":4,"UNKNOWN":65535} as const;
export type SeiDataType = number;
export const Stage = {"IDLE":0,"DOWNLOADING":1,"DOWNLOAD_SUCCESSED":2,"DOWNLOAD_FAILED":3,"UPLOADING":4,"UPLOAD_SUCCESSED":5,"UPLOAD_FAILED":6,"UNKNOWN":65535} as const;
export type Stage = number;
export const TakeoffMode = {"TAKEOFF":0,"TAKEOFF_WITH_FLY_TO":1,"UNKNOWN":65535} as const;
export type TakeoffMode = number;
export const VisualExplorationErrorCode = {"CMD_SUCCESS":0,"UNKNOW_TASK_CMD":1,"APP_REGISTER_CALLBACK_ERROR":2,"ABSTRACT_DATD_ERROR":3,"DRONE_IS_NOT_IN_AIR":4,"PARAM_READ_ERROR":5,"EPHEMERIS_NOT_EXIT":6,"WIND_SPD_BIG":7,"USER_REQUEST_PAUSE":8,"USER_CHANGE_MODE":9,"RUNNING_AT_NIGHT":10,"HEIGHT_LIMIT":11,"BOUNDARY_LIMIT":12,"OA_LIMIT":13,"REG_DBUS_EROOR":14,"RC_LOST_VE":15,"START_FAIL_TASK_NUM_FULL":16,"START_FAIL_FOR_TASK_IS_RUNNING":17,"START_FAIL_FOR_HEADING_LEVEL":18,"START_FAIL_FOR_OSDK_MO_DULE_TYPE":19,"START_FAIL_FOR_GNSS_INIT_FAIL":20,"START_FAIL_FOR_GNSS_LEVEL_LOW":21,"START_FAIL_FOR_POS_INVALID":22,"START_FAIL_FOR_MAP_INVALID":23,"STOP_FAIL_FOR_TASK_IS_NOT_RUNING":32,"STOP_FAIL_FOR_UNKNOW_TASK_CMD":33,"STOP_SKY_PARSING_SUCCESS":34,"STOP_GNSS_ACCESS_SUCCESS":35,"STOP_GNSS_ACCESS_FAIL":36,"EPHEMERIS_UPLOAD_SUCCESS":64,"EPHEMERIS_GET_FAILED":65,"EPHEMERIS_UNZIP_FAILED":66,"ROTATE_TIMEOUT":80,"ACCLUSION_HIGH":81,"GET_SCALE_TIMEOUT":82,"FOUND_OBSTACLE":83,"PARSING_FAIL":84,"GET_SCALE_ERROR":85,"TOP_TASK_FOR_GNSS_FAILE":98,"GNSS_DATA_UNAVAILABLE":99,"SPP_LOW_POS_RATE":100,"SPP_LOW_POS_ACCURACY":101,"SPP_POS_SAT_INSUFFICIENT":102,"SPP_POS_HIGH_PDOP":103,"HEADING_LOW_FIXRATE":104,"HEADING_SWITCH_TO_FLOAT":105,"HEADING_LOW_ACCURACY":112,"HEADING_SAT_INSUFFICIENT":113,"RTK_POS_NO_VALID_DATA":114,"RTK_POS_TOO_MANY_ERROR_PERIODS":115,"NO_EPHEMERIS":116,"EPHEMERIS_NOT_VALID":117,"OBS_SAT_SNR_LOW":118,"OBS_SAT_FREQUENT_CYCLE_SLIP":119,"OBS_SAT_NUM_INSUFFICIENT":120,"OBS_MIN_SAT_NUM_LESS":121,"RTK_POS_TYPE_INVALID":122,"GNSS_INIT_ERROR":123,"GNSS_GET_RESULT_ERROR":124,"GNSS_TIMEOUT":125,"TRANSFER_HEIGHT_ERROR":128,"TRANSFER_HEIGHT_LIMIT":129,"TRANSFER_TIMEOUT":130,"TRANSFER_GNSS_TIME_OUT":131,"ASSESS_RESULT_UNAVAILABLE_VE":153,"MISSION_SWITCH_ERROR_VE":155,"DEPARTURE_FAIL_VE":160,"DEPARTURE_INIT_FAIL_VE":161,"DEPARTURE_INVALID_VE":162,"DEPARTURE_TARGET_NOT_REACHABLE_VE":163,"DEPARTURE_PLANNING_FAIL_VE":164,"DEPARTURE_POS_VERT_ERROR_VE":165,"DEPARTURE_POS_HORIZ_ERROR_VE":166,"DEPARTURE_RC_MODE_ERROR_VE":167,"RADIUS_LIMIT_VE":176,"VFENCE_LIMIT_VE":177,"HOME_NOT_SET_VE":178,"LOW_LIMIT_VE":179,"ATTI_MODE_VE":180,"UNKNOWN":65535} as const;
export type VisualExplorationErrorCode = number;
export const VisualExplorationStage = {"IDLE":0,"TAKE_OFF":1,"MANUAL":2,"SCOUT_TRANSFER":3,"SCOUT":4,"PATROL_TRANSFER":5,"PATROL":6,"GO_HOME_TRANSFER":7,"GO_HOME":8,"GENERATE":9,"DOWNLOAD_FINISH":10,"UNKNOWN":65535} as const;
export type VisualExplorationStage = number;
export interface ActiveInFlightWaylineTaskInfo {
  flightId?: string;
  flightType?: number;
  sn?: string;
  inFlightTask?: InFlightWaylineTaskDetail;
  flightTaskData?: string;
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
export interface AiAlertAlarmInfo {
  alarmMethod?: (number)[];
  alarmInterval?: number;
}
export interface AiAlertAlarmTarget {
  targetType?: number;
  targetValue?: number;
  useMinThreshold?: boolean;
  useMaxThreshold?: boolean;
  targetMaxThreshold?: number;
  targetMinThreshold?: number;
}
export interface AiAlertFlightItem {
  flightId?: string;
  count?: number;
  flightTaskName?: string;
  status?: number;
  startTime?: bigint | number;
}
export interface AiAlertLocation {
  latitude?: number;
  longitude?: number;
  altitude?: number;
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
export interface AiAlertTargetAlertInfo {
  targetType?: number;
  targetValue?: number;
  label?: string;
}
export interface AIBoxAppInfoResult {
  id?: string;
  name?: string;
  version?: string;
  description?: string;
  publisher?: string;
  appSize?: number;
  dataSize?: number;
  type?: number;
}
export interface AIBoxExportFileParam {
  deviceSn?: string;
  boxSn?: string;
  appId?: string;
  exportType?: number;
}
export interface AIBoxExportFileProgressParam {
  deviceSn?: string;
  boxSn?: string;
  bid?: string;
}
export interface AIBoxFetchAppListParam {
  deviceSn?: string;
  boxSn?: string;
}
export interface AIBoxFetchAppListProgressParam {
  deviceSn?: string;
  boxSn?: string;
  bid?: string;
}
export interface AIBoxInfoListResult {
  aiBoxes?: (AIBoxInfoResult)[];
}
export interface AIBoxInfoResult {
  index?: number;
  type?: number;
  sn?: string;
  firmwareVersion?: string;
  storageTotal?: number;
  storageUsed?: number;
}
export interface AIBoxInstallAppParam {
  deviceSn?: string;
  boxSn?: string;
  objectKey?: string;
}
export interface AIBoxInstallAppProgressParam {
  deviceSn?: string;
  boxSn?: string;
  bid?: string;
}
export interface AIBoxOperateAppParam {
  deviceSn?: string;
  boxSn?: string;
  appId?: string;
  action?: string;
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
export interface AIInsideAssociateDrone {
  deviceSn?: string;
  deviceModel?: AIInsideDeviceModel;
  deviceOnlineStatus?: boolean;
  deviceWorkingStatus?: number;
  aiModelInfo?: AIInsideModelInfo;
}
export interface AIInsideCredentials {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: bigint | number;
  securityToken?: string;
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
export interface AIInsideLabel {
  type?: number;
  name?: string;
}
export interface AIInsideLicense {
  snList?: (string)[];
  startedUtc?: bigint | number;
  expiredUtc?: bigint | number;
}
export interface AIInsideModelInfo {
  signedId?: string;
  modelName?: string;
  signedUtc?: bigint | number;
  expiredUtc?: bigint | number;
  status?: string;
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
export interface AIInsideOperateDeviceResult {
  droneSn?: string;
  code?: number;
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
export interface AiModelsConfigParams {
  aiModelsConfig?: (AiModelsConfigSet)[];
}
export interface AiModelsConfigSet {
  streamType?: number;
  models?: (number)[];
}
export interface AircraftActivationTime {
  activationTime?: bigint | number;
}
export interface AircraftAttitude {
  head?: number;
  pitch?: number;
  roll?: number;
}
export interface AircraftBatteryInfo {
  capacityPercent?: number;
  landingPower?: number;
  remainFlightTime?: number;
  returnHomePower?: number;
  batteries?: (BatteryInfo)[];
}
export interface AircraftBatteryWarningThresholds {
  lowBatteryWarningThreshold?: number;
  seriousLowBatteryWarningThreshold?: number;
}
export interface AircraftComplianceInfo {
  ridState?: number;
  country?: string;
}
export interface AircraftControlCode {
  controlMode?: number;
}
export interface AircraftControlSource {
  controlSource?: string;
}
export interface AircraftCurrentRthMode {
  currentRthMode?: number;
}
export interface AircraftFirmwareStatus {
  firmwareVersion?: string;
  compatibleStatus?: number;
  firmwareUpgradeStatus?: number;
}
export interface AircraftGear {
  gear?: number;
}
export interface AircraftHomeDistance {
  homeDistance?: number;
}
export interface AircraftHomeGeographicalInfo {
  homeLongitude?: number;
  homeLatitude?: number;
}
export interface AircraftLimitsInfo {
  heightLimit?: number;
  isNearHeightLimit?: number;
  isNearAreaLimit?: number;
  distanceLimitState?: number;
  distanceLimit?: number;
  isNearDistanceLimit?: number;
}
export interface AircraftLocation {
  height?: number;
  elevation?: number;
  longitude?: number;
  latitude?: number;
}
export interface AircraftMaintainStatus {
  state?: number;
  lastMaintainType?: number;
  lastMaintainTime?: bigint | number;
  lastMaintainFlightTime?: number;
  lastMaintainFlightSorties?: number;
}
export interface AircraftMaintainStatusInfo {
  maintainStatuses?: (AircraftMaintainStatus)[];
}
export interface AircraftModeCode {
  modeCode?: DroneModeCode;
}
export interface AircraftNightLightsState {
  nightLightsState?: number;
}
export interface AircraftObstacleAvoidanceState {
  horizon?: number;
  upside?: number;
  downside?: number;
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
export interface AircraftPayloadGimbalAttitude {
  payloadIndex?: string;
  gimbalPitch?: number;
  gimbalRoll?: number;
  gimbalYaw?: number;
}
export interface AircraftPayloadLiveviewWorldRegionEntry {
  payloadIndex?: string;
  region?: CameraLiveviewWorldRegion;
}
export interface AircraftPayloadsCameraLiveviewWorldRegion {
  payloadsList?: (AircraftPayloadLiveviewWorldRegionEntry)[];
}
export interface AircraftPayloadsCamerasList {
  camerasList?: (AircraftPayloadCameraInfo)[];
}
export interface AircraftPayloadsGimbalAttitude {
  payloadsGimbalAttitude?: (AircraftPayloadGimbalAttitude)[];
}
export interface AircraftPayloadsList {
  payloadsList?: (string)[];
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
export interface AircraftPayloadsOsdInfoList {
  payloadsInfoList?: (AircraftPayloadsOsdInfo)[];
}
export interface AircraftPositionState {
  isFixed?: number;
  quality?: number;
  gpsNumber?: number;
  rtkNumber?: number;
}
export interface AircraftRcLostAction {
  rcLostAction?: number;
}
export interface AircraftRthInfo {
  rthMode?: number;
  rthAltitude?: number;
}
export interface AircraftSpeed {
  horizontalSpeed?: number;
  verticalSpeed?: number;
}
export interface AircraftStorageInfo {
  total?: number;
  used?: number;
}
export interface AircraftTakeoffProgress {
  bid?: string;
  tid?: string;
  flightId?: string;
  trackId?: string;
  sn?: string;
  status?: string;
  result?: number;
  waypointIndex?: number;
  takeoffMode?: string;
  timestamp?: bigint | number;
}
export interface AircraftTotalFlightInfo {
  totalFlightTime?: number;
  totalFlightDistance?: number;
  totalFlightSorties?: number;
}
export interface AircraftTrackId {
  trackId?: string;
}
export interface AircraftWindSpeed {
  windDirection?: number;
  windSpeed?: number;
}
export interface AirTransferEnableResult {
  resultCode?: number;
  deviceSn?: string;
  airTransferEnable?: boolean;
}
export interface AiSeiInfo {
  targets?: (AiDetectionTarget)[];
}
export interface AiSpotlightZoomSelectParams {
  centerX?: number;
  centerY?: number;
  width?: number;
  height?: number;
}
export interface AlgorithmDehazeLevelSetParams {
  payloadIndex?: string;
  level?: number;
}
export interface AlgorithmDehazeModeSetParams {
  payloadIndex?: string;
  mode?: number;
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
export interface AssistantSeiInfo {
  autoDirection?: boolean;
  direction?: number;
}
export interface AudienceCountGroup {
  level1Group?: string;
  level2Group?: string;
}
export interface BatchDeleteWaylinesResult {
  serverCode?: number;
  serverMessage?: string;
}
export interface BatchDownloadWaylinesItemResult {
  waylineUuid?: string;
  waylineName?: string;
  kmzObjectKey?: string;
  url?: string;
  size?: number;
}
export interface BatchDownloadWaylinesParam {
  waylineUuids?: (string)[];
}
export interface BatchUpdateStatusReq {
  taskUuids?: (string)[];
  status?: number;
}
export interface BatteryBasicInfo {
  index?: number;
  capacityPercent?: number;
  voltage?: number;
  temperature?: number;
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
export interface CamCropPos {
  x?: number;
  y?: number;
}
export interface CameraAimParam {
  cameraType?: string;
  locked?: boolean;
  payloadIndex?: string;
  x?: number;
  y?: number;
}
export interface CameraAlgorithmDehazeInfo {
  payloadIndex?: string;
  mode?: number;
  level?: number;
  isWorking?: boolean;
}
export interface CameraApertureValueSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  apertureValue?: number;
}
export interface CameraCapability {
  payloadIndex?: string;
  zoomFactorRange?: (number)[];
  irFactorRange?: (number)[];
  basePhotoStorageFormat?: CameraPhotoStorageFormat;
}
export interface CameraDenoiseLevelSetParams {
  payloadIndex?: string;
  level?: number;
}
export interface CameraDewarpingSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  dewarpingState?: number;
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
export interface CameraFocalLengthParams {
  payloadIndex?: string;
  cameraType?: CameraLensType;
  zoomFactor?: number;
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
export interface CameraIrMeteringArea {
  averTemperature?: number;
  height?: number;
  width?: number;
  x?: number;
  y?: number;
  maxTemperaturePoint?: CameraIrMeteringPoint;
  minTemperaturePoint?: CameraIrMeteringPoint;
}
export interface CameraIrMeteringPoint {
  temperature?: number;
  x?: number;
  y?: number;
}
export interface CameraIrMeterRegion {
  topLeftX?: number;
  topLeftY?: number;
  bottomRightX?: number;
  bottomRightY?: number;
}
export interface CameraIrPipState {
  payloadIndex?: string;
  displayMode?: number;
  enhanceMode?: number;
  irMixRate?: number;
  irMeterRegion?: CameraIrMeterRegion;
}
export interface CameraIrThermometryInfo {
  payloadIndex?: string;
  irMeteringMode?: number;
  irMeteringPoint?: CameraIrMeteringPoint;
  irMeteringArea?: CameraIrMeteringArea;
}
export interface CameraIsoSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  isoValue?: number;
}
export interface CameraIsothermPolygon {
  payloadIndex?: string;
  points?: (CameraIsothermPolygonPoint)[];
}
export interface CameraIsothermPolygonPoint {
  x?: number;
  y?: number;
}
export interface CameraLensFovInfo {
  payloadIndex?: string;
  width?: number;
  height?: number;
  imageRatio?: number;
  focalLength?: number;
}
export interface CameraLiveviewWorldRegion {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}
export interface CameraLookAtParams {
  payloadIndex?: string;
  locked?: boolean;
  height?: number;
  latitude?: number;
  longitude?: number;
}
export interface CameraMeasureTarget {
  payloadIndex?: string;
  altitude?: number;
  distance?: number;
  latitude?: number;
  longitude?: number;
  laserMeasureState?: number;
}
export interface CameraMechanicalShutterSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  state?: number;
}
export interface CameraMediaStorage {
  payloadIndex?: string;
  photoStorageSettings?: (string)[];
  videoStorageSettings?: (string)[];
}
export interface CameraNightVisionEnableParams {
  payloadIndex?: string;
  enable?: boolean;
}
export interface CameraPhotoFormatSetParams {
  payloadIndex?: string;
  photoFormat?: number;
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
export interface CameraPhotoStorageFormat {
  photoStorageFormatNum?: number;
  photoStorageFormats?: (string)[];
}
export interface CameraPointFocusActionParams {
  payloadIndex?: string;
  cameraLensType?: number;
  x?: number;
  y?: number;
}
export interface CameraPreRecordedInfo {
  payloadIndex?: string;
  status?: number;
  preRecordedTime?: number;
}
export interface CameraScreenDragParams {
  payloadIndex?: string;
  locked?: boolean;
  pitchSpeed?: number;
  yawSpeed?: number;
}
export interface CameraScreenSplitParams {
  payloadIndex?: string;
  enable?: boolean;
}
export interface CameraSettableCapability {
  payloadIndex?: string;
  events?: (CameraSettableEvent)[];
}
export interface CameraSettableEvent {
  eventId?: number;
  settable?: number;
}
export interface CameraSettingsResetParams {
  payloadIndex?: string;
}
export interface CameraShutterSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  shutterValue?: number;
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
export interface CameraStorageInfo {
  payloadIndex?: string;
  total?: number;
  used?: number;
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
export interface CameraWatermarkParams {
  payloadIndex?: string;
  globalEnable?: number;
  droneTypeEnable?: number;
  manufacturerEnable?: number;
  droneSNEnable?: number;
  datetimeEnable?: number;
  gpsEnable?: number;
  userCustomStringEnable?: number;
  userCustomString?: string;
  layout?: number;
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
export interface CheckUnlockLicenseParam {
  fileKey?: string;
  deviceSn?: string;
}
export interface CheckUnlockLicenseResult {
  errFileNames?: (string)[];
  errCertMismatch?: (string)[];
  items?: (CheckUnlockLicenseResultItem)[];
}
export interface CheckUnlockLicenseResultItem {
  fileName?: string;
  name?: string;
  type?: string;
  beginTime?: bigint | number;
  endTime?: bigint | number;
  url?: string;
}
export interface CleanFogParams {
  payloadIndex?: string;
}
export interface CloseChargeResult {
  message?: string;
  bid?: string;
}
export interface CloseDebugModeResult {
  message?: string;
  bid?: string;
}
export interface CloseDockCoverProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface CloseDockCoverResult {
  message?: string;
  bid?: string;
}
export interface CloseDroneResult {
  message?: string;
  bid?: string;
}
export interface CloudEnvDeviceInfo {
  callsign?: string;
  deviceModelKey?: string;
  deviceSn?: string;
}
export interface CloudEnvDeviceList {
  host?: (CloudEnvDeviceInfo)[];
  nodes?: (CloudEnvDeviceInfo)[];
  parents?: (CloudEnvDeviceInfo)[];
}
export interface CloudEnvironmentSwitchCallbackParam {
  code?: number;
  status?: string;
  deviceAuthVerify?: DeviceAuthVerifyParam;
  devicesList?: (CloudEnvDeviceList)[];
  targetConfig?: CloudEnvTargetConfig;
}
export interface CloudEnvironmentSwitchParam {
  devicesList?: (CloudEnvDeviceList)[];
  targetConfig?: CloudEnvTargetConfig;
}
export interface CloudEnvironmentSwitchResult {
  message?: string;
  bid?: string;
  progress?: number;
}
export interface CloudEnvPrivateCloudConfig {
  bindCode?: string;
  orgId?: string;
  url?: string;
}
export interface CloudEnvPublicCloudConfig {
  bindCode?: string;
  orgId?: string;
  zoneId?: string;
}
export interface CloudEnvTargetConfig {
  type?: number;
  publicCloudConfig?: CloudEnvPublicCloudConfig;
  privateCloudConfig?: CloudEnvPrivateCloudConfig;
  thirdCloudConfig?: CloudEnvThirdCloudConfig;
}
export interface CloudEnvThirdCloudConfig {
  bindCode?: string;
  orgId?: string;
  mqttAddr?: string;
  mqttPassword?: string;
  mqttUsername?: string;
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
  outOfControlAction?: OutOfControlAction;
  rthAltitude?: number;
  commanderFlightMode?: number;
  commanderFlightHeight?: number;
  rthMode?: number;
  cloudToCloudId?: string;
}
export interface CommandTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: CommandTaskData;
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
export interface CommonPaginationData {
  page?: number;
  pageSize?: number;
  total?: number;
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
  extData?: WaylineDetailExtData;
}
export interface ContentsGeometryData {
  type?: string;
  coordinates?: (((number)[])[])[];
  center?: (number)[];
  radius?: number;
}
export interface ContentsPropertyData {
  color?: string;
  width?: number;
  clampToGround?: boolean;
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
  locked?: boolean;
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
export interface CopyWaylineParam {
  originalWaylineUuid?: string;
  targetWaylineName?: string;
}
export interface CopyWaylineResult {
  waylineUuid?: string;
  waylineName?: string;
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
export interface CreateCustomizedFlightAreasParams {
  name?: string;
  type?: string;
  content?: FlightAreasContentData;
  createdBy?: string;
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
export interface CreateDeviceLogReportResult {
  trackNumber?: string;
  reportUuid?: string;
  errorLogList?: string;
  createDeviceJobData?: CreateDeviceJobDataResult;
}
export interface CreateFlightAreasResults {
  id?: string;
  name?: string;
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
  fastReconstruction?: boolean;
}
export interface CreateInFlightWaylineTaskResult {
  flightTaskId?: string;
  inFlightWaylineTaskId?: string;
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
export interface CreateMaintenanceOrderResults {
  success?: boolean;
  generatedOrders?: (GeneratedOrderInfo)[];
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
export interface CreateSelfDiagnosisParams {
  deviceSn?: string;
  type?: number;
  part?: number;
  index?: number;
  motorAction?: number;
  deviceTopo?: SelfDiagnosisDeviceTopoParams;
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
export interface DeleteAIInsideAlgorithmParam {
  signedId?: string;
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
export interface DeviceAudienceCountItem {
  sn?: string;
  count?: number;
}
export interface DeviceAudienceCountRequestItem {
  sn?: string;
  cameraList?: (string)[];
}
export interface DeviceAuthVerifyParam {
  sn?: string;
  secret?: string;
  nonce?: string;
}
export interface DeviceChange {
  changeType?: string;
  changeDevices?: (string)[];
}
export interface DeviceDetailInfo {
  deviceSn?: string;
  nickname?: string;
  modelInfo?: ModelInfo;
  deviceAddTime?: number;
  online?: boolean;
  deviceFirmwareVersion?: string;
  deviceFirmwareStatus?: number;
  deviceWorkingStatus?: number;
  completeMachineSn?: string;
  subDevices?: (SubDeviceInfo)[];
}
export interface DeviceFormatProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface DeviceFormatResult {
  message?: string;
  bid?: string;
}
export interface DeviceLogListResult {
  files?: (DeviceLogListResultFileItem)[];
}
export interface DeviceLogListResultFileItem {
  deviceSn?: string;
  module?: string;
  result?: number;
  list?: (DeviceLogListResultLogItem)[];
  objectKey?: string;
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
export interface DeviceLogReportContactInformationParam {
  email?: string;
  phone?: string;
}
export interface DeviceLogReportDeviceTopoItemParam {
  deviceModelKey?: string;
  sn?: string;
}
export interface DeviceLogReportDeviceTopoParam {
  parents?: (DeviceLogReportDeviceTopoItemParam)[];
  hosts?: (DeviceLogReportDeviceTopoItemParam)[];
}
export interface DeviceLogReportDomainItemParam {
  key?: bigint | number;
  value?: string;
}
export interface DeviceLogReportLogItemParam {
  bootIndex?: number;
  startTime?: bigint | number;
  endTime?: bigint | number;
  size?: bigint | number;
  md5?: string;
}
export interface DeviceLogReportLogListItemParam {
  deviceSn?: string;
  list?: (DeviceLogReportLogItemParam)[];
  module?: string;
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
export interface DeviceRebootProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface DeviceRebootResult {
  message?: string;
  bid?: string;
}
export interface DeviceRecommendationReq {
  sn?: (string)[];
  strategyId?: number;
  flyToLatitude?: number;
  flyToLongitude?: number;
  flyToHeight?: number;
  hasFlyToPosition?: boolean;
}
export interface DeviceRecommendationResp {
  devices?: (RecommendedDevice)[];
}
export interface DeviceRepairConfig {
  deviceSn?: string;
  supportRepair?: boolean;
  allowedSourceTypes?: (number)[];
  repairGuidance?: RepairGuidance;
}
export interface DeviceRepairConfigResults {
  data?: (DeviceRepairConfig)[];
}
export interface DeviceSignalItem {
  deviceSn?: string;
  grids?: (GridSignalItem)[];
}
export interface DeviceStatusModel {
  deviceClass?: string;
  key?: string;
  name?: string;
}
export interface DeviceSyncResults {
  deviceSn?: string;
  code?: number;
}
export interface DeviceSyncStatusResults {
  sn?: string;
  status?: string;
  reason?: number;
}
export interface DeviceTopo {
  device?: Device;
  subDevices?: (Device)[];
}
export interface DeviceTopoChange {
  gatewaySn?: string;
  devices?: (string)[];
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
export interface DeviceUnlockPolygonPoint {
  latitude?: number;
  longitude?: number;
}
export interface DeviceUnlockPolygonUnlock {
  points?: (DeviceUnlockPolygonPoint)[];
}
export interface DeviceUnlockPowerUnlock {
  level?: number;
}
export interface DeviceUnlockRidUnlock {
  level?: number;
}
export interface DiagnosisDeviceProgressItem {
  sn?: string;
  status?: string;
  percent?: number;
}
export interface DiagnosisDeviceReportProgress {
  result?: number;
  sn?: string;
  status?: string;
  percent?: number;
  allDevice?: (DiagnosisDeviceProgressItem)[];
}
export interface DiagnosisErrorCodeItem {
  errorCode?: string;
  errorCodeDescribe?: string;
  errorCodeDescribeEn?: string;
  level?: number;
}
export interface DiagnosisErrorCodeList {
  notice?: (DiagnosisErrorCodeItem)[];
  warning?: (DiagnosisErrorCodeItem)[];
  alert?: (DiagnosisErrorCodeItem)[];
}
export interface DiagnosisMaterialItem {
  errorCodeList?: DiagnosisErrorCodeList;
  materialNum?: string;
  materialName?: string;
  materialProbability?: string;
  hmsTotal?: number;
}
export interface DockAccTime {
  accTime?: number;
}
export interface DockActivationTime {
  activationTime?: number;
}
export interface DockAirConditionerMode {
  airConditionerMode?: bigint | number;
}
export interface DockAirConditionerStatusInfo {
  airConditionerState?: DockAirConditionerState;
  switchTime?: number;
}
export interface DockAlarmState {
  alarmState?: number;
}
export interface DockAlternateLandPoint {
  isConfigured?: number;
  longitude?: number;
  latitude?: number;
  safeLandHeight?: number;
  height?: number;
}
export interface DockBackupBatteryInfo {
  switchState?: number;
  voltage?: number;
  temperature?: number;
}
export interface DockBatteryStoreMode {
  batteryStoreMode?: number;
}
export interface DockCoverState {
  coverState?: number;
}
export interface DockDongleInfos {
  dongleInfos?: (DongleInfoItem)[];
}
export interface DockDrcState {
  drcState?: number;
}
export interface DockDroneBatteryMaintenanceInfo {
  maintenanceState?: number;
  maintenanceTimeLeft?: number;
  heatState?: number;
  batteries?: (BatteryBasicInfo)[];
}
export interface DockDroneChargeState {
  state?: number;
  capacityPercent?: number;
}
export interface DockEmergencyStopState {
  emergencyStopState?: number;
}
export interface DockFirmwareInfo {
  firmwareVersion?: string;
  compatibleStatus?: number;
  firmwareUpgradeStatus?: number;
}
export interface DockFirstPowerOnTime {
  firstPowerOn?: string;
}
export interface DockJobNumber {
  jobNumber?: number;
}
export interface DockLiveCapacity {
  availableVideoNumber?: bigint | number;
  coexistVideoNumberMax?: bigint | number;
  deviceList?: (LiveCapacityDevice)[];
}
export interface DockLiveStatus {
  liveStatus?: (LiveStatusItem)[];
}
export interface DockLocation {
  heading?: number;
  height?: number;
  latitude?: number;
  longitude?: number;
}
export interface DockMaintainStatus {
  state?: number;
  lastMaintainType?: number;
  lastMaintainTime?: bigint | number;
  lastMaintainWorkSorties?: number;
}
export interface DockMaintainStatusInfo {
  maintainStatusInfos?: (DockMaintainStatus)[];
}
export interface DockMediaFileDetail {
  remainUpload?: number;
}
export interface DockMeteorologicalInfo {
  temperature?: number;
  environmentTemperature?: number;
  humidity?: number;
  windSpeed?: number;
  rainfall?: number;
}
export interface DockModeCode {
  modeCode?: number;
}
export interface DockNetworkState {
  type?: number;
  quality?: number;
  rate?: number;
}
export interface DockOnlineStatus {
  online?: boolean;
}
export interface DockPositionState {
  isCalibration?: number;
  isFixed?: number;
  quality?: number;
  gpsNumber?: number;
  rtkNumber?: number;
}
export interface DockPowerState {
  electricSupplyVoltage?: number;
  workingVoltage?: number;
  workingCurrent?: number;
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
export interface DockSilentMode {
  silentMode?: number;
}
export interface DockStatusAirConditionerResult {
  airConditionerState?: number;
  switchTime?: number;
}
export interface DockStatusAlternateLandPointResult {
  height?: number;
  configured?: number;
  latitude?: number;
  longitude?: number;
  safeLandHeight?: number;
}
export interface DockStatusBackupBatteryResult {
  switchState?: number;
  temperature?: number;
  voltage?: number;
}
export interface DockStatusItemResult {
  sn?: string;
  online?: boolean;
  updatedTime?: bigint | number;
  deviceModel?: DeviceStatusModel;
  properties?: DockStatusPropertiesResult;
}
export interface DockStatusNetworkStateResult {
  quality?: number;
  rate?: number;
  type?: number;
}
export interface DockStatusPositionStateResult {
  gpsNumber?: number;
  calibration?: number;
  fixed?: number;
  quality?: number;
  rtkNumber?: number;
}
export interface DockStatusPropertiesResult {
  accTime?: number;
  acdcPowerInput?: number;
  electricSupplyVoltage?: number;
  environmentTemperature?: number;
  humidity?: number;
  jobNumber?: number;
  poeLinkStatus?: number;
  poePowerOutput?: number;
  rainfall?: number;
  temperature?: number;
  workingVoltage?: number;
  airConditioner?: DockStatusAirConditionerResult;
  alternateLandPoint?: DockStatusAlternateLandPointResult;
  backupBattery?: DockStatusBackupBatteryResult;
  networkState?: DockStatusNetworkStateResult;
  positionState?: DockStatusPositionStateResult;
  tiltAngle?: DockStatusTiltAngleResult;
}
export interface DockStatusTiltAngleResult {
  valid?: number;
  value?: number;
}
export interface DockStorageState {
  total?: number;
  used?: number;
}
export interface DockSubDeviceInfo {
  deviceSn?: string;
  deviceModelKey?: string;
  deviceOnlineStatus?: number;
  devicePaired?: number;
}
export interface DockSubDeviceInfoList {
  subDeviceInfos?: (DockSubDeviceInfo)[];
}
export interface DockSupplementLightState {
  supplementLightState?: number;
}
export interface DockUserExperienceImprovement {
  userExperienceImprovement?: number;
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
export interface DonglePowerSwitchResult {
  message?: string;
  bid?: string;
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
export interface DroneCommanderFlightMode {
  commanderFlightMode?: bigint | number;
}
export interface DroneCommanderModeLostAction {
  commanderModeLostAction?: bigint | number;
}
export interface DroneCurrentCommanderFlightMode {
  currentCommanderFlightMode?: bigint | number;
}
export interface DroneDongleInfos {
  dongleInfos?: (DongleInfoItem)[];
}
export interface DroneFlysafeDatabaseVersion {
  flysafeDatabaseVersion?: string;
}
export interface DroneFormatResult {
  message?: string;
  bid?: string;
}
export interface DroneInDock {
  droneInDock?: number;
}
export interface DroneModeCodeReason {
  modeCodeReason?: bigint | number;
}
export interface DroneOfflineMapEnable {
  offlineMapEnable?: boolean;
}
export interface DroneOnlineStatus {
  online?: boolean;
}
export interface DronePsdkUiResource {
  psdkUiResource?: (PsdkUiResourceItem)[];
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
export interface DroneStatusBatteryResult {
  batteries?: (DroneStatusBatteryItemResult)[];
  capacityPercent?: number;
  landingPower?: number;
  remainFlightTime?: number;
  remainJobTime?: number;
  returnHomePower?: number;
}
export interface DroneStatusDistanceLimitStatusResult {
  distanceLimit?: number;
  nearDistanceLimit?: number;
  state?: number;
}
export interface DroneStatusItemResult {
  sn?: string;
  online?: boolean;
  updatedTime?: bigint | number;
  deviceModel?: DeviceStatusModel;
  properties?: DroneStatusPropertiesResult;
}
export interface DroneStatusObstacleAvoidanceResult {
  downside?: number;
  horizon?: number;
  upside?: number;
}
export interface DroneStatusPositionStateResult {
  gpsNumber?: number;
  fixed?: number;
  quality?: number;
  rtkNumber?: number;
}
export interface DroneStatusPropertiesResult {
  heightLimit?: number;
  homeDistance?: number;
  homeLatitude?: number;
  homeLongitude?: number;
  horizontalSpeed?: number;
  lowBatteryWarningThreshold?: number;
  modeCode?: number;
  modeCodeReason?: number;
  nightLightsState?: number;
  remainingPowerForReturnHome?: number;
  seriousLowBatteryWarningThreshold?: number;
  totalFlightDistance?: number;
  totalFlightSorties?: number;
  totalFlightTime?: number;
  verticalSpeed?: number;
  battery?: DroneStatusBatteryResult;
  distanceLimitStatus?: DroneStatusDistanceLimitStatusResult;
  obstacleAvoidance?: DroneStatusObstacleAvoidanceResult;
  positionState?: DroneStatusPositionStateResult;
  storage?: DroneStatusStorageResult;
}
export interface DroneStatusStorageResult {
  total?: bigint | number;
  used?: bigint | number;
}
export interface DroneWpmzVersion {
  wpmzVersion?: string;
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
export interface EditPsdkSpeakerResourceParams {
  id?: string;
  name?: string;
  fileType?: string;
  visible?: boolean;
  content?: string;
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
export interface EisSeiInfo {
  version?: number;
  leftTop?: CamCropPos;
  rightTop?: CamCropPos;
  rightBottom?: CamCropPos;
  leftBottom?: CamCropPos;
}
export interface ElementCreateMsg {
  id?: string;
  groupId?: string;
  name?: string;
  display?: number;
}
export interface ElementCreateParams {
  id?: string;
  source?: number;
  resourceContent?: ElementResourceContent;
  resourceType?: number;
  resourceRemark?: string;
  name?: string;
  elementSource?: number;
  desc?: string;
}
export interface ElementCreateResult {
  id?: string;
}
export interface ElementDeleteMsg {
  id?: string;
  groupId?: string;
}
export interface ElementDeleteParams {
  id?: string;
  fromBatchDelete?: boolean;
}
export interface ElementDeleteResult {
  id?: string;
}
export interface ElementGeometry {
  type?: string;
  radius?: number;
  coordinates?: string;
  breadCrumbs?: string;
}
export interface ElementGeoPoint {
  lng?: number;
  lat?: number;
  alt?: number;
}
export interface ElementGroupOutput {
  id?: string;
  name?: string;
  order?: number;
  isDistributed?: boolean;
  type?: number;
  isLock?: boolean;
  triState?: string;
  createTime?: bigint | number;
  parentId?: string;
  elements?: (ElementItem)[];
  children?: (ElementGroupOutput)[];
}
export interface ElementItem {
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
export interface ElementListHierarchyParams {
  groupId?: string;
  pid?: string;
  isDistributed?: boolean;
  type?: number;
  elementUuid?: string;
  excludeCopy?: boolean;
}
export interface ElementListHierarchyResult {
  list?: (ElementGroupOutput)[];
}
export interface ElementMediaImage {
  objectKey?: string;
  mediaFileId?: number;
  mediaFileUuid?: string;
}
export interface ElementMediaResources {
  images?: (ElementMediaImage)[];
}
export interface ElementProperties {
  color?: string;
  clampToGround?: boolean;
  is3d?: boolean;
  isTransparent?: boolean;
  fontSize?: number;
  icon?: number;
}
export interface ElementResourceContent {
  type?: string;
  properties?: ElementProperties;
  geometry?: ElementGeometry;
  mediaResources?: ElementMediaResources;
}
export interface ElementResourceData {
  content?: ElementResourceContent;
  type?: number;
  userName?: string;
  userId?: string;
  remark?: string;
}
export interface ElementResourceOrderItem {
  id?: string;
  order?: number;
}
export interface ElementSetVisibilityParams {
  id?: string;
  display?: number;
}
export interface ElementSetVisibilityResult {
  id?: string;
}
export interface ElementUpdateMsg {
  id?: string;
  groupId?: string;
  name?: string;
  display?: number;
}
export interface ElementUpdateParams {
  id?: string;
  name?: string;
  content?: ElementResourceContent;
  display?: number;
  remark?: string;
  status?: number;
  elevationLoadStatus?: number;
  userStatus?: number;
  targetLayerId?: string;
  orders?: (ElementResourceOrderItem)[];
}
export interface ElementUpdateResult {
  id?: string;
}
export interface EsimInfoItem {
  enabled?: boolean;
  iccid?: string;
  telecomOperator?: bigint | number;
}
export interface EsimOperatorSwitchProgressResult {
  message?: string;
  bid?: string;
  dataJson?: string;
}
export interface EsimOperatorSwitchResult {
  message?: string;
  bid?: string;
}
export interface ExportFileProgressExtResult {
  sn?: string;
  exportType?: number;
  appId?: string;
  objectKey?: string;
}
export interface ExportFileProgressResult {
  bid?: string;
  status?: string;
  percent?: number;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  deviceCode?: number;
  ext?: ExportFileProgressExtResult;
}
export interface ExportFileResult {
  bid?: string;
  status?: string;
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
export interface FetchAppListProgressExtResult {
  sn?: string;
  aiBoxAppInfo?: (AIBoxAppInfoResult)[];
  errorReason?: string;
}
export interface FetchAppListProgressResult {
  bid?: string;
  status?: string;
  percent?: number;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  deviceCode?: number;
  ext?: FetchAppListProgressExtResult;
}
export interface FetchAppListResult {
  bid?: string;
  status?: string;
}
export interface FetchFileDownloadUrlParam {
  deviceSn?: string;
  boxSn?: string;
  objectKeys?: (string)[];
}
export interface FileDownloadUrlListResult {
  list?: (string)[];
}
export interface FileUploadAIInsideAlgorithmParam {
  fileKey?: string;
}
export interface FileUploadAIInsideAlgorithmResult {
  detail?: AIInsideAlgorithmDetail;
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
export interface FirmwareInfoParam {
  deviceModelKey?: string;
  version?: string;
  desc?: string;
  objectKey?: string;
  md5?: string;
}
export interface FirmwareItemResult {
  id?: number;
  createdAt?: string;
  deviceModelKey?: string;
  status?: string;
  version?: string;
  desc?: string;
}
export interface FirmwareReleaseNoteResult {
  deviceModelKey?: string;
  lang?: string;
  productVersion?: string;
  releaseNote?: string;
  releasedTime?: string;
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
export interface FirmwareServiceData {
  devices?: (FirmwareServiceDevice)[];
}
export interface FirmwareServiceDevice {
  sn?: string;
  firmwareUpgradeType?: number;
  productVersion?: string;
}
export interface FirmwareServiceProgress {
  percent?: number;
  currentStep?: number;
}
export interface FirmwareStatusItem {
  sn?: string;
  firmwareVersion?: string;
  firmwareStatus?: number;
  deviceModelKey?: string;
  services?: FirmwareService;
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
export interface FirmwareUpgradeDeviceItem {
  sn?: string;
  deviceModelKey?: string;
  firmwareUpgradeType?: number;
  productVersion?: string;
}
export interface FirmwareUpgradeParam {
  devices?: (FirmwareUpgradeDeviceItem)[];
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
export interface FirmwareUpgradeProgressOTA {
  status?: string;
  progress?: FirmwareUpgradeProgressStep;
}
export interface FirmwareUpgradeProgressStep {
  currentStep?: number;
  percent?: number;
}
export interface FirmwareUpgradeResponseDeviceItemResult {
  firmwareUpgradeType?: number;
  productVersion?: string;
  sn?: string;
}
export interface FirmwareUpgradeResult {
  deviceCode?: number;
  status?: string;
  devices?: (FirmwareUpgradeResponseDeviceItemResult)[];
}
export interface FlashLedConfig {
  id?: string;
  name?: string;
  flashSegments?: (FlashLedSegment)[];
}
export interface FlashLedConfigList {
  configs?: (FlashLedConfig)[];
}
export interface FlashLedConfigParams {
  name?: string;
  flashSegments?: (FlashLedSegment)[];
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
export interface FlashLedSegment {
  color?: number;
  count?: number;
  on?: number;
  off?: number;
  interval?: number;
}
export interface FlashLedStateInfo {
  on?: number;
  patternUuid?: string;
  patternName?: string;
  patterns?: (FlashLedPatternInfo)[];
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
export interface FlightAreasContentData {
  type?: string;
  properties?: ContentsPropertyData;
  geometry?: ContentsGeometryData;
}
export interface FlightCommanderHeightResult {
  commanderFlightHeight?: number;
  deviceShadowSync?: FlightSafeSyncResult;
}
export interface FlightHubError {
  errorCode?: number;
  httpCode?: number;
  serverCode?: number;
  deviceCode?: number;
  serverMessage?: string;
}
export interface FlightHubSdkConfig {
  logLevel?: string;
  logToConsole?: boolean;
  showVersionInfo?: boolean;
  logFilePath?: string;
  logMaxFileSize?: bigint | number;
  logMaxFiles?: number;
  address?: string;
  port?: string;
  notificationServerAddress?: string;
  drtcConfigPath?: string;
  verifySsl?: boolean;
  sslCaPath?: string;
}
export interface FlightOutOfControlActionResult {
  outOfControlAction?: string;
  deviceShadowSync?: FlightSafeSyncResult;
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
export interface FlightRthAltitudeResult {
  rthAltitude?: number;
  deviceShadowSync?: FlightSafeSyncResult;
}
export interface FlightSafeSyncField {
  field?: string;
  synced?: boolean;
}
export interface FlightSafeSyncResult {
  status?: string;
  results?: (FlightSafeSyncField)[];
}
export interface FlightSmartPlanModeResult {
  smartPlanningMode?: number;
  deviceShadowSync?: FlightSafeSyncResult;
}
export interface FlightTask {
  uuid?: string;
  name?: string;
  taskType?: number;
  status?: number;
  progress?: number;
  sn?: string;
  folderInfo?: string;
  runAt?: bigint | number;
  completeAt?: bigint | number;
  totalWaypoints?: number;
  currentWaypointIndex?: number;
  progressVersion?: bigint | number;
  resumableStatus?: string;
  obstacleAvoidanceNotify?: string;
  waylineUuid?: string;
}
export interface FlightTaskEventBreakPointResume {
  taskUuid?: string;
  parentUuid?: string;
  groupUuid?: string;
  sn?: string;
  landingDockSn?: string;
}
export interface FlightTaskEventContinuousSubTask {
  taskUuid?: string;
  parentUuid?: string;
  groupUuid?: string;
  sn?: string;
  landingDockSn?: string;
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
export interface FlightTaskListParams {
  page?: number;
  pageSize?: number;
  sn?: (string)[];
  beginAt?: bigint | number;
  endAt?: bigint | number;
  name?: string;
  status?: (number)[];
  taskType?: number;
  mediaUploadType?: number;
}
export interface FlightTaskListResult {
  list?: (TaskDetail)[];
  pagination?: PaginationInfo;
}
export interface FlightTasks {
  flightTasks?: (FlightTask)[];
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
export interface FlightTasksMediaStatusChanged {
  taskMedia?: (TasksMediaStatus)[];
}
export interface FlightTaskStepCode {
  flighttaskStepCode?: number;
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
export interface FlyToPointParams {
  latitude?: number;
  longitude?: number;
  height?: number;
  maxSpeed?: number;
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
export interface FlyToTargetPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
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
export interface FlyToTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: FlyToTaskData;
}
export interface FlyToUpdateTargetPointsParams {
  flyToId?: string;
  startPoint?: FlyToTargetPoint;
  points?: (FlyToTargetPoint)[];
  maxSpeed?: number;
}
export interface FlyToWayPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface FovSeiInfo {
  fovHorizontal?: bigint | number;
  fovVertical?: bigint | number;
  curActualFocalLength?: bigint | number;
}
export interface FrameInfo {
  keyFrame?: boolean;
}
export interface GeneratedOrderInfo {
  orderNumber?: string;
  status?: number;
  ruiyunOrderNumber?: string;
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
export interface GetAiAlertDeviceSettingParam {
  droneSn?: string;
}
export interface GetAiAlertDeviceSettingResult {
  droneSn?: string;
  enableTargetAlert?: boolean;
  alarmInfo?: AiAlertAlarmInfo;
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
export interface GetAIInsideModelDevicesSummaryParam {
  signedId?: string;
  operationType?: string;
}
export interface GetAIInsideModelDevicesSummaryResult {
  totalDevices?: number;
  operableDevices?: number;
}
export interface GetAIInsideModelsResult {
  models?: (AIInsideModelItem)[];
}
export interface GetAreasSyncStatusResults {
  list?: (DeviceSyncStatusResults)[];
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
export interface GetCustomizedFlightAreasParams {
  name?: string;
  type?: string;
  status?: string;
  ids?: (string)[];
  pageIndex?: number;
  pageSize?: number;
}
export interface GetDeviceRepairConfigParams {
  deviceSns?: (string)[];
}
export interface GetExportFlightRecordsProgressResults {
  pagination?: CommonPaginationData;
  list?: (FlightRecordExportProgressItemData)[];
}
export interface GetFlightAreasResults {
  list?: (FlightAreaInfoItem)[];
  pagination?: FlightAreaPagination;
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
export interface GetInFlightTaskToposResult {
  list?: (InFlightTaskTopoItem)[];
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
export interface GetMediaFileDetailByIdResult {
  url?: string;
  thumbnailUrl?: string;
  alertImageUrl?: string;
  name?: string;
  suffix?: string;
  size?: bigint | number;
  createAt?: string;
  extWidth?: number;
  extHeight?: number;
  photoPosition?: MediaFileGeoPosition;
}
export interface GetMediaFilesDownloadUrlListResults {
  list?: (MediaFileDownloadInfo)[];
}
export interface GetMediaFilesDownloadUrlResults {
  url?: string;
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
export interface GetOfflineMapsModelInfoResults {
  disable?: boolean;
  offlineMap?: OfflineMapsModelData;
}
export interface GetOfflineMapsSyncStatusResults {
  list?: (DeviceSyncStatusResults)[];
}
export interface GetPsdkWidgetResourceParams {
  objectKeys?: (string)[];
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
  deviceReportProgress?: DiagnosisDeviceReportProgress;
  qrCodeContent?: string;
  qrGuideText?: string;
}
export interface GetTCAInfosResp {
  tcas?: (TCAInfo)[];
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
  items?: (WaylineListItemResult)[];
}
export interface GimbalState {
  payloadIndex?: string;
  yaw?: number;
  pitch?: number;
  roll?: number;
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
export interface HeaderKeyValue {
  key?: string;
  value?: string;
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
export interface HistoryHmsDataResultItem {
  mongoId?: string;
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
export interface HistoryHmsDataResultPagination {
  pageNum?: number;
  pageSize?: number;
  total?: number;
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
export interface HmsData {
  hmsDataItems?: (HmsDataItem)[];
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
export interface HmsDataItem {
  basics?: HmsDataBasics;
  subHmsData?: (HmsDataBasics)[];
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
export interface ImportKmzItem {
  kmzObjectKey?: string;
  waylineName?: string;
  asyncRequestId?: string;
}
export interface ImportKmzResult {
  list?: (ImportKmzItem)[];
  total?: number;
}
export interface ImportUnlockLicenseParam {
  deviceSn?: string;
  certUrl?: string;
}
export interface ImportWaylineEventExtData {
  kmzWithoutResObjectKey?: string;
  kmzWithoutResMd5?: string;
  targetAreaFileObjectKey?: string;
  businessFileObjectKey?: string;
  modelFileObjectKeys?: (string)[];
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
  waylineValidityCheck?: boolean;
  hasOrientedAction?: boolean;
  hasAccurateAction?: boolean;
  surfaceFlyOn?: boolean;
  elevationOptimizationOn?: boolean;
  smartObliqueOn?: boolean;
  mappingStripUseTemplateAltitude?: boolean;
  withMegaphone?: boolean;
  withSearchLight?: boolean;
  aiWayline?: boolean;
  droneType?: string;
  targetDetectAreaFilePath?: string;
  waylineValidityCheckCodes?: (number)[];
  elevationFileNames?: (string)[];
  payloadTypes?: (string)[];
  payloadTypesWithIndex?: (string)[];
  accurateActionUuids?: (string)[];
  actionUuids?: (string)[];
  surveyAreaScope?: WaylineDetailSurveyAreaScope;
  resFileMd5s?: (string)[];
  audioFileMd5s?: (string)[];
  targetDetectActionUuids?: (string)[];
  aiAudioFileMd5s?: (string)[];
  actionUuidToMd5Map?: Record<string, string>;
  audioActionUuidToFilePathMap?: Record<string, string>;
  aiAudioActionUuidToFilePathMap?: Record<string, string>;
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
export interface InFlightTaskTopoItem {
  droneSn?: string;
  flightId?: string;
  takeoffSn?: string;
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
export interface InfraredFillLightEnableParams {
  payloadIndex?: string;
  enable?: boolean;
}
export interface InstallAppProgressExtResult {
  sn?: string;
}
export interface InstallAppProgressResult {
  bid?: string;
  status?: string;
  percent?: number;
  createTime?: bigint | number;
  updateTime?: bigint | number;
  deviceCode?: number;
  ext?: InstallAppProgressExtResult;
}
export interface InstallAppResult {
  bid?: string;
  status?: string;
}
export interface IntervalTakePhotoParam {
  payloadIndex?: string;
}
export interface IntervalTakePhotoSetParam {
  payloadIndex?: string;
  interval?: number;
}
export interface IntervalTakePhotoStatus {
  countdownTime?: number;
}
export interface IrMeteringAreaSetParams {
  payloadIndex?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
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
export interface IsothermPolygonPoint {
  x?: number;
  y?: number;
}
export interface LinkageZoomParams {
  payloadIndex?: string;
  state?: number;
}
export interface LinkStatus {
  ctrlLinkStatus?: DroneLinkState;
  dataLinkStatus?: DroneLinkState;
  liveLinkStatus?: DroneLinkState;
}
export interface LiveCapacityCamera {
  cameraIndex?: string;
  availableVideoNumber?: bigint | number;
  coexistVideoNumberMax?: bigint | number;
  videoList?: (LiveCapacityVideo)[];
}
export interface LiveCapacityDevice {
  sn?: string;
  availableVideoNumber?: bigint | number;
  coexistVideoNumberMax?: bigint | number;
  cameraList?: (LiveCapacityCamera)[];
}
export interface LiveCapacityVideo {
  videoIndex?: string;
  videoType?: string;
  switchableVideoTypes?: (string)[];
}
export interface LiveInfo {
  deviceSn?: string;
  payloadIndex?: string;
  videoId?: string;
  switchableLensTypeSwigValues?: (number)[];
}
export interface LiveQualitySettingParams {
  sn?: string;
  camera?: string;
  video?: string;
  videoQuality?: number;
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
  state?: RecordState;
  createdBy?: string;
  duration?: number;
  createTime?: bigint | number;
}
export interface LiveStatusItem {
  videoId?: string;
  videoType?: string;
  videoQuality?: bigint | number;
  status?: bigint | number;
  errorStatus?: bigint | number;
}
export interface LiveStreamStartResult {
  expireTs?: string;
  urlType?: string;
  url?: string;
  publishUid?: string;
  providerUrl?: string;
}
export interface LiveSyncCameraCapacity {
  cameraIndex?: string;
  videosList?: (LiveSyncVideoCapacity)[];
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
export interface LiveSyncCreateResult {
  item?: LiveSyncItem;
  limit?: number;
  hasLimit?: boolean;
}
export interface LiveSyncDeviceItemV2 {
  gateway?: LiveSyncDeviceV2;
  hosts?: (LiveSyncDeviceV2)[];
}
export interface LiveSyncDevicesV2Result {
  total?: bigint | number;
  list?: (LiveSyncDeviceItemV2)[];
}
export interface LiveSyncDeviceV2 {
  sn?: string;
  name?: string;
  deviceModelKey?: string;
  deviceType?: string;
  cameraCapacity?: (LiveSyncCameraCapacity)[];
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
export interface LiveSyncSummaryResult {
  total?: bigint | number;
  enableCnt?: bigint | number;
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
export interface LiveSyncVideoCapacity {
  videoType?: string;
  videoIndex?: string;
}
export interface LiveVideoInfo {
  payloadIndex?: string;
  videoIndex?: string;
  videoTypeSwig?: number;
  switchableVideoTypeSwigValues?: (number)[];
}
export interface LiveviewWorldRegion {
  payloadIndex?: string;
  worldRegion?: CameraLiveviewWorldRegion;
}
export interface LogReportListResult {
  pagination?: LogReportListResultPagination;
  list?: (LogReportListResultItem)[];
}
export interface LogReportListResultAppendixFileItem {
  fileName?: string;
  fileObjectKey?: string;
  fileSize?: bigint | number;
}
export interface LogReportListResultAppendixFiles {
  files?: (LogReportListResultAppendixFileItem)[];
}
export interface LogReportListResultContactInformation {
  email?: string;
  phone?: string;
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
export interface LogReportListResultDeviceLogs {
  files?: (LogReportListResultDeviceLog)[];
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
export interface LogReportListResultPagination {
  page?: number;
  pageSize?: number;
  total?: number;
}
export interface LookAtTargetParams {
  payloadIndex?: string;
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface LowPowerSwitchResult {
  message?: string;
  bid?: string;
}
export interface MaintenanceOrderAttachment {
  id?: bigint | number;
  fileName?: string;
  objectKey?: string;
  fileSize?: bigint | number;
  uploadTime?: string;
  createdAt?: string;
}
export interface MaintenanceOrderAttachmentsParams {
  fileName?: string;
  fileKey?: string;
  fileSize?: bigint | number;
}
export interface MaintenanceOrderContactAddress {
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  detail?: string;
}
export interface MaintenanceOrderContactAddressParams {
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  detail?: string;
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
  contactAddressFull?: MaintenanceOrderContactAddress;
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
  attachments?: (MaintenanceOrderAttachment)[];
  statusHistory?: (MaintenanceOrderStatusHistoryItem)[];
  repairInfo?: MaintenanceOrderRepairInfo;
  logReport?: MaintenanceOrderLogReport;
}
export interface MaintenanceOrderDeviceItemParams {
  deviceModelKey?: string;
  deviceSn?: string;
  module?: string;
  nameplateSn?: string;
  sourceType?: number;
  sourceRefId?: string;
}
export interface MaintenanceOrderDeviceTopoParams {
  hosts?: (MaintenanceOrderTopoNodeParams)[];
  parents?: (MaintenanceOrderTopoNodeParams)[];
  nodes?: (MaintenanceOrderTopoNodeParams)[];
}
export interface MaintenanceOrderLogInfoParams {
  deviceSn?: string;
  module?: string;
  objectKey?: string;
}
export interface MaintenanceOrderLogReport {
  reportUuid?: string;
  trackNumber?: string;
  status?: string;
}
export interface MaintenanceOrderRepairInfo {
  assignee?: string;
  assigneePhone?: string;
  repairStartTime?: string;
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
  contactAddressFull?: MaintenanceOrderContactAddress;
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
  attachments?: (MaintenanceOrderAttachment)[];
  statusHistory?: (MaintenanceOrderStatusHistoryItem)[];
  repairInfo?: MaintenanceOrderRepairInfo;
  logReport?: MaintenanceOrderLogReport;
}
export interface MaintenanceOrdersListResults {
  pagination?: CommonPaginationData;
  list?: (MaintenanceOrdersListItem)[];
}
export interface MaintenanceOrderStatusHistoryItem {
  fromStatus?: number;
  toStatus?: number;
  changeTime?: string;
  operatorId?: string;
  operatorName?: string;
  remark?: string;
}
export interface MaintenanceOrderTopoNodeParams {
  sn?: string;
  deviceModelKey?: string;
  onlineStatus?: boolean;
}
export interface ManualBatterySwapProgressResult {
  message?: string;
  bid?: string;
  dataJson?: string;
}
export interface ManualBatterySwapResult {
  message?: string;
  bid?: string;
}
export interface ManulRtkCalibrationParams {
  longitude?: number;
  latitude?: number;
  height?: number;
}
export interface MediaFileDeviceUpload {
  fileId?: bigint | number;
  flightId?: string;
  deviceSn?: string;
  objectKey?: string;
  objectSize?: bigint | number;
  fileType?: number;
}
export interface MediaFileDownloadInfo {
  objectKey?: string;
  url?: string;
}
export interface MediaFileGeoPosition {
  lat?: number;
  lng?: number;
  absAlt?: number;
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
export interface MediaFileVideoMetaData {
  duration?: number;
  encoder?: string;
  formatLongName?: string;
  formatName?: string;
  height?: number;
  width?: number;
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
export interface MediaUploadCallbackResult {
  objectKey?: string;
  filename?: string;
  flightId?: string;
  uuid?: string;
  id?: number;
  mediaId?: number;
}
export interface MediaUploadCallbackShootPosition {
  lat?: number;
  lng?: number;
}
export interface MediaUploadStsCredentials {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: number;
  securityToken?: string;
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
export interface ModelItemInfoData {
  uuid?: string;
  objectKey?: string;
  fileType?: string;
}
export interface ModifyDeviceNameItem {
  deviceSn?: string;
  deviceCallsign?: string;
}
export interface ModifyDeviceNameParam {
  deviceList?: (ModifyDeviceNameItem)[];
}
export interface NetworkRtkCalibrationParams {
  host?: string;
  port?: number;
  account?: string;
  password?: string;
  mountPoint?: string;
  version?: number;
}
export interface NetworkTestProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
  downloadSpeed?: number;
  uploadSpeed?: number;
}
export interface NightModeSettings {
  payloadIndex?: string;
  nightMode?: NightSceneMode;
  working?: boolean;
  denoiseLevel?: number;
  nightVisionEnable?: boolean;
  infraredFillLightEnable?: boolean;
  nightSceneModeSuggestion?: number;
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
export interface OfflineMapsSyncResults {
  results?: (DeviceSyncResults)[];
}
export interface OpenChargeResult {
  message?: string;
  bid?: string;
}
export interface OpenDebugModeResult {
  message?: string;
  bid?: string;
}
export interface OpenDockCoverProgressResult {
  message?: string;
  bid?: string;
  createTime?: number;
  updateTime?: number;
}
export interface OpenDockCoverResult {
  message?: string;
  bid?: string;
}
export interface OpenDroneResult {
  message?: string;
  bid?: string;
}
export interface OperateAIInsideModelParam {
  signedId?: string;
  operationType?: string;
  droneSNList?: (string)[];
}
export interface OperateAIInsideModelResult {
  results?: (AIInsideOperateDeviceResult)[];
}
export interface OperateAppResult {
  bid?: string;
  status?: string;
}
export interface OperateSelfDiagnosisParams {
  reportUuid?: string;
  reportCmdMethod?: string;
}
export interface PaginationInfo {
  page?: number;
  pageSize?: number;
  total?: number;
}
export interface PanoramaParam {
  payloadIndex?: string;
}
export interface PanoramaStatus {
  currentStep?: number;
  percent?: number;
  photoState?: number;
}
export interface PhotoSizeParam {
  payloadIndex?: string;
  photoSize?: number;
  cameraType?: string;
}
export interface PoiCenterPoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface POIEnterParams {
  payloadIndex?: string;
  poiCenterPoint?: Waypoint;
  speed?: number;
  circleRadius?: number;
}
export interface PoiStatusEvent {
  deviceSn?: string;
  droneSn?: string;
  centerPoint?: Waypoint;
  circleRadius?: number;
  circleSpeed?: number;
  maxCircleSpeed?: number;
  reason?: number;
  status?: string;
  timestamp?: bigint | number;
  executeDuration?: bigint | number;
  payloadIndex?: string;
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
export interface PoiTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: PoiTaskData;
}
export interface POITaskInfo {
  uuid?: string;
  deviceSn?: string;
  sn?: string;
  taskStatus?: POITaskStatus;
  errCode?: number;
  poiCenterPoint?: Waypoint;
  speed?: number;
  circleRadius?: number;
  payloadIndex?: string;
}
export interface PositionData {
  lat?: number;
  lng?: number;
  absAlt?: number;
  relAlt?: number;
}
export interface PostAiAlertAlgorithmSettingParam {
  droneSn?: string;
  algorithmType?: number;
  algorithmName?: string;
  alarmTargets?: (AiAlertAlarmTarget)[];
}
export interface PostAiAlertAlgorithmSettingResult {

}
export interface PostAiAlertDeviceSettingParam {
  droneSn?: string;
  enableTargetAlert?: boolean;
  alarmInfo?: AiAlertAlarmInfo;
}
export interface PostAiAlertDeviceSettingResult {

}
export interface PreRecordedStatusSetParams {
  payloadIndex?: string;
  status?: number;
}
export interface PreRecordedTimeSetParams {
  payloadIndex?: string;
  preRecordedTime?: number;
}
export interface PsdkDeviceInfo {
  psdkIndex?: number;
  objectKey?: string;
}
export interface PsdkDeviceList {
  deviceInfos?: (PsdkDeviceInfo)[];
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
export interface PsdkSpeakerPlayProgressInfo {
  psdkIndex?: number;
  result?: number;
  status?: string;
  stepKey?: string;
  percent?: number;
  md5?: string;
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
export interface PsdkSpeakerResourceList {
  resources?: (PsdkSpeakerResource)[];
}
export interface PsdkSpeakerTTSconfig {
  volume?: number;
  type?: MegaphoneTTSVoiceType;
  language?: MegaphoneTTSLanguageType;
  speed?: number;
}
export interface PsdkSpeakerTTSPlayInfo {
  name?: string;
  text?: string;
  md5?: string;
}
export interface PsdkStateSearchlightInfo {
  workMode?: SearchLightWorkMode;
  brightness?: number;
  calibrationStatus?: number;
  calibrationProgress?: number;
  leftValue?: number;
  rightValue?: number;
  wideFieldMode?: number;
  lightGimbalControl?: number;
  lightingType?: number;
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
export interface PsdkStateSummaryInfo {
  psdkIndex?: number;
  psdkType?: PsdkType;
  psdkSubType?: PsdkSubType;
  psdkName?: string;
  psdkSn?: string;
  psdkVersion?: string;
  psdkLibVersion?: string;
  psdkRestrictState?: number;
}
export interface PsdkUiResourceItem {
  psdkIndex?: bigint | number;
  psdkReady?: bigint | number;
  objectKey?: string;
}
export interface PsdkWidgetResource {
  objectKey?: string;
  url?: string;
}
export interface PsdkWidgetResourceList {
  uiResourceUrls?: (PsdkWidgetResource)[];
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
export interface RecommendedDevice {
  droneSn?: string;
  gatewaySn?: string;
  distance?: number;
  matched?: boolean;
}
export interface RelayDisconnectResult {
  bid?: string;
  status?: string;
}
export interface RelayRebootResult {
  bid?: string;
  status?: string;
}
export interface RepairGuidance {
  redirectUrl?: string;
  description?: string;
}
export interface RoamingStationSnResult {
  stationSn?: string;
  success?: boolean;
  failReason?: number;
}
export interface RtkCalibrationResult {
  message?: string;
  bid?: string;
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
export interface SeiHeader {
  version?: number;
  reserved?: number;
  dataSize?: number;
  timestamp?: bigint | number;
}
export interface SeiItem {
  dataType?: SeiDataType;
  customData?: SeiData;
  detectionBox?: SeiDetectionBox;
  detectionPolygon?: SeiDetectionPolygon;
  textOverlay?: SeiTextOverlay;
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
export interface SelfDiagnosticResultData {
  high?: (DiagnosisMaterialItem)[];
  mid?: (DiagnosisMaterialItem)[];
  low?: (DiagnosisMaterialItem)[];
}
export interface SetBatteryStoreModeResult {
  message?: string;
  bid?: string;
}
export interface SetDistanceLimitResult {
  message?: string;
}
export interface SetHeightLimitResult {
  message?: string;
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
export interface SetIsothermColorRenderingTypeParams {
  payloadIndex?: string;
  type?: number;
}
export interface SetIsothermEnableParams {
  payloadIndex?: string;
  enable?: number;
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
export interface SetIsothermRoiBasedRenderingEnableParams {
  payloadIndex?: string;
  enable?: number;
}
export interface SetNightLightsStateResult {
  message?: string;
}
export interface SetNightSceneModeParams {
  payloadIndex?: string;
  mode?: NightSceneMode;
}
export interface SetObstacleAvoidanceResult {
  message?: string;
}
export interface SetOfflineMapsParams {
  offlineMapEnable?: boolean;
}
export interface SetPhotoStorageSettingsParams {
  payloadIndex?: string;
  photoStorageSettings?: (string)[];
}
export interface SetRelayOccupiedStatusResult {
  bid?: string;
  status?: string;
}
export interface SetRemainingPowerForRthResult {
  message?: string;
}
export interface SetRoamingStationSnParams {
  droneSn?: string;
  stationSns?: (string)[];
}
export interface SetRoamingStationSnResult {
  results?: (RoamingStationSnResult)[];
}
export interface SetVideoStorageSettingsParams {
  payloadIndex?: string;
  videoStorageSettings?: (string)[];
}
export interface SignalMapsResults {
  lists?: (DeviceSignalItem)[];
}
export interface SimInfoItem {
  iccid?: string;
  telecomOperator?: bigint | number;
}
export interface SimSlotSwitchResult {
  message?: string;
  bid?: string;
}
export interface SmartTrackPointInfo {
  trackAltitude?: number;
  trackLatitude?: number;
  trackLongitude?: number;
  trackTargetMode?: number;
}
export interface StartRoamingParams {
  droneSn?: string;
  flightId?: string;
  sourceTaskType?: number;
}
export interface StickControlData {
  roll?: number;
  pitch?: number;
  throttle?: number;
  yaw?: number;
  gimbalPitch?: number;
}
export interface STSCredential {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: bigint | number;
  securityToken?: string;
  platform?: number;
}
export interface STSInfo {
  objectKeyPrefix?: string;
  bucket?: string;
  endpoint?: string;
  provider?: string;
  region?: string;
  credentials?: STSCredential;
}
export interface SubDeviceInfo {
  deviceSn?: string;
  nickname?: string;
  modelInfo?: ModelInfo;
  online?: boolean;
  deviceFirmwareVersion?: string;
  deviceFirmwareStatus?: number;
  deviceWorkingStatus?: number;
  flysafeDatabaseVersion?: string;
  parentSns?: (string)[];
}
export interface SubmitWaylineInfoParam {
  kmzObjectKey?: string;
  waylineName?: string;
  asyncRequestId?: string;
  timestamp?: bigint | number;
  transparent?: Record<string, string>;
}
export interface SwitchAlarmStateResult {
  message?: string;
}
export interface SwitchCameraModeParams {
  payloadIndex?: string;
  cameraMode?: CameraMode;
}
export interface SwitchLiveLensParams {
  payloadIndex?: string;
  lensType?: CameraLensType;
}
export interface SwitchUnlockLicenseParam {
  deviceSn?: string;
  licenseId?: number;
  enable?: boolean;
}
export interface SyncFlightAreasResults {
  results?: (DeviceSyncResults)[];
}
export interface TakeoffParams {
  securityTakeoffHeight?: number;
  maxSpeed?: number;
  outOfControlAction?: OutOfControlAction;
  rthAltitude?: number;
  targetHeight?: number;
  takeoffMode?: TakeoffMode;
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
export interface TasksMediaStatus {
  taskUuid?: string;
  mediaStatus?: number;
}
export interface TaskTopoChangedEvent {
  droneSn?: string;
  flightId?: string;
  takeoffSn?: string;
}
export interface TCAInfo {
  centerSn?: string;
  dataJson?: string;
}
export interface TerraBuildCreatePanoramaResult {
  id?: number;
  uuid?: string;
  jobUuid?: string;
}
export interface TerraBuildCreateReconstructionParams {
  reconstructionType?: (number)[];
  name?: string;
  folderUuids?: (string)[];
  folderIds?: (number)[];
  simplifiedFactor?: number;
  simplifiedFactorSet?: boolean;
  wkt?: string;
  qualityLevel?: number;
  qualityLevelSet?: boolean;
  qualityLevel3dgs?: number;
  qualityLevel3dgsSet?: boolean;
  isShownOnMap?: boolean;
  isShownOnMapSet?: boolean;
  optimizeSfM?: boolean;
  optimizeSfMSet?: boolean;
  customStorageParentId?: number;
  customStorageParentIdSet?: boolean;
  generateModelFormats?: (number)[];
  qualityReportLanguage?: string;
  qualityReportMeasureUnitSystem?: string;
  predefineArea?: TerraBuildPredefineArea;
  parameter2d?: TerraBuildParameter2D;
  parameter3d?: TerraBuildParameter3D;
  parameter3dgs?: TerraBuildParameter3DGS;
  parameterLidar?: TerraBuildParameterLidar;
}
export interface TerraBuildCreateReconstructionResult {
  id?: number;
  uuid?: string;
  jobUuid?: string;
}
export interface TerraBuildFolderInfo {
  folderId?: number;
  folderUuid?: string;
  folderName?: string;
}
export interface TerraBuildGeoDesc {
  csType?: string;
  geoCs?: string;
  geoCsWkt?: string;
  geoidFileName?: string;
  offset?: (number)[];
  overrideVerticalCs?: string;
}
export interface TerraBuildJobInfo {
  type?: number;
  uuid?: string;
  jobStatus?: number;
  percent?: number;
  code?: number;
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
export interface TerraBuildModelFileListResult {
  list?: (TerraBuildModelFileItem)[];
  total?: bigint | number;
  page?: number;
  pageSize?: number;
}
export interface TerraBuildModelFileUrlResult {
  url?: string;
}
export interface TerraBuildParameter2D {
  sfmMethod?: string;
  sfmFeatureQuantityLevel?: number;
  sfmFeatureQuantityLevelSet?: boolean;
  useImagePosition?: boolean;
  useImagePositionSet?: boolean;
  generateBlocksExchangeXml?: boolean;
  generateBlocksExchangeXmlSet?: boolean;
  blocksExchangeXmlGeoDesc?: TerraBuildGeoDesc;
  outputGeoDesc?: TerraBuildGeoDesc;
  usableMemoryGb?: number;
  usableMemoryGbSet?: boolean;
  mapMode?: number;
  mapModeSet?: boolean;
  qualityLevel?: number;
  qualityLevelSet?: boolean;
  resolutionType2d?: number;
  resolutionType2dSet?: boolean;
  domTileSize?: number;
  domTileSizeSet?: boolean;
  resolutionGsd2d?: number;
  resolutionGsd2dSet?: boolean;
  useWallis?: boolean;
  useWallisSet?: boolean;
  useDehaze?: boolean;
  useDehazeSet?: boolean;
  useGcj02?: boolean;
  useGcj02Set?: boolean;
  generateMaps2dTiff?: boolean;
  generateMaps2dTiffSet?: boolean;
  generateMaps2dTiffCog?: boolean;
  generateMaps2dTiffCogSet?: boolean;
  useSmartFillHole?: boolean;
  useSmartFillHoleSet?: boolean;
}
export interface TerraBuildParameter3D {
  sfmMethod?: string;
  sfmFeatureQuantityLevel?: number;
  sfmFeatureQuantityLevelSet?: boolean;
  useImagePosition?: boolean;
  useImagePositionSet?: boolean;
  generateBlocksExchangeXml?: boolean;
  generateBlocksExchangeXmlSet?: boolean;
  blocksExchangeXmlGeoDesc?: TerraBuildGeoDesc;
  outputGeoDesc?: TerraBuildGeoDesc;
  outputPointcloud?: boolean;
  outputPointcloudSet?: boolean;
  densityPercentLevel?: number;
  densityPercentLevelSet?: boolean;
  generatePnts?: boolean;
  generatePntsSet?: boolean;
  generateLas?: boolean;
  generateLasSet?: boolean;
  generateLaz?: boolean;
  generateLazSet?: boolean;
  generatePcd?: boolean;
  generatePcdSet?: boolean;
  generatePointS3mb?: boolean;
  generatePointS3mbSet?: boolean;
  generatePointPly?: boolean;
  generatePointPlySet?: boolean;
  mergePoint?: boolean;
  mergePointSet?: boolean;
  outputPlyWithNormals?: boolean;
  outputPlyWithNormalsSet?: boolean;
  plyWithNormalsLevel?: number;
  plyWithNormalsLevelSet?: boolean;
  groundExtract?: boolean;
  groundExtractSet?: boolean;
  sceneType?: number;
  sceneTypeSet?: boolean;
  maxSizeBuilding?: number;
  maxSizeBuildingSet?: boolean;
  iterDist?: number;
  iterDistSet?: boolean;
  iterAngle?: number;
  iterAngleSet?: boolean;
  usableMemoryGb?: number;
  usableMemoryGbSet?: boolean;
  stereoMode?: boolean;
  stereoModeSet?: boolean;
  globalMinDepth?: number;
  globalMinDepthSet?: boolean;
  outputMesh?: boolean;
  outputMeshSet?: boolean;
  generatePly?: boolean;
  generatePlySet?: boolean;
  generateObj?: boolean;
  generateObjSet?: boolean;
  generateFbx?: boolean;
  generateFbxSet?: boolean;
  generateB3dm?: boolean;
  generateB3dmSet?: boolean;
  generateOsgb?: boolean;
  generateOsgbSet?: boolean;
  generateS3mb?: boolean;
  generateS3mbSet?: boolean;
  generateI3s?: boolean;
  generateI3sSet?: boolean;
  waterRefine?: boolean;
  waterRefineSet?: boolean;
  waterRemove?: boolean;
  waterRemoveSet?: boolean;
  modelSimplify?: number;
  modelSimplifySet?: boolean;
  generateDem?: boolean;
  generateDemSet?: boolean;
  demResolution?: number;
  demResolutionSet?: boolean;
  generateContour?: boolean;
  generateContourSet?: boolean;
  contourInterval?: number;
  contourIntervalSet?: boolean;
  contourDatum?: number;
  contourDatumSet?: boolean;
  contourElevationAnnotationRadius?: number;
  contourElevationAnnotationRadiusSet?: boolean;
  useContourFilter?: boolean;
  useContourFilterSet?: boolean;
  contourFilterLength?: number;
  contourFilterLengthSet?: boolean;
  generateGridAndTin?: boolean;
  generateGridAndTinSet?: boolean;
  gridInterval?: number;
  gridIntervalSet?: boolean;
  cutAoi?: boolean;
  cutAoiSet?: boolean;
  qualityLevel?: number;
  qualityLevelSet?: boolean;
}
export interface TerraBuildParameter3DGS {
  sfmMethod?: string;
  sfmFeatureQuantityLevel?: number;
  sfmFeatureQuantityLevelSet?: boolean;
  useImagePosition?: boolean;
  useImagePositionSet?: boolean;
  generateBlocksExchangeXml?: boolean;
  generateBlocksExchangeXmlSet?: boolean;
  blocksExchangeXmlGeoDesc?: TerraBuildGeoDesc;
  outputGeoDesc?: TerraBuildGeoDesc;
  globalDataType?: string;
  qualityLevel3dgs?: number;
  qualityLevel3dgsSet?: boolean;
  generateTerrags?: boolean;
  generateTerragsSet?: boolean;
  generate3dtiles?: boolean;
  generate3dtilesSet?: boolean;
  generate3dgsDom?: boolean;
  generate3dgsDomSet?: boolean;
}
export interface TerraBuildParameterLidar {
  outputPointcloud?: boolean;
  outputPointcloudSet?: boolean;
  densityPercentLevel?: number;
  densityPercentLevelSet?: boolean;
  generatePnts?: boolean;
  generatePntsSet?: boolean;
  generateLas?: boolean;
  generateLasSet?: boolean;
  generateLaz?: boolean;
  generateLazSet?: boolean;
  generatePcd?: boolean;
  generatePcdSet?: boolean;
  generatePointS3mb?: boolean;
  generatePointS3mbSet?: boolean;
  generatePointPly?: boolean;
  generatePointPlySet?: boolean;
  mergePoint?: boolean;
  mergePointSet?: boolean;
  outputPlyWithNormals?: boolean;
  outputPlyWithNormalsSet?: boolean;
  plyWithNormalsLevel?: number;
  plyWithNormalsLevelSet?: boolean;
  groudExtract?: boolean;
  groudExtractSet?: boolean;
  sceneType?: number;
  sceneTypeSet?: boolean;
  maxSizeBuilding?: number;
  maxSizeBuildingSet?: boolean;
  iterDist?: number;
  iterDistSet?: boolean;
  iterAngle?: number;
  iterAngleSet?: boolean;
  usableMemoryGb?: number;
  usableMemoryGbSet?: boolean;
  qualityLevel?: number;
  qualityLevelSet?: boolean;
  sampleDistance?: number;
  sampleDistanceSet?: boolean;
  outputHeightOffset?: number;
  outputHeightOffsetSet?: boolean;
  refineCalibrate?: number;
  refineCalibrateSet?: boolean;
  lppOptimise?: boolean;
  lppOptimiseSet?: boolean;
  smoothPoint?: boolean;
  smoothPointSet?: boolean;
  colorizePoint?: boolean;
  colorizePointSet?: boolean;
  canProcessL1?: boolean;
  canProcessL1Set?: boolean;
  outputGeoDesc?: TerraBuildGeoDesc;
  outputMesh?: boolean;
  outputMeshSet?: boolean;
  qualityLevelMesh?: number;
  qualityLevelMeshSet?: boolean;
  modelSimplify?: number;
  modelSimplifySet?: boolean;
  generateObj?: boolean;
  generateObjSet?: boolean;
  generateFbx?: boolean;
  generateFbxSet?: boolean;
  generatePly?: boolean;
  generatePlySet?: boolean;
  generateOsgb?: boolean;
  generateOsgbSet?: boolean;
  generateB3dm?: boolean;
  generateB3dmSet?: boolean;
  generateI3s?: boolean;
  generateI3sSet?: boolean;
  generateMaps2d?: boolean;
  generateMaps2dSet?: boolean;
  generateMaps2dTiff?: boolean;
  generateMaps2dTiffSet?: boolean;
  generateMaps2dTiffCog?: boolean;
  generateMaps2dTiffCogSet?: boolean;
  resolutionType2d?: number;
  resolutionType2dSet?: boolean;
  resolutionLevel2d?: number;
  resolutionLevel2dSet?: boolean;
  resolutionGsd2d?: number;
  resolutionGsd2dSet?: boolean;
  domTileSize?: number;
  domTileSizeSet?: boolean;
  useGcj02?: boolean;
  useGcj02Set?: boolean;
  generateDem?: boolean;
  generateDemSet?: boolean;
  demResolution?: number;
  demResolutionSet?: boolean;
  generateContour?: boolean;
  generateContourSet?: boolean;
  contourInterval?: number;
  contourIntervalSet?: boolean;
  contourDatum?: number;
  contourDatumSet?: boolean;
  contourElevationAnnotationRadius?: number;
  contourElevationAnnotationRadiusSet?: boolean;
  useContourFilter?: boolean;
  useContourFilterSet?: boolean;
  contourFilterLength?: number;
  contourFilterLengthSet?: boolean;
  generate3dgs?: boolean;
  generate3dgsSet?: boolean;
  qualityLevel3dgs?: number;
  qualityLevel3dgsSet?: boolean;
  generate3dtiles?: boolean;
  generate3dtilesSet?: boolean;
}
export interface TerraBuildPredefineArea {
  polygonPoints?: ((number)[])[];
}
export interface TerraBuildQualityReportResult {
  qualityReportUrl?: string;
}
export interface TerraBuildReconstructionImageItem {
  imageId?: string;
  fileName?: string;
  thumbnailImageUrl?: string;
  originImageUrl?: string;
}
export interface TerraBuildReconstructionImagesResult {
  list?: (TerraBuildReconstructionImageItem)[];
  total?: number;
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
export interface TerraBuildSettingsDetail {
  name?: string;
  reconstructionType?: (number)[];
  simplifiedFactor?: number;
  reconstructionMode?: number;
  predefineArea?: TerraBuildPredefineArea;
  generateModelFormats?: (number)[];
  wkt?: string;
  qualityLevel?: number;
  qualityLevel3dgs?: number;
}
export interface TerraBuildSettingsResult {
  state?: number;
  reconstructionSettings?: TerraBuildSettingsDetail;
  mediaInputObjectKey?: string;
  sfmOutputObjectPrefix?: string;
  folderList?: (TerraBuildFolderInfo)[];
}
export interface TerraBuildSfmResult {
  sfmJsonUrl?: string;
  sfmReportJsonUrl?: string;
  gcpOutJsonUrl?: string;
  reProjectionErrorPicUrlList?: (string)[];
}
export interface TerraFileShowOnMapItem {
  id?: bigint | number;
  name?: string;
  fileType?: number;
  subFileType?: number;
  previewUrl?: string;
}
export interface TerraFileShowOnMapMsg {
  list?: (TerraFileShowOnMapItem)[];
}
export interface TerraGeo2DPoint {
  lng?: number;
  lat?: number;
}
export interface TerraMediaFileHideOnMapMsg {
  ids?: (number)[];
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
export interface TerraMediaFileShowOnMapMsg {
  list?: (TerraMediaFileShowOnMapItem)[];
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
  maxIntensity?: number;
  minIntensity?: number;
  maxReturnNumber?: number;
  boundingPoints?: (TerraGeo2DPoint)[];
  device?: string;
  duration?: number;
  photographer?: string;
  resolution?: string;
  extHeight?: number;
  extWidth?: number;
  zoomFactor?: number;
  taskName?: string;
  shootLng?: number;
  shootLat?: number;
  shootAbsAlt?: number;
  shootRelAlt?: number;
  photoLng?: number;
  photoLat?: number;
  photoAbsAlt?: number;
  photoRelAlt?: number;
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
  fileTags?: (string)[];
  userName?: string;
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
export interface TerraRenameModelParams {
  name?: string;
  inUniformHeight?: boolean;
  modelDisplayMode?: number;
  collectedAt?: bigint | number;
  collectedAtSet?: boolean;
}
export interface TerraSelectFilterParams {
  selectedParentId?: number;
  selectedParentIdSet?: boolean;
  exceptIds?: (number)[];
  key?: string;
}
export interface TerraSetLasWktParams {
  fileUuid?: string;
  wkt?: string;
}
export interface TerraShowOnMapParams {
  ids?: (number)[];
  showOnMap?: boolean;
  isDistributed?: boolean;
  selectFilter?: TerraSelectFilterParams;
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
export interface TerraUploadCallbackParams {
  objectKey?: string;
  name?: string;
  parentId?: bigint | number;
  parentIdSet?: boolean;
  driveUuid?: string;
  showOnMap?: boolean;
}
export interface TerraUploadCallbackResult {
  id?: bigint | number;
  uuid?: string;
  name?: string;
}
export interface ThermalCurrentPaletteSetParams {
  payloadIndex?: string;
  paletteStyle?: number;
}
export interface ThermalGainModeInfo {
  payloadIndex?: string;
  thermalGainModeSwig?: number;
}
export interface ThermalGainModeSetParams {
  payloadIndex?: string;
  thermalGainMode?: IrGainMode;
}
export interface ThermalSuperResolutionEnableParams {
  payloadIndex?: string;
  enable?: number;
}
export interface UpdateCustomizedFlightAreasParams {
  flightAreaId?: string;
  name?: string;
  content?: FlightAreasContentData;
  updateBy?: string;
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
export interface UpdateFlightAreasResults {
  id?: string;
  updatedArea?: UpdatedAreaData;
}
export interface UpdateOfflineMapsParams {
  model3dItems?: (ModelItemInfoData)[];
  model2dItems?: (ModelItemInfoData)[];
}
export interface UpdateWaylineResult {
  status?: string;
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
export interface UploadFileResult {
  objectUrl?: string;
  etag?: string;
  objectKey?: string;
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
export interface UploadUnlockLicenseFileResult {
  fileStoreDir?: string;
}
export interface VideoResolutionSetParams {
  payloadIndex?: string;
  cameraLensType?: number;
  videoResolution?: number;
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
export interface WaylineDetailExtData {
  kmzWithoutResObjectKey?: string;
  kmzWithoutResMd5?: string;
  targetAreaFileObjectKey?: string;
  businessFileObjectKey?: string;
  modelFileObjectKeys?: (string)[];
  elevationFileObjectKeys?: (string)[];
  contentLength?: bigint | number;
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
  waylineValidityCheck?: boolean;
  hasOrientedAction?: boolean;
  hasAccurateAction?: boolean;
  surfaceFlyOn?: boolean;
  elevationOptimizationOn?: boolean;
  smartObliqueOn?: boolean;
  mappingStripUseTemplateAltitude?: boolean;
  withMegaphone?: boolean;
  withSearchLight?: boolean;
  aiWayline?: boolean;
  droneType?: string;
  targetDetectAreaFilePath?: string;
  waylineValidityCheckCodes?: (number)[];
  elevationFileNames?: (string)[];
  payloadTypes?: (string)[];
  payloadTypesWithIndex?: (string)[];
  accurateActionUuids?: (string)[];
  actionUuids?: (string)[];
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
export interface WaylineEditorStsCredentials {
  accessKeyId?: string;
  accessKeySecret?: string;
  expire?: number;
  securityToken?: string;
  platform?: number;
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
  aiWayline?: boolean;
}
export interface WaylineListPaginationResult {
  page?: number;
  pageSize?: number;
  total?: number;
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
export interface WaylineTaskEvent {
  eventId?: string;
  action?: string;
  uuid?: string;
  timestamp?: bigint | number;
  taskData?: WaylineTaskData;
}
export interface Waypoint {
  latitude?: number;
  longitude?: number;
  height?: number;
}
export interface WorkspaceDeviceChange {
  deviceChanges?: (DeviceChange)[];
}
export interface ZoomAtTargetParams {
  payloadIndex?: string;
  cameraLensType?: CameraLensType;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}
export type DeviceListCallback = (arg0: (DeviceTopo)[], arg1: FlightHubError) => void;
export type GetDeviceDetailInfoCallback = (arg0: FlightHubError, arg1: DeviceDetailInfo) => void;
export type ModifyDeviceNameCallback = (arg0: FlightHubError) => void;
export type ResultCallback = (arg0: FlightHubError) => void;
export type ResultCallbackWithError = (arg0: FlightHubError) => void;
export type TakeoffCallback = (arg0: FlightHubError, arg1: TakeoffResult) => void;
export type CreateInFlightWaylineTaskCallback = (arg0: CreateInFlightWaylineTaskResult, arg1: FlightHubError) => void;
export type GetActiveInFlightWaylineTaskCallback = (arg0: ActiveInFlightWaylineTaskInfo, arg1: FlightHubError) => void;
export type InFlightWaylineProgressCallback = (arg0: InFlightWaylineProgress) => void;
export type InFlightWaylineControlCallback = (arg0: FlightHubError) => void;
export type GetDeviceLiveRecordsCallback = (arg0: FlightHubError, arg1: (LiveRecordItem)[]) => void;
export type LiveRecordStateCallback = (arg0: LiveRecordStateInfo) => void;
export type AvailableCallback = (arg0: boolean) => void;
export type LiveAvailableRangeCallback = (arg0: (LiveInfo)[]) => void;
export type LiveStreamCallback = (arg0: Uint8Array, arg1: FrameInfo) => void;
export type LiveStreamStartCallback = (arg0: FlightHubError, arg1: LiveStreamStartResult) => void;
export type AiSeiInfoCallback = (arg0: AiSeiInfo) => void;
export type ArSeiInfoCallback = (arg0: ArSeiInfo) => void;
export type FovSeiInfoCallback = (arg0: FovSeiInfo) => void;
export type AssistantSeiInfoCallback = (arg0: AssistantSeiInfo) => void;
export type EisSeiInfoCallback = (arg0: EisSeiInfo) => void;
export type FlyToPointStartCallback = (arg0: FlightHubError, arg1: string) => void;
export type FlyToDroneSelfPlanPathCallback = (arg0: FlyToDroneSelfPlanPath) => void;
export type FlyToPointProgressCallback = (arg0: FlyToPointProgress) => void;
export type PoiEnterCallback = (arg0: FlightHubError, arg1: string) => void;
export type PoiGetTaskCallback = (arg0: FlightHubError, arg1: POITaskInfo) => void;
export type AiDataInfoCallback = (arg0: Native.AiDataInfo) => void;
export type AircraftBatteryInfoCallback = (arg0: AircraftBatteryInfo) => void;
export type AircraftAttitudeCallback = (arg0: AircraftAttitude) => void;
export type AircraftLocationCallback = (arg0: AircraftLocation) => void;
export type AircraftModeCodeCallback = (arg0: AircraftModeCode) => void;
export type AircraftWindSpeedCallback = (arg0: AircraftWindSpeed) => void;
export type AircraftTakeoffProgressCallback = (arg0: AircraftTakeoffProgress) => void;
export type FlightControlAuthorityCallback = (arg0: boolean) => void;
export type PayloadControlAuthorityCallback = (arg0: boolean) => void;
export type CameraStateCallback = (arg0: CameraState) => void;
export type LiveviewWorldRegionCallback = (arg0: LiveviewWorldRegion) => void;
export type CameraWideLensStateCallback = (arg0: CameraWideLensState) => void;
export type CameraZoomLensStateCallback = (arg0: CameraZoomLensState) => void;
export type CameraMeasureTargetCallback = (arg0: CameraMeasureTarget) => void;
export type NightModeSettingsCallback = (arg0: NightModeSettings) => void;
export type GimbalStateCallback = (arg0: GimbalState) => void;
export type IntervalTakePhotoStatusCallback = (arg0: IntervalTakePhotoStatus) => void;
export type PanoramaStatusCallback = (arg0: PanoramaStatus) => void;
export type CameraModeAvailableRangeCallback = (arg0: (CameraMode)[]) => void;
export type LinkStatusCallback = (arg0: LinkStatus) => void;
export type DroneOnlineStatusCallback = (arg0: DroneOnlineStatus) => void;
export type AircraftPayloadsOsdInfoListCallback = (arg0: AircraftPayloadsOsdInfoList) => void;
export type AircraftGearCallback = (arg0: AircraftGear) => void;
export type AircraftHomeDistanceCallback = (arg0: AircraftHomeDistance) => void;
export type AircraftPositionStateCallback = (arg0: AircraftPositionState) => void;
export type AircraftControlSourceCallback = (arg0: AircraftControlSource) => void;
export type AircraftLimitsInfoCallback = (arg0: AircraftLimitsInfo) => void;
export type AircraftBatteryWarningThresholdsCallback = (arg0: AircraftBatteryWarningThresholds) => void;
export type AircraftFirmwareStatusCallback = (arg0: AircraftFirmwareStatus) => void;
export type DockFirmwareInfoCallback = (arg0: DockFirmwareInfo) => void;
export type AircraftCurrentRthModeCallback = (arg0: AircraftCurrentRthMode) => void;
export type AircraftTotalFlightInfoCallback = (arg0: AircraftTotalFlightInfo) => void;
export type AircraftActivationTimeCallback = (arg0: AircraftActivationTime) => void;
export type AircraftMaintainStatusInfoCallback = (arg0: AircraftMaintainStatusInfo) => void;
export type AircraftNightLightsStateCallback = (arg0: AircraftNightLightsState) => void;
export type AircraftObstacleAvoidanceStateCallback = (arg0: AircraftObstacleAvoidanceState) => void;
export type AircraftStorageInfoCallback = (arg0: AircraftStorageInfo) => void;
export type AircraftTrackIdCallback = (arg0: AircraftTrackId) => void;
export type AircraftComplianceInfoCallback = (arg0: AircraftComplianceInfo) => void;
export type AircraftPayloadsCamerasListCallback = (arg0: AircraftPayloadsCamerasList) => void;
export type AircraftRcLostActionCallback = (arg0: AircraftRcLostAction) => void;
export type AircraftRthInfoCallback = (arg0: AircraftRthInfo) => void;
export type AircraftHomeGeographicalInfoCallback = (arg0: AircraftHomeGeographicalInfo) => void;
export type DeviceHmsCallback = (arg0: HmsData) => void;
export type DockOnlineStatusCallback = (arg0: DockOnlineStatus) => void;
export type DockAirConditionerStatusInfoCallback = (arg0: DockAirConditionerStatusInfo) => void;
export type DockSupplementLightStateCallback = (arg0: DockSupplementLightState) => void;
export type PsdkDeviceListCallback = (arg0: PsdkDeviceList) => void;
export type PsdkStateSummaryInfoCallback = (arg0: PsdkStateSummaryInfo) => void;
export type PsdkStateSpeakerInfoCallback = (arg0: PsdkStateSpeakerInfo) => void;
export type PsdkStateSearchlightInfoCallback = (arg0: PsdkStateSearchlightInfo) => void;
export type PsdkSpeakerPlayProgressInfoCallback = (arg0: PsdkSpeakerPlayProgressInfo) => void;
export type PsdkFloatingWindowTextInfoCallback = (arg0: PsdkFloatingWindowTextInfo) => void;
export type PsdkSpeakerResourceListCallback = (arg0: FlightHubError, arg1: PsdkSpeakerResourceList) => void;
export type PsdkSpeakerResourceCallback = (arg0: FlightHubError, arg1: PsdkSpeakerResource) => void;
export type STSInfoCallback = (arg0: FlightHubError, arg1: STSInfo) => void;
export type PsdkWidgetResourceListCallback = (arg0: FlightHubError, arg1: PsdkWidgetResourceList) => void;
export type LiveVideoInfoCallback = (arg0: LiveVideoInfo) => void;
export type ThermalGainModeInfoCallback = (arg0: ThermalGainModeInfo) => void;
export type CameraIrLensStateCallback = (arg0: CameraIrLensState) => void;
export type CameraIrThermometryInfoCallback = (arg0: CameraIrThermometryInfo) => void;
export type CameraWatermarkSettingsCallback = (arg0: CameraWatermarkSettings) => void;
export type CameraStorageInfoCallback = (arg0: CameraStorageInfo) => void;
export type CameraIrPipStateCallback = (arg0: CameraIrPipState) => void;
export type CameraIsothermPolygonCallback = (arg0: CameraIsothermPolygon) => void;
export type CameraMediaStorageCallback = (arg0: CameraMediaStorage) => void;
export type CameraAlgorithmDehazeInfoCallback = (arg0: CameraAlgorithmDehazeInfo) => void;
export type CameraPreRecordedInfoCallback = (arg0: CameraPreRecordedInfo) => void;
export type CameraCapabilityCallback = (arg0: CameraCapability) => void;
export type CameraSettableCapabilityCallback = (arg0: CameraSettableCapability) => void;
export type CameraVisibleCapabilityCallback = (arg0: CameraVisibleCapability) => void;
export type CameraPhotoInfoCallback = (arg0: CameraPhotoInfo) => void;
export type FlightTaskExceptionCallback = (arg0: FlightTaskException) => void;
export type WorkspaceDeviceChangeCallback = (arg0: WorkspaceDeviceChange) => void;
export type ImportWaylineEventCallback = (arg0: ImportWaylineEventResult) => void;
export type DeviceTopoChangeCallback = (arg0: DeviceTopoChange) => void;
export type AircraftControlCodeCallback = (arg0: AircraftControlCode) => void;
export type AircraftSpeedCallback = (arg0: AircraftSpeed) => void;
export type AircraftPayloadsCameraLiveviewWorldRegionCallback = (arg0: AircraftPayloadsCameraLiveviewWorldRegion) => void;
export type AircraftPayloadsGimbalAttitudeCallback = (arg0: AircraftPayloadsGimbalAttitude) => void;
export type AircraftPayloadsListCallback = (arg0: AircraftPayloadsList) => void;
export type ControlRightsCloudControlStatusCallback = (arg0: ControlRightsCloudControlStatus) => void;
export type ControlRightsDeviceControlStatusCallback = (arg0: ControlRightsDeviceControlStatus) => void;
export type FlightTasksMediaFileDisplayAvailableCallback = (arg0: FlightTasksMediaFileDisplayAvailable) => void;
export type CommandTaskEventCallback = (arg0: CommandTaskEvent) => void;
export type FlyToTaskEventCallback = (arg0: FlyToTaskEvent) => void;
export type PoiTaskEventCallback = (arg0: PoiTaskEvent) => void;
export type WaylineTaskEventCallback = (arg0: WaylineTaskEvent) => void;
export type DockLocationCallback = (arg0: DockLocation) => void;
export type DroneInDockCallback = (arg0: DroneInDock) => void;
export type DockCoverStateCallback = (arg0: DockCoverState) => void;
export type DockModeCodeCallback = (arg0: DockModeCode) => void;
export type DockSubDeviceInfoListCallback = (arg0: DockSubDeviceInfoList) => void;
export type DockNetworkStateCallback = (arg0: DockNetworkState) => void;
export type DockMediaFileDetailCallback = (arg0: DockMediaFileDetail) => void;
export type DockWirelessLinkCallback = (arg0: DockWirelessLink) => void;
export type DockJobNumberCallback = (arg0: DockJobNumber) => void;
export type FlightTaskStepCodeCallback = (arg0: FlightTaskStepCode) => void;
export type DockPowerStateCallback = (arg0: DockPowerState) => void;
export type DockStorageStateCallback = (arg0: DockStorageState) => void;
export type DockFirstPowerOnTimeCallback = (arg0: DockFirstPowerOnTime) => void;
export type DockAccTimeCallback = (arg0: DockAccTime) => void;
export type DockAlternateLandPointCallback = (arg0: DockAlternateLandPoint) => void;
export type DockPositionStateCallback = (arg0: DockPositionState) => void;
export type DockActivationTimeCallback = (arg0: DockActivationTime) => void;
export type DockBatteryStoreModeCallback = (arg0: DockBatteryStoreMode) => void;
export type DockAlarmStateCallback = (arg0: DockAlarmState) => void;
export type DockDroneBatteryMaintenanceInfoCallback = (arg0: DockDroneBatteryMaintenanceInfo) => void;
export type DockEmergencyStopStateCallback = (arg0: DockEmergencyStopState) => void;
export type DockSilentModeCallback = (arg0: DockSilentMode) => void;
export type DockUserExperienceImprovementCallback = (arg0: DockUserExperienceImprovement) => void;
export type DockDrcStateCallback = (arg0: DockDrcState) => void;
export type DockPutterStateCallback = (arg0: DockPutterState) => void;
export type DockRelativeAlternateLandPointCallback = (arg0: DockRelativeAlternateLandPoint) => void;
export type DockSelfConvergeCoordinateCallback = (arg0: DockSelfConvergeCoordinate) => void;
export type DockDroneChargeStateCallback = (arg0: DockDroneChargeState) => void;
export type DockMeteorologicalInfoCallback = (arg0: DockMeteorologicalInfo) => void;
export type DockBackupBatteryInfoCallback = (arg0: DockBackupBatteryInfo) => void;
export type DockMaintainStatusInfoCallback = (arg0: DockMaintainStatusInfo) => void;
export type OpenDebugModeCallback = (arg0: FlightHubError, arg1: OpenDebugModeResult) => void;
export type CloseDebugModeCallback = (arg0: FlightHubError, arg1: CloseDebugModeResult) => void;
export type OpenDockCoverCallback = (arg0: FlightHubError, arg1: OpenDockCoverResult) => void;
export type OpenDockCoverProgressCallback = (arg0: FlightHubError, arg1: OpenDockCoverProgressResult) => void;
export type CloseDockCoverCallback = (arg0: FlightHubError, arg1: CloseDockCoverResult) => void;
export type CloseDockCoverProgressCallback = (arg0: FlightHubError, arg1: CloseDockCoverProgressResult) => void;
export type DeviceRebootCallback = (arg0: FlightHubError, arg1: DeviceRebootResult) => void;
export type DeviceRebootProgressCallback = (arg0: FlightHubError, arg1: DeviceRebootProgressResult) => void;
export type DeviceFormatCallback = (arg0: FlightHubError, arg1: DeviceFormatResult) => void;
export type DeviceFormatProgressCallback = (arg0: FlightHubError, arg1: DeviceFormatProgressResult) => void;
export type OpenDroneCallback = (arg0: FlightHubError, arg1: OpenDroneResult) => void;
export type CloseDroneCallback = (arg0: FlightHubError, arg1: CloseDroneResult) => void;
export type OpenChargeCallback = (arg0: FlightHubError, arg1: OpenChargeResult) => void;
export type CloseChargeCallback = (arg0: FlightHubError, arg1: CloseChargeResult) => void;
export type DockDeviceStatusListCallback = (arg0: FlightHubError, arg1: (DockStatusItemResult)[]) => void;
export type DroneDeviceStatusListCallback = (arg0: FlightHubError, arg1: (DroneStatusItemResult)[]) => void;
export type GetAudienceCountCallback = (arg0: FlightHubError, arg1: (DeviceAudienceCountItem)[]) => void;
export type GetFlightTaskListCallback = (arg0: FlightHubError, arg1: FlightTaskListResult) => void;
export type GetCommandTaskListCallback = (arg0: FlightHubError, arg1: GetCommandTaskListResults) => void;
export type GetFlightTaskTrackCallback = (arg0: FlightHubError, arg1: GetFlightTaskTrackResults) => void;
export type CreateFlightTaskCallback = (arg0: FlightHubError, arg1: CreateTaskResp) => void;
export type GetFlightTaskDetailCallback = (arg0: FlightHubError, arg1: TaskDetail) => void;
export type GetDeviceRecommendationCallback = (arg0: FlightHubError, arg1: DeviceRecommendationResp) => void;
export type GetDeviceTcasCallback = (arg0: FlightHubError, arg1: GetTCAInfosResp) => void;
export type StartRoamingCallback = (arg0: FlightHubError) => void;
export type SetRoamingStationSnCallback = (arg0: FlightHubError, arg1: SetRoamingStationSnResult) => void;
export type GetInFlightTaskToposCallback = (arg0: FlightHubError, arg1: GetInFlightTaskToposResult) => void;
export type TaskTopoChangedCallback = (arg0: TaskTopoChangedEvent) => void;
export type GetMediaFilesListCallback = (arg0: FlightHubError, arg1: GetMediaFilesListResults) => void;
export type GetMediaFilesDownloadUrlCallback = (arg0: FlightHubError, arg1: GetMediaFilesDownloadUrlResults) => void;
export type GetMediaFilesDownloadUrlListCallback = (arg0: FlightHubError, arg1: GetMediaFilesDownloadUrlListResults) => void;
export type MediaFilePostProcessCallback = (arg0: MediaFilePostProcess) => void;
export type MediaFileDeviceUploadCallback = (arg0: MediaFileDeviceUpload) => void;
export type GetMediaUploadStsCallback = (arg0: FlightHubError, arg1: GetMediaUploadStsResult) => void;
export type MediaUploadCallbackCallback = (arg0: FlightHubError, arg1: MediaUploadCallbackResult) => void;
export type UploadGeoMediaFileCallback = (arg0: FlightHubError, arg1: UploadGeoMediaFileResult) => void;
export type GetMediaFileDetailByIdCallback = (arg0: FlightHubError, arg1: GetMediaFileDetailByIdResult) => void;
export type GetWaylineEditorStsCallback = (arg0: FlightHubError, arg1: GetWaylineEditorStsResult) => void;
export type TerraBuildGetReconstructionSettingsCallback = (arg0: FlightHubError, arg1: TerraBuildSettingsResult) => void;
export type TerraBuildGetQualityReportCallback = (arg0: FlightHubError, arg1: TerraBuildQualityReportResult) => void;
export type TerraBuildGetModelFileListCallback = (arg0: FlightHubError, arg1: TerraBuildModelFileListResult) => void;
export type TerraBuildGetModelFileUrlCallback = (arg0: FlightHubError, arg1: TerraBuildModelFileUrlResult) => void;
export type TerraBuildCreateReconstructionCallback = (arg0: FlightHubError, arg1: TerraBuildCreateReconstructionResult) => void;
export type TerraBuildCreatePanoramaCallback = (arg0: FlightHubError, arg1: TerraBuildCreatePanoramaResult) => void;
export type TerraBuildGetSfmResultCallback = (arg0: FlightHubError, arg1: TerraBuildSfmResult) => void;
export type TerraBuildGetReconstructionImagesCallback = (arg0: FlightHubError, arg1: TerraBuildReconstructionImagesResult) => void;
export type TerraBuildReconstructionStatusChangedCallback = (arg0: TerraBuildReconstructionStatusChanged) => void;
export type TerraUploadCallbackCallback = (arg0: FlightHubError, arg1: TerraUploadCallbackResult) => void;
export type TerraRenameModelCallback = (arg0: FlightHubError) => void;
export type TerraShowOnMapCallback = (arg0: FlightHubError, arg1: TerraShowOnMapResult) => void;
export type TerraUnzipProgressCallback = (arg0: TerraUnzipProgressMsg) => void;
export type TerraModelStatusChangedCallback = (arg0: TerraModelStatusChangedMsg) => void;
export type TerraFileShowOnMapCallback = (arg0: TerraFileShowOnMapMsg) => void;
export type TerraMediaFileHideOnMapCallback = (arg0: TerraMediaFileHideOnMapMsg) => void;
export type TerraMediaFileShowOnMapCallback = (arg0: TerraMediaFileShowOnMapMsg) => void;
export type TerraGetModelDetailCallback = (arg0: FlightHubError, arg1: TerraModelDetailResult) => void;
export type TerraSetLasWktCallback = (arg0: FlightHubError) => void;
export type SearchSignalMapsCallback = (arg0: FlightHubError, arg1: SignalMapsResults) => void;
export type CreateCustomizedFlightAreasCallback = (arg0: FlightHubError, arg1: CreateFlightAreasResults) => void;
export type GetCustomizedFlightAreasCallback = (arg0: FlightHubError, arg1: GetFlightAreasResults) => void;
export type UpdateCustomizedFlightAreasCallback = (arg0: FlightHubError, arg1: UpdateFlightAreasResults) => void;
export type SyncCustomizedFlightAreasCallback = (arg0: FlightHubError, arg1: SyncFlightAreasResults) => void;
export type GetFlightAreasSyncStatusCallback = (arg0: FlightHubError, arg1: GetAreasSyncStatusResults) => void;
export type GetOfflineMapsModelInfoCallback = (arg0: FlightHubError, arg1: GetOfflineMapsModelInfoResults) => void;
export type SyncOfflineMapsCallback = (arg0: FlightHubError, arg1: OfflineMapsSyncResults) => void;
export type GetOfflineMapsSyncStatusCallback = (arg0: FlightHubError, arg1: GetOfflineMapsSyncStatusResults) => void;
export type ExportFlightRecordsCallback = (arg0: FlightHubError, arg1: ExportFlightRecordsResults) => void;
export type GetExportFlightRecordsProgressCallback = (arg0: FlightHubError, arg1: GetExportFlightRecordsProgressResults) => void;
export type StartNetworkTestCallback = (arg0: FlightHubError, arg1: NetworkTestProgressResult) => void;
export type StopNetworkTestCallback = (arg0: FlightHubError) => void;
export type GetNetworkTestProgressCallback = (arg0: FlightHubError, arg1: NetworkTestProgressResult) => void;
export type SubscribeNetworkTestProgressCallback = (arg0: NetworkTestProgressResult) => void;
export type RtkCalibrationCallback = (arg0: FlightHubError, arg1: RtkCalibrationResult) => void;
export type SetDistanceLimitCallback = (arg0: FlightHubError, arg1: SetDistanceLimitResult) => void;
export type SetHeightLimitCallback = (arg0: FlightHubError, arg1: SetHeightLimitResult) => void;
export type SetObstacleAvoidanceCallback = (arg0: FlightHubError, arg1: SetObstacleAvoidanceResult) => void;
export type SetRemainingPowerForRthCallback = (arg0: FlightHubError, arg1: SetRemainingPowerForRthResult) => void;
export type SetNightLightsStateCallback = (arg0: FlightHubError, arg1: SetNightLightsStateResult) => void;
export type SwitchAlarmLightStateCallback = (arg0: FlightHubError, arg1: SwitchAlarmStateResult) => void;
export type EsimOperatorSwitchCallback = (arg0: FlightHubError, arg1: EsimOperatorSwitchResult) => void;
export type SimSlotSwitchCallback = (arg0: FlightHubError, arg1: SimSlotSwitchResult) => void;
export type SetBatteryStoreModeCallback = (arg0: FlightHubError, arg1: SetBatteryStoreModeResult) => void;
export type ManualBatterySwapCallback = (arg0: FlightHubError, arg1: ManualBatterySwapResult) => void;
export type ManualBatterySwapProgressCallback = (arg0: FlightHubError, arg1: ManualBatterySwapProgressResult) => void;
export type DonglePowerSwitchCallback = (arg0: FlightHubError, arg1: DonglePowerSwitchResult) => void;
export type LowPowerSwitchCallback = (arg0: FlightHubError, arg1: LowPowerSwitchResult) => void;
export type EsimOperatorSwitchProgressCallback = (arg0: FlightHubError, arg1: EsimOperatorSwitchProgressResult) => void;
export type SetRelayBroadcastHideCallback = (arg0: FlightHubError) => void;
export type SetGeoCagingEnableCallback = (arg0: FlightHubError) => void;
export type SetRelaySSIDCallback = (arg0: FlightHubError) => void;
export type SetRelayPasswordCallback = (arg0: FlightHubError) => void;
export type SetRelaySearchModeCallback = (arg0: FlightHubError) => void;
export type SetRelayOccupiedStatusCallback = (arg0: FlightHubError, arg1: SetRelayOccupiedStatusResult) => void;
export type RelayRebootCallback = (arg0: FlightHubError, arg1: RelayRebootResult) => void;
export type RelayDisconnectCallback = (arg0: FlightHubError, arg1: RelayDisconnectResult) => void;
export type QueryHistoryHMSDataCallback = (arg0: FlightHubError, arg1: HistoryHmsDataResult) => void;
export type QueryDeviceLogListCallback = (arg0: FlightHubError, arg1: DeviceLogListResult) => void;
export type CreateDeviceLogReportCallback = (arg0: FlightHubError, arg1: CreateDeviceLogReportResult) => void;
export type LogReportListCallback = (arg0: FlightHubError, arg1: LogReportListResult) => void;
export type LogReportOperationCallback = (arg0: FlightHubError) => void;
export type UploadLogAppendFileCallback = (arg0: FlightHubError) => void;
export type GetLatestFirmwareReleaseNoteCallback = (arg0: FlightHubError, arg1: (FirmwareReleaseNoteResult)[]) => void;
export type InvokeFirmwareUpgradeCallback = (arg0: FlightHubError, arg1: FirmwareUpgradeResult) => void;
export type QueryFirmwareUpgradeProgressCallback = (arg0: FlightHubError, arg1: (FirmwareUpgradeProgressItem)[]) => void;
export type UploadFirmwareFileCallback = (arg0: FlightHubError, arg1: UploadFileResult) => void;
export type ReleaseFirmwareCallback = (arg0: FlightHubError) => void;
export type UnReleaseFirmwareCallback = (arg0: FlightHubError) => void;
export type DeleteFirmwareCallback = (arg0: FlightHubError) => void;
export type QueryFirmwareListCallback = (arg0: FlightHubError, arg1: (FirmwareItemResult)[]) => void;
export type QueryFirmwareCompatibilityConfigCallback = (arg0: FlightHubError, arg1: (FirmwareCompatibilityConfigItemResult)[]) => void;
export type CheckFirmwareStatusCallback = (arg0: FlightHubError, arg1: (FirmwareStatusItem)[]) => void;
export type SubmitFirmwareInfoCallback = (arg0: FlightHubError) => void;
export type GetUnlockLicenseListCallback = (arg0: FlightHubError, arg1: QueryDeviceUnlockLicenseListResult) => void;
export type SwitchUnlockLicenseCallback = (arg0: FlightHubError) => void;
export type CheckUnlockLicenseCallback = (arg0: FlightHubError, arg1: CheckUnlockLicenseResult) => void;
export type SubmitUnlockLicenseCallback = (arg0: FlightHubError) => void;
export type ClearDeviceUnlockLicenseCallback = (arg0: FlightHubError) => void;
export type UploadUnlockLicenseFileCallback = (arg0: FlightHubError, arg1: UploadUnlockLicenseFileResult) => void;
export type GetWaylineListCallback = (arg0: FlightHubError, arg1: GetWaylineListResult) => void;
export type GetWaylineDetailCallback = (arg0: FlightHubError, arg1: GetWaylineDetailResult) => void;
export type BatchDeleteWaylinesCallback = (arg0: FlightHubError, arg1: BatchDeleteWaylinesResult) => void;
export type UpdateWaylineCallback = (arg0: FlightHubError, arg1: UpdateWaylineResult) => void;
export type SubmitWaylineInfoCallback = (arg0: FlightHubError) => void;
export type BatchDownloadWaylinesCallback = (arg0: FlightHubError, arg1: (BatchDownloadWaylinesItemResult)[]) => void;
export type DuplicateWaylineCallback = (arg0: FlightHubError, arg1: DuplicateWaylineResult) => void;
export type CopyWaylineCallback = (arg0: FlightHubError, arg1: CopyWaylineResult) => void;
export type ConcatWaylineCallback = (arg0: FlightHubError, arg1: ConcatWaylineResult) => void;
export type ImportKmzCallback = (arg0: FlightHubError, arg1: ImportKmzResult) => void;
export type SubscribeDockCoverOpenProgressCallback = (arg0: OpenDockCoverResult) => void;
export type SubscribeDockCoverCloseProgressCallback = (arg0: CloseDockCoverResult) => void;
export type SubscribeDeviceRebootProgressCallback = (arg0: DeviceRebootResult) => void;
export type SubscribeCalibrationProgressCallback = (arg0: RtkCalibrationResult) => void;
export type SubscribeDeviceFormatProgressCallback = (arg0: DeviceFormatResult) => void;
export type SubscribeDroneOpenProgressCallback = (arg0: OpenDroneResult) => void;
export type SubscribeDroneCloseProgressCallback = (arg0: CloseDroneResult) => void;
export type SubscribeDroneFormatProgressCallback = (arg0: DroneFormatResult) => void;
export type SubscribeDroneChargeOpenProgressCallback = (arg0: OpenChargeResult) => void;
export type SubscribeDroneChargeCloseProgressCallback = (arg0: CloseChargeResult) => void;
export type SubscribeDeviceEsimOperatorSwitchProgressCallback = (arg0: EsimOperatorSwitchResult) => void;
export type SubscribeDeviceSimSlotSwitchProgressCallback = (arg0: SimSlotSwitchResult) => void;
export type DroneFormatCallback = (arg0: FlightHubError, arg1: DroneFormatResult) => void;
export type HsiInfoCallback = (arg0: HsiInfo) => void;
export type SetFlightSmartPlanModeCallback = (arg0: FlightHubError, arg1: FlightSmartPlanModeResult) => void;
export type SetOutOfControlActionCallback = (arg0: FlightHubError, arg1: FlightOutOfControlActionResult) => void;
export type SetFlightTaskHeightCallback = (arg0: FlightHubError, arg1: FlightCommanderHeightResult) => void;
export type SetRthAltitudeCallback = (arg0: FlightHubError, arg1: FlightRthAltitudeResult) => void;
export type SetAirTransferEnableCallback = (arg0: FlightHubError) => void;
export type GenerateTryFlightWaylineCallback = (arg0: Native.GenerateTryFlightWaylineResponse, arg1: FlightHubError) => void;
export type CreateTestFlightTaskCallback = (arg0: Native.CreateTestFlightTaskResponse, arg1: FlightHubError) => void;
export type GetRepairConfigsCallback = (arg0: FlightHubError, arg1: DeviceRepairConfigResults) => void;
export type CreateMaintenanceOrderCallback = (arg0: FlightHubError, arg1: CreateMaintenanceOrderResults) => void;
export type GetMaintenanceOrderDetailCallback = (arg0: FlightHubError, arg1: MaintenanceOrderDetailResults) => void;
export type GetMaintenanceOrdersListCallback = (arg0: FlightHubError, arg1: MaintenanceOrdersListResults) => void;
export type CreateSelfDiagnosisCallback = (arg0: FlightHubError) => void;
export type OperateSelfDiagnosisCallback = (arg0: FlightHubError) => void;
export type GetSelfDiagnosisReportCallback = (arg0: FlightHubError, arg1: GetSelfDiagnosisReportResults) => void;
export type GetSelfDiagnosisReportListCallback = (arg0: FlightHubError, arg1: GetSelfDiagnosisReportListResults) => void;
export type FetchAIBoxInfoCallback = (arg0: FlightHubError, arg1: AIBoxInfoListResult) => void;
export type FetchFileDownloadUrlCallback = (arg0: FlightHubError, arg1: FileDownloadUrlListResult) => void;
export type FetchAppListCallback = (arg0: FlightHubError, arg1: FetchAppListResult) => void;
export type FetchAppListProgressCallback = (arg0: FlightHubError, arg1: FetchAppListProgressResult) => void;
export type ExportFileCallback = (arg0: FlightHubError, arg1: ExportFileResult) => void;
export type ExportFileProgressCallback = (arg0: FlightHubError, arg1: ExportFileProgressResult) => void;
export type UploadAIBoxFileCallback = (arg0: FlightHubError, arg1: UploadFileResult) => void;
export type InstallAppCallback = (arg0: FlightHubError, arg1: InstallAppResult) => void;
export type InstallAppProgressCallback = (arg0: FlightHubError, arg1: InstallAppProgressResult) => void;
export type OperateAppCallback = (arg0: FlightHubError, arg1: OperateAppResult) => void;
export type DockDeparturePointCallback = (arg0: Native.DockDeparturePoint) => void;
export type AircraftVisualScoutStatusCallback = (arg0: Native.AircraftVisualScoutStatus) => void;
export type AircraftVisualScoutAbnormalInfoCallback = (arg0: Native.AircraftVisualScoutAbnormalInfo) => void;
export type AircraftVisualScoutObstacleInfoCallback = (arg0: Native.AircraftVisualScoutObstacleInfo) => void;
export type EphemerisDownloadStateCallback = (arg0: Native.EphemerisDownloadState) => void;
export type EphemerisInfoCallback = (arg0: Native.EphemerisInfo) => void;
export type InOutWaylineFlightSettingCallback = (arg0: Native.InOutWaylineFlightSettingParams, arg1: FlightHubError) => void;
export type GetAIInsideModelsCallback = (arg0: FlightHubError, arg1: GetAIInsideModelsResult) => void;
export type GetAIInsideModelDevicesCallback = (arg0: FlightHubError, arg1: GetAIInsideModelDevicesResult) => void;
export type GetAIInsideModelDevicesSummaryCallback = (arg0: FlightHubError, arg1: GetAIInsideModelDevicesSummaryResult) => void;
export type OperateAIInsideModelCallback = (arg0: FlightHubError, arg1: OperateAIInsideModelResult) => void;
export type CreateAIInsideAlgorithmCallback = (arg0: FlightHubError, arg1: CreateAIInsideAlgorithmResult) => void;
export type FileUploadAIInsideAlgorithmCallback = (arg0: FlightHubError, arg1: FileUploadAIInsideAlgorithmResult) => void;
export type DeleteAIInsideAlgorithmCallback = (arg0: FlightHubError) => void;
export type UploadAlgorithmFileCallback = (arg0: FlightHubError, arg1: UploadAIInsideAlgorithmFileResult) => void;
export type PostAiAlertDeviceSettingCallback = (arg0: FlightHubError, arg1: PostAiAlertDeviceSettingResult) => void;
export type GetAiAlertDeviceSettingCallback = (arg0: FlightHubError, arg1: GetAiAlertDeviceSettingResult) => void;
export type PostAiAlertAlgorithmSettingCallback = (arg0: FlightHubError, arg1: PostAiAlertAlgorithmSettingResult) => void;
export type GetAiAlertAlgorithmSettingCallback = (arg0: FlightHubError, arg1: GetAiAlertAlgorithmSettingResult) => void;
export type GetAiAlertFlightsCallback = (arg0: FlightHubError, arg1: GetAiAlertFlightsResult) => void;
export type GetAiAlertRecordsCallback = (arg0: FlightHubError, arg1: GetAiAlertRecordsResult) => void;
export type DeviceOtaProgressCallback = (arg0: DeviceOtaProgress) => void;
export type DeviceFileUploadProgressCallback = (arg0: Native.DeviceFileUploadProgress) => void;
export type PsdkSpeakerAudioPlayStartProgressCallback = (arg0: Native.PsdkSpeakerPlayStartProgress) => void;
export type PsdkSpeakerTtsPlayStartProgressCallback = (arg0: Native.PsdkSpeakerPlayStartProgress) => void;
export type FlightPoiProgressCallback = (arg0: Native.FlightPoiProgress) => void;
export type DrcOsdInfoCallback = (arg0: Native.DrcOsdInfo) => void;
export type DrcBatteriesInfoCallback = (arg0: Native.DrcBatteriesInfo) => void;
export type DrcParachuteInfoCallback = (arg0: Native.DrcParachuteInfo) => void;
export type FlashLedStateInfoCallback = (arg0: FlashLedStateInfo) => void;
export type FlashLedConfigListCallback = (arg0: FlightHubError, arg1: FlashLedConfigList) => void;
export type FlashLedConfigCallback = (arg0: FlightHubError, arg1: FlashLedConfig) => void;
export type AiAlarmStateCallback = (arg0: Native.AiAlarmStateInfo) => void;
export type DrcDelayInfoCallback = (arg0: Native.DrcDelayInfo) => void;
export type DrcCountDownInfoCallback = (arg0: Native.DrcCountDownInfo) => void;
export type ElementCreateElementCallback = (arg0: FlightHubError, arg1: ElementCreateResult) => void;
export type ElementUpdateElementCallback = (arg0: FlightHubError, arg1: ElementUpdateResult) => void;
export type ElementListHierarchyCallback = (arg0: FlightHubError, arg1: ElementListHierarchyResult) => void;
export type ElementSetVisibilityCallback = (arg0: FlightHubError, arg1: ElementSetVisibilityResult) => void;
export type ElementDeleteElementCallback = (arg0: FlightHubError, arg1: ElementDeleteResult) => void;
export type ElementCreateCallback = (arg0: ElementCreateMsg) => void;
export type ElementUpdateCallback = (arg0: ElementUpdateMsg) => void;
export type ElementDeleteCallback = (arg0: ElementDeleteMsg) => void;
export type CreateLiveSyncCallback = (arg0: FlightHubError, arg1: LiveSyncCreateResult) => void;
export type DeleteLiveSyncCallback = (arg0: FlightHubError) => void;
export type UpdateLiveSyncCallback = (arg0: FlightHubError, arg1: LiveSyncItem) => void;
export type GetLiveSyncListCallback = (arg0: FlightHubError, arg1: LiveSyncListResult) => void;
export type GetLiveSyncDevicesV2Callback = (arg0: FlightHubError, arg1: LiveSyncDevicesV2Result) => void;
export type GetLiveSyncSummaryCallback = (arg0: FlightHubError, arg1: LiveSyncSummaryResult) => void;
export type DockLiveStatusCallback = (arg0: DockLiveStatus) => void;
export type DockLiveCapacityCallback = (arg0: DockLiveCapacity) => void;
export type DockDongleInfosCallback = (arg0: DockDongleInfos) => void;
export type DockAirConditionerModeCallback = (arg0: DockAirConditionerMode) => void;
export type DroneModeCodeReasonCallback = (arg0: DroneModeCodeReason) => void;
export type DroneDongleInfosCallback = (arg0: DroneDongleInfos) => void;
export type DroneFlysafeDatabaseVersionCallback = (arg0: DroneFlysafeDatabaseVersion) => void;
export type DroneWpmzVersionCallback = (arg0: DroneWpmzVersion) => void;
export type DroneCommanderFlightModeCallback = (arg0: DroneCommanderFlightMode) => void;
export type DroneCurrentCommanderFlightModeCallback = (arg0: DroneCurrentCommanderFlightMode) => void;
export type DroneCommanderModeLostActionCallback = (arg0: DroneCommanderModeLostAction) => void;
export type DroneOfflineMapEnableCallback = (arg0: DroneOfflineMapEnable) => void;
export type DronePsdkUiResourceCallback = (arg0: DronePsdkUiResource) => void;
export type DroneCameraWatermarkSettingsPushCallback = (arg0: DroneCameraWatermarkSettingsPush) => void;
export type DeviceCloudEnvironmentSwitchProgressCallback = (arg0: CloudEnvironmentSwitchResult) => void;
export type PullStreamStartCallback = (arg0: FlightHubError) => void;
export type PullStreamDataCallback = (arg0: Uint8Array, arg1: FrameInfo) => void;
export type PullStreamErrorCallback = (arg0: number, arg1: string) => void;
export interface AIBoxModule {
  fetchAIBoxInfo(arg0: string, arg1: FetchAIBoxInfoCallback): void;
  fetchFileDownloadUrl(arg0: FetchFileDownloadUrlParam, arg1: FetchFileDownloadUrlCallback): void;
  fetchAppList(arg0: AIBoxFetchAppListParam, arg1: FetchAppListCallback): void;
  fetchAppListProgress(arg0: AIBoxFetchAppListProgressParam, arg1: FetchAppListProgressCallback): void;
  exportFile(arg0: AIBoxExportFileParam, arg1: ExportFileCallback): void;
  exportFileProgress(arg0: AIBoxExportFileProgressParam, arg1: ExportFileProgressCallback): void;
  uploadAIBoxFile(arg0: string, arg1: string, arg2: string, arg3: UploadAIBoxFileCallback): void;
  installApp(arg0: AIBoxInstallAppParam, arg1: InstallAppCallback): void;
  installAppProgress(arg0: AIBoxInstallAppProgressParam, arg1: InstallAppProgressCallback): void;
  operateApp(arg0: AIBoxOperateAppParam, arg1: OperateAppCallback): void;
}
export interface AIInsideManageModule {
  destroy(): void;
  getAIInsideModels(arg0: GetAIInsideModelsCallback): void;
  getAIInsideModelDevices(arg0: GetAIInsideModelDevicesParam, arg1: GetAIInsideModelDevicesCallback): void;
  getAIInsideModelDevicesSummary(arg0: GetAIInsideModelDevicesSummaryParam, arg1: GetAIInsideModelDevicesSummaryCallback): void;
  operateAIInsideModel(arg0: OperateAIInsideModelParam, arg1: OperateAIInsideModelCallback): void;
  createAIInsideAlgorithm(arg0: CreateAIInsideAlgorithmParam, arg1: CreateAIInsideAlgorithmCallback): void;
  fileUploadAIInsideAlgorithm(arg0: FileUploadAIInsideAlgorithmParam, arg1: FileUploadAIInsideAlgorithmCallback): void;
  deleteAIInsideAlgorithm(arg0: DeleteAIInsideAlgorithmParam, arg1: DeleteAIInsideAlgorithmCallback): void;
  uploadAlgorithmFile(arg0: UploadAIInsideAlgorithmFileParam, arg1: UploadAlgorithmFileCallback): void;
}
export interface AIAlertModule {
  destroy(): void;
  postDeviceSetting(arg0: PostAiAlertDeviceSettingParam, arg1: PostAiAlertDeviceSettingCallback): void;
  getDeviceSetting(arg0: GetAiAlertDeviceSettingParam, arg1: GetAiAlertDeviceSettingCallback): void;
  postAlgorithmSetting(arg0: PostAiAlertAlgorithmSettingParam, arg1: PostAiAlertAlgorithmSettingCallback): void;
  getAlgorithmSetting(arg0: GetAiAlertAlgorithmSettingParam, arg1: GetAiAlertAlgorithmSettingCallback): void;
  getAiAlertFlights(arg0: GetAiAlertFlightsParam, arg1: GetAiAlertFlightsCallback): void;
  getAiAlertRecords(arg0: GetAiAlertRecordsParam, arg1: GetAiAlertRecordsCallback): void;
}
export interface BaseStation {
  getSn(): string;
  getLiveStream(arg0: LiveInfo): LiveModule | null;
  getLiveDeviceModule(): LiveDeviceModule | null;
  getRtkCalibrationModule(): RtkCalibrationModule | null;
  getNetworkTestModule(): NetworkTestModule | null;
}
export interface CameraControlModule {
  drcSwitchLiveLens(arg0: SwitchLiveLensParams, arg1: ResultCallbackWithError): void;
  drcSetPhotoStorageSettings(arg0: SetPhotoStorageSettingsParams, arg1: ResultCallbackWithError): void;
  drcSetVideoStorageSettings(arg0: SetVideoStorageSettingsParams, arg1: ResultCallbackWithError): void;
  drcSetNightSceneMode(arg0: SetNightSceneModeParams, arg1: ResultCallbackWithError): void;
  drcTakePhoto(arg0: string, arg1: ResultCallbackWithError): void;
  drcStartRecord(arg0: string, arg1: ResultCallbackWithError): void;
  drcStopRecord(arg0: string, arg1: ResultCallbackWithError): void;
  drcZoomAtTarget(arg0: ZoomAtTargetParams, arg1: ResultCallbackWithError): void;
  drcSetFocalLength(arg0: CameraFocalLengthParams, arg1: ResultCallbackWithError): void;
  drcResetGimbal(arg0: string, arg1: number, arg2: ResultCallbackWithError): void;
  lookAtTarget(arg0: LookAtTargetParams, arg1: ResultCallbackWithError): void;
  drcStartPanorama(arg0: PanoramaParam, arg1: ResultCallbackWithError): void;
  drcStopPanorama(arg0: string, arg1: ResultCallbackWithError): void;
  listenDrcPanoramaStatus(arg0: string, arg1: PanoramaStatusCallback): number;
  cancelListenDrcPanoramaStatus(arg0: string, arg1: number): void;
  drcSwitchCameraMode(arg0: SwitchCameraModeParams, arg1: ResultCallbackWithError): void;
  listenDrcCameraModeAvailableRange(arg0: string, arg1: CameraModeAvailableRangeCallback): number;
  cancelListenDrcCameraModeAvailableRange(arg0: string, arg1: number): void;
  listenDrcCameraState(arg0: string, arg1: CameraStateCallback): number;
  cancelListenDrcCameraState(arg0: string, arg1: number): void;
  listenDrcLiveviewWorldRegion(arg0: string, arg1: LiveviewWorldRegionCallback): number;
  cancelListenDrcLiveviewWorldRegion(arg0: string, arg1: number): void;
  listenDrcCameraWideLensState(arg0: string, arg1: CameraWideLensStateCallback): number;
  cancelListenDrcCameraWideLensState(arg0: string, arg1: number): void;
  listenDrcCameraZoomLensState(arg0: string, arg1: CameraZoomLensStateCallback): number;
  cancelListenDrcCameraZoomLensState(arg0: string, arg1: number): void;
  listenDrcCameraMeasureTarget(arg0: string, arg1: CameraMeasureTargetCallback): number;
  cancelListenDrcCameraMeasureTarget(arg0: string, arg1: number): void;
  listenDrcNightModeSettings(arg0: string, arg1: NightModeSettingsCallback): number;
  cancelListenDrcNightModeSettings(arg0: string, arg1: number): void;
  listenDrcGimbalState(arg0: string, arg1: GimbalStateCallback): number;
  cancelListenDrcGimbalState(arg0: string, arg1: number): void;
  listenDrcLiveVideoInfo(arg0: string, arg1: LiveVideoInfoCallback): number;
  cancelListenDrcLiveVideoInfo(arg0: string, arg1: number): void;
  listenDrcThermalGainMode(arg0: string, arg1: ThermalGainModeInfoCallback): number;
  cancelListenDrcThermalGainMode(arg0: string, arg1: number): void;
  listenDrcCameraIrLensState(arg0: string, arg1: CameraIrLensStateCallback): number;
  cancelListenDrcCameraIrLensState(arg0: string, arg1: number): void;
  listenDrcCameraIrThermometry(arg0: string, arg1: CameraIrThermometryInfoCallback): number;
  cancelListenDrcCameraIrThermometry(arg0: string, arg1: number): void;
  listenDrcCameraWatermarkSettings(arg0: string, arg1: CameraWatermarkSettingsCallback): number;
  cancelListenDrcCameraWatermarkSettings(arg0: string, arg1: number): void;
  listenDrcCameraStorageInfo(arg0: string, arg1: CameraStorageInfoCallback): number;
  cancelListenDrcCameraStorageInfo(arg0: string, arg1: number): void;
  listenDrcCameraIrPipState(arg0: string, arg1: CameraIrPipStateCallback): number;
  cancelListenDrcCameraIrPipState(arg0: string, arg1: number): void;
  listenDrcCameraIsothermPolygon(arg0: string, arg1: CameraIsothermPolygonCallback): number;
  cancelListenDrcCameraIsothermPolygon(arg0: string, arg1: number): void;
  listenDrcCameraMediaStorage(arg0: string, arg1: CameraMediaStorageCallback): number;
  cancelListenDrcCameraMediaStorage(arg0: string, arg1: number): void;
  listenDrcCameraAlgorithmDehazeInfo(arg0: string, arg1: CameraAlgorithmDehazeInfoCallback): number;
  cancelListenDrcCameraAlgorithmDehazeInfo(arg0: string, arg1: number): void;
  listenDrcCameraPreRecordedInfo(arg0: string, arg1: CameraPreRecordedInfoCallback): number;
  cancelListenDrcCameraPreRecordedInfo(arg0: string, arg1: number): void;
  listenDrcCameraCapability(arg0: string, arg1: CameraCapabilityCallback): number;
  cancelListenDrcCameraCapability(arg0: string, arg1: number): void;
  listenDrcCameraSettableCapability(arg0: string, arg1: CameraSettableCapabilityCallback): number;
  cancelListenDrcCameraSettableCapability(arg0: string, arg1: number): void;
  listenDrcCameraVisibleCapability(arg0: string, arg1: CameraVisibleCapabilityCallback): number;
  cancelListenDrcCameraVisibleCapability(arg0: string, arg1: number): void;
  listenDrcCameraPhotoInfo(arg0: string, arg1: CameraPhotoInfoCallback): number;
  cancelListenDrcCameraPhotoInfo(arg0: string, arg1: number): void;
  drcSmartPhotoTakePhoto(arg0: string, arg1: ResultCallbackWithError): void;
  drcSetLinkageZoom(arg0: LinkageZoomParams, arg1: ResultCallbackWithError): void;
  drcSendCameraScreenDrag(arg0: CameraScreenDragParams, arg1: ResultCallbackWithError): void;
  drcSetPhotoSize(arg0: PhotoSizeParam, arg1: ResultCallbackWithError): void;
  drcSetIntervalTakePhoto(arg0: IntervalTakePhotoSetParam, arg1: ResultCallbackWithError): void;
  drcIntervalTakePhoto(arg0: IntervalTakePhotoParam, arg1: ResultCallbackWithError): void;
  drcStopTakePhoto(arg0: string, arg1: ResultCallbackWithError): void;
  listenDrcIntervalTakePhotoStatus(arg0: string, arg1: IntervalTakePhotoStatusCallback): number;
  cancelListenDrcIntervalTakePhotoStatus(arg0: string, arg1: number): void;
  drcCameraAimAtTarget(arg0: CameraAimParam, arg1: ResultCallbackWithError): void;
  drcSetThermalGainMode(arg0: ThermalGainModeSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraApertureValue(arg0: CameraApertureValueSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraExposureMode(arg0: CameraExposureModeSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraExposureValue(arg0: CameraExposureSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraFocusMode(arg0: CameraFocusModeSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraFocusValue(arg0: CameraFocusValueSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraIso(arg0: CameraIsoSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraMechanicalShutter(arg0: CameraMechanicalShutterSetParams, arg1: ResultCallbackWithError): void;
  drcCameraPointFocusAction(arg0: CameraPointFocusActionParams, arg1: ResultCallbackWithError): void;
  drcSetCameraShutter(arg0: CameraShutterSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraWatermark(arg0: CameraWatermarkParams, arg1: ResultCallbackWithError): void;
  drcSetCameraDewarping(arg0: CameraDewarpingSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraScreenSplit(arg0: CameraScreenSplitParams, arg1: ResultCallbackWithError): void;
  drcCleanFog(arg0: CleanFogParams, arg1: ResultCallbackWithError): void;
  drcSetThermalCurrentPalette(arg0: ThermalCurrentPaletteSetParams, arg1: ResultCallbackWithError): void;
  drcSetThermalSuperResolutionEnable(arg0: ThermalSuperResolutionEnableParams, arg1: ResultCallbackWithError): void;
  drcSetIrMeteringMode(arg0: IrMeteringModeSetParams, arg1: ResultCallbackWithError): void;
  drcSetIrMeteringPoint(arg0: IrMeteringPointSetParams, arg1: ResultCallbackWithError): void;
  drcSetIrMeteringArea(arg0: IrMeteringAreaSetParams, arg1: ResultCallbackWithError): void;
  drcSetIrDisplayMode(arg0: SetIrDisplayModeParams, arg1: ResultCallbackWithError): void;
  drcSetIrEnhanceMode(arg0: SetIrEnhanceModeParams, arg1: ResultCallbackWithError): void;
  drcSetIrMixRate(arg0: SetIrMixRateParams, arg1: ResultCallbackWithError): void;
  drcSetIsothermEnable(arg0: SetIsothermEnableParams, arg1: ResultCallbackWithError): void;
  drcSetIsothermColorRenderingType(arg0: SetIsothermColorRenderingTypeParams, arg1: ResultCallbackWithError): void;
  drcSetIsothermLowerUpperRange(arg0: SetIsothermLowerUpperRangeParams, arg1: ResultCallbackWithError): void;
  drcSetIsothermRenderingPolygon(arg0: SetIsothermRenderingPolygonParams, arg1: ResultCallbackWithError): void;
  drcSetIsothermRoiBasedRenderingEnable(arg0: SetIsothermRoiBasedRenderingEnableParams, arg1: ResultCallbackWithError): void;
  drcSetInfraredFillLightEnable(arg0: InfraredFillLightEnableParams, arg1: ResultCallbackWithError): void;
  drcSetCameraNightVisionEnable(arg0: CameraNightVisionEnableParams, arg1: ResultCallbackWithError): void;
  drcResetCameraSettings(arg0: CameraSettingsResetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraDenoiseLevelSet(arg0: CameraDenoiseLevelSetParams, arg1: ResultCallbackWithError): void;
  drcSetVideoResolution(arg0: VideoResolutionSetParams, arg1: ResultCallbackWithError): void;
  drcSetCameraPhotoFormat(arg0: CameraPhotoFormatSetParams, arg1: ResultCallbackWithError): void;
  drcSetPreRecordedStatus(arg0: PreRecordedStatusSetParams, arg1: ResultCallbackWithError): void;
  drcSetPreRecordedTime(arg0: PreRecordedTimeSetParams, arg1: ResultCallbackWithError): void;
  drcSetCountDownAction(arg0: number, arg1: number, arg2: ResultCallbackWithError): void;
  drcSetAssistantVideoMode(arg0: number, arg1: ResultCallbackWithError): void;
  drcSetAssistantVideoSwitch(arg0: number, arg1: ResultCallbackWithError): void;
  drcSetAlgorithmDehazeMode(arg0: AlgorithmDehazeModeSetParams, arg1: ResultCallbackWithError): void;
  drcSetAlgorithmDehazeLevel(arg0: AlgorithmDehazeLevelSetParams, arg1: ResultCallbackWithError): void;
  listenDroneCameraWatermarkSettings(arg0: DroneCameraWatermarkSettingsPushCallback): number;
  cancelListenDroneCameraWatermarkSettings(arg0: number): void;
}
export interface ControlAuthModule {
  acquireFlightControlAuthority(arg0: ResultCallbackWithError): void;
  releaseFlightControlAuthority(arg0: ResultCallbackWithError): void;
  listenFlightControlAuthority(arg0: FlightControlAuthorityCallback): number;
  cancelListenFlightControlAuthority(arg0: number): void;
  acquirePayloadControlAuthority(arg0: string, arg1: ResultCallbackWithError): void;
  releasePayloadControlAuthority(arg0: string, arg1: ResultCallbackWithError): void;
  listenPayloadControlAuthority(arg0: string, arg1: PayloadControlAuthorityCallback): number;
  cancelListenPayloadControlAuthority(arg0: string, arg1: number): void;
}
export interface CustomSEIModule {
  customSEIEncode(arg0: (number)[], arg1: (SeiItem)[]): (number)[];
  customSEIDecode(arg0: (number)[]): {header: SeiHeader; seiData: SeiItem[]} | null;
}
export interface DeployModule {
  listenDockDeparturePoint(arg0: DockDeparturePointCallback): number;
  cancelListenDockDeparturePoint(arg0: number): void;
  listenAircraftVisualScoutStatus(arg0: AircraftVisualScoutStatusCallback): number;
  cancelListenAircraftVisualScoutStatus(arg0: number): void;
  listenAircraftVisualScoutAbnormalInfo(arg0: AircraftVisualScoutAbnormalInfoCallback): number;
  cancelListenAircraftVisualScoutAbnormalInfo(arg0: number): void;
  listenAircraftVisualScoutObstacleInfo(arg0: AircraftVisualScoutObstacleInfoCallback): number;
  cancelListenAircraftVisualScoutObstacleInfo(arg0: number): void;
  listenAircraftEphemerisDownloadState(arg0: EphemerisDownloadStateCallback): number;
  cancelListenAircraftEphemerisDownloadState(arg0: number): void;
  listenAircraftEphemerisInfo(arg0: EphemerisInfoCallback): number;
  cancelListenAircraftEphemerisInfo(arg0: number): void;
  downloadEphemeris(arg0: Native.DownloadEphemerisParams, arg1: ResultCallbackWithError): void;
  executeInOutWaylineDetect(arg0: Native.InOutWaylineDetectParams, arg1: ResultCallbackWithError): void;
  setInOutWaylineFlight(arg0: Native.InOutWaylineFlightSettingParams, arg1: ResultCallbackWithError): void;
  getInOutWaylineFlightSetting(arg0: InOutWaylineFlightSettingCallback): void;
}
export interface DeviceDebugModule {
  openDebugMode(arg0: string, arg1: OpenDebugModeCallback): void;
  closeDebugMode(arg0: string, arg1: CloseDebugModeCallback): void;
  openDockCover(arg0: string, arg1: OpenDockCoverCallback): void;
  getOpenDockCoverProgress(arg0: string, arg1: OpenDockCoverProgressCallback): void;
  closeDockCover(arg0: string, arg1: CloseDockCoverCallback): void;
  getCloseDockCoverProgress(arg0: string, arg1: CloseDockCoverProgressCallback): void;
  deviceReboot(arg0: string, arg1: DeviceRebootCallback): void;
  getDeviceRebootProgress(arg0: string, arg1: DeviceRebootProgressCallback): void;
  deviceFormat(arg0: string, arg1: DeviceFormatCallback): void;
  getDeviceFormatProgress(arg0: string, arg1: DeviceFormatProgressCallback): void;
  openDrone(arg0: string, arg1: OpenDroneCallback): void;
  closeDrone(arg0: string, arg1: CloseDroneCallback): void;
  openCharge(arg0: string, arg1: OpenChargeCallback): void;
  closeCharge(arg0: string, arg1: CloseChargeCallback): void;
  setDockAirConditionerMode(arg0: string, arg1: number, arg2: ResultCallbackWithError): void;
  setDockSilentMode(arg0: string, arg1: number, arg2: ResultCallbackWithError): void;
  setDistanceLimit(arg0: string, arg1: number, arg2: number, arg3: SetDistanceLimitCallback): void;
  setHeightLimit(arg0: string, arg1: number, arg2: SetHeightLimitCallback): void;
  setObstacleAvoidance(arg0: string, arg1: number, arg2: SetObstacleAvoidanceCallback): void;
  setRemainingPowerForRth(arg0: string, arg1: number, arg2: SetRemainingPowerForRthCallback): void;
  setNightLightsState(arg0: string, arg1: number, arg2: SetNightLightsStateCallback): void;
  switchAlarmLightState(arg0: string, arg1: number, arg2: SwitchAlarmLightStateCallback): void;
  esimOperatorSwitch(arg0: string, arg1: string, arg2: number, arg3: string, arg4: EsimOperatorSwitchCallback): void;
  simSlotSwitch(arg0: string, arg1: string, arg2: number, arg3: string, arg4: SimSlotSwitchCallback): void;
  setBatteryStoreMode(arg0: string, arg1: number, arg2: SetBatteryStoreModeCallback): void;
  startManualBatterySwap(arg0: string, arg1: number, arg2: ManualBatterySwapCallback): void;
  getManualBatterySwapProgress(arg0: string, arg1: ManualBatterySwapProgressCallback): void;
  setDonglePowerSwitch(arg0: string, arg1: number, arg2: DonglePowerSwitchCallback): void;
  setLowPowerSwitch(arg0: string, arg1: number, arg2: LowPowerSwitchCallback): void;
  getEsimOperatorSwitchProgress(arg0: string, arg1: EsimOperatorSwitchProgressCallback): void;
  setGeoCagingEnable(arg0: string, arg1: number, arg2: (GeoCagingInfoParam)[], arg3: SetGeoCagingEnableCallback): void;
  subscribeDockCoverOpenProgress(arg0: string, arg1: SubscribeDockCoverOpenProgressCallback): number;
  unSubscribeDockCoverOpenProgress(arg0: number): void;
  subscribeDockCoverCloseProgress(arg0: string, arg1: SubscribeDockCoverCloseProgressCallback): number;
  unSubscribeDockCoverCloseProgress(arg0: number): void;
  subscribeDeviceRebootProgress(arg0: string, arg1: SubscribeDeviceRebootProgressCallback): number;
  unSubscribeDeviceRebootProgress(arg0: number): void;
  subscribeDeviceFormatProgress(arg0: string, arg1: SubscribeDeviceFormatProgressCallback): number;
  unSubscribeDeviceFormatProgress(arg0: number): void;
  subscribeDroneOpenProgress(arg0: string, arg1: SubscribeDroneOpenProgressCallback): number;
  unSubscribeDroneOpenProgress(arg0: number): void;
  subscribeDroneCloseProgress(arg0: string, arg1: SubscribeDroneCloseProgressCallback): number;
  unSubscribeDroneCloseProgress(arg0: number): void;
  subscribeDroneFormatProgress(arg0: string, arg1: SubscribeDroneFormatProgressCallback): number;
  unSubscribeDroneFormatProgress(arg0: number): void;
  subscribeDroneChargeOpenProgress(arg0: string, arg1: SubscribeDroneChargeOpenProgressCallback): number;
  unSubscribeDroneChargeOpenProgress(arg0: number): void;
  subscribeDroneChargeCloseProgress(arg0: string, arg1: SubscribeDroneChargeCloseProgressCallback): number;
  unSubscribeDroneChargeCloseProgress(arg0: number): void;
  subscribeDeviceEsimOperatorSwitchProgress(arg0: string, arg1: SubscribeDeviceEsimOperatorSwitchProgressCallback): number;
  unSubscribeDeviceEsimOperatorSwitchProgress(arg0: number): void;
  subscribeDeviceSimSlotSwitchProgress(arg0: string, arg1: SubscribeDeviceSimSlotSwitchProgressCallback): number;
  unSubscribeDeviceSimSlotSwitchProgress(arg0: number): void;
  droneFormat(arg0: string, arg1: DroneFormatCallback): void;
  droneSdrWorkMode(arg0: string, arg1: number, arg2: ResultCallbackWithError): void;
  cloudEnvironmentSwitch(arg0: CloudEnvironmentSwitchParam, arg1: ResultCallbackWithError): void;
  cloudEnvironmentSwitchCallback(arg0: CloudEnvironmentSwitchCallbackParam, arg1: ResultCallbackWithError): void;
  listenDeviceCloudEnvironmentSwitchProgress(arg0: string, arg1: DeviceCloudEnvironmentSwitchProgressCallback): number;
  cancelListenDeviceCloudEnvironmentSwitchProgress(arg0: number): void;
}
export interface DeviceHMSModule {
  listenDeviceHMS(arg0: DeviceHmsCallback): number;
  cancelListenDeviceHMS(arg0: number): void;
}
export interface DeviceManageModule {
  getDeviceList(arg0: DeviceListCallback): void;
  getDeviceDetailInfo(arg0: string, arg1: GetDeviceDetailInfoCallback): void;
  modifyDeviceName(arg0: ModifyDeviceNameParam, arg1: ModifyDeviceNameCallback): void;
  unbindDevice(arg0: (string)[], arg1: ResultCallbackWithError): void;
  listenWorkspaceDeviceChanged(arg0: WorkspaceDeviceChangeCallback): number;
  cancelListenWorkspaceDeviceChanged(arg0: number): void;
  listenDeviceTopoChanged(arg0: DeviceTopoChangeCallback): number;
  cancelListenDeviceTopoChanged(arg0: number): void;
  getDockDeviceStatus(arg0: (string)[], arg1: DockDeviceStatusListCallback): void;
  getDroneDeviceStatus(arg0: (string)[], arg1: DroneDeviceStatusListCallback): void;
}
export interface DeviceStateModule {
  listenDockOnlineStatus(arg0: DockOnlineStatusCallback): number;
  cancelListenDockOnlineStatus(arg0: number): void;
  listenDroneOnlineStatus(arg0: DroneOnlineStatusCallback): number;
  cancelListenDroneOnlineStatus(arg0: number): void;
}
export interface DiagnosisManagementModule {
  createSelfDiagnosis(arg0: CreateSelfDiagnosisParams, arg1: CreateSelfDiagnosisCallback): void;
  operateSelfDiagnosis(arg0: OperateSelfDiagnosisParams, arg1: OperateSelfDiagnosisCallback): void;
  getSelfDiagnosisReport(arg0: string, arg1: GetSelfDiagnosisReportCallback): void;
  getSelfDiagnosisReportList(arg0: GetSelfDiagnosisReportListParams, arg1: GetSelfDiagnosisReportListCallback): void;
}
export interface Dock {
  getLiveStream(arg0: LiveInfo): LiveModule | null;
  getLiveRecord(arg0: LiveInfo): LiveRecordModule | null;
  getLiveDeviceModule(): LiveDeviceModule | null;
  getDeployModule(): DeployModule | null;
  getDockControlModule(): DockControlModule | null;
  getDockOsdModule(): DockOsdModule | null;
  getRtkCalibrationModule(): RtkCalibrationModule | null;
  getNetworkTestModule(): NetworkTestModule | null;
  getDeviceDebugModule(): DeviceDebugModule | null;
  getDeviceStateModule(): DeviceStateModule | null;
  getDeviceHMSModule(): DeviceHMSModule | null;
}
export interface DockControlModule {
  changeDockCameraPosition(arg0: LiveInfo, arg1: DockCameraPosition, arg2: string, arg3: ResultCallbackWithError): void;
  listenDockAirConditionerStatusInfo(arg0: DockAirConditionerStatusInfoCallback): number;
  cancelListenDockAirConditionerStatusInfo(arg0: number): void;
  listenDockSupplementLightState(arg0: DockSupplementLightStateCallback): number;
  cancelListenDockSupplementLightState(arg0: number): void;
  setDockSupplementLightState(arg0: boolean, arg1: ResultCallbackWithError): void;
  setDockChargeState(arg0: boolean, arg1: ResultCallbackWithError): void;
  setDockCoverState(arg0: DockCoverMode, arg1: ResultCallbackWithError): void;
  setDockAirConditionerMode(arg0: number, arg1: ResultCallbackWithError): void;
}
export interface DockOsdModule {
  listenDockLocation(arg0: DockLocationCallback): number;
  cancelListenDockLocation(arg0: number): void;
  listenDroneInDock(arg0: DroneInDockCallback): number;
  cancelListenDroneInDock(arg0: number): void;
  listenDockCoverState(arg0: DockCoverStateCallback): number;
  cancelListenDockCoverState(arg0: number): void;
  listenDockMediaFileDetail(arg0: DockMediaFileDetailCallback): number;
  cancelListenDockMediaFileDetail(arg0: number): void;
  listenDockWirelessLink(arg0: DockWirelessLinkCallback): number;
  cancelListenDockWirelessLink(arg0: number): void;
  listenDockJobNumber(arg0: DockJobNumberCallback): number;
  cancelListenDockJobNumber(arg0: number): void;
  listenDockPowerState(arg0: DockPowerStateCallback): number;
  cancelListenDockPowerState(arg0: number): void;
  listenDockStorageState(arg0: DockStorageStateCallback): number;
  cancelListenDockStorageState(arg0: number): void;
  listenDockFirstPowerOnTime(arg0: DockFirstPowerOnTimeCallback): number;
  cancelListenDockFirstPowerOnTime(arg0: number): void;
  listenDockAccumulatedRunningTime(arg0: DockAccTimeCallback): number;
  cancelListenDockAccumulatedRunningTime(arg0: number): void;
  listenDockAlternateLandPoint(arg0: DockAlternateLandPointCallback): number;
  cancelListenDockAlternateLandPoint(arg0: number): void;
  listenDockPositionState(arg0: DockPositionStateCallback): number;
  cancelListenDockPositionState(arg0: number): void;
  listenDockActivationTime(arg0: DockActivationTimeCallback): number;
  cancelListenDockActivationTime(arg0: number): void;
  listenDockBatteryStoreMode(arg0: DockBatteryStoreModeCallback): number;
  cancelListenDockBatteryStoreMode(arg0: number): void;
  listenDockAlarmState(arg0: DockAlarmStateCallback): number;
  cancelListenDockAlarmState(arg0: number): void;
  listenDockDroneBatteryMaintenanceInfo(arg0: DockDroneBatteryMaintenanceInfoCallback): number;
  cancelListenDockDroneBatteryMaintenanceInfo(arg0: number): void;
  listenDockEmergencyStopState(arg0: DockEmergencyStopStateCallback): number;
  cancelListenDockEmergencyStopState(arg0: number): void;
  listenDockSilentMode(arg0: DockSilentModeCallback): number;
  cancelListenDockSilentMode(arg0: number): void;
  listenDockUserExperienceImprovement(arg0: DockUserExperienceImprovementCallback): number;
  cancelListenDockUserExperienceImprovement(arg0: number): void;
  listenDockDrcState(arg0: DockDrcStateCallback): number;
  cancelListenDockDrcState(arg0: number): void;
  listenDockPutterState(arg0: DockPutterStateCallback): number;
  cancelListenDockPutterState(arg0: number): void;
  listenDockRelativeAlternateLandPoint(arg0: DockRelativeAlternateLandPointCallback): number;
  cancelListenDockRelativeAlternateLandPoint(arg0: number): void;
  listenDockSelfConvergeCoordinate(arg0: DockSelfConvergeCoordinateCallback): number;
  cancelListenDockSelfConvergeCoordinate(arg0: number): void;
  listenDockFirmwareInfo(arg0: DockFirmwareInfoCallback): number;
  cancelListenDockFirmwareInfo(arg0: number): void;
  listenDockModeCode(arg0: DockModeCodeCallback): number;
  cancelListenDockModeCode(arg0: number): void;
  listenFlightTaskStepCode(arg0: FlightTaskStepCodeCallback): number;
  cancelListenFlightTaskStepCode(arg0: number): void;
  listenDockSubDevice(arg0: DockSubDeviceInfoListCallback): number;
  cancelListenDockSubDevice(arg0: number): void;
  listenDockNetworkState(arg0: DockNetworkStateCallback): number;
  cancelListenDockNetworkState(arg0: number): void;
  listenDockDroneChargeState(arg0: DockDroneChargeStateCallback): number;
  cancelListenDockDroneChargeState(arg0: number): void;
  listenDockMeteorologicalInfo(arg0: DockMeteorologicalInfoCallback): number;
  cancelListenDockMeteorologicalInfo(arg0: number): void;
  listenDockBackupBatteryInfo(arg0: DockBackupBatteryInfoCallback): number;
  cancelListenDockBackupBatteryInfo(arg0: number): void;
  listenDockMaintainStatusInfo(arg0: DockMaintainStatusInfoCallback): number;
  cancelListenDockMaintainStatusInfo(arg0: number): void;
  listenDockDongleInfos(arg0: DockDongleInfosCallback): number;
  cancelListenDockDongleInfos(arg0: number): void;
  listenDockAirConditionerMode(arg0: DockAirConditionerModeCallback): number;
  cancelListenDockAirConditionerMode(arg0: number): void;
}
export interface DrcModule {
  listenLinkStatus(arg0: LinkStatusCallback): number;
  cancelListenLinkStatus(arg0: number): void;
  connectDrcLink(arg0: ResultCallback): void;
  disconnectDrcLink(arg0: ResultCallback): void;
  drcRtcQualityTest(arg0: ResultCallbackWithError): void;
  listenDrcDelayInfo(arg0: DrcDelayInfoCallback): number;
  cancelListenDrcDelayInfo(arg0: number): void;
  listenDrcCountDownInfo(arg0: DrcCountDownInfoCallback): number;
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
  getCameraControlModule(): CameraControlModule | null;
  getPsdkControlModule(): PsdkControlModule | null;
  getDroneOsdModule(): DroneOsdModule | null;
  getFlyToPointModule(): FlyToPointModule | null;
  getInFlightWaylineModule(): InFlightWaylineModule | null;
  getPoiModule(): PoiModule | null;
  getFlightTaskControlModule(): FlightTaskControlModule | null;
  getDeviceStateModule(): DeviceStateModule | null;
  getDeviceHMSModule(): DeviceHMSModule | null;
  getDeviceDebugModule(): DeviceDebugModule | null;
  getAIBoxModule(): AIBoxModule | null;
}
export interface DroneOsdModule {
  listenAircraftPayloadsOsdInfo(arg0: AircraftPayloadsOsdInfoListCallback): number;
  cancelListenAircraftPayloadsOsdInfo(arg0: number): void;
  listenAircraftGear(arg0: AircraftGearCallback): number;
  cancelListenAircraftGear(arg0: number): void;
  listenAircraftHomeDistance(arg0: AircraftHomeDistanceCallback): number;
  cancelListenAircraftHomeDistance(arg0: number): void;
  listenAircraftPositionState(arg0: AircraftPositionStateCallback): number;
  cancelListenAircraftPositionState(arg0: number): void;
  listenAircraftControlSource(arg0: AircraftControlSourceCallback): number;
  cancelListenAircraftControlSource(arg0: number): void;
  listenAircraftLimitsInfo(arg0: AircraftLimitsInfoCallback): number;
  cancelListenAircraftLimitsInfo(arg0: number): void;
  listenAircraftBatteryWarningThresholds(arg0: AircraftBatteryWarningThresholdsCallback): number;
  cancelListenAircraftBatteryWarningThresholds(arg0: number): void;
  listenAircraftFirmwareStatus(arg0: AircraftFirmwareStatusCallback): number;
  cancelListenAircraftFirmwareStatus(arg0: number): void;
  listenAircraftCurrentRthMode(arg0: AircraftCurrentRthModeCallback): number;
  cancelListenAircraftCurrentRthMode(arg0: number): void;
  listenAircraftTotalFlightInfo(arg0: AircraftTotalFlightInfoCallback): number;
  cancelListenAircraftTotalFlightInfo(arg0: number): void;
  listenAircraftActivationTime(arg0: AircraftActivationTimeCallback): number;
  cancelListenAircraftActivationTime(arg0: number): void;
  listenAircraftMaintainStatusInfo(arg0: AircraftMaintainStatusInfoCallback): number;
  cancelListenAircraftMaintainStatusInfo(arg0: number): void;
  listenAircraftNightLightsState(arg0: AircraftNightLightsStateCallback): number;
  cancelListenAircraftNightLightsState(arg0: number): void;
  listenAircraftObstacleAvoidanceState(arg0: AircraftObstacleAvoidanceStateCallback): number;
  cancelListenAircraftObstacleAvoidanceState(arg0: number): void;
  listenAircraftStorageInfo(arg0: AircraftStorageInfoCallback): number;
  cancelListenAircraftStorageInfo(arg0: number): void;
  listenAircraftTrackId(arg0: AircraftTrackIdCallback): number;
  cancelListenAircraftTrackId(arg0: number): void;
  listenAircraftComplianceInfo(arg0: AircraftComplianceInfoCallback): number;
  cancelListenAircraftComplianceInfo(arg0: number): void;
  listenAircraftPayloadsCamerasList(arg0: AircraftPayloadsCamerasListCallback): number;
  cancelListenAircraftPayloadsCamerasList(arg0: number): void;
  listenAircraftRcLostAction(arg0: AircraftRcLostActionCallback): number;
  cancelListenAircraftRcLostAction(arg0: number): void;
  listenAircraftRthInfo(arg0: AircraftRthInfoCallback): number;
  cancelListenAircraftRthInfo(arg0: number): void;
  listenAircraftHomeGeographicalInfo(arg0: AircraftHomeGeographicalInfoCallback): number;
  cancelListenAircraftHomeGeographicalInfo(arg0: number): void;
  listenAircraftBatteryInfo(arg0: AircraftBatteryInfoCallback): number;
  cancelListenAircraftBatteryInfo(arg0: number): void;
  listenAircraftAttitude(arg0: AircraftAttitudeCallback): number;
  cancelListenAircraftAttitude(arg0: number): void;
  listenAircraftLocation(arg0: AircraftLocationCallback): number;
  cancelListenAircraftLocation(arg0: number): void;
  listenAircraftModeCode(arg0: AircraftModeCodeCallback): number;
  cancelListenAircraftModeCode(arg0: number): void;
  listenAircraftWindSpeed(arg0: AircraftWindSpeedCallback): number;
  cancelListenAircraftWindSpeed(arg0: number): void;
  listenFlightTasksException(arg0: FlightTaskExceptionCallback): number;
  cancelListenFlightTasksException(arg0: number): void;
  listenAircraftControlCode(arg0: AircraftControlCodeCallback): number;
  cancelListenAircraftControlCode(arg0: number): void;
  listenAircraftSpeed(arg0: AircraftSpeedCallback): number;
  cancelListenAircraftSpeed(arg0: number): void;
  listenAircraftPayloadsCameraLiveviewWorldRegion(arg0: AircraftPayloadsCameraLiveviewWorldRegionCallback): number;
  cancelListenAircraftPayloadsCameraLiveviewWorldRegion(arg0: number): void;
  listenAircraftPayloadsGimbalAttitude(arg0: AircraftPayloadsGimbalAttitudeCallback): number;
  cancelListenAircraftPayloadsGimbalAttitude(arg0: number): void;
  listenAircraftPayloadsList(arg0: AircraftPayloadsListCallback): number;
  cancelListenAircraftPayloadsList(arg0: number): void;
  listenControlRightsCloudControlStatus(arg0: ControlRightsCloudControlStatusCallback): number;
  cancelListenControlRightsCloudControlStatus(arg0: number): void;
  listenControlRightsDeviceControlStatus(arg0: ControlRightsDeviceControlStatusCallback): number;
  cancelListenControlRightsDeviceControlStatus(arg0: number): void;
  listenFlightTasksMediaFileDisplayAvailable(arg0: FlightTasksMediaFileDisplayAvailableCallback): number;
  cancelListenFlightTasksMediaFileDisplayAvailable(arg0: number): void;
  listenHsiInfo(arg0: HsiInfoCallback): number;
  cancelListenHsiInfo(arg0: number): void;
  listenDroneModeCodeReason(arg0: DroneModeCodeReasonCallback): number;
  cancelListenDroneModeCodeReason(arg0: number): void;
  listenDroneDongleInfos(arg0: DroneDongleInfosCallback): number;
  cancelListenDroneDongleInfos(arg0: number): void;
  listenDroneFlysafeDatabaseVersion(arg0: DroneFlysafeDatabaseVersionCallback): number;
  cancelListenDroneFlysafeDatabaseVersion(arg0: number): void;
  listenDroneWpmzVersion(arg0: DroneWpmzVersionCallback): number;
  cancelListenDroneWpmzVersion(arg0: number): void;
}
export interface ElementModule {
  createElement(arg0: ElementCreateParams, arg1: ElementCreateElementCallback): void;
  updateElement(arg0: ElementUpdateParams, arg1: ElementUpdateElementCallback): void;
  listElementHierarchy(arg0: ElementListHierarchyParams, arg1: ElementListHierarchyCallback): void;
  setElementVisibility(arg0: ElementSetVisibilityParams, arg1: ElementSetVisibilityCallback): void;
  deleteElement(arg0: ElementDeleteParams, arg1: ElementDeleteElementCallback): void;
  listenElementCreate(arg0: ElementCreateCallback): number;
  cancelListenElementCreate(arg0: number): void;
  listenElementUpdate(arg0: ElementUpdateCallback): number;
  cancelListenElementUpdate(arg0: number): void;
  listenElementDelete(arg0: ElementDeleteCallback): number;
  cancelListenElementDelete(arg0: number): void;
}
export interface FirmwareManageModule {
  getLatestFirmwareReleaseNote(arg0: (string)[], arg1: string, arg2: GetLatestFirmwareReleaseNoteCallback): void;
  invokeFirmwareUpgrade(arg0: FirmwareUpgradeParam, arg1: InvokeFirmwareUpgradeCallback): void;
  queryFirmwareUpgradeProgress(arg0: string, arg1: QueryFirmwareUpgradeProgressCallback): void;
  uploadFirmwareFile(arg0: string, arg1: UploadFirmwareFileCallback): void;
  releaseFirmware(arg0: string, arg1: ReleaseFirmwareCallback): void;
  unReleaseFirmware(arg0: string, arg1: UnReleaseFirmwareCallback): void;
  deleteFirmware(arg0: string, arg1: DeleteFirmwareCallback): void;
  queryFirmwareList(arg0: number, arg1: number, arg2: QueryFirmwareListCallback): void;
  queryFirmwareCompatibilityConfig(arg0: QueryFirmwareCompatibilityConfigCallback): void;
  checkFirmwareStatus(arg0: (string)[], arg1: (string)[], arg2: CheckFirmwareStatusCallback): void;
  submitFirmwareInfo(arg0: FirmwareInfoParam, arg1: SubmitFirmwareInfoCallback): void;
  listenDeviceOtaProgress(arg0: string, arg1: DeviceOtaProgressCallback): number;
  cancelListenDeviceOtaProgress(arg0: number): void;
}
export interface FlashLedModule {
  getFlashLedConfigList(arg0: FlashLedConfigListCallback): void;
  createFlashLedConfig(arg0: FlashLedConfigParams, arg1: FlashLedConfigCallback): void;
  updateFlashLedConfig(arg0: string, arg1: FlashLedConfigParams, arg2: FlashLedConfigCallback): void;
  deleteFlashLedConfig(arg0: string, arg1: ResultCallbackWithError): void;
}
export interface FlightControlModule {
  drcEmergencyStop(arg0: ResultCallbackWithError): void;
  drcEmergencyLanding(arg0: ResultCallbackWithError): void;
  drcForceLanding(arg0: ResultCallbackWithError): void;
  returnHome(arg0: ResultCallbackWithError): void;
  returnHomeCancel(arg0: ResultCallbackWithError): void;
  drcSendStickControl(arg0: StickControlData): void;
  drcSetDroneHover(arg0: number, arg1: ResultCallbackWithError): void;
  drcSetFollowMouseParameter(arg0: number, arg1: ResultCallbackWithError): void;
  drcSetNightLightsState(arg0: number, arg1: ResultCallbackWithError): void;
  drcSetStealthState(arg0: number, arg1: ResultCallbackWithError): void;
  drcOpenParachute(arg0: number, arg1: ResultCallbackWithError): void;
  drcSetFlashLed(arg0: FlashLedParams, arg1: ResultCallbackWithError): void;
  drcCameraLookAt(arg0: CameraLookAtParams, arg1: ResultCallbackWithError): void;
  listenDrcOsdInfo(arg0: DrcOsdInfoCallback): number;
  cancelListenDrcOsdInfo(arg0: number): void;
  listenDrcBatteriesInfo(arg0: DrcBatteriesInfoCallback): number;
  cancelListenDrcBatteriesInfo(arg0: number): void;
  listenDrcParachuteInfo(arg0: DrcParachuteInfoCallback): number;
  cancelListenDrcParachuteInfo(arg0: number): void;
  listenDrcFlashLed(arg0: FlashLedStateInfoCallback): number;
  cancelListenDrcFlashLed(arg0: number): void;
}
export interface FlightSettingsModule {
  setFlightSmartPlanMode(arg0: number, arg1: SetFlightSmartPlanModeCallback): void;
  setOutOfControlAction(arg0: string, arg1: SetOutOfControlActionCallback): void;
  setFlightTaskHeight(arg0: number, arg1: SetFlightTaskHeightCallback): void;
  setRthAltitude(arg0: number, arg1: SetRthAltitudeCallback): void;
  setAirTransferEnable(arg0: boolean, arg1: SetAirTransferEnableCallback): void;
}
export interface FlightTaskControlModule {
  pause(arg0: ResultCallbackWithError): void;
  resume(arg0: ResultCallbackWithError): void;
  listenWaylineTaskEvent(arg0: WaylineTaskEventCallback): number;
  cancelListenWaylineTaskEvent(arg0: number): void;
  getModule(): FlightTaskControlModule;
}
export interface FlightTaskModule {
  getFlightTaskList(arg0: FlightTaskListParams, arg1: GetFlightTaskListCallback): void;
  getCommandTaskList(arg0: GetCommandTaskListParams, arg1: GetCommandTaskListCallback): void;
  getFlightTaskTrack(arg0: GetFlightTaskTrackParams, arg1: GetFlightTaskTrackCallback): void;
  createFlightTask(arg0: CreateTaskReq, arg1: CreateFlightTaskCallback): void;
  getFlightTaskDetail(arg0: string, arg1: GetFlightTaskDetailCallback): void;
  editFlightTask(arg0: string, arg1: EditTaskReq, arg2: CreateFlightTaskCallback): void;
  deleteFlightTask(arg0: string, arg1: ResultCallbackWithError): void;
  updateFlightTaskStatus(arg0: string, arg1: number, arg2: ResultCallbackWithError): void;
  batchUpdateFlightTaskStatus(arg0: BatchUpdateStatusReq, arg1: ResultCallbackWithError): void;
  getDeviceRecommendation(arg0: DeviceRecommendationReq, arg1: GetDeviceRecommendationCallback): void;
  getDeviceTcas(arg0: (string)[], arg1: GetDeviceTcasCallback): void;
  updateDeviceTcas(arg0: (string)[], arg1: ResultCallbackWithError): void;
  startRoaming(arg0: StartRoamingParams, arg1: StartRoamingCallback): void;
  setRoamingStationSn(arg0: SetRoamingStationSnParams, arg1: SetRoamingStationSnCallback): void;
  getInFlightTaskTopos(arg0: (string)[], arg1: GetInFlightTaskToposCallback): void;
  listenTaskTopoChanged(arg0: TaskTopoChangedCallback): number;
  cancelListenTaskTopoChanged(arg0: number): void;
}
export interface FlightTaskRecordModule {
  exportFlightRecords(arg0: string, arg1: ExportFlightRecordsRequestParams, arg2: ExportFlightRecordsCallback): void;
  exportFlightRecords(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: (string)[], arg6: (string)[], arg7: (string)[], arg8: ExportFlightRecordsCallback): void;
  getExportFlightRecordsProgress(arg0: string, arg1: number, arg2: string, arg3: number, arg4: number, arg5: string, arg6: GetExportFlightRecordsProgressCallback): void;
}
export interface FlyToPointModule {
  start(arg0: FlyToPointParams, arg1: FlyToPointStartCallback): void;
  drcStop(arg0: ResultCallbackWithError): void;
  subscribeFlyToDroneSelfPlanPath(arg0: FlyToDroneSelfPlanPathCallback): number;
  unSubscribeFlyToDroneSelfPlanPath(arg0: number): void;
  subscribeFlyToPointProgress(arg0: FlyToPointProgressCallback): number;
  unSubscribeFlyToPointProgress(arg0: number): void;
  updateTargetPoints(arg0: FlyToUpdateTargetPointsParams, arg1: ResultCallbackWithError): void;
  listenFlyToTaskEvent(arg0: FlyToTaskEventCallback): number;
  cancelListenFlyToTaskEvent(arg0: number): void;
}
export interface HMSModule {
  queryHistoryHMSData(arg0: HistoryHmsDataParam, arg1: QueryHistoryHMSDataCallback): void;
}
export interface InFlightWaylineModule {
  createInFlightWaylineTask(arg0: CreateInFlightWaylineTaskParams, arg1: CreateInFlightWaylineTaskCallback): void;
  controlInFlightWaylineTask(arg0: InFlightWaylineControlAction, arg1: InFlightWaylineControlCallback): void;
  getActiveInFlightWaylineTask(arg0: GetActiveInFlightWaylineTaskCallback): void;
  listenInFlightWaylineProgress(arg0: InFlightWaylineProgressCallback): number;
  cancelListenInFlightWaylineProgress(arg0: number): void;
}
export interface LiveDeviceModule {
  listenLiveAvailableRange(arg0: LiveAvailableRangeCallback): number;
  cancelListenLiveAvailableRange(arg0: number): void;
  getAudienceCount(arg0: AudienceCountGroup, arg1: GetAudienceCountCallback): void;
  listenDockLiveStatus(arg0: DockLiveStatusCallback): number;
  cancelListenDockLiveStatus(arg0: number): void;
  listenDockLiveCapacity(arg0: DockLiveCapacityCallback): number;
  cancelListenDockLiveCapacity(arg0: number): void;
}
export interface LiveModule {
  start(arg0: ResultCallbackWithError): void;
  startWithURL(arg0: LiveStreamStartCallback): void;
  stop(): void;
  stopWithURL(arg0: ResultCallbackWithError): void;
  subscribeLiveStream(arg0: LiveStreamCallback): number;
  unSubscribeLiveStream(arg0: number): void;
  subscribeAiSeiInfo(arg0: AiSeiInfoCallback): number;
  unSubscribeAiSeiInfo(arg0: number): void;
  subscribeArSeiInfo(arg0: ArSeiInfoCallback): number;
  unSubscribeArSeiInfo(arg0: number): void;
  subscribeFovSeiInfo(arg0: FovSeiInfoCallback): number;
  unSubscribeFovSeiInfo(arg0: number): void;
  subscribeAssistantSeiInfo(arg0: AssistantSeiInfoCallback): number;
  unSubscribeAssistantSeiInfo(arg0: number): void;
  subscribeEisSeiInfo(arg0: EisSeiInfoCallback): number;
  unSubscribeEisSeiInfo(arg0: number): void;
  setLiveQuality(arg0: LiveQualitySettingParams, arg1: ResultCallbackWithError): void;
}
export interface LiveRecordModule {
  startLiveRecord(arg0: string, arg1: ResultCallbackWithError): void;
  stopLiveRecord(arg0: ResultCallbackWithError): void;
  getDeviceLiveRecords(arg0: string, arg1: GetDeviceLiveRecordsCallback): void;
  listenRecordState(arg0: LiveRecordStateCallback): number;
  cancelListenRecordState(arg0: number): void;
}
export interface LiveSyncModule {
  createLiveSync(arg0: LiveSyncCreateParams, arg1: CreateLiveSyncCallback): void;
  deleteLiveSync(arg0: string, arg1: DeleteLiveSyncCallback): void;
  updateLiveSync(arg0: LiveSyncUpdateParams, arg1: UpdateLiveSyncCallback): void;
  getLiveSyncList(arg0: LiveSyncListParams, arg1: GetLiveSyncListCallback): void;
  getLiveSyncDevicesV2(arg0: GetLiveSyncDevicesV2Callback): void;
  getLiveSyncSummary(arg0: GetLiveSyncSummaryCallback): void;
}
export interface LogManagementModule {
  queryDeviceLogList(arg0: string, arg1: (number)[], arg2: QueryDeviceLogListCallback): void;
  createDeviceLogReport(arg0: CreateDeviceLogReportRequestParam, arg1: CreateDeviceLogReportCallback): void;
  logReportList(arg0: string, arg1: number, arg2: number, arg3: LogReportListCallback): void;
  logReportOperation(arg0: string, arg1: string, arg2: LogReportOperationCallback): void;
  uploadLogAppendFile(arg0: string, arg1: UploadLogAppendFileCallback): void;
  listenDeviceFileUploadProgress(arg0: string, arg1: DeviceFileUploadProgressCallback): number;
  cancelListenDeviceFileUploadProgress(arg0: number): void;
}
export interface MaintenanceManagementModule {
  getRepairConfigs(arg0: GetDeviceRepairConfigParams, arg1: GetRepairConfigsCallback): void;
  createMaintenanceOrder(arg0: CreateMaintenanceOrderParams, arg1: CreateMaintenanceOrderCallback): void;
  getMaintenanceOrderDetail(arg0: string, arg1: GetMaintenanceOrderDetailCallback): void;
  getMaintenanceOrdersList(arg0: GetMaintenanceOrdersListParams, arg1: GetMaintenanceOrdersListCallback): void;
}
export interface MediaServiceModule {
  getMediaFilesList(arg0: GetMediaFilesListParams, arg1: GetMediaFilesListCallback): void;
  getMediaFilesList(arg0: string, arg1: number, arg2: number, arg3: (string)[], arg4: string, arg5: bigint | number, arg6: bigint | number, arg7: GetMediaFilesListCallback): void;
  deleteMediaFiles(arg0: (bigint | number)[], arg1: ResultCallbackWithError): void;
  getMediaFilesDownloadURL(arg0: bigint | number, arg1: GetMediaFilesDownloadUrlCallback): void;
  getMediaFilesDownloadURL(arg0: (string)[], arg1: GetMediaFilesDownloadUrlListCallback): void;
  listenMediaFilePostProcessMessage(arg0: string, arg1: MediaFilePostProcessCallback): number;
  cancelListenMediaFilePostProcessMessage(arg0: number): void;
  listenMediaFileDeviceUploadMessage(arg0: string, arg1: MediaFileDeviceUploadCallback): number;
  cancelListenMediaFileDeviceUploadMessage(arg0: number): void;
  getMediaUploadSts(arg0: GetMediaUploadStsParams, arg1: GetMediaUploadStsCallback): void;
  mediaUploadCallback(arg0: MediaUploadCallbackParams, arg1: MediaUploadCallbackCallback): void;
  uploadGeoMediaFile(arg0: UploadGeoMediaFileParams, arg1: UploadGeoMediaFileCallback): void;
  getMediaFileDetailById(arg0: number, arg1: GetMediaFileDetailByIdCallback): void;
}
export interface NetworkTestModule {
  startNetworkTest(arg0: StartNetworkTestCallback): void;
  stopNetworkTest(arg0: StopNetworkTestCallback): void;
  getNetworkTestProgress(arg0: GetNetworkTestProgressCallback): void;
  subscribeNetworkTestProgress(arg0: SubscribeNetworkTestProgressCallback): number;
  unsubscribeNetworkTestProgress(arg0: number): void;
}
export interface OnboardAiModule {
  listenAIDataInfo(arg0: AiDataInfoCallback): number;
  cancelListenAIDataInfo(arg0: number): void;
  AIIdentifySet(arg0: Native.AiIdentifySetParam, arg1: ResultCallback): void;
  AIIdentifyFilterSet(arg0: Native.AiIdentifyFilterSetParam, arg1: ResultCallback): void;
  AIIdentifyScoreSet(arg0: Native.AiIdentifyScoreSetParam, arg1: ResultCallback): void;
  AIIdentifyScoreModeSet(arg0: Native.AiIdentifyScoreModeSetParam, arg1: ResultCallback): void;
  AIIdentifyScoreReset(arg0: Native.AiIdentifyScoreResetParam, arg1: ResultCallback): void;
  AIModelSelect(arg0: Native.AiModelSelectParam, arg1: ResultCallback): void;
  DrcAISpotlightZoomSet(arg0: number, arg1: ResultCallbackWithError): void;
  DrcAISpotlightZoomSelect(arg0: AiSpotlightZoomSelectParams, arg1: ResultCallbackWithError): void;
  DrcAISpotlightZoomConfirm(arg0: ResultCallbackWithError): void;
  DrcAISpotlightZoomStop(arg0: ResultCallbackWithError): void;
  DrcAISpotlightZoomTrack(arg0: number, arg1: ResultCallbackWithError): void;
  DrcAIAlarmStart(arg0: AiAlarmStartParams, arg1: ResultCallbackWithError): void;
  DrcAIAlarmStop(arg0: ResultCallbackWithError): void;
  DrcAIModelsConfig(arg0: AiModelsConfigParams, arg1: ResultCallbackWithError): void;
  listenDrcAIAlarmState(arg0: AiAlarmStateCallback): number;
  cancelListenDrcAIAlarmState(arg0: number): void;
}
export interface PoiModule {
  enter(arg0: POIEnterParams, arg1: PoiEnterCallback): void;
  exit(arg0: ResultCallback): void;
  updateSpeed(arg0: number, arg1: ResultCallback): void;
  getTask(arg0: PoiGetTaskCallback): void;
  listenPoiTaskEvent(arg0: PoiTaskEventCallback): number;
  cancelListenPoiTaskEvent(arg0: number): void;
  listenFlightPoiProgress(arg0: FlightPoiProgressCallback): number;
  cancelListenFlightPoiProgress(arg0: number): void;
}
export interface PsdkControlModule {
  listenDrcPsdkDeviceList(arg0: PsdkDeviceListCallback): number;
  cancelListenDrcPsdkDeviceList(arg0: number): void;
  listenDrcPsdkStateSummaryInfo(arg0: number, arg1: PsdkStateSummaryInfoCallback): number;
  cancelListenDrcPsdkStateSummaryInfo(arg0: number, arg1: number): void;
  listenDrcPsdkStateSpeakerInfo(arg0: number, arg1: PsdkStateSpeakerInfoCallback): number;
  cancelListenDrcPsdkStateSpeakerInfo(arg0: number, arg1: number): void;
  listenDrcPsdkStateSearchlightInfo(arg0: number, arg1: PsdkStateSearchlightInfoCallback): number;
  cancelListenDrcPsdkStateSearchlightInfo(arg0: number, arg1: number): void;
  searchlightModeSet(arg0: number, arg1: number, arg2: ResultCallbackWithError): void;
  searchlightBrightnessSet(arg0: number, arg1: number, arg2: ResultCallbackWithError): void;
  searchlightCalibration(arg0: number, arg1: ResultCallbackWithError): void;
  searchlightFineTuningSet(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: ResultCallbackWithError): void;
  searchlightWideFieldModeSet(arg0: number, arg1: number, arg2: ResultCallbackWithError): void;
  searchlightLightGimbalControlSet(arg0: number, arg1: number, arg2: ResultCallbackWithError): void;
  searchlightTypeSet(arg0: number, arg1: number, arg2: ResultCallbackWithError): void;
  listenDrcPsdkSpeakerPlayProgressInfo(arg0: number, arg1: PsdkSpeakerPlayProgressInfoCallback): number;
  cancelListenDrcPsdkSpeakerPlayProgressInfo(arg0: number, arg1: number): void;
  listenDrcPsdkFloatingWindowTextInfo(arg0: number, arg1: PsdkFloatingWindowTextInfoCallback): number;
  cancelListenDrcPsdkFloatingWindowTextInfo(arg0: number, arg1: number): void;
  speakerAudioPlayStart(arg0: number, arg1: PsdkSpeakerAudioPlayInfo, arg2: ResultCallbackWithError): void;
  speakerTTSPlayStart(arg0: number, arg1: PsdkSpeakerTTSPlayInfo, arg2: ResultCallbackWithError): void;
  speakerReplay(arg0: number, arg1: ResultCallbackWithError): void;
  speakerPlayStop(arg0: number, arg1: ResultCallbackWithError): void;
  speakerPlayVolumeSet(arg0: number, arg1: number, arg2: ResultCallbackWithError): void;
  speakerPlayModeSet(arg0: number, arg1: MegaphonePlayMode, arg2: ResultCallbackWithError): void;
  speakerTTSSet(arg0: number, arg1: PsdkSpeakerTTSconfig, arg2: ResultCallbackWithError): void;
  widgetValueSet(arg0: number, arg1: number, arg2: number, arg3: ResultCallbackWithError): void;
  widgetInputBoxTextSet(arg0: number, arg1: string, arg2: ResultCallbackWithError): void;
  listenPsdkSpeakerAudioPlayStartProgress(arg0: PsdkSpeakerAudioPlayStartProgressCallback): number;
  cancelListenPsdkSpeakerAudioPlayStartProgress(arg0: number): void;
  listenPsdkSpeakerTtsPlayStartProgress(arg0: PsdkSpeakerTtsPlayStartProgressCallback): number;
  cancelListenPsdkSpeakerTtsPlayStartProgress(arg0: number): void;
  listenDronePsdkUiResource(arg0: DronePsdkUiResourceCallback): number;
  cancelListenDronePsdkUiResource(arg0: number): void;
}
export interface PsdkResourceModule {
  getPsdkSpeakerResourceList(arg0: PsdkSpeakerResourceListCallback): void;
  createPsdkSpeakerResource(arg0: CreatePsdkSpeakerResourceParams, arg1: PsdkSpeakerResourceCallback): void;
  editPsdkSpeakerResource(arg0: EditPsdkSpeakerResourceParams, arg1: PsdkSpeakerResourceCallback): void;
  deletePsdkSpeakerResource(arg0: number, arg1: ResultCallbackWithError): void;
  getSTS(arg0: STSInfoCallback): void;
  uploadSpeakerAudioFile(arg0: string, arg1: STSInfo, arg2: ResultCallbackWithError): void;
  getPsdkWidgetResources(arg0: GetPsdkWidgetResourceParams, arg1: PsdkWidgetResourceListCallback): void;
}
export interface PullStreamModule {
  start(arg0: string, arg1: PullStreamStartCallback): void;
  stop(): void;
  subscribeStream(arg0: PullStreamDataCallback): number;
  unSubscribeStream(arg0: number): void;
  setErrorCallback(arg0: PullStreamErrorCallback): void;
  isStreaming(): boolean;
  getStreamInfo(): string;
}
export interface Relay {
  getSn(): string;
  getRelayControlModule(): RelayControlModule | null;
  getRtkCalibrationModule(): RtkCalibrationModule | null;
}
export interface RelayControlModule {
  setRelayBroadcastHide(arg0: boolean, arg1: SetRelayBroadcastHideCallback): void;
  setRelaySSID(arg0: string, arg1: SetRelaySSIDCallback): void;
  setRelayPassword(arg0: string, arg1: SetRelayPasswordCallback): void;
  setRelaySearchMode(arg0: number, arg1: SetRelaySearchModeCallback): void;
  setRelayOccupiedStatus(arg0: number, arg1: SetRelayOccupiedStatusCallback): void;
  relayReboot(arg0: RelayRebootCallback): void;
  relayDisconnect(arg0: RelayDisconnectCallback): void;
}
export interface RemoteController {
  getSn(): string;
}
export interface RtkCalibrationModule {
  calibrationByNetwork(arg0: NetworkRtkCalibrationParams, arg1: RtkCalibrationCallback): void;
  calibrationByManual(arg0: ManulRtkCalibrationParams, arg1: RtkCalibrationCallback): void;
  subscribeCalibrationProgress(arg0: SubscribeCalibrationProgressCallback): number;
  unsubscribeCalibrationProgress(arg0: number): void;
}
export interface SafetyServiceModule {
  searchSignalMaps(arg0: (string)[], arg1: (string)[], arg2: SearchSignalMapsCallback): void;
  createCustomizedFlightAreas(arg0: CreateCustomizedFlightAreasParams, arg1: CreateCustomizedFlightAreasCallback): void;
  getCustomizedFlightAreas(arg0: GetCustomizedFlightAreasParams, arg1: GetCustomizedFlightAreasCallback): void;
  getCustomizedFlightAreas(arg0: string, arg1: string, arg2: string, arg3: (string)[], arg4: number, arg5: number, arg6: GetCustomizedFlightAreasCallback): void;
  updateCustomizedFlightAreas(arg0: UpdateCustomizedFlightAreasParams, arg1: UpdateCustomizedFlightAreasCallback): void;
  deleteCustomizedFlightAreas(arg0: string, arg1: ResultCallbackWithError): void;
  syncCustomizedFlightAreas(arg0: (string)[], arg1: SyncCustomizedFlightAreasCallback): void;
  getFlightAreasSyncStatus(arg0: (string)[], arg1: GetFlightAreasSyncStatusCallback): void;
  getOfflineMapsModelInfo(arg0: GetOfflineMapsModelInfoCallback): void;
  updateOfflineMapsModelInfo(arg0: UpdateOfflineMapsParams, arg1: ResultCallbackWithError): void;
  cancelOfflineMapsModelInfo(arg0: ResultCallbackWithError): void;
  setOfflineMaps(arg0: SetOfflineMapsParams, arg1: ResultCallbackWithError): void;
  syncOfflineMaps(arg0: (string)[], arg1: SyncOfflineMapsCallback): void;
  getOfflineMapsSyncStatus(arg0: (string)[], arg1: GetOfflineMapsSyncStatusCallback): void;
  getUnlockLicenseList(arg0: QueryDeviceUnlockLicenseListParam, arg1: GetUnlockLicenseListCallback): void;
  switchUnlockLicense(arg0: SwitchUnlockLicenseParam, arg1: SwitchUnlockLicenseCallback): void;
  checkUnlockLicense(arg0: CheckUnlockLicenseParam, arg1: CheckUnlockLicenseCallback): void;
  submitUnlockLicense(arg0: ImportUnlockLicenseParam, arg1: SubmitUnlockLicenseCallback): void;
  clearDeviceUnlockLicense(arg0: string, arg1: ClearDeviceUnlockLicenseCallback): void;
  uploadUnlockLicenseFile(arg0: string, arg1: UploadUnlockLicenseFileCallback): void;
  listenDroneOfflineMapEnable(arg0: string, arg1: DroneOfflineMapEnableCallback): number;
  cancelListenDroneOfflineMapEnable(arg0: number): void;
}
export interface Stream {
  getCustomSEIModule(): CustomSEIModule | null;
  getPullStreamModule(arg0: string): PullStreamModule | null;
}
export interface TakeoffModule {
  takeoff(arg0: TakeoffParams, arg1: TakeoffCallback): void;
  listenCommandTaskEvent(arg0: CommandTaskEventCallback): number;
  cancelListenCommandTaskEvent(arg0: number): void;
  listenDroneCommanderFlightMode(arg0: DroneCommanderFlightModeCallback): number;
  cancelListenDroneCommanderFlightMode(arg0: number): void;
  listenDroneCurrentCommanderFlightMode(arg0: DroneCurrentCommanderFlightModeCallback): number;
  cancelListenDroneCurrentCommanderFlightMode(arg0: number): void;
  listenDroneCommanderModeLostAction(arg0: DroneCommanderModeLostActionCallback): number;
  cancelListenDroneCommanderModeLostAction(arg0: number): void;
}
export interface TerraBuildModule {
  getReconstructionSettings(arg0: string, arg1: TerraBuildGetReconstructionSettingsCallback): void;
  getQualityReport(arg0: string, arg1: string, arg2: string, arg3: TerraBuildGetQualityReportCallback): void;
  getModelFileList(arg0: number, arg1: number, arg2: TerraBuildGetModelFileListCallback): void;
  getModelFileUrl(arg0: number, arg1: number, arg2: TerraBuildGetModelFileUrlCallback): void;
  retryReconstruction(arg0: string, arg1: ResultCallback): void;
  stopReconstruction(arg0: string, arg1: ResultCallback): void;
  getSfmResult(arg0: string, arg1: TerraBuildGetSfmResultCallback): void;
  createReconstruction(arg0: TerraBuildCreateReconstructionParams, arg1: TerraBuildCreateReconstructionCallback): void;
  createReconstruction(arg0: TerraBuildCreateReconstructionParams, arg1: TerraBuildCreateReconstructionCallback): void;
  deleteModelFile(arg0: number, arg1: ResultCallback): void;
  batchDeleteModelFiles(arg0: (number)[], arg1: ResultCallback): void;
  createPanorama(arg0: string, arg1: (string)[], arg2: string, arg3: boolean, arg4: TerraBuildCreatePanoramaCallback): void;
  getReconstructionImages(arg0: string, arg1: TerraBuildGetReconstructionImagesCallback): void;
  listenReconstructionStatusChanged(arg0: TerraBuildReconstructionStatusChangedCallback): number;
  cancelListenReconstructionStatusChanged(arg0: number): void;
  uploadModelCallback(arg0: TerraUploadCallbackParams, arg1: TerraUploadCallbackCallback): void;
  renameModel(arg0: number, arg1: TerraRenameModelParams, arg2: TerraRenameModelCallback): void;
  showModelOnMap(arg0: TerraShowOnMapParams, arg1: TerraShowOnMapCallback): void;
  listenTerraUnzipProgress(arg0: TerraUnzipProgressCallback): number;
  cancelListenTerraUnzipProgress(arg0: number): void;
  listenTerraModelStatusChanged(arg0: TerraModelStatusChangedCallback): number;
  cancelListenTerraModelStatusChanged(arg0: number): void;
  listenTerraFileShowOnMap(arg0: TerraFileShowOnMapCallback): number;
  cancelListenTerraFileShowOnMap(arg0: number): void;
  getModelDetail(arg0: number, arg1: TerraGetModelDetailCallback): void;
  setLasWkt(arg0: TerraSetLasWktParams, arg1: TerraSetLasWktCallback): void;
  listenTerraMediaFileHideOnMap(arg0: TerraMediaFileHideOnMapCallback): number;
  cancelListenTerraMediaFileHideOnMap(arg0: number): void;
  listenTerraMediaFileShowOnMap(arg0: TerraMediaFileShowOnMapCallback): number;
  cancelListenTerraMediaFileShowOnMap(arg0: number): void;
}
export interface TestFlightModule {
  generateTryFlightWayline(arg0: string, arg1: Native.GenerateTryFlightWaylineParams, arg2: GenerateTryFlightWaylineCallback): void;
  createTestFlightTask(arg0: string, arg1: Native.CreateTestFlightTaskParams, arg2: CreateTestFlightTaskCallback): void;
}
export interface WaylineManageModule {
  getWaylineList(arg0: GetWaylineListParam, arg1: GetWaylineListCallback): void;
  getWaylineDetail(arg0: string, arg1: GetWaylineDetailCallback): void;
  batchDeleteWaylines(arg0: (string)[], arg1: BatchDeleteWaylinesCallback): void;
  updateWayline(arg0: string, arg1: string, arg2: UpdateWaylineCallback): void;
  submitWaylineInfo(arg0: SubmitWaylineInfoParam, arg1: SubmitWaylineInfoCallback): void;
  batchDownloadWaylines(arg0: BatchDownloadWaylinesParam, arg1: BatchDownloadWaylinesCallback): void;
  duplicateWayline(arg0: DuplicateWaylineParam, arg1: DuplicateWaylineCallback): void;
  listenImportWaylineEvent(arg0: ImportWaylineEventCallback): number;
  cancelListenImportWaylineEvent(arg0: number): void;
  copyWayline(arg0: CopyWaylineParam, arg1: CopyWaylineCallback): void;
  concatWayline(arg0: ConcatWaylineParam, arg1: ConcatWaylineCallback): void;
  importKmz(arg0: (string)[], arg1: ImportKmzCallback): void;
  getWaylineEditorSts(arg0: GetWaylineEditorStsParams, arg1: GetWaylineEditorStsCallback): void;
}
export interface Workspace {
  getFlightTaskModule(): FlightTaskModule | null;
  getMediaServiceModule(): MediaServiceModule | null;
  getTerraBuildModule(): TerraBuildModule | null;
  getSafetyServiceModule(): SafetyServiceModule | null;
  getFlightTaskRecordModule(): FlightTaskRecordModule | null;
  getHMSModule(): HMSModule | null;
  getLogManagementModule(): LogManagementModule | null;
  getMaintenanceManagementModule(): MaintenanceManagementModule | null;
  getDiagnosisManagementModule(): DiagnosisManagementModule | null;
  getDeviceManageModule(): DeviceManageModule | null;
  getFirmwareManageModule(): FirmwareManageModule | null;
  getPsdkResourceModule(): PsdkResourceModule | null;
  getFlashLedModule(): FlashLedModule | null;
  getWaylineManageModule(): WaylineManageModule | null;
  getAIInsideManageModule(): AIInsideManageModule | null;
  getElementModule(): ElementModule | null;
  getAIAlertModule(): AIAlertModule | null;
  getLiveSyncModule(): LiveSyncModule | null;
}
