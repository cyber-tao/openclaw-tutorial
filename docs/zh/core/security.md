# 安全配置

保护你的 OpenClaw 安装和数据安全。

## 安全概览

OpenClaw 运行在你自己的基础设施上，让你拥有完全的安全控制权：

- 🔒 **本地数据**：所有数据都保存在你自己的服务器上
- 🔑 **API 密钥**：安全存储，从不外传
- 🛡️ **访问控制**：细粒度的权限管理
- 📝 **审计日志**：完整的活动跟踪记录

## 身份验证

### Gateway Token

网关令牌保护本地 API 不被非法访问：

```bash
# 生成新令牌
openclaw gateway token generate

# 在配置中设置令牌
export OPENCLAW_GATEWAY_TOKEN="你的安全令牌"
```

### IP 限制

通过 IP 地址限制访问：

```json
{
  "gateway": {
    "allowedIPs": ["127.0.0.1", "192.168.1.0/24"]
  }
}
```

## 权限级别

### 用户级别

| 级别 | 描述 |
|-------|-------------|
| `admin` | 拥有所有功能的完整访问权限 |
| `user` | 标准访问权限，不能更改系统设置 |
| `guest` | 只读权限，工具调用受限 |

### 工具限制

为不同用户配置工具访问权限：

```json
{
  "permissions": {
    "guest": {
      "allowedTools": ["read", "web_search"],
      "deniedTools": ["exec", "write", "gateway"]
    }
  }
}
```

## 群聊安全

群聊环境下的特殊考量：

- **危险工具**：需要显式的二次确认
- **速率限制**：防止消息滥用
- **用户识别**：跟踪谁发送了命令

```json
{
  "groupSecurity": {
    "requireConfirmationFor": ["exec", "write", "gateway"],
    "rateLimit": {
      "maxMessages": 10,
      "windowMs": 60000
    }
  }
}
```

## 凭据管理

### 环境变量

在环境变量中存储敏感信息：

```bash
# 在你的 shell 配置文件中
export ANTHROPIC_API_KEY="sk-ant-..."
export OPENAI_API_KEY="sk-..."
```

### 配置引用

在配置文件中引用环境变量：

```json
{
  "providers": {
    "anthropic": {
      "apiKey": "${ANTHROPIC_API_KEY}"
    }
  }
}
```

::: warning 严禁提交私钥！
务必使用环境变量管理敏感数据。严禁在代码或配置文件中硬编码 API 密钥。
:::

## 审计日志

启用全面的日志记录：

```json
{
  "logging": {
    "level": "info",
    "auditLog": true,
    "logToolCalls": true
  }
}
```

查看审计日志：

```bash
openclaw logs --audit
```

## 最佳实践

1. **定期更换 Token** - 定期更新网关访问令牌
2. **审查权限** - 审计用户的访问级别
3. **监控日志** - 检查是否存在可疑活动
4. **定期更新** - 保持 OpenClaw 处于最新版本
5. **备份配置** - 妥善保管你的配置文件

## 安全检查清单

- [ ] 已配置网关令牌 (Gateway Token)
- [ ] 已设置 IP 访问限制 (如果需要)
- [ ] API 密钥已通过环境变量管理
- [ ] 已配置工具调用权限
- [ ] 已开启群聊安全策略
- [ ] 已开启审计日志
- [ ] 已配置定期备份
