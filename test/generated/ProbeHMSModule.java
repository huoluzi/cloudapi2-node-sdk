// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeHMSModule extends IHMSModule { public ProbeHMSModule(){super();}
@Override public void QueryHistoryHMSDataWrapper(HistoryHmsDataParam params, QueryHistoryHMSDataCallback callback) {JavaApiOracle.record("HMSModule","QueryHistoryHMSDataWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
}
