# Frequently Asked Questions

Common questions about OpenClaw.

## General

### What is OpenClaw?

OpenClaw is a self-hosted AI assistant that connects to your favorite messaging platforms (Telegram, Discord, WhatsApp, etc.) and provides intelligent conversation capabilities with tool integration.

### Is OpenClaw free?

Yes! OpenClaw is open source and free to use. You only pay for the AI provider you choose (Anthropic, OpenAI, etc.) based on their pricing.

### What makes OpenClaw different from ChatGPT?

| Feature | OpenClaw | ChatGPT |
|---------|----------|---------|
| Hosting | Self-hosted | Cloud |
| Data Privacy | Full control | OpenAI controls |
| Messaging | Native multi-channel | Web/API only |
| Customization | Full access | Limited |
| Tools | Extensive | Limited |

### Which AI models are supported?

- Anthropic Claude (recommended)
- OpenAI GPT-4
- Google Gemini
- Local models via Ollama
- Custom providers

## Installation

### What are the system requirements?

- Node.js 22.x or higher
- 512MB RAM minimum
- macOS, Linux, or Windows

### How do I update OpenClaw?

```bash
npm update -g openclaw
# or
openclaw gateway update.run
```

### Can I run OpenClaw on a Raspberry Pi?

Yes! OpenClaw runs great on Raspberry Pi and similar ARM devices. Use the ARM build or install via npm.

## Configuration

### How do I add multiple channels?

Add each channel separately:

```bash
openclaw channel add telegram --token "TOKEN1"
openclaw channel add discord --token "TOKEN2" --client-id "ID"
```

### Can I use different models for different tasks?

Yes! Configure multi-agent routing in your config:

```json
{
  "agents": {
    "main": {"model": "claude-3-5-sonnet"},
    "coder": {"model": "gpt-4-codex"}
  }
}
```

### How do I secure my API keys?

Always use environment variables:

```bash
export ANTHROPIC_API_KEY="your-key"
```

Then reference in config:
```json
{"apiKey": "${ANTHROPIC_API_KEY}"}
```

## Usage

### How do I clear conversation history?

Use the `/reset` command in chat, or:

```bash
openclaw sessions clear <session-id>
```

### Can OpenClaw browse the web?

Yes! OpenClaw has built-in web search and browsing tools. Just ask it to search or fetch content from URLs.

### How do I set up automated tasks?

Use cron jobs:

```bash
openclaw cron add --name "daily-brief" \
  --schedule "0 9 * * *" \
  --task "Send daily briefing"
```

### Can OpenClaw access my files?

Yes, with the `read` and `write` tools. You control which directories are accessible through configuration.

## Troubleshooting

### OpenClaw isn't responding to messages

1. Check gateway status: `openclaw status`
2. Check channel status: `openclaw channel status telegram`
3. View logs: `openclaw logs`

### I'm getting rate limited

Reduce message frequency or upgrade your AI provider plan. Check your provider's rate limits.

### Memory usage is high

1. Clear old sessions: `openclaw sessions clear`
2. Reduce history length in config
3. Restart gateway: `openclaw gateway restart`

### Tools aren't working

Check that tools are enabled in config and you have the required permissions.

## Privacy & Security

### Where is my data stored?

All data is stored locally in `~/.openclaw/`. Nothing is sent to external servers except API calls to your chosen AI provider.

### Can I use OpenClaw without internet?

For the most part, yes! Use a local model via Ollama. Only channel integrations require internet.

### How do I backup my data?

```bash
openclaw backup create
```

### Is my conversation data private?

Yes! Your conversations are stored only on your machine. OpenClaw doesn't collect or transmit your data.

## Still have questions?

- 💬 Join our [Discord](https://discord.gg/clawd)
- 📖 Read the [documentation](https://docs.openclaw.ai)
- 🐛 Report issues on [GitHub](https://github.com/openclaw/openclaw/issues)
