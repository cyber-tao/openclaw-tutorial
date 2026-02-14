# Basic Usage

Learn the fundamentals of using OpenClaw in your daily workflow. This guide covers conversations, the Web UI, and essential configurations.

## Conversing with AI

### Basic Interactions

OpenClaw responds naturally to your messages:

```
You: What's the weather like today?

OpenClaw: I don't have direct access to real-time weather data, but I can
help you check it! Would you like me to search for the current weather
in your location?
```

### Context-Aware Conversations

OpenClaw maintains conversation context:

```
You: My name is Alice

OpenClaw: Nice to meet you, Alice! How can I help you today?

You: What's my name?

OpenClaw: You mentioned your name is Alice.
```

### Using Tools

OpenClaw can use integrated tools:

```
You: Search for the latest news about AI

OpenClaw: [Uses browser tool]
I found several recent articles about AI:

1. "New Breakthrough in Language Models"
2. "AI Ethics: What You Need to Know"
3. "The Future of AI Assistants"

Would you like me to summarize any of these?
```

### Managing Conversation History

```
# Clear current conversation
/reset

# View conversation stats
/stats

# Export conversation
/export --format markdown
```

## Web Control UI

Access the Web UI at `http://localhost:3000`

### Dashboard Overview

The main dashboard shows:

- **Active Conversations**: Current chat sessions
- **Channel Status**: Connected channels and their states
- **System Metrics**: CPU, memory, and storage usage
- **Recent Activity**: Last messages and actions

### Conversation Management

Create and manage conversations:

1. **New Conversation** - Click the "+" button
2. **Switch Conversations** - Select from the sidebar
3. **Search History** - Use the search bar
4. **Export** - Download conversation as Markdown or JSON

### Settings Panel

Configure OpenClaw through the UI:

```
Settings
├── General
│   ├── Language
│   ├── Timezone
│   └── Theme (Light/Dark)
├── AI Provider
│   ├── Model Selection
│   ├── Temperature
│   └── Max Tokens
├── Channels
│   ├── Add/Remove Channels
│   └── Channel Settings
└── Security
    ├── Allowlist
    ├── Pairing Codes
    └── Rate Limiting
```

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl + K` | Open command palette |
| `Ctrl + N` | New conversation |
| `Ctrl + /` | Toggle sidebar |
| `Esc` | Close modal |

## Basic Configuration

### Configuration File

Main config located at `~/.openclaw/config.json`:

```json
{
  "ai": {
    "provider": "anthropic",
    "model": "claude-sonnet-4-20250514",
    "temperature": 0.7,
    "maxTokens": 4096
  },
  "server": {
    "port": 3000,
    "host": "localhost"
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "your-bot-token"
    }
  },
  "security": {
    "allowlist": [],
    "requirePairing": false
  }
}
```

### Common Settings

**AI Behavior:**

```bash
# Set model
openclaw config set ai.model claude-sonnet-4-20250514

# Adjust creativity (0.0 - 1.0)
openclaw config set ai.temperature 0.7

# Max response length
openclaw config set ai.maxTokens 4096
```

**Server Settings:**

```bash
# Change port
openclaw config set server.port 8080

# Allow external access
openclaw config set server.host 0.0.0.0
```

**Logging:**

```bash
# Set log level
openclaw config set logging.level debug

# Enable file logging
openclaw config set logging.file true
```

### Reloading Configuration

After changing settings:

```bash
# Restart OpenClaw
openclaw restart

# Or reload config without restart
openclaw reload
```

## Daily Operations

### Starting and Stopping

```bash
# Start OpenClaw
openclaw start

# Stop gracefully
openclaw stop

# Restart
openclaw restart

# Check status
openclaw status
```

### Viewing Logs

```bash
# View recent logs
openclaw logs

# Follow logs in real-time
openclaw logs --follow

# Filter by level
openclaw logs --level error

# Export logs
openclaw logs --export > openclaw.log
```

### Health Checks

```bash
# Quick health check
openclaw health

# Detailed diagnostics
openclaw doctor --verbose
```

### Backup and Restore

```bash
# Create backup
openclaw backup create

# List backups
openclaw backup list

# Restore from backup
openclaw backup restore <backup-id>
```

## Tips for Daily Use

### Efficiency Tips

1. **Use Shortcuts**: Learn keyboard shortcuts in the Web UI
2. **Templates**: Create message templates for common tasks
3. **Batch Operations**: Process multiple items at once
4. **Schedule Tasks**: Use cron for recurring actions

### Best Practices

1. **Regular Backups**: Schedule automatic backups
2. **Monitor Logs**: Check for errors periodically
3. **Update Regularly**: Keep OpenClaw updated
4. **Review Security**: Audit your security settings

## Next Steps

Now that you're familiar with basic usage, explore:

- **[Channel Configuration](/core/channels)** - Connect more messaging platforms
- **[Session Management](/core/sessions)** - Understand session handling
- **[Tools System](/core/tools)** - Discover available tools
- **[Security](/core/security)** - Secure your installation

::: info Web UI Access
The Web UI is available at `http://localhost:3000` by default. You can change this in the configuration.
:::
