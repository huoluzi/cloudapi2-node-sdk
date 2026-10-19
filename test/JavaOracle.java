import com.dji.flighthubsdk.FlightHubSDK;
import com.dji.flighthubsdk.bean.*;
import com.dji.flighthubsdk.core.*;
import java.nio.file.*;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

/** Uses only public official Java API; no Node code, JNI internals or mocked SDK. */
public class JavaOracle {
  static Map<String,Object> obj(Object... pairs) {
    Map<String,Object> m=new LinkedHashMap<>(); for(int i=0;i<pairs.length;i+=2)m.put((String)pairs[i],pairs[i+1]);return m;
  }
  static Map<String,Object> error(FlightHubError e) {
    return obj("errorCode",e.getErrorCode().swigValue(),"httpCode",e.getHttpCode(),"serverCode",e.getServerCode(),"deviceCode",e.getDeviceCode(),"serverMessage",e.getServerMessage());
  }
  static Map<String,Object> device(Device d) {
    return obj("deviceSn",d.getDeviceSn(),"deviceClass",d.getDeviceClass(),"deviceName",d.getDeviceName(),"nickname",d.getNickname(),"modelKey",d.getModelKey(),"online",d.isOnline(),"parentSns",d.getParentSns());
  }
  static String json(Object o) {
    if(o==null)return "null";
    if(o instanceof Number || o instanceof Boolean)return o.toString();
    if(o instanceof Map<?,?> m) {List<String> a=new ArrayList<>();m.forEach((k,v)->a.add(json(k.toString())+":"+json(v)));return "{"+String.join(",",a)+"}";}
    if(o instanceof Collection<?> c) {List<String>a=new ArrayList<>();for(Object v:c)a.add(json(v));return "["+String.join(",",a)+"]";}
    StringBuilder s=new StringBuilder("\"");for(char c:o.toString().toCharArray()){if(c=='"'||c=='\\')s.append('\\').append(c);else if(c<32)s.append(String.format("\\u%04x",(int)c));else s.append(c);}return s.append('"').toString();
  }
  public static void main(String[] args) throws Exception {
    Properties p=new Properties();try(var r=Files.newBufferedReader(Path.of(args[0]),StandardCharsets.UTF_8)){p.load(r);}
    Map<String,Object> out=obj("runtime","java","startedAt",System.currentTimeMillis());
    List<Object> locations=Collections.synchronizedList(new ArrayList<>());
    out.put("locations",locations);
    try {
      JniLibraryLoader.loadLibrary();out.put("version",FlightHubSDK.getVersion());
      String key=p.getProperty("AUTH_HEADER_KEY","Authorization"),value=p.getProperty("AUTH_HEADER_VALUE","");
      if(key.isBlank())key="Authorization";
      if(value.isBlank()&&!p.getProperty("TOKEN","").isBlank())value="Bearer "+p.getProperty("TOKEN");
      List<HeaderKeyValue> headers=new ArrayList<>();
      if(!value.isBlank()){headers.add(new HeaderKeyValue("auth_keys",key));headers.add(new HeaderKeyValue(key,value));}
      out.put("httpHeaders",FlightHubSDK.setHttpHeaders(headers).swigValue());
      List<HeaderKeyValue> ws=new ArrayList<>(headers);
      out.put("wsHeaders",FlightHubSDK.setWebSocketAuthHeaders(ws).swigValue());
      FlightHubSdkConfig c=new FlightHubSdkConfig();c.setAddress(p.getProperty("ADDRESS"));c.setPort(p.getProperty("PORT"));c.setNotificationServerAddress(p.getProperty("NOTIFICATION_SERVER"));
      c.setLogLevel("error");c.setLogToConsole(false);c.setShowVersionInfo(false);c.setLogFilePath(".runtime/java-sdk.log");c.setLogMaxFiles(3);
      int init=FlightHubSDK.initialize(c).swigValue();out.put("initialize",init);if(init!=0)throw new IllegalStateException("initialize="+init);
      CountDownLatch listReady=new CountDownLatch(1);AtomicReference<List<DeviceTopo>> list=new AtomicReference<>();
      FlightHubSDK.getWorkspaceInstance().getDeviceManageModule().getDeviceList((items,e)->{list.set(items);out.put("error",error(e));listReady.countDown();});
      if(!listReady.await(35,TimeUnit.SECONDS))throw new IllegalStateException("getDeviceList timeout");
      List<Object> items=new ArrayList<>();for(DeviceTopo t:list.get()){List<Object>sub=new ArrayList<>();for(Device d:t.getSubDevices())sub.add(device(d));items.add(obj("device",device(t.getDevice()),"subDevices",sub));}out.put("devices",items);
      Device drone=list.get().stream().flatMap(t->t.getSubDevices().stream()).filter(d->d.isOnline()&&"drone".equals(d.getDeviceClass())).findFirst().orElseThrow(()->new IllegalStateException("No online drone"));
      Thread.sleep(500); // Public Java API exposes no notification readiness signal.
      out.put("droneSn",drone.getDeviceSn());DroneOsdModule osd=FlightHubSDK.getDroneInstance(drone.getDeviceSn()).getDroneOsdModule();
      int id=osd.listenAircraftLocation(v->locations.add(obj("at",System.currentTimeMillis(),"value",obj("height",v.getHeight(),"elevation",v.getElevation(),"longitude",v.getLongitude(),"latitude",v.getLatitude()))));out.put("listenId",id);
      if(id<0)throw new IllegalStateException("listen="+id);
      Thread.sleep(Long.parseLong(System.getenv().getOrDefault("CLOUDAPI2_OBSERVE_MS","15000")));
      osd.cancelListenAircraftLocation(id);osd.cancelListenAircraftLocation(id);int count=locations.size();Thread.sleep(3000);out.put("callbacksAfterCancel",locations.size()-count);
    } catch(Throwable e){out.put("failure",e.getClass().getSimpleName()+": "+e.getMessage());}
    finally {try{out.put("shutdown",FlightHubSDK.shutdown().swigValue());}catch(Throwable e){out.put("shutdownFailure",e.getClass().getSimpleName());}out.put("finishedAt",System.currentTimeMillis());Files.writeString(Path.of(args[1]),json(out));}
    System.out.println("Java oracle finished; location callbacks="+locations.size()+", failure="+out.containsKey("failure"));
    System.exit(out.containsKey("failure")?1:0);
  }
}
