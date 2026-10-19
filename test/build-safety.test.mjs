import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,writeFile,readFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
test('native build refuses an existing output before staging or running CMake',{skip:process.platform!=='linux'||process.arch!=='x64'},async t=>{
 const output=await mkdtemp(join(tmpdir(),'cloudapi2-output-'));t.after(()=>rm(output,{recursive:true,force:true}));
 const file=join(output,'cloudapi2_node.node');await writeFile(file,'existing artifact must be preserved');
 const child=spawnSync(process.execPath,['scripts/build-native.mjs'],{encoding:'utf8',env:{...process.env,CLOUDAPI2_NATIVE_OUTPUT:output,CLOUDAPI2_SDK_ROOT:join(output,'does-not-exist')},timeout:5000});
 assert.equal(child.status,1);assert.match(child.stderr,/Native output already exists/);
 assert.equal(await readFile(file,'utf8'),'existing artifact must be preserved');
});
