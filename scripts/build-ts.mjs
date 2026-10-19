import { createRequire } from 'node:module';
import { spawnSync } from 'node:child_process';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Explicit offline development override; never silently borrow another project.
const modules = process.env.CLOUDAPI2_DEV_MODULES;
const req = createRequire(join(root, 'package.json'));
const compiler = modules ? join(resolve(modules), 'typescript/lib/tsc.js') : req.resolve('typescript/lib/tsc.js');
const args = [compiler, '-p', join(root, 'tsconfig.json')];
if (modules) args.push('--typeRoots', join(resolve(modules), '@types'));
const result = spawnSync(process.execPath, args, { cwd: root, stdio: 'inherit' });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
