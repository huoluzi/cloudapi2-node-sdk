# GitHub 与 npm 联动发布

仓库：https://github.com/huoluzi/cloudapi2-node-sdk 。npm 包名：`cloudapi2-node-sdk`。

候选版通过 `npm install cloudapi2-node-sdk@next --registry=https://registry.npmjs.org` 安装。正式版发布后，`npm install cloudapi2-node-sdk` 使用 `latest`。安装包带 JavaScript、TypeScript 声明和 Ubuntu x64 原生库；Windows 原生 Node 仍不能加载 Linux 库，需 WSL2 或远程 Linux。

## 日常发布

1. 在公开 Git 仓库完成修改，更新 CHANGELOG，运行检查并提交。私有开发目录须先按白名单导出，禁止直接提交现场配置。
2. 递增版本：候选版运行 `npm version prerelease --preid=rc`，正式版运行例如 `npm version 0.2.0`。命令更新 package.json / package-lock.json，生成提交及 `v版本号` 标签；执行前工作区应干净。
3. 运行 `git push origin main --follow-tags`，等待 Source and package checks 通过。
4. 在 GitHub 的 Releases 中创建对应标签的 Release，填写说明后发布。包含 `-rc.N` 的版本必须勾选 **Set as a pre-release**；正式版不要勾选。
5. `Publish npm and release assets` 自动执行六组源码/安装包检查，校验 Release 标签与 package.json 版本一致，通过 npm OIDC 发布，再校验 registry 包完整性、安装并加载 Linux SDK，最后上传 ZIP、相同的 npm TGZ 和 SHA-256 文件到该 Release。

候选版自动发布到 `next`，正式版发布到 `latest`。单独推送提交或标签不会发布 npm；发布 GitHub Release 才触发。必须等发布工作流成功后，才能通知用户 npm 版本可用。

## 首次配置

npm 可信发布要求包已存在：首次由维护者登录 npm，在检查通过后手动发布一个候选版创建包。之后在 npm 包 Settings → Trusted Publisher 设置：

| 字段 | 值 |
| --- | --- |
| Provider | GitHub Actions |
| Organization or user | `huoluzi` |
| Repository | `cloudapi2-node-sdk` |
| Workflow filename | `npm-publish.yml` |
| Environment | 留空 |
| Allowed actions | 启用直接 `npm publish`；本流程不需要 dist-tag 管理权限 |

工作流仅给发布任务 `id-token: write`，不使用 `NPM_TOKEN`。npm 首次配置需要维护者登录及两步验证；配置后必须在两天内成功发布一个新版本，才能完成绑定，不能拿已发布版本重新发布来验证。首次手动引导版本和后续 OIDC 版本应使用不同版本号。

配置依据：[npm trusted publishing](https://docs.npmjs.com/trusted-publishers/)、[npm trust 首次配置要求](https://docs.npmjs.com/cli/v11/commands/npm-trust/)。平台规则可能变化，重新配置时应核对官方文档。克隆到其他 GitHub 仓库时，需要同时调整 package.json 的 repository、工作流仓库限制及 npm 的可信发布绑定。

## 失败与重试

- 检查不通过时不执行 npm publish。修复代码后使用新版本和新标签，保留已公开版本。
- 登录授权或网络导致失败时，在 Actions 中重新运行失败任务，或手动运行 `Publish npm and release assets`，填已有公开 Release 的标签。
- npm 接受上传后，公开索引和下载接口可能延迟数分钟才可用；首次创建包时，页面还可能临时显示 `0.0.0-stage`。工作流会限时等待版本和索引同步，再核验哈希并安装。等待超时不代表上传失败，不要立即重复发布或改版本；先确认 registry 状态，再重跑原 Release 的工作流。
- npm 包已发布但后续步骤失败时，重试会比较 registry 的完整性与本次包；相同才跳过重复发布并补齐附件，不会覆盖 npm 版本。字节不同时必须递增版本。
- 不要移动或覆盖已公开的 Git 标签，也不要取消发布后试图复用 npm 版本号。
- 如需重新编译原生库，先完成 Linux / 官方 Java 对照、来源和哈希更新；发布流程不会自动重编 C++。

GitHub Release 附件与 npm 的安装包会共用同一个 TGZ；自动生成的 GitHub Source code 下载与源码 ZIP 不包含构建后的 dist，消费项目优先安装 npm 包。
