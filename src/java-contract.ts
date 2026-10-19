// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
// Generated exact public Java signatures and native targets.
export const JAVA_CONTRACT: Record<string, readonly JavaMethod[]> = {
  "AIBoxModule": [
    {
      "name": "fetchAIBoxInfo",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.FetchAIBoxInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "fetchAIBoxInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "AIBoxInfoListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 67
    },
    {
      "name": "fetchFileDownloadUrl",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FetchFileDownloadUrlParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.FetchFileDownloadUrlCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "fetchFileDownloadUrl",
      "cppArgs": [
        {
          "type": "FetchFileDownloadUrlParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FileDownloadUrlListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 110
    },
    {
      "name": "fetchAppList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AIBoxFetchAppListParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.FetchAppListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "fetchAppList",
      "cppArgs": [
        {
          "type": "FetchAppListParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FetchAppListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 160
    },
    {
      "name": "fetchAppListProgress",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AIBoxFetchAppListProgressParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.FetchAppListProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "fetchAppListProgress",
      "cppArgs": [
        {
          "type": "FetchAppListProgressParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FetchAppListProgressResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 210
    },
    {
      "name": "exportFile",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AIBoxExportFileParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ExportFileCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "exportFile",
      "cppArgs": [
        {
          "type": "ExportFileParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ExportFileResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 260
    },
    {
      "name": "exportFileProgress",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AIBoxExportFileProgressParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ExportFileProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "exportFileProgress",
      "cppArgs": [
        {
          "type": "ExportFileProgressParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ExportFileProgressResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 310
    },
    {
      "name": "uploadAIBoxFile",
      "params": [
        {
          "type": "String",
          "name": "filePath"
        },
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "String",
          "name": "boxSn"
        },
        {
          "type": "FlightHubCallback.UploadAIBoxFileCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "uploadAIBoxFile",
      "cppArgs": [
        {
          "type": "UploadFileParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UploadFileResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 362
    },
    {
      "name": "installApp",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AIBoxInstallAppParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.InstallAppCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "installApp",
      "cppArgs": [
        {
          "type": "InstallAppParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "InstallAppResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 409
    },
    {
      "name": "installAppProgress",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AIBoxInstallAppProgressParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.InstallAppProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "installAppProgress",
      "cppArgs": [
        {
          "type": "InstallAppProgressParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "InstallAppProgressResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 459
    },
    {
      "name": "operateApp",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AIBoxOperateAppParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.OperateAppCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "operateApp",
      "cppArgs": [
        {
          "type": "OperateAppParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OperateAppResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIBoxModule.java",
      "line": 509
    }
  ],
  "AIInsideManageModule": [
    {
      "name": "destroy",
      "params": [],
      "returnType": "void",
      "cpp": "destroy",
      "cppArgs": [],
      "special": true,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 62
    },
    {
      "name": "getAIInsideModels",
      "params": [
        {
          "type": "FlightHubCallback.GetAIInsideModelsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getAIInsideModels",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "GetAIInsideModelsResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 77
    },
    {
      "name": "getAIInsideModelDevices",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetAIInsideModelDevicesParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetAIInsideModelDevicesCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getAIInsideModelDevices",
      "cppArgs": [
        {
          "type": "GetAIInsideModelDevicesParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetAIInsideModelDevicesResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 121
    },
    {
      "name": "getAIInsideModelDevicesSummary",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetAIInsideModelDevicesSummaryParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetAIInsideModelDevicesSummaryCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getAIInsideModelDevicesSummary",
      "cppArgs": [
        {
          "type": "GetAIInsideModelDevicesSummaryParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetAIInsideModelDevicesSummaryResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 171
    },
    {
      "name": "operateAIInsideModel",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.OperateAIInsideModelParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.OperateAIInsideModelCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "operateAIInsideModel",
      "cppArgs": [
        {
          "type": "OperateAIInsideModelParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OperateAIInsideModelResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 221
    },
    {
      "name": "createAIInsideAlgorithm",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreateAIInsideAlgorithmParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.CreateAIInsideAlgorithmCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createAIInsideAlgorithm",
      "cppArgs": [
        {
          "type": "CreateAIInsideAlgorithmParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CreateAIInsideAlgorithmResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 272
    },
    {
      "name": "fileUploadAIInsideAlgorithm",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FileUploadAIInsideAlgorithmParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.FileUploadAIInsideAlgorithmCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "fileUploadAIInsideAlgorithm",
      "cppArgs": [
        {
          "type": "FileUploadAIInsideAlgorithmParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FileUploadAIInsideAlgorithmResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 323
    },
    {
      "name": "deleteAIInsideAlgorithm",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.DeleteAIInsideAlgorithmParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.DeleteAIInsideAlgorithmCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteAIInsideAlgorithm",
      "cppArgs": [
        {
          "type": "DeleteAIInsideAlgorithmParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 374
    },
    {
      "name": "uploadAlgorithmFile",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.UploadAIInsideAlgorithmFileParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.UploadAlgorithmFileCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "uploadAlgorithmFile",
      "cppArgs": [
        {
          "type": "UploadAIInsideAlgorithmFileParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UploadAIInsideAlgorithmFileResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AIInsideManageModule.java",
      "line": 421
    }
  ],
  "AIAlertModule": [
    {
      "name": "destroy",
      "params": [],
      "returnType": "void",
      "cpp": "destroy",
      "cppArgs": [],
      "special": true,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AiAlertModule.java",
      "line": 50
    },
    {
      "name": "postDeviceSetting",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.PostAiAlertDeviceSettingParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.PostAiAlertDeviceSettingCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "postDeviceSetting",
      "cppArgs": [
        {
          "type": "PostAiAlertDeviceSettingParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "PostAiAlertDeviceSettingResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AiAlertModule.java",
      "line": 66
    },
    {
      "name": "getDeviceSetting",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetAiAlertDeviceSettingParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetAiAlertDeviceSettingCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceSetting",
      "cppArgs": [
        {
          "type": "GetAiAlertDeviceSettingParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetAiAlertDeviceSettingResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AiAlertModule.java",
      "line": 116
    },
    {
      "name": "postAlgorithmSetting",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.PostAiAlertAlgorithmSettingParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.PostAiAlertAlgorithmSettingCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "postAlgorithmSetting",
      "cppArgs": [
        {
          "type": "PostAiAlertAlgorithmSettingParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "PostAiAlertAlgorithmSettingResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AiAlertModule.java",
      "line": 166
    },
    {
      "name": "getAlgorithmSetting",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetAiAlertAlgorithmSettingParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetAiAlertAlgorithmSettingCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getAlgorithmSetting",
      "cppArgs": [
        {
          "type": "GetAiAlertAlgorithmSettingParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetAiAlertAlgorithmSettingResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AiAlertModule.java",
      "line": 216
    },
    {
      "name": "getAiAlertFlights",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetAiAlertFlightsParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetAiAlertFlightsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getAiAlertFlights",
      "cppArgs": [
        {
          "type": "GetAiAlertFlightsParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetAiAlertFlightsResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AiAlertModule.java",
      "line": 266
    },
    {
      "name": "getAiAlertRecords",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetAiAlertRecordsParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetAiAlertRecordsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getAiAlertRecords",
      "cppArgs": [
        {
          "type": "GetAiAlertRecordsParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetAiAlertRecordsResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/AiAlertModule.java",
      "line": 316
    }
  ],
  "BaseStation": [
    {
      "name": "getSn",
      "params": [],
      "returnType": "String",
      "cpp": "getSn",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::string",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/BaseStation.java",
      "line": 37
    },
    {
      "name": "getLiveStream",
      "params": [
        {
          "type": "LiveInfo",
          "name": "params"
        }
      ],
      "returnType": "LiveModule",
      "cpp": "getLiveStream",
      "cppArgs": [
        {
          "type": "LiveInfo",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/BaseStation.java",
      "line": 45
    },
    {
      "name": "getLiveDeviceModule",
      "params": [],
      "returnType": "LiveDeviceModule",
      "cpp": "getLiveDeviceModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveDeviceModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/BaseStation.java",
      "line": 71
    },
    {
      "name": "getRtkCalibrationModule",
      "params": [],
      "returnType": "RtkCalibrationModule",
      "cpp": "getRtkCalibrationModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IRtkCalibrationModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/BaseStation.java",
      "line": 84
    },
    {
      "name": "getNetworkTestModule",
      "params": [],
      "returnType": "NetworkTestModule",
      "cpp": "getNetworkTestModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<INetworkTestModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/BaseStation.java",
      "line": 97
    }
  ],
  "CameraControlModule": [
    {
      "name": "drcSwitchLiveLens",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SwitchLiveLensParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSwitchLiveLens",
      "cppArgs": [
        {
          "type": "SwitchLiveLensParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 85
    },
    {
      "name": "drcSetPhotoStorageSettings",
      "params": [
        {
          "type": "SetPhotoStorageSettingsParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetPhotoStorageSettings",
      "cppArgs": [
        {
          "type": "SetPhotoStorageSettingsParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 149
    },
    {
      "name": "drcSetVideoStorageSettings",
      "params": [
        {
          "type": "SetVideoStorageSettingsParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetVideoStorageSettings",
      "cppArgs": [
        {
          "type": "SetVideoStorageSettingsParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 194
    },
    {
      "name": "drcSetNightSceneMode",
      "params": [
        {
          "type": "SetNightSceneModeParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetNightSceneMode",
      "cppArgs": [
        {
          "type": "SetNightSceneModeParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 239
    },
    {
      "name": "drcTakePhoto",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcTakePhoto",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 284
    },
    {
      "name": "drcStartRecord",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcStartRecord",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 331
    },
    {
      "name": "drcStopRecord",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcStopRecord",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 378
    },
    {
      "name": "drcZoomAtTarget",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ZoomAtTargetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcZoomAtTarget",
      "cppArgs": [
        {
          "type": "ZoomAtTargetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 425
    },
    {
      "name": "drcSetFocalLength",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraFocalLengthParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetFocalLength",
      "cppArgs": [
        {
          "type": "CameraFocalLengthParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 489
    },
    {
      "name": "drcResetGimbal",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "resetMode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcResetGimbal",
      "cppArgs": [
        {
          "type": "GimbalResetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 554
    },
    {
      "name": "lookAtTarget",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.LookAtTargetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "lookAtTarget",
      "cppArgs": [
        {
          "type": "LookAtTargetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 595
    },
    {
      "name": "drcStartPanorama",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.PanoramaParam",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcStartPanorama",
      "cppArgs": [
        {
          "type": "PanoramaParam",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 654
    },
    {
      "name": "drcStopPanorama",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcStopPanorama",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 705
    },
    {
      "name": "listenDrcPanoramaStatus",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.PanoramaStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcPanoramaStatus",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "PanoramaStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 751
    },
    {
      "name": "cancelListenDrcPanoramaStatus",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcPanoramaStatus",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 785
    },
    {
      "name": "drcSwitchCameraMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SwitchCameraModeParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSwitchCameraMode",
      "cppArgs": [
        {
          "type": "SwitchCameraModeParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 799
    },
    {
      "name": "listenDrcCameraModeAvailableRange",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraModeAvailableRangeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraModeAvailableRange",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "std::vector<int>"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 864
    },
    {
      "name": "cancelListenDrcCameraModeAvailableRange",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraModeAvailableRange",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 905
    },
    {
      "name": "listenDrcCameraState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 920
    },
    {
      "name": "cancelListenDrcCameraState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 955
    },
    {
      "name": "listenDrcLiveviewWorldRegion",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.LiveviewWorldRegionCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcLiveviewWorldRegion",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "LiveviewWorldRegion"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 970
    },
    {
      "name": "cancelListenDrcLiveviewWorldRegion",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcLiveviewWorldRegion",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1005
    },
    {
      "name": "listenDrcCameraWideLensState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraWideLensStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraWideLensState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraWideLensState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1020
    },
    {
      "name": "cancelListenDrcCameraWideLensState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraWideLensState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1055
    },
    {
      "name": "listenDrcCameraZoomLensState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraZoomLensStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraZoomLensState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraZoomLensState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1070
    },
    {
      "name": "cancelListenDrcCameraZoomLensState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraZoomLensState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1105
    },
    {
      "name": "listenDrcCameraMeasureTarget",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraMeasureTargetCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraMeasureTarget",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraMeasureTarget"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1120
    },
    {
      "name": "cancelListenDrcCameraMeasureTarget",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraMeasureTarget",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1154
    },
    {
      "name": "listenDrcNightModeSettings",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.NightModeSettingsCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcNightModeSettings",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "NightModeSettings"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1169
    },
    {
      "name": "cancelListenDrcNightModeSettings",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcNightModeSettings",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1201
    },
    {
      "name": "listenDrcGimbalState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.GimbalStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcGimbalState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "GimbalState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1216
    },
    {
      "name": "cancelListenDrcGimbalState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcGimbalState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1251
    },
    {
      "name": "listenDrcLiveVideoInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.LiveVideoInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcLiveVideoInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "LiveVideoInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1266
    },
    {
      "name": "cancelListenDrcLiveVideoInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcLiveVideoInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1294
    },
    {
      "name": "listenDrcThermalGainMode",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ThermalGainModeInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcThermalGainMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "ThermalGainModeInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1309
    },
    {
      "name": "cancelListenDrcThermalGainMode",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcThermalGainMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1337
    },
    {
      "name": "listenDrcCameraIrLensState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraIrLensStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraIrLensState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraIrLensState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1352
    },
    {
      "name": "cancelListenDrcCameraIrLensState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraIrLensState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1378
    },
    {
      "name": "listenDrcCameraIrThermometry",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraIrThermometryInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraIrThermometry",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraIrThermometryInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1393
    },
    {
      "name": "cancelListenDrcCameraIrThermometry",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraIrThermometry",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1419
    },
    {
      "name": "listenDrcCameraWatermarkSettings",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraWatermarkSettingsCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraWatermarkSettings",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraWatermarkSettings"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1433
    },
    {
      "name": "cancelListenDrcCameraWatermarkSettings",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraWatermarkSettings",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1448
    },
    {
      "name": "listenDrcCameraStorageInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraStorageInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraStorageInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraStorageInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1457
    },
    {
      "name": "cancelListenDrcCameraStorageInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraStorageInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1472
    },
    {
      "name": "listenDrcCameraIrPipState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraIrPipStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraIrPipState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraIrPipState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1481
    },
    {
      "name": "cancelListenDrcCameraIrPipState",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraIrPipState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1496
    },
    {
      "name": "listenDrcCameraIsothermPolygon",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraIsothermPolygonCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraIsothermPolygon",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraIsothermPolygon"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1505
    },
    {
      "name": "cancelListenDrcCameraIsothermPolygon",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraIsothermPolygon",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1520
    },
    {
      "name": "listenDrcCameraMediaStorage",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraMediaStorageCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraMediaStorage",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraMediaStorage"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1529
    },
    {
      "name": "cancelListenDrcCameraMediaStorage",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraMediaStorage",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1544
    },
    {
      "name": "listenDrcCameraAlgorithmDehazeInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraAlgorithmDehazeInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraAlgorithmDehazeInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraAlgorithmDehazeInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1553
    },
    {
      "name": "cancelListenDrcCameraAlgorithmDehazeInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraAlgorithmDehazeInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1568
    },
    {
      "name": "listenDrcCameraPreRecordedInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraPreRecordedInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraPreRecordedInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraPreRecordedInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1577
    },
    {
      "name": "cancelListenDrcCameraPreRecordedInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraPreRecordedInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1592
    },
    {
      "name": "listenDrcCameraCapability",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraCapabilityCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraCapability",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraCapability"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1601
    },
    {
      "name": "cancelListenDrcCameraCapability",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraCapability",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1616
    },
    {
      "name": "listenDrcCameraSettableCapability",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraSettableCapabilityCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraSettableCapability",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraSettableCapability"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1625
    },
    {
      "name": "cancelListenDrcCameraSettableCapability",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraSettableCapability",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1640
    },
    {
      "name": "listenDrcCameraVisibleCapability",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraVisibleCapabilityCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraVisibleCapability",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraVisibleCapability"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1649
    },
    {
      "name": "cancelListenDrcCameraVisibleCapability",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraVisibleCapability",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1664
    },
    {
      "name": "listenDrcCameraPhotoInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.CameraPhotoInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCameraPhotoInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "CameraPhotoInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1675
    },
    {
      "name": "cancelListenDrcCameraPhotoInfo",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCameraPhotoInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1690
    },
    {
      "name": "drcSmartPhotoTakePhoto",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSmartPhotoTakePhoto",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1702
    },
    {
      "name": "drcSetLinkageZoom",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.LinkageZoomParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetLinkageZoom",
      "cppArgs": [
        {
          "type": "LinkageZoomParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1739
    },
    {
      "name": "drcSendCameraScreenDrag",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraScreenDragParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSendCameraScreenDrag",
      "cppArgs": [
        {
          "type": "CameraScreenDragParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1752
    },
    {
      "name": "drcSetPhotoSize",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.PhotoSizeParam",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetPhotoSize",
      "cppArgs": [
        {
          "type": "PhotoSizeParam",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1765
    },
    {
      "name": "drcSetIntervalTakePhoto",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.IntervalTakePhotoSetParam",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIntervalTakePhoto",
      "cppArgs": [
        {
          "type": "IntervalTakePhotoSetParam",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1778
    },
    {
      "name": "drcIntervalTakePhoto",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.IntervalTakePhotoParam",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcIntervalTakePhoto",
      "cppArgs": [
        {
          "type": "IntervalTakePhotoParam",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1791
    },
    {
      "name": "drcStopTakePhoto",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcStopTakePhoto",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1804
    },
    {
      "name": "listenDrcIntervalTakePhotoStatus",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.IntervalTakePhotoStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcIntervalTakePhotoStatus",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "IntervalTakePhotoStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1842
    },
    {
      "name": "cancelListenDrcIntervalTakePhotoStatus",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcIntervalTakePhotoStatus",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1876
    },
    {
      "name": "drcCameraAimAtTarget",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraAimParam",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcCameraAimAtTarget",
      "cppArgs": [
        {
          "type": "CameraAimParam",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1890
    },
    {
      "name": "drcSetThermalGainMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ThermalGainModeSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetThermalGainMode",
      "cppArgs": [
        {
          "type": "ThermalGainModeSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 1964
    },
    {
      "name": "drcSetCameraApertureValue",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraApertureValueSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraApertureValue",
      "cppArgs": [
        {
          "type": "CameraApertureValueSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2048
    },
    {
      "name": "drcSetCameraExposureMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraExposureModeSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraExposureMode",
      "cppArgs": [
        {
          "type": "CameraExposureModeSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2067
    },
    {
      "name": "drcSetCameraExposureValue",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraExposureSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraExposureValue",
      "cppArgs": [
        {
          "type": "CameraExposureSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2086
    },
    {
      "name": "drcSetCameraFocusMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraFocusModeSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraFocusMode",
      "cppArgs": [
        {
          "type": "CameraFocusModeSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2105
    },
    {
      "name": "drcSetCameraFocusValue",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraFocusValueSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraFocusValue",
      "cppArgs": [
        {
          "type": "CameraFocusValueSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2124
    },
    {
      "name": "drcSetCameraIso",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraIsoSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraIso",
      "cppArgs": [
        {
          "type": "CameraIsoSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2143
    },
    {
      "name": "drcSetCameraMechanicalShutter",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraMechanicalShutterSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraMechanicalShutter",
      "cppArgs": [
        {
          "type": "CameraMechanicalShutterSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2162
    },
    {
      "name": "drcCameraPointFocusAction",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraPointFocusActionParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcCameraPointFocusAction",
      "cppArgs": [
        {
          "type": "CameraPointFocusActionParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2181
    },
    {
      "name": "drcSetCameraShutter",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraShutterSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraShutter",
      "cppArgs": [
        {
          "type": "CameraShutterSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2200
    },
    {
      "name": "drcSetCameraWatermark",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraWatermarkParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraWatermark",
      "cppArgs": [
        {
          "type": "CameraWatermarkParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2219
    },
    {
      "name": "drcSetCameraDewarping",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraDewarpingSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraDewarping",
      "cppArgs": [
        {
          "type": "CameraDewarpingSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2238
    },
    {
      "name": "drcSetCameraScreenSplit",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraScreenSplitParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraScreenSplit",
      "cppArgs": [
        {
          "type": "CameraScreenSplitParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2260
    },
    {
      "name": "drcCleanFog",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CleanFogParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcCleanFog",
      "cppArgs": [
        {
          "type": "CleanFogParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2279
    },
    {
      "name": "drcSetThermalCurrentPalette",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ThermalCurrentPaletteSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetThermalCurrentPalette",
      "cppArgs": [
        {
          "type": "ThermalCurrentPaletteSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2301
    },
    {
      "name": "drcSetThermalSuperResolutionEnable",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ThermalSuperResolutionEnableParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetThermalSuperResolutionEnable",
      "cppArgs": [
        {
          "type": "ThermalSuperResolutionEnableParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2320
    },
    {
      "name": "drcSetIrMeteringMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.IrMeteringModeSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIrMeteringMode",
      "cppArgs": [
        {
          "type": "IrMeteringModeSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2339
    },
    {
      "name": "drcSetIrMeteringPoint",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.IrMeteringPointSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIrMeteringPoint",
      "cppArgs": [
        {
          "type": "IrMeteringPointSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2358
    },
    {
      "name": "drcSetIrMeteringArea",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.IrMeteringAreaSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIrMeteringArea",
      "cppArgs": [
        {
          "type": "IrMeteringAreaSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2377
    },
    {
      "name": "drcSetIrDisplayMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIrDisplayModeParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIrDisplayMode",
      "cppArgs": [
        {
          "type": "SetIrDisplayModeParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2396
    },
    {
      "name": "drcSetIrEnhanceMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIrEnhanceModeParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIrEnhanceMode",
      "cppArgs": [
        {
          "type": "SetIrEnhanceModeParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2415
    },
    {
      "name": "drcSetIrMixRate",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIrMixRateParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIrMixRate",
      "cppArgs": [
        {
          "type": "SetIrMixRateParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2434
    },
    {
      "name": "drcSetIsothermEnable",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIsothermEnableParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIsothermEnable",
      "cppArgs": [
        {
          "type": "SetIsothermEnableParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2453
    },
    {
      "name": "drcSetIsothermColorRenderingType",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIsothermColorRenderingTypeParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIsothermColorRenderingType",
      "cppArgs": [
        {
          "type": "SetIsothermColorRenderingTypeParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2472
    },
    {
      "name": "drcSetIsothermLowerUpperRange",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIsothermLowerUpperRangeParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIsothermLowerUpperRange",
      "cppArgs": [
        {
          "type": "SetIsothermLowerUpperRangeParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2491
    },
    {
      "name": "drcSetIsothermRenderingPolygon",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIsothermRenderingPolygonParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIsothermRenderingPolygon",
      "cppArgs": [
        {
          "type": "SetIsothermRenderingPolygonParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2510
    },
    {
      "name": "drcSetIsothermRoiBasedRenderingEnable",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetIsothermRoiBasedRenderingEnableParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetIsothermRoiBasedRenderingEnable",
      "cppArgs": [
        {
          "type": "SetIsothermRoiBasedRenderingEnableParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2529
    },
    {
      "name": "drcSetInfraredFillLightEnable",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.InfraredFillLightEnableParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetInfraredFillLightEnable",
      "cppArgs": [
        {
          "type": "InfraredFillLightEnableParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2548
    },
    {
      "name": "drcSetCameraNightVisionEnable",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraNightVisionEnableParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraNightVisionEnable",
      "cppArgs": [
        {
          "type": "CameraNightVisionEnableParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2567
    },
    {
      "name": "drcResetCameraSettings",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraSettingsResetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcResetCameraSettings",
      "cppArgs": [
        {
          "type": "CameraSettingsResetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2586
    },
    {
      "name": "drcSetCameraDenoiseLevelSet",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraDenoiseLevelSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraDenoiseLevelSet",
      "cppArgs": [
        {
          "type": "CameraDenoiseLevelSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2608
    },
    {
      "name": "drcSetVideoResolution",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.VideoResolutionSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetVideoResolution",
      "cppArgs": [
        {
          "type": "VideoResolutionSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2627
    },
    {
      "name": "drcSetCameraPhotoFormat",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraPhotoFormatSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCameraPhotoFormat",
      "cppArgs": [
        {
          "type": "CameraPhotoFormatSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2646
    },
    {
      "name": "drcSetPreRecordedStatus",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.PreRecordedStatusSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetPreRecordedStatus",
      "cppArgs": [
        {
          "type": "PreRecordedStatusSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2665
    },
    {
      "name": "drcSetPreRecordedTime",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.PreRecordedTimeSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetPreRecordedTime",
      "cppArgs": [
        {
          "type": "PreRecordedTimeSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2684
    },
    {
      "name": "drcSetCountDownAction",
      "params": [
        {
          "type": "int",
          "name": "countDownType"
        },
        {
          "type": "int",
          "name": "actionType"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetCountDownAction",
      "cppArgs": [
        {
          "type": "int",
          "name": "count_down_type",
          "output": false
        },
        {
          "type": "int",
          "name": "action_type",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2703
    },
    {
      "name": "drcSetAssistantVideoMode",
      "params": [
        {
          "type": "int",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetAssistantVideoMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2710
    },
    {
      "name": "drcSetAssistantVideoSwitch",
      "params": [
        {
          "type": "int",
          "name": "sw"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetAssistantVideoSwitch",
      "cppArgs": [
        {
          "type": "int",
          "name": "sw",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2717
    },
    {
      "name": "drcSetAlgorithmDehazeMode",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AlgorithmDehazeModeSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetAlgorithmDehazeMode",
      "cppArgs": [
        {
          "type": "AlgorithmDehazeModeSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2724
    },
    {
      "name": "drcSetAlgorithmDehazeLevel",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AlgorithmDehazeLevelSetParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetAlgorithmDehazeLevel",
      "cppArgs": [
        {
          "type": "AlgorithmDehazeLevelSetParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2743
    },
    {
      "name": "listenDroneCameraWatermarkSettings",
      "params": [
        {
          "type": "FlightHubCallback.DroneCameraWatermarkSettingsPushCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneCameraWatermarkSettings",
      "cppArgs": [],
      "cppCallback": [
        "DroneCameraWatermarkSettingsPush"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2768
    },
    {
      "name": "cancelListenDroneCameraWatermarkSettings",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneCameraWatermarkSettings",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CameraControlModule.java",
      "line": 2791
    }
  ],
  "ControlAuthModule": [
    {
      "name": "acquireFlightControlAuthority",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "acquireFlightControlAuthority",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 55
    },
    {
      "name": "releaseFlightControlAuthority",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "releaseFlightControlAuthority",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 91
    },
    {
      "name": "listenFlightControlAuthority",
      "params": [
        {
          "type": "FlightHubCallback.FlightControlAuthorityCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenFlightControlAuthority",
      "cppArgs": [],
      "cppCallback": [
        "bool"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 128
    },
    {
      "name": "cancelListenFlightControlAuthority",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenFlightControlAuthority",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 161
    },
    {
      "name": "acquirePayloadControlAuthority",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "acquirePayloadControlAuthority",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 173
    },
    {
      "name": "releasePayloadControlAuthority",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "releasePayloadControlAuthority",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 210
    },
    {
      "name": "listenPayloadControlAuthority",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "FlightHubCallback.PayloadControlAuthorityCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenPayloadControlAuthority",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        }
      ],
      "cppCallback": [
        "bool"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 248
    },
    {
      "name": "cancelListenPayloadControlAuthority",
      "params": [
        {
          "type": "String",
          "name": "payloadIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenPayloadControlAuthority",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "payload_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ControlAuthModule.java",
      "line": 282
    }
  ],
  "CustomSEIModule": [
    {
      "name": "customSEIEncode",
      "params": [
        {
          "type": "java.util.List<Integer>",
          "name": "frameData"
        },
        {
          "type": "java.util.List<com.dji.flighthubsdk.bean.SeiItem>",
          "name": "customSeiData"
        }
      ],
      "returnType": "java.util.List<Integer>",
      "cpp": "CustomSEIEncode",
      "cppArgs": [
        {
          "type": "std::vector<int>",
          "name": "frame_data",
          "output": false
        },
        {
          "type": "std::vector<SeiItem>",
          "name": "custom_sei_data",
          "output": false
        },
        {
          "type": "std::vector<int>",
          "name": "output_frame_data",
          "output": true
        }
      ],
      "cppCallback": null,
      "cppReturn": "bool",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CustomSEIModule.java",
      "line": 34
    },
    {
      "name": "customSEIDecode",
      "params": [
        {
          "type": "java.util.List<Integer>",
          "name": "frameData"
        }
      ],
      "returnType": "CustomSEIDecodeResult",
      "cpp": "CustomSEIDecode",
      "cppArgs": [
        {
          "type": "std::vector<int>",
          "name": "frame_data",
          "output": false
        },
        {
          "type": "SeiHeader",
          "name": "output_header",
          "output": true
        },
        {
          "type": "std::vector<SeiItem>",
          "name": "output_sei_data",
          "output": true
        }
      ],
      "cppCallback": null,
      "cppReturn": "bool",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/CustomSEIModule.java",
      "line": 93
    }
  ],
  "DeployModule": [
    {
      "name": "listenDockDeparturePoint",
      "params": [
        {
          "type": "FlightHubCallback.DockDeparturePointCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockDeparturePoint",
      "cppArgs": [],
      "cppCallback": [
        "DockDeparturePoint"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 56
    },
    {
      "name": "cancelListenDockDeparturePoint",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockDeparturePoint",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 80
    },
    {
      "name": "listenAircraftVisualScoutStatus",
      "params": [
        {
          "type": "FlightHubCallback.AircraftVisualScoutStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftVisualScoutStatus",
      "cppArgs": [],
      "cppCallback": [
        "AircraftVisualScoutStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 94
    },
    {
      "name": "cancelListenAircraftVisualScoutStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftVisualScoutStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 118
    },
    {
      "name": "listenAircraftVisualScoutAbnormalInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftVisualScoutAbnormalInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftVisualScoutAbnormalInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftVisualScoutAbnormalInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 132
    },
    {
      "name": "cancelListenAircraftVisualScoutAbnormalInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftVisualScoutAbnormalInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 156
    },
    {
      "name": "listenAircraftVisualScoutObstacleInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftVisualScoutObstacleInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftVisualScoutObstacleInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftVisualScoutObstacleInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 170
    },
    {
      "name": "cancelListenAircraftVisualScoutObstacleInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftVisualScoutObstacleInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 194
    },
    {
      "name": "listenAircraftEphemerisDownloadState",
      "params": [
        {
          "type": "FlightHubCallback.EphemerisDownloadStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftEphemerisDownloadState",
      "cppArgs": [],
      "cppCallback": [
        "EphemerisDownloadState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 208
    },
    {
      "name": "cancelListenAircraftEphemerisDownloadState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftEphemerisDownloadState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 232
    },
    {
      "name": "listenAircraftEphemerisInfo",
      "params": [
        {
          "type": "FlightHubCallback.EphemerisInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftEphemerisInfo",
      "cppArgs": [],
      "cppCallback": [
        "EphemerisInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 246
    },
    {
      "name": "cancelListenAircraftEphemerisInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftEphemerisInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 270
    },
    {
      "name": "downloadEphemeris",
      "params": [
        {
          "type": "com.dji.flighthubsdk.generated.DownloadEphemerisParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "downloadEphemeris",
      "cppArgs": [
        {
          "type": "DownloadEphemerisParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 284
    },
    {
      "name": "executeInOutWaylineDetect",
      "params": [
        {
          "type": "com.dji.flighthubsdk.generated.InOutWaylineDetectParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "executeInOutWaylineDetect",
      "cppArgs": [
        {
          "type": "InOutWaylineDetectParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 316
    },
    {
      "name": "setInOutWaylineFlight",
      "params": [
        {
          "type": "com.dji.flighthubsdk.generated.InOutWaylineFlightSettingParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setInOutWaylineFlight",
      "cppArgs": [
        {
          "type": "InOutWaylineFlightSettingParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 348
    },
    {
      "name": "getInOutWaylineFlightSetting",
      "params": [
        {
          "type": "FlightHubCallback.InOutWaylineFlightSettingCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getInOutWaylineFlightSetting",
      "cppArgs": [],
      "cppCallback": [
        "InOutWaylineFlightSettingParams",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeployModule.java",
      "line": 379
    }
  ],
  "DeviceDebugModule": [
    {
      "name": "openDebugMode",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.OpenDebugModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "openDebugMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OpenDebugModeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 93
    },
    {
      "name": "closeDebugMode",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.CloseDebugModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "closeDebugMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CloseDebugModeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 132
    },
    {
      "name": "openDockCover",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.OpenDockCoverCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "openDockCover",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OpenDockCoverResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 171
    },
    {
      "name": "getOpenDockCoverProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.OpenDockCoverProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getOpenDockCoverProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OpenDockCoverProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 210
    },
    {
      "name": "closeDockCover",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.CloseDockCoverCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "closeDockCover",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CloseDockCoverResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 249
    },
    {
      "name": "getCloseDockCoverProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.CloseDockCoverProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getCloseDockCoverProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CloseDockCoverProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 288
    },
    {
      "name": "deviceReboot",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.DeviceRebootCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deviceReboot",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceRebootResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 327
    },
    {
      "name": "getDeviceRebootProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.DeviceRebootProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceRebootProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceRebootProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 366
    },
    {
      "name": "deviceFormat",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.DeviceFormatCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deviceFormat",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceFormatResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 405
    },
    {
      "name": "getDeviceFormatProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.DeviceFormatProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceFormatProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceFormatProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 444
    },
    {
      "name": "openDrone",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.OpenDroneCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "openDrone",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OpenDroneResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 483
    },
    {
      "name": "closeDrone",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.CloseDroneCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "closeDrone",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CloseDroneResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 522
    },
    {
      "name": "openCharge",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.OpenChargeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "openCharge",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OpenChargeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 561
    },
    {
      "name": "closeCharge",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.CloseChargeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "closeCharge",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CloseChargeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 600
    },
    {
      "name": "setDockAirConditionerMode",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDockAirConditionerMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 640
    },
    {
      "name": "setDockSilentMode",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDockSilentMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 680
    },
    {
      "name": "setDistanceLimit",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "distance_limit_state"
        },
        {
          "type": "int",
          "name": "distance_limit_value"
        },
        {
          "type": "FlightHubCallback.SetDistanceLimitCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDistanceLimit",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "distance_limit_state",
          "output": false
        },
        {
          "type": "int",
          "name": "distance_limit_value",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetDistanceLimitResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 721
    },
    {
      "name": "setHeightLimit",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "height_limit"
        },
        {
          "type": "FlightHubCallback.SetHeightLimitCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setHeightLimit",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "height_limit",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetHeightLimitResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 758
    },
    {
      "name": "setObstacleAvoidance",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "obstacle_avoidance_state"
        },
        {
          "type": "FlightHubCallback.SetObstacleAvoidanceCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setObstacleAvoidance",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "obstacle_avoidance_state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetObstacleAvoidanceResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 795
    },
    {
      "name": "setRemainingPowerForRth",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "remaining_power_for_rth"
        },
        {
          "type": "FlightHubCallback.SetRemainingPowerForRthCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRemainingPowerForRth",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "remaining_power_for_rth",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetRemainingPowerForRthResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 832
    },
    {
      "name": "setNightLightsState",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "night_lights_state"
        },
        {
          "type": "FlightHubCallback.SetNightLightsStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setNightLightsState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "night_lights_state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetNightLightsStateResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 869
    },
    {
      "name": "switchAlarmLightState",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "alarm_state"
        },
        {
          "type": "FlightHubCallback.SwitchAlarmLightStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "switchAlarmLightState",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "alarm_state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SwitchAlarmStateResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 906
    },
    {
      "name": "esimOperatorSwitch",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "String",
          "name": "imei"
        },
        {
          "type": "int",
          "name": "operator_type"
        },
        {
          "type": "String",
          "name": "device_type"
        },
        {
          "type": "FlightHubCallback.EsimOperatorSwitchCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "esimOperatorSwitch",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "std::string",
          "name": "imei",
          "output": false
        },
        {
          "type": "int",
          "name": "operator_type",
          "output": false
        },
        {
          "type": "std::string",
          "name": "device_type",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "EsimOperatorSwitchResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 945
    },
    {
      "name": "simSlotSwitch",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "String",
          "name": "imei"
        },
        {
          "type": "int",
          "name": "sim_slot"
        },
        {
          "type": "String",
          "name": "device_type"
        },
        {
          "type": "FlightHubCallback.SimSlotSwitchCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "simSlotSwitch",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "std::string",
          "name": "imei",
          "output": false
        },
        {
          "type": "int",
          "name": "sim_slot",
          "output": false
        },
        {
          "type": "std::string",
          "name": "device_type",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SimSlotSwitchResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 984
    },
    {
      "name": "setBatteryStoreMode",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "battery_store_mode"
        },
        {
          "type": "FlightHubCallback.SetBatteryStoreModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setBatteryStoreMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "battery_store_mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetBatteryStoreModeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1021
    },
    {
      "name": "startManualBatterySwap",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "slot_id"
        },
        {
          "type": "FlightHubCallback.ManualBatterySwapCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "startManualBatterySwap",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "slot_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ManualBatterySwapResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1059
    },
    {
      "name": "getManualBatterySwapProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.ManualBatterySwapProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getManualBatterySwapProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ManualBatterySwapProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1095
    },
    {
      "name": "setDonglePowerSwitch",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "power_state"
        },
        {
          "type": "FlightHubCallback.DonglePowerSwitchCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDonglePowerSwitch",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "power_state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DonglePowerSwitchResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1134
    },
    {
      "name": "setLowPowerSwitch",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "low_power_mode"
        },
        {
          "type": "FlightHubCallback.LowPowerSwitchCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setLowPowerSwitch",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "low_power_mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "LowPowerSwitchResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1171
    },
    {
      "name": "getEsimOperatorSwitchProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.EsimOperatorSwitchProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getEsimOperatorSwitchProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "EsimOperatorSwitchProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1207
    },
    {
      "name": "setGeoCagingEnable",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "geoCagingSwitch"
        },
        {
          "type": "java.util.List<com.dji.flighthubsdk.bean.GeoCagingInfoParam>",
          "name": "geoCagingInfos"
        },
        {
          "type": "FlightHubCallback.SetGeoCagingEnableCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setGeoCagingEnable",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "geo_caging_switch",
          "output": false
        },
        {
          "type": "std::vector<GeoCagingInfoParam>",
          "name": "geo_caging_infos",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1245
    },
    {
      "name": "subscribeDockCoverOpenProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDockCoverOpenProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDockCoverOpenProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "OpenDockCoverResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1282
    },
    {
      "name": "unSubscribeDockCoverOpenProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDockCoverOpenProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1312
    },
    {
      "name": "subscribeDockCoverCloseProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDockCoverCloseProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDockCoverCloseProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "CloseDockCoverResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1327
    },
    {
      "name": "unSubscribeDockCoverCloseProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDockCoverCloseProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1357
    },
    {
      "name": "subscribeDeviceRebootProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDeviceRebootProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDeviceRebootProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "DeviceRebootResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1372
    },
    {
      "name": "unSubscribeDeviceRebootProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDeviceRebootProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1402
    },
    {
      "name": "subscribeDeviceFormatProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDeviceFormatProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDeviceFormatProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "DeviceFormatResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1417
    },
    {
      "name": "unSubscribeDeviceFormatProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDeviceFormatProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1447
    },
    {
      "name": "subscribeDroneOpenProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDroneOpenProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDroneOpenProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "OpenDroneResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1462
    },
    {
      "name": "unSubscribeDroneOpenProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDroneOpenProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1492
    },
    {
      "name": "subscribeDroneCloseProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDroneCloseProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDroneCloseProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "CloseDroneResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1507
    },
    {
      "name": "unSubscribeDroneCloseProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDroneCloseProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1537
    },
    {
      "name": "subscribeDroneFormatProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDroneFormatProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDroneFormatProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "DroneFormatResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1552
    },
    {
      "name": "unSubscribeDroneFormatProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDroneFormatProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1582
    },
    {
      "name": "subscribeDroneChargeOpenProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDroneChargeOpenProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDroneChargeOpenProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "OpenChargeResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1597
    },
    {
      "name": "unSubscribeDroneChargeOpenProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDroneChargeOpenProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1627
    },
    {
      "name": "subscribeDroneChargeCloseProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDroneChargeCloseProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDroneChargeCloseProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "CloseChargeResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1642
    },
    {
      "name": "unSubscribeDroneChargeCloseProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDroneChargeCloseProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1672
    },
    {
      "name": "subscribeDeviceEsimOperatorSwitchProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDeviceEsimOperatorSwitchProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDeviceEsimOperatorSwitchProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "EsimOperatorSwitchResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1687
    },
    {
      "name": "unSubscribeDeviceEsimOperatorSwitchProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDeviceEsimOperatorSwitchProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1717
    },
    {
      "name": "subscribeDeviceSimSlotSwitchProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.SubscribeDeviceSimSlotSwitchProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeDeviceSimSlotSwitchProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "SimSlotSwitchResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1732
    },
    {
      "name": "unSubscribeDeviceSimSlotSwitchProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeDeviceSimSlotSwitchProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1762
    },
    {
      "name": "droneFormat",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.DroneFormatCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "droneFormat",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DroneFormatResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1776
    },
    {
      "name": "droneSdrWorkMode",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "droneSdrWorkMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1813
    },
    {
      "name": "cloudEnvironmentSwitch",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CloudEnvironmentSwitchParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "cloudEnvironmentSwitch",
      "cppArgs": [
        {
          "type": "CloudEnvironmentSwitchParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1849
    },
    {
      "name": "cloudEnvironmentSwitchCallback",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CloudEnvironmentSwitchCallbackParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "cloudEnvironmentSwitchCallback",
      "cppArgs": [
        {
          "type": "CloudEnvironmentSwitchCallbackParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1884
    },
    {
      "name": "listenDeviceCloudEnvironmentSwitchProgress",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.DeviceCloudEnvironmentSwitchProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDeviceCloudEnvironmentSwitchProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "CloudEnvironmentSwitchResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1920
    },
    {
      "name": "cancelListenDeviceCloudEnvironmentSwitchProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDeviceCloudEnvironmentSwitchProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceDebugModule.java",
      "line": 1946
    }
  ],
  "DeviceHMSModule": [
    {
      "name": "listenDeviceHMS",
      "params": [
        {
          "type": "FlightHubCallback.DeviceHmsCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDeviceHMS",
      "cppArgs": [],
      "cppCallback": [
        "HmsData"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceHMSModule.java",
      "line": 27
    },
    {
      "name": "cancelListenDeviceHMS",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDeviceHMS",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceHMSModule.java",
      "line": 61
    }
  ],
  "DeviceManageModule": [
    {
      "name": "getDeviceList",
      "params": [
        {
          "type": "FlightHubCallback.DeviceListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceList",
      "cppArgs": [],
      "cppCallback": [
        "std::vector<DeviceTopo>",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 64
    },
    {
      "name": "getDeviceDetailInfo",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "FlightHubCallback.GetDeviceDetailInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceDetailInfo",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceDetailInfo"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 106
    },
    {
      "name": "modifyDeviceName",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ModifyDeviceNameParam",
          "name": "device_list"
        },
        {
          "type": "FlightHubCallback.ModifyDeviceNameCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "modifyDeviceName",
      "cppArgs": [
        {
          "type": "ModifyDeviceNameParam",
          "name": "device_list",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 148
    },
    {
      "name": "unbindDevice",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "device_sns"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "unbindDevice",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 195
    },
    {
      "name": "listenWorkspaceDeviceChanged",
      "params": [
        {
          "type": "FlightHubCallback.WorkspaceDeviceChangeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenWorkspaceDeviceChanged",
      "cppArgs": [],
      "cppCallback": [
        "WorkspaceDeviceChange"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 247
    },
    {
      "name": "cancelListenWorkspaceDeviceChanged",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenWorkspaceDeviceChanged",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 280
    },
    {
      "name": "listenDeviceTopoChanged",
      "params": [
        {
          "type": "FlightHubCallback.DeviceTopoChangeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDeviceTopoChanged",
      "cppArgs": [],
      "cppCallback": [
        "DeviceTopoChange"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 294
    },
    {
      "name": "cancelListenDeviceTopoChanged",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDeviceTopoChanged",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 328
    },
    {
      "name": "getDockDeviceStatus",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.DockDeviceStatusListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDockDeviceStatus",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DockDeviceStatusResultList"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 342
    },
    {
      "name": "getDroneDeviceStatus",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.DroneDeviceStatusListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDroneDeviceStatus",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DroneDeviceStatusResultList"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceManageModule.java",
      "line": 388
    }
  ],
  "DeviceStateModule": [
    {
      "name": "listenDockOnlineStatus",
      "params": [
        {
          "type": "FlightHubCallback.DockOnlineStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockOnlineStatus",
      "cppArgs": [],
      "cppCallback": [
        "DockOnlineStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceStateModule.java",
      "line": 28
    },
    {
      "name": "cancelListenDockOnlineStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockOnlineStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceStateModule.java",
      "line": 58
    },
    {
      "name": "listenDroneOnlineStatus",
      "params": [
        {
          "type": "FlightHubCallback.DroneOnlineStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneOnlineStatus",
      "cppArgs": [],
      "cppCallback": [
        "DroneOnlineStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceStateModule.java",
      "line": 70
    },
    {
      "name": "cancelListenDroneOnlineStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneOnlineStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DeviceStateModule.java",
      "line": 104
    }
  ],
  "DiagnosisManagementModule": [
    {
      "name": "createSelfDiagnosis",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreateSelfDiagnosisParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.CreateSelfDiagnosisCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createSelfDiagnosis",
      "cppArgs": [
        {
          "type": "CreateSelfDiagnosisParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DiagnosisManagementModule.java",
      "line": 69
    },
    {
      "name": "operateSelfDiagnosis",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.OperateSelfDiagnosisParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.OperateSelfDiagnosisCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "operateSelfDiagnosis",
      "cppArgs": [
        {
          "type": "OperateSelfDiagnosisParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DiagnosisManagementModule.java",
      "line": 133
    },
    {
      "name": "getSelfDiagnosisReport",
      "params": [
        {
          "type": "String",
          "name": "reportUuid"
        },
        {
          "type": "FlightHubCallback.GetSelfDiagnosisReportCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getSelfDiagnosisReport",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "report_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "GetSelfDiagnosisReportResults",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DiagnosisManagementModule.java",
      "line": 197
    },
    {
      "name": "getSelfDiagnosisReportList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetSelfDiagnosisReportListParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetSelfDiagnosisReportListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getSelfDiagnosisReportList",
      "cppArgs": [
        {
          "type": "GetSelfDiagnosisReportListParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "GetSelfDiagnosisReportListResults",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DiagnosisManagementModule.java",
      "line": 244
    }
  ],
  "Dock": [
    {
      "name": "getLiveStream",
      "params": [
        {
          "type": "LiveInfo",
          "name": "params"
        }
      ],
      "returnType": "LiveModule",
      "cpp": "getLiveStream",
      "cppArgs": [
        {
          "type": "LiveInfo",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 55
    },
    {
      "name": "getLiveRecord",
      "params": [
        {
          "type": "LiveInfo",
          "name": "params"
        }
      ],
      "returnType": "LiveRecordModule",
      "cpp": "getLiveRecord",
      "cppArgs": [
        {
          "type": "LiveInfo",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveRecordModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 86
    },
    {
      "name": "getLiveDeviceModule",
      "params": [],
      "returnType": "LiveDeviceModule",
      "cpp": "getLiveDeviceModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveDeviceModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 116
    },
    {
      "name": "getDeployModule",
      "params": [],
      "returnType": "DeployModule",
      "cpp": "getDeployModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeployModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 129
    },
    {
      "name": "getDockControlModule",
      "params": [],
      "returnType": "DockControlModule",
      "cpp": "getDockControlModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDockControlModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 142
    },
    {
      "name": "getDockOsdModule",
      "params": [],
      "returnType": "DockOsdModule",
      "cpp": "getDockOsdModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDockOsdModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 154
    },
    {
      "name": "getRtkCalibrationModule",
      "params": [],
      "returnType": "RtkCalibrationModule",
      "cpp": "getRtkCalibrationModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IRtkCalibrationModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 171
    },
    {
      "name": "getNetworkTestModule",
      "params": [],
      "returnType": "NetworkTestModule",
      "cpp": "getNetworkTestModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<INetworkTestModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 184
    },
    {
      "name": "getDeviceDebugModule",
      "params": [],
      "returnType": "DeviceDebugModule",
      "cpp": "getDeviceDebugModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeviceDebugModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 197
    },
    {
      "name": "getDeviceStateModule",
      "params": [],
      "returnType": "DeviceStateModule",
      "cpp": "getDeviceStateModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeviceStateModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 210
    },
    {
      "name": "getDeviceHMSModule",
      "params": [],
      "returnType": "DeviceHMSModule",
      "cpp": "getDeviceHMSModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeviceHMSModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Dock.java",
      "line": 223
    }
  ],
  "DockControlModule": [
    {
      "name": "changeDockCameraPosition",
      "params": [
        {
          "type": "LiveInfo",
          "name": "liveInfo"
        },
        {
          "type": "DockCameraPosition",
          "name": "cameraPosition"
        },
        {
          "type": "String",
          "name": "gatewaySn"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "changeDockCameraPosition",
      "cppArgs": [
        {
          "type": "LiveInfo",
          "name": "live_info",
          "output": false
        },
        {
          "type": "int",
          "name": "camera_position",
          "output": false
        },
        {
          "type": "std::string",
          "name": "gateway_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 64
    },
    {
      "name": "listenDockAirConditionerStatusInfo",
      "params": [
        {
          "type": "FlightHubCallback.DockAirConditionerStatusInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockAirConditionerStatusInfo",
      "cppArgs": [],
      "cppCallback": [
        "DockAirConditionerStatusInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 107
    },
    {
      "name": "cancelListenDockAirConditionerStatusInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockAirConditionerStatusInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 134
    },
    {
      "name": "listenDockSupplementLightState",
      "params": [
        {
          "type": "FlightHubCallback.DockSupplementLightStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockSupplementLightState",
      "cppArgs": [],
      "cppCallback": [
        "DockSupplementLightState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 148
    },
    {
      "name": "cancelListenDockSupplementLightState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockSupplementLightState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 175
    },
    {
      "name": "setDockSupplementLightState",
      "params": [
        {
          "type": "boolean",
          "name": "state"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDockSupplementLightState",
      "cppArgs": [
        {
          "type": "bool",
          "name": "state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 189
    },
    {
      "name": "setDockChargeState",
      "params": [
        {
          "type": "boolean",
          "name": "state"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDockChargeState",
      "cppArgs": [
        {
          "type": "bool",
          "name": "state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 222
    },
    {
      "name": "setDockCoverState",
      "params": [
        {
          "type": "DockCoverMode",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDockCoverState",
      "cppArgs": [
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 255
    },
    {
      "name": "setDockAirConditionerMode",
      "params": [
        {
          "type": "int",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setDockAirConditionerMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockControlModule.java",
      "line": 289
    }
  ],
  "DockOsdModule": [
    {
      "name": "listenDockLocation",
      "params": [
        {
          "type": "FlightHubCallback.DockLocationCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockLocation",
      "cppArgs": [],
      "cppCallback": [
        "DockLocation"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 25
    },
    {
      "name": "cancelListenDockLocation",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockLocation",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 54
    },
    {
      "name": "listenDroneInDock",
      "params": [
        {
          "type": "FlightHubCallback.DroneInDockCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneInDock",
      "cppArgs": [],
      "cppCallback": [
        "DroneInDock"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 68
    },
    {
      "name": "cancelListenDroneInDock",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneInDock",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 97
    },
    {
      "name": "listenDockCoverState",
      "params": [
        {
          "type": "FlightHubCallback.DockCoverStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockCoverState",
      "cppArgs": [],
      "cppCallback": [
        "DockCoverState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 112
    },
    {
      "name": "cancelListenDockCoverState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockCoverState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 144
    },
    {
      "name": "listenDockMediaFileDetail",
      "params": [
        {
          "type": "FlightHubCallback.DockMediaFileDetailCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockMediaFileDetail",
      "cppArgs": [],
      "cppCallback": [
        "DockMediaFileDetail"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 159
    },
    {
      "name": "cancelListenDockMediaFileDetail",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockMediaFileDetail",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 191
    },
    {
      "name": "listenDockWirelessLink",
      "params": [
        {
          "type": "FlightHubCallback.DockWirelessLinkCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockWirelessLink",
      "cppArgs": [],
      "cppCallback": [
        "DockWirelessLink"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 206
    },
    {
      "name": "cancelListenDockWirelessLink",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockWirelessLink",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 238
    },
    {
      "name": "listenDockJobNumber",
      "params": [
        {
          "type": "FlightHubCallback.DockJobNumberCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockJobNumber",
      "cppArgs": [],
      "cppCallback": [
        "DockJobNumber"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 253
    },
    {
      "name": "cancelListenDockJobNumber",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockJobNumber",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 285
    },
    {
      "name": "listenDockPowerState",
      "params": [
        {
          "type": "FlightHubCallback.DockPowerStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockPowerState",
      "cppArgs": [],
      "cppCallback": [
        "DockPowerState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 300
    },
    {
      "name": "cancelListenDockPowerState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockPowerState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 332
    },
    {
      "name": "listenDockStorageState",
      "params": [
        {
          "type": "FlightHubCallback.DockStorageStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockStorageState",
      "cppArgs": [],
      "cppCallback": [
        "DockStorageState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 347
    },
    {
      "name": "cancelListenDockStorageState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockStorageState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 379
    },
    {
      "name": "listenDockFirstPowerOnTime",
      "params": [
        {
          "type": "FlightHubCallback.DockFirstPowerOnTimeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockFirstPowerOnTime",
      "cppArgs": [],
      "cppCallback": [
        "DockFirstPowerOnTime"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 394
    },
    {
      "name": "cancelListenDockFirstPowerOnTime",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockFirstPowerOnTime",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 426
    },
    {
      "name": "listenDockAccumulatedRunningTime",
      "params": [
        {
          "type": "FlightHubCallback.DockAccTimeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockAccumulatedRunningTime",
      "cppArgs": [],
      "cppCallback": [
        "DockAccTime"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 441
    },
    {
      "name": "cancelListenDockAccumulatedRunningTime",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockAccumulatedRunningTime",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 473
    },
    {
      "name": "listenDockAlternateLandPoint",
      "params": [
        {
          "type": "FlightHubCallback.DockAlternateLandPointCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockAlternateLandPoint",
      "cppArgs": [],
      "cppCallback": [
        "DockAlternateLandPoint"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 488
    },
    {
      "name": "cancelListenDockAlternateLandPoint",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockAlternateLandPoint",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 520
    },
    {
      "name": "listenDockPositionState",
      "params": [
        {
          "type": "FlightHubCallback.DockPositionStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockPositionState",
      "cppArgs": [],
      "cppCallback": [
        "DockPositionState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 535
    },
    {
      "name": "cancelListenDockPositionState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockPositionState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 567
    },
    {
      "name": "listenDockActivationTime",
      "params": [
        {
          "type": "FlightHubCallback.DockActivationTimeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockActivationTime",
      "cppArgs": [],
      "cppCallback": [
        "DockActivationTime"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 582
    },
    {
      "name": "cancelListenDockActivationTime",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockActivationTime",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 614
    },
    {
      "name": "listenDockBatteryStoreMode",
      "params": [
        {
          "type": "FlightHubCallback.DockBatteryStoreModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockBatteryStoreMode",
      "cppArgs": [],
      "cppCallback": [
        "DockBatteryStoreMode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 629
    },
    {
      "name": "cancelListenDockBatteryStoreMode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockBatteryStoreMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 661
    },
    {
      "name": "listenDockAlarmState",
      "params": [
        {
          "type": "FlightHubCallback.DockAlarmStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockAlarmState",
      "cppArgs": [],
      "cppCallback": [
        "DockAlarmState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 676
    },
    {
      "name": "cancelListenDockAlarmState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockAlarmState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 708
    },
    {
      "name": "listenDockDroneBatteryMaintenanceInfo",
      "params": [
        {
          "type": "FlightHubCallback.DockDroneBatteryMaintenanceInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockDroneBatteryMaintenanceInfo",
      "cppArgs": [],
      "cppCallback": [
        "DockDroneBatteryMaintenanceInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 723
    },
    {
      "name": "cancelListenDockDroneBatteryMaintenanceInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockDroneBatteryMaintenanceInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 755
    },
    {
      "name": "listenDockEmergencyStopState",
      "params": [
        {
          "type": "FlightHubCallback.DockEmergencyStopStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockEmergencyStopState",
      "cppArgs": [],
      "cppCallback": [
        "DockEmergencyStopState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 770
    },
    {
      "name": "cancelListenDockEmergencyStopState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockEmergencyStopState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 802
    },
    {
      "name": "listenDockSilentMode",
      "params": [
        {
          "type": "FlightHubCallback.DockSilentModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockSilentMode",
      "cppArgs": [],
      "cppCallback": [
        "DockSilentMode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 817
    },
    {
      "name": "cancelListenDockSilentMode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockSilentMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 849
    },
    {
      "name": "listenDockUserExperienceImprovement",
      "params": [
        {
          "type": "FlightHubCallback.DockUserExperienceImprovementCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockUserExperienceImprovement",
      "cppArgs": [],
      "cppCallback": [
        "DockUserExperienceImprovement"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 864
    },
    {
      "name": "cancelListenDockUserExperienceImprovement",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockUserExperienceImprovement",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 896
    },
    {
      "name": "listenDockDrcState",
      "params": [
        {
          "type": "FlightHubCallback.DockDrcStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockDrcState",
      "cppArgs": [],
      "cppCallback": [
        "DockDrcState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 911
    },
    {
      "name": "cancelListenDockDrcState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockDrcState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 943
    },
    {
      "name": "listenDockPutterState",
      "params": [
        {
          "type": "FlightHubCallback.DockPutterStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockPutterState",
      "cppArgs": [],
      "cppCallback": [
        "DockPutterState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 958
    },
    {
      "name": "cancelListenDockPutterState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockPutterState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 990
    },
    {
      "name": "listenDockRelativeAlternateLandPoint",
      "params": [
        {
          "type": "FlightHubCallback.DockRelativeAlternateLandPointCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockRelativeAlternateLandPoint",
      "cppArgs": [],
      "cppCallback": [
        "DockRelativeAlternateLandPoint"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1005
    },
    {
      "name": "cancelListenDockRelativeAlternateLandPoint",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockRelativeAlternateLandPoint",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1037
    },
    {
      "name": "listenDockSelfConvergeCoordinate",
      "params": [
        {
          "type": "FlightHubCallback.DockSelfConvergeCoordinateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockSelfConvergeCoordinate",
      "cppArgs": [],
      "cppCallback": [
        "DockSelfConvergeCoordinate"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1052
    },
    {
      "name": "cancelListenDockSelfConvergeCoordinate",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockSelfConvergeCoordinate",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1084
    },
    {
      "name": "listenDockFirmwareInfo",
      "params": [
        {
          "type": "FlightHubCallback.DockFirmwareInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockFirmwareInfo",
      "cppArgs": [],
      "cppCallback": [
        "DockFirmwareInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1099
    },
    {
      "name": "cancelListenDockFirmwareInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockFirmwareInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1135
    },
    {
      "name": "listenDockModeCode",
      "params": [
        {
          "type": "FlightHubCallback.DockModeCodeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockModeCode",
      "cppArgs": [],
      "cppCallback": [
        "DockModeCode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1150
    },
    {
      "name": "cancelListenDockModeCode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockModeCode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1181
    },
    {
      "name": "listenFlightTaskStepCode",
      "params": [
        {
          "type": "FlightHubCallback.FlightTaskStepCodeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenFlightTaskStepCode",
      "cppArgs": [],
      "cppCallback": [
        "FlightTaskStepCode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1195
    },
    {
      "name": "cancelListenFlightTaskStepCode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenFlightTaskStepCode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1225
    },
    {
      "name": "listenDockSubDevice",
      "params": [
        {
          "type": "FlightHubCallback.DockSubDeviceInfoListCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockSubDevice",
      "cppArgs": [],
      "cppCallback": [
        "DockSubDeviceInfoList"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1239
    },
    {
      "name": "cancelListenDockSubDevice",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockSubDevice",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1271
    },
    {
      "name": "listenDockNetworkState",
      "params": [
        {
          "type": "FlightHubCallback.DockNetworkStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockNetworkState",
      "cppArgs": [],
      "cppCallback": [
        "DockNetworkState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1286
    },
    {
      "name": "cancelListenDockNetworkState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockNetworkState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1318
    },
    {
      "name": "listenDockDroneChargeState",
      "params": [
        {
          "type": "FlightHubCallback.DockDroneChargeStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockDroneChargeState",
      "cppArgs": [],
      "cppCallback": [
        "DockDroneChargeState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1333
    },
    {
      "name": "cancelListenDockDroneChargeState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockDroneChargeState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1365
    },
    {
      "name": "listenDockMeteorologicalInfo",
      "params": [
        {
          "type": "FlightHubCallback.DockMeteorologicalInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockMeteorologicalInfo",
      "cppArgs": [],
      "cppCallback": [
        "DockMeteorologicalInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1380
    },
    {
      "name": "cancelListenDockMeteorologicalInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockMeteorologicalInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1412
    },
    {
      "name": "listenDockBackupBatteryInfo",
      "params": [
        {
          "type": "FlightHubCallback.DockBackupBatteryInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockBackupBatteryInfo",
      "cppArgs": [],
      "cppCallback": [
        "DockBackupBatteryInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1427
    },
    {
      "name": "cancelListenDockBackupBatteryInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockBackupBatteryInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1459
    },
    {
      "name": "listenDockMaintainStatusInfo",
      "params": [
        {
          "type": "FlightHubCallback.DockMaintainStatusInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockMaintainStatusInfo",
      "cppArgs": [],
      "cppCallback": [
        "DockMaintainStatusInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1474
    },
    {
      "name": "cancelListenDockMaintainStatusInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockMaintainStatusInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1506
    },
    {
      "name": "listenDockDongleInfos",
      "params": [
        {
          "type": "FlightHubCallback.DockDongleInfosCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockDongleInfos",
      "cppArgs": [],
      "cppCallback": [
        "DockDongleInfos"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1522
    },
    {
      "name": "cancelListenDockDongleInfos",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockDongleInfos",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1545
    },
    {
      "name": "listenDockAirConditionerMode",
      "params": [
        {
          "type": "FlightHubCallback.DockAirConditionerModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockAirConditionerMode",
      "cppArgs": [],
      "cppCallback": [
        "DockAirConditionerMode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1559
    },
    {
      "name": "cancelListenDockAirConditionerMode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockAirConditionerMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DockOsdModule.java",
      "line": 1582
    }
  ],
  "DrcModule": [
    {
      "name": "listenLinkStatus",
      "params": [
        {
          "type": "FlightHubCallback.LinkStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenLinkStatus",
      "cppArgs": [],
      "cppCallback": [
        "LinkStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 58
    },
    {
      "name": "cancelListenLinkStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenLinkStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 98
    },
    {
      "name": "connectDrcLink",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "connectDrcLink",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubSdkErrorCode"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 114
    },
    {
      "name": "disconnectDrcLink",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "disconnectDrcLink",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubSdkErrorCode"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 148
    },
    {
      "name": "drcRtcQualityTest",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcRtcQualityTest",
      "cppArgs": [
        {
          "type": "RtcQualityTestParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 188
    },
    {
      "name": "listenDrcDelayInfo",
      "params": [
        {
          "type": "FlightHubCallback.DrcDelayInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcDelayInfo",
      "cppArgs": [],
      "cppCallback": [
        "DrcDelayInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 235
    },
    {
      "name": "cancelListenDrcDelayInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcDelayInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 263
    },
    {
      "name": "listenDrcCountDownInfo",
      "params": [
        {
          "type": "FlightHubCallback.DrcCountDownInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcCountDownInfo",
      "cppArgs": [],
      "cppCallback": [
        "DrcCountDownInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 279
    },
    {
      "name": "cancelListenDrcCountDownInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcCountDownInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DrcModule.java",
      "line": 307
    }
  ],
  "Drone": [
    {
      "name": "getLiveStream",
      "params": [
        {
          "type": "LiveInfo",
          "name": "params"
        }
      ],
      "returnType": "LiveModule",
      "cpp": "getLiveStream",
      "cppArgs": [
        {
          "type": "LiveInfo",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 109
    },
    {
      "name": "getLiveRecord",
      "params": [
        {
          "type": "LiveInfo",
          "name": "params"
        }
      ],
      "returnType": "LiveRecordModule",
      "cpp": "getLiveRecord",
      "cppArgs": [
        {
          "type": "LiveInfo",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveRecordModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 140
    },
    {
      "name": "getLiveDeviceModule",
      "params": [],
      "returnType": "LiveDeviceModule",
      "cpp": "getLiveDeviceModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveDeviceModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 170
    },
    {
      "name": "getTakeoffModule",
      "params": [],
      "returnType": "TakeoffModule",
      "cpp": "getTakeoffModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ITakeoffModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 183
    },
    {
      "name": "getFlightControlModule",
      "params": [],
      "returnType": "FlightControlModule",
      "cpp": "getFlightControlModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFlightControlModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 200
    },
    {
      "name": "getControlAuthModule",
      "params": [],
      "returnType": "ControlAuthModule",
      "cpp": "getControlAuthModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IControlAuthModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 217
    },
    {
      "name": "getDrcModule",
      "params": [],
      "returnType": "DrcModule",
      "cpp": "getDrcModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDrcModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 234
    },
    {
      "name": "getFlightSettingsModule",
      "params": [],
      "returnType": "FlightSettingsModule",
      "cpp": "getFlightSettingsModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFlightSettingsModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 251
    },
    {
      "name": "getTestFlightModule",
      "params": [],
      "returnType": "TestFlightModule",
      "cpp": "getTestFlightModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ITestFlightModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 268
    },
    {
      "name": "getOnboardAiModule",
      "params": [],
      "returnType": "OnboardAiModule",
      "cpp": "getOnboardAiModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IOnboardAiModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 285
    },
    {
      "name": "getCameraControlModule",
      "params": [],
      "returnType": "CameraControlModule",
      "cpp": "getCameraControlModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ICameraControlModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 304
    },
    {
      "name": "getPsdkControlModule",
      "params": [],
      "returnType": "PsdkControlModule",
      "cpp": "getPsdkControlModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IPsdkControlModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 314
    },
    {
      "name": "getDroneOsdModule",
      "params": [],
      "returnType": "DroneOsdModule",
      "cpp": "getDroneOsdModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDroneOsdModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 324
    },
    {
      "name": "getFlyToPointModule",
      "params": [],
      "returnType": "FlyToPointModule",
      "cpp": "getFlyToPointModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFlyToPointModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 374
    },
    {
      "name": "getInFlightWaylineModule",
      "params": [],
      "returnType": "InFlightWaylineModule",
      "cpp": "getInFlightWaylineModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IInFlightWaylineModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 391
    },
    {
      "name": "getPoiModule",
      "params": [],
      "returnType": "PoiModule",
      "cpp": "getPoiModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IPoiModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 409
    },
    {
      "name": "getFlightTaskControlModule",
      "params": [],
      "returnType": "FlightTaskControlModule",
      "cpp": "getFlightTaskControlModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFlightTaskControlModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 441
    },
    {
      "name": "getDeviceStateModule",
      "params": [],
      "returnType": "DeviceStateModule",
      "cpp": "getDeviceStateModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeviceStateModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 467
    },
    {
      "name": "getDeviceHMSModule",
      "params": [],
      "returnType": "DeviceHMSModule",
      "cpp": "getDeviceHMSModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeviceHMSModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 480
    },
    {
      "name": "getDeviceDebugModule",
      "params": [],
      "returnType": "DeviceDebugModule",
      "cpp": "getDeviceDebugModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeviceDebugModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 493
    },
    {
      "name": "getAIBoxModule",
      "params": [],
      "returnType": "AIBoxModule",
      "cpp": "getAIBoxModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IAIBoxModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Drone.java",
      "line": 506
    }
  ],
  "DroneOsdModule": [
    {
      "name": "listenAircraftPayloadsOsdInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftPayloadsOsdInfoListCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftPayloadsOsdInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftPayloadsOsdInfoList"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 39
    },
    {
      "name": "cancelListenAircraftPayloadsOsdInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftPayloadsOsdInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 75
    },
    {
      "name": "listenAircraftGear",
      "params": [
        {
          "type": "FlightHubCallback.AircraftGearCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftGear",
      "cppArgs": [],
      "cppCallback": [
        "AircraftGear"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 92
    },
    {
      "name": "cancelListenAircraftGear",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftGear",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 130
    },
    {
      "name": "listenAircraftHomeDistance",
      "params": [
        {
          "type": "FlightHubCallback.AircraftHomeDistanceCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftHomeDistance",
      "cppArgs": [],
      "cppCallback": [
        "AircraftHomeDistance"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 147
    },
    {
      "name": "cancelListenAircraftHomeDistance",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftHomeDistance",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 184
    },
    {
      "name": "listenAircraftPositionState",
      "params": [
        {
          "type": "FlightHubCallback.AircraftPositionStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftPositionState",
      "cppArgs": [],
      "cppCallback": [
        "AircraftPositionState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 201
    },
    {
      "name": "cancelListenAircraftPositionState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftPositionState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 238
    },
    {
      "name": "listenAircraftControlSource",
      "params": [
        {
          "type": "FlightHubCallback.AircraftControlSourceCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftControlSource",
      "cppArgs": [],
      "cppCallback": [
        "AircraftControlSource"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 255
    },
    {
      "name": "cancelListenAircraftControlSource",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftControlSource",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 294
    },
    {
      "name": "listenAircraftLimitsInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftLimitsInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftLimitsInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftLimitsInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 311
    },
    {
      "name": "cancelListenAircraftLimitsInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftLimitsInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 349
    },
    {
      "name": "listenAircraftBatteryWarningThresholds",
      "params": [
        {
          "type": "FlightHubCallback.AircraftBatteryWarningThresholdsCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftBatteryWarningThresholds",
      "cppArgs": [],
      "cppCallback": [
        "AircraftBatteryWarningThresholds"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 366
    },
    {
      "name": "cancelListenAircraftBatteryWarningThresholds",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftBatteryWarningThresholds",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 403
    },
    {
      "name": "listenAircraftFirmwareStatus",
      "params": [
        {
          "type": "FlightHubCallback.AircraftFirmwareStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftFirmwareStatus",
      "cppArgs": [],
      "cppCallback": [
        "AircraftFirmwareStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 420
    },
    {
      "name": "cancelListenAircraftFirmwareStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftFirmwareStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 458
    },
    {
      "name": "listenAircraftCurrentRthMode",
      "params": [
        {
          "type": "FlightHubCallback.AircraftCurrentRthModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftCurrentRthMode",
      "cppArgs": [],
      "cppCallback": [
        "AircraftCurrentRthMode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 475
    },
    {
      "name": "cancelListenAircraftCurrentRthMode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftCurrentRthMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 512
    },
    {
      "name": "listenAircraftTotalFlightInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftTotalFlightInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftTotalFlightInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftTotalFlightInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 529
    },
    {
      "name": "cancelListenAircraftTotalFlightInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftTotalFlightInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 566
    },
    {
      "name": "listenAircraftActivationTime",
      "params": [
        {
          "type": "FlightHubCallback.AircraftActivationTimeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftActivationTime",
      "cppArgs": [],
      "cppCallback": [
        "AircraftActivationTime"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 583
    },
    {
      "name": "cancelListenAircraftActivationTime",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftActivationTime",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 620
    },
    {
      "name": "listenAircraftMaintainStatusInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftMaintainStatusInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftMaintainStatusInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftMaintainStatusInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 637
    },
    {
      "name": "cancelListenAircraftMaintainStatusInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftMaintainStatusInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 674
    },
    {
      "name": "listenAircraftNightLightsState",
      "params": [
        {
          "type": "FlightHubCallback.AircraftNightLightsStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftNightLightsState",
      "cppArgs": [],
      "cppCallback": [
        "AircraftNightLightsState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 691
    },
    {
      "name": "cancelListenAircraftNightLightsState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftNightLightsState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 728
    },
    {
      "name": "listenAircraftObstacleAvoidanceState",
      "params": [
        {
          "type": "FlightHubCallback.AircraftObstacleAvoidanceStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftObstacleAvoidanceState",
      "cppArgs": [],
      "cppCallback": [
        "AircraftObstacleAvoidanceState"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 745
    },
    {
      "name": "cancelListenAircraftObstacleAvoidanceState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftObstacleAvoidanceState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 782
    },
    {
      "name": "listenAircraftStorageInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftStorageInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftStorageInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftStorageInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 799
    },
    {
      "name": "cancelListenAircraftStorageInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftStorageInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 836
    },
    {
      "name": "listenAircraftTrackId",
      "params": [
        {
          "type": "FlightHubCallback.AircraftTrackIdCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftTrackId",
      "cppArgs": [],
      "cppCallback": [
        "AircraftTrackId"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 853
    },
    {
      "name": "cancelListenAircraftTrackId",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftTrackId",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 890
    },
    {
      "name": "listenAircraftComplianceInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftComplianceInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftComplianceInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftComplianceInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 907
    },
    {
      "name": "cancelListenAircraftComplianceInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftComplianceInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 944
    },
    {
      "name": "listenAircraftPayloadsCamerasList",
      "params": [
        {
          "type": "FlightHubCallback.AircraftPayloadsCamerasListCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftPayloadsCamerasList",
      "cppArgs": [],
      "cppCallback": [
        "AircraftPayloadsCamerasList"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 961
    },
    {
      "name": "cancelListenAircraftPayloadsCamerasList",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftPayloadsCamerasList",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 998
    },
    {
      "name": "listenAircraftRcLostAction",
      "params": [
        {
          "type": "FlightHubCallback.AircraftRcLostActionCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftRcLostAction",
      "cppArgs": [],
      "cppCallback": [
        "AircraftRcLostAction"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1015
    },
    {
      "name": "cancelListenAircraftRcLostAction",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftRcLostAction",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1052
    },
    {
      "name": "listenAircraftRthInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftRthInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftRthInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftRthInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1069
    },
    {
      "name": "cancelListenAircraftRthInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftRthInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1106
    },
    {
      "name": "listenAircraftHomeGeographicalInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftHomeGeographicalInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftHomeGeographicalInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftHomeGeographicalInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1123
    },
    {
      "name": "cancelListenAircraftHomeGeographicalInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftHomeGeographicalInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1160
    },
    {
      "name": "listenAircraftBatteryInfo",
      "params": [
        {
          "type": "FlightHubCallback.AircraftBatteryInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftBatteryInfo",
      "cppArgs": [],
      "cppCallback": [
        "AircraftBatteryInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1173
    },
    {
      "name": "cancelListenAircraftBatteryInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftBatteryInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1208
    },
    {
      "name": "listenAircraftAttitude",
      "params": [
        {
          "type": "FlightHubCallback.AircraftAttitudeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftAttitude",
      "cppArgs": [],
      "cppCallback": [
        "AircraftAttitude"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1222
    },
    {
      "name": "cancelListenAircraftAttitude",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftAttitude",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1257
    },
    {
      "name": "listenAircraftLocation",
      "params": [
        {
          "type": "FlightHubCallback.AircraftLocationCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftLocation",
      "cppArgs": [],
      "cppCallback": [
        "AircraftLocation"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1271
    },
    {
      "name": "cancelListenAircraftLocation",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftLocation",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1306
    },
    {
      "name": "listenAircraftModeCode",
      "params": [
        {
          "type": "FlightHubCallback.AircraftModeCodeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftModeCode",
      "cppArgs": [],
      "cppCallback": [
        "AircraftModeCode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1320
    },
    {
      "name": "cancelListenAircraftModeCode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftModeCode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1355
    },
    {
      "name": "listenAircraftWindSpeed",
      "params": [
        {
          "type": "FlightHubCallback.AircraftWindSpeedCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftWindSpeed",
      "cppArgs": [],
      "cppCallback": [
        "AircraftWindSpeed"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1369
    },
    {
      "name": "cancelListenAircraftWindSpeed",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftWindSpeed",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1404
    },
    {
      "name": "listenFlightTasksException",
      "params": [
        {
          "type": "FlightHubCallback.FlightTaskExceptionCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenFlightTasksException",
      "cppArgs": [],
      "cppCallback": [
        "FlightTaskException"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1419
    },
    {
      "name": "cancelListenFlightTasksException",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenFlightTasksException",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1453
    },
    {
      "name": "listenAircraftControlCode",
      "params": [
        {
          "type": "FlightHubCallback.AircraftControlCodeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftControlCode",
      "cppArgs": [],
      "cppCallback": [
        "AircraftControlCode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1467
    },
    {
      "name": "cancelListenAircraftControlCode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftControlCode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1497
    },
    {
      "name": "listenAircraftSpeed",
      "params": [
        {
          "type": "FlightHubCallback.AircraftSpeedCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftSpeed",
      "cppArgs": [],
      "cppCallback": [
        "AircraftSpeed"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1511
    },
    {
      "name": "cancelListenAircraftSpeed",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftSpeed",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1541
    },
    {
      "name": "listenAircraftPayloadsCameraLiveviewWorldRegion",
      "params": [
        {
          "type": "FlightHubCallback.AircraftPayloadsCameraLiveviewWorldRegionCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftPayloadsCameraLiveviewWorldRegion",
      "cppArgs": [],
      "cppCallback": [
        "AircraftPayloadsCameraLiveviewWorldRegion"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1555
    },
    {
      "name": "cancelListenAircraftPayloadsCameraLiveviewWorldRegion",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftPayloadsCameraLiveviewWorldRegion",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1589
    },
    {
      "name": "listenAircraftPayloadsGimbalAttitude",
      "params": [
        {
          "type": "FlightHubCallback.AircraftPayloadsGimbalAttitudeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftPayloadsGimbalAttitude",
      "cppArgs": [],
      "cppCallback": [
        "AircraftPayloadsGimbalAttitude"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1603
    },
    {
      "name": "cancelListenAircraftPayloadsGimbalAttitude",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftPayloadsGimbalAttitude",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1637
    },
    {
      "name": "listenAircraftPayloadsList",
      "params": [
        {
          "type": "FlightHubCallback.AircraftPayloadsListCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAircraftPayloadsList",
      "cppArgs": [],
      "cppCallback": [
        "AircraftPayloadsList"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1651
    },
    {
      "name": "cancelListenAircraftPayloadsList",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAircraftPayloadsList",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1685
    },
    {
      "name": "listenControlRightsCloudControlStatus",
      "params": [
        {
          "type": "FlightHubCallback.ControlRightsCloudControlStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenControlRightsCloudControlStatus",
      "cppArgs": [],
      "cppCallback": [
        "ControlRightsCloudControlStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1699
    },
    {
      "name": "cancelListenControlRightsCloudControlStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenControlRightsCloudControlStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1729
    },
    {
      "name": "listenControlRightsDeviceControlStatus",
      "params": [
        {
          "type": "FlightHubCallback.ControlRightsDeviceControlStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenControlRightsDeviceControlStatus",
      "cppArgs": [],
      "cppCallback": [
        "ControlRightsDeviceControlStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1743
    },
    {
      "name": "cancelListenControlRightsDeviceControlStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenControlRightsDeviceControlStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1773
    },
    {
      "name": "listenFlightTasksMediaFileDisplayAvailable",
      "params": [
        {
          "type": "FlightHubCallback.FlightTasksMediaFileDisplayAvailableCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenFlightTasksMediaFileDisplayAvailable",
      "cppArgs": [],
      "cppCallback": [
        "FlightTasksMediaFileDisplayAvailable"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1787
    },
    {
      "name": "cancelListenFlightTasksMediaFileDisplayAvailable",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenFlightTasksMediaFileDisplayAvailable",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1817
    },
    {
      "name": "listenHsiInfo",
      "params": [
        {
          "type": "FlightHubCallback.HsiInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenHsiInfo",
      "cppArgs": [],
      "cppCallback": [
        "HsiInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1834
    },
    {
      "name": "cancelListenHsiInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenHsiInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1868
    },
    {
      "name": "listenDroneModeCodeReason",
      "params": [
        {
          "type": "FlightHubCallback.DroneModeCodeReasonCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneModeCodeReason",
      "cppArgs": [],
      "cppCallback": [
        "DroneModeCodeReason"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1884
    },
    {
      "name": "cancelListenDroneModeCodeReason",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneModeCodeReason",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1907
    },
    {
      "name": "listenDroneDongleInfos",
      "params": [
        {
          "type": "FlightHubCallback.DroneDongleInfosCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneDongleInfos",
      "cppArgs": [],
      "cppCallback": [
        "DroneDongleInfos"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1921
    },
    {
      "name": "cancelListenDroneDongleInfos",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneDongleInfos",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1944
    },
    {
      "name": "listenDroneFlysafeDatabaseVersion",
      "params": [
        {
          "type": "FlightHubCallback.DroneFlysafeDatabaseVersionCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneFlysafeDatabaseVersion",
      "cppArgs": [],
      "cppCallback": [
        "DroneFlysafeDatabaseVersion"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1958
    },
    {
      "name": "cancelListenDroneFlysafeDatabaseVersion",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneFlysafeDatabaseVersion",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1981
    },
    {
      "name": "listenDroneWpmzVersion",
      "params": [
        {
          "type": "FlightHubCallback.DroneWpmzVersionCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneWpmzVersion",
      "cppArgs": [],
      "cppCallback": [
        "DroneWpmzVersion"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 1995
    },
    {
      "name": "cancelListenDroneWpmzVersion",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneWpmzVersion",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/DroneOsdModule.java",
      "line": 2018
    }
  ],
  "ElementModule": [
    {
      "name": "createElement",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ElementCreateParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ElementCreateElementCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createElement",
      "cppArgs": [
        {
          "type": "CreateElementParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CreateElementResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 67
    },
    {
      "name": "updateElement",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ElementUpdateParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ElementUpdateElementCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateElement",
      "cppArgs": [
        {
          "type": "UpdateElementParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UpdateElementResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 106
    },
    {
      "name": "listElementHierarchy",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ElementListHierarchyParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ElementListHierarchyCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "listElementHierarchy",
      "cppArgs": [
        {
          "type": "ListElementHierarchyParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ListElementHierarchyResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 145
    },
    {
      "name": "setElementVisibility",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ElementSetVisibilityParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ElementSetVisibilityCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setElementVisibility",
      "cppArgs": [
        {
          "type": "SetElementVisibilityParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetElementVisibilityResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 184
    },
    {
      "name": "deleteElement",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ElementDeleteParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ElementDeleteElementCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteElement",
      "cppArgs": [
        {
          "type": "DeleteElementParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeleteElementResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 223
    },
    {
      "name": "listenElementCreate",
      "params": [
        {
          "type": "FlightHubCallback.ElementCreateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenElementCreate",
      "cppArgs": [],
      "cppCallback": [
        "ElementCreateMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 264
    },
    {
      "name": "cancelListenElementCreate",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenElementCreate",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 289
    },
    {
      "name": "listenElementUpdate",
      "params": [
        {
          "type": "FlightHubCallback.ElementUpdateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenElementUpdate",
      "cppArgs": [],
      "cppCallback": [
        "ElementUpdateMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 299
    },
    {
      "name": "cancelListenElementUpdate",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenElementUpdate",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 324
    },
    {
      "name": "listenElementDelete",
      "params": [
        {
          "type": "FlightHubCallback.ElementDeleteCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenElementDelete",
      "cppArgs": [],
      "cppCallback": [
        "ElementDeleteMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 334
    },
    {
      "name": "cancelListenElementDelete",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenElementDelete",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/ElementModule.java",
      "line": 359
    }
  ],
  "FirmwareManageModule": [
    {
      "name": "getLatestFirmwareReleaseNote",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "deviceModelKeys"
        },
        {
          "type": "String",
          "name": "language"
        },
        {
          "type": "FlightHubCallback.GetLatestFirmwareReleaseNoteCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getLatestFirmwareReleaseNote",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_model_keys",
          "output": false
        },
        {
          "type": "std::string",
          "name": "language",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FirmwareReleaseNoteListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 78
    },
    {
      "name": "invokeFirmwareUpgrade",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FirmwareUpgradeParam",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.InvokeFirmwareUpgradeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "invokeFirmwareUpgrade",
      "cppArgs": [
        {
          "type": "FirmwareUpgradeParam",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FirmwareUpgradeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 125
    },
    {
      "name": "queryFirmwareUpgradeProgress",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.QueryFirmwareUpgradeProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "queryFirmwareUpgradeProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FirmwareUpgradeProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 173
    },
    {
      "name": "uploadFirmwareFile",
      "params": [
        {
          "type": "String",
          "name": "filePath"
        },
        {
          "type": "FlightHubCallback.UploadFirmwareFileCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "uploadFirmwareFile",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_path",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UploadFileResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 214
    },
    {
      "name": "releaseFirmware",
      "params": [
        {
          "type": "String",
          "name": "fileId"
        },
        {
          "type": "FlightHubCallback.ReleaseFirmwareCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "releaseFirmware",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 257
    },
    {
      "name": "unReleaseFirmware",
      "params": [
        {
          "type": "String",
          "name": "fileId"
        },
        {
          "type": "FlightHubCallback.UnReleaseFirmwareCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "unReleaseFirmware",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 298
    },
    {
      "name": "deleteFirmware",
      "params": [
        {
          "type": "String",
          "name": "fileId"
        },
        {
          "type": "FlightHubCallback.DeleteFirmwareCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteFirmware",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 339
    },
    {
      "name": "queryFirmwareList",
      "params": [
        {
          "type": "int",
          "name": "page"
        },
        {
          "type": "int",
          "name": "pageSize"
        },
        {
          "type": "FlightHubCallback.QueryFirmwareListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "queryFirmwareList",
      "cppArgs": [
        {
          "type": "int",
          "name": "page",
          "output": false
        },
        {
          "type": "int",
          "name": "page_size",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FirmwareListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 381
    },
    {
      "name": "queryFirmwareCompatibilityConfig",
      "params": [
        {
          "type": "FlightHubCallback.QueryFirmwareCompatibilityConfigCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "queryFirmwareCompatibilityConfig",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "FirmwareCompatibilityConfigResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 421
    },
    {
      "name": "checkFirmwareStatus",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "deviceSns"
        },
        {
          "type": "java.util.List<String>",
          "name": "status"
        },
        {
          "type": "FlightHubCallback.CheckFirmwareStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "checkFirmwareStatus",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        },
        {
          "type": "std::vector<std::string>",
          "name": "status",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FirmwareStatusListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 463
    },
    {
      "name": "submitFirmwareInfo",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FirmwareInfoParam",
          "name": "firmwareInfo"
        },
        {
          "type": "FlightHubCallback.SubmitFirmwareInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "submitFirmwareInfo",
      "cppArgs": [
        {
          "type": "FirmwareInfoParam",
          "name": "firmware_info",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 515
    },
    {
      "name": "listenDeviceOtaProgress",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.DeviceOtaProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDeviceOtaProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "DeviceOtaProgress"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 565
    },
    {
      "name": "cancelListenDeviceOtaProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDeviceOtaProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FirmwareManageModule.java",
      "line": 595
    }
  ],
  "FlashLedModule": [
    {
      "name": "getFlashLedConfigList",
      "params": [
        {
          "type": "FlightHubCallback.FlashLedConfigListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getFlashLedConfigList",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "FlashLedConfigList"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlashLedModule.java",
      "line": 62
    },
    {
      "name": "createFlashLedConfig",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FlashLedConfigParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.FlashLedConfigCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createFlashLedConfig",
      "cppArgs": [
        {
          "type": "FlashLedConfigParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FlashLedConfig"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlashLedModule.java",
      "line": 107
    },
    {
      "name": "updateFlashLedConfig",
      "params": [
        {
          "type": "String",
          "name": "configId"
        },
        {
          "type": "com.dji.flighthubsdk.bean.FlashLedConfigParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.FlashLedConfigCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateFlashLedConfig",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "config_id",
          "output": false
        },
        {
          "type": "FlashLedConfigParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FlashLedConfig"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlashLedModule.java",
      "line": 159
    },
    {
      "name": "deleteFlashLedConfig",
      "params": [
        {
          "type": "String",
          "name": "configId"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteFlashLedConfig",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "config_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlashLedModule.java",
      "line": 210
    }
  ],
  "FlightControlModule": [
    {
      "name": "drcEmergencyStop",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcEmergencyStop",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 59
    },
    {
      "name": "drcEmergencyLanding",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcEmergencyLanding",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 95
    },
    {
      "name": "drcForceLanding",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcForceLanding",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 131
    },
    {
      "name": "returnHome",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "returnHome",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 167
    },
    {
      "name": "returnHomeCancel",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "returnHomeCancel",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 203
    },
    {
      "name": "drcSendStickControl",
      "params": [
        {
          "type": "StickControlData",
          "name": "data"
        }
      ],
      "returnType": "void",
      "cpp": "drcSendStickControl",
      "cppArgs": [
        {
          "type": "StickControlData",
          "name": "data",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 241
    },
    {
      "name": "drcSetDroneHover",
      "params": [
        {
          "type": "int",
          "name": "duration"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetDroneHover",
      "cppArgs": [
        {
          "type": "int",
          "name": "duration",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 303
    },
    {
      "name": "drcSetFollowMouseParameter",
      "params": [
        {
          "type": "int",
          "name": "speed"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetFollowMouseParameter",
      "cppArgs": [
        {
          "type": "int",
          "name": "speed",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 311
    },
    {
      "name": "drcSetNightLightsState",
      "params": [
        {
          "type": "int",
          "name": "nightLightsState"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetNightLightsState",
      "cppArgs": [
        {
          "type": "int",
          "name": "night_lights_state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 319
    },
    {
      "name": "drcSetStealthState",
      "params": [
        {
          "type": "int",
          "name": "stealthState"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetStealthState",
      "cppArgs": [
        {
          "type": "int",
          "name": "stealth_state",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 327
    },
    {
      "name": "drcOpenParachute",
      "params": [
        {
          "type": "int",
          "name": "force"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcOpenParachute",
      "cppArgs": [
        {
          "type": "int",
          "name": "force",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 335
    },
    {
      "name": "drcSetFlashLed",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FlashLedParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcSetFlashLed",
      "cppArgs": [
        {
          "type": "FlashLedParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 345
    },
    {
      "name": "drcCameraLookAt",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CameraLookAtParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcCameraLookAt",
      "cppArgs": [
        {
          "type": "CameraLookAtParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 367
    },
    {
      "name": "listenDrcOsdInfo",
      "params": [
        {
          "type": "FlightHubCallback.DrcOsdInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcOsdInfo",
      "cppArgs": [],
      "cppCallback": [
        "DrcOsdInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 391
    },
    {
      "name": "cancelListenDrcOsdInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcOsdInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 419
    },
    {
      "name": "listenDrcBatteriesInfo",
      "params": [
        {
          "type": "FlightHubCallback.DrcBatteriesInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcBatteriesInfo",
      "cppArgs": [],
      "cppCallback": [
        "DrcBatteriesInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 437
    },
    {
      "name": "cancelListenDrcBatteriesInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcBatteriesInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 465
    },
    {
      "name": "listenDrcParachuteInfo",
      "params": [
        {
          "type": "FlightHubCallback.DrcParachuteInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcParachuteInfo",
      "cppArgs": [],
      "cppCallback": [
        "DrcParachuteInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 483
    },
    {
      "name": "cancelListenDrcParachuteInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcParachuteInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 511
    },
    {
      "name": "listenDrcFlashLed",
      "params": [
        {
          "type": "FlightHubCallback.FlashLedStateInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcFlashLed",
      "cppArgs": [],
      "cppCallback": [
        "FlashLedStateInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 529
    },
    {
      "name": "cancelListenDrcFlashLed",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcFlashLed",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightControlModule.java",
      "line": 553
    }
  ],
  "FlightSettingsModule": [
    {
      "name": "setFlightSmartPlanMode",
      "params": [
        {
          "type": "int",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.SetFlightSmartPlanModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setFlightSmartPlanMode",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FlightSmartPlanModeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightSettingsModule.java",
      "line": 61
    },
    {
      "name": "setOutOfControlAction",
      "params": [
        {
          "type": "String",
          "name": "action"
        },
        {
          "type": "FlightHubCallback.SetOutOfControlActionCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setOutOfControlAction",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "std::string",
          "name": "action",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FlightOutOfControlActionResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightSettingsModule.java",
      "line": 96
    },
    {
      "name": "setFlightTaskHeight",
      "params": [
        {
          "type": "int",
          "name": "height"
        },
        {
          "type": "FlightHubCallback.SetFlightTaskHeightCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setFlightTaskHeight",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "height",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FlightCommanderHeightResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightSettingsModule.java",
      "line": 131
    },
    {
      "name": "setRthAltitude",
      "params": [
        {
          "type": "int",
          "name": "altitude"
        },
        {
          "type": "FlightHubCallback.SetRthAltitudeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRthAltitude",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "altitude",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FlightRthAltitudeResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightSettingsModule.java",
      "line": 166
    },
    {
      "name": "setAirTransferEnable",
      "params": [
        {
          "type": "boolean",
          "name": "enabled"
        },
        {
          "type": "FlightHubCallback.SetAirTransferEnableCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setAirTransferEnable",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "bool",
          "name": "enabled",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightSettingsModule.java",
      "line": 201
    }
  ],
  "FlightTaskControlModule": [
    {
      "name": "pause",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "pause",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskControlModule.java",
      "line": 60
    },
    {
      "name": "resume",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "resume",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskControlModule.java",
      "line": 98
    },
    {
      "name": "listenWaylineTaskEvent",
      "params": [
        {
          "type": "FlightHubCallback.WaylineTaskEventCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenWaylineTaskEvent",
      "cppArgs": [],
      "cppCallback": [
        "WaylineTaskEvent"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskControlModule.java",
      "line": 135
    },
    {
      "name": "cancelListenWaylineTaskEvent",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenWaylineTaskEvent",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskControlModule.java",
      "line": 165
    },
    {
      "name": "getModule",
      "params": [],
      "returnType": "IFlightTaskControlModule",
      "cpp": "getModule",
      "cppArgs": [],
      "special": true,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskControlModule.java",
      "line": 177
    }
  ],
  "FlightTaskModule": [
    {
      "name": "getFlightTaskList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FlightTaskListParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetFlightTaskListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getFlightTaskList",
      "cppArgs": [
        {
          "type": "FlightTaskListParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "FlightTaskListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 71
    },
    {
      "name": "getCommandTaskList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetCommandTaskListParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetCommandTaskListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getCommandTaskList",
      "cppArgs": [
        {
          "type": "GetCommandTaskListParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetCommandTaskListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 106
    },
    {
      "name": "getFlightTaskTrack",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetFlightTaskTrackParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetFlightTaskTrackCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getFlightTaskTrack",
      "cppArgs": [
        {
          "type": "GetFlightTaskTrackParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetFlightTaskTrackResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 141
    },
    {
      "name": "createFlightTask",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreateTaskReq",
          "name": "req"
        },
        {
          "type": "FlightHubCallback.CreateFlightTaskCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createFlightTask",
      "cppArgs": [
        {
          "type": "CreateTaskReq",
          "name": "req",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CreateTaskResp"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 176
    },
    {
      "name": "getFlightTaskDetail",
      "params": [
        {
          "type": "String",
          "name": "taskUuid"
        },
        {
          "type": "FlightHubCallback.GetFlightTaskDetailCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getFlightTaskDetail",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "task_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TaskDetail"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 211
    },
    {
      "name": "editFlightTask",
      "params": [
        {
          "type": "String",
          "name": "taskUuid"
        },
        {
          "type": "com.dji.flighthubsdk.bean.EditTaskReq",
          "name": "req"
        },
        {
          "type": "FlightHubCallback.CreateFlightTaskCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "editFlightTask",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "task_uuid",
          "output": false
        },
        {
          "type": "EditTaskReq",
          "name": "req",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CreateTaskResp"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 241
    },
    {
      "name": "deleteFlightTask",
      "params": [
        {
          "type": "String",
          "name": "taskUuid"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteFlightTask",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "task_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 274
    },
    {
      "name": "updateFlightTaskStatus",
      "params": [
        {
          "type": "String",
          "name": "taskUuid"
        },
        {
          "type": "int",
          "name": "status"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateFlightTaskStatus",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "task_uuid",
          "output": false
        },
        {
          "type": "int",
          "name": "status",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 299
    },
    {
      "name": "batchUpdateFlightTaskStatus",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.BatchUpdateStatusReq",
          "name": "req"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "batchUpdateFlightTaskStatus",
      "cppArgs": [
        {
          "type": "BatchUpdateStatusReq",
          "name": "req",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 323
    },
    {
      "name": "getDeviceRecommendation",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.DeviceRecommendationReq",
          "name": "req"
        },
        {
          "type": "FlightHubCallback.GetDeviceRecommendationCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceRecommendation",
      "cppArgs": [
        {
          "type": "DeviceRecommendationReq",
          "name": "req",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceRecommendationResp"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 356
    },
    {
      "name": "getDeviceTcas",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "centerSn"
        },
        {
          "type": "FlightHubCallback.GetDeviceTcasCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceTcas",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "center_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetTCAInfosResp"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 391
    },
    {
      "name": "updateDeviceTcas",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "centerSn"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateDeviceTcas",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "center_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 425
    },
    {
      "name": "startRoaming",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.StartRoamingParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.StartRoamingCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "startRoaming",
      "cppArgs": [
        {
          "type": "StartRoamingParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 459
    },
    {
      "name": "setRoamingStationSn",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetRoamingStationSnParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.SetRoamingStationSnCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRoamingStationSn",
      "cppArgs": [
        {
          "type": "SetRoamingStationSnParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetRoamingStationSnResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 488
    },
    {
      "name": "getInFlightTaskTopos",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "droneSns"
        },
        {
          "type": "FlightHubCallback.GetInFlightTaskToposCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getInFlightTaskTopos",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "drone_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetInFlightTaskToposResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 522
    },
    {
      "name": "listenTaskTopoChanged",
      "params": [
        {
          "type": "FlightHubCallback.TaskTopoChangedCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenTaskTopoChanged",
      "cppArgs": [],
      "cppCallback": [
        "TaskTopoChangedEvent"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 556
    },
    {
      "name": "cancelListenTaskTopoChanged",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenTaskTopoChanged",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskModule.java",
      "line": 573
    }
  ],
  "FlightTaskRecordModule": [
    {
      "name": "exportFlightRecords",
      "params": [
        {
          "type": "String",
          "name": "userId"
        },
        {
          "type": "com.dji.flighthubsdk.bean.ExportFlightRecordsRequestParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ExportFlightRecordsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "exportFlightRecords",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "user_id",
          "output": false
        },
        {
          "type": "ExportFlightRecordsRequestParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ExportFlightRecordsResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskRecordModule.java",
      "line": 65
    },
    {
      "name": "exportFlightRecords",
      "params": [
        {
          "type": "String",
          "name": "userId"
        },
        {
          "type": "String",
          "name": "contentType"
        },
        {
          "type": "String",
          "name": "fileName"
        },
        {
          "type": "String",
          "name": "timeZone"
        },
        {
          "type": "String",
          "name": "locale"
        },
        {
          "type": "java.util.List<String>",
          "name": "fileType"
        },
        {
          "type": "java.util.List<String>",
          "name": "flightTaskIds"
        },
        {
          "type": "java.util.List<String>",
          "name": "metrics"
        },
        {
          "type": "FlightHubCallback.ExportFlightRecordsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "exportFlightRecords",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "user_id",
          "output": false
        },
        {
          "type": "ExportFlightRecordsRequestParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ExportFlightRecordsResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskRecordModule.java",
      "line": 119
    },
    {
      "name": "getExportFlightRecordsProgress",
      "params": [
        {
          "type": "String",
          "name": "contentType"
        },
        {
          "type": "int",
          "name": "status"
        },
        {
          "type": "String",
          "name": "sort"
        },
        {
          "type": "int",
          "name": "page"
        },
        {
          "type": "int",
          "name": "pageSize"
        },
        {
          "type": "String",
          "name": "exportId"
        },
        {
          "type": "FlightHubCallback.GetExportFlightRecordsProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getExportFlightRecordsProgress",
      "cppArgs": [
        {
          "type": "GetExportFlightRecordsProgressParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetExportFlightRecordsProgressResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlightTaskRecordModule.java",
      "line": 152
    }
  ],
  "FlyToPointModule": [
    {
      "name": "start",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FlyToPointParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.FlyToPointStartCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "start",
      "cppArgs": [
        {
          "type": "FlyToPointParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "std::string"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 62
    },
    {
      "name": "drcStop",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "drcStop",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 125
    },
    {
      "name": "subscribeFlyToDroneSelfPlanPath",
      "params": [
        {
          "type": "FlightHubCallback.FlyToDroneSelfPlanPathCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeFlyToDroneSelfPlanPath",
      "cppArgs": [],
      "cppCallback": [
        "FlyToDroneSelfPlanPath"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 176
    },
    {
      "name": "unSubscribeFlyToDroneSelfPlanPath",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeFlyToDroneSelfPlanPath",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 217
    },
    {
      "name": "subscribeFlyToPointProgress",
      "params": [
        {
          "type": "FlightHubCallback.FlyToPointProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeFlyToPointProgress",
      "cppArgs": [],
      "cppCallback": [
        "FlyToPointProgress"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 238
    },
    {
      "name": "unSubscribeFlyToPointProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeFlyToPointProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 279
    },
    {
      "name": "updateTargetPoints",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.FlyToUpdateTargetPointsParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateTargetPoints",
      "cppArgs": [
        {
          "type": "FlyToUpdateTargetPointsParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 293
    },
    {
      "name": "listenFlyToTaskEvent",
      "params": [
        {
          "type": "FlightHubCallback.FlyToTaskEventCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenFlyToTaskEvent",
      "cppArgs": [],
      "cppCallback": [
        "FlyToTaskEvent"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 342
    },
    {
      "name": "cancelListenFlyToTaskEvent",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenFlyToTaskEvent",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/FlyToPointModule.java",
      "line": 374
    }
  ],
  "HMSModule": [
    {
      "name": "queryHistoryHMSData",
      "params": [
        {
          "type": "HistoryHmsDataParam",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.QueryHistoryHMSDataCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "QueryHistoryHMSData",
      "cppArgs": [
        {
          "type": "HistoryHmsDataParam",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "HistoryHmsDataResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/HMSModule.java",
      "line": 60
    }
  ],
  "InFlightWaylineModule": [
    {
      "name": "createInFlightWaylineTask",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreateInFlightWaylineTaskParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.CreateInFlightWaylineTaskCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createInFlightWaylineTask",
      "cppArgs": [
        {
          "type": "CreateInFlightWaylineTaskParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "CreateInFlightWaylineTaskResult",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/InFlightWaylineModule.java",
      "line": 61
    },
    {
      "name": "controlInFlightWaylineTask",
      "params": [
        {
          "type": "InFlightWaylineControlAction",
          "name": "action"
        },
        {
          "type": "FlightHubCallback.InFlightWaylineControlCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "controlInFlightWaylineTask",
      "cppArgs": [
        {
          "type": "InFlightWaylineControlAction",
          "name": "action",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/InFlightWaylineModule.java",
      "line": 111
    },
    {
      "name": "getActiveInFlightWaylineTask",
      "params": [
        {
          "type": "FlightHubCallback.GetActiveInFlightWaylineTaskCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getActiveInFlightWaylineTask",
      "cppArgs": [],
      "cppCallback": [
        "ActiveInFlightWaylineTaskInfo",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/InFlightWaylineModule.java",
      "line": 151
    },
    {
      "name": "listenInFlightWaylineProgress",
      "params": [
        {
          "type": "FlightHubCallback.InFlightWaylineProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenInFlightWaylineProgress",
      "cppArgs": [],
      "cppCallback": [
        "InFlightWaylineProgress"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/InFlightWaylineModule.java",
      "line": 192
    },
    {
      "name": "cancelListenInFlightWaylineProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenInFlightWaylineProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/InFlightWaylineModule.java",
      "line": 224
    }
  ],
  "LiveDeviceModule": [
    {
      "name": "listenLiveAvailableRange",
      "params": [
        {
          "type": "FlightHubCallback.LiveAvailableRangeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenLiveAvailableRange",
      "cppArgs": [],
      "cppCallback": [
        "std::vector<LiveInfo>"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveDeviceModule.java",
      "line": 58
    },
    {
      "name": "cancelListenLiveAvailableRange",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenLiveAvailableRange",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveDeviceModule.java",
      "line": 95
    },
    {
      "name": "getAudienceCount",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AudienceCountGroup",
          "name": "group"
        },
        {
          "type": "FlightHubCallback.GetAudienceCountCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getAudienceCount",
      "cppArgs": [
        {
          "type": "AudienceCountGroup*",
          "name": "group",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "std::vector<DeviceAudienceCountItem>"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveDeviceModule.java",
      "line": 107
    },
    {
      "name": "listenDockLiveStatus",
      "params": [
        {
          "type": "FlightHubCallback.DockLiveStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockLiveStatus",
      "cppArgs": [],
      "cppCallback": [
        "DockLiveStatus"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveDeviceModule.java",
      "line": 156
    },
    {
      "name": "cancelListenDockLiveStatus",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockLiveStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveDeviceModule.java",
      "line": 179
    },
    {
      "name": "listenDockLiveCapacity",
      "params": [
        {
          "type": "FlightHubCallback.DockLiveCapacityCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDockLiveCapacity",
      "cppArgs": [],
      "cppCallback": [
        "DockLiveCapacity"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveDeviceModule.java",
      "line": 193
    },
    {
      "name": "cancelListenDockLiveCapacity",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDockLiveCapacity",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveDeviceModule.java",
      "line": 216
    }
  ],
  "LiveModule": [
    {
      "name": "start",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "start",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 101
    },
    {
      "name": "startWithURL",
      "params": [
        {
          "type": "FlightHubCallback.LiveStreamStartCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "startWithURL",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "LiveStreamStartResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 163
    },
    {
      "name": "stop",
      "params": [],
      "returnType": "void",
      "cpp": "stop",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 217
    },
    {
      "name": "stopWithURL",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "stopWithURL",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 239
    },
    {
      "name": "subscribeLiveStream",
      "params": [
        {
          "type": "FlightHubCallback.LiveStreamCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeLiveStream",
      "cppArgs": [],
      "cppCallback": [
        "std::vector<uint8_t>",
        "FrameInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 309
    },
    {
      "name": "unSubscribeLiveStream",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unSubscribeLiveStream",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 435
    },
    {
      "name": "subscribeAiSeiInfo",
      "params": [
        {
          "type": "FlightHubCallback.AiSeiInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeAiSeiInfo",
      "cppArgs": [],
      "cppCallback": [
        "AiSeiInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 449
    },
    {
      "name": "unSubscribeAiSeiInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unSubscribeAiSeiInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 483
    },
    {
      "name": "subscribeArSeiInfo",
      "params": [
        {
          "type": "FlightHubCallback.ArSeiInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeArSeiInfo",
      "cppArgs": [],
      "cppCallback": [
        "ArSeiInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 497
    },
    {
      "name": "unSubscribeArSeiInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unSubscribeArSeiInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 530
    },
    {
      "name": "subscribeFovSeiInfo",
      "params": [
        {
          "type": "FlightHubCallback.FovSeiInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeFovSeiInfo",
      "cppArgs": [],
      "cppCallback": [
        "FovSeiInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 544
    },
    {
      "name": "unSubscribeFovSeiInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unSubscribeFovSeiInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 577
    },
    {
      "name": "subscribeAssistantSeiInfo",
      "params": [
        {
          "type": "FlightHubCallback.AssistantSeiInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeAssistantSeiInfo",
      "cppArgs": [],
      "cppCallback": [
        "AssistantSeiInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 591
    },
    {
      "name": "unSubscribeAssistantSeiInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unSubscribeAssistantSeiInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 624
    },
    {
      "name": "subscribeEisSeiInfo",
      "params": [
        {
          "type": "FlightHubCallback.EisSeiInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeEisSeiInfo",
      "cppArgs": [],
      "cppCallback": [
        "EisSeiInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 638
    },
    {
      "name": "unSubscribeEisSeiInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unSubscribeEisSeiInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 671
    },
    {
      "name": "setLiveQuality",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.LiveQualitySettingParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setLiveQuality",
      "cppArgs": [
        {
          "type": "LiveQualitySettingParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveModule.java",
      "line": 685
    }
  ],
  "LiveRecordModule": [
    {
      "name": "startLiveRecord",
      "params": [
        {
          "type": "String",
          "name": "timeZone"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "startLiveRecord",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "time_zone",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveRecordModule.java",
      "line": 66
    },
    {
      "name": "stopLiveRecord",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "stopLiveRecord",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveRecordModule.java",
      "line": 99
    },
    {
      "name": "getDeviceLiveRecords",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.GetDeviceLiveRecordsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getDeviceLiveRecords",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "std::vector<LiveRecordItem>"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveRecordModule.java",
      "line": 132
    },
    {
      "name": "listenRecordState",
      "params": [
        {
          "type": "FlightHubCallback.LiveRecordStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenRecordState",
      "cppArgs": [],
      "cppCallback": [
        "LiveRecordStateInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveRecordModule.java",
      "line": 169
    },
    {
      "name": "cancelListenRecordState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenRecordState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveRecordModule.java",
      "line": 199
    }
  ],
  "LiveSyncModule": [
    {
      "name": "createLiveSync",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.LiveSyncCreateParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.CreateLiveSyncCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createLiveSync",
      "cppArgs": [
        {
          "type": "LiveSyncCreateParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "LiveSyncCreateResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveSyncModule.java",
      "line": 53
    },
    {
      "name": "deleteLiveSync",
      "params": [
        {
          "type": "String",
          "name": "id"
        },
        {
          "type": "FlightHubCallback.DeleteLiveSyncCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteLiveSync",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveSyncModule.java",
      "line": 100
    },
    {
      "name": "updateLiveSync",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.LiveSyncUpdateParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.UpdateLiveSyncCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateLiveSync",
      "cppArgs": [
        {
          "type": "LiveSyncUpdateParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "LiveSyncItem"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveSyncModule.java",
      "line": 137
    },
    {
      "name": "getLiveSyncList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.LiveSyncListParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetLiveSyncListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getLiveSyncList",
      "cppArgs": [
        {
          "type": "LiveSyncListParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "LiveSyncListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveSyncModule.java",
      "line": 184
    },
    {
      "name": "getLiveSyncDevicesV2",
      "params": [
        {
          "type": "FlightHubCallback.GetLiveSyncDevicesV2Callback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getLiveSyncDevicesV2",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "LiveSyncDevicesV2Result"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveSyncModule.java",
      "line": 231
    },
    {
      "name": "getLiveSyncSummary",
      "params": [
        {
          "type": "FlightHubCallback.GetLiveSyncSummaryCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getLiveSyncSummary",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "LiveSyncSummaryResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LiveSyncModule.java",
      "line": 272
    }
  ],
  "LogManagementModule": [
    {
      "name": "queryDeviceLogList",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "java.util.List<Integer>",
          "name": "module_list"
        },
        {
          "type": "FlightHubCallback.QueryDeviceLogListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "QueryDeviceLogList",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "std::vector<int>",
          "name": "module_list",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceLogListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LogManagementModule.java",
      "line": 64
    },
    {
      "name": "createDeviceLogReport",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreateDeviceLogReportRequestParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.CreateDeviceLogReportCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "CreateDeviceLogReport",
      "cppArgs": [
        {
          "type": "CreateDeviceLogReportRequestParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CreateDeviceLogReportResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LogManagementModule.java",
      "line": 109
    },
    {
      "name": "logReportList",
      "params": [
        {
          "type": "String",
          "name": "device_sn"
        },
        {
          "type": "int",
          "name": "page"
        },
        {
          "type": "int",
          "name": "page_size"
        },
        {
          "type": "FlightHubCallback.LogReportListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "LogReportList",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        },
        {
          "type": "int",
          "name": "page",
          "output": false
        },
        {
          "type": "int",
          "name": "page_size",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "LogReportListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LogManagementModule.java",
      "line": 158
    },
    {
      "name": "logReportOperation",
      "params": [
        {
          "type": "String",
          "name": "operation"
        },
        {
          "type": "String",
          "name": "report_id"
        },
        {
          "type": "FlightHubCallback.LogReportOperationCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "LogReportOperation",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "operation",
          "output": false
        },
        {
          "type": "std::string",
          "name": "report_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LogManagementModule.java",
      "line": 198
    },
    {
      "name": "uploadLogAppendFile",
      "params": [
        {
          "type": "String",
          "name": "file_path"
        },
        {
          "type": "FlightHubCallback.UploadLogAppendFileCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "UploadLogAppendFile",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_path",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LogManagementModule.java",
      "line": 237
    },
    {
      "name": "listenDeviceFileUploadProgress",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.DeviceFileUploadProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDeviceFileUploadProgress",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "DeviceFileUploadProgress"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LogManagementModule.java",
      "line": 279
    },
    {
      "name": "cancelListenDeviceFileUploadProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDeviceFileUploadProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/LogManagementModule.java",
      "line": 305
    }
  ],
  "MaintenanceManagementModule": [
    {
      "name": "getRepairConfigs",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetDeviceRepairConfigParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetRepairConfigsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getRepairConfigs",
      "cppArgs": [
        {
          "type": "GetDeviceRepairConfigParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DeviceRepairConfigResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MaintenanceManagementModule.java",
      "line": 67
    },
    {
      "name": "createMaintenanceOrder",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreateMaintenanceOrderParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.CreateMaintenanceOrderCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createMaintenanceOrder",
      "cppArgs": [
        {
          "type": "CreateMaintenanceOrderParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CreateMaintenanceOrderResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MaintenanceManagementModule.java",
      "line": 127
    },
    {
      "name": "getMaintenanceOrderDetail",
      "params": [
        {
          "type": "String",
          "name": "orderNumber"
        },
        {
          "type": "FlightHubCallback.GetMaintenanceOrderDetailCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMaintenanceOrderDetail",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "order_number",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "MaintenanceOrderDetailResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MaintenanceManagementModule.java",
      "line": 187
    },
    {
      "name": "getMaintenanceOrdersList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetMaintenanceOrdersListParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetMaintenanceOrdersListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMaintenanceOrdersList",
      "cppArgs": [
        {
          "type": "GetMaintenanceOrdersListParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "MaintenanceOrdersListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MaintenanceManagementModule.java",
      "line": 230
    }
  ],
  "MediaServiceModule": [
    {
      "name": "getMediaFilesList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetMediaFilesListParams",
          "name": "requestParams"
        },
        {
          "type": "FlightHubCallback.GetMediaFilesListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMediaFilesList",
      "cppArgs": [
        {
          "type": "GetMediaFilesListParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetMediaFilesListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 69
    },
    {
      "name": "getMediaFilesList",
      "params": [
        {
          "type": "String",
          "name": "flightId"
        },
        {
          "type": "int",
          "name": "startIndex"
        },
        {
          "type": "int",
          "name": "pageSize"
        },
        {
          "type": "java.util.List<String>",
          "name": "fileTypes"
        },
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "long",
          "name": "startCreateTime"
        },
        {
          "type": "long",
          "name": "endCreateTime"
        },
        {
          "type": "FlightHubCallback.GetMediaFilesListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMediaFilesList",
      "cppArgs": [
        {
          "type": "GetMediaFilesListParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetMediaFilesListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 123
    },
    {
      "name": "deleteMediaFiles",
      "params": [
        {
          "type": "java.util.List<Long>",
          "name": "fileIds"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteMediaFiles",
      "cppArgs": [
        {
          "type": "std::vector<long long>",
          "name": "file_ids",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 150
    },
    {
      "name": "getMediaFilesDownloadURL",
      "params": [
        {
          "type": "long",
          "name": "fileId"
        },
        {
          "type": "FlightHubCallback.GetMediaFilesDownloadUrlCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMediaFilesDownloadURL",
      "cppArgs": [
        {
          "type": "long long",
          "name": "file_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetMediaFilesDownloadUrlResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 197
    },
    {
      "name": "getMediaFilesDownloadURL",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "objectKeys"
        },
        {
          "type": "FlightHubCallback.GetMediaFilesDownloadUrlListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMediaFilesDownloadURL",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "object_keys",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetMediaFilesDownloadUrlListResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 239
    },
    {
      "name": "listenMediaFilePostProcessMessage",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.MediaFilePostProcessCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenMediaFilePostProcessMessage",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "MediaFilePostProcess"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 290
    },
    {
      "name": "cancelListenMediaFilePostProcessMessage",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenMediaFilePostProcessMessage",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 321
    },
    {
      "name": "listenMediaFileDeviceUploadMessage",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.MediaFileDeviceUploadCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenMediaFileDeviceUploadMessage",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "MediaFileDeviceUpload"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 337
    },
    {
      "name": "cancelListenMediaFileDeviceUploadMessage",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenMediaFileDeviceUploadMessage",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 368
    },
    {
      "name": "getMediaUploadSts",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetMediaUploadStsParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetMediaUploadStsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMediaUploadSts",
      "cppArgs": [
        {
          "type": "GetMediaUploadStsParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetMediaUploadStsResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 383
    },
    {
      "name": "mediaUploadCallback",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.MediaUploadCallbackParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.MediaUploadCallbackCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "mediaUploadCallback",
      "cppArgs": [
        {
          "type": "MediaUploadCallbackParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "MediaUploadCallbackResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 432
    },
    {
      "name": "uploadGeoMediaFile",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.UploadGeoMediaFileParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.UploadGeoMediaFileCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "uploadGeoMediaFile",
      "cppArgs": [
        {
          "type": "UploadGeoMediaFileParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UploadGeoMediaFileResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 480
    },
    {
      "name": "getMediaFileDetailById",
      "params": [
        {
          "type": "int",
          "name": "fileId"
        },
        {
          "type": "FlightHubCallback.GetMediaFileDetailByIdCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getMediaFileDetailById",
      "cppArgs": [
        {
          "type": "int",
          "name": "file_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetMediaFileDetailByIdResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/MediaServiceModule.java",
      "line": 525
    }
  ],
  "NetworkTestModule": [
    {
      "name": "startNetworkTest",
      "params": [
        {
          "type": "FlightHubCallback.StartNetworkTestCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "startNetworkTest",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "NetworkTestProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/NetworkTestModule.java",
      "line": 61
    },
    {
      "name": "stopNetworkTest",
      "params": [
        {
          "type": "FlightHubCallback.StopNetworkTestCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "stopNetworkTest",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/NetworkTestModule.java",
      "line": 98
    },
    {
      "name": "getNetworkTestProgress",
      "params": [
        {
          "type": "FlightHubCallback.GetNetworkTestProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getNetworkTestProgress",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "NetworkTestProgressResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/NetworkTestModule.java",
      "line": 132
    },
    {
      "name": "subscribeNetworkTestProgress",
      "params": [
        {
          "type": "FlightHubCallback.SubscribeNetworkTestProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeNetworkTestProgress",
      "cppArgs": [],
      "cppCallback": [
        "NetworkTestProgressResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/NetworkTestModule.java",
      "line": 169
    },
    {
      "name": "unsubscribeNetworkTestProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeNetworkTestProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/NetworkTestModule.java",
      "line": 198
    }
  ],
  "OnboardAiModule": [
    {
      "name": "listenAIDataInfo",
      "params": [
        {
          "type": "FlightHubCallback.AiDataInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenAIDataInfo",
      "cppArgs": [],
      "cppCallback": [
        "AiDataInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 62
    },
    {
      "name": "cancelListenAIDataInfo",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenAIDataInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 98
    },
    {
      "name": "AIIdentifySet",
      "params": [
        {
          "type": "AiIdentifySetParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "AIIdentifySet",
      "cppArgs": [
        {
          "type": "AiIdentifySetParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 114
    },
    {
      "name": "AIIdentifyFilterSet",
      "params": [
        {
          "type": "AiIdentifyFilterSetParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "AIIdentifyFilterSet",
      "cppArgs": [
        {
          "type": "AiIdentifyFilterSetParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 122
    },
    {
      "name": "AIIdentifyScoreSet",
      "params": [
        {
          "type": "AiIdentifyScoreSetParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "AIIdentifyScoreSet",
      "cppArgs": [
        {
          "type": "AiIdentifyScoreSetParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 130
    },
    {
      "name": "AIIdentifyScoreModeSet",
      "params": [
        {
          "type": "AiIdentifyScoreModeSetParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "AIIdentifyScoreModeSet",
      "cppArgs": [
        {
          "type": "AiIdentifyScoreModeSetParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 138
    },
    {
      "name": "AIIdentifyScoreReset",
      "params": [
        {
          "type": "AiIdentifyScoreResetParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "AIIdentifyScoreReset",
      "cppArgs": [
        {
          "type": "AiIdentifyScoreResetParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 146
    },
    {
      "name": "AIModelSelect",
      "params": [
        {
          "type": "AiModelSelectParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "AIModelSelect",
      "cppArgs": [
        {
          "type": "AiModelSelectParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 154
    },
    {
      "name": "DrcAISpotlightZoomSet",
      "params": [
        {
          "type": "int",
          "name": "on"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAISpotlightZoomSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "on",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 238
    },
    {
      "name": "DrcAISpotlightZoomSelect",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AiSpotlightZoomSelectParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAISpotlightZoomSelect",
      "cppArgs": [
        {
          "type": "AiSpotlightZoomSelectParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 246
    },
    {
      "name": "DrcAISpotlightZoomConfirm",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAISpotlightZoomConfirm",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 266
    },
    {
      "name": "DrcAISpotlightZoomStop",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAISpotlightZoomStop",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 274
    },
    {
      "name": "DrcAISpotlightZoomTrack",
      "params": [
        {
          "type": "int",
          "name": "targetIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAISpotlightZoomTrack",
      "cppArgs": [
        {
          "type": "int",
          "name": "target_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 282
    },
    {
      "name": "DrcAIAlarmStart",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AiAlarmStartParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAIAlarmStart",
      "cppArgs": [
        {
          "type": "AiAlarmStartParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 294
    },
    {
      "name": "DrcAIAlarmStop",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAIAlarmStop",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 314
    },
    {
      "name": "DrcAIModelsConfig",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.AiModelsConfigParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcAIModelsConfig",
      "cppArgs": [
        {
          "type": "AiModelsConfigParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 324
    },
    {
      "name": "listenDrcAIAlarmState",
      "params": [
        {
          "type": "FlightHubCallback.AiAlarmStateCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcAIAlarmState",
      "cppArgs": [],
      "cppCallback": [
        "AiAlarmStateInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 346
    },
    {
      "name": "cancelListenDrcAIAlarmState",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcAIAlarmState",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/OnboardAiModule.java",
      "line": 374
    }
  ],
  "PoiModule": [
    {
      "name": "enter",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.POIEnterParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.PoiEnterCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "enter",
      "cppArgs": [
        {
          "type": "POIEnterParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "std::string"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 64
    },
    {
      "name": "exit",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "exit",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 126
    },
    {
      "name": "updateSpeed",
      "params": [
        {
          "type": "double",
          "name": "speed"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateSpeed",
      "cppArgs": [
        {
          "type": "double",
          "name": "speed",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 171
    },
    {
      "name": "getTask",
      "params": [
        {
          "type": "FlightHubCallback.PoiGetTaskCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getTask",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "POITaskInfo"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 215
    },
    {
      "name": "listenPoiTaskEvent",
      "params": [
        {
          "type": "FlightHubCallback.PoiTaskEventCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenPoiTaskEvent",
      "cppArgs": [],
      "cppCallback": [
        "PoiTaskEvent"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 257
    },
    {
      "name": "cancelListenPoiTaskEvent",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenPoiTaskEvent",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 287
    },
    {
      "name": "listenFlightPoiProgress",
      "params": [
        {
          "type": "FlightHubCallback.FlightPoiProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenFlightPoiProgress",
      "cppArgs": [],
      "cppCallback": [
        "FlightPoiProgress"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 303
    },
    {
      "name": "cancelListenFlightPoiProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenFlightPoiProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PoiModule.java",
      "line": 329
    }
  ],
  "PsdkControlModule": [
    {
      "name": "listenDrcPsdkDeviceList",
      "params": [
        {
          "type": "FlightHubCallback.PsdkDeviceListCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcPsdkDeviceList",
      "cppArgs": [],
      "cppCallback": [
        "PsdkDeviceList"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 76
    },
    {
      "name": "cancelListenDrcPsdkDeviceList",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcPsdkDeviceList",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 110
    },
    {
      "name": "listenDrcPsdkStateSummaryInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.PsdkStateSummaryInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcPsdkStateSummaryInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "PsdkStateSummaryInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 125
    },
    {
      "name": "cancelListenDrcPsdkStateSummaryInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcPsdkStateSummaryInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 160
    },
    {
      "name": "listenDrcPsdkStateSpeakerInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.PsdkStateSpeakerInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcPsdkStateSpeakerInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "PsdkStateSpeakerInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 175
    },
    {
      "name": "cancelListenDrcPsdkStateSpeakerInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcPsdkStateSpeakerInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 210
    },
    {
      "name": "listenDrcPsdkStateSearchlightInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.PsdkStateSearchlightInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcPsdkStateSearchlightInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "PsdkStateSearchlightInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 225
    },
    {
      "name": "cancelListenDrcPsdkStateSearchlightInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcPsdkStateSearchlightInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 260
    },
    {
      "name": "searchlightModeSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "mode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSearchlightModeSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 283
    },
    {
      "name": "searchlightBrightnessSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "brightness"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSearchlightBrightnessSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "brightness",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 322
    },
    {
      "name": "searchlightCalibration",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSearchlightCalibration",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 360
    },
    {
      "name": "searchlightFineTuningSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "position"
        },
        {
          "type": "double",
          "name": "value"
        },
        {
          "type": "boolean",
          "name": "saved"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSearchlightFineTuningSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "position",
          "output": false
        },
        {
          "type": "double",
          "name": "value",
          "output": false
        },
        {
          "type": "bool",
          "name": "saved",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 401
    },
    {
      "name": "searchlightWideFieldModeSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "wideFieldMode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSearchlightWideFieldModeSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "wide_field_mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 440
    },
    {
      "name": "searchlightLightGimbalControlSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "lightGimbalControl"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSearchlightLightGimbalControlSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "light_gimbal_control",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 479
    },
    {
      "name": "searchlightTypeSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "type"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSearchlightTypeSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "type",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 518
    },
    {
      "name": "listenDrcPsdkSpeakerPlayProgressInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.PsdkSpeakerPlayProgressInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcPsdkSpeakerPlayProgressInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "PsdkSpeakerPlayProgressInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 557
    },
    {
      "name": "cancelListenDrcPsdkSpeakerPlayProgressInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcPsdkSpeakerPlayProgressInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 593
    },
    {
      "name": "listenDrcPsdkFloatingWindowTextInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.PsdkFloatingWindowTextInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDrcPsdkFloatingWindowTextInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "PsdkFloatingWindowTextInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 608
    },
    {
      "name": "cancelListenDrcPsdkFloatingWindowTextInfo",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDrcPsdkFloatingWindowTextInfo",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 644
    },
    {
      "name": "speakerAudioPlayStart",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "PsdkSpeakerAudioPlayInfo",
          "name": "audioPlayInfo"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSpeakerAudioPlayStart",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "PsdkSpeakerAudioPlayInfo",
          "name": "audio_play_info",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 661
    },
    {
      "name": "speakerTTSPlayStart",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "PsdkSpeakerTTSPlayInfo",
          "name": "ttsPlayInfo"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSpeakerTTSPlayStart",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "PsdkSpeakerTTSPlayInfo",
          "name": "tts_play_info",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 713
    },
    {
      "name": "speakerReplay",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSpeakerReplay",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 764
    },
    {
      "name": "speakerPlayStop",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSpeakerPlayStop",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 811
    },
    {
      "name": "speakerPlayVolumeSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "volume"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSpeakerPlayVolumeSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "volume",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 952
    },
    {
      "name": "speakerPlayModeSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "MegaphonePlayMode",
          "name": "playMode"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSpeakerPlayModeSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "play_mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1000
    },
    {
      "name": "speakerTTSSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "PsdkSpeakerTTSconfig",
          "name": "ttsConfig"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcSpeakerTTSSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "PsdkSpeakerTTSconfig",
          "name": "tts_config",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1048
    },
    {
      "name": "widgetValueSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "int",
          "name": "index"
        },
        {
          "type": "int",
          "name": "value"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcWidgetValueSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "int",
          "name": "index",
          "output": false
        },
        {
          "type": "int",
          "name": "value",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1103
    },
    {
      "name": "widgetInputBoxTextSet",
      "params": [
        {
          "type": "int",
          "name": "psdkIndex"
        },
        {
          "type": "String",
          "name": "value"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "DrcWidgetInputBoxTextSet",
      "cppArgs": [
        {
          "type": "int",
          "name": "psdk_index",
          "output": false
        },
        {
          "type": "std::string",
          "name": "value",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1151
    },
    {
      "name": "listenPsdkSpeakerAudioPlayStartProgress",
      "params": [
        {
          "type": "FlightHubCallback.PsdkSpeakerAudioPlayStartProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenPsdkSpeakerAudioPlayStartProgress",
      "cppArgs": [],
      "cppCallback": [
        "PsdkSpeakerPlayStartProgress"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1200
    },
    {
      "name": "cancelListenPsdkSpeakerAudioPlayStartProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenPsdkSpeakerAudioPlayStartProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1227
    },
    {
      "name": "listenPsdkSpeakerTtsPlayStartProgress",
      "params": [
        {
          "type": "FlightHubCallback.PsdkSpeakerTtsPlayStartProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenPsdkSpeakerTtsPlayStartProgress",
      "cppArgs": [],
      "cppCallback": [
        "PsdkSpeakerPlayStartProgress"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1241
    },
    {
      "name": "cancelListenPsdkSpeakerTtsPlayStartProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenPsdkSpeakerTtsPlayStartProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1268
    },
    {
      "name": "listenDronePsdkUiResource",
      "params": [
        {
          "type": "FlightHubCallback.DronePsdkUiResourceCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDronePsdkUiResource",
      "cppArgs": [],
      "cppCallback": [
        "DronePsdkUiResource"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1284
    },
    {
      "name": "cancelListenDronePsdkUiResource",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDronePsdkUiResource",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkControlModule.java",
      "line": 1307
    }
  ],
  "PsdkResourceModule": [
    {
      "name": "getPsdkSpeakerResourceList",
      "params": [
        {
          "type": "FlightHubCallback.PsdkSpeakerResourceListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getPsdkSpeakerResourceList",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "PsdkSpeakerResourceList"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkResourceModule.java",
      "line": 65
    },
    {
      "name": "createPsdkSpeakerResource",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreatePsdkSpeakerResourceParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.PsdkSpeakerResourceCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createPsdkSpeakerResource",
      "cppArgs": [
        {
          "type": "CreatePsdkSpeakerResourceParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "PsdkSpeakerResource"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkResourceModule.java",
      "line": 110
    },
    {
      "name": "editPsdkSpeakerResource",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.EditPsdkSpeakerResourceParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.PsdkSpeakerResourceCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "editPsdkSpeakerResource",
      "cppArgs": [
        {
          "type": "EditPsdkSpeakerResourceParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "PsdkSpeakerResource"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkResourceModule.java",
      "line": 161
    },
    {
      "name": "deletePsdkSpeakerResource",
      "params": [
        {
          "type": "int",
          "name": "resourceId"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deletePsdkSpeakerResource",
      "cppArgs": [
        {
          "type": "int",
          "name": "resource_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkResourceModule.java",
      "line": 212
    },
    {
      "name": "getSTS",
      "params": [
        {
          "type": "FlightHubCallback.STSInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getSTS",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "STSInfo"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkResourceModule.java",
      "line": 257
    },
    {
      "name": "uploadSpeakerAudioFile",
      "params": [
        {
          "type": "String",
          "name": "filePath"
        },
        {
          "type": "STSInfo",
          "name": "stsInfo"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "uploadSpeakerAudioFile",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_path",
          "output": false
        },
        {
          "type": "STSInfo",
          "name": "sts_info",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkResourceModule.java",
      "line": 301
    },
    {
      "name": "getPsdkWidgetResources",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetPsdkWidgetResourceParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.PsdkWidgetResourceListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getPsdkWidgetResources",
      "cppArgs": [
        {
          "type": "GetPsdkWidgetResourceParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "PsdkWidgetResourceList"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PsdkResourceModule.java",
      "line": 353
    }
  ],
  "PullStreamModule": [
    {
      "name": "start",
      "params": [
        {
          "type": "String",
          "name": "streamUrl"
        },
        {
          "type": "PullStreamStartCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "start",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "stream_url",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubSdkErrorCode"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PullStreamModule.java",
      "line": 67
    },
    {
      "name": "stop",
      "params": [],
      "returnType": "void",
      "cpp": "stop",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PullStreamModule.java",
      "line": 125
    },
    {
      "name": "subscribeStream",
      "params": [
        {
          "type": "PullStreamDataCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeStream",
      "cppArgs": [],
      "cppCallback": [
        "std::vector<uint8_t>",
        "FrameInfo"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PullStreamModule.java",
      "line": 145
    },
    {
      "name": "unSubscribeStream",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unSubscribeStream",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PullStreamModule.java",
      "line": 196
    },
    {
      "name": "setErrorCallback",
      "params": [
        {
          "type": "PullStreamErrorCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setErrorCallback",
      "cppArgs": [],
      "cppCallback": [
        "int",
        "std::string"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PullStreamModule.java",
      "line": 214
    },
    {
      "name": "isStreaming",
      "params": [],
      "returnType": "boolean",
      "cpp": "isStreaming",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "bool",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PullStreamModule.java",
      "line": 255
    },
    {
      "name": "getStreamInfo",
      "params": [],
      "returnType": "String",
      "cpp": "getStreamInfo",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::string",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/PullStreamModule.java",
      "line": 273
    }
  ],
  "Relay": [
    {
      "name": "getSn",
      "params": [],
      "returnType": "String",
      "cpp": "getSn",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::string",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Relay.java",
      "line": 31
    },
    {
      "name": "getRelayControlModule",
      "params": [],
      "returnType": "RelayControlModule",
      "cpp": "getRelayControlModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IRelayControlModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Relay.java",
      "line": 38
    },
    {
      "name": "getRtkCalibrationModule",
      "params": [],
      "returnType": "RtkCalibrationModule",
      "cpp": "getRtkCalibrationModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IRtkCalibrationModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Relay.java",
      "line": 51
    }
  ],
  "RelayControlModule": [
    {
      "name": "setRelayBroadcastHide",
      "params": [
        {
          "type": "boolean",
          "name": "is_broadcast_hide"
        },
        {
          "type": "FlightHubCallback.SetRelayBroadcastHideCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRelayBroadcastHide",
      "cppArgs": [
        {
          "type": "bool",
          "name": "is_broadcast_hide",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RelayControlModule.java",
      "line": 59
    },
    {
      "name": "setRelaySSID",
      "params": [
        {
          "type": "String",
          "name": "device_name"
        },
        {
          "type": "FlightHubCallback.SetRelaySSIDCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRelaySSID",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_name",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RelayControlModule.java",
      "line": 92
    },
    {
      "name": "setRelayPassword",
      "params": [
        {
          "type": "String",
          "name": "passwd"
        },
        {
          "type": "FlightHubCallback.SetRelayPasswordCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRelayPassword",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "passwd",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RelayControlModule.java",
      "line": 125
    },
    {
      "name": "setRelaySearchMode",
      "params": [
        {
          "type": "int",
          "name": "relay_search_mode"
        },
        {
          "type": "FlightHubCallback.SetRelaySearchModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRelaySearchMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "relay_search_mode",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RelayControlModule.java",
      "line": 158
    },
    {
      "name": "setRelayOccupiedStatus",
      "params": [
        {
          "type": "int",
          "name": "occupied_status"
        },
        {
          "type": "FlightHubCallback.SetRelayOccupiedStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setRelayOccupiedStatus",
      "cppArgs": [
        {
          "type": "int",
          "name": "occupied_status",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SetRelayOccupiedStatusResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RelayControlModule.java",
      "line": 191
    },
    {
      "name": "relayReboot",
      "params": [
        {
          "type": "FlightHubCallback.RelayRebootCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "relayReboot",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "RelayRebootResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RelayControlModule.java",
      "line": 225
    },
    {
      "name": "relayDisconnect",
      "params": [
        {
          "type": "FlightHubCallback.RelayDisconnectCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "relayDisconnect",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "RelayDisconnectResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RelayControlModule.java",
      "line": 259
    }
  ],
  "RemoteController": [
    {
      "name": "getSn",
      "params": [],
      "returnType": "String",
      "cpp": "getSn",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::string",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RemoteController.java",
      "line": 27
    }
  ],
  "RtkCalibrationModule": [
    {
      "name": "calibrationByNetwork",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.NetworkRtkCalibrationParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.RtkCalibrationCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "calibrationByNetwork",
      "cppArgs": [
        {
          "type": "NetworkRtkCalibrationParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "RtkCalibrationResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RtkCalibrationModule.java",
      "line": 57
    },
    {
      "name": "calibrationByManual",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ManulRtkCalibrationParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.RtkCalibrationCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "calibrationByManual",
      "cppArgs": [
        {
          "type": "ManulRtkCalibrationParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "RtkCalibrationResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RtkCalibrationModule.java",
      "line": 102
    },
    {
      "name": "subscribeCalibrationProgress",
      "params": [
        {
          "type": "FlightHubCallback.SubscribeCalibrationProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "subscribeCalibrationProgress",
      "cppArgs": [],
      "cppCallback": [
        "RtkCalibrationResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RtkCalibrationModule.java",
      "line": 147
    },
    {
      "name": "unsubscribeCalibrationProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "unsubscribeCalibrationProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/RtkCalibrationModule.java",
      "line": 176
    }
  ],
  "SafetyServiceModule": [
    {
      "name": "searchSignalMaps",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "deviceSns"
        },
        {
          "type": "java.util.List<String>",
          "name": "dataTypes"
        },
        {
          "type": "FlightHubCallback.SearchSignalMapsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "searchSignalMaps",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        },
        {
          "type": "std::vector<std::string>",
          "name": "data_types",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SignalMapsResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 84
    },
    {
      "name": "createCustomizedFlightAreas",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CreateCustomizedFlightAreasParams",
          "name": "requestParams"
        },
        {
          "type": "FlightHubCallback.CreateCustomizedFlightAreasCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createCustomizedFlightAreas",
      "cppArgs": [
        {
          "type": "CreateCustomizedFlightAreasParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CreateFlightAreasResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 138
    },
    {
      "name": "getCustomizedFlightAreas",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetCustomizedFlightAreasParams",
          "name": "requestParams"
        },
        {
          "type": "FlightHubCallback.GetCustomizedFlightAreasCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getCustomizedFlightAreas",
      "cppArgs": [
        {
          "type": "GetCustomizedFlightAreasParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetFlightAreasResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 185
    },
    {
      "name": "getCustomizedFlightAreas",
      "params": [
        {
          "type": "String",
          "name": "name"
        },
        {
          "type": "String",
          "name": "type"
        },
        {
          "type": "String",
          "name": "status"
        },
        {
          "type": "java.util.List<String>",
          "name": "ids"
        },
        {
          "type": "int",
          "name": "pageIndex"
        },
        {
          "type": "int",
          "name": "pageSize"
        },
        {
          "type": "FlightHubCallback.GetCustomizedFlightAreasCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getCustomizedFlightAreas",
      "cppArgs": [
        {
          "type": "GetCustomizedFlightAreasParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetFlightAreasResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 237
    },
    {
      "name": "updateCustomizedFlightAreas",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.UpdateCustomizedFlightAreasParams",
          "name": "requestParams"
        },
        {
          "type": "FlightHubCallback.UpdateCustomizedFlightAreasCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateCustomizedFlightAreas",
      "cppArgs": [
        {
          "type": "UpdateCustomizedFlightAreasParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UpdateFlightAreasResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 261
    },
    {
      "name": "deleteCustomizedFlightAreas",
      "params": [
        {
          "type": "String",
          "name": "flightAreaId"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteCustomizedFlightAreas",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "flight_area_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 308
    },
    {
      "name": "syncCustomizedFlightAreas",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "deviceSns"
        },
        {
          "type": "FlightHubCallback.SyncCustomizedFlightAreasCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "syncCustomizedFlightAreas",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "SyncFlightAreasResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 349
    },
    {
      "name": "getFlightAreasSyncStatus",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "deviceSns"
        },
        {
          "type": "FlightHubCallback.GetFlightAreasSyncStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getFlightAreasSyncStatus",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetAreasSyncStatusResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 396
    },
    {
      "name": "getOfflineMapsModelInfo",
      "params": [
        {
          "type": "FlightHubCallback.GetOfflineMapsModelInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getOfflineMapsModelInfo",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError",
        "GetOfflineMapsModelInfoResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 444
    },
    {
      "name": "updateOfflineMapsModelInfo",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.UpdateOfflineMapsParams",
          "name": "requestParams"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateOfflineMapsModelInfo",
      "cppArgs": [
        {
          "type": "UpdateOfflineMapsParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 485
    },
    {
      "name": "cancelOfflineMapsModelInfo",
      "params": [
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "cancelOfflineMapsModelInfo",
      "cppArgs": [],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 531
    },
    {
      "name": "setOfflineMaps",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SetOfflineMapsParams",
          "name": "requestParams"
        },
        {
          "type": "FlightHubCallback.ResultCallbackWithError",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setOfflineMaps",
      "cppArgs": [
        {
          "type": "SetOfflineMapsParams",
          "name": "request_params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 572
    },
    {
      "name": "syncOfflineMaps",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "deviceSns"
        },
        {
          "type": "FlightHubCallback.SyncOfflineMapsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "syncOfflineMaps",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "OfflineMapsSyncResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 619
    },
    {
      "name": "getOfflineMapsSyncStatus",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "deviceSns"
        },
        {
          "type": "FlightHubCallback.GetOfflineMapsSyncStatusCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getOfflineMapsSyncStatus",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "device_sns",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetOfflineMapsSyncStatusResults"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 666
    },
    {
      "name": "getUnlockLicenseList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.QueryDeviceUnlockLicenseListParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetUnlockLicenseListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getUnlockLicenseList",
      "cppArgs": [
        {
          "type": "QueryDeviceUnlockLicenseListParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "QueryDeviceUnlockLicenseListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 716
    },
    {
      "name": "switchUnlockLicense",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SwitchUnlockLicenseParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.SwitchUnlockLicenseCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "switchUnlockLicense",
      "cppArgs": [
        {
          "type": "SwitchUnlockLicenseParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 764
    },
    {
      "name": "checkUnlockLicense",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CheckUnlockLicenseParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.CheckUnlockLicenseCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "checkUnlockLicense",
      "cppArgs": [
        {
          "type": "CheckUnlockLicenseParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CheckUnlockLicenseResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 810
    },
    {
      "name": "submitUnlockLicense",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ImportUnlockLicenseParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.SubmitUnlockLicenseCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "submitUnlockLicense",
      "cppArgs": [
        {
          "type": "ImportUnlockLicenseParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 858
    },
    {
      "name": "clearDeviceUnlockLicense",
      "params": [
        {
          "type": "String",
          "name": "deviceSn"
        },
        {
          "type": "FlightHubCallback.ClearDeviceUnlockLicenseCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "clearDeviceUnlockLicense",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "device_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 904
    },
    {
      "name": "uploadUnlockLicenseFile",
      "params": [
        {
          "type": "String",
          "name": "filePath"
        },
        {
          "type": "FlightHubCallback.UploadUnlockLicenseFileCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "uploadUnlockLicenseFile",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_path",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UploadUnlockLicenseFileResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 946
    },
    {
      "name": "listenDroneOfflineMapEnable",
      "params": [
        {
          "type": "String",
          "name": "droneSn"
        },
        {
          "type": "FlightHubCallback.DroneOfflineMapEnableCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneOfflineMapEnable",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "drone_sn",
          "output": false
        }
      ],
      "cppCallback": [
        "DroneOfflineMapEnable"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 991
    },
    {
      "name": "cancelListenDroneOfflineMapEnable",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneOfflineMapEnable",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/SafetyServiceModule.java",
      "line": 1015
    }
  ],
  "Stream": [
    {
      "name": "getCustomSEIModule",
      "params": [],
      "returnType": "CustomSEIModule",
      "cpp": "getCustomSEIModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ICustomSEIModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Stream.java",
      "line": 37
    },
    {
      "name": "getPullStreamModule",
      "params": [
        {
          "type": "String",
          "name": "streamId"
        }
      ],
      "returnType": "PullStreamModule",
      "cpp": "getPullStreamModule",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "stream_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IPullStreamModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Stream.java",
      "line": 59
    }
  ],
  "TakeoffModule": [
    {
      "name": "takeoff",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.TakeoffParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.TakeoffCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "takeoff",
      "cppArgs": [
        {
          "type": "TakeoffParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TakeoffResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 54
    },
    {
      "name": "listenCommandTaskEvent",
      "params": [
        {
          "type": "FlightHubCallback.CommandTaskEventCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenCommandTaskEvent",
      "cppArgs": [],
      "cppCallback": [
        "CommandTaskEvent"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 99
    },
    {
      "name": "cancelListenCommandTaskEvent",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenCommandTaskEvent",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 121
    },
    {
      "name": "listenDroneCommanderFlightMode",
      "params": [
        {
          "type": "FlightHubCallback.DroneCommanderFlightModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneCommanderFlightMode",
      "cppArgs": [],
      "cppCallback": [
        "DroneCommanderFlightMode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 133
    },
    {
      "name": "cancelListenDroneCommanderFlightMode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneCommanderFlightMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 152
    },
    {
      "name": "listenDroneCurrentCommanderFlightMode",
      "params": [
        {
          "type": "FlightHubCallback.DroneCurrentCommanderFlightModeCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneCurrentCommanderFlightMode",
      "cppArgs": [],
      "cppCallback": [
        "DroneCurrentCommanderFlightMode"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 162
    },
    {
      "name": "cancelListenDroneCurrentCommanderFlightMode",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneCurrentCommanderFlightMode",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 181
    },
    {
      "name": "listenDroneCommanderModeLostAction",
      "params": [
        {
          "type": "FlightHubCallback.DroneCommanderModeLostActionCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenDroneCommanderModeLostAction",
      "cppArgs": [],
      "cppCallback": [
        "DroneCommanderModeLostAction"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 191
    },
    {
      "name": "cancelListenDroneCommanderModeLostAction",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenDroneCommanderModeLostAction",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TakeoffModule.java",
      "line": 210
    }
  ],
  "TerraBuildModule": [
    {
      "name": "getReconstructionSettings",
      "params": [
        {
          "type": "String",
          "name": "fileUuid"
        },
        {
          "type": "FlightHubCallback.TerraBuildGetReconstructionSettingsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getReconstructionSettings",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildSettingsResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 85
    },
    {
      "name": "getQualityReport",
      "params": [
        {
          "type": "String",
          "name": "fileUuid"
        },
        {
          "type": "String",
          "name": "language"
        },
        {
          "type": "String",
          "name": "measureUnitSystem"
        },
        {
          "type": "FlightHubCallback.TerraBuildGetQualityReportCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getQualityReport",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_uuid",
          "output": false
        },
        {
          "type": "std::string",
          "name": "language",
          "output": false
        },
        {
          "type": "std::string",
          "name": "measure_unit_system",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildQualityReportResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 124
    },
    {
      "name": "getModelFileList",
      "params": [
        {
          "type": "int",
          "name": "page"
        },
        {
          "type": "int",
          "name": "pageSize"
        },
        {
          "type": "FlightHubCallback.TerraBuildGetModelFileListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getModelFileList",
      "cppArgs": [
        {
          "type": "int",
          "name": "page",
          "output": false
        },
        {
          "type": "int",
          "name": "page_size",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildModelFileListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 166
    },
    {
      "name": "getModelFileUrl",
      "params": [
        {
          "type": "int",
          "name": "fileId"
        },
        {
          "type": "int",
          "name": "type"
        },
        {
          "type": "FlightHubCallback.TerraBuildGetModelFileUrlCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getModelFileUrl",
      "cppArgs": [
        {
          "type": "int",
          "name": "file_id",
          "output": false
        },
        {
          "type": "int",
          "name": "type",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildModelFileUrlResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 204
    },
    {
      "name": "retryReconstruction",
      "params": [
        {
          "type": "String",
          "name": "fileUuid"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "retryReconstruction",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 241
    },
    {
      "name": "stopReconstruction",
      "params": [
        {
          "type": "String",
          "name": "fileUuid"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "stopReconstruction",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 276
    },
    {
      "name": "getSfmResult",
      "params": [
        {
          "type": "String",
          "name": "fileUuid"
        },
        {
          "type": "FlightHubCallback.TerraBuildGetSfmResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getSfmResult",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildSfmResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 311
    },
    {
      "name": "createReconstruction",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.TerraBuildCreateReconstructionParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.TerraBuildCreateReconstructionCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createReconstruction",
      "cppArgs": [
        {
          "type": "CreateReconstructionParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildCreateReconstructionResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 348
    },
    {
      "name": "createReconstruction",
      "params": [
        {
          "type": "com.dji.flighthubsdk.generated.CreateReconstructionJavaParams",
          "name": "jp"
        },
        {
          "type": "FlightHubCallback.TerraBuildCreateReconstructionCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createReconstruction",
      "cppArgs": [
        {
          "type": "CreateReconstructionParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildCreateReconstructionResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 397
    },
    {
      "name": "deleteModelFile",
      "params": [
        {
          "type": "int",
          "name": "fileId"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "deleteModelFile",
      "cppArgs": [
        {
          "type": "int",
          "name": "file_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 435
    },
    {
      "name": "batchDeleteModelFiles",
      "params": [
        {
          "type": "java.util.List<Integer>",
          "name": "fileIds"
        },
        {
          "type": "FlightHubCallback.ResultCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "batchDeleteModelFiles",
      "cppArgs": [
        {
          "type": "std::vector<int>",
          "name": "file_ids",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 470
    },
    {
      "name": "createPanorama",
      "params": [
        {
          "type": "String",
          "name": "name"
        },
        {
          "type": "java.util.List<String>",
          "name": "folderUuids"
        },
        {
          "type": "String",
          "name": "wkt"
        },
        {
          "type": "boolean",
          "name": "isShownOnMap"
        },
        {
          "type": "FlightHubCallback.TerraBuildCreatePanoramaCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createPanorama",
      "cppArgs": [
        {
          "type": "CreatePanoramaParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildCreatePanoramaResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 510
    },
    {
      "name": "getReconstructionImages",
      "params": [
        {
          "type": "String",
          "name": "fileUuid"
        },
        {
          "type": "FlightHubCallback.TerraBuildGetReconstructionImagesCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getReconstructionImages",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "file_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraBuildReconstructionImagesResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 554
    },
    {
      "name": "listenReconstructionStatusChanged",
      "params": [
        {
          "type": "FlightHubCallback.TerraBuildReconstructionStatusChangedCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenReconstructionStatusChanged",
      "cppArgs": [],
      "cppCallback": [
        "TerraBuildReconstructionStatusChanged"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 591
    },
    {
      "name": "cancelListenReconstructionStatusChanged",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenReconstructionStatusChanged",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 622
    },
    {
      "name": "uploadModelCallback",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.TerraUploadCallbackParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.TerraUploadCallbackCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "uploadModelCallback",
      "cppArgs": [
        {
          "type": "TerraUploadCallbackParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraUploadCallbackResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 637
    },
    {
      "name": "renameModel",
      "params": [
        {
          "type": "int",
          "name": "fileId"
        },
        {
          "type": "com.dji.flighthubsdk.bean.TerraRenameModelParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.TerraRenameModelCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "renameModel",
      "cppArgs": [
        {
          "type": "int",
          "name": "file_id",
          "output": false
        },
        {
          "type": "TerraRenameModelParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 680
    },
    {
      "name": "showModelOnMap",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.TerraShowOnMapParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.TerraShowOnMapCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "showModelOnMap",
      "cppArgs": [
        {
          "type": "TerraShowOnMapParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraShowOnMapResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 720
    },
    {
      "name": "listenTerraUnzipProgress",
      "params": [
        {
          "type": "FlightHubCallback.TerraUnzipProgressCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenTerraUnzipProgress",
      "cppArgs": [],
      "cppCallback": [
        "TerraUnzipProgressMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 763
    },
    {
      "name": "cancelListenTerraUnzipProgress",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenTerraUnzipProgress",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 801
    },
    {
      "name": "listenTerraModelStatusChanged",
      "params": [
        {
          "type": "FlightHubCallback.TerraModelStatusChangedCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenTerraModelStatusChanged",
      "cppArgs": [],
      "cppCallback": [
        "TerraModelStatusChangedMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 818
    },
    {
      "name": "cancelListenTerraModelStatusChanged",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenTerraModelStatusChanged",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 856
    },
    {
      "name": "listenTerraFileShowOnMap",
      "params": [
        {
          "type": "FlightHubCallback.TerraFileShowOnMapCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenTerraFileShowOnMap",
      "cppArgs": [],
      "cppCallback": [
        "TerraFileShowOnMapMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 873
    },
    {
      "name": "cancelListenTerraFileShowOnMap",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenTerraFileShowOnMap",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 911
    },
    {
      "name": "getModelDetail",
      "params": [
        {
          "type": "int",
          "name": "fileId"
        },
        {
          "type": "FlightHubCallback.TerraGetModelDetailCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getModelDetail",
      "cppArgs": [
        {
          "type": "int",
          "name": "file_id",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "TerraModelDetailResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 928
    },
    {
      "name": "setLasWkt",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.TerraSetLasWktParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.TerraSetLasWktCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "setLasWkt",
      "cppArgs": [
        {
          "type": "TerraSetLasWktParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 965
    },
    {
      "name": "listenTerraMediaFileHideOnMap",
      "params": [
        {
          "type": "FlightHubCallback.TerraMediaFileHideOnMapCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenTerraMediaFileHideOnMap",
      "cppArgs": [],
      "cppCallback": [
        "TerraMediaFileHideOnMapMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 1005
    },
    {
      "name": "cancelListenTerraMediaFileHideOnMap",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenTerraMediaFileHideOnMap",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 1032
    },
    {
      "name": "listenTerraMediaFileShowOnMap",
      "params": [
        {
          "type": "FlightHubCallback.TerraMediaFileShowOnMapCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenTerraMediaFileShowOnMap",
      "cppArgs": [],
      "cppCallback": [
        "TerraMediaFileShowOnMapMsg"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 1044
    },
    {
      "name": "cancelListenTerraMediaFileShowOnMap",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenTerraMediaFileShowOnMap",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TerraBuildModule.java",
      "line": 1071
    }
  ],
  "TestFlightModule": [
    {
      "name": "generateTryFlightWayline",
      "params": [
        {
          "type": "String",
          "name": "projectId"
        },
        {
          "type": "GenerateTryFlightWaylineParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GenerateTryFlightWaylineCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "generateTryFlightWayline",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "project_id",
          "output": false
        },
        {
          "type": "GenerateTryFlightWaylineParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "GenerateTryFlightWaylineResponse",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TestFlightModule.java",
      "line": 59
    },
    {
      "name": "createTestFlightTask",
      "params": [
        {
          "type": "String",
          "name": "projectId"
        },
        {
          "type": "CreateTestFlightTaskParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.CreateTestFlightTaskCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "createTestFlightTask",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "project_id",
          "output": false
        },
        {
          "type": "CreateTestFlightTaskParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "CreateTestFlightTaskResponse",
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/TestFlightModule.java",
      "line": 95
    }
  ],
  "WaylineManageModule": [
    {
      "name": "getWaylineList",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetWaylineListParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.GetWaylineListCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getWaylineList",
      "cppArgs": [
        {
          "type": "GetWaylineListParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetWaylineListResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 70
    },
    {
      "name": "getWaylineDetail",
      "params": [
        {
          "type": "String",
          "name": "waylineUuid"
        },
        {
          "type": "FlightHubCallback.GetWaylineDetailCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getWaylineDetail",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "wayline_uuid",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetWaylineDetailResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 114
    },
    {
      "name": "batchDeleteWaylines",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "waylineUuids"
        },
        {
          "type": "FlightHubCallback.BatchDeleteWaylinesCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "batchDeleteWaylines",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "wayline_uuids",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "BatchDeleteWaylinesResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 152
    },
    {
      "name": "updateWayline",
      "params": [
        {
          "type": "String",
          "name": "waylineUuid"
        },
        {
          "type": "String",
          "name": "waylineName"
        },
        {
          "type": "FlightHubCallback.UpdateWaylineCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "updateWayline",
      "cppArgs": [
        {
          "type": "std::string",
          "name": "wayline_uuid",
          "output": false
        },
        {
          "type": "std::string",
          "name": "wayline_name",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "UpdateWaylineResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 197
    },
    {
      "name": "submitWaylineInfo",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.SubmitWaylineInfoParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.SubmitWaylineInfoCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "submitWaylineInfo",
      "cppArgs": [
        {
          "type": "SubmitWaylineInfoParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 235
    },
    {
      "name": "batchDownloadWaylines",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.BatchDownloadWaylinesParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.BatchDownloadWaylinesCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "batchDownloadWaylines",
      "cppArgs": [
        {
          "type": "BatchDownloadWaylinesParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "BatchDownloadWaylinesResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 277
    },
    {
      "name": "duplicateWayline",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.DuplicateWaylineParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.DuplicateWaylineCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "duplicateWayline",
      "cppArgs": [
        {
          "type": "DuplicateWaylineParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "DuplicateWaylineResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 319
    },
    {
      "name": "listenImportWaylineEvent",
      "params": [
        {
          "type": "FlightHubCallback.ImportWaylineEventCallback",
          "name": "callback"
        }
      ],
      "returnType": "int",
      "cpp": "listenImportWaylineEvent",
      "cppArgs": [],
      "cppCallback": [
        "ImportWaylineEventResult"
      ],
      "cppReturn": "int",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 363
    },
    {
      "name": "cancelListenImportWaylineEvent",
      "params": [
        {
          "type": "int",
          "name": "listenId"
        }
      ],
      "returnType": "void",
      "cpp": "cancelListenImportWaylineEvent",
      "cppArgs": [
        {
          "type": "int",
          "name": "listen_id",
          "output": false
        }
      ],
      "cppCallback": null,
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 393
    },
    {
      "name": "copyWayline",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.CopyWaylineParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.CopyWaylineCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "copyWayline",
      "cppArgs": [
        {
          "type": "CopyWaylineParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "CopyWaylineResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 413
    },
    {
      "name": "concatWayline",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.ConcatWaylineParam",
          "name": "param"
        },
        {
          "type": "FlightHubCallback.ConcatWaylineCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "concatWayline",
      "cppArgs": [
        {
          "type": "ConcatWaylineParam",
          "name": "param",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ConcatWaylineResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 466
    },
    {
      "name": "importKmz",
      "params": [
        {
          "type": "java.util.List<String>",
          "name": "filePaths"
        },
        {
          "type": "FlightHubCallback.ImportKmzCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "importKmz",
      "cppArgs": [
        {
          "type": "std::vector<std::string>",
          "name": "file_paths",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "ImportKmzResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 568
    },
    {
      "name": "getWaylineEditorSts",
      "params": [
        {
          "type": "com.dji.flighthubsdk.bean.GetWaylineEditorStsParams",
          "name": "params"
        },
        {
          "type": "FlightHubCallback.GetWaylineEditorStsCallback",
          "name": "callback"
        }
      ],
      "returnType": "void",
      "cpp": "getWaylineEditorSts",
      "cppArgs": [
        {
          "type": "GetWaylineEditorStsParams",
          "name": "params",
          "output": false
        }
      ],
      "cppCallback": [
        "FlightHubError",
        "GetWaylineEditorStsResult"
      ],
      "cppReturn": "void",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/WaylineManageModule.java",
      "line": 634
    }
  ],
  "Workspace": [
    {
      "name": "getFlightTaskModule",
      "params": [],
      "returnType": "FlightTaskModule",
      "cpp": "getFlightTaskModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFlightTaskModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 46
    },
    {
      "name": "getMediaServiceModule",
      "params": [],
      "returnType": "MediaServiceModule",
      "cpp": "getMediaServiceModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IMediaServiceModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 62
    },
    {
      "name": "getTerraBuildModule",
      "params": [],
      "returnType": "TerraBuildModule",
      "cpp": "getTerraBuildModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ITerraBuildModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 78
    },
    {
      "name": "getSafetyServiceModule",
      "params": [],
      "returnType": "SafetyServiceModule",
      "cpp": "getSafetyServiceModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ISafetyServiceModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 94
    },
    {
      "name": "getFlightTaskRecordModule",
      "params": [],
      "returnType": "FlightTaskRecordModule",
      "cpp": "getFlightTaskRecordModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFlightTaskRecordModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 110
    },
    {
      "name": "getHMSModule",
      "params": [],
      "returnType": "HMSModule",
      "cpp": "getHMSModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IHMSModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 126
    },
    {
      "name": "getLogManagementModule",
      "params": [],
      "returnType": "LogManagementModule",
      "cpp": "getLogManagementModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILogManagementModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 142
    },
    {
      "name": "getMaintenanceManagementModule",
      "params": [],
      "returnType": "MaintenanceManagementModule",
      "cpp": "getMaintenanceManagementModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IMaintenanceManagementModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 158
    },
    {
      "name": "getDiagnosisManagementModule",
      "params": [],
      "returnType": "DiagnosisManagementModule",
      "cpp": "getDiagnosisManagementModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDiagnosisManagementModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 175
    },
    {
      "name": "getDeviceManageModule",
      "params": [],
      "returnType": "DeviceManageModule",
      "cpp": "getDeviceManageModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IDeviceManageModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 192
    },
    {
      "name": "getFirmwareManageModule",
      "params": [],
      "returnType": "FirmwareManageModule",
      "cpp": "getFirmwareManageModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFirmwareManageModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 208
    },
    {
      "name": "getPsdkResourceModule",
      "params": [],
      "returnType": "PsdkResourceModule",
      "cpp": "getPsdkResourceModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IPsdkResourceModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 224
    },
    {
      "name": "getFlashLedModule",
      "params": [],
      "returnType": "FlashLedModule",
      "cpp": "getFlashLedModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IFlashLedModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 240
    },
    {
      "name": "getWaylineManageModule",
      "params": [],
      "returnType": "WaylineManageModule",
      "cpp": "getWaylineManageModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IWaylineManageModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 256
    },
    {
      "name": "getAIInsideManageModule",
      "params": [],
      "returnType": "AIInsideManageModule",
      "cpp": "getAIInsideManageModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IAIInsideManageModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 272
    },
    {
      "name": "getElementModule",
      "params": [],
      "returnType": "ElementModule",
      "cpp": "getElementModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IElementModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 284
    },
    {
      "name": "getAIAlertModule",
      "params": [],
      "returnType": "AiAlertModule",
      "cpp": "getAIAlertModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<IAIAlertModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 298
    },
    {
      "name": "getLiveSyncModule",
      "params": [],
      "returnType": "LiveSyncModule",
      "cpp": "getLiveSyncModule",
      "cppArgs": [],
      "cppCallback": null,
      "cppReturn": "std::shared_ptr<ILiveSyncModule>",
      "special": false,
      "source": "platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk/core/Workspace.java",
      "line": 312
    }
  ]
};
export interface JavaMethod {name:string;params:{type:string;name:string}[];returnType:string;cpp:string;cppArgs:{type:string;name?:string;output?:boolean}[];cppCallback?:string[] | null;cppReturn?:string;special:boolean;source:string;line:number;}
