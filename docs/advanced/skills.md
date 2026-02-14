# Skills System

Extend OpenClaw with custom capabilities.

## What are Skills?

Skills are modular extensions that add new capabilities to OpenClaw:
- Custom tools and commands
- Specialized workflows
- Integration with external services
- Agent behavior modifications

## Installing Skills

### From ClawHub

```bash
# Search for skills
openclaw skill search weather

# Install a skill
openclaw skill install weather

# List installed skills
openclaw skill list
```

### From Local Files

```bash
# Install from directory
openclaw skill install ./my-skill

# Install from git
openclaw skill install https://github.com/user/openclaw-skill
```

## Creating Skills

### Skill Structure

```
my-skill/
├── SKILL.md          # Skill definition
├── tools/            # Tool implementations
│   └── my-tool.ts
├── prompts/          # Custom prompts
│   └── system.md
└── config.json       # Skill configuration
```

### SKILL.md Template

```markdown
# My Skill

Description of what this skill does.

## Tools

### my_tool
Description of the tool.

**Parameters:**
- `param1` (string): Description
- `param2` (number): Description

**Returns:** Result description
```

### Tool Implementation

```typescript
// tools/my-tool.ts
export default async function myTool(params: {
  param1: string;
  param2: number;
}) {
  // Implementation
  return { result: "success" };
}
```

## ClawHub Marketplace

Browse and share skills at [clawhub.com](https://clawhub.com):

- 🔍 Search by category
- ⭐ Community ratings
- 📦 One-click install
- 🔄 Auto-updates

## Built-in Skills

OpenClaw comes with several built-in skills:

| Skill | Description |
|-------|-------------|
| `feishu-doc` | Feishu document operations |
| `apple-notes` | Apple Notes integration |
| `github` | GitHub CLI integration |
| `weather` | Weather information |

## Skill Configuration

Configure skills in your workspace:

```json
{
  "skills": {
    "weather": {
      "enabled": true,
      "apiKey": "${WEATHER_API_KEY}"
    }
  }
}
```

## Best Practices

1. **Keep skills focused** - One purpose per skill
2. **Document clearly** - Good descriptions help AI use tools
3. **Handle errors gracefully** - Provide useful error messages
4. **Test thoroughly** - Verify skill behavior

::: tip Publishing Skills
Share your skills with the community on ClawHub!
:::
