# Channel Configuration

Connect OpenClaw to your favorite messaging platforms.

## Supported Channels

| Channel | Status | Features |
|---------|--------|----------|
| Telegram | ✅ Full | Messages, Files, Inline Keyboards |
| Discord | ✅ Full | Messages, Embeds, Threads, Voice |
| WhatsApp | ✅ Full | Messages, Media, Interactive Buttons |
| Signal | ✅ Full | Messages, Attachments |
| iMessage | ✅ Full | Messages, Attachments (macOS only) |
| Feishu | ✅ Full | Messages, Cards, Interactive Elements |
| Slack | ✅ Full | Messages, Blocks, Threads |

## Configuration

### Telegram Setup

1. Create a bot via [@BotFather](https://t.me/botfather)
2. Get your bot token
3. Add to configuration:

```bash
openclaw channel add telegram --token "YOUR_BOT_TOKEN"
```

### Discord Setup

1. Create a bot in [Discord Developer Portal](https://discord.com/developers/applications)
2. Enable required intents
3. Invite bot to your server
4. Add to configuration:

```bash
openclaw channel add discord --token "YOUR_BOT_TOKEN" --client-id "YOUR_CLIENT_ID"
```

### WhatsApp Setup

1. Register for [Meta Business API](https://developers.facebook.com/docs/whatsapp)
2. Create a WhatsApp Business account
3. Configure webhook URL
4. Add to configuration:

```bash
openclaw channel add whatsapp --phone-id "YOUR_PHONE_ID" --token "YOUR_ACCESS_TOKEN"
```

## Channel Management

```bash
# List all channels
openclaw channel list

# Check channel status
openclaw channel status telegram

# Restart a channel
openclaw channel restart discord

# Remove a channel
openclaw channel remove signal
```

## Best Practices

1. **Start with one channel** - Master one before adding more
2. **Test thoroughly** - Use test environments when possible
3. **Monitor rate limits** - Each platform has different limits
4. **Backup tokens** - Store credentials securely

## Troubleshooting

### Bot Not Responding

```bash
# Check logs
openclaw logs --channel telegram

# Verify configuration
openclaw config get channels.telegram
```

### Webhook Issues

1. Verify URL is publicly accessible
2. Check SSL certificate is valid
3. Confirm tokens match

::: tip Need more channels?
We're actively working on adding more platforms. Check our [GitHub](https://github.com/openclaw/openclaw) for updates!
:::
