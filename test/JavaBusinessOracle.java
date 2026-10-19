import com.dji.flighthubsdk.FlightHubSDK;
import com.dji.flighthubsdk.bean.*;
import com.dji.flighthubsdk.core.*;
import java.nio.file.*;import java.nio.charset.StandardCharsets;import java.util.*;import java.util.concurrent.*;
public class JavaBusinessOracle {
 static Object result(FlightHubError e,Object v){return JavaOracle.obj("error",JavaOracle.error(e),"result",v);}
 public static void main(String[] args)throws Exception{
  Properties p=new Properties();try(var r=Files.newBufferedReader(Path.of(".runtime/fixture-config.properties"),StandardCharsets.UTF_8)){p.load(r);}
  if(!p.getProperty("ADDRESS").equals("http://127.0.0.1"))throw new IllegalStateException("Commands must only target local fixture");
  JniLibraryLoader.loadLibrary();FlightHubSDK.setHttpHeaders(List.of(new HeaderKeyValue("X-Test-Runtime","java")));
  FlightHubSdkConfig c=new FlightHubSdkConfig();c.setAddress(p.getProperty("ADDRESS"));c.setPort(p.getProperty("PORT"));c.setNotificationServerAddress(p.getProperty("NOTIFICATION_SERVER"));c.setLogLevel("error");c.setLogToConsole(false);c.setShowVersionInfo(false);c.setLogFilePath(".runtime/java-business-sdk.log");
  if(FlightHubSDK.initialize(c).swigValue()!=0)throw new IllegalStateException("initialize failed");
  Map<String,Object> out=new LinkedHashMap<>();var media=FlightHubSDK.getWorkspaceInstance().getMediaServiceModule();var tasks=FlightHubSDK.getWorkspaceInstance().getFlightTaskModule();
  try{
   var a=new CompletableFuture<Object>();media.getMediaFilesDownloadURL(42L,(e,r)->a.complete(result(e,JavaOracle.obj("url",r.getUrl()))));out.put("scalarDownload",a.get(10,TimeUnit.SECONDS));
   var b=new CompletableFuture<Object>();media.getMediaFilesDownloadURL(List.of("object-a"),(e,r)->{List<Object> items=new ArrayList<>();for(var i:r.getList())items.add(JavaOracle.obj("objectKey",i.getObjectKey(),"url",i.getUrl()));b.complete(result(e,JavaOracle.obj("list",items)));});out.put("arrayDownload",b.get(10,TimeUnit.SECONDS));
   var err=new CompletableFuture<Object>();media.getMediaFilesDownloadURL(999L,(e,r)->err.complete(result(e,JavaOracle.obj("url",r.getUrl()))));out.put("businessError",err.get(10,TimeUnit.SECONDS));
   CreateTaskReq req=new CreateTaskReq();req.setName("Node Java 对照");req.setSn("FIXTURE-DOCK");req.setTaskType(3);req.setWaylineUuid("FIXTURE-WAYLINE");req.setRthAltitude(110);req.setTimeZone("Asia/Shanghai");req.setOutOfControlActionInFlight(1);req.setBeginAt(1800000000L);req.setEndAt(1800000600L);req.setMinBatteryCapacity(50);
   var create=new CompletableFuture<Object>();tasks.createFlightTask(req,(e,r)->create.complete(result(e,JavaOracle.obj("uuid",r.getUuid(),"waylineValidityCheckCodes",r.getWaylineValidityCheckCodes()))));out.put("createTask",create.get(10,TimeUnit.SECONDS));
   var pause=new CompletableFuture<Object>();tasks.updateFlightTaskStatus("fixture-task",6,e->pause.complete(result(e,null)));out.put("pauseTask",pause.get(10,TimeUnit.SECONDS));
   var delete=new CompletableFuture<Object>();tasks.deleteFlightTask("fixture-task",e->delete.complete(result(e,null)));out.put("deleteTask",delete.get(10,TimeUnit.SECONDS));
  }finally{
   // The unmodified 3.3.7 Java core crashes if shutdown races its beacon HTTP
   // completion. Allow this reference process to settle; Node is tested without
   // this delay against its explicit private executor teardown patch.
   Thread.sleep(1500);FlightHubSDK.shutdown();
  }
  Files.writeString(Path.of("audit/server-java-business.json"),JavaOracle.json(out));System.exit(0);
 }
}
