// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFlightSettingsModule extends IFlightSettingsModule { public ProbeFlightSettingsModule(){super();}
@Override public void setFlightSmartPlanModeWrapper(String device_sn, int mode, SetFlightSmartPlanModeCallback callback) {JavaApiOracle.record("FlightSettingsModule","setFlightSmartPlanModeWrapper",new Object[]{device_sn,mode});JavaApiOracle.respond(callback);}
@Override public void setOutOfControlActionWrapper(String device_sn, String action, SetOutOfControlActionCallback callback) {JavaApiOracle.record("FlightSettingsModule","setOutOfControlActionWrapper",new Object[]{device_sn,action});JavaApiOracle.respond(callback);}
@Override public void setFlightTaskHeightWrapper(String device_sn, int height, SetFlightTaskHeightCallback callback) {JavaApiOracle.record("FlightSettingsModule","setFlightTaskHeightWrapper",new Object[]{device_sn,height});JavaApiOracle.respond(callback);}
@Override public void setRthAltitudeWrapper(String device_sn, int altitude, SetRthAltitudeCallback callback) {JavaApiOracle.record("FlightSettingsModule","setRthAltitudeWrapper",new Object[]{device_sn,altitude});JavaApiOracle.respond(callback);}
@Override public void setAirTransferEnableWrapper(String device_sn, boolean enabled, SetAirTransferEnableCallback callback) {JavaApiOracle.record("FlightSettingsModule","setAirTransferEnableWrapper",new Object[]{device_sn,enabled});JavaApiOracle.respond(callback);}
}
