// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeRelayControlModule extends IRelayControlModule { public ProbeRelayControlModule(){super();}
@Override public void setRelayBroadcastHideWrapper(boolean is_broadcast_hide, SetRelayBroadcastHideCallback callback) {JavaApiOracle.record("RelayControlModule","setRelayBroadcastHideWrapper",new Object[]{is_broadcast_hide});JavaApiOracle.respond(callback);}
@Override public void setRelaySSIDWrapper(String device_name, SetRelaySSIDCallback callback) {JavaApiOracle.record("RelayControlModule","setRelaySSIDWrapper",new Object[]{device_name});JavaApiOracle.respond(callback);}
@Override public void setRelayPasswordWrapper(String passwd, SetRelayPasswordCallback callback) {JavaApiOracle.record("RelayControlModule","setRelayPasswordWrapper",new Object[]{passwd});JavaApiOracle.respond(callback);}
@Override public void setRelaySearchModeWrapper(int relay_search_mode, SetRelaySearchModeCallback callback) {JavaApiOracle.record("RelayControlModule","setRelaySearchModeWrapper",new Object[]{relay_search_mode});JavaApiOracle.respond(callback);}
@Override public void setRelayOccupiedStatusWrapper(int occupied_status, SetRelayOccupiedStatusCallback callback) {JavaApiOracle.record("RelayControlModule","setRelayOccupiedStatusWrapper",new Object[]{occupied_status});JavaApiOracle.respond(callback);}
@Override public void relayRebootWrapper(RelayRebootCallback callback) {JavaApiOracle.record("RelayControlModule","relayRebootWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void relayDisconnectWrapper(RelayDisconnectCallback callback) {JavaApiOracle.record("RelayControlModule","relayDisconnectWrapper",new Object[]{});JavaApiOracle.respond(callback);}
}
