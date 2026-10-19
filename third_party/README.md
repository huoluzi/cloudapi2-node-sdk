# 随包依赖源码

本项目使用 libwebsockets v2.4.2（LGPL-2.1 及 warmcat 例外）。此目录附带其完整上游源码归档，tag 对应提交为 8964ce9db75a98e463dfafd2e89f2bc8a95ec6ed；来源 URL、大小和 SHA-256 见 sources.json。官方 SDK 的 third_party/websockets/README.md 指明其 Linux 预编译库以此 tag 为准。

build_libwebsockets_linux_x86_64.sh 原样保留官方 Linux 构建脚本作为构建选项记录；它依赖官方 SDK 的目录结构、OpenSSL 头文件/库及 Git tag，不能直接在本目录执行。需要重编时在匹配版本的官方 SDK 中还原源码目录及 v2.4.2 tag，按官方脚本构建。归档也包含上游 CMake 构建文件和文档。

动态库可以在服务停止后替换为兼容版本；不限制为调试修改后的 LGPL 组件而进行的反向工程。官方二进制未被本项目修改，源码归档并不表示已完成逐字节可重现构建。完整许可文本见 ../LICENSES/third-party/。
