// Included inside the addon's namespace after its shared lifecycle helpers.
bool Has(napi_env env,napi_value value,const char* key) {
    bool has; Check(napi_has_named_property(env,value,key,&has)); return has;
}
napi_value Element(napi_env env,napi_value value,uint32_t i) {
    napi_value out; Check(napi_get_element(env,value,i,&out)); return out;
}
bool IsArray(napi_env env,napi_value value){bool array;Check(napi_is_array(env,value,&array));return array;}
void RequireLength(napi_env env,napi_value value,uint32_t count) {
    bool array;Check(napi_is_array(env,value,&array));if(!array)throw std::invalid_argument("Expected argument array");
    uint32_t size;Check(napi_get_array_length(env,value,&size));if(size!=count)throw std::invalid_argument("Incorrect module argument count");
}
template<class T> struct Convert {
    static napi_value to(napi_env env,const T& v) {
        if constexpr(std::is_enum_v<T>)return Js(env,static_cast<int32_t>(v));
        else if constexpr(std::is_same_v<T,bool>)return Js(env,v);
        else if constexpr(std::is_integral_v<T> && sizeof(T)>=8) {
            napi_value out;
            if constexpr(std::is_signed_v<T>)Check(napi_create_bigint_int64(env,v,&out));
            else Check(napi_create_bigint_uint64(env,v,&out));
            return out;
        } else return Js(env,static_cast<double>(v));
    }
    static T from(napi_env env,napi_value v) {
        if constexpr(std::is_enum_v<T>)return static_cast<T>(Integer(env,v));
        else if constexpr(std::is_same_v<T,bool>)return Boolean(env,v);
        else {
            napi_valuetype type;Check(napi_typeof(env,v,&type));
            if constexpr(std::is_integral_v<T> && sizeof(T)>=8) {
                if(type==napi_bigint){bool lossless;T n;
                    if constexpr(std::is_signed_v<T>){int64_t value;Check(napi_get_value_bigint_int64(env,v,&value,&lossless));n=value;}
                    else {uint64_t value;Check(napi_get_value_bigint_uint64(env,v,&value,&lossless));n=value;}
                    if(!lossless)throw std::invalid_argument("BigInt out of range");return n;}
            }
            Expect(env,v,napi_number);double n;Check(napi_get_value_double(env,v,&n));
            if(!std::isfinite(n))throw std::invalid_argument("Expected finite number");
            if constexpr(std::is_floating_point_v<T>)if(n < -std::numeric_limits<T>::max() || n > std::numeric_limits<T>::max())throw std::invalid_argument("Floating point value out of range");
            if constexpr(std::is_integral_v<T>)if(std::trunc(n)!=n||std::abs(n)>9007199254740991.0||n<std::numeric_limits<T>::lowest()||n>std::numeric_limits<T>::max())throw std::invalid_argument("Integer out of range; use BigInt for int64");
            return static_cast<T>(n);
        }
    }
};
template<> struct Convert<std::string> {
    static napi_value to(napi_env env,const std::string& v){return Js(env,v);}
    static std::string from(napi_env env,napi_value v){return String(env,v);}
};
template<class T> struct Convert<std::vector<T>> {
    static napi_value to(napi_env env,const std::vector<T>& v){return Array(env,v,Convert<T>::to);}
    static std::vector<T> from(napi_env env,napi_value v){
        bool array;Check(napi_is_array(env,v,&array));if(!array)throw std::invalid_argument("Expected array");
        uint32_t n;Check(napi_get_array_length(env,v,&n));std::vector<T> out;out.reserve(n);
        for(uint32_t i=0;i<n;i++)out.push_back(Convert<T>::from(env,Element(env,v,i)));return out;
    }
};
template<class T> struct Convert<std::optional<T>> {
    static napi_value to(napi_env env,const std::optional<T>& v){if(v)return Convert<T>::to(env,*v);napi_value out;Check(napi_get_null(env,&out));return out;}
    static std::optional<T> from(napi_env env,napi_value v){napi_valuetype type;Check(napi_typeof(env,v,&type));if(type==napi_null||type==napi_undefined)return {};return Convert<T>::from(env,v);}
};
template<> struct Convert<std::vector<uint8_t>> {
    static napi_value to(napi_env env,const std::vector<uint8_t>& v){napi_value out;Check(napi_create_buffer_copy(env,v.size(),v.data(),nullptr,&out));return out;}
    static std::vector<uint8_t> from(napi_env env,napi_value v){bool buffer;Check(napi_is_buffer(env,v,&buffer));if(buffer){void* p;size_t n;Check(napi_get_buffer_info(env,v,&p,&n));auto b=static_cast<uint8_t*>(p);return {b,b+n};}bool typed;Check(napi_is_typedarray(env,v,&typed));if(typed){napi_typedarray_type t;size_t n,offset;void* p;napi_value backing;Check(napi_get_typedarray_info(env,v,&t,&n,&p,&backing,&offset));if(t!=napi_uint8_array&&t!=napi_uint8_clamped_array)throw std::invalid_argument("Expected byte array");auto b=static_cast<uint8_t*>(p);return {b,b+n};}throw std::invalid_argument("Expected Buffer or Uint8Array");}
};
template<class Map> struct MapConvert {
    static napi_value to(napi_env env,const Map& v){
        auto out=Object(env);
        for(const auto& [key,value]:v){
            // Defining an own data property preserves __proto__ and embedded NUL
            // keys without invoking Object.prototype's legacy setter.
            napi_property_descriptor property{};
            property.name=Js(env,key);
            property.value=Convert<typename Map::mapped_type>::to(env,value);
            property.attributes=napi_default_jsproperty;
            Check(napi_define_properties(env,out,1,&property));
        }
        return out;
    }
    static Map from(napi_env env,napi_value v){
        Expect(env,v,napi_object);
        if(IsArray(env,v))throw std::invalid_argument("Expected a map object");
        napi_value keys;
        Check(napi_get_all_property_names(env,v,napi_key_own_only,
            static_cast<napi_key_filter>(napi_key_enumerable | napi_key_skip_symbols),napi_key_numbers_to_strings,&keys));
        uint32_t n;Check(napi_get_array_length(env,keys,&n));Map out;
        for(uint32_t i=0;i<n;i++){
            const auto key=Element(env,keys,i);napi_value value;
            Check(napi_get_property(env,v,key,&value));
            out[String(env,key)]=Convert<typename Map::mapped_type>::from(env,value);
        }
        return out;
    }
};
template<class V> struct Convert<std::map<std::string,V>>:MapConvert<std::map<std::string,V>>{};
template<class V> struct Convert<std::unordered_map<std::string,V>>:MapConvert<std::unordered_map<std::string,V>>{};
#include "generated/converters.inc"
template<class Frame> std::vector<napi_value> FrameValues(napi_env env,const std::vector<uint8_t>& bytes,const Frame& frame){
    return {Convert<std::vector<uint8_t>>::to(env,bytes),Convert<Frame>::to(env,frame)};
}

template<class T> napi_value WrapGenerated(napi_env env,const std::string& type,std::shared_ptr<T> p){
    if(!p){napi_value out;Check(napi_get_null(env,&out));return out;}
    auto out=Wrap(env,Kind::Generated,p);void* raw;Check(napi_unwrap(env,out,&raw));static_cast<Handle*>(raw)->type=type;return out;
}
template<class T> std::shared_ptr<T> UnwrapGenerated(napi_env env,napi_value value,const std::string& type){
    if constexpr(std::is_same_v<T,IWorkspace>)return Unwrap<T>(env,value,Kind::Workspace);
    if constexpr(std::is_same_v<T,IDrone>)return Unwrap<T>(env,value,Kind::Drone);
    if constexpr(std::is_same_v<T,IDeviceManageModule>||std::is_same_v<T,IDroneOsdModule>){
        bool tag=false;Check(napi_check_object_type_tag(env,value,&handleTag,&tag));if(!tag)throw std::invalid_argument("Invalid SDK handle");void* p;Check(napi_unwrap(env,value,&p));
        if(static_cast<Handle*>(p)->kind!=Kind::Generated)return Unwrap<T>(env,value,std::is_same_v<T,IDeviceManageModule>?Kind::DeviceManage:Kind::DroneOsd);
    }
    auto ptr=Unwrap<T>(env,value,Kind::Generated);void* raw;Check(napi_unwrap(env,value,&raw));
    if(static_cast<Handle*>(raw)->type!=type)throw std::invalid_argument("Wrong module type");return ptr;
}
using GeneratedKey=std::tuple<void*,std::string,int>;
template<class... T> std::string ScopedSubscription(std::string name,const T&... values){auto add=[&](const auto& value){std::ostringstream out;out<<value;auto s=out.str();name+="/"+std::to_string(s.size())+":"+s;};(add(values),...);return name;}
std::map<GeneratedKey,std::shared_ptr<Callback>> generatedSubscriptions;
void TrackGenerated(void* module,const std::string& name,int id,std::shared_ptr<Callback> cb,std::function<void()> cancel){
    if(id<0){cb->stop();return;} cb->cancelNative=std::move(cancel);generatedSubscriptions[{module,name,id}]=cb;
}
bool CancelGenerated(void* module,const std::string& name,int id){
    auto it=generatedSubscriptions.find({module,name,id});if(it==generatedSubscriptions.end())return false;
    auto cb=it->second;cb->stop();cb->cancelNative();cb->cancelNative=nullptr;generatedSubscriptions.erase(it);return true;
}
void StopGenerated(){for(auto& [key,cb]:generatedSubscriptions){cb->stop();cb->cancelNative();cb->cancelNative=nullptr;}generatedSubscriptions.clear();}
void StopGeneratedFor(void* module){for(auto it=generatedSubscriptions.begin();it!=generatedSubscriptions.end();){if(std::get<0>(it->first)==module){auto cb=it->second;cb->stop();cb->cancelNative();cb->cancelNative=nullptr;it=generatedSubscriptions.erase(it);}else ++it;}}
size_t GeneratedCount(){return generatedSubscriptions.size();}
napi_value GetWorkspaceModule(napi_env env,napi_callback_info info){return Guard(env,[&]{
    auto args=Arguments(env,info,2);auto ws=Unwrap<IWorkspace>(env,args[0],Kind::Workspace);auto type=String(env,args[1]);
    #include "generated/getters.inc"
    throw std::invalid_argument("Unsupported workspace module");
});}
napi_value InvokeModule(napi_env env,napi_callback_info info){return Guard(env,[&]{
    auto args=Arguments(env,info,4);auto handle=args[0];auto type=String(env,args[1]);auto method=String(env,args[2]);auto values=args[3];
    #include "generated/dispatch.inc"
    throw std::invalid_argument("Unsupported module method");
});}
napi_value GetNativeInstance(napi_env env,napi_callback_info info){return Guard(env,[&]{
    auto args=Arguments(env,info,2);auto type=String(env,args[0]);auto sn=String(env,args[1]);
    if(type=="Dock")return WrapGenerated(env,type,FlightHubSdk::getDockInstance(sn));
    if(type=="RemoteController")return WrapGenerated(env,type,FlightHubSdk::getRemoteControllerInstance(sn));
    if(type=="BaseStation")return WrapGenerated(env,type,FlightHubSdk::getBaseStationInstance(sn));
    if(type=="Relay")return WrapGenerated(env,type,FlightHubSdk::getRelayInstance(sn));
    if(type=="Stream")return WrapGenerated(env,type,FlightHubSdk::getStream());
    throw std::invalid_argument("Unknown SDK instance type");
});}
napi_value DisposeModule(napi_env env,napi_callback_info info){return Guard(env,[&]{auto args=Arguments(env,info,2);auto type=String(env,args[1]);if(type=="AIInsideManageModule")StopGeneratedFor(UnwrapGenerated<IAIInsideManageModule>(env,args[0],type).get());else if(type=="AIAlertModule")StopGeneratedFor(UnwrapGenerated<IAIAlertModule>(env,args[0],type).get());else throw std::invalid_argument("Module has no destroy method");return Undefined(env);});}
