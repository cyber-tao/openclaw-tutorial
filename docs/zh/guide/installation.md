# 安装与配置

在你的系统上安装并运行 OpenClaw。选择你喜欢的安装方式。

## 系统要求

安装前，请确保你的系统满足以下要求：

| 要求 | 最低 | 推荐 |
|------|------|------|
| Node.js | 22.0.0 | 22.x LTS |
| 内存 | 512MB | 2GB+ |
| 存储空间 | 500MB | 2GB+ |
| 操作系统 | Linux, macOS, Windows | Linux/macOS |

::: warning Node.js 版本
OpenClaw 需要 **Node.js 22 或更高版本**。使用旧版本会导致错误。
:::

## 检查 Node.js 版本

```bash
node --version
# 预期输出: v22.x.x
```

如果需要升级，我们推荐使用 [nvm](https://github.com/nvm-sh/nvm) 或 [fnm](https://github.com/Schniz/fnm)：

```bash
# 使用 nvm
nvm install 22
nvm use 22

# 使用 fnm
fnm install 22
fnm use 22
```

## 安装方式

### 方式 1：npm（推荐）

最简单的全局安装方式：

```bash
npm install -g openclaw
```

### 方式 2：pnpm

如果你更喜欢 pnpm：

```bash
pnpm install -g openclaw
```

### 方式 3：Docker

用于容器化部署：

```bash
# 拉取镜像
docker pull openclaw/openclaw:latest

# 运行容器
docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -v openclaw-data:/app/data \
  openclaw/openclaw:latest
```

### 方式 4：从源码安装

用于开发或自定义：

```bash
# 克隆仓库
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# 安装依赖
pnpm install

# 构建项目
pnpm build

# 全局链接
pnpm link --global
```

## 验证安装

安装后，验证 OpenClaw 是否正常工作：

```bash
openclaw --version
# 预期: x.x.x

openclaw --help
# 显示可用命令
```

## 目录结构

安装后，OpenClaw 使用以下目录：

```
~/.openclaw/
├── config.json       # 主配置文件
├── sessions/         # 会话数据
├── logs/            # 日志文件
└── skills/          # 已安装的技能
```

## 环境变量

OpenClaw 可以通过环境变量配置：

| 变量 | 描述 | 默认值 |
|------|------|--------|
| `OPENCLAW_CONFIG_DIR` | 配置目录 | `~/.openclaw` |
| `OPENCLAW_LOG_LEVEL` | 日志级别 | `info` |
| `OPENCLAW_PORT` | Web UI 端口 | `3000` |

## 安装故障排除

### 权限被拒绝

如果 npm 出现权限错误：

```bash
# 方式 1: 使用 sudo (macOS/Linux)
sudo npm install -g openclaw

# 方式 2: 修复 npm 权限
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# 添加到你的 shell 配置: export PATH=~/.npm-global/bin:$PATH
```

### Node 版本问题

```bash
# 检查版本
node --version

# 必须是 22.x 或更高
# 如果不是，使用 nvm 或 fnm 升级
```

### Docker 问题

```bash
# 检查 Docker 是否运行
docker info

# 查看日志
docker logs openclaw

# 重启容器
docker restart openclaw
```

## 下一步

现在 OpenClaw 已安装，继续阅读[快速开始](/zh/guide/quick-start)指南来配置和启动你的 AI 助手！

::: tip 需要帮助？
加入我们的 [Discord 社区](https://discord.gg/clawd)获取支持和讨论。
:::
