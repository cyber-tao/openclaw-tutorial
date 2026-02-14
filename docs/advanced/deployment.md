# Deployment Options

Deploy OpenClaw in various environments.

## Deployment Methods

### Local Development
Perfect for testing and personal use:

```bash
# Start OpenClaw
openclaw gateway start

# Check status
openclaw status
```

### Docker Deployment
Containerized deployment for servers:

```bash
# Pull image
docker pull openclaw/openclaw:latest

# Run container
docker run -d \
  --name openclaw \
  -v ~/.openclaw:/root/.openclaw \
  -p 3000:3000 \
  openclaw/openclaw:latest
```

### Systemd Service
Run as a Linux system service:

```bash
# Create service file
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
# Enable and start
sudo systemctl enable openclaw
sudo systemctl start openclaw
```

### Kubernetes
Deploy to Kubernetes clusters:

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

## Cloud Platforms

### AWS
Deploy on EC2 or ECS with proper IAM roles.

### Google Cloud
Use Cloud Run for serverless deployment.

### Azure
Deploy to Azure Container Instances.

## Reverse Proxy

### Nginx Configuration

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

### SSL with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d your-domain.com
```

## High Availability

For production deployments:

1. **Load Balancing**: Multiple instances behind a load balancer
2. **Database**: Use external database for session storage
3. **Monitoring**: Set up health checks and alerts
4. **Backups**: Regular configuration and data backups

## Security Considerations

1. **Firewall**: Restrict incoming connections
2. **TLS**: Always use HTTPS in production
3. **Authentication**: Enable gateway authentication
4. **Updates**: Keep OpenClaw updated

## Monitoring

```bash
# Health check endpoint
curl http://localhost:3000/health

# Metrics endpoint
curl http://localhost:3000/metrics
```

## Best Practices

1. **Start small** - Begin with single instance
2. **Monitor resources** - Watch CPU, memory, API usage
3. **Plan for scale** - Design for horizontal scaling
4. **Document everything** - Keep deployment notes

::: tip Need Help?
Join our [Discord](https://discord.gg/clawd) for deployment support!
:::
