"""Loopback protocol peer, not a replacement SDK. Both official cores parse these bytes."""
from http.server import ThreadingHTTPServer, BaseHTTPRequestHandler
import base64, hashlib, json, struct, threading, time, pathlib, uuid, os, socket
request_lock=threading.Lock()
connection_lock=threading.Lock()
connections=set()
faults={'http_error':False}

class Handler(BaseHTTPRequestHandler):
 protocol_version='HTTP/1.1'
 def log_message(self,*args): pass
 def business(self):
  if not (self.path.startswith('/gateway/atc/api/v1/flight-tasks') or self.path.startswith('/gateway/pf-media/api/v1/media-files/url')):return False
  size=int(self.headers.get('Content-Length','0'));body=self.rfile.read(size) if size else b''
  record={'runtime':self.headers.get('X-Test-Runtime'),'method':self.command,'path':self.path,'body':json.loads(body) if body else None}
  with request_lock:
   with open('.runtime/business-requests.jsonl','a') as log:log.write(json.dumps(record)+'\n')
  data={'uuid':'fixture-task','wayline_validity_check_codes':[], 'url':'http://fixture.invalid/file','list':[{'object_key':'object-a','url':'http://fixture.invalid/a'}]}
  response={'code':222001 if 'file_id=999' in self.path else 0,'message':'fixture error' if 'file_id=999' in self.path else 'success','data':data}
  payload=json.dumps(response).encode();self.send_response(200);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(payload)));self.end_headers();self.wfile.write(payload);return True
 def do_POST(self):
  if self.path=='/__control/disconnect':
   with connection_lock: active=list(connections)
   for connection in active:
    try: connection.shutdown(socket.SHUT_RDWR)
    except OSError: pass
   return self.control_response({'disconnected':len(active)})
  if self.path in ('/__control/http-error','/__control/http-ok'):
   faults['http_error']=self.path.endswith('http-error')
   return self.control_response({'ok':True})
  if not self.business():self.send_error(404)
 def control_response(self,value):
  payload=json.dumps(value).encode();self.send_response(200);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(payload)));self.end_headers();self.wfile.write(payload)
 def do_PUT(self):
  if not self.business():self.send_error(404)
 def do_DELETE(self):
  if not self.business():self.send_error(404)
 def do_GET(self):
  if self.path=='/__control/status':
   with connection_lock: count=len(connections)
   return self.control_response({'connections':count})
  if self.headers.get('Upgrade','').lower()=='websocket': return self.websocket()
  if faults['http_error']:
   self.send_error(503,'fixture temporary failure');return
  if self.path.split('?',1)[0] in ('/gateway/pf-wayline/api/v1/list','/gateway/pf-media/api/v1/media-files/list','/gateway/atc/api/v1/flight-tasks'):
   return self.control_response({'code':0,'message':'success','data':{'list':[],'pagination':{'page':1,'page_num':1,'page_size':20,'total':0},'page_size':20,'next_index':-1,'total':0}})
  if self.business():return
  topo={'device_sn':'NODE-TEST-DOCK','nickname':'机场 Demo','online_status':True,'model_info':{'model_key':'test-dock','name':'Test Dock','class':'dock'},'sub_devices':[{'device_sn':'NODE-TEST-DRONE','nickname':'飞行器 Demo','online_status':True,'model_info':{'model_key':'test-drone','name':'Test Drone','class':'drone'},'parent_sns':['NODE-TEST-DOCK']}]}
  data={'code':0,'message':'success','data':{'pagination':{'page_num':1,'page_size':20,'total':1},'list':[topo]}}
  if 'topologies' not in self.path:data={'code':404,'message':'fixture endpoint not provided','data':{}}
  body=json.dumps(data).encode();self.send_response(200);self.send_header('Content-Type','application/json');self.send_header('Content-Length',str(len(body)));self.end_headers();self.wfile.write(body)
 def websocket(self):
  with connection_lock: connections.add(self.connection)
  accept=base64.b64encode(hashlib.sha1((self.headers['Sec-WebSocket-Key']+'258EAFA5-E914-47DA-95CA-C5AB0DC85B11').encode()).digest()).decode()
  self.send_response(101);self.send_header('Upgrade','websocket');self.send_header('Connection','Upgrade');self.send_header('Sec-WebSocket-Accept',accept);self.send_header('Sec-WebSocket-Protocol','v1.notify');self.end_headers()
  lock=threading.Lock();done=threading.Event();subs={}
  def send(data,opcode=1):
   body=json.dumps(data).encode() if opcode==1 else data
   size=len(body);header=bytes([0x80|opcode,size]) if size<126 else bytes([0x80|opcode,126])+struct.pack('!H',size)
   try:
    with lock:self.connection.sendall(header+body)
   except OSError:done.set()
  def produce():
   index=0
   while not done.wait(float(os.environ.get('FIXTURE_INTERVAL','.2'))):
    for topic,ident in list(subs.items()):
     if topic!='topic_drone_location':continue
     # Consecutive duplicates exercise official notifyIfChanged filtering.
     n=(index//2)%10
     send({'message_type':'publish','message_id':str(uuid.uuid4()),'timestamp':int(time.time()*1000),'need_replay':False,'version':'1','device_sn':'NODE-TEST-DRONE','message_topic':topic,'subscribe_id':ident,'message_data':{'height':123.5+n,'elevation':12.25+n,'longitude':113.123456+n/100000,'latitude':22.654321+n/100000}})
    index+=1
  threading.Thread(target=produce,daemon=True).start()
  try:
   while not done.is_set():
    h=self.rfile.read(2)
    if len(h)!=2:break
    opcode=h[0]&15;size=h[1]&127;masked=h[1]&128
    if size==126:size=struct.unpack('!H',self.rfile.read(2))[0]
    if size==127:size=struct.unpack('!Q',self.rfile.read(8))[0]
    if size>1048576:break
    mask=self.rfile.read(4) if masked else None;body=self.rfile.read(size)
    if mask:body=bytes(b^mask[i%4] for i,b in enumerate(body))
    if opcode==8:break
    if opcode==9:send(body,10);continue
    if opcode!=1:continue
    msg=json.loads(body);kind=msg.get('message_type');data=msg.get('message_data',{})
    print(json.dumps({'kind':kind,'data':data})[:600],flush=True)
    if kind in ('subscribe','unsubscribe'):
     topic=data.get('topic','');ident=data.get('subscribe_id','')
     if kind=='subscribe':subs[topic]=ident
     else:subs.pop(topic,None)
     send({**msg,'message_data':{'code':0,'message':'ok','subscribe_id':ident}})
    elif kind=='ping':send({**msg,'message_type':'pong'})
  except (OSError,ValueError,KeyError):pass
  finally:
   done.set();self.close_connection=True
   with connection_lock: connections.discard(self.connection)

if __name__=='__main__':
 pathlib.Path('.runtime').mkdir(exist_ok=True)
 server=ThreadingHTTPServer(('127.0.0.1',0),Handler);port=server.server_port
 cfg={'ADDRESS':'http://127.0.0.1','PORT':str(port),'NOTIFICATION_SERVER':f'ws://127.0.0.1:{port}/notifications','AUTH_HEADER_KEY':'','AUTH_HEADER_VALUE':'','TOKEN':''}
 pathlib.Path('.runtime/fixture-config.json').write_text(json.dumps(cfg))
 pathlib.Path('.runtime/fixture-config.properties').write_text('\n'.join(k+'='+v for k,v in cfg.items()))
 print('protocol fixture ready',flush=True);server.serve_forever()
