# 渠道配置

将 OpenClaw 连接到你喜欢的消息平台。

## 支持的渠道

| 渠道 | 状态 | 功能特性 |
|---------|--------|----------|
| Telegram | ✅ 完整支持 | 消息、文件、内联键盘 |
| Discord | ✅ 完整支持 | 消息、嵌入、线程、语音 |
| WhatsApp | ✅ 完整支持 | 消息、媒体、交互式按钮 |
| Signal | ✅ 完整支持 | 消息、附件 |
| iMessage | ✅ 完整支持 | 消息、附件 (仅限 macOS) |
| 飞书 (Feishu) | ✅ 完整支持 | 消息、卡片、交互式元素 |
| Slack | ✅ 完整支持 | 消息、区块、线程 |

## 配置方法

### Telegram 设置

1. 通过 [@BotFather](https://t.me/botfather) 创建机器人
2. 获取你的 Bot Token
3. 添加到配置中：

```bash
openclaw channel add telegram --token "你的_BOT_TOKEN"
```

### Discord 设置

1. 在 [Discord 开发者门户](https://discord.com/developers/applications) 中创建应用
2. 开启必要的权限 (Intents)
3. 将机器人邀请到你的服务器
4. 添加到配置中：

```bash
openclaw channel add discord --token "你的_BOT_TOKEN" --client-id "你的_CLIENT_ID"
```

### WhatsApp 设置

1. 注册 [Meta 商业 API](https://developers.facebook.com/docs/whatsapp)
2. 创建 WhatsApp 商业账号
3. 配置 Webhook URL
4. 添加到配置中：

```bash
openclaw channel add whatsapp --phone-id "你的_PHONE_ID" --token "你的_ACCESS_TOKEN"
```

## 渠道管理

```bash
# 列出所有渠道
openclaw channel list

# 检查渠道状态
openclaw channel status telegram

# 重启渠道
openclaw channel restart discord

# 移除渠道
openclaw channel remove signal
```

## 最佳实践

1. **从单一渠道开始** - 熟练掌握一个后再添加更多
2. **彻底测试** - 尽可能使用测试环境
3. **监控速率限制** - 每个平台都有不同的限制
4. **备份 Token** - 安全地存储凭据

## 故障排除

### 机器人没有响应

```bash
# 检查日志
openclaw logs --channel telegram

# 验证配置
openclaw config get channels.telegram
```

### Webhook 问题

1. 验证 URL 是否可公开访问
2. 检查 SSL 证书是否有效
3. 确认 Token 是否匹配

::: tip 需要更多渠道？
我们正在积极开发更多平台支持。请关注我们的 [GitHub](https://github.com/openclaw/openclaw) 获取最新动态！
:::
