#include <node_api.h>
#include "flight_hub_sdk.h"
#include <atomic>
#include <cmath>
#include <cstdint>
#include <limits>
#include <stdexcept>
#include <string>
#include <vector>
#include <memory>
#include <mutex>
#include <map>
#include <set>
#include <optional>
#include <unordered_map>
#include <type_traits>
#include <tuple>
#include <algorithm>
#include <sstream>
#include "workspace.h"
#include "device_manage_module.h"
#include "drone.h"
#include "generated/includes.inc"
#include "bll/notification_center/notification_center.h"

namespace {
using flight_hub_sdk::FlightHubSdk;
using flight_hub_sdk::FlightHubSdkConfig;
using flight_hub_sdk::HeaderKeyValue;
std::atomic<napi_env> owner{nullptr};

void Check(napi_status status) {
    if (status != napi_ok) throw std::runtime_error("Node-API conversion failed");
}
void Expect(napi_env env, napi_value value, napi_valuetype expected) {
    napi_valuetype actual;
    Check(napi_typeof(env, value, &actual));
    if (actual != expected) throw std::invalid_argument("Unexpected argument type");
}
napi_value Property(napi_env env, napi_value obj, const char* key) {
    napi_value out;
    Check(napi_get_named_property(env, obj, key, &out));
    return out;
}
std::string String(napi_env env, napi_value value) {
    Expect(env, value, napi_string);
    size_t length;
    Check(napi_get_value_string_utf8(env, value, nullptr, 0, &length));
    std::vector<char> bytes(length + 1);
    Check(napi_get_value_string_utf8(env, value, bytes.data(), bytes.size(), &length));
    return {bytes.data(), length};
}
bool Boolean(napi_env env, napi_value value) {
    Expect(env, value, napi_boolean);
    bool out;
    Check(napi_get_value_bool(env, value, &out));
    return out;
}
int32_t Integer(napi_env env, napi_value value) {
    Expect(env, value, napi_number);
    double number;
    Check(napi_get_value_double(env, value, &number));
    if (!std::isfinite(number) || std::trunc(number) != number || number < INT32_MIN || number > INT32_MAX)
        throw std::invalid_argument("Expected an int32 value");
    return static_cast<int32_t>(number);
}
uint64_t Unsigned64(napi_env env, napi_value value) {
    Expect(env, value, napi_bigint);
    uint64_t out;
    bool lossless;
    Check(napi_get_value_bigint_uint64(env, value, &out, &lossless));
    if (!lossless) throw std::invalid_argument("Integer is outside uint64 range");
    return out;
}
napi_value Js(napi_env env, const std::string& value) {
    napi_value out;
    Check(napi_create_string_utf8(env, value.data(), value.size(), &out));
    return out;
}
napi_value Js(napi_env env, int32_t value) {
    napi_value out;
    Check(napi_create_int32(env, value, &out));
    return out;
}
napi_value Js(napi_env env, bool value) {
    napi_value out;
    Check(napi_get_boolean(env, value, &out));
    return out;
}
napi_value Js(napi_env env, double value) {
    napi_value out;
    Check(napi_create_double(env, value, &out));
    return out;
}
napi_value Undefined(napi_env env) {
    napi_value out; Check(napi_get_undefined(env, &out)); return out;
}
napi_value Null(napi_env env) { napi_value out; Check(napi_get_null(env,&out)); return out; }
std::vector<napi_value> Arguments(napi_env env, napi_callback_info info, size_t expected) {
    std::vector<napi_value> args(expected + 1);
    size_t count = args.size();
    Check(napi_get_cb_info(env, info, &count, args.data(), nullptr, nullptr));
    if (count != expected) throw std::invalid_argument("Incorrect number of arguments");
    args.resize(expected); return args;
}
napi_value Js64(napi_env env, uint64_t value) {
    napi_value out;
    Check(napi_create_bigint_uint64(env, value, &out));
    return out;
}
napi_value Object(napi_env env) {
    napi_value out;
    Check(napi_create_object(env, &out));
    return out;
}
void Put(napi_env env, napi_value obj, const char* name, napi_value value) {
    Check(napi_set_named_property(env, obj, name, value));
}
napi_value Argument(napi_env env, napi_callback_info info) {
    size_t count = 1;
    napi_value argument;
    Check(napi_get_cb_info(env, info, &count, &argument, nullptr, nullptr));
    if (count != 1) throw std::invalid_argument("One argument is required");
    return argument;
}

template <typename F> napi_value Guard(napi_env env, F work) {
    try { return work(); }
    catch (const std::exception& error) {
        bool pending = false;
        napi_is_exception_pending(env, &pending);
        if (!pending) napi_throw_error(env, "CLOUDAPI2_BINDING_ERROR", error.what());
    } catch (...) { napi_throw_error(env, "CLOUDAPI2_BINDING_ERROR", "Unknown native exception"); }
    return nullptr;
}

FlightHubSdkConfig Config(napi_env env, napi_value value) {
    Expect(env, value, napi_object);
    FlightHubSdkConfig config;
#define READ_STRING(js, cpp) config.cpp = String(env, Property(env, value, #js))
#define READ_BOOL(js, cpp) config.cpp = Boolean(env, Property(env, value, #js))
    READ_STRING(logLevel, log_level);
    READ_BOOL(logToConsole, log_to_console);
    READ_BOOL(showVersionInfo, show_version_info);
    READ_STRING(logFilePath, log_file_path);
    config.log_max_file_size = Unsigned64(env, Property(env, value, "logMaxFileSize"));
    config.log_max_files = Integer(env, Property(env, value, "logMaxFiles"));
    READ_STRING(address, address);
    READ_STRING(port, port);
    READ_STRING(notificationServerAddress, notification_server_address);
    READ_STRING(drtcConfigPath, drtc_config_path);
    READ_BOOL(verifySsl, verify_ssl);
    READ_STRING(sslCaPath, ssl_ca_path);
#undef READ_STRING
#undef READ_BOOL
    return config;
}
napi_value Config(napi_env env, const FlightHubSdkConfig& config) {
    auto out = Object(env);
#define FIELD(js, cpp) Put(env, out, #js, Js(env, config.cpp))
    FIELD(logLevel, log_level);
    FIELD(logToConsole, log_to_console);
    FIELD(showVersionInfo, show_version_info);
    FIELD(logFilePath, log_file_path);
    Put(env, out, "logMaxFileSize", Js64(env, config.log_max_file_size));
    FIELD(logMaxFiles, log_max_files);
    FIELD(address, address);
    FIELD(port, port);
    FIELD(notificationServerAddress, notification_server_address);
    FIELD(drtcConfigPath, drtc_config_path);
    FIELD(verifySsl, verify_ssl);
    FIELD(sslCaPath, ssl_ca_path);
#undef FIELD
    return out;
}
std::vector<HeaderKeyValue> Headers(napi_env env, napi_value value) {
    bool array;
    Check(napi_is_array(env, value, &array));
    if (!array) throw std::invalid_argument("headers must be an array");
    uint32_t count;
    Check(napi_get_array_length(env, value, &count));
    std::vector<HeaderKeyValue> out;
    out.reserve(count);
    for (uint32_t i = 0; i < count; i++) {
        napi_value item;
        Check(napi_get_element(env, value, i, &item));
        out.push_back({String(env, Property(env, item, "key")), String(env, Property(env, item, "value"))});
    }
    return out;
}
napi_value Headers(napi_env env, const std::vector<HeaderKeyValue>& headers) {
    napi_value out;
    Check(napi_create_array_with_length(env, headers.size(), &out));
    for (size_t i = 0; i < headers.size(); i++) {
        auto item = Object(env);
        Put(env, item, "key", Js(env, headers[i].key));
        Put(env, item, "value", Js(env, headers[i].value));
        Check(napi_set_element(env, out, static_cast<uint32_t>(i), item));
    }
    return out;
}

#define ROOT_CALLBACK(name, expression) \
    napi_value name(napi_env env, napi_callback_info info) { \
        return Guard(env, [&]() -> napi_value { return (expression); }); \
    }
ROOT_CALLBACK(GetVersion, Js(env, FlightHubSdk::getVersion()))
ROOT_CALLBACK(GetBuildInfo, Js(env, FlightHubSdk::getBuildInfo()))
ROOT_CALLBACK(IsInitialized, Js(env, FlightHubSdk::isInitialized()))
ROOT_CALLBACK(IsNotificationConnected, Js(env, flight_hub_sdk::NotificationCenter::getInstance()->isConnected()))
ROOT_CALLBACK(Initialize, Js(env, static_cast<int32_t>(FlightHubSdk::initialize(Config(env, Argument(env, info))))))
int ShutdownSdk();
ROOT_CALLBACK(Shutdown, Js(env, static_cast<int32_t>(ShutdownSdk())))
ROOT_CALLBACK(GetConfig, Config(env, FlightHubSdk::getConfig()))
ROOT_CALLBACK(SetLogLevel, Js(env, static_cast<int32_t>(FlightHubSdk::setLogLevel(String(env, Argument(env, info))))))
ROOT_CALLBACK(SetHttpHeaders, Js(env, static_cast<int32_t>(FlightHubSdk::setHttpHeaders(Headers(env, Argument(env, info))))))
ROOT_CALLBACK(GetHttpHeaders, Headers(env, FlightHubSdk::getHttpHeaders()))
ROOT_CALLBACK(SetWebSocketAuthHeaders, Js(env, static_cast<int32_t>(FlightHubSdk::setWebSocketAuthHeaders(Headers(env, Argument(env, info))))))
ROOT_CALLBACK(GetWebSocketAuthHeaders, Headers(env, FlightHubSdk::getWebSocketAuthHeaders()))
#undef ROOT_CALLBACK

// All handles are tagged and generation checked before casting. Shutdown invalidates
// retained JS wrappers; a later initialize cannot accidentally reuse an old module.
enum class Kind { Workspace, DeviceManage, Drone, DroneOsd, Generated };
uint64_t generation = 1;
constexpr napi_type_tag handleTag{0x62a97f24a8cb4ac1ULL, 0x88d0364aaee1c7ddULL};
struct Handle { Kind kind; uint64_t generation; std::shared_ptr<void> pointer; std::string type; };
std::set<Handle*> handles;
template<class T> napi_value Wrap(napi_env env, Kind kind, std::shared_ptr<T> pointer) {
    if (!pointer) { napi_value out; Check(napi_get_null(env, &out)); return out; }
    auto out = Object(env);
    auto value = std::make_unique<Handle>(Handle{kind, generation, std::move(pointer)});
    Check(napi_type_tag_object(env, out, &handleTag));
    Check(napi_wrap(env, out, value.get(), [](napi_env, void* p, void*) {
        auto* h=static_cast<Handle*>(p); handles.erase(h); delete h;
    }, nullptr, nullptr));
    handles.insert(value.get());
    value.release(); return out;
}
template<class T> std::shared_ptr<T> Unwrap(napi_env env, napi_value value, Kind kind) {
    bool tagged = false;
    Expect(env, value, napi_object);
    Check(napi_check_object_type_tag(env, value, &handleTag, &tagged));
    if (!tagged) throw std::invalid_argument("Invalid SDK handle");
    void* raw = nullptr; Check(napi_unwrap(env, value, &raw));
    auto* handle = static_cast<Handle*>(raw);
    if (!handle || handle->kind != kind) throw std::invalid_argument("Wrong SDK handle type");
    if (handle->generation != generation || !FlightHubSdk::isInitialized())
        throw std::runtime_error("SDK handle expired after shutdown");
    return std::static_pointer_cast<T>(handle->pointer);
}
using namespace flight_hub_sdk;
template<class T, class F> napi_value Array(napi_env env, const std::vector<T>& items, F convert) {
    napi_value out; Check(napi_create_array_with_length(env, items.size(), &out));
    for (size_t i=0; i<items.size(); ++i) Check(napi_set_element(env,out,i,convert(env,items[i])));
    return out;
}
napi_value Error(napi_env env, const FlightHubError& e) {
    auto out=Object(env);
    Put(env,out,"errorCode",Js(env,static_cast<int32_t>(e.error_code)));
    Put(env,out,"httpCode",Js(env,e.http_code)); Put(env,out,"serverCode",Js(env,e.server_code));
    Put(env,out,"deviceCode",Js(env,e.device_code)); Put(env,out,"serverMessage",Js(env,e.server_message));
    return out;
}
napi_value DeviceValue(napi_env env, const Device& v) {
    auto out=Object(env);
    Put(env,out,"deviceSn",Js(env,v.device_sn)); Put(env,out,"deviceClass",Js(env,v.device_class));
    Put(env,out,"deviceName",Js(env,v.device_name)); Put(env,out,"nickname",Js(env,v.nickname));
    Put(env,out,"modelKey",Js(env,v.model_key)); Put(env,out,"online",Js(env,v.is_online));
    Put(env,out,"parentSns",Array(env,v.parent_sns,[](napi_env e,const std::string& s){return Js(e,s);}));
    return out;
}
napi_value TopoValue(napi_env env, const DeviceTopo& v) {
    auto out=Object(env); Put(env,out,"device",DeviceValue(env,v.device));
    Put(env,out,"subDevices",Array(env,v.sub_devices,DeviceValue)); return out;
}
napi_value LocationValue(napi_env env, const AircraftLocation& v) {
    auto out=Object(env); Put(env,out,"height",Js(env,v.height)); Put(env,out,"elevation",Js(env,v.elevation));
    Put(env,out,"longitude",Js(env,v.longitude)); Put(env,out,"latitude",Js(env,v.latitude)); return out;
}

struct Callback;
template<class Frame> std::vector<napi_value> FrameValues(napi_env, const std::vector<uint8_t>&, const Frame&);
constexpr size_t maxFrameBytes = 10 * 1024 * 1024;
constexpr size_t maxQueuedBytes = 64 * 1024 * 1024;
std::atomic<size_t> queuedBytes{0};
struct Delivery {
    std::shared_ptr<Callback> callback;
    std::function<std::vector<napi_value>(napi_env)> values;
    size_t bytes = 0;
    ~Delivery() { queuedBytes.fetch_sub(bytes); }
};
std::vector<std::weak_ptr<Callback>> callbacks; // touched only on the JS thread
std::atomic<uint64_t> droppedCallbacks{0};
// The mutex serializes every producer with release/abort, so no native thread
// can access a TSFN after release. No producer ever waits for the JS event loop.
struct Callback : std::enable_shared_from_this<Callback> {
    std::mutex mutex;
    std::atomic<bool> active{true};
    napi_threadsafe_function function = nullptr;
    bool once;
    std::function<void()> cancelNative;
    explicit Callback(bool once):once(once) {}
    void stop() {
        active.store(false);
        std::lock_guard lock(mutex);
        if (function) { napi_release_threadsafe_function(function,napi_tsfn_abort); function=nullptr; }
    }
    void send(std::function<std::vector<napi_value>(napi_env)> convert) {
        std::lock_guard lock(mutex);
        if (!active.load() || !function) return;
        auto delivery=std::make_unique<Delivery>(Delivery{shared_from_this(),std::move(convert)});
        auto result=napi_call_threadsafe_function(function,delivery.get(),napi_tsfn_nonblocking);
        if (result == napi_ok) delivery.release();
        else if (result == napi_queue_full) ++droppedCallbacks;
        if (once) { napi_release_threadsafe_function(function,napi_tsfn_release); function=nullptr; }
    }
    // Reserve a process-wide payload budget BEFORE copying a video frame. A
    // count-only queue could otherwise retain 256 * 10 MiB for every listener.
    template<class Frame> void sendFrame(const std::vector<uint8_t>& bytes, const Frame& frame, bool validateLive = false) noexcept {
        if (validateLive && (bytes.empty() || bytes.size() > maxFrameBytes)) return;
        std::lock_guard lock(mutex);
        if (!active.load() || !function) return;
        size_t current = queuedBytes.load();
        do {
            if (bytes.size() > maxQueuedBytes - current) { ++droppedCallbacks; return; }
        } while (!queuedBytes.compare_exchange_weak(current, current + bytes.size()));
        std::unique_ptr<Delivery> delivery;
        try {
            delivery = std::make_unique<Delivery>();
            delivery->bytes = bytes.size();
            delivery->callback = shared_from_this();
            delivery->values = [bytes,frame](napi_env env) {
                return FrameValues(env, bytes, frame);
            };
            const auto status = napi_call_threadsafe_function(function, delivery.get(), napi_tsfn_nonblocking);
            if (status == napi_ok) delivery.release();
            else if (status == napi_queue_full) ++droppedCallbacks;
        } catch (...) {
            if (!delivery) queuedBytes.fetch_sub(bytes.size());
            ++droppedCallbacks;
        }
    }
};
void CallJs(napi_env env,napi_value fn,void*,void* data) {
    std::unique_ptr<Delivery> delivery(static_cast<Delivery*>(data));
    if (!env || !fn || !delivery || !delivery->callback->active.load()) return;
    Guard(env,[&] {
        auto values=delivery->values(env);
        if (delivery->callback->once) delivery->callback->active.store(false);
        napi_value result;
        Check(napi_call_function(env,Undefined(env),fn,values.size(),values.data(),&result));
        return Undefined(env);
    });
    // Report user callback exceptions through Node's normal uncaughtException path.
    bool pending=false; napi_is_exception_pending(env,&pending);
    if (pending) { napi_value error; napi_get_and_clear_last_exception(env,&error); napi_fatal_exception(env,error); }
}
std::shared_ptr<Callback> NewCallback(napi_env env,napi_value fn,bool once) {
    Expect(env,fn,napi_function);
    auto state=std::make_shared<Callback>(once);
    auto retained=std::make_unique<std::shared_ptr<Callback>>(state);
    Check(napi_create_threadsafe_function(env,fn,nullptr,Js(env,std::string("CloudAPI2 callback")),
        once ? 1 : 256,1,retained.get(),
        [](napi_env,void* p,void*){delete static_cast<std::shared_ptr<Callback>*>(p);},nullptr,CallJs,&state->function));
    retained.release();
    // Explicit timers/HTTP servers keep subscriptions alive; forgotten listeners
    // must not prevent process exit and therefore its cleanup hook.
    if (!once) Check(napi_unref_threadsafe_function(env,state->function));
    std::erase_if(callbacks,[](auto& w){return w.expired();}); callbacks.push_back(state);
    return state;
}
using SubscriptionKey=std::pair<IDroneOsdModule*,int>;
std::map<SubscriptionKey,std::shared_ptr<Callback>> subscriptions;
void StopGenerated();
size_t GeneratedCount();
int ShutdownSdk() {
    for(auto& weak:callbacks) if(auto cb=weak.lock()) cb->stop();
    for(auto& [key,cb]:subscriptions) if(cb->cancelNative) { cb->cancelNative(); cb->cancelNative=nullptr; }
    subscriptions.clear(); callbacks.clear(); ++generation;
    StopGenerated();
    for(auto* h:handles) h->pointer.reset();
    return static_cast<int>(FlightHubSdk::shutdown());
}
napi_value GetWorkspace(napi_env env,napi_callback_info) {
    return Guard(env,[&]{return Wrap(env,Kind::Workspace,FlightHubSdk::getWorkspaceInstance());});
}
napi_value GetDeviceManage(napi_env env,napi_callback_info info) {
    return Guard(env,[&]{return Wrap(env,Kind::DeviceManage,Unwrap<IWorkspace>(env,Argument(env,info),Kind::Workspace)->getDeviceManageModule());});
}
napi_value GetDrone(napi_env env,napi_callback_info info) {
    return Guard(env,[&]{return Wrap(env,Kind::Drone,FlightHubSdk::getDroneInstance(String(env,Argument(env,info))));});
}
napi_value GetDroneOsd(napi_env env,napi_callback_info info) {
    return Guard(env,[&]{return Wrap(env,Kind::DroneOsd,Unwrap<IDrone>(env,Argument(env,info),Kind::Drone)->getDroneOsdModule());});
}
napi_value GetDeviceList(napi_env env,napi_callback_info info) {
    return Guard(env,[&]{
        auto args=Arguments(env,info,2); auto module=Unwrap<IDeviceManageModule>(env,args[0],Kind::DeviceManage);
        auto cb=NewCallback(env,args[1],true);
        try { module->getDeviceList([cb](const std::vector<DeviceTopo>& items,FlightHubError error){
            cb->send([items,error](napi_env e){return std::vector<napi_value>{Array(e,items,TopoValue),Error(e,error)};});
        }); } catch(...) {cb->stop();throw;}
        return Undefined(env);
    });
}
napi_value ListenLocation(napi_env env,napi_callback_info info) {
    return Guard(env,[&]{
        auto args=Arguments(env,info,2); auto module=Unwrap<IDroneOsdModule>(env,args[0],Kind::DroneOsd);
        auto cb=NewCallback(env,args[1],false);
        int id;
        try { id=module->listenAircraftLocation([cb](const AircraftLocation& value){
            cb->send([value](napi_env e){return std::vector<napi_value>{LocationValue(e,value)};});
        }); } catch(...) {cb->stop();throw;}
        if(id<0) cb->stop();
        else { cb->cancelNative=[module,id]{module->cancelListenAircraftLocation(id);}; subscriptions[{module.get(),id}]=cb; }
        return Js(env,id);
    });
}
napi_value CancelLocation(napi_env env,napi_callback_info info) {
    return Guard(env,[&]{
        auto args=Arguments(env,info,2); auto module=Unwrap<IDroneOsdModule>(env,args[0],Kind::DroneOsd);
        int id=Integer(env,args[1]); auto it=subscriptions.find({module.get(),id});
        if(it!=subscriptions.end()) { auto cb=it->second; cb->stop(); cb->cancelNative(); cb->cancelNative=nullptr; subscriptions.erase(it); }
        return Undefined(env);
    });
}
napi_value GetDiagnostics(napi_env env,napi_callback_info) {
    return Guard(env,[&]{ auto out=Object(env);
        Put(env,out,"subscriptions",Js(env,static_cast<int32_t>(subscriptions.size()+GeneratedCount())));
        Put(env,out,"droppedCallbacks",Js64(env,droppedCallbacks.load()));
        Put(env,out,"queuedFrameBytes",Js64(env,queuedBytes.load()));
        Put(env,out,"maxQueuedFrameBytes",Js64(env,maxQueuedBytes)); return out;
    });
}

#include "generic.inc"
#ifdef CLOUDAPI2_CONTRACT_PROBES
#include "probes.inc"
#endif

napi_value GetBindingInfo(napi_env env, napi_callback_info) {
    return Guard(env, [&] {
        auto out = Object(env);
        Put(env, out, "bindingApiVersion", Js(env, int32_t{4}));
        Put(env, out, "upstreamVersion", Js(env, std::string(CLOUDAPI2_UPSTREAM_VERSION)));
        return out;
    });
}
void Cleanup(void*) {
    try { ShutdownSdk(); } catch (...) { }
    owner.store(nullptr);
}
napi_value Register(napi_env env, napi_value exports) {
    napi_env empty = nullptr;
    if (!owner.compare_exchange_strong(empty, env)) {
        napi_throw_error(env, "CLOUDAPI2_SINGLE_ENV", "Only one Node environment may own the SDK");
        return nullptr;
    }
    auto result = Guard(env, [&] {
        const napi_property_descriptor properties[] = {
#define METHOD(js, cpp) {#js, nullptr, cpp, nullptr, nullptr, nullptr, napi_default, nullptr}
            METHOD(getBindingInfo, GetBindingInfo), METHOD(getVersion, GetVersion),
            METHOD(isNotificationConnected, IsNotificationConnected),
            METHOD(getBuildInfo, GetBuildInfo), METHOD(isInitialized, IsInitialized),
            METHOD(initialize, Initialize), METHOD(shutdown, Shutdown), METHOD(getConfig, GetConfig),
            METHOD(setLogLevel, SetLogLevel), METHOD(setHttpHeaders, SetHttpHeaders),
            METHOD(getHttpHeaders, GetHttpHeaders), METHOD(setWebSocketAuthHeaders, SetWebSocketAuthHeaders),
            METHOD(getWebSocketAuthHeaders, GetWebSocketAuthHeaders),
            METHOD(getWorkspaceInstance, GetWorkspace), METHOD(getDeviceManageModule, GetDeviceManage),
            METHOD(getDroneInstance, GetDrone), METHOD(getDroneOsdModule, GetDroneOsd),
            METHOD(getDeviceList, GetDeviceList), METHOD(listenAircraftLocation, ListenLocation),
            METHOD(cancelListenAircraftLocation, CancelLocation), METHOD(getDiagnostics, GetDiagnostics),
            METHOD(getWorkspaceModule, GetWorkspaceModule), METHOD(invokeModule, InvokeModule),
            METHOD(getNativeInstance, GetNativeInstance),
            METHOD(disposeModule, DisposeModule),
#ifdef CLOUDAPI2_CONTRACT_PROBES
            METHOD(createProbeModule, CreateProbeModule), METHOD(readProbeCalls, ReadProbeCalls),
            METHOD(stopProbeCallbacks, StopProbeCallbacks),
            METHOD(probeRoundTripMap, ProbeRoundTripMap), METHOD(probeFloat, ProbeFloat),
            METHOD(probeFrameBurst, ProbeFrameBurst),
#endif
#undef METHOD
        };
        Check(napi_define_properties(env, exports, sizeof(properties) / sizeof(properties[0]), properties));
        Check(napi_add_env_cleanup_hook(env, Cleanup, nullptr));
        return exports;
    });
    if (result == nullptr) owner.store(nullptr);
    return result;
}
} // namespace
NAPI_MODULE(cloudapi2_node, Register)
