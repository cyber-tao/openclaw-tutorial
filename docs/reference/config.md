# Configuration Reference

Complete configuration options for OpenClaw.

## Configuration File

Main config location: `~/.openclaw/config.json`

## Full Configuration Schema

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
      "systemPrompt": "You are a helpful assistant."
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

## Provider Configuration

### Anthropic

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "string",
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
      "apiKey": "string",
      "model": "gpt-4-turbo",
      "baseUrl": "https://api.openai.com/v1"
    }
  }
}
```

## Channel Configuration

### Telegram

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "BOT_TOKEN",
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
      "token": "BOT_TOKEN",
      "clientId": "CLIENT_ID",
      "guildId": "GUILD_ID"
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
      "phoneId": "PHONE_ID",
      "token": "ACCESS_TOKEN",
      "webhookVerifyToken": "VERIFY_TOKEN"
    }
  }
}
```

## Session Configuration

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

## Tool Configuration

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

## Security Configuration

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

## Environment Variables

Use `${VAR_NAME}` to reference environment variables:

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "${ANTHROPIC_API_KEY}"
    }
  }
}
```

::: warning Security
Never commit API keys directly. Always use environment variables!
:::

## Validation

Validate your configuration:

```bash
openclaw config validate
```

## Reloading

Apply configuration changes:

```bash
# Hot reload (no restart)
openclaw config reload

# Full restart
openclaw gateway restart
```
