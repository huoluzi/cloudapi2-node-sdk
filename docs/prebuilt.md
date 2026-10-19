# Ubuntu 预编译版本

默认发行目录及 npm tarball 带有 native/linux-x64/，无需 Java、JDK、CMake 或 C++ 编译器即可加载 SDK。首次从仓库使用仍需 npm ci 和 npm run build，后者只编译 TypeScript。npm tarball 已带 dist/，消费方无需再构建。

| 项目 | 构建记录 |
|---|---|
| 系统 | Ubuntu 22.04.2 LTS，x86_64，glibc 2.35 |
| 编译器 | GCC 11.4.0；官方预编译依赖可能使用不同编译器 |
| Node | Node-API 8；验证目标 Node.js 22、24 |
| 原生绑定 | API 4；SDK 3.3.7.0 |
| 官方源码 | 79c6cc3c0021c7e72d5d94bb37b3dafb9fa50578；附三处关闭/析构补丁 |
| 动态符号需求 | GLIBC_2.34、GLIBCXX_3.4.30、CXXABI_1.3.13；以所有随包 ELF 的版本信息汇总 |

优先使用 Ubuntu 22.04 x64 的更新环境。其他 Linux 发行版不能仅凭系统名称判断兼容性；至少需要满足以上符号及全部 ldd 依赖。Windows 原生、macOS、ARM64、musl/Alpine 不能加载此版本。Windows 使用 WSL2 的 Linux Node.js，或连接远程 Ubuntu。

Ubuntu 运行依赖可通过 sudo apt update 和 sudo apt install libstdc++6 libgcc-s1 ca-certificates 安装/更新。SSL、MQTT、WebSocket、DRTC 库已随包，不需要将它们复制到 /usr/lib。

运行 npm run verify:prebuilt：所有平台核对 SHA-256，Linux x64 还会实际加载绑定。运行 ldd native/linux-x64/cloudapi2_node.node 检查缺失依赖。源码工作目录需先 npm run build。

## 文件清单与来源

- cloudapi2_node.node：本项目生成的 Node-API 绑定，静态链接官方 C++ 核心及其静态依赖；移除非必要符号以减少体积。
- libdrtc_device_sdk.so、libdrpc.so：官方随包闭源库，逐字节保持不变。
- libcrypto.so.1.1、libssl.so.1.1、libpaho-mqtt3as.so.1、libwebsockets.so.12：官方运行依赖，逐字节保持不变。
- build-manifest.json：官方提交、构建环境、绑定版本、文件字节数和 SHA-256。哈希用于检测内容变化，不是发行者数字签名。

仅本项目的 .node 副本进行了 strip；未改写厂商 .so。加载路径使用 $ORIGIN，支持从任意目录加载完整包。不能单独复制 .node 而遗漏同目录动态库，也不能在线覆盖正在被进程映射的文件。

需要重编时指定新的 CLOUDAPI2_NATIVE_OUTPUT；参见 [构建指南](building.md)。替换预编译版本后同步更新清单、打包哈希及验证结果。默认目录只接受清单中的七个 ELF 文件，不会把其他本地原生产物一起导出。
