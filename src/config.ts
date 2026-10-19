import type { FlightHubSdkConfig, FlightHubSdkConfigInput, HeaderInput, HeaderKeyValue } from './types.js';

export const DEFAULT_CONFIG: Readonly<FlightHubSdkConfig> = Object.freeze({
  logLevel: 'info', logToConsole: true, showVersionInfo: true,
  logFilePath: 'flight_hub_sdk.log', logMaxFileSize: 4n * 1024n * 1024n,
  logMaxFiles: 1000, address: '', port: '', notificationServerAddress: '',
  drtcConfigPath: '', verifySsl: true, sslCaPath: '',
});

export function normalizeConfig(input: FlightHubSdkConfigInput = {}): FlightHubSdkConfig {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new TypeError('config must be an object');
  const output = { ...DEFAULT_CONFIG };
  for (const [key, value] of Object.entries(input)) {
    if (!Object.hasOwn(DEFAULT_CONFIG, key)) throw new TypeError(`Unknown config field: ${key}`);
    if (value === undefined) continue;
    if (key === 'logMaxFileSize') {
      if (typeof value !== 'bigint' && !(typeof value === 'number' && Number.isSafeInteger(value))) {
        throw new TypeError('logMaxFileSize must be a bigint or safe integer');
      }
      const size = BigInt(value);
      if (size < 0n || size > 0xffffffffffffffffn) throw new RangeError('logMaxFileSize exceeds Linux x64 size_t');
      output.logMaxFileSize = size;
    } else if (key === 'logMaxFiles') {
      if (typeof value !== 'number' || !Number.isInteger(value) || value < -2147483648 || value > 2147483647) {
        throw new RangeError('logMaxFiles must fit int32');
      }
      output.logMaxFiles = value;
    } else if (typeof DEFAULT_CONFIG[key as keyof FlightHubSdkConfig] === 'boolean') {
      if (typeof value !== 'boolean') throw new TypeError(`${key} must be boolean`);
      (output as unknown as Record<string, unknown>)[key] = value;
    } else {
      if (value !== null && typeof value !== 'string') throw new TypeError(`${key} must be a string or null`);
      (output as unknown as Record<string, unknown>)[key] = key === 'logFilePath' ? (value || DEFAULT_CONFIG.logFilePath) : (value ?? '');
    }
  }
  return output;
}

/** Matches FlightHubSdkManager: skip null/empty keys; retain duplicates and order. */
export function normalizeHeaders(input: readonly HeaderInput[] | null): HeaderKeyValue[] {
  if (input === null) return [];
  if (!Array.isArray(input)) throw new TypeError('headers must be an array or null');
  const output: HeaderKeyValue[] = [];
  for (const item of input) {
    if (item === null) continue;
    if (!item || typeof item !== 'object' || Array.isArray(item)) throw new TypeError('header must be an object or null');
    if (item.key === null || item.key === '') continue;
    if (typeof item.key !== 'string' || (item.value != null && typeof item.value !== 'string')) {
      throw new TypeError('header key/value must be strings');
    }
    output.push({ key: item.key, value: item.value ?? '' });
  }
  return output;
}
