import { defineConfig } from 'vitepress'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/vietnam-book/' : '/',
  lang: 'zh-CN',
  title: '咖啡凉了，摩托还没停',
  description: '越南旅居篇 · 2025.7.14 — 9.12 · 鑫伟',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'author', content: '鑫伟 (cubxxw)' }],
    ['meta', { property: 'og:title', content: '咖啡凉了，摩托还没停' }],
    ['meta', { property: 'og:description', content: '越南旅居篇 · 2025.7.14 — 9.12 · 两百万辆摩托车，和我这个多余的人' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&display=swap' }],
  ],

  themeConfig: {
    siteTitle: '咖啡凉了，摩托还没停',

    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/chapters/prologue' },
      { text: '章节目录', link: '/chapters/' },
    ],

    sidebar: {
      '/chapters/': [
        {
          text: '越南六十日',
          items: [
            { text: '序 · 为什么是越南', link: '/chapters/prologue' },
            { text: '第一章 · 胡志明：落地冲击', link: '/chapters/ch01-landing-shock' },
            { text: '第二章 · 河内迷宫', link: '/chapters/ch02-hanoi-maze' },
            { text: '第三章 · 会安时光', link: '/chapters/ch03-hoi-an-time' },
            { text: '第四章 · 岘港与海', link: '/chapters/ch04-danang-sea' },
            { text: '第六章 · 人与事', link: '/chapters/ch06-people-stories' },
            { text: '第七章 · 食物人类学', link: '/chapters/ch07-food-anthropology' },
            { text: '第八章 · 商业观察', link: '/chapters/ch08-business-observation' },
            { text: '第九章 · 认知跃迁', link: '/chapters/ch09-cognitive-leap' },
            { text: '终章 · 离开与归来', link: '/chapters/ch10-epilogue' },
          ]
        }
      ]
    },

    footer: {
      message: '2025.7.14 — 9.12 · 越南',
      copyright: '© 2025 鑫伟 (cubxxw) · 两百万辆摩托车，和我这个多余的人'
    },

    darkModeSwitchLabel: '明暗',
    lightModeSwitchTitle: '切换亮色',
    darkModeSwitchTitle: '切换暗色',

    lastUpdated: {
      text: '更新于',
      formatOptions: {
        dateStyle: 'short',
      }
    },

    docFooter: {
      prev: '上一章',
      next: '下一章'
    },

    outline: {
      label: '本章导航',
      level: [2, 3]
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索全文',
                buttonAriaLabel: '搜索'
              },
              modal: {
                noResultsText: '没有找到相关内容',
                resetButtonTitle: '清除',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    }
  }
})
