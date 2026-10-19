// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { readFileSync, writeFileSync, renameSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { randomBytes, scryptSync, timingSafeEqual, createHmac } from 'node:crypto';

export class HttpError extends Error { constructor(status,message){super(message);this.status=status;} }
export class Store {
  constructor(path){this.path=path;try{this.data=JSON.parse(readFileSync(path,'utf8'));}catch(e){if(e.code!=='ENOENT')throw e;this.data={users:[],areas:[],jwtKey:randomBytes(48).toString('base64url')};this.save();}}
  save(){mkdirSync(dirname(this.path),{recursive:true,mode:0o700});const temp=this.path+'.tmp';writeFileSync(temp,JSON.stringify(this.data,null,2),{mode:0o600});renameSync(temp,this.path);}
}
const requireString=(v,name)=>{if(typeof v!=='string'||!v.trim())throw new HttpError(400,`${name} 不能为空`);return v;};
export function hashPassword(password){
  if(typeof password!=='string'||password.length<8||password.length>64)throw new HttpError(400,'密码长度必须为 8–64 位');
  if(!/\p{Lu}/u.test(password)||!/\p{Ll}/u.test(password)||!/\p{Nd}/u.test(password))throw new HttpError(400,'密码必须包含大写字母、小写字母和数字');
  const salt=randomBytes(16).toString('hex');return `${salt}:${scryptSync(password,salt,32).toString('hex')}`;
}
function verify(password,encoded){if(typeof password!=='string'||password.length>256)return false;const [salt,hash]=encoded.split(':');return timingSafeEqual(scryptSync(password,salt,32),Buffer.from(hash,'hex'));}
export function publicUser(u){return {id:u.id,username:u.username,nickname:u.nickname,role:u.role,email:u.email,emailVerified:false,status:u.status,createdAt:u.createdAt};}
export class Auth {
  constructor(store){this.store=store;}
  token(u){const now=Math.floor(Date.now()/1000);const parts=[{alg:'HS256',typ:'JWT'},{sub:String(u.id),username:u.username,role:u.role,ver:u.version,iat:now,exp:now+86400}].map(v=>Buffer.from(JSON.stringify(v)).toString('base64url'));parts.push(createHmac('sha256',this.store.data.jwtKey).update(parts.join('.')).digest('base64url'));return parts.join('.');}
  authenticate(req,url){
    const token=req.headers.authorization?.replace(/^Bearer /,'')||url.searchParams.get('token');if(!token)return null;
    try{const [h,p,s,...extra]=token.split('.');if(extra.length||!h||!p||!s)return null;
      const expected=createHmac('sha256',this.store.data.jwtKey).update(h+'.'+p).digest();const sig=Buffer.from(s,'base64url');
      if(sig.length!==expected.length||!timingSafeEqual(sig,expected))return null;
      const claims=JSON.parse(Buffer.from(p,'base64url'));if(!Number.isFinite(claims.exp)||claims.exp<=Date.now()/1000)return null;
      return this.store.data.users.find(u=>String(u.id)===claims.sub&&u.version===claims.ver&&u.enabled&&u.status==='approved')||null;
    }catch{return null;}
  }
  register(body){
    const users=this.store.data.users;const username=requireString(body.username,'用户名');
    if(username.length<3||username.length>64)throw new HttpError(400,'用户名格式无效');
    if(body.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))throw new HttpError(400,'邮箱格式无效');
    if(users.some(u=>u.username===username))throw new HttpError(400,`用户名 '${username}' 已存在`);
    if(body.email&&users.some(u=>u.email===body.email))throw new HttpError(400,'邮箱已被注册');
    const first=!users.length;const u={id:Math.max(0,...users.map(u=>u.id))+1,username,nickname:body.nickname||null,email:body.email||null,role:first?'admin':'user',status:first?'approved':'pending',enabled:true,version:0,passwordHash:hashPassword(body.password),createdAt:new Date().toISOString()};
    users.push(u);this.store.save();return {token:first?this.token(u):null,user:publicUser(u),message:first?null:'注册成功，请等待管理员审核'};
  }
  login(body){const u=this.store.data.users.find(u=>u.username===body.username);if(!u||!u.enabled||!verify(body.password,u.passwordHash))throw new HttpError(400,'用户名或密码错误');if(u.status!=='approved')throw new HttpError(400,'账号尚未通过审核，请联系管理员');return {token:this.token(u),user:publicUser(u),message:null};}
  changePassword(u,body){if(!verify(body.oldPassword,u.passwordHash))throw new HttpError(400,'旧密码错误');if(body.oldPassword===body.newPassword)throw new HttpError(400,'新密码不能与旧密码相同');u.passwordHash=hashPassword(body.newPassword);u.version++;this.store.save();return {success:true};}
  update(actor,id,action,body){
    if(actor.role!=='admin')throw new HttpError(403,'需要管理员权限');
    const users=this.store.data.users,u=users.find(u=>u.id===id);if(!u)throw new HttpError(400,'用户不存在');
    if((action==='delete'||action==='role'&&body.role!=='admin'||action==='enabled'&&!body.enabled||action==='reject')&&u.role==='admin'&&users.filter(v=>v.role==='admin'&&v.enabled&&v.status==='approved').length<=1)throw new HttpError(400,'无法操作：系统至少需要保留一个管理员');
    if(action==='role'){if(!['user','admin'].includes(body.role))throw new HttpError(400,'无效角色');u.role=body.role;}
    else if(action==='enabled'){if(typeof body.enabled!=='boolean')throw new HttpError(400,'缺少 enabled 字段');u.enabled=body.enabled;}
    else if(action==='approve')u.status='approved';
    else if(action==='reject')u.status='rejected';
    else if(action==='reset-password')u.passwordHash=hashPassword(body.password);
    else if(action==='delete'){if(actor.id===id)throw new HttpError(400,'不能删除自己');this.store.data.users=users.filter(v=>v!==u);}
    else throw new HttpError(404,'Not found');
    u.version++;this.store.save();return {success:true};
  }
}
