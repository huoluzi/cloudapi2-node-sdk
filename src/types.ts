/** Numeric values from sdk/src/api/value.h; unknown future values remain valid numbers. */
export const FlightHubSdkErrorCode = Object.freeze({
  SUCCESS: 0, ERROR_INIT_FAILED: -1, ERROR_ALREADY_INITIALIZED: -2,
  ERROR_NOT_INITIALIZED: -3, ERROR_INVALID_PARAM: -4, ERROR_OPERATION_FAILED: -5,
  ERROR_INVALID_STATE: -6, FILE_NOT_FOUND: -7, FILE_TOO_LARGE: -8,
  UNSUPPORTED_PROVIDER: -9, UPLOAD_FAILED: -10, WAYLINE_ID_NOT_FOUND: -11,
  ERROR_DRC_LINK: -12, UNKNOWN: 0xffff,
} as const);

export interface FlightHubError {
  errorCode: number;
  httpCode: number;
  serverCode: number;
  deviceCode: number;
  serverMessage: string;
}
export interface HeaderKeyValue { key: string; value: string; }
export interface FlightHubSdkConfig {
  logLevel: string;
  logToConsole: boolean;
  showVersionInfo: boolean;
  logFilePath: string;
  /** Java long / C++ size_t: preserve exact integer precision. */
  logMaxFileSize: bigint;
  logMaxFiles: number;
  address: string;
  port: string;
  notificationServerAddress: string;
  drtcConfigPath: string;
  verifySsl: boolean;
  sslCaPath: string;
}
export type FlightHubSdkConfigInput = {
  [K in keyof FlightHubSdkConfig]?: K extends 'logMaxFileSize' ? bigint | number :
    FlightHubSdkConfig[K] extends string ? string | null : FlightHubSdkConfig[K];
};
export type HeaderInput = { key: string | null; value?: string | null } | null;

export interface Device {
  deviceSn: string; deviceClass: string; deviceName: string; nickname: string;
  modelKey: string; online: boolean; parentSns: string[];
}
export interface DeviceTopo { device: Device; subDevices: Device[]; }
export interface AircraftLocation { height: number; elevation: number; longitude: number; latitude: number; }
export type DeviceListCallback = (devices: DeviceTopo[], error: FlightHubError) => void;
export type AircraftLocationCallback = (location: AircraftLocation) => void;
/** Opaque native object: validated by an unforgeable Node-API type tag. */
export type NativeHandle = object;
export interface NativeBinding {
  getBindingInfo(): { bindingApiVersion: number; upstreamVersion: string };
  getVersion(): string;
  getBuildInfo(): string;
  isInitialized(): boolean;
  isNotificationConnected(): boolean;
  initialize(config: FlightHubSdkConfig): number;
  shutdown(): number;
  getConfig(): FlightHubSdkConfig;
  setLogLevel(level: string): number;
  setHttpHeaders(headers: HeaderKeyValue[]): number;
  getHttpHeaders(): HeaderKeyValue[];
  setWebSocketAuthHeaders(headers: HeaderKeyValue[]): number;
  getWebSocketAuthHeaders(): HeaderKeyValue[];
  getWorkspaceInstance(): NativeHandle | null;
  getDeviceManageModule(workspace: NativeHandle): NativeHandle | null;
  getDroneInstance(sn: string): NativeHandle | null;
  getDroneOsdModule(drone: NativeHandle): NativeHandle | null;
  getDeviceList(module: NativeHandle, callback: DeviceListCallback): void;
  listenAircraftLocation(module: NativeHandle, callback: AircraftLocationCallback): number;
  cancelListenAircraftLocation(module: NativeHandle, listenId: number): void;
  getDiagnostics(): { subscriptions: number; droppedCallbacks: bigint; queuedFrameBytes: bigint; maxQueuedFrameBytes: bigint };
  getWorkspaceModule(workspace: NativeHandle, type: string): NativeHandle | null;
  invokeModule(handle: NativeHandle, type: string, method: string, args: unknown[]): unknown;
  getNativeInstance(type: string, sn: string): NativeHandle | null;
  disposeModule(handle: NativeHandle, type: string): void;
}
