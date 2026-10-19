# 贡献指南

使用 Node.js 22，运行 npm ci、npm run build、npm test、npm run check:public、npm run test:package。原生修改还要运行 Linux 构建和 docs/testing.md 的 Java 对照。

完整生成链可通过 npm run generate 执行；它先核对官方源码锁，再依序生成并恢复许可证声明。

generated.ts、java-types.ts、java-contract.ts、dto-schema.ts、native/generated 和 test/generated 来自锁定官方版本。修改生成器，然后依次运行 generate-modules、generate-java-contract、generate-dto-schema，构建 TS，再运行 generate-java-types、generate-contract-probes、license-headers，再次构建和测试。所有脚本位于 scripts/，在仓库根目录运行。

不要手改生成文件掩盖映射错误，不要用假成功替代未实现接口。升级官方 SDK 先审查差异、更新审计锁和生成器，再重新执行 Java/Node 对照；保留已有许可证和来源声明。

提交的测试不应触发真实设备动作。不要提交私有配置、日志、凭据或用户/设备数据。预编译库只允许更新固定清单中的文件，须同步来源、哈希和验证结果。报告包含最小复现、平台/Node/官方 SDK 版本、错误码和已脱敏日志即可。

贡献按对应文件的许可证提交。项目代码统一 Apache-2.0，第三方组件保留原许可证。仓库目前不接受以接口覆盖率代替端到端验证的稳定版声明。
