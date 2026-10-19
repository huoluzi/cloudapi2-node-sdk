import {fileURLToPath} from 'node:url';
import {publicFiles} from './public-package.mjs';
import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';
const root=fileURLToPath(new URL('..',import.meta.url));
const files=await publicFiles(root);
const git=spawnSync('git',['rev-parse','--show-toplevel'],{cwd:root,encoding:'utf8'});
if(git.status===0&&resolve(git.stdout.trim())===resolve(root)){
 const tracked=spawnSync('git',['ls-files','-z'],{cwd:root,encoding:'utf8'});
 if(tracked.status!==0)throw Error('Cannot inspect Git index');
 const allowed=new Set(files.map(f=>f.path));
 const unexpected=tracked.stdout.split('\0').filter(p=>p&&!allowed.has(p));
 if(unexpected.length)throw Error('Tracked files outside the public allowlist: '+unexpected.join(', '));
}
console.log(JSON.stringify({status:'passed',publicFiles:files.length,bytes:files.reduce((n,f)=>n+f.bytes,0),scope:'allowlisted source and hash-verified release binaries; private evidence excluded'}));
