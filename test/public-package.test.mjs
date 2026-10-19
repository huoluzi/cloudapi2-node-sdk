import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validPublicPath,checkPublicText,publicFiles} from '../scripts/public-package.mjs';
import {mkdtemp,writeFile,mkdir,symlink,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {readFile} from 'node:fs/promises';
import {verifyReleaseBinary,isReleaseBinary} from '../scripts/prebuilt-package.mjs';
import {fileURLToPath} from 'node:url';
test('source export rejects binaries, credentials, live evidence and escaping paths',()=>{
 for(const p of ['../outside','/absolute','a\\b','native/a.so.1.1','native/a.node','x.jar','.env','audit/server-evidence.json','.runtime/config.json','scripts/deploy55.sh'])assert.equal(validPublicPath(p),false,p);
 assert.equal(validPublicPath('src/index.ts'),true);
 const privateAddress=['192','168','1','5'].join('.');
 assert.throws(()=>checkPublicText('example',privateAddress),/value withheld/);
 assert.throws(()=>checkPublicText('example','-----BEGIN '+'PRIVATE KEY-----'),/value withheld/);
 assert.doesNotThrow(()=>checkPublicText('example','http://127.0.0.1:3000 example.invalid'));
});

test('bundled binary allowlist requires matching ELF content and SHA-256',async()=>{
 const root=fileURLToPath(new URL('..',import.meta.url));
 const path='native/linux-x64/libdrpc.so';
 const bytes=await readFile(new URL('../'+path,import.meta.url));
 await verifyReleaseBinary(root,path,bytes);
 bytes[bytes.length-1]^=1;
 await assert.rejects(verifyReleaseBinary(root,path,bytes),/hash mismatch/);
 assert.equal(isReleaseBinary('native/linux-x64/unreviewed.so'),false);
 assert.equal(isReleaseBinary('native/linux-x64/../libdrpc.so'),false);
});
test('source export is allowlisted and hashes the exact content',async t=>{
 const dir=await mkdtemp(join(tmpdir(),'cloudapi2-public-'));t.after(()=>rm(dir,{recursive:true,force:true}));
 await writeFile(join(dir,'public-files.json'),JSON.stringify({directories:[],files:['readme.md']}));
 await writeFile(join(dir,'readme.md'),'public');await writeFile(join(dir,'private.txt'),'do not include');
 const files=await publicFiles(dir);assert.equal(files.length,1);assert.equal(files[0].path,'readme.md');assert.equal(files[0].sha256.length,64);
 if(process.platform!=='win32'){
  await mkdir(join(dir,'other'));await symlink(join(dir,'other'),join(dir,'linked'));
  await writeFile(join(dir,'public-files.json'),JSON.stringify({directories:['linked'],files:[]}));
  await assert.rejects(publicFiles(dir),/symlink/);
 }
});
