# Installation

Get OpenClaw up and running on your system. Choose your preferred installation method below.

## Quick Install (Recommended)

The fastest way to install OpenClaw:

::: code-group
```bash [macOS/Linux]
curl -fsSL https://openclaw.ai/install.sh | bash
```

```powershell [Windows (PowerShell)]
iwr -useb https://openclaw.ai/install.ps1 | iex
```
:::

That's it! The installer will automatically detect your operating system, install dependencies, and set everything up for you.

## System Requirements

Before installing, ensure your system meets these requirements:

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Node.js | 22.0.0 | 22.x LTS |
| RAM | 512MB | 2GB+ |
| Storage | 500MB | 2GB+ |
| OS | Linux, macOS, Windows | Linux/macOS |

::: warning Node.js Version
OpenClaw requires **Node.js 22 or higher**. Using an older version will result in errors.
:::

## Check Your Node.js Version

```bash
node --version
# Expected output: v22.x.x
```

If you need to upgrade, we recommend using [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm):

```bash
# Using nvm
nvm install 22
nvm use 22

# Using fnm
fnm install 22
fnm use 22
```

## Installation Methods

### Option 1: npm (Recommended)

The easiest way to install OpenClaw globally:

```bash
npm install -g openclaw
```

### Option 2: pnpm

If you prefer pnpm:

```bash
pnpm install -g openclaw
```

### Option 3: Docker

For containerized deployment:

```bash
# Pull the image
docker pull openclaw/openclaw:latest

# Run the container
docker run -d \
  --name openclaw \
  -p 3000:3000 \
  -v openclaw-data:/app/data \
  openclaw/openclaw:latest
```

### Option 4: From Source

For development or customization:

```bash
# Clone the repository
git clone https://github.com/openclaw/openclaw.git
cd openclaw

# Install dependencies
pnpm install

# Build the project
pnpm build

# Link globally
pnpm link --global
```

## Verify Installation

After installation, verify that OpenClaw is working:

```bash
openclaw --version
# Expected: x.x.x

openclaw --help
# Shows available commands
```

## Directory Structure

After installation, OpenClaw uses these directories:

```
~/.openclaw/
├── config.json       # Main configuration
├── sessions/         # Session data
├── logs/            # Log files
└── skills/          # Installed skills
```

## Environment Variables

OpenClaw can be configured via environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `OPENCLAW_CONFIG_DIR` | Configuration directory | `~/.openclaw` |
| `OPENCLAW_LOG_LEVEL` | Logging level | `info` |
| `OPENCLAW_PORT` | Web UI port | `3000` |

## Troubleshooting Installation

### Permission Denied

If you get permission errors with npm:

```bash
# Option 1: Use sudo (macOS/Linux)
sudo npm install -g openclaw

# Option 2: Fix npm permissions
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# Add to your shell config: export PATH=~/.npm-global/bin:$PATH
```

### Node Version Issues

```bash
# Check your version
node --version

# Must be 22.x or higher
# If not, upgrade using nvm or fnm
```

### Docker Issues

```bash
# Check Docker is running
docker info

# View logs
docker logs openclaw

# Restart container
docker restart openclaw
```

## Next Steps

Now that OpenClaw is installed, proceed to the [Quick Start](/guide/quick-start) guide to configure and launch your AI assistant!

::: tip Need Help?
Join our [Discord community](https://discord.gg/clawd) for support and discussions.
:::
