import com.dji.flighthubsdk.FlightHubSDK;
import com.dji.flighthubsdk.bean.*;
import com.dji.flighthubsdk.core.JniLibraryLoader;
import java.nio.file.*;import java.util.*;
public class JavaRootOracle {
 public static void main(String[] args)throws Exception{
  JniLibraryLoader.loadLibrary();Map<String,Object> r=new LinkedHashMap<>();
  r.put("isInitialized.before",FlightHubSDK.isInitialized());r.put("shutdown.before",FlightHubSDK.shutdown().swigValue());
  r.put("getVersion",FlightHubSDK.getVersion());r.put("getBuildInfo",FlightHubSDK.getBuildInfo());
  var headers=List.of(new HeaderKeyValue("X-Fixture","one"),new HeaderKeyValue("X-Fixture","two"));
  r.put("setHttpHeaders",FlightHubSDK.setHttpHeaders(headers).swigValue());r.put("setWebSocketAuthHeaders",FlightHubSDK.setWebSocketAuthHeaders(headers).swigValue());
  r.put("getHttpHeaders",JavaDtoOracle.snapshot(FlightHubSDK.getHttpHeaders(),false,0));r.put("getWebSocketAuthHeaders",JavaDtoOracle.snapshot(FlightHubSDK.getWebSocketAuthHeaders(),false,0));
  FlightHubSdkConfig c=new FlightHubSdkConfig();c.setAddress("http://127.0.0.1");c.setPort("9");c.setNotificationServerAddress("ws://127.0.0.1:9");c.setLogToConsole(false);c.setShowVersionInfo(false);c.setLogLevel("error");c.setLogFilePath(".runtime/root-sdk.log");
  r.put("initialize.config",FlightHubSDK.initialize(c).swigValue());r.put("initialize.default",FlightHubSDK.initialize().swigValue());r.put("isInitialized.after",FlightHubSDK.isInitialized());r.put("setLogLevel",FlightHubSDK.setLogLevel("error").swigValue());
  r.put("getConfig",JavaDtoOracle.snapshot(FlightHubSDK.getConfig(),false,0));
  r.put("getWorkspaceInstance",FlightHubSDK.getWorkspaceInstance()!=null);r.put("getDroneInstance",FlightHubSDK.getDroneInstance("FIXTURE-SN")!=null);r.put("getDockInstance",FlightHubSDK.getDockInstance("FIXTURE-SN")!=null);
  r.put("getBaseStationInstance",FlightHubSDK.getBaseStationInstance("FIXTURE-SN")!=null);r.put("getRemoteControllerInstance",FlightHubSDK.getRemoteControllerInstance("FIXTURE-SN")!=null);r.put("getRelayInstance",FlightHubSDK.getRelayInstance("FIXTURE-SN")!=null);r.put("getStream",FlightHubSDK.getStream()!=null);
  var sei=FlightHubSDK.getStream().getCustomSEIModule();
  var encoded=sei.customSEIEncode(List.of(0,0,0,1,101,136,132),List.of(SeiItem.ofCustomData(new SeiData(List.of(0,127,128,255)))));
  r.put("sei.encoded",encoded);r.put("sei.decoded",JavaDtoOracle.snapshot(sei.customSEIDecode(encoded),false,0));r.put("sei.invalid",JavaDtoOracle.snapshot(sei.customSEIDecode(List.of()),false,0));
  Thread.sleep(1500);r.put("shutdown",FlightHubSDK.shutdown().swigValue());r.put("isInitialized.shutdown",FlightHubSDK.isInitialized());
  Files.writeString(Path.of("audit/server-java-root.json"),JavaOracle.json(r));System.exit(0);
 }
}
