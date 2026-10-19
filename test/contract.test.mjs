import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url);
const { normalizeConfig, normalizeHeaders, DEFAULT_CONFIG } = require('../dist/config.js');
const { createFacade } = require('../dist/facade.js');
const { assertBinding } = require('../dist/loader.js');
const { FlightHubSDK, FlightHubSdkErrorCode } = require('../dist/index.js');

test('config defaults match Java Bean and preserve explicit false/zero', () => {
  assert.equal(DEFAULT_CONFIG.logMaxFileSize, 4194304n);
  assert.equal(DEFAULT_CONFIG.logMaxFiles, 1000);
  assert.equal(DEFAULT_CONFIG.verifySsl, true);
  const out = normalizeConfig({ verifySsl: false, logMaxFiles: 0, logMaxFileSize: 0, address: null, port: null, logFilePath: '' });
  assert.equal(out.verifySsl, false);
  assert.equal(out.logMaxFileSize, 0n);
  assert.equal(out.logMaxFiles, 0);
  assert.equal(out.address, '');
  assert.equal(out.port, '');
  assert.equal(out.logFilePath, 'flight_hub_sdk.log');
});
test('uint64 conversion rejects precision loss, negatives and overflow', () => {
  assert.equal(normalizeConfig({ logMaxFileSize: 18446744073709551615n }).logMaxFileSize, 18446744073709551615n);
  for (const value of [-1, 1.25, NaN, Infinity, 9007199254740992, 18446744073709551616n]) {
    assert.throws(() => normalizeConfig({ logMaxFileSize: value }));
  }
  assert.throws(() => normalizeConfig({ port: 30812 }));
  assert.throws(() => normalizeConfig({ verifySsl: 'false' }));
  assert.throws(() => normalizeConfig({ logMaxFiles: 2147483648 }));
  assert.throws(() => normalizeConfig({ serverAdress: 'typo' }));
  assert.throws(() => normalizeConfig(null));
});
test('headers mirror Java filtering and preserve duplicate-key order', () => {
  const input = [null, {key: '',value: 'skip'}, {key:null}, {key:'X-Example',value:null}, {key:'X-Example',value:'second'}];
  const out = normalizeHeaders(input);
  assert.deepEqual(out, [{key:'X-Example',value:''}, {key:'X-Example',value:'second'}]);
  out[0].value = 'changed';
  assert.equal(input[3].value, null);
  assert.deepEqual(normalizeHeaders(null), []);
});
test('facade passes native failures through and never simulates success', () => {
  const calls = [];
  const binding = {
    setHttpHeaders: headers => { calls.push(['headers',headers]); return -5; },
    initialize: config => { calls.push(['init',config]); return -1; },
    shutdown: () => -3,
    getVersion: () => { throw new Error('native unavailable'); },
  };
  const api = createFacade(() => binding);
  assert.equal(api.setHttpHeaders([{key:'X-Test',value:'test-only'}]), -5);
  assert.equal(api.initialize({address:'http://example.invalid'}), -1);
  assert.equal(api.shutdown(), -3);
  assert.equal(calls[0][0], 'headers');
  assert.equal(calls[1][1].verifySsl, true);
  assert.throws(() => api.getVersion(), /native unavailable/);
});
test('loading an incomplete or incompatible native contract fails', () => {
  assert.throws(() => assertBinding({}), /incomplete/);
  const names = ['getBindingInfo','getVersion','getBuildInfo','isInitialized','initialize','shutdown','getConfig','setLogLevel','setHttpHeaders','getHttpHeaders','setWebSocketAuthHeaders','getWebSocketAuthHeaders','getWorkspaceInstance','getDeviceManageModule','getDroneInstance','getDroneOsdModule','getDeviceList','listenAircraftLocation','cancelListenAircraftLocation','getDiagnostics'];
  const binding = Object.fromEntries([...names,'getWorkspaceModule','invokeModule','isNotificationConnected','getNativeInstance','disposeModule'].map(k => [k,()=>{}]));
  binding.getBindingInfo = () => ({bindingApiVersion:1});
  assert.throws(() => assertBinding(binding), /version mismatch/);
  binding.getBindingInfo = () => ({bindingApiVersion:3,upstreamVersion:'3.3.7'});
  assert.throws(() => assertBinding(binding), /version mismatch/);
  binding.getBindingInfo = () => ({bindingApiVersion:4,upstreamVersion:'0.0.0'});
  assert.throws(() => assertBinding(binding), /upstream.lock.json/);
});
test('SDK error numbers agree with the audited C++ enum', async (t) => {
  const path = process.env.CLOUDAPI2_SDK_ROOT ? resolve(process.env.CLOUDAPI2_SDK_ROOT, 'src/api/value.h') : new URL('../../official-demo/sdk/src/api/value.h', import.meta.url);
  const source = await readFile(path, 'utf8').catch(() => null);
  if (source === null) return t.skip('Official C++ source is unavailable');
  for (const [name,value] of Object.entries(FlightHubSdkErrorCode)) {
    const match = new RegExp(`\\b${name}\\s*=\\s*(-?(?:0x[0-9A-Fa-f]+|\\d+))`).exec(source);
    assert.ok(match, name);
    assert.equal(Number(match[1]), value, name);
  }
});
test('unsupported platforms fail explicitly after a safe package import', {skip:process.platform==='linux'&&process.arch==='x64'}, () => {
  assert.throws(() => FlightHubSDK.getVersion(), /Linux x64/);
});
