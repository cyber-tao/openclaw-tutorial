---
layout: home

hero:
  name: "OpenClaw"
  text: "你的 AI 助手"
  tagline: "自托管、多渠道的 AI 助手，拥有强大的自动化能力"
  image:
    src: /hero-image.svg
    alt: OpenClaw
  actions:
    - theme: brand
      text: 快速开始
      link: /zh/guide/getting-started
    - theme: alt
      text: GitHub 仓库
      link: https://github.com/openclaw/openclaw

features:
  - icon: "🦞"
    title: 多渠道支持
    details: 通过 WhatsApp、Telegram、Discord、Signal、iMessage 等多种渠道连接。在一个地方管理所有对话。
  - icon: "🔒"
    title: 自托管
    details: 完全控制你的数据。在自己的基础设施上部署，拥有完整的隐私和安全保障。
  - icon: "🤖"
    title: AI Agent
    details: 由先进的 AI 模型驱动。智能对话、任务自动化、上下文理解。
  - icon: "⚡"
    title: 强大工具
    details: 浏览器自动化、画布编辑、节点执行、定时任务，以及丰富的工具集成。
  - icon: "🎯"
    title: Multi-Agent 路由
    details: 工作区隔离，每个 Agent 独立会话。基于上下文智能路由消息。
  - icon: "🛠️"
    title: 可扩展技能
    details: ClawHub 技能市场提供现成的技能。创建和分享你自己的自定义技能。
---

<div class="quick-start">
  <h2>快速开始</h2>

  ::: code-group
  ```bash [一键安装]
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
    <p>💡 <strong>第一次使用？</strong> 运行 <code>openclaw init</code> 启动配置向导！</p>
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
