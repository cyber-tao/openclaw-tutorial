# Troubleshooting Guide

Solve common OpenClaw issues.

## Quick Diagnostics

Run the diagnostic command first:

```bash
openclaw doctor
```

This checks:
- Node.js version
- OpenClaw version
- Configuration validity
- Provider connectivity
- Channel status

## Common Issues

### Gateway Won't Start

**Symptoms:**
- `openclaw gateway start` fails
- "Port already in use" error

**Solutions:**

1. Check if port is in use:
```bash
lsof -i :3000
```

2. Kill existing process:
```bash
kill -9 <PID>
```

3. Use different port:
```bash
export OPENCLAW_PORT=3001
openclaw gateway start
```

### Bot Not Responding

**Symptoms:**
- Messages sent but no reply
- Gateway shows running

**Solutions:**

1. Check channel status:
```bash
openclaw channel status telegram
```

2. View channel logs:
```bash
openclaw logs --channel telegram
```

3. Restart channel:
```bash
openclaw channel restart telegram
```

4. Verify bot token is correct

### API Key Errors

**Symptoms:**
- "Invalid API key" errors
- Authentication failures

**Solutions:**

1. Verify key is set:
```bash
echo $ANTHROPIC_API_KEY
```

2. Check config references:
```bash
openclaw config get providers.anthropic
```

3. Regenerate key from provider dashboard

### Rate Limiting

**Symptoms:**
- "Rate limit exceeded" errors
- Slow or failed responses

**Solutions:**

1. Reduce message frequency
2. Enable caching
3. Upgrade API plan
4. Use multiple providers

```json
{
  "providers": {
    "fallback": {
      "enabled": true,
      "provider": "openai"
    }
  }
}
```

### Memory Issues

**Symptoms:**
- Slow performance
- Out of memory errors

**Solutions:**

1. Clear old sessions:
```bash
openclaw sessions clear --older-than 7d
```

2. Reduce history:
```json
{
  "sessions": {
    "maxHistoryLength": 50
  }
}
```

3. Restart regularly:
```bash
openclaw gateway restart
```

### Tool Execution Failures

**Symptoms:**
- Tools timeout
- Permission denied errors

**Solutions:**

1. Check tool permissions:
```bash
openclaw config get tools
```

2. Increase timeout:
```json
{
  "tools": {
    "exec": {
      "timeout": 60000
    }
  }
}
```

3. Verify file permissions

### Discord Permission Errors

**Symptoms:**
- Bot can't send messages
- Missing permissions errors

**Solutions:**

1. Check bot roles in server
2. Enable required intents in Discord Developer Portal
3. Re-invite bot with correct permissions

### WhatsApp Webhook Issues

**Symptoms:**
- No messages received
- Webhook verification fails

**Solutions:**

1. Verify webhook URL is publicly accessible
2. Check SSL certificate
3. Confirm verify token matches

## Log Analysis

### View Logs

```bash
# All logs
openclaw logs

# Follow logs
openclaw logs --follow

# Filter by level
openclaw logs --level error

# Filter by channel
openclaw logs --channel telegram

# Export logs
openclaw logs --export > debug.log
```

### Common Log Patterns

| Pattern | Meaning | Action |
|---------|---------|--------|
| `ECONNREFUSED` | Connection failed | Check network |
| `ETIMEDOUT` | Request timeout | Increase timeout |
| `401 Unauthorized` | Auth failed | Check API key |
| `429 Too Many Requests` | Rate limited | Reduce frequency |

## Reset & Recovery

### Full Reset

```bash
# Stop gateway
openclaw gateway stop

# Backup config
cp ~/.openclaw/config.json ~/config.backup.json

# Clear sessions
rm -rf ~/.openclaw/sessions/*

# Clear logs
rm -rf ~/.openclaw/logs/*

# Restart
openclaw gateway start
```

### Restore from Backup

```bash
openclaw backup restore <backup-id>
```

## Getting Help

If issues persist:

1. **Search Issues**: Check [GitHub Issues](https://github.com/openclaw/openclaw/issues)
2. **Discord**: Join [our community](https://discord.gg/clawd)
3. **Debug Mode**: Run with verbose logging:
   ```bash
   OPENCLAW_LOG_LEVEL=debug openclaw gateway start
   ```

4. **Report Bug**: Include:
   - OpenClaw version
   - Node.js version
   - OS
   - Relevant logs
   - Steps to reproduce

::: tip Before Reporting
Try `openclaw doctor` first and include the output in your bug report!
:::
