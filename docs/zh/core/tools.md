# 工具系统

通过强大的工具扩展 OpenClaw 的能力。

## 什么是工具？

工具是允许 OpenClaw 与现实世界交互的函数：
- 执行 shell 命令
- 浏览网页
- 读写文件
- 控制智能家居设备
- 以及更多功能！

## 内置工具

### 文件操作
| 工具 | 描述 |
|------|-------------|
| `read` | 读取文件内容 |
| `write` | 创建或覆盖文件 |
| `edit` | 进行精确的文件编辑 |

### 网页工具
| 工具 | 描述 |
|------|-------------|
| `web_search` | 网页搜索 (Brave API) |
| `web_fetch` | 获取并提取网页内容 |
| `browser` | 控制 Web 浏览器 |

### 系统工具
| 工具 | 描述 |
|------|-------------|
| `exec` | 运行 shell 命令 |
| `process` | 管理后台进程 |
| `cron` | 安排自动化任务 |

### 通讯工具
| 工具 | 描述 |
|------|-------------|
| `message` | 向渠道发送消息 |
| `tts` | 文本转语音 (Text-to-speech) |

## 工具权限

控制哪些工具可用：

```json
{
  "tools": {
    "enabled": ["read", "write", "exec", "web_search"],
    "disabled": ["gateway", "sessions_spawn"],
    "requireConfirmation": ["exec", "write"]
  }
}
```

## 工具使用示例

### 读取文件
```
用户: 读取 config.json 的内容
OpenClaw: [调用 read 工具]
这是 config.json 的内容：
{ ... }
```

### 网页搜索
```
用户: 最新的 AI 新闻是什么？
OpenClaw: [调用 web_search 工具]
以下是最新的 AI 新闻头条...
```

### 执行命令
```
用户: 显示我的磁盘占用情况
OpenClaw: [调用 exec 工具执行 df -h]
这是你的磁盘占用情况：
Filesystem      Size  Used Avail Use%
/dev/disk1s1    466G  234G  180G  57%
```

## 自定义工具

使用 Skills 系统创建自定义工具：

1. 定义工具 Schema
2. 实现工具逻辑
3. 在 OpenClaw 中注册

详见 [Skills 技能系统](/zh/advanced/skills)。

## 安全考量

- 工具以你的用户权限运行
- 危险操作需要显式确认
- 所有工具调用都会被记录以供审计

::: warning 安全提示
`exec` 工具可以运行任何命令。在群聊中使用时，请务必仔细审核工具调用！
:::
