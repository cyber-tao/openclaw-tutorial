---
layout: home

hero:
  name: "OpenClaw"
  text: "Your AI Assistant"
  tagline: "Self-hosted, multi-channel AI assistant with powerful automation capabilities"
  image:
    src: /hero-image.svg
    alt: OpenClaw
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/openclaw/openclaw

features:
  - icon: "🦞"
    title: Multi-Channel Support
    details: Connect through WhatsApp, Telegram, Discord, Signal, iMessage and more. Manage all your conversations in one place.
  - icon: "🔒"
    title: Self-Hosted
    details: Full control over your data. Deploy on your own infrastructure with complete privacy and security.
  - icon: "🤖"
    title: AI Agent
    details: Powered by advanced AI models. Intelligent conversations, task automation, and contextual understanding.
  - icon: "⚡"
    title: Powerful Tools
    details: Browser automation, canvas editing, node execution, cron jobs, and extensive tool integration.
  - icon: "🎯"
    title: Multi-Agent Routing
    details: Isolate workspaces with per-agent sessions. Route messages intelligently based on context.
  - icon: "🛠️"
    title: Extensible Skills
    details: ClawHub marketplace with ready-to-use skills. Create and share your own custom skills.
---

<div class="quick-start">
  <h2>Quick Start</h2>

  ::: code-group
  ```bash [One-line]
  # macOS / Linux
  curl -fsSL https://openclaw.ai/install.sh | bash

  # Windows (PowerShell)
  iwr -useb https://openclaw.ai/install.ps1 | iex
  ```
  ```bash [npm]
  npm install -g openclaw
  openclaw start
  ```
  ```bash [pnpm]
  pnpm install -g openclaw
  openclaw start
  ```
  ```bash [Docker]
  docker run -d openclaw/openclaw
  ```
  :::

  <div class="tip">
    <p>💡 <strong>First time?</strong> Run <code>openclaw init</code> to start the onboarding wizard!</p>
  </div>
</div>

<style>
.quick-start {
  margin-top: 4rem;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.quick-start h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--vp-c-text-1);
}

.quick-start .tip {
  margin-top: 1.5rem;
  padding: 1rem;
  background: var(--vp-c-bg);
  border-radius: 8px;
  border-left: 4px solid var(--vp-c-brand-1);
}

.quick-start .tip code {
  background: var(--vp-c-brand-soft);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  color: var(--vp-c-brand-1);
}
</style>
