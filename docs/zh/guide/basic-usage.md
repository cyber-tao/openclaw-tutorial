# 基础使用

学习在日常工作中使用 OpenClaw 的基础知识。本指南涵盖对话、Web UI 和基本配置。

## 与 AI 对话

### 基本交互

OpenClaw 自然地响应你的消息：

```
你: 今天天气怎么样？

OpenClaw: 我没有直接的实时天气数据访问权限，但我可以帮你查询！
你想让我搜索你所在位置的当前天气吗？
```

### 上下文感知对话

OpenClaw 保持对话上下文：

```
你: 我叫小明

OpenClaw: 很高兴认识你，小明！今天我能帮你什么？

你: 我叫什么名字？

OpenClaw: 你提到你叫小明。
```

### 使用工具

OpenClaw 可以使用集成工具：

```
你: 搜索关于 AI 的最新新闻

OpenClaw: [使用浏览器工具]
我找到了几篇关于 AI 的最新文章：

1. "语言模型的新突破"
2. "AI 伦理：你需要知道的"
3. "AI 助手的未来"

你想让我总结其中任何一篇吗？
```

### 管理对话历史

```
# 清除当前对话
/reset

# 查看对话统计
/stats

# 导出对话
/export --format markdown
```

## Web 控制界面

通过 `http://localhost:3000` 访问 Web UI

### 仪表板概览

主仪表板显示：

- **活跃对话**：当前聊天会话
- **渠道状态**：已连接的渠道及其状态
- **系统指标**：CPU、内存和存储使用情况
- **最近活动**：最新的消息和操作

### 对话管理

创建和管理对话：

1. **新建对话** - 点击 "+" 按钮
2. **切换对话** - 从侧边栏选择
3. **搜索历史** - 使用搜索栏
4. **导出** - 下载对话为 Markdown 或 JSON

### 设置面板

通过 UI 配置 OpenClaw：

```
设置
├── 常规
│   ├── 语言
│   ├── 时区
│   └── 主题（浅色/深色）
├── AI 提供商
│   ├── 模型选择
│   ├── 温度
│   └── 最大令牌数
├── 渠道
│   ├── 添加/删除渠道
│   └── 渠道设置
└── 安全
    ├── 白名单
    ├── 配对码
    └── 速率限制
```

### 键盘快捷键

| 快捷键 | 操作 |
|--------|------|
| `Ctrl + K` | 打开命令面板 |
| `Ctrl + N` | 新建对话 |
| `Ctrl + /` | 切换侧边栏 |
| `Esc` | 关闭模态框 |

## 基本配置

### 配置文件

主配置位于 `~/.openclaw/config.json`：

```json
{
  "ai": {
    "provider": "anthropic",
    "model": "claude-sonnet-4-20250514",
    "temperature": 0.7,
    "maxTokens": 4096
  },
  "server": {
    "port": 3000,
    "host": "localhost"
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "token": "你的机器人令牌"
    }
  },
  "security": {
    "allowlist": [],
    "requirePairing": false
  }
}
```

### 常用设置

**AI 行为：**

```bash
# 设置模型
openclaw config set ai.model claude-sonnet-4-20250514

# 调整创造性（0.0 - 1.0）
openclaw config set ai.temperature 0.7

# 最大响应长度
openclaw config set ai.maxTokens 4096
```

**服务器设置：**

```bash
# 更改端口
openclaw config set server.port 8080

# 允许外部访问
openclaw config set server.host 0.0.0.0
```

**日志：**

```bash
# 设置日志级别
openclaw config set logging.level debug

# 启用文件日志
openclaw config set logging.file true
```

### 重新加载配置

更改设置后：

```bash
# 重启 OpenClaw
openclaw restart

# 或不重启重新加载配置
openclaw reload
```

## 日常操作

### 启动和停止

```bash
# 启动 OpenClaw
openclaw start

# 优雅停止
openclaw stop

# 重启
openclaw restart

# 检查状态
openclaw status
```

### 查看日志

```bash
# 查看最近日志
openclaw logs

# 实时跟踪日志
openclaw logs --follow

# 按级别过滤
openclaw logs --level error

# 导出日志
openclaw logs --export > openclaw.log
```

### 健康检查

```bash
# 快速健康检查
openclaw health

# 详细诊断
openclaw doctor --verbose
```

### 备份和恢复

```bash
# 创建备份
openclaw backup create

# 列出备份
openclaw backup list

# 从备份恢复
openclaw backup restore <备份ID>
```

## 日常使用技巧

### 效率技巧

1. **使用快捷键**：学习 Web UI 中的键盘快捷键
2. **模板**：为常见任务创建消息模板
3. **批量操作**：一次处理多个项目
4. **计划任务**：使用 cron 进行重复操作

### 最佳实践

1. **定期备份**：安排自动备份
2. **监控日志**：定期检查错误
3. **定期更新**：保持 OpenClaw 更新
4. **审查安全**：审核你的安全设置

## 下一步

现在你已经熟悉了基本使用，可以探索：

- **[渠道配置](/zh/core/channels)** - 连接更多消息平台
- **[Session 管理](/zh/core/sessions)** - 理解会话处理
- **[工具系统](/zh/core/tools)** - 发现可用工具
- **[安全配置](/zh/core/security)** - 保护你的安装

::: info Web UI 访问
Web UI 默认在 `http://localhost:3000` 可用。你可以在配置中更改此设置。
:::
