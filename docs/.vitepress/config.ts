import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenClaw',
  description: 'Modern AI Assistant Tutorial',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#FF6B35' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
          { text: 'Core Features', link: '/core/channels', activeMatch: '/core/' },
          { text: 'Advanced', link: '/advanced/multi-agent', activeMatch: '/advanced/' },
          { text: 'Examples', link: '/examples/personal-assistant', activeMatch: '/examples/' },
          { text: 'Reference', link: '/reference/cli', activeMatch: '/reference/' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'What is OpenClaw?', link: '/guide/what-is-openclaw' },
                { text: 'Installation', link: '/guide/installation' },
                { text: 'Quick Start', link: '/guide/quick-start' },
                { text: 'Basic Usage', link: '/guide/basic-usage' }
              ]
            }
          ],
          '/core/': [
            {
              text: 'Core Features',
              items: [
                { text: 'Channel Configuration', link: '/core/channels' },
                { text: 'Session Management', link: '/core/sessions' },
                { text: 'Tools System', link: '/core/tools' },
                { text: 'Security', link: '/core/security' }
              ]
            }
          ],
          '/advanced/': [
            {
              text: 'Advanced Features',
              items: [
                { text: 'Multi-Agent Routing', link: '/advanced/multi-agent' },
                { text: 'Skills System', link: '/advanced/skills' },
                { text: 'Automation', link: '/advanced/automation' },
                { text: 'Deployment', link: '/advanced/deployment' }
              ]
            }
          ],
          '/examples/': [
            {
              text: 'Use Cases',
              items: [
                { text: 'Personal Assistant', link: '/examples/personal-assistant' },
                { text: 'Development Assistant', link: '/examples/dev-assistant' },
                { text: 'Smart Home', link: '/examples/smart-home' }
              ]
            }
          ],
          '/reference/': [
            {
              text: 'Reference',
              items: [
                { text: 'CLI Commands', link: '/reference/cli' },
                { text: 'Configuration', link: '/reference/config' },
                { text: 'API Reference', link: '/reference/api' },
                { text: 'FAQ', link: '/reference/faq' },
                { text: 'Troubleshooting', link: '/reference/troubleshooting' }
              ]
            }
          ]
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '入门指南', link: '/zh/guide/getting-started', activeMatch: '/zh/guide/' },
          { text: '核心功能', link: '/zh/core/channels', activeMatch: '/zh/core/' },
          { text: '进阶功能', link: '/zh/advanced/multi-agent', activeMatch: '/zh/advanced/' },
          { text: '实战案例', link: '/zh/examples/personal-assistant', activeMatch: '/zh/examples/' },
          { text: '参考资源', link: '/zh/reference/cli', activeMatch: '/zh/reference/' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '入门指南',
              items: [
                { text: '什么是 OpenClaw？', link: '/zh/guide/what-is-openclaw' },
                { text: '安装与配置', link: '/zh/guide/installation' },
                { text: '快速开始', link: '/zh/guide/quick-start' },
                { text: '基础使用', link: '/zh/guide/basic-usage' }
              ]
            }
          ],
          '/zh/core/': [
            {
              text: '核心功能',
              items: [
                { text: '渠道配置', link: '/zh/core/channels' },
                { text: 'Session 管理', link: '/zh/core/sessions' },
                { text: '工具系统', link: '/zh/core/tools' },
                { text: '安全配置', link: '/zh/core/security' }
              ]
            }
          ],
          '/zh/advanced/': [
            {
              text: '进阶功能',
              items: [
                { text: 'Multi-Agent 路由', link: '/zh/advanced/multi-agent' },
                { text: 'Skills 技能系统', link: '/zh/advanced/skills' },
                { text: '自动化', link: '/zh/advanced/automation' },
                { text: '部署选项', link: '/zh/advanced/deployment' }
              ]
            }
          ],
          '/zh/examples/': [
            {
              text: '实战案例',
              items: [
                { text: '个人助理场景', link: '/zh/examples/personal-assistant' },
                { text: '开发辅助场景', link: '/zh/examples/dev-assistant' },
                { text: '智能家居场景', link: '/zh/examples/smart-home' }
              ]
            }
          ],
          '/zh/reference/': [
            {
              text: '参考资源',
              items: [
                { text: 'CLI 命令大全', link: '/zh/reference/cli' },
                { text: '配置文件参考', link: '/zh/reference/config' },
                { text: 'API 文档', link: '/zh/reference/api' },
                { text: '常见问题 FAQ', link: '/zh/reference/faq' },
                { text: '故障排除', link: '/zh/reference/troubleshooting' }
              ]
            }
          ]
        },
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium'
          }
        },
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'OpenClaw Tutorial',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/openclaw/openclaw' },
      { icon: 'discord', link: 'https://discord.gg/clawd' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present OpenClaw Team'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  }
})
