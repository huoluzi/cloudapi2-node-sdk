import com.dji.flighthubsdk.core.JniLibraryLoader;
import java.lang.reflect.*;
import java.nio.file.*;
import java.util.*;
import java.util.concurrent.*;

/** Official public Java wrappers with test interfaces at the native boundary. No device commands. */
public class JavaApiOracle {
 static Map<String,Object> current;
 static List<Object> calls;
 static Object callbackValues;
 static CountDownLatch delivered;
 public static void record(String type,String method,Object[] args){try{List<Object> out=new ArrayList<>();for(Object arg:args)out.add(JavaDtoOracle.snapshot(arg,true,0));calls.add(JavaOracle.obj("type",type,"method",method,"args",out));}catch(Exception e){throw new RuntimeException(e);}}
 public static void respond(Object callback){
  if(callback==null)return;
  try{
   Method method=Arrays.stream(callback.getClass().getMethods()).filter(m->m.getName().startsWith("on")&&!Modifier.isStatic(m.getModifiers())).findFirst().orElseThrow();method.setAccessible(true);
   Object[] args=new Object[method.getParameterCount()];List<Object> nativeValues=new ArrayList<>();
   for(int i=0;i<args.length;i++){JavaDtoOracle.sequence=100;args[i]=JavaDtoOracle.value(method.getParameterTypes()[i],0);
    if(current.get("module").equals("DrcModule")&&List.of("connectDrcLink","disconnectDrcLink").contains(current.get("method")))args[i]=com.dji.flighthubsdk.generated.FlightHubError.from_sdk(com.dji.flighthubsdk.generated.FlightHubSdkErrorCode.SUCCESS);
    nativeValues.add(JavaDtoOracle.snapshot(args[i],true,0));}
   current.put("nativeCallback",nativeValues);method.invoke(callback,args);
  }catch(Throwable e){current.put("callbackFailure",e.toString());}
 }
 static Object sample(Type generic,int depth)throws Exception{
  if(depth>7)return null;
  if(generic instanceof ParameterizedType p){
   if(p.getRawType()==List.class||p.getRawType()==Collection.class)return JavaDtoOracle.edge?new ArrayList<>():new ArrayList<>(Collections.singletonList(sample(p.getActualTypeArguments()[0],depth+1)));
   if(p.getRawType()==Map.class)return JavaDtoOracle.edge?Map.of():Map.of("fixture",sample(p.getActualTypeArguments()[1],depth+1));
   generic=p.getRawType();
  }
  if(!(generic instanceof Class<?> c))return null;
  if(c.isInterface())return Proxy.newProxyInstance(c.getClassLoader(),new Class<?>[]{c},(proxy,method,args)->{
   if(method.getDeclaringClass()==Object.class){if(method.getName().equals("toString"))return "fixture callback";if(method.getName().equals("hashCode"))return 1;return proxy==args[0];}
   List<Object> values=new ArrayList<>();if(args!=null)for(Object arg:args)values.add(JavaDtoOracle.snapshot(arg,false,0));callbackValues=values;delivered.countDown();return null;
  });
  if(c==String.class)return JavaDtoOracle.edge?"":"fixture-value";
  if(c.isPrimitive()||Number.class.isAssignableFrom(c)||c==Boolean.class)return JavaDtoOracle.value(c,depth);
  if(c.isArray()){Object out=Array.newInstance(c.getComponentType(),2);for(int i=0;i<2;i++)Array.set(out,i,sample(c.getComponentType(),depth+1));return out;}
  if(c.isEnum())return c.getEnumConstants()[0];
  if(c.getName().startsWith(JavaDtoOracle.N))return JavaDtoOracle.value(c,depth);
  Object out=c.getConstructor().newInstance();
  for(Field field:c.getDeclaredFields())if(!Modifier.isStatic(field.getModifiers())&&!field.isSynthetic()){
   field.setAccessible(true);Object value=sample(field.getGenericType(),depth+1);if(value!=null)field.set(out,value);
  }
  return out;
 }
 public static void main(String[] args)throws Exception{
  JniLibraryLoader.loadLibrary();JavaDtoOracle.edge=args.length>0&&args[0].equals("edge");List<Object> results=new ArrayList<>();
  List<String> modules=Files.readAllLines(Path.of("test/generated/java-modules.txt"));
  for(String nativeName:modules){String name=nativeName.equals("AIAlertModule")?"AiAlertModule":nativeName;Class<?> cls=Class.forName("com.dji.flighthubsdk.core."+name);
   for(Method method:cls.getDeclaredMethods()){
    if(!Modifier.isPublic(method.getModifiers())||Modifier.isStatic(method.getModifiers()))continue;
    current=JavaOracle.obj("module",nativeName,"method",method.getName(),"parameterTypes",Arrays.stream(method.getParameterTypes()).map(Class::getSimpleName).toList());calls=new ArrayList<>();current.put("calls",calls);callbackValues=null;delivered=new CountDownLatch(1);
    try{
     Object nativeModule=Class.forName("Probe"+nativeName).getConstructor().newInstance();
     Constructor<?> ctor=Arrays.stream(cls.getConstructors()).filter(c->Arrays.stream(c.getParameterTypes()).anyMatch(t->t.isInstance(nativeModule))).findFirst().orElseThrow();
     Object[] ctorArgs=Arrays.stream(ctor.getParameterTypes()).map(t->t.isInstance(nativeModule)?nativeModule:t==String.class?"FIXTURE-SN":null).toArray();Object module=ctor.newInstance(ctorArgs);
     Object[] parameters=new Object[method.getParameterCount()];List<Object> inputs=new ArrayList<>();boolean callback=false;
     for(int i=0;i<parameters.length;i++){JavaDtoOracle.sequence=100;parameters[i]=sample(method.getGenericParameterTypes()[i],0);if(method.getParameterTypes()[i].isInterface()&&!Collection.class.isAssignableFrom(method.getParameterTypes()[i])&&!Map.class.isAssignableFrom(method.getParameterTypes()[i])){callback=true;inputs.add("<callback>");}else inputs.add(JavaDtoOracle.snapshot(parameters[i],false,0));}
     current.put("inputs",inputs);Object result=method.invoke(module,parameters);
     if(callback&&current.containsKey("nativeCallback"))delivered.await(2,TimeUnit.SECONDS);
     if(callbackValues!=null)current.put("callback",callbackValues);
     if(result!=null&&result.getClass().getName().startsWith("com.dji.flighthubsdk.core.")&&!result.getClass().getSimpleName().equals("CustomSEIDecodeResult"))current.put("returnModule",result.getClass().getSimpleName());
     else if(result!=null&&result.getClass().getName().startsWith("Probe"))current.put("returnModule",nativeName);
     else if(result!=null)current.put("return",JavaDtoOracle.snapshot(result,false,0));
    }catch(Throwable error){Throwable cause=error instanceof InvocationTargetException?error.getCause():error;current.put("failure",cause.toString());}
    results.add(current);
   }
  }
  Files.writeString(Path.of("audit/server-java-api-"+(JavaDtoOracle.edge?"edge-":"")+"oracle.json"),JavaOracle.json(results));
  System.out.println("Official Java public wrapper cases: "+results.size()+", invocation failures: "+results.stream().filter(v->((Map<?,?>)v).containsKey("failure")).count());
  System.exit(0);
 }
}
