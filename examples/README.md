# 示例

示例由 AI 辅助编写，尚未完成各功能的全面实机验收。先阅读 [免责与验证范围](../docs/disclaimer.md)。以下示例只查询、订阅或执行本地编解码，不起飞、不创建或执行任务、不删除媒体。

在 Ubuntu x64 / WSL2 Linux Node.js 22 或 24 中，先 npm ci、npm run build、npm run verify:prebuilt。将 config.example.json 复制到仓库外的私有目录填写；不要将凭据提交到 Git。

```bash
export CLOUDAPI2_CONFIG=/absolute/private/config.json
node examples/device-list.mjs
```

| 文件 | 说明 |
|---|---|
| diagnostics.mjs | 加载预编译库，打印版本和队列诊断；无需配置/设备 |
| device-list.mjs | 查询设备拓扑；演示 data/error 回调顺序 |
| devices.mjs | 查询在线无人机、订阅位置、定时取消并关闭 |
| telemetry.mjs | 同时监听位置、电量、姿态、速度，保存并取消全部监听 ID |
| device-events.mjs | 在线状态与 HMS 告警；没有新事件时可能没有输出 |
| waylines.mjs | 分页查询航线，演示 error/result 回调顺序 |
| media.mjs | 分页查询媒体，演示 bigint JSON 序列化 |
| flight-tasks.mjs | 分页查询任务，可设置 TASK_TYPE；不会创建或执行任务 |
| sei.mjs | 使用本地测试帧进行 SEI 编解码；无需配置/设备，初始化地址固定回环 |
| common.mjs | 共享初始化、超时、错误处理和清理工具，不单独运行 |

设备监听默认选列表中首台在线无人机；可指定 DEVICE_SN。监听默认持续 15 秒，也可 Ctrl+C 结束：

```bash
DEVICE_SN=your-device-sn DURATION_SECONDS=30 node examples/telemetry.mjs
node examples/device-events.mjs
node examples/waylines.mjs
node examples/media.mjs
TASK_TYPE=0 node examples/flight-tasks.mjs
node examples/sei.mjs
```

任务类型按官方接口定义与实际工作区设置；不支持的参数或服务端拒绝会打印 SDK/HTTP/业务错误码。查询超时只结束本示例的等待，不代表请求已经在服务器撤销。示例只展示第一页，生产代码应按结果中的 pagination/nextIndex 继续分页并设置合理上限。

如果需要保留完整 SN、位置或业务响应日志，请放在私有位置；示例的控制台输出可能包含现场信息。Windows node.exe 可运行 npm run verify:prebuilt 做哈希检查，但实际示例需 Linux 运行时。
