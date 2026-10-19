import {readFileSync,writeFileSync} from 'node:fs';
import {isDeepStrictEqual} from 'node:util';
import {toJava} from '../dist/dto-compat.js';
const oracle=JSON.parse(readFileSync('audit/server-java-dto-oracle.json'));
const norm=v=>JSON.parse(JSON.stringify(v,(_,v)=>typeof v==='bigint'?Number(v):v));
const results=Object.entries(oracle.results).map(([type,c])=>{
 try{const node=norm(toJava(type,c.native));return isDeepStrictEqual(node,c.java)?{type,status:'passed'}:{type,status:'different',node,java:c.java};}catch(e){return {type,status:'failed',failure:e.message};}
});
const report={scope:'Official Java native-to-Bean converters, populated DTO inputs',total:results.length,passed:results.filter(v=>v.status==='passed').length,oracleFailures:oracle.failures,results};
writeFileSync('audit/server-dto-compatibility.json',JSON.stringify(report,null,2));console.log(JSON.stringify({total:report.total,passed:report.passed,oracleFailures:oracle.failures.length}));if(report.total!==report.passed||oracle.failures.length)process.exitCode=1;
