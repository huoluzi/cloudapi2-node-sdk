// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeLiveSyncModule extends ILiveSyncModule { public ProbeLiveSyncModule(){super();}
@Override public void createLiveSyncWrapper(LiveSyncCreateParams param, CreateLiveSyncCallback callback) {JavaApiOracle.record("LiveSyncModule","createLiveSyncWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void deleteLiveSyncWrapper(String id, DeleteLiveSyncCallback callback) {JavaApiOracle.record("LiveSyncModule","deleteLiveSyncWrapper",new Object[]{id});JavaApiOracle.respond(callback);}
@Override public void updateLiveSyncWrapper(LiveSyncUpdateParams param, UpdateLiveSyncCallback callback) {JavaApiOracle.record("LiveSyncModule","updateLiveSyncWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getLiveSyncListWrapper(LiveSyncListParams param, GetLiveSyncListCallback callback) {JavaApiOracle.record("LiveSyncModule","getLiveSyncListWrapper",new Object[]{param});JavaApiOracle.respond(callback);}
@Override public void getLiveSyncDevicesV2Wrapper(GetLiveSyncDevicesV2Callback callback) {JavaApiOracle.record("LiveSyncModule","getLiveSyncDevicesV2Wrapper",new Object[]{});JavaApiOracle.respond(callback);}
@Override public void getLiveSyncSummaryWrapper(GetLiveSyncSummaryCallback callback) {JavaApiOracle.record("LiveSyncModule","getLiveSyncSummaryWrapper",new Object[]{});JavaApiOracle.respond(callback);}
}
