# Session Management

Understand how OpenClaw handles conversations and context.

## What is a Session?

A **session** represents a conversation context between the AI and a user. Sessions maintain:
- Conversation history
- User preferences
- Active tools and permissions
- Context window state

## Session Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Created   │ ──▶ │    Active   │ ──▶ │   Archived  │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │   Expired   │
                    └─────────────┘
```

## Session Commands

```bash
# List all sessions
openclaw sessions list

# Show session details
openclaw sessions show <session-id>

# Clear session history
openclaw sessions clear <session-id>

# Delete a session
openclaw sessions delete <session-id>

# Export session
openclaw sessions export <session-id> > backup.json
```

## Session Configuration

Configure session behavior in your `config.json`:

```json
{
  "sessions": {
    "maxHistoryLength": 100,
    "expirationMs": 86400000,
    "contextWindow": "auto"
  }
}
```

## Multi-Session Support

OpenClaw can handle multiple concurrent sessions:

- **DM Sessions**: One per user per channel
- **Group Sessions**: Shared context for group chats
- **Isolated Sessions**: Separate contexts for specialized tasks

## Context Management

### History Pruning

When context grows too large:
1. Old messages are summarized
2. Important context is preserved
3. System prompts remain intact

### Memory Optimization

```bash
# Check memory usage
openclaw status --verbose

# Compact session storage
openclaw sessions compact
```

## Best Practices

1. **Regular cleanup** - Archive old sessions periodically
2. **Export important conversations** - Backup valuable context
3. **Monitor context size** - Large contexts affect performance

::: info Session Storage
Sessions are stored locally in `~/.openclaw/sessions/`. Each session is a separate JSON file.
:::
