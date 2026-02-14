# Tools System

Extend OpenClaw's capabilities with powerful tools.

## What are Tools?

Tools are functions that allow OpenClaw to interact with the world:
- Execute shell commands
- Browse the web
- Read and write files
- Control smart home devices
- And much more!

## Built-in Tools

### File Operations
| Tool | Description |
|------|-------------|
| `read` | Read file contents |
| `write` | Create or overwrite files |
| `edit` | Make precise file edits |

### Web Tools
| Tool | Description |
|------|-------------|
| `web_search` | Search the web (Brave API) |
| `web_fetch` | Fetch and extract web content |
| `browser` | Control web browser |

### System Tools
| Tool | Description |
|------|-------------|
| `exec` | Run shell commands |
| `process` | Manage background processes |
| `cron` | Schedule automated tasks |

### Communication Tools
| Tool | Description |
|------|-------------|
| `message` | Send messages to channels |
| `tts` | Text-to-speech conversion |

## Tool Permissions

Control which tools are available:

```json
{
  "tools": {
    "enabled": ["read", "write", "exec", "web_search"],
    "disabled": ["gateway", "sessions_spawn"],
    "requireConfirmation": ["exec", "write"]
  }
}
```

## Tool Usage Examples

### Reading a File
```
You: Read the contents of config.json
OpenClaw: [Uses read tool]
Here's the content of config.json:
{ ... }
```

### Searching the Web
```
You: What's the latest news about AI?
OpenClaw: [Uses web_search tool]
Here are the latest AI news headlines...
```

### Executing Commands
```
You: Show me disk usage
OpenClaw: [Uses exec tool with df -h]
Here's your disk usage:
Filesystem      Size  Used Avail Use%
/dev/disk1s1    466G  234G  180G  57%
```

## Custom Tools

Create custom tools using the Skills system:

1. Define tool schema
2. Implement tool logic
3. Register with OpenClaw

See [Skills System](/advanced/skills) for details.

## Security Considerations

- Tools run with your user permissions
- Dangerous operations require confirmation
- Tool calls are logged for audit

::: warning Security
The `exec` tool can run any command. Always review tool calls in group chats!
:::
