// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDeployModule extends IDeployModule { public ProbeDeployModule(){super();}
@Override public int listenDockDeparturePointWrapper(DockDeparturePointCallback callback) {JavaApiOracle.record("DeployModule","listenDockDeparturePointWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockDeparturePointWrapper(int listen_id) {JavaApiOracle.record("DeployModule","cancelListenDockDeparturePointWrapper",new Object[]{listen_id});}
@Override public int listenAircraftVisualScoutStatusWrapper(AircraftVisualScoutStatusCallback callback) {JavaApiOracle.record("DeployModule","listenAircraftVisualScoutStatusWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenAircraftVisualScoutStatusWrapper(int listen_id) {JavaApiOracle.record("DeployModule","cancelListenAircraftVisualScoutStatusWrapper",new Object[]{listen_id});}
@Override public int listenAircraftVisualScoutAbnormalInfoWrapper(AircraftVisualScoutAbnormalInfoCallback callback) {JavaApiOracle.record("DeployModule","listenAircraftVisualScoutAbnormalInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenAircraftVisualScoutAbnormalInfoWrapper(int listen_id) {JavaApiOracle.record("DeployModule","cancelListenAircraftVisualScoutAbnormalInfoWrapper",new Object[]{listen_id});}
@Override public int listenAircraftVisualScoutObstacleInfoWrapper(AircraftVisualScoutObstacleInfoCallback callback) {JavaApiOracle.record("DeployModule","listenAircraftVisualScoutObstacleInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenAircraftVisualScoutObstacleInfoWrapper(int listen_id) {JavaApiOracle.record("DeployModule","cancelListenAircraftVisualScoutObstacleInfoWrapper",new Object[]{listen_id});}
@Override public int listenAircraftEphemerisDownloadStateWrapper(EphemerisDownloadStateCallback callback) {JavaApiOracle.record("DeployModule","listenAircraftEphemerisDownloadStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenAircraftEphemerisDownloadStateWrapper(int listen_id) {JavaApiOracle.record("DeployModule","cancelListenAircraftEphemerisDownloadStateWrapper",new Object[]{listen_id});}
@Override public int listenAircraftEphemerisInfoWrapper(EphemerisInfoCallback callback) {JavaApiOracle.record("DeployModule","listenAircraftEphemerisInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenAircraftEphemerisInfoWrapper(int listen_id) {JavaApiOracle.record("DeployModule","cancelListenAircraftEphemerisInfoWrapper",new Object[]{listen_id});}
@Override public void downloadEphemerisWrapper(DownloadEphemerisParams params, ResultCallbackWithError callback) {JavaApiOracle.record("DeployModule","downloadEphemerisWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void executeInOutWaylineDetectWrapper(InOutWaylineDetectParams params, ResultCallbackWithError callback) {JavaApiOracle.record("DeployModule","executeInOutWaylineDetectWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void setInOutWaylineFlightWrapper(InOutWaylineFlightSettingParams params, ResultCallbackWithError callback) {JavaApiOracle.record("DeployModule","setInOutWaylineFlightWrapper",new Object[]{params});JavaApiOracle.respond(callback);}
@Override public void getInOutWaylineFlightSettingWrapper(InOutWaylineFlightSettingResultCallback callback) {JavaApiOracle.record("DeployModule","getInOutWaylineFlightSettingWrapper",new Object[]{});JavaApiOracle.respond(callback);}
}
