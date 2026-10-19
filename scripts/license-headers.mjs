import {readFile,writeFile,readdir} from 'node:fs/promises';
const header='// Copyright (c) 2026 SZ DJI Technology Co., Ltd.\n// SPDX-License-Identifier: Apache-2.0\n// Modified for the independent Node.js binding in 2026; see NOTICE.\n';
const paths=['src/generated.ts','src/java-types.ts','src/java-contract.ts','src/dto-schema.ts','src/dto-compat.ts','src/module-runtime.ts','scripts/patch-staged-sdk.mjs'];
for(const dir of ['native/generated','test/generated','demo'])for(const name of await readdir(dir))if(/\.(?:inc|java|mjs)$/.test(name))paths.push(dir+'/'+name);
for(const path of paths){const text=await readFile(path,'utf8');if(!text.startsWith(header))await writeFile(path,header+text);}
console.log(JSON.stringify({attributedFiles:paths.length}));
