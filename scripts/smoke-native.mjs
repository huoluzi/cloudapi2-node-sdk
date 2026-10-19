import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { FlightHubSDK } = require('../dist/index.js');
// No initialize(), no server credentials, no network or device commands.
const version = FlightHubSDK.getVersion();
const buildInfo = FlightHubSDK.getBuildInfo();
assert.match(version, /^3\.3\.7(?:\.|$)/);
assert.equal(typeof buildInfo, 'string');
assert.equal(FlightHubSDK.isInitialized(), false);
console.log(JSON.stringify({ version, buildInfo, initialized: false, scope: 'native metadata only' }, null, 2));
