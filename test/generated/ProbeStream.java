// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeStream extends IStream { public ProbeStream(){super();}
@Override public ICustomSEIModule getCustomSEIModule() {JavaApiOracle.record("Stream","getCustomSEIModule",new Object[]{});return new ProbeCustomSEIModule();}
@Override public IPullStreamModule getPullStreamModule(String stream_id) {JavaApiOracle.record("Stream","getPullStreamModule",new Object[]{stream_id});return new ProbePullStreamModule();}
}
