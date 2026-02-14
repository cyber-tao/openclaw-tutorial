# 自动化

使用 OpenClaw 自动化重复性任务。

## 概览

OpenClaw 支持多种自动化方式：
- **Cron 任务**：定时执行的任务
- **Webhooks**：由外部事件触发
- **Heartbeats**：周期性系统健康检查
- **事件处理器**：对特定消息做出反应

## Cron 定时任务

### 创建任务

```bash
# 每小时运行一次任务
openclaw cron add --name "hourly-report" \
  --schedule "0 * * * *" \
  --task "总结今日活动"

# 在特定时间运行
openclaw cron add --name "morning-brief" \
  --schedule "0 9 * * *" \
  --task "发送早间简报"
```

### 管理任务

```bash
# 列出所有任务
openclaw cron list

# 启用/禁用任务
openclaw cron enable hourly-report
openclaw cron disable hourly-report

# 立即运行任务
openclaw cron run hourly-report

# 删除任务
openclaw cron remove hourly-report
```

### Schedule 语法

使用标准 cron 语法：

```
┌───────────── 分钟 (0 - 59)
│ ┌───────────── 小时 (0 - 23)
│ │ ┌───────────── 每月几号 (1 - 31)
│ │ │ ┌───────────── 月份 (1 - 12)
│ │ │ │ ┌───────────── 星期几 (0 - 6, 0 是周日)
│ │ │ │ │
* * * * *
```

示例：
- `*/15 * * * *` - 每 15 分钟
- `0 9 * * 1-5` - 工作日早上 9 点
- `0 0 1 * *` - 每月 1 号

## Webhooks

### 设置

```bash
# 创建 Webhook 端点
openclaw webhook create --path "/my-webhook" --secret "my-secret"

# 获取 Webhook URL
openclaw webhook url
# https://your-domain.com/webhooks/my-webhook
```

### 处理器配置

```json
{
  "webhooks": {
    "/my-webhook": {
      "secret": "my-secret",
      "action": "notify",
      "message": "收到 Webhook 消息: {payload}"
    }
  }
}
```

## Heartbeats (心跳检测)

周期性的系统自检：

```json
{
  "heartbeat": {
    "intervalMs": 60000,
    "checks": [
      "disk-space",
      "memory-usage",
      "api-connectivity"
    ]
  }
}
```

## 事件处理器 (Event Handlers)

对消息和事件做出响应：

```json
{
  "handlers": {
    "onMessage": {
      "filter": "urgent|important",
      "action": "priority-notify"
    },
    "onError": {
      "action": "log-and-alert"
    }
  }
}
```

## 自动化示例

### 每日总结
```bash
openclaw cron add --name "daily-summary" \
  --schedule "0 20 * * *" \
  --task "生成每日邮件、日历和任务总结并发送到 Telegram"
```

### 服务器监控
```bash
openclaw cron add --name "server-check" \
  --schedule "*/5 * * * *" \
  --task "检查服务器健康状况，如有问题立即报警"
```

### 备份提醒
```bash
openclaw cron add --name "backup-reminder" \
  --schedule "0 10 * * 0" \
  --task "每周日提醒进行数据备份"
```

## 最佳实践

1. **先手动测试** - 在加入定时任务前先手动运行验证
2. **处理失败情况** - 配置重试逻辑
3. **监控执行情况** - 定期检查任务日志
4. **设置合理的间隔** - 避免系统负载过高

::: warning 速率限制
在安排高频任务时，请留意 AI 提供商的 API 速率限制。
:::
