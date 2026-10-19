import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { scanPublicMethods, scanCallbacks } from '../scripts/java-scan.mjs';

test('inventory excludes constructors, comments, anonymous and nested methods', () => {
  const input = `public class Sample {
    public Sample() {}
    // public void fake() {}
    public synchronized List<Item> get(String key, Callback cb) {
      String x = "public void fake2() {}";
      Object o = new Object() { public void nested() {} };
    }
    public int listenX(Callback cb) { return 1; }
    public void cancelListenX(int id) {}
    public static class Child { public void inner() {} }
  }`;
  const methods = scanPublicMethods(input);
  assert.deepEqual(methods.map(x=>x.name), ['get','listenX','cancelListenX']);
  assert.deepEqual(methods.map(x=>x.kind), ['callback-operation','subscription','cancel']);
});
test('callback inventory retains data/error argument order', () => {
  const callbacks = scanCallbacks('public class Callbacks { public interface DeviceListCallback { void onResult(List<Device> data, FlightHubError error); } }');
  assert.equal(callbacks[0].parameters, 'List<Device> data, FlightHubError error');
});
test('audited representative contracts are present without anonymous callback pollution', async () => {
  const inventory = JSON.parse(await readFile(new URL('../audit/java-api-inventory.json', import.meta.url)));
  assert.equal(inventory.methods.filter(x=>x.owner==='FlightHubSDK'&&x.name==='initialize').length, 2);
  assert.ok(inventory.methods.some(x=>x.owner==='core.DroneOsdModule'&&x.name==='listenAircraftLocation'));
  assert.ok(!inventory.methods.some(x=>x.name==='onAircraftLocation'));
  assert.equal(inventory.callbacks.find(x=>x.name==='DeviceListCallback').parameters, 'java.util.List<DeviceTopo> devices, FlightHubError error');
});
