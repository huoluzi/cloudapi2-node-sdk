// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { HttpError } from './store.mjs';
export const BASE='/pf-devkit/ai-plugin/skeleton';
export function json(res,status,data){res.statusCode=status;if(data===undefined){res.end();return;}res.setHeader('Content-Type','application/json; charset=utf-8');res.end(JSON.stringify(data,(_,v)=>{if(typeof v!=='bigint')return v;const n=Number(v);if(!Number.isSafeInteger(n))throw new Error('JSON integer exceeds safe range');return n;}));}
export async function body(req,max=1024*1024){let size=0,chunks=[];for await(const c of req){size+=c.length;if(size>max)throw new HttpError(413,'Request body too large');chunks.push(c);}const bytes=Buffer.concat(chunks);if(!bytes.length)return {};try{return JSON.parse(bytes);}catch{throw new HttpError(400,'Invalid JSON');}}
export class Router {
  constructor(auth,webRoot){this.auth=auth;this.webRoot=webRoot&&resolve(webRoot);this.routes=[];}
  add(method,path,handler,{public:open=false}={}){const names=[];const expr=path.split('/').map(s=>{if(s.startsWith(':')){names.push(s.slice(1).replace(/\*$/,''));return s.endsWith('*')?'(.+)':'([^/]+)';}return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');}).join('/');this.routes.push({method,path,re:new RegExp('^'+expr+'/?$'),names,handler,open});}
  createServer(){return createServer(async(req,res)=>{
    try{
      const url=new URL(req.url,'http://localhost');const path=url.pathname.startsWith(BASE)?url.pathname.slice(BASE.length):url.pathname;
      const route=this.routes.find(r=>r.method===req.method&&r.re.test(path));
      if(!route){if(req.method==='GET'&&!path.startsWith('/api/')&&!path.startsWith('/actuator/'))return await this.static(url.pathname,res);throw new HttpError(404,'Not found');}
      const user=this.auth.authenticate(req,url);if(!route.open&&!user)throw new HttpError(401,'未认证');
      const match=route.re.exec(path);const params=Object.fromEntries(route.names.map((name,i)=>[name,decodeURIComponent(match[i+1])]));
      const payload=await route.handler({req,res,url,params,user,body:()=>body(req)});
      if(!res.writableEnded&&!res.headersSent)json(res,res.statusCode||200,payload);
    }catch(e){if(res.headersSent){res.destroy();return;}const taskRoute=req.url?.includes('/api/v1/flight-tasks');json(res,e.sdkError?500:e.status||500,e.payload||{[taskRoute?'message':'error']:e.message,...(e.sdkError?{sdkError:e.sdkError}:{})});}
  });}
  async static(path,res){
    if(!this.webRoot)throw new HttpError(404,'Frontend assets not installed');
    let file=resolve(this.webRoot,'.'+decodeURIComponent(path));if(file!==this.webRoot&&!file.startsWith(this.webRoot+sep))throw new HttpError(404,'Not found');
    try{if(!(await stat(file)).isFile())file=resolve(this.webRoot,'index.html');}catch{if(extname(file))throw new HttpError(404,'Not found');file=resolve(this.webRoot,'index.html');}
    const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2'};
    res.setHeader('Content-Type',mime[extname(file)]||'application/octet-stream');res.end(await readFile(file));
  }
}
