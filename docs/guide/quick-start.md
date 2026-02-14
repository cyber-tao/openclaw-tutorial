# Quick Start

Get your OpenClaw assistant running in just a few minutes. This guide will walk you through the initial setup and your first conversation.

## Initial Setup

### Step 1: Initialize OpenClaw

Run the initialization wizard to set up your configuration:

```bash
openclaw init
```

The wizard will guide you through:

1. **AI Provider Selection** - Choose your AI model provider
2. **Channel Setup** - Configure your messaging channels
3. **Security Settings** - Set up allowlist and pairing

::: code-group
```bash [Interactive Setup]
? Select AI provider: (Use arrow keys)
❯ Anthropic (Claude)
  OpenAI (GPT)
  Local (Ollama)

? Configure a channel now? (Y/n)
? Select channel: (Use arrow keys)
❯ Telegram
  WhatsApp
  Discord
  Skip for now
```
:::

### Step 2: Configure AI Provider

Choose your AI provider and add your API key:

```bash
# For Anthropic Claude (recommended)
openclaw config set ai.provider anthropic
openclaw config set ai.apiKey sk-ant-xxxxx

# For OpenAI GPT
openclaw config set ai.provider openai
openclaw config set ai.apiKey sk-xxxxx
```

::: warning API Keys
Keep your API keys secure! Never commit them to version control. Use environment variables instead:

```bash
export ANTHROPIC_API_KEY=sk-ant-xxxxx
export OPENAI_API_KEY=sk-xxxxx
```
:::

### Step 3: Start OpenClaw

Launch the OpenClaw server:

```bash
openclaw start
```

You'll see output like:

```
🦞 OpenClaw v1.0.0 starting...
✓ Configuration loaded
✓ AI provider connected
✓ Web UI available at http://localhost:3000
✓ Telegram channel connected

OpenClaw is ready!
```

## Connect Your First Channel

### Telegram (Recommended for beginners)

The easiest channel to set up:

1. **Create a Bot**
   - Open Telegram and search for `@BotFather`
   - Send `/newbot` and follow the instructions
   - Save the bot token

2. **Configure OpenClaw**

   ```bash
   openclaw channel add telegram \
     --token "YOUR_BOT_TOKEN"
   ```

3. **Test the Connection**
   - Find your bot on Telegram
   - Send `/start` to begin

### WhatsApp

For WhatsApp Business API:

```bash
openclaw channel add whatsapp \
  --phone-id "YOUR_PHONE_ID" \
  --business-account-id "YOUR_ACCOUNT_ID" \
  --token "YOUR_ACCESS_TOKEN"
```

### Discord

Create a Discord bot:

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Create a bot and get the token
4. Add the bot to your server

```bash
openclaw channel add discord \
  --token "YOUR_BOT_TOKEN" \
  --client-id "YOUR_CLIENT_ID"
```

## Your First Conversation

### Via Telegram/Discord

Simply send a message to your bot:

```
You: Hello! What can you help me with?

OpenClaw: Hello! I'm your AI assistant powered by OpenClaw. I can help you with:
- Answering questions
- Managing tasks
- Web searches
- And much more!

What would you like to know?
```

### Via Web UI

1. Open `http://localhost:3000` in your browser
2. Click "New Conversation"
3. Start chatting!

## Basic Commands

Here are some useful commands to get started:

| Command | Description |
|---------|-------------|
| `/start` | Initialize conversation |
| `/help` | Show available commands |
| `/reset` | Clear conversation history |
| `/tools` | List available tools |
| `/status` | Show system status |

## Verify Your Setup

Run the diagnostic command to verify everything is working:

```bash
openclaw doctor
```

Expected output:

```
✓ Node.js version: v22.x.x
✓ OpenClaw version: 1.0.0
✓ Configuration valid
✓ AI provider connected (Anthropic)
✓ Channels: 1 active (Telegram)
✓ Web UI running on port 3000

All systems operational! 🎉
```

## Next Steps

Congratulations! 🎉 Your OpenClaw assistant is now running. Here's what to explore next:

1. **[Basic Usage](/guide/basic-usage)** - Learn about daily operations
2. **[Channel Configuration](/core/channels)** - Set up additional channels
3. **[Tools System](/core/tools)** - Explore available tools
4. **[Security](/core/security)** - Secure your installation

::: tip Pro Tip
Bookmark the Web UI at `http://localhost:3000` for easy access to settings and conversation history!
:::
