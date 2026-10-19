import {readFile,readdir,lstat,realpath} from 'node:fs/promises';
import {resolve,relative,join,sep} from 'node:path';
import {createHash} from 'node:crypto';
import {isReleaseBinary,verifyReleaseBinary} from './prebuilt-package.mjs';
const slash=p=>p.split(sep).join('/');
export function validPublicPath(path){
  if(!path||path.includes('\\')||path.startsWith('/')||path.split('/').some(p=>['','..','.'].includes(p)))return false;
  if(/(?:^|\/)(?:\.runtime|\.toolchain|\.local-tools|node_modules|build|dist|server55|\.git)(?:\/|$)/.test(path))return false;
  if(/\.(?:node|so(?:\.[\d.]+)?|a|dll|dylib|jar|log|pem|key|p12|pfx|zip|tgz)$/i.test(path))return false;
  if(/(?:^|\/)(?:server-|\.env(?!\.example$))|(?:55|132)\.(?:sh|py)$/.test(path))return false;
  return true;
}
export function checkPublicText(path,text){
  const rules=[
    ['private network address',/\b(?:192\.168\.\d{1,3}\.\d{1,3}|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(?:1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3})\b/],
    ['workstation path',/\/home\/flision\b|H:[\\/]02Code|C:[\\/]Users[\\/]flision/i],
    ['private key',/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
    ['GitHub credential',/\b(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,})\b/],
    ['JWT credential',/\beyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}\b/],
  ];
  for(const [name,pattern] of rules)if(pattern.test(text))throw Error(`${path}: ${name} detected (value withheld)`);
  if(text.includes('\0'))throw Error(`${path}: unexpected binary content`);
}
export async function publicFiles(root){
  root=await realpath(root);
  const manifest=JSON.parse(await readFile(join(root,'public-files.json'),'utf8'));
  const binaryFiles=new Set(manifest.binaryFiles||[]);
  const files=new Set([...manifest.files,...binaryFiles]);
  async function walk(path){
    const info=await lstat(join(root,path));if(!info.isDirectory()||info.isSymbolicLink())throw Error('Source directory must not be a symlink: '+path);
    for(const entry of await readdir(join(root,path),{withFileTypes:true})){
      const next=path+'/'+entry.name;
      if(entry.isDirectory())await walk(next);else {
        const allowed=/^(?:src\/.+\.ts|native\/generated\/.+\.inc|test\/generated\/(?:.+\.java|java-modules\.txt)|demo\/(?:.+\.mjs|README\.md)|examples\/(?:.+\.mjs|README\.md|config\.example\.json)|LICENSES\/.+\.txt|\.github\/workflows\/.+\.yml)$/;
        if(!allowed.test(next))throw Error('Unexpected file in public source directory: '+next);
        files.add(next);
      }
    }
  }
  for(const dir of manifest.directories){if(!validPublicPath(dir))throw Error('Disallowed source directory');await walk(dir);}
  const result=[];
  for(const path of [...files].sort()){
    if(binaryFiles.has(path)?!isReleaseBinary(path):!validPublicPath(path))throw Error('Disallowed public path: '+path);
    const full=resolve(root,path),info=await lstat(full);
    if(!info.isFile()||info.isSymbolicLink())throw Error('Public source must be a regular file: '+path);
    const actual=await realpath(full),rel=relative(root,actual);
    if(rel.startsWith('..')||resolve(root,rel)!==actual)throw Error('Public source escapes root: '+path);
    const bytes=await readFile(full);
    if(binaryFiles.has(path))await verifyReleaseBinary(root,path,bytes);else checkPublicText(path,bytes.toString('utf8'));
    const derived=/^(?:src\/(?:generated|java-types|java-contract|dto-schema|dto-compat|module-runtime)\.ts|native\/generated\/.+\.inc|test\/generated\/.+\.java|demo\/.+\.mjs|scripts\/patch-staged-sdk\.mjs)$/;
    if(derived.test(path)&&!bytes.subarray(0,250).toString('utf8').includes('SPDX-License-Identifier: Apache-2.0'))throw Error(path+': missing upstream license header; run scripts/license-headers.mjs');
    result.push({path:slash(path),bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});
  }
  return result;
}
