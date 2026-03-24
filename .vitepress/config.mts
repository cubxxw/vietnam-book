import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',

  vite: {
    assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.GIF', '**/*.WEBP'],
  },
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
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Noto+Serif+SC:wght@400;600;700&display=swap' }],
  ],

  themeConfig: {
    siteTitle: '咖啡凉了，摩托还没停',

    nav: [
      { text: '首页', link: '/' },
      { text: '开始阅读', link: '/chapters/prologue' },
      { text: '章节目录', link: '/chapters/' },
      { text: '作者博客', link: 'https://nsddd.top/' },
      { text: 'GitHub', link: 'https://github.com/cubxxw/vietnam-book' },
    ],

    sidebar: {
      '/chapters/': [
        {
          text: '越南六十日',
          items: [
            { text: '序 · 悬浮', link: '/chapters/prologue' },
            { text: '第一章 · 胡志明：落地', link: '/chapters/ch01-landing-shock' },
            { text: '第二章 · 大叻：静止', link: '/chapters/ch02-dalat' },
            { text: '第三章 · 芽庄：海', link: '/chapters/ch03-nhatrang' },
            { text: '第四章 · 会安：在场', link: '/chapters/ch04-hoi-an' },
            { text: '第五章 · 岘港：过渡', link: '/chapters/ch05-danang' },
            { text: '第六章 · 顺化：无常', link: '/chapters/ch06-hue' },
            { text: '第七章 · 河内：叙事', link: '/chapters/ch07-hanoi' },
            { text: '终章 · 重量', link: '/chapters/ch08-epilogue' },
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
