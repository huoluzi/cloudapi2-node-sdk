import { createRequire } from 'node:module';
import { join, resolve } from 'node:path';
import { isMainThread } from 'node:worker_threads';
import type { NativeBinding } from './types.js';

const requireNative = createRequire(__filename);
const pinned = requireNative('../upstream.lock.json') as { sdkVersion: string };
let loaded: NativeBinding | undefined;
const methods = ['getBindingInfo', 'getVersion', 'getBuildInfo', 'isInitialized', 'initialize', 'shutdown',
  'getConfig', 'setLogLevel', 'setHttpHeaders', 'getHttpHeaders', 'setWebSocketAuthHeaders', 'getWebSocketAuthHeaders',
  'getWorkspaceInstance', 'getDeviceManageModule', 'getDroneInstance', 'getDroneOsdModule',
  'getDeviceList', 'listenAircraftLocation', 'cancelListenAircraftLocation', 'getDiagnostics', 'getWorkspaceModule', 'invokeModule', 'isNotificationConnected', 'getNativeInstance', 'disposeModule'] as const;

export function assertBinding(binding: unknown): asserts binding is NativeBinding {
  if (!binding || typeof binding !== 'object' || methods.some(name => typeof (binding as Record<string, unknown>)[name] !== 'function')) {
    throw new Error('Native module has an incomplete Cloud API 2 binding contract');
  }
  if (typeof (binding as Record<string, unknown>).createProbeModule === 'function') {
    throw new Error('Refusing a contract-test native binding. Build with CLOUDAPI2_CONTRACT_PROBES=OFF.');
  }
  const info = (binding as NativeBinding).getBindingInfo();
  if (info.bindingApiVersion !== 4) throw new Error('Native binding API version mismatch: rebuild the native library for this SDK release');
  if (info.upstreamVersion !== pinned.sdkVersion) throw new Error('Native SDK version does not match upstream.lock.json');
}

export function loadNativeBinding(): NativeBinding {
  if (loaded) return loaded;
  if (!isMainThread) throw new Error('Cloud API 2 uses a process singleton; worker_threads are not supported');
  if (process.platform !== 'linux' || process.arch !== 'x64') {
    throw new Error(`Official native dependencies require Linux x64 (glibc); current platform is ${process.platform}/${process.arch}`);
  }
  const { header } = process.report.getReport() as { header: Record<string, unknown> };
  if (!header.glibcVersionRuntime) throw new Error('The native SDK requires glibc; musl/Alpine is not supported');
  const path = process.env.CLOUDAPI2_NODE_BINDING ? resolve(process.env.CLOUDAPI2_NODE_BINDING) :
    join(__dirname, '../native/linux-x64/cloudapi2_node.node');
  let candidate: unknown;
  try { candidate = requireNative(path); }
  catch (cause) { throw new Error(`Cannot load Cloud API 2 native binding at ${path}. Run the Linux native build and inspect its shared library dependencies.`, { cause }); }
  assertBinding(candidate);
  loaded = candidate;
  return loaded;
}
