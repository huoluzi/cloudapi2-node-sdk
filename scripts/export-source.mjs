import {mkdir,copyFile,writeFile,readFile} from 'node:fs/promises';
import {resolve,join,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {publicFiles} from './public-package.mjs';
const root=fileURLToPath(new URL('..',import.meta.url));
const pkg=JSON.parse(await readFile(join(root,'package.json'),'utf8'));
const destination=resolve(process.argv[2]||join(root,'build/releases',pkg.name+'-'+pkg.version));
const files=await publicFiles(root);
await mkdir(dirname(destination),{recursive:true});
await mkdir(destination); // Refuse to merge into an existing checkout or export.
for(const file of files){
 const target=join(destination,file.path);await mkdir(dirname(target),{recursive:true});await copyFile(join(root,file.path),target);
}
await writeFile(destination+'.manifest.json',JSON.stringify({schemaVersion:1,files},null,2)+'\n');
console.log(JSON.stringify({status:'passed',destination,files:files.length}));
