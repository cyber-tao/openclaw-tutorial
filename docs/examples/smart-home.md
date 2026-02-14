# Smart Home Use Case

Control your smart home with OpenClaw.

## Overview

OpenClaw can integrate with smart home systems:
- 🏠 Home Assistant
- 📹 Security cameras
- 💡 Lighting control
- 🌡️ Climate control
- 📱 Device notifications

## Setup

### Install Smart Home Skills

```bash
# Camera integration
openclaw skill install camsnap

# Home automation
openclaw skill install peekaboo  # macOS UI automation
```

### Configure Home Assistant

```json
{
  "smarthome": {
    "homeAssistant": {
      "url": "http://homeassistant.local:8123",
      "token": "${HA_TOKEN}"
    }
  }
}
```

## Use Case Examples

### Camera Monitoring

```
You: Show me the front door camera

OpenClaw: [Captures camera frame]

📸 Front Door Camera - Feb 14, 2026 3:30 PM

[Image showing front door area]

No motion detected. Last activity: 2 hours ago
```

### Device Control

```
You: Turn off all lights downstairs

OpenClaw: [Controls smart lights via Home Assistant]

✅ Done! Turned off 5 lights:
- Living room
- Kitchen
- Dining room
- Hallway
- Bathroom

Energy saved: ~60W
```

### Security Alerts

```
OpenClaw: 🚨 Security Alert

Motion detected at Front Door
Time: Feb 14, 2026 2:15 AM

[Camera snapshot]

Would you like me to:
1. Sound the alarm
2. Call emergency contacts
3. Ignore (false alarm)
```

### Climate Control

```
You: What's the temperature inside?

OpenClaw: 🌡️ Current Climate Status

Living Room: 22°C (Target: 22°C)
Bedroom: 20°C (Target: 19°C)
Kitchen: 24°C

Humidity: 45%
Air Quality: Good

Heating is currently: ON
Estimated monthly cost: $45
```

### Automation Scenes

```
You: Activate movie mode

OpenClaw: 🎬 Movie Mode Activated

✅ Dimmed living room lights to 20%
✅ Closed blinds
✅ Set thermostat to 21°C
✅ Enabled "Do Not Disturb"
✅ TV turned on

Enjoy your movie!
```

## Automation Ideas

### Morning Routine

```bash
openclaw cron add --name "morning-routine" \
  --schedule "0 7 * * 1-5" \
  --task "Gradually turn on lights, start coffee maker, report weather"
```

### Evening Security

```bash
openclaw cron add --name "evening-security" \
  --schedule "0 22 * * *" \
  --task "Lock doors, arm security, turn off non-essential lights"
```

### Energy Saving

```bash
openclaw cron add --name "energy-check" \
  --schedule "0 */4 * * *" \
  --task "Check for lights on in empty rooms and suggest turning off"
```

## Voice Commands

Connect with voice assistants:

- "Hey Siri, tell OpenClaw to lock the door"
- "Alexa, ask OpenClaw for camera status"

## Safety Features

### Emergency Response

```json
{
  "emergency": {
    "smoke": {
      "action": "alert_all",
      "message": "🔥 SMOKE DETECTED"
    },
    "intrusion": {
      "action": "alert_and_record",
      "message": "🚨 Possible intrusion detected"
    }
  }
}
```

### Activity Logging

```
You: Show me today's home activity

OpenClaw: 📋 Home Activity Log - Feb 14, 2026

Front Door: 5 events
- 8:30 AM: Unlocked (your phone)
- 9:15 AM: Locked (auto)
- 1:00 PM: Motion detected
- 6:30 PM: Unlocked (your phone)
- 7:00 PM: Locked (auto)

Motion Sensors: 12 detections
Most active: Living room (8)

Energy Usage: 12.5 kWh
Peak hour: 7 PM
```

## Tips

1. **Test automations** - Verify before relying on them
2. **Set up fallbacks** - Manual overrides for failures
3. **Regular maintenance** - Check sensor batteries
4. **Privacy first** - Keep data local when possible

::: warning Security
Always secure your smart home integrations with strong authentication!
:::
