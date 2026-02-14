# What is OpenClaw?

OpenClaw is a **self-hosted AI assistant** that connects to multiple messaging channels. It combines the power of modern AI with the flexibility of self-hosting, giving you complete control over your data and interactions.

## Core Concepts

### AI-Powered Assistant

OpenClaw leverages advanced language models to provide intelligent conversational capabilities:

- **Contextual Understanding**: Maintains conversation history and context
- **Task Execution**: Can perform actions through integrated tools
- **Natural Language Processing**: Understands and responds naturally

### Multi-Channel Architecture

Connect through your preferred messaging platform:

| Channel | Features | Setup Difficulty |
|---------|----------|------------------|
| Telegram | Full support, easiest setup | Easy |
| WhatsApp | Full support, requires Meta Business API | Medium |
| Discord | Bot integration with server support | Easy |
| Signal | Privacy-focused messaging | Medium |
| iMessage | Apple ecosystem integration | Advanced |

### Self-Hosted Philosophy

Unlike cloud-based AI assistants, OpenClaw runs on your infrastructure:

```
┌─────────────────┐
│   Your Server   │
│   ┌───────────┐ │
│   │ OpenClaw  │ │
│   │   Core    │ │
│   └─────┬─────┘ │
│         │       │
│   ┌─────┴─────┐ │
│   │   Data    │ │
│   │  Storage  │ │
│   └───────────┘ │
└─────────────────┘
```

**Benefits:**
- 🔒 **Privacy**: Your data never leaves your server
- 💰 **Cost**: No per-message fees
- 🎛️ **Control**: Full customization of behavior
- 🔄 **Reliability**: No external dependencies

## How It Differs from Other AI Assistants

### vs. ChatGPT

| Feature | OpenClaw | ChatGPT |
|---------|----------|---------|
| Hosting | Self-hosted | Cloud |
| Data Privacy | Full control | OpenAI controlled |
| Messaging Integration | Native multi-channel | Web/API only |
| Customization | Full access | Limited |
| Cost | Free (self-hosted) | Subscription |

### vs. Other Self-Hosted Solutions

OpenClaw stands out with:

1. **Multi-Channel Support**: Most alternatives support only one channel
2. **Tool Ecosystem**: Browser automation, canvas, nodes
3. **Skill Marketplace**: ClawHub for easy extensibility
4. **Active Development**: Regular updates and improvements

## Use Cases

### Personal Assistant
- Schedule management
- Message forwarding and filtering
- Information aggregation
- Reminder automation

### Development Assistant
- Code review and suggestions
- CI/CD integration
- Project management
- Documentation generation

### Smart Home Control
- Camera monitoring
- Voice commands
- Automation routines
- Device management

## Next Steps

Ready to get started? Continue with the [Installation Guide](/guide/installation) to set up OpenClaw on your system.

::: tip New to OpenClaw?
We recommend following the guide in order: Installation → Quick Start → Basic Usage
:::
