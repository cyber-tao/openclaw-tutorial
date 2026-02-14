# CLI 命令大全

OpenClaw 完整命令行工具 (CLI) 参考手册。

## 网关 (Gateway) 命令

### 启动/停止网关

```bash
# 启动网关
openclaw gateway start

# 停止网关
openclaw gateway stop

# 重启网关
openclaw gateway restart

# 检查网关运行状态
openclaw gateway status
```

### 配置管理

```bash
# 查看当前配置
openclaw gateway config get

# 查看配置 Schema (结构说明)
openclaw gateway config schema

# 应用新配置文件
openclaw gateway config apply config.json

# 合并/增量更新配置
openclaw gateway config patch updates.json
```

### 系统更新

```bash
# 检查新版本
openclaw gateway update check

# 执行更新操作
openclaw gateway update.run
```

## 渠道 (Channel) 命令

### 管理渠道

```bash
# 列出所有渠道
openclaw channel list

# 添加新渠道
openclaw channel add telegram --token "TOKEN"

# 移除渠道
openclaw channel remove telegram

# 检查渠道状态
openclaw channel status telegram

# 重启特定渠道
openclaw channel restart discord
```

## 会话 (Session) 命令

### 管理对话会话

```bash
# 列出活跃会话
openclaw sessions list

# 显示会话详细信息
openclaw sessions show <session-id>

# 清空会话内容
openclaw sessions clear <session-id>

# 删除会话
openclaw sessions delete <session-id>

# 导出会话数据
openclaw sessions export <session-id>
```

## 定时任务 (Cron) 命令

### 管理自动化任务

```bash
# 列出所有定时任务
openclaw cron list

# 添加新任务
openclaw cron add --name "my-job" --schedule "0 * * * *" --task "任务描述"

# 启用/禁用任务
openclaw cron enable my-job
openclaw cron disable my-job

# 立即手动运行一次任务
openclaw cron run my-job

# 移除任务
openclaw cron remove my-job

# 查看任务运行历史
openclaw cron runs my-job
```

## 技能 (Skill) 命令

### 管理扩展功能

```bash
# 搜索可用技能
openclaw skill search <查询词>

# 安装技能
openclaw skill install <技能名称>

# 列出已安装技能
openclaw skill list

# 更新技能
openclaw skill update <技能名称>

# 卸载技能
openclaw skill remove <技能名称>
```

## 智能体 (Agent) 命令

### 管理 AI 智能体

```bash
# 列出可用智能体
openclaw agents list

# 生成一个新智能体任务
openclaw agent spawn --task "任务描述" --model "模型名称"

# 向特定智能体发送消息
openclaw agent send <agent-id> "消息内容"
```

## 诊断与调试命令

### 健康检查

```bash
# 运行全面诊断
openclaw doctor

# 查看系统简要状态
openclaw status

# 查看系统日志
openclaw logs

# 实时跟踪日志输出
openclaw logs --follow

# 按级别过滤日志
openclaw logs --level error

# 按渠道过滤日志
openclaw logs --channel telegram
```

## 工具命令 (Utilities)

### 备份与恢复

```bash
# 创建系统备份
openclaw backup create

# 列出所有备份
openclaw backup list

# 从特定备份恢复
openclaw backup restore <backup-id>
```

### 令牌 (Token) 管理

```bash
# 生成新的网关 Token
openclaw gateway token generate

# 列出所有访问 Token
openclaw token list

# 撤销特定 Token
openclaw token revoke <token-id>
```

## 全局选项

```bash
# 获取帮助信息
openclaw --help
openclaw <命令> --help

# 查看版本号
openclaw --version

# 开启详细输出模式
openclaw --verbose <命令>

# 以 JSON 格式输出结果
openclaw --json <命令>

# 指定配置文件路径
openclaw --config /path/to/config <命令>
```

## 环境变量

| 变量名 | 描述 |
|----------|-------------|
| `OPENCLAW_CONFIG_DIR` | 配置文件目录 (默认: `~/.openclaw`) |
| `OPENCLAW_LOG_LEVEL` | 日志级别 (debug, info, warn, error) |
| `OPENCLAW_PORT` | Web UI 访问端口 (默认: 3000) |
| `OPENCLAW_GATEWAY_TOKEN` | 网关身份验证令牌 |

::: tip 自动补全
在 Shell 中开启命令补全：`openclaw completion install`
:::
