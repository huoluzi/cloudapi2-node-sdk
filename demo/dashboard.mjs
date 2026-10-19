// Copyright (c) 2026 SZ DJI Technology Co., Ltd.
// SPDX-License-Identifier: Apache-2.0
// Modified for the independent Node.js binding in 2026; see NOTICE.
import { epoch } from './business.mjs';
const date=value=>new Intl.DateTimeFormat('en-CA',{timeZone:process.env.TZ||'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(value));
const round=n=>Math.round(n*100)/100;
// java.util.Random sequence, retained only for the official demo's explicitly marked mock report trend.
function mockTrend(seed,n){let state=(BigInt(seed)^0x5DEECE66Dn)&((1n<<48n)-1n);const next=()=>{state=(state*0x5DEECE66Dn+11n)&((1n<<48n)-1n);return Number(state>>17n);};return Array.from({length:n},()=>{let bits,val;do{bits=next();val=bits%45;}while(bits-val+44>2147483647);return val+5;});}
export function registerDashboard(router,{business:b,kernel,store}){
 router.add('GET','/api/v1/dashboard/stats',async c=>{
   const range=c.url.searchParams.get('range')||'month',days={week:7,recent_week:7,month:30,recent_month:30,half_year:180,year:365}[range]||30;
   const devices=await kernel.list();
   const [tasks,w,m,t]=await Promise.all([b.allTasks().catch(()=>[]),b.call('WaylineManageModule','getWaylineList',{page:1,pageSize:1}).catch(()=>null),b.call('MediaServiceModule','getMediaFilesList',{startIndex:0,pageSize:1}).catch(()=>null),b.call('TerraBuildModule','getModelFileList',1,1).catch(()=>null)]);
   const dock=devices.filter(d=>d.deviceType==='DOCK'),drone=devices.filter(d=>d.deviceType==='DRONE');
   const daily=new Map(Array.from({length:days},(_,i)=>{const key=date(Date.now()-(days-i-1)*86400000);return [key,{date:key,planned:0,manual:0,success:0,suspended:0,failed:0,count:0,seconds:0,meters:0}];}));
   for(const task of tasks){const item=daily.get(date(epoch(task.createdAt)*1000));if(!item)continue;
     item[task.taskType===2?'planned':'manual']++;
     if(task.status===5){item.success++;item.count++;item.seconds+=Math.max(0,epoch(task.endAt)-epoch(task.beginAt));try{const r=await b.call('FlightTaskModule','getFlightTaskTrack',{taskUuid:task.uuid});item.meters+=r.track?.flightDistance||0;}catch{}}
     else if([3,4,6].includes(task.status))item.suspended++;else if([1,7,8].includes(task.status))item.failed++;
   }
   const values=[...daily.values()],sum=k=>values.reduce((s,v)=>s+v[k],0);
   return {docks:{total:dock.length,idle:dock.filter(d=>d.online).length,working:0,debugging:0,offline:dock.filter(d=>!d.online).length},drones:{total:drone.length,online:drone.filter(d=>d.online).length,offline:drone.filter(d=>!d.online).length},relays:{total:10,online:0,offline:10,_mock:true},counts:{waylines:w?.pagination?.total||0,personnel:{value:store.data.users.length,_mock:store.data.users.length===0}},dataResults:{media:{total:m?.total||0,trend:[]},models:{total:t?.total||0,trend:[]},reports:{total:15,trend:mockTrend(Math.floor(Date.parse(date(Date.now()))/86400000),Math.min(days,7)),_mock:true}},tasks:{daily:values.map(({date,planned,manual})=>({date,planned,manual}))},execution:{daily:values.map(({date,success,suspended,failed})=>({date,success,suspended,failed}))},flight:{count:sum('count'),durationMinutes:round(sum('seconds')/60),distanceKm:{value:round(sum('meters')/1000),_mock:false},daily:values.map(v=>({date:v.date,count:v.count,minutes:round(v.seconds/60),km:round(v.meters/1000)}))},devices:devices.filter(d=>d.online).map(d=>({sn:d.sn,type:d.deviceType==='DOCK'?'dock':'drone',name:d.name,status:'online',lat:d.lastOsd?.attributes?.lat||0,lng:d.lastOsd?.attributes?.lng||0}))};
 });
}
