import {readFileSync,readdirSync} from 'node:fs';
import {resolve,join} from 'node:path';
export const sdk=resolve(process.env.CLOUDAPI2_SDK_ROOT||'../official-demo/sdk');
export const api=join(sdk,'src/api');
export function clean(s){return s.replace(/"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\/\/[^\n]*|\/\*[\s\S]*?\*\//g,m=>m.startsWith('/')?m.replace(/[^\n]/g,' '):m);}
export function endBrace(s,start){let d=1;for(let i=start+1;i<s.length;i++){if(s[i]==='{')d++;if(s[i]==='}'&&!--d)return i;}throw Error('Unclosed brace');}
export function split(s){let d=0,p=0,b=0,start=0,out=[];for(let i=0;i<s.length;i++){if(s[i]==='<')d++;if(s[i]==='>')d--;if(s[i]==='(')p++;if(s[i]===')')p--;if(s[i]==='{')b++;if(s[i]==='}')b--;if(s[i]===','&&!d&&!p&&!b){out.push(s.slice(start,i).trim());start=i+1;}}if(s.slice(start).trim())out.push(s.slice(start).trim());return out;}
export const normalize=s=>s.replace(/\bconst\b/g,'').replace(/[&]/g,'').replace(/\s+/g,' ').replace(/\s*([<>])\s*/g,'$1').trim();
export function typed(s){s=s.trim().split('=')[0].trim();const m=/^([\s\S]+?[>&\s*])([a-zA-Z_]\w*)$/.exec(s);if(m&&!['long','int','char','double'].includes(m[2]))return {type:normalize(m[1]),name:m[2],output:/&/.test(m[1])&&!/\bconst\b/.test(m[1])};return {type:normalize(s)};}
export const camel=s=>s.replace(/_([a-z0-9])/g,(_,c)=>c.toUpperCase());
export const enums=new Set(), structs=new Map(), interfaces=new Map(), headers=[];
for(const file of readdirSync(api).filter(f=>f.endsWith('.h'))){
 const s=clean(readFileSync(join(api,file),'utf8'));headers.push(file);
 for(const m of s.matchAll(/enum\s+(?:class\s+)?(\w+)/g))enums.add(m[1]);
 for(const m of s.matchAll(/\b(?:struct|class)\s+(\w+)\s*(?:\:\s*[^{};]+)?\{/g)){
  if(enums.has(m[1]))continue;
  const start=m.index+m[0].length-1,end=endBrace(s,start),body=s.slice(start+1,end);
  if(body.includes('virtual ')){
   const methods=[];
   for(const v of body.matchAll(/virtual\s+([^;]+?)\s*=\s*0\s*;/g)){
    const sig=/^(.*?)\s+(\w+)\s*\(([\s\S]*)\)\s*(?:const)?\s*$/.exec(v[1].trim());if(!sig)throw Error(v[1]);
    const [,ret,name,params]=sig,args=split(params).map(typed);let cb=null;
    if(args.length&&args.at(-1).type.includes('std::function')){
     const type=args.pop().type,inner=/std::function<void\(([\s\S]*)\)>/.exec(type);if(!inner)throw Error(type);
     cb=split(inner[1]).map(typed).map(x=>x.type);
    }
    methods.push({name,args,cb,ret:normalize(ret),declaration:v[1].trim()});
   }
   if(methods.length)interfaces.set(m[1],{cppName:m[1],name:m[1].slice(1),file,methods});
   continue;
  }
  let fields=[],buffer='',access='public';
  for(let i=0;i<body.length;i++){
   if(body[i]==='{'){const e=endBrace(body,i);if(buffer.includes('(')||/\b(class|struct|enum)\b/.test(buffer))buffer='';else buffer+='{}';i=e;continue;}
   buffer+=body[i];const a=/^\s*(public|private|protected)\s*:$/.exec(buffer);if(a){access=a[1];buffer='';continue;}
   if(body[i]!==';')continue;
   let field=buffer.slice(0,-1).trim();buffer='';field=field.split('=')[0].replace(/\{\}$/,'').trim();
   if(access!=='public'||!field||field.includes('(')||/\b(static|using|typedef|friend|virtual)\b/.test(field))continue;
   const f=typed(field);if(f.name)fields.push(f);
  }
  structs.set(m[1],{fields,file});
 }
}
export const primitives=new Set(['void','bool','int','unsigned int','unsigned','short','unsigned short','long','long long','unsigned long','unsigned long long','size_t','int64_t','uint64_t','uint32_t','int32_t','uint16_t','int16_t','uint8_t','int8_t','float','double','std::string']);
export const needed=new Set();
export function requireType(t){
 if(t.endsWith('*'))return requireType(t.slice(0,-1));
 if(primitives.has(t)||enums.has(t))return;
 if(/^std::(?:vector|map|unordered_map|optional|shared_ptr)</.test(t)){for(const inner of split(t.slice(t.indexOf('<')+1,-1)))requireType(inner);return;}
 if(interfaces.has(t)||needed.has(t))return;
 const def=structs.get(t);if(!def)throw Error('Unsupported DTO type: '+t);
 needed.add(t);for(const f of def.fields)requireType(f.type);
}
