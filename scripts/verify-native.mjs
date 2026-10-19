import {createRequire} from 'node:module';
import {readdir,readFile,writeFile,lstat} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {assertBinding} from '../dist/loader.js';
const dir=resolve(process.argv[2]||'native/linux-x64');
const binary=join(dir,'cloudapi2_node.node');
const bytes=await readFile(binary);
if(bytes.subarray(0,4).toString('hex')!=='7f454c46')throw Error('Expected a Linux ELF binary');
const dependencies=spawnSync('ldd',[binary],{encoding:'utf8'});
if(dependencies.error||dependencies.status!==0||/not found/.test(dependencies.stdout))throw Error('Native dependencies unresolved; run ldd on the .node file');
if(/libjvm|libjava|libjli/.test(dependencies.stdout))throw Error('Unexpected Java runtime dependency');
if(/libasan|libubsan|libtsan/.test(dependencies.stdout))throw Error('Sanitizer artifacts are for private testing, not distribution');
const binding=createRequire(import.meta.url)(binary);assertBinding(binding);
const files=[];
for(const name of (await readdir(dir)).sort()){
 if(!/\.node$|\.so(?:\.|$)/.test(name))continue;
 if(!(await lstat(join(dir,name))).isFile())throw Error('Expected regular bundled native file: '+name);
 const data=await readFile(join(dir,name));files.push({name,bytes:data.length,sha256:createHash('sha256').update(data).digest('hex')});
}
const manifest={schemaVersion:1,node:process.version,platform:process.platform,arch:process.arch,glibc:process.report.getReport().header.glibcVersionRuntime,binding:binding.getBindingInfo(),sdkVersion:binding.getVersion(),contractProbes:false,files};
const previous=await readFile(join(dir,'build-manifest.json'),'utf8').then(JSON.parse).catch(error=>{if(error.code==='ENOENT')return null;throw error;});
if(previous?.upstream){
 if(JSON.stringify(previous.files)!==JSON.stringify(files))throw Error('Bundled release hashes changed; do not overwrite its provenance manifest');
 // Preserve the original build environment; this process may run on another OS/Node version.
}else await writeFile(join(dir,'build-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log(JSON.stringify({status:'passed',nativeFiles:files.length,...manifest.binding,node:process.version}));
