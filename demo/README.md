# Node Skeleton Demo

参照官方 Skeleton 的 Node HTTP 后端，API 前缀 /pf-devkit/ai-plugin/skeleton。直接调用 Node 原生 SDK，运行时无需 Java。官方前端静态文件需另行构建并通过 NODE_DEMO_WEB_ROOT 指定。

## 初始化和启动

先完成 npm ci、npm run build、npm run verify:prebuilt；默认使用随包 Ubuntu x64 原生库，无需再次编译 C++。复制 examples/config.example.json 到私有目录填写配置。使用终端交互创建首个管理员，不设置默认密码，也不把密码作为命令行参数：

```bash
NODE_DEMO_RUNTIME=/absolute/private/runtime node scripts/create-demo-admin.mjs
CLOUDAPI2_CONFIG=/absolute/private/config.json \
NODE_DEMO_RUNTIME=/absolute/private/runtime \
NODE_DEMO_WEB_ROOT=/absolute/official-skeleton-web-dist \
NODE_DEMO_HOST=127.0.0.1 NODE_DEMO_PORT=8087 \
node demo/server.mjs
```

默认关闭注册。需要审核注册流程时显式设置 NODE_DEMO_REGISTRATION=true；初始化前不要开放 HTTP 注册，首位用户会被设为管理员。默认监听回环。配置、用户存储和日志不可放在前端静态目录。

用户/飞行区域使用独立 JSON 存储，未迁移官方 MySQL 数据。TCAS 是进程内配置；官方标为 _mock 的看板字段保留标识。Chat 功能未实现。业务查询走真实 C++ SDK，SDK 错误不会伪装成功。

67 条业务路由的存在不表示每条都有完整端到端验收。设备缓存目前主要聚合位置 OSD；电池、姿态、HMS 的 SDK 能力与 Demo 完整聚合是两项不同工作。

本 Demo 仍是集成示例，不作为经过完整生产安全与持久化验收的业务系统。实际产品需补充权限边界、持久化/备份、速率限制、审计和高可用。SDK 发布审查见 ../docs/release-review.md。