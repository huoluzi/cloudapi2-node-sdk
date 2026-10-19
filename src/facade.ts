import { normalizeConfig, normalizeHeaders } from './config.js';
import type { FlightHubSdkConfigInput, HeaderInput, NativeBinding } from './types.js';
import { Workspace, Drone } from './modules.js';
import {createModule} from './module-runtime.js';
import type * as G from './java-types.js';

/** Internal injection point for contract tests; not exported by the package. */
export function createFacade(getBinding: () => NativeBinding) {
  let workspace: Workspace | undefined;
  const drones = new Map<string, Drone>();
  const instances=new Map<string,object>();
  function instance<T>(type:string,sn=''):T|null {
    if(typeof sn!=='string')throw new TypeError('sn must be a string');
    const b=getBinding(),handle=b.getNativeInstance(type,sn);if(!handle)return null;
    const key=type+':'+sn;let value=instances.get(key);if(!value){value=createModule<object>(b,handle,type,sn);instances.set(key,value);}return value as T;
  }
  return Object.freeze({
    getVersion: () => getBinding().getVersion(),
    getBuildInfo: () => getBinding().getBuildInfo(),
    isInitialized: () => getBinding().isInitialized(),
    isNotificationConnected: () => getBinding().isNotificationConnected(),
    waitForNotificationConnection: async (timeoutMs = 15000): Promise<void> => {
      if (!Number.isFinite(timeoutMs) || timeoutMs < 0) throw new TypeError('timeoutMs must be nonnegative');
      const started = Date.now();
      while (!getBinding().isNotificationConnected()) {
        if (!getBinding().isInitialized()) throw new Error('SDK is not initialized');
        if (Date.now() - started >= timeoutMs) throw new Error('Notification connection timeout');
        await new Promise(resolve => setTimeout(resolve, 25));
      }
    },
    initialize: (config?: FlightHubSdkConfigInput) => getBinding().initialize(normalizeConfig(config)),
    shutdown: () => { try { return getBinding().shutdown(); } finally { workspace = undefined; drones.clear(); instances.clear(); } },
    getConfig: () => getBinding().getConfig(),
    setLogLevel: (level: string) => {
      if (typeof level !== 'string') throw new TypeError('level must be a string');
      return getBinding().setLogLevel(level);
    },
    setHttpHeaders: (headers: readonly HeaderInput[] | null) => getBinding().setHttpHeaders(normalizeHeaders(headers)),
    getHttpHeaders: () => getBinding().getHttpHeaders(),
    setWebSocketAuthHeaders: (headers: readonly HeaderInput[] | null) => getBinding().setWebSocketAuthHeaders(normalizeHeaders(headers)),
    getWebSocketAuthHeaders: () => getBinding().getWebSocketAuthHeaders(),
    getWorkspaceInstance: (): Workspace | null => {
      const b = getBinding(); const handle = b.getWorkspaceInstance();
      if (!handle) return null;
      return workspace ??= new Workspace(b, handle);
    },
    getDroneInstance: (sn: string): Drone | null => {
      if (typeof sn !== 'string') throw new TypeError('sn must be a string');
      const b = getBinding(); const handle = b.getDroneInstance(sn);
      if (!handle) return null;
      let drone = drones.get(sn);
      if (!drone) { drone = new Drone(b, handle,sn); drones.set(sn, drone); }
      return drone;
    },
    getDiagnostics: () => getBinding().getDiagnostics(),
    getDockInstance:(sn:string)=>instance<G.Dock>('Dock',sn),
    getRemoteControllerInstance:(sn:string)=>instance<G.RemoteController>('RemoteController',sn),
    getBaseStationInstance:(sn:string)=>instance<G.BaseStation>('BaseStation',sn),
    getRelayInstance:(sn:string)=>instance<G.Relay>('Relay',sn),
    getStream:()=>instance<G.Stream>('Stream'),
  });
}
