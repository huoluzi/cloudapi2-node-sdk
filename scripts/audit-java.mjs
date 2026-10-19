import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { resolve, relative, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { scanPublicMethods, scanCallbacks } from './java-scan.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sdk = resolve(process.env.CLOUDAPI2_SDK_ROOT ?? join(root, '../official-demo/sdk'));
const javaRoot = join(sdk, 'platform/java/flight_hub_sdk/src/main/java/com/dji/flighthubsdk');
const slash = p => p.replaceAll('\\', '/');
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const groups = await Promise.all(entries.map(e => e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)]));
  return groups.flat().sort();
}
const files = [];
const methods = [];
const counts = {};
for (const path of await walk(javaRoot)) {
  if (!path.endsWith('.java')) continue;
  const bytes = await readFile(path);
  const source = bytes.toString('utf8');
  const local = slash(relative(javaRoot, path));
  const category = local.includes('/') ? local.split('/')[0] : 'root';
  counts[category] = (counts[category] ?? 0) + 1;
  files.push({ path: slash(relative(sdk, path)), sha256: sha(bytes), sha256LF: sha(source.replaceAll('\r\n', '\n')), lines: source.split('\n').length });
  if (local === 'FlightHubSDK.java' || (category === 'core' && !/\/(FlightHubSdkManager|JniLibraryLoader|package-info)\.java$/.test(local))) {
    const owner = local.replace(/\.java$/, '').replaceAll('/', '.');
    for (const method of scanPublicMethods(source)) methods.push({ owner, ...method, source: slash(relative(sdk, path)), status: 'pending' });
  }
}
const callbacks = scanCallbacks(await readFile(join(javaRoot, 'FlightHubCallback.java'), 'utf8'));
const converters = scanPublicMethods(await readFile(join(javaRoot, 'internal/convert/FlightHubSdkConvert.java'), 'utf8'));
const additional = [join(sdk, 'VERSION'), join(sdk, 'CMakeLists.txt'),
  ...(await walk(join(sdk, 'src'))), ...(await walk(join(sdk, 'cmake'))),
  join(sdk, 'platform/java/swig/flight_hub_sdk.i'), join(sdk, 'platform/java/CMakeLists.txt')];
const nativeInputs = [];
for (const path of additional) {
  const bytes = await readFile(path);
  nativeInputs.push({ path: slash(relative(sdk, path)), sha256: sha(bytes), sha256LF: sha(bytes.toString('utf8').replaceAll('\r\n', '\n')) });
}
const digest = sha(JSON.stringify([...files, ...nativeInputs].map(({ path, sha256LF }) => ({ path, sha256LF }))));
let revision = null, dirtySdk = null;
try {
  const repo = dirname(sdk);
  const opts = { cwd: repo, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] };
  const args = ['-c', `safe.directory=${slash(repo)}`];
  revision = execFileSync('git', [...args, 'rev-parse', 'HEAD'], opts).trim();
  dirtySdk = execFileSync('git', [...args, 'status', '--porcelain', '--', 'sdk'], opts).trim().split('\n').filter(Boolean);
} catch { /* source archives need not be Git checkouts */ }
const lock = { sdkVersion: (await readFile(join(sdk, 'VERSION'), 'utf8')).trim(), revision, dirtySdk,
  auditDigest: digest, digestScope: 'LF-normalized Java + sdk/src + sdk/cmake + SWIG interface + build entrypoints; excludes deps and prebuilt binaries',
  defaultSourcePath: '../official-demo/sdk', productionTarget: 'linux-x64-glibc', nodeApiVersion: 8 };
if (process.argv.includes('--check')) {
  const expected = JSON.parse(await readFile(join(root, 'upstream.lock.json'), 'utf8'));
  // An official source archive need not contain .git. Content is authoritative;
  // Git metadata is provenance, not a portable installation requirement.
  if (expected.auditDigest !== digest) {
    throw new Error('Upstream source changed. Review the diff before regenerating the inventory.');
  }
  console.log('Upstream source matches the audited baseline.');
} else {
  const summary = { javaFiles: files.length, filesByPackage: counts,
    apiClasses: new Set(methods.map(m => m.owner)).size, publicMethodOverloads: methods.length,
    methodKinds: Object.fromEntries(['synchronous', 'callback-operation', 'subscription', 'cancel'].map(k => [k, methods.filter(m => m.kind === k).length])),
    callbackInterfaces: callbacks.length, converterMethods: converters.length,
    converterLines: files.find(f => f.path.endsWith('/FlightHubSdkConvert.java')).lines };
  await mkdir(join(root, 'audit'), { recursive: true });
  await writeFile(join(root, 'upstream.lock.json'), JSON.stringify(lock, null, 2) + '\n');
  await writeFile(join(root, 'audit/java-api-inventory.json'), JSON.stringify({ methodology: 'Lexical public methods at outer class depth; constructors, anonymous/nested methods and internal loader/manager excluded. Counts include overloads; not semantic coverage.', baseline: lock, summary, methods, callbacks, converters, files, nativeInputs }, null, 2) + '\n');
  console.log(JSON.stringify(summary, null, 2));
}
