# 构建与 Windows 开发

## 默认使用预编译库

发行包默认含 Ubuntu 22.04 x64 原生库。Node.js 22/24 下运行 npm ci、npm run build、npm run verify:prebuilt 即可；这里 build 仅编译 TypeScript，不执行 C++ 编译。消费 npm tarball 时 dist 已经生成。系统依赖、哈希和兼容范围见 [预编译说明](prebuilt.md)。

Windows 可以编辑源码、构建 TS、运行非原生测试。设备调用必须使用 WSL2 中的 Linux Node，或远程 Linux；Windows node.exe 不能加载 Linux .node。WSL2 构建建议放 Linux 文件系统，参考 [Microsoft 指南](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)。

## 可选的原生重编

要求 Linux x86_64/glibc、C++20 编译器、CMake >= 3.20、Node-API 头文件，及 upstream.lock.json 对应的官方完整 SDK 3.3.7（含 deps、third_party 实际二进制）。Java 只用于对照测试，正常构建 ENABLE_JAVA=OFF。

官方仓库为 https://github.com/dji-sdk/Cloud-API-2，锁定提交 79c6cc3c0021c7e72d5d94bb37b3dafb9fa50578。不要直接使用变化的 main；LFS 指针不能用来链接，必须取得实际文件。

按 README 设置 CLOUDAPI2_SDK_ROOT、NODE_INCLUDE_DIR，运行 audit:check、doctor。源码校验按 LF 规范化摘要进行，不要求存在 .git；摘要不覆盖全部第三方库，不是完整供应链签名。

```bash
CLOUDAPI2_NATIVE_OUTPUT="$PWD/native/linux-x64-next" npm run build:native
CLOUDAPI2_NODE_BINDING="$PWD/native/linux-x64-next/cloudapi2_node.node" node examples/diagnostics.mjs
```

构建复制官方源码到 build/native-*/sdk，再应用三处明确记录的生命周期补丁，不修改官方原目录。先检查输出目录不存在，构建和校验后原子 rename 到新目录；跨文件系统 rename 会失败并保留结果，不回退到覆盖复制。默认 native/linux-x64 已有预编译产物，必须使用新目录。

verify:native 检查 ELF、动态依赖解析、SDK/绑定版本、探针/JVM/插桩库，并记录各文件哈希；verify:prebuilt 验证随包固定清单。它们都不证明没有漏洞或完成设备验收。自建产物的 build-manifest 不等于完整发行清单，正式替换随包库时还要记录构建环境、官方提交和依赖声明。

## 导出与打包

npm run export:release 将白名单文件输出到新的 build/releases/cloudapi2-node-sdk-版本目录，默认包含预编译库。已存在目录时拒绝合并。npm pack 自动构建 TypeScript，包含 dist、原生依赖、示例和许可证。

所有普通源文件扫描敏感内容；只有固定清单及哈希对应的七个 ELF 和第三方源码归档允许作为二进制进入包。厂商库不能仅通过新增任意 .so 文件混入。发布名称/URL由仓库拥有者设定，private:true 防止误发 npm。
