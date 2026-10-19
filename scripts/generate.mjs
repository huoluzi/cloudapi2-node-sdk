import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('..',import.meta.url));
const steps=[['audit-java.mjs','--check'],['generate-modules.mjs'],['generate-java-contract.mjs'],['generate-dto-schema.mjs'],['build-ts.mjs'],['generate-java-types.mjs'],['generate-contract-probes.mjs'],['license-headers.mjs'],['build-ts.mjs']];
for(const [script,...args] of steps){
 const result=spawnSync(process.execPath,['scripts/'+script,...args],{cwd:root,stdio:'inherit'});
 if(result.error)throw result.error;if(result.status!==0)process.exit(result.status||1);
}
