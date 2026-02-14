# API 文档

OpenClaw HTTP 接口文档说明。

## 身份验证

所有 API 请求都需要在 Header 中包含身份验证令牌：

```bash
curl -H "Authorization: Bearer 你的_GATEWAY_TOKEN" \
  http://localhost:3000/api/endpoint
```

## 接口列表 (Endpoints)

### 健康检查

```
GET /health
```

响应示例：
```json
{
  "status": "ok",
  "version": "2026.2.13",
  "uptime": 86400
}
```

### 系统状态

```
GET /api/status
```

响应示例：
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

### 会话管理 (Sessions)

#### 列出所有会话

```
GET /api/sessions
```

响应示例：
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

#### 获取特定会话详情

```
GET /api/sessions/:id
```

#### 删除会话

```
DELETE /api/sessions/:id
```

### 消息处理 (Messages)

#### 发送消息

```
POST /api/messages
```

请求体示例：
```json
{
  "channel": "telegram",
  "userId": "user-123",
  "message": "来自 API 的消息！"
}
```

### 渠道管理 (Channels)

#### 列出所有渠道

```
GET /api/channels
```

响应示例：
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

### 工具管理 (Tools)

#### 列出所有工具

```
GET /api/tools
```

响应示例：
```json
{
  "tools": [
    {
      "name": "read",
      "description": "读取文件内容",
      "enabled": true
    }
  ]
}
```

#### 调用工具

```
POST /api/tools/:name/invoke
```

请求体示例：
```json
{
  "params": {
    "path": "/path/to/file"
  }
}
```

### 定时任务 (Cron)

#### 列出所有任务

```
GET /api/cron
```

#### 手动运行任务

```
POST /api/cron/:id/run
```

### 配置管理

#### 获取当前配置

```
GET /api/config
```

#### 更新配置项

```
PATCH /api/config
```

请求体示例：
```json
{
  "logging": {
    "level": "debug"
  }
}
```

## WebSocket API

连接到实时事件流：

```javascript
const ws = new WebSocket('ws://localhost:3000/ws');

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('事件:', data.type, data.payload);
};
```

### 事件类型

| 事件名 | 描述 |
|-------|-------------|
| `message:received` | 收到渠道新消息 |
| `message:sent` | 消息成功发送至渠道 |
| `session:created` | 新会话已创建 |
| `tool:invoked` | 工具已被调用 |
| `error` | 系统发生错误 |

## 错误响应格式

所有错误遵循统一格式：

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "错误描述信息",
    "details": {}
  }
}
```

### 常见错误代码

| 代码 | 描述 |
|------|-------------|
| `UNAUTHORIZED` | 令牌缺失或无效 |
| `FORBIDDEN` | 权限不足 |
| `NOT_FOUND` | 资源未找到 |
| `INVALID_REQUEST` | 请求格式错误 |
| `RATE_LIMITED` | 请求过于频繁 |
| `INTERNAL_ERROR` | 服务器内部错误 |

## 频率限制 (Rate Limits)

| 接口分类 | 限制额度 |
|----------|-------|
| `/api/messages` | 100 次/分钟 |
| `/api/tools/invoke` | 50 次/分钟 |
| 其他接口 | 200 次/分钟 |

::: tip API 客户端
推荐使用官方 OpenClaw SDK：
- JavaScript: `npm install @openclaw/sdk`
- Python: `pip install openclaw`
:::
