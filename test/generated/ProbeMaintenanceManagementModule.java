// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeMaintenanceManagementModule extends IMaintenanceManagementModule { public ProbeMaintenanceManagementModule(){super();}
@Override public void getRepairConfigsWrapper(GetDeviceRepairConfigParams params, GetRepairConfigsCallback callback) {JavaApiOracle.record("MaintenanceManagementModule","getRepairConfigsWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void createMaintenanceOrderWrapper(CreateMaintenanceOrderParams params, CreateMaintenanceOrderCallback callback) {JavaApiOracle.record("MaintenanceManagementModule","createMaintenanceOrderWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void getMaintenanceOrderDetailWrapper(String order_number, GetMaintenanceOrderDetailCallback callback) {JavaApiOracle.record("MaintenanceManagementModule","getMaintenanceOrderDetailWrapper",new Object[]{order_number});JavaApiOracle.respond(callback);}
@Override public void getMaintenanceOrdersListWrapper(GetMaintenanceOrdersListParams params, GetMaintenanceOrdersListCallback callback) {JavaApiOracle.record("MaintenanceManagementModule","getMaintenanceOrdersListWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
}
