// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeDockOsdModule extends IDockOsdModule { public ProbeDockOsdModule(){super();}
@Override public int listenDockLocationWrapper(DockLocationCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockLocationWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockLocationWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockLocationWrapper",new Object[]{listen_id});}
@Override public int listenDroneInDockWrapper(DroneInDockCallback callback) {JavaApiOracle.record("DockOsdModule","listenDroneInDockWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDroneInDockWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDroneInDockWrapper",new Object[]{listen_id});}
@Override public int listenDockModeCodeWrapper(DockModeCodeCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockModeCodeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockModeCodeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockModeCodeWrapper",new Object[]{listen_id});}
@Override public int listenFlightTaskStepCodeWrapper(FlightTaskStepCodeCallback callback) {JavaApiOracle.record("DockOsdModule","listenFlightTaskStepCodeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenFlightTaskStepCodeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenFlightTaskStepCodeWrapper",new Object[]{listen_id});}
@Override public int listenDockSubDeviceWrapper(DockSubDeviceInfoListCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockSubDeviceWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockSubDeviceWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockSubDeviceWrapper",new Object[]{listen_id});}
@Override public int listenDockNetworkStateWrapper(DockNetworkStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockNetworkStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockNetworkStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockNetworkStateWrapper",new Object[]{listen_id});}
@Override public int listenDockCoverStateWrapper(DockCoverStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockCoverStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockCoverStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockCoverStateWrapper",new Object[]{listen_id});}
@Override public int listenDockMediaFileDetailWrapper(DockMediaFileDetailCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockMediaFileDetailWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockMediaFileDetailWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockMediaFileDetailWrapper",new Object[]{listen_id});}
@Override public int listenDockWirelessLinkWrapper(DockWirelessLinkCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockWirelessLinkWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockWirelessLinkWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockWirelessLinkWrapper",new Object[]{listen_id});}
@Override public int listenDockJobNumberWrapper(DockJobNumberCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockJobNumberWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockJobNumberWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockJobNumberWrapper",new Object[]{listen_id});}
@Override public int listenDockPowerStateWrapper(DockPowerStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockPowerStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockPowerStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockPowerStateWrapper",new Object[]{listen_id});}
@Override public int listenDockStorageStateWrapper(DockStorageStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockStorageStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockStorageStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockStorageStateWrapper",new Object[]{listen_id});}
@Override public int listenDockFirstPowerOnTimeWrapper(DockFirstPowerOnTimeCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockFirstPowerOnTimeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockFirstPowerOnTimeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockFirstPowerOnTimeWrapper",new Object[]{listen_id});}
@Override public int listenDockAccumulatedRunningTimeWrapper(DockAccTimeCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockAccumulatedRunningTimeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockAccumulatedRunningTimeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockAccumulatedRunningTimeWrapper",new Object[]{listen_id});}
@Override public int listenDockAlternateLandPointWrapper(DockAlternateLandPointCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockAlternateLandPointWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockAlternateLandPointWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockAlternateLandPointWrapper",new Object[]{listen_id});}
@Override public int listenDockPositionStateWrapper(DockPositionStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockPositionStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockPositionStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockPositionStateWrapper",new Object[]{listen_id});}
@Override public int listenDockActivationTimeWrapper(DockActivationTimeCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockActivationTimeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockActivationTimeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockActivationTimeWrapper",new Object[]{listen_id});}
@Override public int listenDockBatteryStoreModeWrapper(DockBatteryStoreModeCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockBatteryStoreModeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockBatteryStoreModeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockBatteryStoreModeWrapper",new Object[]{listen_id});}
@Override public int listenDockAlarmStateWrapper(DockAlarmStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockAlarmStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockAlarmStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockAlarmStateWrapper",new Object[]{listen_id});}
@Override public int listenDockDroneBatteryMaintenanceInfoWrapper(DockDroneBatteryMaintenanceInfoCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockDroneBatteryMaintenanceInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockDroneBatteryMaintenanceInfoWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockDroneBatteryMaintenanceInfoWrapper",new Object[]{listen_id});}
@Override public int listenDockEmergencyStopStateWrapper(DockEmergencyStopStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockEmergencyStopStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockEmergencyStopStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockEmergencyStopStateWrapper",new Object[]{listen_id});}
@Override public int listenDockSilentModeWrapper(DockSilentModeCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockSilentModeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockSilentModeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockSilentModeWrapper",new Object[]{listen_id});}
@Override public int listenDockUserExperienceImprovementWrapper(DockUserExperienceImprovementCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockUserExperienceImprovementWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockUserExperienceImprovementWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockUserExperienceImprovementWrapper",new Object[]{listen_id});}
@Override public int listenDockDrcStateWrapper(DockDrcStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockDrcStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockDrcStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockDrcStateWrapper",new Object[]{listen_id});}
@Override public int listenDockPutterStateWrapper(DockPutterStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockPutterStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockPutterStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockPutterStateWrapper",new Object[]{listen_id});}
@Override public int listenDockRelativeAlternateLandPointWrapper(DockRelativeAlternateLandPointCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockRelativeAlternateLandPointWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockRelativeAlternateLandPointWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockRelativeAlternateLandPointWrapper",new Object[]{listen_id});}
@Override public int listenDockSelfConvergeCoordinateWrapper(DockSelfConvergeCoordinateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockSelfConvergeCoordinateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockSelfConvergeCoordinateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockSelfConvergeCoordinateWrapper",new Object[]{listen_id});}
@Override public int listenDockFirmwareInfoWrapper(DockFirmwareInfoCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockFirmwareInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockFirmwareInfoWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockFirmwareInfoWrapper",new Object[]{listen_id});}
@Override public int listenDockDroneChargeStateWrapper(DockDroneChargeStateCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockDroneChargeStateWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockDroneChargeStateWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockDroneChargeStateWrapper",new Object[]{listen_id});}
@Override public int listenDockMeteorologicalInfoWrapper(DockMeteorologicalInfoCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockMeteorologicalInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockMeteorologicalInfoWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockMeteorologicalInfoWrapper",new Object[]{listen_id});}
@Override public int listenDockBackupBatteryInfoWrapper(DockBackupBatteryInfoCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockBackupBatteryInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockBackupBatteryInfoWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockBackupBatteryInfoWrapper",new Object[]{listen_id});}
@Override public int listenDockMaintainStatusInfoWrapper(DockMaintainStatusInfoCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockMaintainStatusInfoWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockMaintainStatusInfoWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockMaintainStatusInfoWrapper",new Object[]{listen_id});}
@Override public int listenDockDongleInfosWrapper(DockDongleInfosCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockDongleInfosWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockDongleInfosWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockDongleInfosWrapper",new Object[]{listen_id});}
@Override public int listenDockAirConditionerModeWrapper(DockAirConditionerModeCallback callback) {JavaApiOracle.record("DockOsdModule","listenDockAirConditionerModeWrapper",new Object[]{});JavaApiOracle.respond(callback);return 73;}
@Override public void cancelListenDockAirConditionerModeWrapper(int listen_id) {JavaApiOracle.record("DockOsdModule","cancelListenDockAirConditionerModeWrapper",new Object[]{listen_id});}
}
