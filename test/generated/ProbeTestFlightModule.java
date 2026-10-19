// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeTestFlightModule extends ITestFlightModule { public ProbeTestFlightModule(){super();}
@Override public void generateTryFlightWaylineWrapper(String project_id, GenerateTryFlightWaylineParams params, GenerateTryFlightWaylineCallback callback) {JavaApiOracle.record("TestFlightModule","generateTryFlightWaylineWrapper",new Object[]{project_id,params});JavaApiOracle.respond(callback);}
@Override public void createTestFlightTaskWrapper(String project_id, CreateTestFlightTaskParams params, CreateTestFlightTaskCallback callback) {JavaApiOracle.record("TestFlightModule","createTestFlightTaskWrapper",new Object[]{project_id,params});JavaApiOracle.respond(callback);}
}
