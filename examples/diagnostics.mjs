import {FlightHubSDK as sdk} from '../dist/index.js';
import {print} from './common.mjs';
// Loads the default bundled native library without initializing a connection.
print({node:process.version,platform:process.platform,arch:process.arch,version:sdk.getVersion(),diagnostics:sdk.getDiagnostics()});
