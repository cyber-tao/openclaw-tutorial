# Session 会话管理

了解 OpenClaw 如何处理对话和上下文。

## 什么是会话 (Session)？

一个 **会话** 代表了 AI 与用户之间的对话上下文。会话维护以下内容：
- 对话历史
- 用户偏好
- 活跃工具和权限
- 上下文窗口状态

## 会话生命周期

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   已创建     │ ──▶ │    活跃      │ ──▶ │   已存档    │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │    已过期    │
                    └─────────────┘
```

## 会话命令

```bash
# 列出所有会话
openclaw sessions list

# 显示会话详情
openclaw sessions show <会话ID>

# 清除会话历史
openclaw sessions clear <会话ID>

# 删除会话
openclaw sessions delete <会话ID>

# 导出会话
openclaw sessions export <会话ID> > backup.json
```

## 会话配置

在你的 `config.json` 中配置会话行为：

```json
{
  "sessions": {
    "maxHistoryLength": 100,
    "expirationMs": 86400000,
    "contextWindow": "auto"
  }
}
```

## 多会话支持

OpenClaw 可以处理多个并发会话：

- **私聊会话 (DM)**：每个用户在每个渠道有一个独立会话
- **群聊会话**：群组共享的对话上下文
- **隔离会话**：用于专门任务的独立上下文

## 上下文管理

### 历史修剪

当上下文变得过大时：
1. 旧消息会被总结
2. 重要上下文将被保留
3. 系统提示词保持不变

### 内存优化

```bash
# 检查内存使用情况
openclaw status --verbose

# 压缩会话存储
openclaw sessions compact
```

## 最佳实践

1. **定期清理** - 定期存档旧会话
2. **导出重要对话** - 备份有价值的上下文
3. **监控上下文大小** - 过大的上下文会影响性能

::: info 会话存储
会话本地存储在 `~/.openclaw/sessions/` 目录下。每个会话都是一个独立的 JSON 文件。
:::
