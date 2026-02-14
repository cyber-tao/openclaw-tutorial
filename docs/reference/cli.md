# CLI Commands Reference

Complete command reference for OpenClaw.

## Gateway Commands

### Start/Stop Gateway

```bash
# Start the gateway
openclaw gateway start

# Stop the gateway
openclaw gateway stop

# Restart the gateway
openclaw gateway restart

# Check gateway status
openclaw gateway status
```

### Configuration

```bash
# Get current config
openclaw gateway config get

# Get config schema
openclaw gateway config schema

# Apply new config
openclaw gateway config apply config.json

# Patch config (merge)
openclaw gateway config patch updates.json
```

### Updates

```bash
# Check for updates
openclaw gateway update check

# Run update
openclaw gateway update.run
```

## Channel Commands

### Manage Channels

```bash
# List channels
openclaw channel list

# Add channel
openclaw channel add telegram --token "TOKEN"

# Remove channel
openclaw channel remove telegram

# Check status
openclaw channel status telegram

# Restart channel
openclaw channel restart discord
```

## Session Commands

### Manage Sessions

```bash
# List sessions
openclaw sessions list

# Show session details
openclaw sessions show <session-id>

# Clear session
openclaw sessions clear <session-id>

# Delete session
openclaw sessions delete <session-id>

# Export session
openclaw sessions export <session-id>
```

## Cron Commands

### Manage Scheduled Tasks

```bash
# List cron jobs
openclaw cron list

# Add job
openclaw cron add --name "my-job" --schedule "0 * * * *" --task "Task description"

# Enable/disable job
openclaw cron enable my-job
openclaw cron disable my-job

# Run job now
openclaw cron run my-job

# Remove job
openclaw cron remove my-job

# View job history
openclaw cron runs my-job
```

## Skill Commands

### Manage Skills

```bash
# Search skills
openclaw skill search <query>

# Install skill
openclaw skill install <skill-name>

# List installed
openclaw skill list

# Update skill
openclaw skill update <skill-name>

# Remove skill
openclaw skill remove <skill-name>
```

## Agent Commands

### Manage Agents

```bash
# List available agents
openclaw agents list

# Spawn new agent
openclaw agent spawn --task "Task description" --model "model-name"

# Send message to agent
openclaw agent send <agent-id> "Message"
```

## Diagnostic Commands

### Health & Debugging

```bash
# Run diagnostics
openclaw doctor

# Check status
openclaw status

# View logs
openclaw logs

# Follow logs
openclaw logs --follow

# Filter logs by level
openclaw logs --level error

# Filter by channel
openclaw logs --channel telegram
```

## Utility Commands

### Backup & Restore

```bash
# Create backup
openclaw backup create

# List backups
openclaw backup list

# Restore from backup
openclaw backup restore <backup-id>
```

### Token Management

```bash
# Generate gateway token
openclaw gateway token generate

# List tokens
openclaw token list

# Revoke token
openclaw token revoke <token-id>
```

## Global Options

```bash
# Help
openclaw --help
openclaw <command> --help

# Version
openclaw --version

# Verbose output
openclaw --verbose <command>

# JSON output
openclaw --json <command>

# Config file
openclaw --config /path/to/config <command>
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENCLAW_CONFIG_DIR` | Config directory (default: `~/.openclaw`) |
| `OPENCLAW_LOG_LEVEL` | Log level (debug, info, warn, error) |
| `OPENCLAW_PORT` | Web UI port (default: 3000) |
| `OPENCLAW_GATEWAY_TOKEN` | Gateway authentication token |

::: tip Tab Completion
Enable shell tab completion: `openclaw completion install`
:::
