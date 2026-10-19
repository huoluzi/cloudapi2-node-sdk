# 测试方法

## 不依赖官方 SDK

```bash
npm ci
npm run build
npm test
npm run check:public
npm run test:package
```

这些检查适用于 Windows、Linux、macOS。SDK 枚举对照若缺少官方源码会明确 skip；Windows 上原生调用应明确拒绝，不能静默返回成功。

test:package 实际生成 tarball、检查内容，在新的临时消费目录中安装它并验证 CJS/ESM 导入及 TypeScript 公共类型。包中不能混入现场配置或测试产物。预编译库限于固定七个 ELF 文件，逐一验证哈希；Linux 消费测试还会加载临时安装包内的默认原生库，不借用开发目录的绑定。

## Java 对照与原生边界

需要 Linux、官方完整 SDK/JAR、JDK 17、Python 3 和编译后的两份库：正常构建与 CLOUDAPI2_CONTRACT_PROBES=ON 的测试构建。测试构建必须输出到单独目录，不能用于 Demo 或产品。

```bash
export CLOUDAPI2_JAVA_JAR=/absolute/path/flight-hub-sdk-3.3.7.jar
export CLOUDAPI2_TEST_BINDING=/absolute/test/cloudapi2_node.node
export CLOUDAPI2_NODE_BINDING=/absolute/release/cloudapi2_node.node
npm run test:conformance
```

脚本检查输入，执行 javac/java、两组 791 项模块矩阵、484 个 Java 转换器和根入口/SEI 对照，然后执行原生边界与加固用例。Java 模块矩阵使用 SWIG 接口替身，Node 使用原生 C++ 测试接口；二者运行实际包装/转换代码。命令接口不会访问物理设备。

回环协议：先运行 Python test/protocol-fixture.py，再运行 test/lifecycle-native.mjs、test/business-native.mjs、test/reliability-native.mjs 或 test/soak-native.mjs。后两者会验证故障恢复、多个生命周期和资源趋势。test/shutdown-race-native.mjs 专门执行 100 轮带在途查询的关闭回归。JavaShutdownOracle.java 用于单独复现官方 JAR 的关闭竞态；它可能导致 JVM 原生崩溃，必须在隔离环境运行，不属于常规成功用例。fixture 只监听回环地址、动态端口，不接受切换到真实底座。

Java 库自带的 .so 会在本地运行，官方 SDK 的日志可能包含地址、鉴权和设备信息。原始 audit/server-* 与 .runtime 下文件留在私有环境。公开结果只保留不含现场标识的汇总。

九个示例的回环冒烟检查：先运行 Python test/protocol-fixture.py，再运行 node test/examples-native.mjs。该检查拒绝非回环配置，查询使用空页，位置使用固定生成数据；在线状态/HMS 只验证注册和清理，不构造全部事件类型，也不访问物理设备。

## 实机

examples/devices.mjs 或 scripts/live-node.mjs 使用私有 CLOUDAPI2_CONFIG。只做查询、位置订阅和取消。真实飞行、机械动作、固件升级、任务执行、媒体删除等需要单独的可控验收环境，不能从契约测试成功推断已通过实机验收。
