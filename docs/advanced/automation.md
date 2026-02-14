# Automation

Automate repetitive tasks with OpenClaw.

## Overview

OpenClaw supports various automation methods:
- **Cron Jobs**: Scheduled tasks
- **Webhooks**: Trigger on external events
- **Heartbeats**: Periodic health checks
- **Event Handlers**: React to messages

## Cron Jobs

### Creating Jobs

```bash
# Run a task every hour
openclaw cron add --name "hourly-report" \
  --schedule "0 * * * *" \
  --task "Summarize today's activity"

# Run at specific time
openclaw cron add --name "morning-brief" \
  --schedule "0 9 * * *" \
  --task "Send morning briefing"
```

### Managing Jobs

```bash
# List all jobs
openclaw cron list

# Enable/disable job
openclaw cron enable hourly-report
openclaw cron disable hourly-report

# Run job immediately
openclaw cron run hourly-report

# Delete job
openclaw cron remove hourly-report
```

### Schedule Syntax

Uses standard cron syntax:

```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6)
│ │ │ │ │
* * * * *
```

Examples:
- `*/15 * * * *` - Every 15 minutes
- `0 9 * * 1-5` - 9 AM on weekdays
- `0 0 1 * *` - First day of month

## Webhooks

### Setup

```bash
# Create webhook endpoint
openclaw webhook create --path "/my-webhook" --secret "my-secret"

# Get webhook URL
openclaw webhook url
# https://your-domain.com/webhooks/my-webhook
```

### Handler Configuration

```json
{
  "webhooks": {
    "/my-webhook": {
      "secret": "my-secret",
      "action": "notify",
      "message": "Webhook received: {payload}"
    }
  }
}
```

## Heartbeats

Periodic system checks:

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

## Event Handlers

React to messages and events:

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

## Automation Examples

### Daily Summary
```bash
openclaw cron add --name "daily-summary" \
  --schedule "0 20 * * *" \
  --task "Generate daily summary and send to Telegram"
```

### Server Monitoring
```bash
openclaw cron add --name "server-check" \
  --schedule "*/5 * * * *" \
  --task "Check server health and alert if issues"
```

### Backup Reminder
```bash
openclaw cron add --name "backup-reminder" \
  --schedule "0 10 * * 0" \
  --task "Remind about weekly backup"
```

## Best Practices

1. **Test jobs first** - Run manually before scheduling
2. **Handle failures** - Configure retry logic
3. **Monitor execution** - Check job logs regularly
4. **Set reasonable intervals** - Don't overload system

::: warning Rate Limits
Be mindful of API rate limits when scheduling frequent tasks.
:::
