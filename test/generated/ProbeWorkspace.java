// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import com.dji.flighthubsdk.generated.*;
public class ProbeWorkspace extends IWorkspace { public ProbeWorkspace(){super();}
@Override public ILogManagementModule getLogManagementModule() {JavaApiOracle.record("Workspace","getLogManagementModule",new Object[]{});return new ProbeLogManagementModule();}
@Override public IHMSModule getHMSModule() {JavaApiOracle.record("Workspace","getHMSModule",new Object[]{});return new ProbeHMSModule();}
@Override public IMediaServiceModule getMediaServiceModule() {JavaApiOracle.record("Workspace","getMediaServiceModule",new Object[]{});return new ProbeMediaServiceModule();}
@Override public ISafetyServiceModule getSafetyServiceModule() {JavaApiOracle.record("Workspace","getSafetyServiceModule",new Object[]{});return new ProbeSafetyServiceModule();}
@Override public IFlightTaskRecordModule getFlightTaskRecordModule() {JavaApiOracle.record("Workspace","getFlightTaskRecordModule",new Object[]{});return new ProbeFlightTaskRecordModule();}
@Override public IDiagnosisManagementModule getDiagnosisManagementModule() {JavaApiOracle.record("Workspace","getDiagnosisManagementModule",new Object[]{});return new ProbeDiagnosisManagementModule();}
@Override public IMaintenanceManagementModule getMaintenanceManagementModule() {JavaApiOracle.record("Workspace","getMaintenanceManagementModule",new Object[]{});return new ProbeMaintenanceManagementModule();}
@Override public IFlightTaskModule getFlightTaskModule() {JavaApiOracle.record("Workspace","getFlightTaskModule",new Object[]{});return new ProbeFlightTaskModule();}
@Override public IDeviceManageModule getDeviceManageModule() {JavaApiOracle.record("Workspace","getDeviceManageModule",new Object[]{});return new ProbeDeviceManageModule();}
@Override public IFirmwareManageModule getFirmwareManageModule() {JavaApiOracle.record("Workspace","getFirmwareManageModule",new Object[]{});return new ProbeFirmwareManageModule();}
@Override public IWaylineManageModule getWaylineManageModule() {JavaApiOracle.record("Workspace","getWaylineManageModule",new Object[]{});return new ProbeWaylineManageModule();}
@Override public IPsdkResourceModule getPsdkResourceModule() {JavaApiOracle.record("Workspace","getPsdkResourceModule",new Object[]{});return new ProbePsdkResourceModule();}
@Override public IFlashLedModule getFlashLedModule() {JavaApiOracle.record("Workspace","getFlashLedModule",new Object[]{});return new ProbeFlashLedModule();}
@Override public ITerraBuildModule getTerraBuildModule() {JavaApiOracle.record("Workspace","getTerraBuildModule",new Object[]{});return new ProbeTerraBuildModule();}
@Override public IAIInsideManageModule getAIInsideManageModule() {JavaApiOracle.record("Workspace","getAIInsideManageModule",new Object[]{});return new ProbeAIInsideManageModule();}
@Override public IElementModule getElementModule() {JavaApiOracle.record("Workspace","getElementModule",new Object[]{});return new ProbeElementModule();}
@Override public IAIAlertModule getAIAlertModule() {JavaApiOracle.record("Workspace","getAIAlertModule",new Object[]{});return new ProbeAIAlertModule();}
@Override public ILiveSyncModule getLiveSyncModule() {JavaApiOracle.record("Workspace","getLiveSyncModule",new Object[]{});return new ProbeLiveSyncModule();}
}
