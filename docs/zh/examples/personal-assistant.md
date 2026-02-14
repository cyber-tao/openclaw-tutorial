# 个人助理实战场景

使用 OpenClaw 构建强大的个人 AI 助理。

## 概览

将 OpenClaw 转变为你的全能私人助理，协助你处理：
- 📅 日程与日历管理
- 📧 邮件处理与过滤
- 📝 快速记录笔记
- 🔔 提醒事项
- 📊 碎片化信息聚合

## 初始设置

### 渠道配置

```bash
# 添加 Telegram 以便随时随地快速访问
openclaw channel add telegram --token "你的_BOT_TOKEN"

# 添加 Discord 用于沉浸式复杂交互
openclaw channel add discord --token "你的_BOT_TOKEN" --client-id "你的_CLIENT_ID"
```

### 推荐技能

```bash
# 安装实用的助理技能
openclaw skill install apple-notes
openclaw skill install apple-reminders
openclaw skill install weather
openclaw skill install github
```

## 实战案例

### 早间简报

```
用户: 早上好！

OpenClaw: 早上好！这是你今天的早报：

📅 日历: 今天有 3 个事项
- 10:00 团队周会
- 14:00 项目评审
- 17:00 健身

📧 邮件: 12 封未读，其中 2 封比较重要

🌤️ 天气: 22°C, 多云转晴

🎯 任务: 有 5 个待办提醒
```

### 笔记记录

```
用户: 记一下：明天记得给牙医打电话

OpenClaw: ✅ 已在 Apple Notes 中创建笔记：
"明天记得给牙医打电话"
创建时间：2026年2月14日 9:30 AM
```

### 快速调研

```
用户: 推荐一下我附近的优质餐厅？

OpenClaw: [搜索周边餐厅中]
这是附近评分最高的几家餐厅：

1. The Italian Place ⭐ 4.8
   意大利菜 • $$$ • 0.3 km

2. Sushi Master ⭐ 4.7
   日料 • $$ • 0.5 km

3. Burger Joint ⭐ 4.6
   美式汉堡 • $ • 0.2 km
```

### 提醒事项管理

```
用户: 下午 6 点提醒我给植物浇水

OpenClaw: ✅ 已设置今天下午 6:00 的提醒：
"给植物浇水"

到时间我会通知你！
```

## 自动化思路

### 每日总结 Cron

```bash
openclaw cron add --name "daily-summary" \
  --schedule "0 20 * * *" \
  --task "总结今天的邮件、日历和任务完成情况"
```

### 天气预警

```bash
openclaw cron add --name "weather-alert" \
  --schedule "0 7 * * *" \
  --task "检查天气并为今天的着装提供建议"
```

### 每周回顾

```bash
openclaw cron add --name "weekly-review" \
  --schedule "0 18 * * 5" \
  --task "总结本周活动并规划下周计划"
```

## 个性化定制

### 用户偏好

在工作区创建 `USER.md` 文件记录你的偏好：

```markdown
# 用户画像

- 姓名：Hank
- 时区：Asia/Shanghai
- 偏好设定：
  - 早上 8 点发送早报
  - 总结格式：使用列表 (Bullet points)
  - 首选渠道：简单事务用 Telegram，复杂任务用 Discord
```

### 自定义命令快捷键

添加个人命令缩写：

```json
{
  "commands": {
    "/brief": "给我今天的简报",
    "/week": "显示本周总结",
    "/focus": "开启专注模式 (关闭通知)"
  }
}
```

## 成功小贴士

1. **指令清晰** - 明确的要求能获得更精准的结果
2. **善用追问** - 如果结果不理想，通过对话进一步完善
3. **设置自动化** - 让 OpenClaw 主动为你工作
4. **定期清理** - 及时存档不再需要的会话

::: tip 隐私第一
你的所有数据都保存在你自己的设备上。OpenClaw 不会将你的个人信息发送给第三方。
:::
