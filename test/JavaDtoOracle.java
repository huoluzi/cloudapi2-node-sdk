import com.dji.flighthubsdk.core.JniLibraryLoader;
import com.dji.flighthubsdk.internal.convert.FlightHubSdkConvert;
import java.lang.reflect.*;
import java.util.*;
import java.nio.file.*;

/** Executes the shipped Java converter implementation with constructed native DTOs. */
public class JavaDtoOracle {
 static final String N="com.dji.flighthubsdk.generated.";
 static final List<Object> retained=new ArrayList<>();
 static int sequence=100;
 static boolean edge=false;
 static Object value(Class<?> c,int depth) throws Exception {
  if(edge){
   if(c==String.class)return "";
   if(c==boolean.class||c==Boolean.class)return false;
   if(c==int.class||c==Integer.class)return 0;
   if(c==long.class||c==Long.class)return 0L;
   if(c==double.class||c==Double.class)return 0d;
   if(c==float.class||c==Float.class)return 0f;
   if(c==short.class||c==Short.class)return (short)0;
   if(c==byte.class||c==Byte.class)return (byte)0;
  }
  if(c==String.class)return "probe-"+(sequence++);
  if(c==boolean.class||c==Boolean.class)return true;
  if(c==int.class||c==Integer.class)return (sequence++);
  if(c==long.class||c==Long.class)return (long)(sequence++);
  if(c==double.class||c==Double.class)return (sequence++)+0.25;
  if(c==float.class||c==Float.class)return (float)((sequence++)+0.5);
  if(c==short.class||c==Short.class)return (short)(sequence++);
  if(c==byte.class||c==Byte.class)return (byte)7;
  if(c.isEnum())return c.getEnumConstants()[0];
  if(!c.getName().startsWith(N))return null;
  try {Method v=c.getMethod("swigToEnum",int.class);return v.invoke(null,0);}catch(NoSuchMethodException ignored){}
  if(depth>9)return null;
  Object result;
  try{result=c.getConstructor().newInstance();}
  catch(NoSuchMethodException e){if(c.getSimpleName().equals("SeiItem"))result=c.getConstructor(Class.forName(N+"SeiData")).newInstance(value(Class.forName(N+"SeiData"),depth+1));else throw e;}
  retained.add(result);
  if(c.getSimpleName().endsWith("Vector")){
   if(edge)return result;
   Method add=Arrays.stream(c.getMethods()).filter(m->m.getName().equals("add")&&m.getParameterCount()==1&&m.getParameterTypes()[0]!=Object.class).findFirst().orElse(null);
   if(add!=null){Object item=value(add.getParameterTypes()[0],depth+1);if(item!=null)add.invoke(result,item);}return result;
  }
  for(Method setter:c.getMethods())if(setter.getName().startsWith("set")&&setter.getParameterCount()==1&&!setter.getName().equals("setCMemOwn")){
   Class<?> t=setter.getParameterTypes()[0];if(t.getName().contains("SWIGTYPE"))continue;
   Object v=value(t,depth+1);if(v!=null)setter.invoke(result,v);
  }
  return result;
 }
 static Object snapshot(Object value,boolean nativeValue,int depth)throws Exception{
  if(value==null||value instanceof String||value instanceof Number||value instanceof Boolean)return value;
  if(value.getClass().isArray()){List<Object> a=new ArrayList<>();for(int i=0;i<Array.getLength(value);i++)a.add(snapshot(Array.get(value,i),nativeValue,depth+1));return a;}
  nativeValue=nativeValue||value.getClass().getName().startsWith(N);
  // These two SWIG vectors are opaque. Their default constructed native contents are empty.
  if(value.getClass().getSimpleName().startsWith("SWIGTYPE_p_std__vectorT_"))return List.of();
  if(depth>15)throw new IllegalStateException("DTO recursion");
  if(value instanceof Collection<?> list){List<Object> out=new ArrayList<>();for(Object item:list)out.add(snapshot(item,nativeValue,depth+1));return out;}
  if(value instanceof Map<?,?> map){Map<String,Object> out=new TreeMap<>();for(var e:map.entrySet())out.put(e.getKey().toString(),snapshot(e.getValue(),nativeValue,depth+1));return out;}
  try{return value.getClass().getMethod("swigValue").invoke(value);}catch(NoSuchMethodException ignored){}
  if(value.getClass().isEnum()){
   for(String getter:List.of("getValue","getCode","getType"))try{return value.getClass().getMethod(getter).invoke(value);}catch(NoSuchMethodException ignored){}
   return ((Enum<?>)value).ordinal();
  }
  Map<String,Object> out=new TreeMap<>();
  if(nativeValue){
   for(Method getter:value.getClass().getMethods())if(getter.getName().startsWith("get")&&getter.getParameterCount()==0&&!List.of("getClass","getCPtr").contains(getter.getName())){
    String key=getter.getName().substring(3);key=key.substring(0,1).toLowerCase()+key.substring(1);StringBuilder camel=new StringBuilder();boolean upper=false;for(char ch:key.toCharArray()){if(ch=='_'){upper=true;continue;}camel.append(upper?Character.toUpperCase(ch):ch);upper=false;}
    String field=camel.toString();if(value.getClass().getSimpleName().equals("Device")&&field.equals("isOnline"))field="online";
    if(value.getClass().getSimpleName().equals("DeviceLogListResultFileItem")&&field.equals("objectKey"))field="ObjectKey";
    out.put(field,snapshot(getter.invoke(value),true,depth+1));
   }
  }else{
   for(Class<?> c=value.getClass();c!=Object.class;c=c.getSuperclass())for(Field field:c.getDeclaredFields())if(!Modifier.isStatic(field.getModifiers())&&!field.isSynthetic()){
    field.setAccessible(true);out.put(field.getName(),snapshot(field.get(value),false,depth+1));
   }
  }
  return out;
 }
 public static void main(String[] args)throws Exception{
  JniLibraryLoader.loadLibrary();Map<String,Object> result=new TreeMap<>();List<Object> failures=new ArrayList<>();
  for(Method method:FlightHubSdkConvert.class.getDeclaredMethods()){
   if(!Modifier.isPublic(method.getModifiers())||method.getParameterCount()!=1||!method.getParameterTypes()[0].getName().startsWith(N)||method.getReturnType().getName().startsWith(N))continue;
   Class<?> c=method.getParameterTypes()[0];if(c.getSimpleName().endsWith("Vector"))continue;
   try{sequence=100;Object source=value(c,0),converted=method.invoke(null,source);result.put(c.getSimpleName(),JavaOracle.obj("converter",method.getName(),"javaType",method.getReturnType().getSimpleName(),"native",snapshot(source,true,0),"java",snapshot(converted,false,0)));}
   catch(Throwable t){Throwable cause=t instanceof InvocationTargetException?t.getCause():t;failures.add(JavaOracle.obj("type",c.getSimpleName(),"converter",method.getName(),"failure",cause.toString()));}
  }
  Files.writeString(Path.of("audit/server-java-dto-oracle.json"),JavaOracle.json(JavaOracle.obj("results",result,"failures",failures)));
  System.out.println("Java DTO converters exercised: "+result.size()+", failures: "+failures.size());
 }
}
