# 部署选项

在不同环境中部署 OpenClaw。

## 部署方法

### 本地开发
最适合测试和个人日常使用：

```bash
# 启动 OpenClaw
openclaw gateway start

# 检查状态
openclaw status
```

### Docker 部署
适用于服务器的容器化部署：

```bash
# 拉取镜像
docker pull openclaw/openclaw:latest

# 运行容器
docker run -d \
  --name openclaw \
  -v ~/.openclaw:/root/.openclaw \
  -p 3000:3000 \
  openclaw/openclaw:latest
```

### Systemd 服务
作为 Linux 系统服务常驻运行：

```bash
# 创建服务文件
sudo nano /etc/systemd/system/openclaw.service
```

```ini
[Unit]
Description=OpenClaw AI Assistant
After=network.target

[Service]
Type=simple
User=openclaw
WorkingDirectory=/home/openclaw
ExecStart=/usr/bin/openclaw gateway start
Restart=always

[Install]
WantedBy=multi-user.target
```

```bash
# 启用并启动
sudo systemctl enable openclaw
sudo systemctl start openclaw
```

### Kubernetes (K8s)
部署到 K8s 集群：

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: openclaw
spec:
  replicas: 1
  selector:
    matchLabels:
      app: openclaw
  template:
    metadata:
      labels:
        app: openclaw
    spec:
      containers:
      - name: openclaw
        image: openclaw/openclaw:latest
        ports:
        - containerPort: 3000
        volumeMounts:
        - name: config
          mountPath: /root/.openclaw
      volumes:
      - name: config
        persistentVolumeClaim:
          claimName: openclaw-config
```

## 云平台部署

### AWS
在 EC2 或 ECS 上部署，并配置正确的 IAM 角色。

### Google Cloud
使用 Cloud Run 进行无服务器 (Serverless) 部署。

### Azure
部署到 Azure Container Instances。

## 反向代理

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 使用 Let's Encrypt 开启 SSL

```bash
# 安装 certbot
sudo apt install certbot python3-certbot-nginx

# 获取并配置证书
sudo certbot --nginx -d your-domain.com
```

## 高可用性 (HA)

针对生产环境部署：

1. **负载均衡**：在负载均衡器后部署多个实例
2. **外部数据库**：使用独立数据库存储会话数据
3. **监控报警**：配置健康检查和自动告警
4. **定期备份**：确保配置和数据有可靠备份

## 安全考量

1. **防火墙**：限制外部直接连接端口
2. **TLS/SSL**：在生产环境中务必使用 HTTPS
3. **身份验证**：开启网关 Token 认证
4. **及时更新**：保持 OpenClaw 处于最新版本

## 监控

```bash
# 健康检查端点
curl http://localhost:3000/health

# 指标统计端点
curl http://localhost:3000/metrics
```

## 最佳实践

1. **从小规模开始** - 先从单个实例开始运行
2. **监控资源占用** - 关注 CPU、内存和 API 调用量
3. **为扩展做准备** - 设计之初就考虑水平扩展能力
4. **记录部署笔记** - 记录每一个部署细节和环境差异

::: tip 需要帮助？
加入我们的 [Discord](https://discord.gg/clawd) 获取部署支持！
:::
