# API Reference

OpenClaw HTTP API documentation.

## Authentication

All API requests require authentication:

```bash
curl -H "Authorization: Bearer YOUR_GATEWAY_TOKEN" \
  http://localhost:3000/api/endpoint
```

## Endpoints

### Health Check

```
GET /health
```

Response:
```json
{
  "status": "ok",
  "version": "2026.2.13",
  "uptime": 86400
}
```

### Status

```
GET /api/status
```

Response:
```json
{
  "gateway": "running",
  "channels": {
    "telegram": "connected",
    "discord": "connected"
  },
  "sessions": 5,
  "memory": {
    "used": 256,
    "total": 512
  }
}
```

### Sessions

#### List Sessions

```
GET /api/sessions
```

Response:
```json
{
  "sessions": [
    {
      "id": "session-123",
      "channel": "telegram",
      "userId": "user-456",
      "messageCount": 42,
      "lastActivity": "2026-02-14T12:00:00Z"
    }
  ]
}
```

#### Get Session

```
GET /api/sessions/:id
```

#### Delete Session

```
DELETE /api/sessions/:id
```

### Messages

#### Send Message

```
POST /api/messages
```

Body:
```json
{
  "channel": "telegram",
  "userId": "user-123",
  "message": "Hello from API!"
}
```

### Channels

#### List Channels

```
GET /api/channels
```

Response:
```json
{
  "channels": [
    {
      "name": "telegram",
      "status": "connected",
      "messagesReceived": 1000,
      "messagesSent": 500
    }
  ]
}
```

### Tools

#### List Tools

```
GET /api/tools
```

Response:
```json
{
  "tools": [
    {
      "name": "read",
      "description": "Read file contents",
      "enabled": true
    }
  ]
}
```

#### Invoke Tool

```
POST /api/tools/:name/invoke
```

Body:
```json
{
  "params": {
    "path": "/path/to/file"
  }
}
```

### Cron

#### List Jobs

```
GET /api/cron
```

#### Run Job

```
POST /api/cron/:id/run
```

### Configuration

#### Get Config

```
GET /api/config
```

#### Update Config

```
PATCH /api/config
```

Body:
```json
{
  "logging": {
    "level": "debug"
  }
}
```

## WebSocket API

Connect to real-time events:

```javascript
const ws = new WebSocket('ws://localhost:3000/ws');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Event:', data.type, data.payload);
};
```

### Events

| Event | Description |
|-------|-------------|
| `message:received` | New message from channel |
| `message:sent` | Message sent to channel |
| `session:created` | New session created |
| `tool:invoked` | Tool was called |
| `error` | Error occurred |

## Error Responses

All errors follow this format:

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Description of the error",
    "details": {}
  }
}
```

### Error Codes

| Code | Description |
|------|-------------|
| `UNAUTHORIZED` | Missing or invalid token |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `INVALID_REQUEST` | Malformed request |
| `RATE_LIMITED` | Too many requests |
| `INTERNAL_ERROR` | Server error |

## Rate Limits

| Endpoint | Limit |
|----------|-------|
| `/api/messages` | 100/minute |
| `/api/tools/invoke` | 50/minute |
| Other endpoints | 200/minute |

::: tip API Client
Use the official OpenClaw SDK for your language:
- JavaScript: `npm install @openclaw/sdk`
- Python: `pip install openclaw`
:::
