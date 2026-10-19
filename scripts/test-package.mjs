import {spawnSync} from 'node:child_process';
import {mkdir,mkdtemp,readFile,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
import {validPublicPath,checkPublicText} from './public-package.mjs';
import {isReleaseBinary,verifyReleaseBinary,nativePaths} from './prebuilt-package.mjs';
const root=fileURLToPath(new URL('..',import.meta.url));
const npm=process.env.npm_execpath;
if(!npm)throw Error('Run this check with npm run test:package');
function run(exe,args,cwd=root){
 const r=spawnSync(exe,args,{cwd,encoding:'utf8',maxBuffer:8*1024*1024});
 if(r.error)throw r.error;if(r.status!==0)throw Error(`${exe} failed: ${r.stderr||r.stdout}`);return r.stdout;
}
run(process.execPath,['scripts/build-ts.mjs']);
await mkdir(join(root,'build'),{recursive:true});
const dir=await mkdtemp(join(root,'build/package-'));
const packed=JSON.parse(run(process.execPath,[npm,'pack','--ignore-scripts','--json','--pack-destination',dir]))[0];
const pkg=JSON.parse(await readFile(join(root,'package.json'),'utf8'));
for(const {path} of packed.files){
 assert(isReleaseBinary(path)||validPublicPath(path.replace(/^dist\//,'compiled/')),`Unexpected package path: ${path}`);
 assert(!/probes\.inc$|test\/|demo\/|scripts\/(?:remote|product-)/.test(path),`Private/test file packed: ${path}`);
 const bytes=await readFile(join(root,path));
 if(isReleaseBinary(path))await verifyReleaseBinary(root,path,bytes);else checkPublicText(path,bytes.toString('utf8'));
}
for(const path of ['dist/index.js','dist/index.d.ts','LICENSE','NOTICE','LICENSES/Apache-2.0.txt','native/addon.cpp','scripts/build-native.mjs','audit/java-api-inventory.json'])assert(packed.files.some(f=>f.path===path),`Missing ${path}`);
const consumer=join(dir,'consumer');await mkdir(consumer);
await writeFile(join(consumer,'package.json'),JSON.stringify({name:'sdk-package-consumer',version:'1.0.0',private:true}));
run(process.execPath,[npm,'install','--ignore-scripts','--no-audit','--no-fund','--package-lock=false',join(dir,packed.filename)],consumer);
run(process.execPath,['-e',`const a=require(${JSON.stringify(pkg.name)}); if(a.DEFAULT_CONFIG.verifySsl!==true||typeof a.FlightHubSDK.initialize!=='function')process.exit(1);`],consumer);
run(process.execPath,['--input-type=module','-e',`import sdk from ${JSON.stringify(pkg.name)}; if(typeof sdk.FlightHubSDK.getVersion!=='function')process.exit(1);`],consumer);
run(process.execPath,['--input-type=module','-e',`import {FlightHubSDK, CameraMode} from ${JSON.stringify(pkg.name)}; if(typeof FlightHubSDK.initialize!=='function'||typeof CameraMode.UNKNOWN!=='number')process.exit(1);`],consumer);
for(const path of nativePaths)assert(packed.files.some(f=>f.path===path),'Missing prebuilt library: '+path);
let nativeLoaded=false;
if(process.platform==='linux'&&process.arch==='x64'){
 run(process.execPath,['-e',`delete process.env.CLOUDAPI2_NODE_BINDING;const {FlightHubSDK:s}=require(${JSON.stringify(pkg.name)});if(s.getVersion()!=='3.3.7.0')process.exit(1);s.shutdown();`],consumer);
 nativeLoaded=true;
}
await writeFile(join(consumer,'index.ts'),`import {FlightHubSDK, type AircraftLocation, CameraMode} from '${pkg.name}';\nconst n: number = CameraMode.UNKNOWN;\nconst loc: AircraftLocation = {latitude:0,longitude:0,height:0,elevation:0};\nFlightHubSDK.getDroneInstance('fixture')?.getDroneOsdModule()?.listenAircraftLocation(v => { const x: number = v.latitude; });\nvoid loc; void n;\n`);
const compiler=createRequire(import.meta.url).resolve('typescript/lib/tsc.js');
run(process.execPath,[compiler,'--strict','--noEmit','--target','es2022','--module','node16','--moduleResolution','node16','index.ts','--typeRoots',join(root,'node_modules/@types')],consumer);
const report={status:'passed',node:process.version,platform:process.platform,package:pkg.name,version:pkg.version,files:packed.files.length,cjs:true,esm:true,types:true,prebuiltFiles:nativePaths.length,nativeLoaded,sha512:packed.integrity};
await writeFile(join(dir,'result.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report));
