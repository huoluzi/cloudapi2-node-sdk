import { cp, mkdir, writeFile, readFile, mkdtemp, lstat, rename } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { dirname, join, resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { patchStagedSdk } from './patch-staged-sdk.mjs';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
if (process.platform !== 'linux' || process.arch !== 'x64') throw new Error('Native build requires Linux x64');
const sdk = resolve(process.env.CLOUDAPI2_SDK_ROOT ?? join(root, '../official-demo/sdk'));
const nodeHeaders = process.env.NODE_INCLUDE_DIR ?? '/usr/include/node';
const output = resolve(process.env.CLOUDAPI2_NATIVE_OUTPUT ?? join(root, 'native/linux-x64'));
async function requireAbsent(path) {
  try { await lstat(path); } catch (error) { if (error.code === 'ENOENT') return; throw error; }
  throw new Error(`Native output already exists: ${path}. Choose a new CLOUDAPI2_NATIVE_OUTPUT directory; never overwrite libraries loaded by a running process.`);
}
await requireAbsent(output);
function run(exe, args) {
  const result = spawnSync(exe, args, { cwd: root, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`${exe} exited with ${result.status}`);
}
// Validate before any staging/build. Archives do not need Git metadata to match.
const inventory = JSON.parse(await readFile(join(root, 'audit/java-api-inventory.json'), 'utf8'));
for (const item of [...inventory.files, ...inventory.nativeInputs]) {
  const source = (await readFile(join(sdk, item.path), 'utf8')).replaceAll('\r\n', '\n');
  const hash = createHash('sha256').update(source).digest('hex');
  if (hash !== item.sha256LF) throw new Error(`Audited source mismatch: ${item.path}`);
}
run('cmake', ['--version']);
await mkdir(join(root, 'build'), { recursive: true });
// Unique private copy because upstream CMake writes sdk/src/version.h in its source tree.
const work = await mkdtemp(join(root, 'build/native-'));
const staged = join(work, 'sdk');
await cp(sdk, staged, { recursive: true, dereference: true, filter: path => {
  const parts = relative(sdk, path).split(/[\\/]/);
  return !parts.some(p => ['.git','build','build-linux','node_modules','.gradle','dist'].includes(p));
}});
await writeFile(join(staged, '.cloudapi2-node-stage'), 'private source copy\n');
await patchStagedSdk(staged);
const cmakeBuild = join(work, 'cmake');
const stagedOutput = join(work, 'output');
run('cmake', ['-S', root, '-B', cmakeBuild, `-DCLOUDAPI2_STAGED_SDK=${staged}`,
  `-DNODE_INCLUDE_DIR=${nodeHeaders}`, `-DCLOUDAPI2_NATIVE_OUTPUT=${stagedOutput}`,
  '-DCLOUDAPI2_CONTRACT_PROBES=OFF', '-DCLOUDAPI2_SANITIZERS=OFF', '-DCMAKE_BUILD_TYPE=Release', '-DFH_SDK_DEBUG_SYMBOLS=OFF']);
run('cmake', ['--build', cmakeBuild, '--target', 'cloudapi2_node', '--parallel', process.env.CLOUDAPI2_BUILD_JOBS ?? '2']);
run(process.execPath, [join(root, 'scripts/verify-native.mjs'), stagedOutput]);
await mkdir(dirname(output), {recursive:true});
await requireAbsent(output);
await rename(stagedOutput, output);
console.log(`Native output: ${join(output, 'cloudapi2_node.node')}`);
