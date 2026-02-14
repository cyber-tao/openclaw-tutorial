# 配置参考手册

OpenClaw 完整配置选项说明。

## 配置文件路径

主配置文件位于：`~/.openclaw/config.json`

## 完整配置结构示例

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "${ANTHROPIC_API_KEY}",
      "model": "claude-3-5-sonnet-20241022"
    },
    "openai": {
      "apiKey": "${OPENAI_API_KEY}",
      "model": "gpt-4-turbo"
    }
  },
  "agents": {
    "main": {
      "model": "claude-3-5-sonnet-20241022",
      "systemPrompt": "你是一个乐于助人的 AI 助手。"
    }
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "${TELEGRAM_BOT_TOKEN}"
    },
    "discord": {
      "enabled": true,
      "token": "${DISCORD_BOT_TOKEN}",
      "clientId": "${DISCORD_CLIENT_ID}"
    }
  },
  "gateway": {
    "port": 3000,
    "token": "${GATEWAY_TOKEN}",
    "allowedIPs": ["127.0.0.1"]
  },
  "sessions": {
    "maxHistoryLength": 100,
    "expirationMs": 86400000
  },
  "tools": {
    "enabled": ["read", "write", "exec", "web_search"],
    "disabled": [],
    "requireConfirmation": ["exec", "write"]
  },
  "logging": {
    "level": "info",
    "file": "~/.openclaw/logs/openclaw.log",
    "maxSize": "10M",
    "maxFiles": 5
  },
  "cron": {
    "enabled": true,
    "timezone": "Asia/Shanghai"
  }
}
```

## AI 提供商 (Provider) 配置

### Anthropic

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "字符串",
      "model": "claude-3-5-sonnet-20241022",
      "baseUrl": "https://api.anthropic.com"
    }
  }
}
```

### OpenAI

```json
{
  "providers": {
    "openai": {
      "apiKey": "字符串",
      "model": "gpt-4-turbo",
      "baseUrl": "https://api.openai.com/v1"
    }
  }
}
```

## 消息渠道 (Channel) 配置

### Telegram

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "你的_BOT_TOKEN",
      "webhook": {
        "enabled": false,
        "url": "https://your-domain.com/webhook/telegram"
      }
    }
  }
}
```

### Discord

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "token": "你的_BOT_TOKEN",
      "clientId": "你的_CLIENT_ID",
      "guildId": "你的_GUILD_ID"
    }
  }
}
```

### WhatsApp

```json
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "phoneId": "你的_PHONE_ID",
      "token": "你的_ACCESS_TOKEN",
      "webhookVerifyToken": "你的_验证_TOKEN"
    }
  }
}
```

## 会话 (Session) 配置

```json
{
  "sessions": {
    "maxHistoryLength": 100,
    "expirationMs": 86400000,
    "contextWindow": "auto",
    "summarizeThreshold": 50
  }
}
```

## 工具 (Tool) 配置

```json
{
  "tools": {
    "enabled": ["read", "write", "exec"],
    "disabled": ["gateway"],
    "requireConfirmation": ["exec", "write", "edit"],
    "exec": {
      "timeout": 30000,
      "shell": "/bin/bash"
    }
  }
}
```

## 安全配置

```json
{
  "security": {
    "gatewayToken": "${GATEWAY_TOKEN}",
    "allowedIPs": ["127.0.0.1", "192.168.1.0/24"],
    "rateLimit": {
      "enabled": true,
      "maxRequests": 100,
      "windowMs": 60000
    }
  }
}
```

## 环境变量使用

使用 `${变量名}` 语法来引用系统环境变量：

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "${ANTHROPIC_API_KEY}"
    }
  }
}
```

::: warning 安全第一
切勿直接在配置文件中填写 API 密钥。强烈建议始终使用环境变量管理敏感信息！
:::

## 验证配置

检查你的配置是否有效：

```bash
openclaw config validate
```

## 生效配置

应用你的配置更改：

```bash
# 热重载 (无需重启)
openclaw config reload

# 完全重启网关以生效
openclaw gateway restart
```
