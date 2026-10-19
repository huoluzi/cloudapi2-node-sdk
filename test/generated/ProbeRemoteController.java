// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeRemoteController extends IRemoteController { public ProbeRemoteController(){super();}
@Override public String getSn() {JavaApiOracle.record("RemoteController","getSn",new Object[]{});return "FIXTURE-SN";}
}
