// Compiled only in the isolated contract-test artifact, never the release build.
napi_env probeEnv=nullptr;
napi_ref probeValues=nullptr,probeCalls=nullptr;
void ProbeBegin(napi_env env,napi_value values){probeEnv=env;if(probeValues)napi_delete_reference(env,probeValues);if(probeCalls)napi_delete_reference(env,probeCalls);Check(napi_create_reference(env,values,1,&probeValues));napi_value calls;Check(napi_create_array(env,&calls));Check(napi_create_reference(env,calls,1,&probeCalls));}
template<class T> T ProbeValue(int index){napi_value values;Check(napi_get_reference_value(probeEnv,probeValues,&values));auto v=Element(probeEnv,values,index);if constexpr(std::is_same_v<T,std::vector<uint8_t>>){if(IsArray(probeEnv,v)){uint32_t n;Check(napi_get_array_length(probeEnv,v,&n));T out;for(uint32_t i=0;i<n;i++)out.push_back(Convert<uint8_t>::from(probeEnv,Element(probeEnv,v,i)));return out;}}return Convert<T>::from(probeEnv,v);}
void ProbeRecord(const char* type,const char* method,std::vector<napi_value> args){auto out=Object(probeEnv);Put(probeEnv,out,"type",Js(probeEnv,std::string(type)));Put(probeEnv,out,"method",Js(probeEnv,std::string(method)));napi_value values;Check(napi_create_array_with_length(probeEnv,args.size(),&values));for(uint32_t i=0;i<args.size();i++)Check(napi_set_element(probeEnv,values,i,args[i]));Put(probeEnv,out,"args",values);napi_value calls;Check(napi_get_reference_value(probeEnv,probeCalls,&calls));uint32_t n;Check(napi_get_array_length(probeEnv,calls,&n));Check(napi_set_element(probeEnv,calls,n,out));}
napi_value ReadProbeCalls(napi_env env,napi_callback_info){return Guard(env,[&]{napi_value out;Check(napi_get_reference_value(env,probeCalls,&out));return out;});}
napi_value StopProbeCallbacks(napi_env env,napi_callback_info){return Guard(env,[&]{StopGenerated();return Undefined(env);});}
#include "generated/probes.inc"
napi_value ProbeRoundTripMap(napi_env env,napi_callback_info info){return Guard(env,[&]{
    using Map=std::map<std::string,std::string>;
    return Convert<Map>::to(env,Convert<Map>::from(env,Argument(env,info)));
});}
napi_value ProbeFloat(napi_env env,napi_callback_info info){return Guard(env,[&]{
    return Convert<float>::to(env,Convert<float>::from(env,Argument(env,info)));
});}
napi_value ProbeFrameBurst(napi_env env,napi_callback_info info){return Guard(env,[&]{
    auto args=Arguments(env,info,3);const int count=Integer(env,args[1]),size=Integer(env,args[2]);
    if(count<1||count>1024||size<0||size>static_cast<int>(maxFrameBytes))throw std::invalid_argument("Invalid probe frame bounds");
    auto cb=NewCallback(env,args[0],false);FrameInfo frame{};
    std::vector<uint8_t> bytes(size,0x7f);
    for(int i=0;i<count;++i)cb->sendFrame(bytes,frame);
    TrackGenerated(cb.get(),"frameProbe",0,cb,[]{});
    return Undefined(env);
});}
