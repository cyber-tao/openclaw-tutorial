# 故障排除指南

解决 OpenClaw 运行中的常见问题。

## 快速自查

遇到问题时，请首先运行诊断命令：

```bash
openclaw doctor
```

该命令会检查：
- Node.js 版本是否达标
- OpenClaw 版本信息
- 配置文件的合法性
- AI 提供商的连通性
- 各个消息渠道的状态

## 常见问题与解决方案

### 网关无法启动

**异常表现：**
- `openclaw gateway start` 执行失败
- 报错 "Port already in use" (端口已被占用)

**解决方案：**

1. 检查端口占用情况：
```bash
lsof -i :3000
```

2. 结束占用该端口的进程：
```bash
kill -9 <PID>
```

3. 或者在环境变量中更改端口：
```bash
export OPENCLAW_PORT=3001
openclaw gateway start
```

### 机器人没有响应

**异常表现：**
- 发送消息后没有收到 AI 的回复
- 网关状态显示为 "Running"

**解决方案：**

1. 检查渠道活跃状态：
```bash
openclaw channel status telegram
```

2. 查看特定渠道的详细日志：
```bash
openclaw logs --channel telegram
```

3. 尝试重启该渠道：
```bash
openclaw channel restart telegram
```

4. 再次确认 Bot Token 是否填写正确

### API 密钥报错

**异常表现：**
- 报错 "Invalid API key"
- 提示身份验证失败

**解决方案：**

1. 确认环境变量已正确设置：
```bash
echo $ANTHROPIC_API_KEY
```

2. 检查配置中的引用是否正确：
```bash
openclaw config get providers.anthropic
```

3. 在提供商控制台重新生成一个新的密钥尝试

### 触发频率限制 (Rate Limiting)

**异常表现：**
- 报错 "Rate limit exceeded"
- 响应变得极其缓慢或频繁报错

**解决方案：**

1. 降低发信频率
2. 开启缓存功能
3. 升级你的 AI 提供商套餐级别
4. 配置备用提供商实现自动降级

```json
{
  "providers": {
    "fallback": {
      "enabled": true,
      "provider": "openai"
    }
  }
}
```

### 内存管理问题

**异常表现：**
- 系统响应变慢
- 出现 OOM (内存溢出) 错误

**解决方案：**

1. 清理过期会话：
```bash
openclaw sessions clear --older-than 7d
```

2. 限制会话历史长度：
```json
{
  "sessions": {
    "maxHistoryLength": 50
  }
}
```

3. 设置定期重启任务：
```bash
openclaw gateway restart
```

### 工具执行失败

**异常表现：**
- 工具执行超时
- 提示 "Permission denied" (权限不足)

**解决方案：**

1. 检查工具权限配置：
```bash
openclaw config get tools
```

2. 适当增加超时时间：
```json
{
  "tools": {
    "exec": {
      "timeout": 60000
    }
  }
}
```

3. 检查相关文件/目录的系统读写权限

### Discord 权限错误

**异常表现：**
- 机器人无法发送消息
- 提示缺少必要权限

**解决方案：**

1. 检查机器人在服务器中的角色权限
2. 在 Discord 开发者门户中开启必要的 Intents (事件订阅)
3. 使用正确的权限链接重新邀请机器人

### WhatsApp Webhook 故障

**异常表现：**
- 无法接收到消息
- Webhook 验证失败

**解决方案：**

1. 验证你的 Webhook URL 是否可以从公网访问
2. 检查 SSL 证书是否过期或配置错误
3. 确认 Verify Token 是否与 Meta 后台填写的完全一致

## 日志分析

### 查看日志

```bash
# 查看所有日志
openclaw logs

# 实时跟踪日志
openclaw logs --follow

# 按错误级别过滤
openclaw logs --level error

# 按渠道名称过滤
openclaw logs --channel telegram

# 导出日志文件用于分析
openclaw logs --export > debug.log
```

### 常见日志错误含义

| 关键词 | 含义 | 建议操作 |
|---------|---------|--------|
| `ECONNREFUSED` | 连接被拒绝 | 检查网络或代理设置 |
| `ETIMEDOUT` | 请求超时 | 检查网络延迟或增加超时配置 |
| `401 Unauthorized` | 鉴权失败 | 检查 API Key 或 Token |
| `429 Too Many Requests` | 频率超限 | 降低调用频率 |

## 重置与恢复

### 深度重置 (Full Reset)

```bash
# 停止网关
openclaw gateway stop

# 备份当前配置
cp ~/.openclaw/config.json ~/config.backup.json

# 清空所有会话数据
rm -rf ~/.openclaw/sessions/*

# 清理历史日志
rm -rf ~/.openclaw/logs/*

# 重新启动
openclaw gateway start
```

### 从备份中恢复

```bash
openclaw backup restore <backup-id>
```

## 获取进一步帮助

如果问题仍未解决：

1. **搜索已有 Issue**：查看 [GitHub Issues](https://github.com/openclaw/openclaw/issues)
2. **社区求助**：加入 [我们的 Discord 社区](https://discord.gg/clawd)
3. **开启 Debug 模式**：运行网关时带上调试日志级别
   ```bash
   OPENCLAW_LOG_LEVEL=debug openclaw gateway start
   ```

4. **提交 Bug 报告**：请务必包含：
   - OpenClaw 版本
   - Node.js 版本
   - 操作系统信息
   - 相关错误日志
   - 复现问题的具体步骤

::: tip 提问前
请先执行 `openclaw doctor` 并将输出结果附在你的反馈中，这能极大加快解决速度！
:::
