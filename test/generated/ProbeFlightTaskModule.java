// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeFlightTaskModule extends IFlightTaskModule { public ProbeFlightTaskModule(){super();}
@Override public void getFlightTaskListWrapper(FlightTaskListParams params, GetFlightTaskListCallback callback) {JavaApiOracle.record("FlightTaskModule","getFlightTaskListWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void getCommandTaskListWrapper(GetCommandTaskListParams params, GetCommandTaskListCallback callback) {JavaApiOracle.record("FlightTaskModule","getCommandTaskListWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void getFlightTaskTrackWrapper(GetFlightTaskTrackParams params, GetFlightTaskTrackCallback callback) {JavaApiOracle.record("FlightTaskModule","getFlightTaskTrackWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void createFlightTaskWrapper(CreateTaskReq req, CreateFlightTaskCallback callback) {JavaApiOracle.record("FlightTaskModule","createFlightTaskWrapper",new Object[]{req});JavaApiOracle.respond(callback);}
@Override public void getFlightTaskDetailWrapper(String task_uuid, GetFlightTaskDetailCallback callback) {JavaApiOracle.record("FlightTaskModule","getFlightTaskDetailWrapper",new Object[]{task_uuid});JavaApiOracle.respond(callback);}
@Override public void editFlightTaskWrapper(String task_uuid, EditTaskReq req, CreateFlightTaskCallback callback) {JavaApiOracle.record("FlightTaskModule","editFlightTaskWrapper",new Object[]{task_uuid,req});JavaApiOracle.respond(callback);}
@Override public void deleteFlightTaskWrapper(String task_uuid, ResultCallbackWithError callback) {JavaApiOracle.record("FlightTaskModule","deleteFlightTaskWrapper",new Object[]{task_uuid});JavaApiOracle.respond(callback);}
@Override public void updateFlightTaskStatusWrapper(String task_uuid, int status, ResultCallbackWithError callback) {JavaApiOracle.record("FlightTaskModule","updateFlightTaskStatusWrapper",new Object[]{task_uuid,status});JavaApiOracle.respond(callback);}
@Override public void batchUpdateFlightTaskStatusWrapper(BatchUpdateStatusReq req, ResultCallbackWithError callback) {JavaApiOracle.record("FlightTaskModule","batchUpdateFlightTaskStatusWrapper",new Object[]{req});JavaApiOracle.respond(callback);}
@Override public void getDeviceRecommendationWrapper(DeviceRecommendationReq req, GetDeviceRecommendationCallback callback) {JavaApiOracle.record("FlightTaskModule","getDeviceRecommendationWrapper",new Object[]{req});JavaApiOracle.respond(callback);}
@Override public void getDeviceTcasWrapper(StringVector center_sn, GetDeviceTcasCallback callback) {JavaApiOracle.record("FlightTaskModule","getDeviceTcasWrapper",new Object[]{center_sn});JavaApiOracle.respond(callback);}
@Override public void updateDeviceTcasWrapper(StringVector center_sn, ResultCallbackWithError callback) {JavaApiOracle.record("FlightTaskModule","updateDeviceTcasWrapper",new Object[]{center_sn});JavaApiOracle.respond(callback);}
@Override public void startRoamingWrapper(StartRoamingParams params, StartRoamingCallback callback) {JavaApiOracle.record("FlightTaskModule","startRoamingWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void setRoamingStationSnWrapper(SetRoamingStationSnParams params, SetRoamingStationSnCallback callback) {JavaApiOracle.record("FlightTaskModule","setRoamingStationSnWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void getInFlightTaskToposWrapper(StringVector drone_sns, GetInFlightTaskToposCallback callback) {JavaApiOracle.record("FlightTaskModule","getInFlightTaskToposWrapper",new Object[]{drone_sns});JavaApiOracle.respond(callback);}
@Override public int listenTaskTopoChangedWrapper(TaskTopoChangedCallback callback) {JavaApiOracle.record("FlightTaskModule","listenTaskTopoChangedWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenTaskTopoChangedWrapper(int listen_id) {JavaApiOracle.record("FlightTaskModule","cancelListenTaskTopoChangedWrapper",new Object[]{listen_id});}
}
