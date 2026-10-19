import type { NativeBinding, NativeHandle, DeviceListCallback, AircraftLocationCallback } from './types.js';
import { MODULE_METHODS } from './generated.js';
import type { WaylineManageModule, MediaServiceModule, FlightTaskModule, TerraBuildModule, SafetyServiceModule } from './java-types.js';
import type * as G from './java-types.js';
import {installModule,createModule} from './module-runtime.js';

function callback(value: unknown): void {
  if (typeof value !== 'function') throw new TypeError('callback must be a function');
}
/** Java object hierarchy and callback argument order are preserved. */
export class DeviceManageModule {
  constructor(private readonly binding: NativeBinding, private readonly handle: NativeHandle) {installModule(this,binding,handle,'DeviceManageModule');}
  getDeviceList(cb: DeviceListCallback): void { callback(cb); this.binding.getDeviceList(this.handle, cb); }
}
export class DroneOsdModule {
  constructor(private readonly binding: NativeBinding, private readonly handle: NativeHandle) {installModule(this,binding,handle,'DroneOsdModule');}
  listenAircraftLocation(cb: AircraftLocationCallback): number {
    callback(cb); return this.binding.listenAircraftLocation(this.handle, cb);
  }
  cancelListenAircraftLocation(listenId: number): void {
    if (!Number.isInteger(listenId) || listenId < -2147483648 || listenId > 2147483647) throw new TypeError('listenId must be int32');
    this.binding.cancelListenAircraftLocation(this.handle, listenId);
  }
}
export class Workspace {
  private devices?: DeviceManageModule;
  private modules = new Map<string, object>();
  constructor(private readonly binding: NativeBinding, private readonly handle: NativeHandle) {installModule(this,binding,handle,'Workspace');}
  getDeviceManageModule(): DeviceManageModule | null {
    const handle = this.binding.getDeviceManageModule(this.handle);
    if (!handle) return null;
    return this.devices ??= new DeviceManageModule(this.binding, handle);
  }
  private module<T>(type: keyof typeof MODULE_METHODS): T | null {
    const handle = this.binding.getWorkspaceModule(this.handle, type);
    if (!handle) return null;
    let value = this.modules.get(type);
    if (!value) {
      value = createModule<object>(this.binding,handle,type);
      this.modules.set(type, value);
    }
    return value as T;
  }
  getWaylineManageModule() { return this.module<WaylineManageModule>('WaylineManageModule'); }
  getMediaServiceModule() { return this.module<MediaServiceModule>('MediaServiceModule'); }
  getFlightTaskModule() { return this.module<FlightTaskModule>('FlightTaskModule'); }
  getTerraBuildModule() { return this.module<TerraBuildModule>('TerraBuildModule'); }
  getSafetyServiceModule() { return this.module<SafetyServiceModule>('SafetyServiceModule'); }
}
export class Drone {
  private osd?: DroneOsdModule;
  constructor(private readonly binding: NativeBinding, private readonly handle: NativeHandle, sn='') {installModule(this,binding,handle,'Drone',sn);}
  getDroneOsdModule(): DroneOsdModule | null {
    const handle = this.binding.getDroneOsdModule(this.handle);
    if (!handle) return null;
    return this.osd ??= new DroneOsdModule(this.binding, handle);
  }
}
export interface DeviceManageModule extends Omit<G.DeviceManageModule,'getDeviceList'> {}
export interface DroneOsdModule extends Omit<G.DroneOsdModule,'listenAircraftLocation'|'cancelListenAircraftLocation'> {}
export interface Workspace extends Omit<G.Workspace,'getDeviceManageModule'|'getWaylineManageModule'|'getMediaServiceModule'|'getFlightTaskModule'|'getTerraBuildModule'|'getSafetyServiceModule'> {}
export interface Drone extends Omit<G.Drone,'getDroneOsdModule'> {}
