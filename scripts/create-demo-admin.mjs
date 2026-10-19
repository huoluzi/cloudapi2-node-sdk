import {createInterface} from 'node:readline/promises';
import {Writable} from 'node:stream';
import {resolve,join} from 'node:path';
import {Store,Auth} from '../demo/store.mjs';
if(!process.stdin.isTTY)throw Error('Administrator bootstrap requires an interactive terminal');
const store=new Store(join(resolve(process.env.NODE_DEMO_RUNTIME||'.runtime/demo'),'store.json'));
if(store.data.users.length)throw Error('Users already exist; bootstrap cannot replace existing accounts');
let muted=false;
const output=new Writable({write(chunk,_encoding,done){if(!muted)process.stdout.write(chunk);done();}});
const terminal=createInterface({input:process.stdin,output,terminal:true});
try {
 const username=await terminal.question('Administrator username: ');
 process.stdout.write('Password (hidden): ');muted=true;
 const password=await terminal.question('');muted=false;process.stdout.write('\n');
 process.stdout.write('Confirm password (hidden): ');muted=true;
 const confirm=await terminal.question('');muted=false;process.stdout.write('\n');
 if(password!==confirm)throw Error('Passwords do not match');
 new Auth(store).register({username,password});console.log('Administrator created.');
} finally {terminal.close();}
