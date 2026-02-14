# Security Configuration

Protect your OpenClaw installation and data.

## Security Overview

OpenClaw runs on your infrastructure, giving you full control over security:

- 🔒 **Local Data**: All data stays on your servers
- 🔑 **API Keys**: Stored securely, never transmitted
- 🛡️ **Access Control**: Fine-grained permissions
- 📝 **Audit Logs**: Full activity tracking

## Authentication

### Gateway Token

The gateway token protects the local API:

```bash
# Generate a new token
openclaw gateway token generate

# Set token in config
export OPENCLAW_GATEWAY_TOKEN="your-secure-token"
```

### IP Restrictions

Limit access by IP address:

```json
{
  "gateway": {
    "allowedIPs": ["127.0.0.1", "192.168.1.0/24"]
  }
}
```

## Permission Levels

### User Levels

| Level | Description |
|-------|-------------|
| `admin` | Full access to all features |
| `user` | Standard access, no system changes |
| `guest` | Read-only, limited tools |

### Tool Restrictions

Configure per-user tool access:

```json
{
  "permissions": {
    "guest": {
      "allowedTools": ["read", "web_search"],
      "deniedTools": ["exec", "write", "gateway"]
    }
  }
}
```

## Group Chat Security

Special considerations for group chats:

- **Dangerous tools**: Require explicit confirmation
- **Rate limiting**: Prevent spam
- **User identification**: Track who sent commands

```json
{
  "groupSecurity": {
    "requireConfirmationFor": ["exec", "write", "gateway"],
    "rateLimit": {
      "maxMessages": 10,
      "windowMs": 60000
    }
  }
}
```

## Secrets Management

### Environment Variables

Store secrets in environment variables:

```bash
# In your shell profile
export ANTHROPIC_API_KEY="sk-ant-..."
export OPENAI_API_KEY="sk-..."
```

### Config References

Reference environment variables in config:

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "${ANTHROPIC_API_KEY}"
    }
  }
}
```

::: warning Never commit secrets!
Always use environment variables for sensitive data. Never hardcode API keys.
:::

## Audit Logging

Enable comprehensive logging:

```json
{
  "logging": {
    "level": "info",
    "auditLog": true,
    "logToolCalls": true
  }
}
```

View audit logs:

```bash
openclaw logs --audit
```

## Best Practices

1. **Rotate tokens regularly** - Change gateway tokens periodically
2. **Review permissions** - Audit user access levels
3. **Monitor logs** - Check for suspicious activity
4. **Update regularly** - Keep OpenClaw updated
5. **Backup config** - Secure your configuration files

## Security Checklist

- [ ] Gateway token configured
- [ ] IP restrictions set (if needed)
- [ ] API keys in environment variables
- [ ] Tool permissions configured
- [ ] Group chat security enabled
- [ ] Audit logging active
- [ ] Regular backups configured
