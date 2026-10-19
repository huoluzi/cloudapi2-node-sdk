// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFlightTaskRecordModule extends IFlightTaskRecordModule { public ProbeFlightTaskRecordModule(){super();}
@Override public void exportFlightRecordsWrapper(String user_id, ExportFlightRecordsRequestParams params, ExportFlightRecordsCallback callback) {JavaApiOracle.record("FlightTaskRecordModule","exportFlightRecordsWrapper",new Object[]{user_id,params});JavaApiOracle.respond(callback);}
@Override public void getExportFlightRecordsProgressWrapper(GetExportFlightRecordsProgressParams params, GetExportFlightRecordsProgressCallback callback) {JavaApiOracle.record("FlightTaskRecordModule","getExportFlightRecordsProgressWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
}
