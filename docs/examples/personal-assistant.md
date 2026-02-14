# Personal Assistant Use Case

Build a powerful personal assistant with OpenClaw.

## Overview

Transform OpenClaw into your personal AI assistant that helps with:
- 📅 Schedule management
- 📧 Email handling
- 📝 Note taking
- 🔔 Reminders
- 📊 Information aggregation

## Setup

### Channel Configuration

```bash
# Add Telegram for quick access
openclaw channel add telegram --token "YOUR_BOT_TOKEN"

# Add Discord for detailed interactions
openclaw channel add discord --token "YOUR_BOT_TOKEN" --client-id "YOUR_CLIENT_ID"
```

### Recommended Skills

```bash
# Install useful skills
openclaw skill install apple-notes
openclaw skill install apple-reminders
openclaw skill install weather
openclaw skill install github
```

## Use Case Examples

### Morning Briefing

```
You: Good morning!

OpenClaw: Good morning! Here's your briefing for today:

📅 Calendar: 3 events
- 10:00 Team meeting
- 14:00 Project review
- 17:00 Gym session

📧 Emails: 12 unread, 2 important

🌤️ Weather: 22°C, partly cloudy

🎯 Tasks: 5 pending reminders
```

### Note Taking

```
You: Take a note: Remember to call the dentist tomorrow

OpenClaw: ✅ Note created in Apple Notes:
"Remember to call the dentist tomorrow"
Created: Feb 14, 2026 at 9:30 AM
```

### Quick Research

```
You: What's the best restaurant near me?

OpenClaw: [Searches local restaurants]
Here are the top-rated restaurants nearby:

1. The Italian Place ⭐ 4.8
   Italian • $$$ • 0.3 km

2. Sushi Master ⭐ 4.7
   Japanese • $$ • 0.5 km

3. Burger Joint ⭐ 4.6
   American • $ • 0.2 km
```

### Reminder Management

```
You: Remind me to water plants at 6 PM

OpenClaw: ✅ Reminder set for today at 6:00 PM:
"Water plants"

I'll notify you when it's time!
```

## Automation Ideas

### Daily Summary Cron

```bash
openclaw cron add --name "daily-summary" \
  --schedule "0 20 * * *" \
  --task "Summarize today's emails, calendar, and tasks"
```

### Weather Alerts

```bash
openclaw cron add --name "weather-alert" \
  --schedule "0 7 * * *" \
  --task "Check weather and suggest outfit for today"
```

### Weekly Review

```bash
openclaw cron add --name "weekly-review" \
  --schedule "0 18 * * 5" \
  --task "Summarize this week's activity and plan next week"
```

## Customization

### Personal Preferences

Create a `USER.md` file with your preferences:

```markdown
# User Profile

- Name: Your Name
- Timezone: Asia/Shanghai
- Preferences:
  - Morning briefing at 8 AM
  - Summary format: bullet points
  - Preferred channels: Telegram for quick, Discord for detailed
```

### Custom Commands

Add personal command shortcuts:

```json
{
  "commands": {
    "/brief": "Give me today's briefing",
    "/week": "Show this week's summary",
    "/focus": "Enable focus mode (no notifications)"
  }
}
```

## Tips for Success

1. **Be specific** - Clear instructions get better results
2. **Use follow-ups** - Ask for clarification when needed
3. **Set up automation** - Let OpenClaw work proactively
4. **Regular cleanup** - Archive old conversations

::: tip Privacy First
All your data stays on your device. OpenClaw doesn't send your personal information to third parties.
:::
