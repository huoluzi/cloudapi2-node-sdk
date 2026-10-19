# 许可证与依赖交付

本项目代码统一采用与官方公开源码一致的 **Apache License 2.0**，完整文本见 LICENSE。官方派生文件保留原版权和修改说明；归属见 NOTICE、LICENSES/upstream-NOTICE.txt。package.json 中的 Apache-2.0 描述项目代码，不能替代随包依赖各自的许可。

## 闭源库

发行包按官方依赖布局附带 libdrtc_device_sdk.so 和 libdrpc.so，保持原字节不变。官方 sdk/NOTICE 明确将它们排除在 Apache-2.0 之外；官方第三方声明将其列为按 DJI 自有条款分发、DJI 保留权利的专有组件。

这两个库仍然闭源。本项目不授予其源码访问权或额外权利，也不将项目的 Apache-2.0 适用范围扩大到它们。完整原文保存在 LICENSES/upstream-NOTICE.txt 与 LICENSES/third-party/README.md.txt。随包附带不意味着已经取得独立的 DJI 授权证明；使用者和再分发者应确认适用的 DJI 条款。

## 开源依赖

| 组件 | 官方随包许可说明 |
|---|---|
| OpenSSL 1.1.1f | OpenSSL/SSLeay 历史双许可 |
| libwebsockets 2.4.2 | LGPL-2.1 + warmcat 例外，动态链接 |
| Paho MQTT C 1.3.14 | EPL-2.0 或 EDL-1.0；此包选择 EDL-1.0 分发，保留完整原文 |
| libwebrtc branch 6477、Abseil | BSD-3-Clause、Apache-2.0 等，保留上游声明 |
| AWS C++ S3、libcurl、plog、AIGCJson、RapidJSON、json11 | Apache-2.0、curl、MIT 等原许可 |

许可证和原始归属材料随包放在 LICENSES/third-party/。本项目基于部分 libwebsockets 项目成果（https://libwebsockets.org）；其完整 v2.4.2 源码归档与官方构建脚本记录在 third_party/，来源和哈希见 sources.json。动态链接允许替换兼容库，不对调试修改后的 LGPL 组件施加反向工程限制。

完整官方源码未内嵌；从 README 指向的官方锁定提交取得。预编译文件及哈希见 native/linux-x64/build-manifest.json。本包不声称重新授予所有依赖许可、完成全部供应链漏洞审计或证明逐字节可重现构建。

AI 编写和实际验证边界见 [免责说明](disclaimer.md)。免责声明遵循 [Apache-2.0 第 7、8 条](https://www.apache.org/licenses/LICENSE-2.0)，不免除适用法律不可排除的责任。
