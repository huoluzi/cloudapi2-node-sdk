# Cloud API 2 Node.js SDK

独立的 DJI Cloud API 2 Node.js 绑定，以 Node-API 替换 Java/SWIG/JNI，复用官方 C/C++ 核心。运行时不需要 JVM。

**本项目由 AI 辅助编写，尚未完成真实飞行、全部设备功能及生产环境的实际验收测试。按现状提供，不提供任何保证；在适用法律允许的最大范围内，作者、维护者和贡献者不承担使用所致损失的责任。** 自动化及少量设备只读验证不等于生产验收，详见 [免责与验证范围](docs/disclaimer.md)。这是社区项目，未经 DJI 官方认证或背书。

## 官方代码基准

- 官方仓库：[dji-sdk/Cloud-API-2](https://github.com/dji-sdk/Cloud-API-2)。
- 锁定提交：**[79c6cc3c0021c7e72d5d94bb37b3dafb9fa50578](https://github.com/dji-sdk/Cloud-API-2/commit/79c6cc3c0021c7e72d5d94bb37b3dafb9fa50578)**，不自动跟随 main。
- 官方 Java SDK 3.3.7 / C++ 3.3.7.0；本项目 **0.2.0-rc.2 候选版**，原生绑定 API 4。
- 版本和内容摘要见 [upstream.lock.json](upstream.lock.json)。构建副本应用三处关闭/析构顺序修复，见 [兼容性](docs/compatibility.md)。

已映射 810 个公开业务签名：19 个根入口、54 个模块的 791 个签名。接口覆盖不代表所有设备动作已通过验收，也不承诺 Java 线程、异常及调度行为完全相同。

## 已知风险（使用前必读）

| 优先级 | 风险与当前边界 |
|---|---|
| P0 | 随包 `libcrypto.so.1.1` 标识为 OpenSSL 1.1.1f。1.1.1 系列已于 2023-09-11 停止公开安全维护；当前继续沿用 DJI 官方原版依赖，此风险尚未消除。见 [OpenSSL 官方公告](https://openssl-library.org/post/2023-09-11-eol-111/)。 |
| P1 | C/C++ 或闭源库发生崩溃，可能使整个 Node 进程退出。生产集成应将 SDK 放在独立进程/服务中，通过 RPC/IPC 与业务后台通信。详见 [进程隔离](docs/compatibility.md#原生崩溃与进程隔离)。 |
| P1 | 回调采用有界队列；积压达到上限会丢弃新事件或视频帧，不会自动重传。不能作为无损事件通道。详见 [数据丢失边界](docs/compatibility.md#回调队列与数据丢失)。 |

上述提示不是风险修复或生产验收结论。Demo 目前与原生 SDK 在同一进程运行。

当前不自行替换 DJI 官方加密依赖，保持原字节和哈希。包内动态库通过 `$ORIGIN` 加载，升级宿主机 OpenSSL 不会自动更新它们。没有证据表明这份官方预编译库持续获得安全回补；版本字符串本身也不足以判断某个具体漏洞能否被利用。

## 快速开始（无需 C++ 编译）

**默认带 Ubuntu 22.04 x64 预编译版本**：native/linux-x64/ 包含 .node、libdrtc/libdrpc 和其余运行依赖；无安装时下载二进制的脚本。文件哈希、系统要求及构建环境见 [预编译说明](docs/prebuilt.md)。

在 Ubuntu x64，使用 Node.js 22 或 24：

```bash
npm ci
npm run build
npm run verify:prebuilt
node examples/diagnostics.mjs
```

build 只编译 TypeScript。通过本地 npm tarball 安装时已经带 dist，消费方无需构建。npm run verify:prebuilt 在 Linux 实际加载随包库，在其他平台只核对哈希。

| 环境 | 支持情况 |
|---|---|
| Ubuntu 22.04 x64 / glibc，Node 22、24 | 预编译运行目标 |
| Windows + WSL2 Linux Node，或远程 Ubuntu | Windows 开发路径 |
| Windows 原生 node.exe | 可以编辑、编译 TypeScript、运行非原生测试；不能加载 Linux 原生库 |
| macOS、ARM64、Alpine/musl、worker_threads | 当前不支持原生 SDK |

其他 Linux 发行版必须满足动态符号和系统依赖，不能仅凭 x64 判断兼容。Ubuntu 可安装/更新 libstdc++6、libgcc-s1、ca-certificates；完整说明见 [预编译版本](docs/prebuilt.md)。

## 配置与示例

将 examples/config.example.json 复制到仓库外的私有目录填写 HTTP、通知地址和鉴权信息：

```bash
export CLOUDAPI2_CONFIG=/absolute/private/config.json
node examples/device-list.mjs
node examples/devices.mjs
```

位置监听默认持续 15 秒，或 Ctrl+C 结束；退出时取消监听并关闭 SDK。[示例目录](examples/README.md) 另有电量/姿态/速度、在线状态/HMS、航线、媒体、任务查询、SEI 编解码及诊断示例。示例不会发送飞行、机场控制或删除指令。

Java 方法名、参数及回调顺序在公开门面保留。例如设备列表回调是 data/error，航线等查询是 error/result，不能统一假设：

```js
const { FlightHubSDK } = require('cloudapi2-node-sdk');
// 先设置鉴权头并 initialize，详见 examples/common.mjs。
const manager = FlightHubSDK.getWorkspaceInstance()?.getDeviceManageModule();
if (!manager) throw new Error('设备模块不可用');
manager.getDeviceList((devices, error) => {
  if (error.errorCode !== 0) {
    console.error('查询失败', error.errorCode);
    return;
  }
  console.log('设备拓扑数量', devices.length);
});
```

Java Bean 使用普通对象；枚举使用数字；long 使用 bigint 或安全整数；byte[] 使用 Buffer/Uint8Array。JSON 序列化需处理 bigint。回调在 Node 事件循环交付；订阅须成对取消。视频队列总积压载荷上限为 64 MiB，丢弃计数可由 getDiagnostics() 观察。

## 自行重编（可选）

取得上述提交的完整官方 SDK（包括依赖），只在需要修改 C++ 或更换目标环境时构建：

```bash
export CLOUDAPI2_SDK_ROOT=/absolute/path/to/official/sdk
export NODE_INCLUDE_DIR=/absolute/path/to/node/include/node
npm run audit:check
npm run doctor
CLOUDAPI2_NATIVE_OUTPUT="$PWD/native/linux-x64-next" npm run build:native
node scripts/verify-native.mjs native/linux-x64-next
```

默认加载随包 native/linux-x64/；通过 CLOUDAPI2_NODE_BINDING 指向新 .node 可切换自行构建版本。构建拒绝覆盖已有目录；不要在线覆盖正在使用的库。[构建指南](docs/building.md)。

## 许可、发布与文档

项目代码与官方源码一致采用 **Apache-2.0**。随包闭源库和第三方组件保留各自许可，不因本项目开源而改为 Apache。见 [许可说明](docs/licensing.md)、[NOTICE](NOTICE)、[LICENSE](LICENSE)。Java JAR、完整官方源码及 Skeleton 前端不随包附带。

- [Skeleton Node Demo](demo/README.md)：官方 Skeleton 后端的 Node 集成示例。
- [验证方法](docs/testing.md)、[发布审查](docs/release-review.md)、[变更记录](CHANGELOG.md)。
- [贡献指南](CONTRIBUTING.md)、[安全问题](SECURITY.md)、[AI 编写及免责说明](docs/disclaimer.md)。

公开仓库应来自 npm run export:release 生成的白名单目录，默认包括源码、示例、Ubuntu 预编译库和依赖声明；export:source 是同一命令的历史别名。现场配置、设备标识、原始日志和私有测试报告不导出。private:true 保持开启，防止误发 npm；不影响 GitHub 开源及本地 npm pack。
