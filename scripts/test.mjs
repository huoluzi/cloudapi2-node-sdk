import { readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('..', import.meta.url));
const files = readdirSync(new URL('../test/', import.meta.url)).filter(f => f.endsWith('.test.mjs')).sort();
const result = spawnSync(process.execPath, ['--test', ...files.map(f => `test/${f}`)], { cwd: root, stdio: 'inherit' });
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
