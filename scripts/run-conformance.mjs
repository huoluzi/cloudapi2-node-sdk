import {spawnSync} from 'node:child_process';
import {mkdirSync,readdirSync,writeFileSync,existsSync} from 'node:fs';
import {resolve,delimiter} from 'node:path';
if(process.platform!=='linux'||process.arch!=='x64')throw Error('Native conformance requires Linux x64');
for(const key of ['CLOUDAPI2_JAVA_JAR','CLOUDAPI2_TEST_BINDING','CLOUDAPI2_NODE_BINDING'])if(!process.env[key]||!existsSync(process.env[key]))throw Error(`Provide ${key}`);
mkdirSync('.runtime',{recursive:true,mode:0o700});mkdirSync('audit',{recursive:true});mkdirSync('build/java-oracle',{recursive:true});
function run(name,exe,args){
 const r=spawnSync(exe,args,{encoding:'utf8',maxBuffer:64*1024*1024,timeout:300000});
 writeFileSync(`.runtime/${name}.log`,(r.stdout||'')+(r.stderr||''),{mode:0o600});
 if(r.error||r.status!==0)throw Error(`${name} failed; inspect the private .runtime/${name}.log`);
 console.log(name+' passed');
}
const jar=resolve(process.env.CLOUDAPI2_JAVA_JAR),classes=resolve('build/java-oracle');
const sources=['JavaOracle','JavaApiOracle','JavaDtoOracle','JavaRootOracle','JavaBusinessOracle'].map(n=>'test/'+n+'.java').concat(readdirSync('test/generated').filter(n=>n.endsWith('.java')).map(n=>'test/generated/'+n));
run('java-compile','javac',['-encoding','UTF-8','-cp',jar,'-d',classes,...sources]);
for(const mode of ['', 'edge']){
 run('java-api-'+(mode||'normal'),'java',['-cp',classes+delimiter+jar,'JavaApiOracle',...(mode?[mode]:[])]);
 run('node-api-'+(mode||'normal'),process.execPath,['test/api-compat-native.mjs',...(mode?['--edge']:[])]);
}
for(const [java,test] of [['JavaDtoOracle','dto-compat'],['JavaRootOracle','root-native']]){
 run(java,'java',['-cp',classes+delimiter+jar,java]);run(test,process.execPath,['test/'+test+'.mjs']);
}
run('callback-boundaries',process.execPath,['test/native-callback-boundaries.mjs']);
run('native-hardening',process.execPath,['test/native-hardening.mjs']);
