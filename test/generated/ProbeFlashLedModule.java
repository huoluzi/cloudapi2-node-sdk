// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFlashLedModule extends IFlashLedModule { public ProbeFlashLedModule(){super();}
@Override public void getFlashLedConfigListWrapper(FlashLedConfigListCallback callback) {JavaApiOracle.record("FlashLedModule","getFlashLedConfigListWrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void createFlashLedConfigWrapper(FlashLedConfigParams params, FlashLedConfigCallback callback) {JavaApiOracle.record("FlashLedModule","createFlashLedConfigWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void updateFlashLedConfigWrapper(String config_id, FlashLedConfigParams params, FlashLedConfigCallback callback) {JavaApiOracle.record("FlashLedModule","updateFlashLedConfigWrapper",new Object[]{config_id,params});JavaApiOracle.respond(callback);}
@Override public void deleteFlashLedConfigWrapper(String config_id, ResultCallbackWithError callback) {JavaApiOracle.record("FlashLedModule","deleteFlashLedConfigWrapper",new Object[]{config_id});JavaApiOracle.respond(callback);}
}
