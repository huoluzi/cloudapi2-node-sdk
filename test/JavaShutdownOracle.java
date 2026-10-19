import com.dji.flighthubsdk.FlightHubSDK;
import com.dji.flighthubsdk.bean.FlightHubSdkConfig;
import com.dji.flighthubsdk.core.JniLibraryLoader;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;
public class JavaShutdownOracle {
  public static void main(String[] args) throws Exception {
    Properties p=new Properties();try(var r=Files.newBufferedReader(Path.of(".runtime/fixture-config.properties"))){p.load(r);}
    if(!"http://127.0.0.1".equals(p.getProperty("ADDRESS")))throw new IllegalStateException("Loopback only");
    JniLibraryLoader.loadLibrary();
    for(int i=0;i<30;i++){
      FlightHubSdkConfig c=new FlightHubSdkConfig();c.setAddress(p.getProperty("ADDRESS"));c.setPort(p.getProperty("PORT"));c.setNotificationServerAddress(p.getProperty("NOTIFICATION_SERVER"));c.setLogLevel("error");c.setLogToConsole(false);c.setShowVersionInfo(false);c.setLogFilePath(".runtime/java-shutdown.log");
      if(FlightHubSDK.initialize(c).swigValue()!=0)throw new IllegalStateException("initialize failed");
      var module=FlightHubSDK.getWorkspaceInstance().getDeviceManageModule();
      CountDownLatch first=new CountDownLatch(1);module.getDeviceList((d,e)->first.countDown());
      if(!first.await(15,TimeUnit.SECONDS))throw new IllegalStateException("query timeout");
      for(int n=0;n<10;n++)module.getDeviceList((d,e)->{});
      FlightHubSDK.shutdown();System.out.println("shutdown-cycle="+i);
    }
    System.out.println("Java shutdown oracle completed");
  }
}
