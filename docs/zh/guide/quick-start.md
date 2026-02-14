# 快速开始

只需几分钟就能让你的 OpenClaw 助手运行起来。本指南将引导你完成初始设置和第一次对话。

## 初始设置

### 第一步：初始化 OpenClaw

运行初始化向导来设置配置：

```bash
openclaw init
```

向导将引导你完成：

1. **AI 提供商选择** - 选择你的 AI 模型提供商
2. **渠道设置** - 配置你的消息渠道
3. **安全设置** - 设置白名单和配对

::: code-group
```bash [交互式设置]
? 选择 AI 提供商: (使用方向键)
❯ Anthropic (Claude)
  OpenAI (GPT)
  Local (Ollama)

? 现在配置渠道？(Y/n)
? 选择渠道: (使用方向键)
❯ Telegram
  WhatsApp
  Discord
  暂时跳过
```
:::

### 第二步：配置 AI 提供商

选择你的 AI 提供商并添加 API 密钥：

```bash
# 使用 Anthropic Claude（推荐）
openclaw config set ai.provider anthropic
openclaw config set ai.apiKey sk-ant-xxxxx

# 使用 OpenAI GPT
openclaw config set ai.provider openai
openclaw config set ai.apiKey sk-xxxxx
```

::: warning API 密钥
保护你的 API 密钥安全！永远不要将它们提交到版本控制。改用环境变量：

```bash
export ANTHROPIC_API_KEY=sk-ant-xxxxx
export OPENAI_API_KEY=sk-xxxxx
```
:::

### 第三步：启动 OpenClaw

启动 OpenClaw 服务器：

```bash
openclaw start
```

你会看到类似这样的输出：

```
🦞 OpenClaw v1.0.0 启动中...
✓ 配置已加载
✓ AI 提供商已连接
✓ Web UI 可用: http://localhost:3000
✓ Telegram 渠道已连接

OpenClaw 已就绪！
```

## 连接你的第一个渠道

### Telegram（推荐新手使用）

最容易设置的渠道：

1. **创建机器人**
   - 打开 Telegram 并搜索 `@BotFather`
   - 发送 `/newbot` 并按照说明操作
   - 保存机器人令牌

2. **配置 OpenClaw**

   ```bash
   openclaw channel add telegram \
     --token "你的机器人令牌"
   ```

3. **测试连接**
   - 在 Telegram 上找到你的机器人
   - 发送 `/start` 开始

### WhatsApp

用于 WhatsApp Business API：

```bash
openclaw channel add whatsapp \
  --phone-id "你的电话ID" \
  --business-account-id "你的商业账户ID" \
  --token "你的访问令牌"
```

### Discord

创建 Discord 机器人：

1. 访问 [Discord 开发者门户](https://discord.com/developers/applications)
2. 创建新应用
3. 创建机器人并获取令牌
4. 将机器人添加到你的服务器

```bash
openclaw channel add discord \
  --token "你的机器人令牌" \
  --client-id "你的客户端ID"
```

## 第一次对话

### 通过 Telegram/Discord

直接向你的机器人发送消息：

```
你: 你好！你能帮我做什么？

OpenClaw: 你好！我是由 OpenClaw 驱动的 AI 助手。我可以帮你：
- 回答问题
- 管理任务
- 网络搜索
- 以及更多！

你想了解什么？
```

### 通过 Web UI

1. 在浏览器中打开 `http://localhost:3000`
2. 点击"新建对话"
3. 开始聊天！

## 基本命令

这里有一些有用的入门命令：

| 命令 | 描述 |
|------|------|
| `/start` | 初始化对话 |
| `/help` | 显示可用命令 |
| `/reset` | 清除对话历史 |
| `/tools` | 列出可用工具 |
| `/status` | 显示系统状态 |

## 验证你的设置

运行诊断命令验证一切正常：

```bash
openclaw doctor
```

预期输出：

```
✓ Node.js 版本: v22.x.x
✓ OpenClaw 版本: 1.0.0
✓ 配置有效
✓ AI 提供商已连接 (Anthropic)
✓ 渠道: 1 个活跃 (Telegram)
✓ Web UI 运行在端口 3000

所有系统运行正常！🎉
```

## 下一步

恭喜！🎉 你的 OpenClaw 助手现在正在运行。接下来可以探索：

1. **[基础使用](/zh/guide/basic-usage)** - 了解日常操作
2. **[渠道配置](/zh/core/channels)** - 设置更多渠道
3. **[工具系统](/zh/core/tools)** - 探索可用工具
4. **[安全配置](/zh/core/security)** - 保护你的安装

::: tip 专业提示
将 Web UI `http://localhost:3000` 加入书签，方便访问设置和对话历史！
:::
