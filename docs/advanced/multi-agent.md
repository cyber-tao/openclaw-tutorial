# Multi-Agent Routing

Deploy specialized AI agents for different tasks.

## Overview

Multi-agent routing allows you to:
- Use different AI models for different tasks
- Route complex tasks to specialized agents
- Spawn sub-agents for parallel work
- Optimize costs with model selection

## Agent Architecture

```
┌─────────────────────────────────────────┐
│             Main Agent                   │
│  (Receives all incoming messages)       │
└─────────────┬───────────────────────────┘
              │
    ┌─────────┼─────────┐
    ▼         ▼         ▼
┌───────┐ ┌───────┐ ┌───────┐
│Coder  │ │Research│ │Chat   │
│Agent  │ │Agent   │ │Agent  │
└───────┘ └───────┘ └───────┘
```

## Configuration

### Define Agents

```json
{
  "agents": {
    "main": {
      "model": "claude-3-5-sonnet",
      "description": "Primary assistant"
    },
    "coder": {
      "model": "gpt-4-codex",
      "description": "Code generation and review"
    },
    "research": {
      "model": "gpt-4-turbo",
      "description": "Research and analysis"
    }
  }
}
```

### Routing Rules

```json
{
  "routing": {
    "rules": [
      {
        "pattern": "write.*code|debug|refactor",
        "agent": "coder"
      },
      {
        "pattern": "research|search|analyze",
        "agent": "research"
      }
    ]
  }
}
```

## Sub-Agent Spawning

Spawn agents dynamically for complex tasks:

```bash
# Spawn a research agent
openclaw agent spawn --task "Research AI trends" --model "gpt-4-turbo"

# Spawn a coding agent
openclaw agent spawn --task "Refactor this module" --model "gpt-4-codex"
```

## Use Cases

### Development Workflow
1. Main agent receives request
2. Routes coding tasks to coder agent
3. Coder agent uses specialized model
4. Results returned to main thread

### Research Tasks
1. Main agent identifies research need
2. Spawns research agent with web tools
3. Research agent compiles findings
4. Main agent summarizes for user

## Best Practices

1. **Keep main agent simple** - Use for routing only
2. **Specialize agents** - One task type per agent
3. **Monitor costs** - Different models have different prices
4. **Test routing** - Ensure tasks go to correct agents

::: info Learn More
See [Skills System](/advanced/skills) to create custom agent behaviors.
:::
