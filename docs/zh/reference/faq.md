# 常见问题 (FAQ)

关于 OpenClaw 的常见问题解答。

## 通用问题

### 什么是 OpenClaw？

OpenClaw 是一个自托管的 AI 助手，它可以连接到你常用的消息平台（如 Telegram, Discord, WhatsApp 等），并通过集成各种工具提供智能对话和自动化能力。

### OpenClaw 是免费的吗？

是的！OpenClaw 是开源且免费使用的。你只需要为您选择的 AI 提供商（如 Anthropic, OpenAI 等）按其实际用量付费即可。

### OpenClaw 与 ChatGPT 有什么区别？

| 特性 | OpenClaw | ChatGPT |
|---------|----------|---------|
| 托管方式 | 自托管 (在你自己的设备上) | 云端托管 |
| 数据隐私 | 完全掌控，数据不外流 | 由 OpenAI 控制 |
| 消息集成 | 原生支持多渠道即时通讯 | 仅限网页或 API 接入 |
| 可定制性 | 深度开放，完全访问 | 相对有限 |
| 工具系统 | 极其丰富且可扩展 | 较为受限 |

### 支持哪些 AI 模型？

- Anthropic Claude 系列 (官方推荐)
- OpenAI GPT-4 系列
- Google Gemini 系列
- 通过 Ollama 运行的本地模型
- 各种兼容 OpenAI 格式的自定义提供商

## 安装问题

### 系统要求是什么？

- Node.js 22.x 或更高版本
- 至少 512MB RAM
- 支持 macOS, Linux, 或 Windows 系统

### 如何更新 OpenClaw？

```bash
npm update -g openclaw
# 或者使用自带命令
openclaw gateway update.run
```

### 可以在树莓派 (Raspberry Pi) 上运行吗？

完全可以！OpenClaw 在树莓派及其他 ARM 设备上运行非常流畅。你可以直接使用 ARM 构建版本或通过 npm 安装。

## 配置问题

### 如何添加多个消息渠道？

你可以分别添加每一个渠道：

```bash
openclaw channel add telegram --token "TOKEN1"
openclaw channel add discord --token "TOKEN2" --client-id "ID"
```

### 我可以为不同的任务使用不同的模型吗？

可以！在配置中设置多智能体路由即可：

```json
{
  "agents": {
    "main": {"model": "claude-3-5-sonnet"},
    "coder": {"model": "gpt-4-codex"}
  }
}
```

### 如何保护我的 API 密钥安全？

始终推荐使用环境变量：

```bash
export ANTHROPIC_API_KEY="你的密钥"
```

然后在配置文件中引用：
```json
{"apiKey": "${ANTHROPIC_API_KEY}"}
```

## 使用问题

### 如何清除对话历史？

在聊天中发送 `/reset` 命令，或者使用 CLI：

```bash
openclaw sessions clear <session-id>
```

### OpenClaw 可以上网吗？

可以！OpenClaw 内置了网页搜索和网页抓取工具。你只需让它搜索信息或直接提供 URL 即可。

### 如何设置自动化任务？

使用 Cron 定时任务：

```bash
openclaw cron add --name "daily-brief" \
  --schedule "0 9 * * *" \
  --task "发送每日简报"
```

### OpenClaw 可以访问我的本地文件吗？

可以，通过 `read` 和 `write` 工具实现。你可以通过配置文件精确控制哪些目录允许被访问。

## 故障排除

### 机器人对我的消息没有反应

1. 检查网关状态：`openclaw status`
2. 检查渠道状态：`openclaw channel status telegram`
3. 查看实时日志：`openclaw logs`

### 我遇到了 API 频率限制

减少发信频率或升级你的 AI 提供商付费套餐。请查阅对应提供商的 Rate Limit 政策。

### 内存占用过高

1. 清理过期的会话：`openclaw sessions clear`
2. 在配置中减小历史记录长度
3. 重启网关：`openclaw gateway restart`

### 工具无法正常工作

请检查配置中是否启用了该工具，以及你是否拥有执行该操作所需的系统权限。

## 隐私与安全

### 我的数据存储在哪里？

所有数据均本地存储在 `~/.openclaw/` 目录下。除了向你指定的 AI 提供商发起 API 请求外，没有任何数据会被发送到外部服务器。

### 可以在断网环境下使用吗？

大部分功能可以！你可以通过 Ollama 配合本地大模型使用。只有第三方消息渠道集成（如 Telegram）需要联网。

### 如何备份我的数据？

```bash
openclaw backup create
```

### 我的对话内容是私密的吗？

是的！你的对话历史仅保存在你自己的机器上。OpenClaw 官方不会收集或传输你的任何对话数据。

## 还有其他问题？

- 💬 加入我们的 [Discord 社区](https://discord.gg/clawd)
- 📖 阅读 [官方文档](https://docs.openclaw.ai)
- 🐛 在 [GitHub](https://github.com/openclaw/openclaw/issues) 提交反馈
