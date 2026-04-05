import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',

  vite: {
    assetsInclude: ['**/*.JPG', '**/*.JPEG', '**/*.PNG', '**/*.GIF', '**/*.WEBP'],
  },

  // 禁用死链接检查（允许文档中的示例链接）
  ignoreDeadLinks: true,

  // 多语言配置
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
      title: '咖啡凉了，摩托还没停',
      description: '越南旅居篇 · 2025.7.14 — 9.12 · 鑫伟',
      themeConfig: {
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
        search: {
          provider: 'local',
          options: {
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
    },

    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: 'Coffee Cools, Motorbikes Don\'t',
      description: 'Vietnam Residency Notes · 2025.7.14 — 9.12 · Xin Wei',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Start Reading', link: '/en/chapters/prologue' },
          { text: 'Chapters', link: '/en/chapters/' },
          { text: 'Blog', link: 'https://nsddd.top/' },
          { text: 'GitHub', link: 'https://github.com/cubxxw/vietnam-book' },
        ],
        sidebar: {
          '/en/chapters/': [
            {
              text: 'Sixty Days in Vietnam',
              items: [
                { text: 'Prologue · Suspension', link: '/en/chapters/prologue' },
                { text: 'Chapter 1 · Ho Chi Minh: Landing', link: '/en/chapters/ch01-landing-shock' },
                { text: 'Chapter 2 · Da Lat: Stillness', link: '/en/chapters/ch02-dalat' },
                { text: 'Chapter 3 · Nha Trang: Sea', link: '/en/chapters/ch03-nhatrang' },
                { text: 'Chapter 4 · Hoi An: Presence', link: '/en/chapters/ch04-hoi-an' },
                { text: 'Chapter 5 · Da Nang: Transition', link: '/en/chapters/ch05-danang' },
                { text: 'Chapter 6 · Hue: Impermanence', link: '/en/chapters/ch06-hue' },
                { text: 'Chapter 7 · Hanoi: Narrative', link: '/en/chapters/ch07-hanoi' },
                { text: 'Epilogue · Weight', link: '/en/chapters/ch08-epilogue' },
              ]
            }
          ]
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search'
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear',
                footer: {
                  selectText: 'to select',
                  navigateText: 'to navigate',
                  closeText: 'to close'
                }
              }
            }
          }
        }
      }
    },

    vi: {
      label: 'Tiếng Việt',
      lang: 'vi',
      link: '/vi/',
      title: 'Cà Phê Nguội, Xe Máy Chưa Dừng',
      description: 'Ghi Chú Cư Trú Tại Việt Nam · 2025.7.14 — 9.12 · Tân Vĩ',
      themeConfig: {
        nav: [
          { text: 'Trang Chủ', link: '/vi/' },
          { text: 'Bắt Đầu Đọc', link: '/vi/chapters/prologue' },
          { text: 'Mục Lục', link: '/vi/chapters/' },
          { text: 'Blog', link: 'https://nsddd.top/' },
          { text: 'GitHub', link: 'https://github.com/cubxxw/vietnam-book' },
        ],
        sidebar: {
          '/vi/chapters/': [
            {
              text: 'Sáu Mươi Ngày Ở Việt Nam',
              items: [
                { text: 'Lời Mở · Treo Lơ', link: '/vi/chapters/prologue' },
                { text: 'Chương 1 · TP.HCM: Hạ Cánh', link: '/vi/chapters/ch01-landing-shock' },
                { text: 'Chương 2 · Đà Lạt: Tĩnh Lặng', link: '/vi/chapters/ch02-dalat' },
                { text: 'Chương 3 · Nha Trang: Biển', link: '/vi/chapters/ch03-nhatrang' },
                { text: 'Chương 4 · Hội An: Hiện Diện', link: '/vi/chapters/ch04-hoi-an' },
                { text: 'Chương 5 · Đà Nẵng: Chuyển Tiếp', link: '/vi/chapters/ch05-danang' },
                { text: 'Chương 6 · Huế: Vô Thường', link: '/vi/chapters/ch06-hue' },
                { text: 'Chương 7 · Hà Nội: Kể Chuyện', link: '/vi/chapters/ch07-hanoi' },
                { text: 'Lời Kết · Trọng Lượng', link: '/vi/chapters/ch08-epilogue' },
              ]
            }
          ]
        },
        search: {
          provider: 'local',
          options: {
            translations: {
              button: {
                buttonText: 'Tìm kiếm',
                buttonAriaLabel: 'Tìm kiếm'
              },
              modal: {
                noResultsText: 'Không tìm thấy kết quả',
                resetButtonTitle: 'Xóa',
                footer: {
                  selectText: 'để chọn',
                  navigateText: 'để điều hướng',
                  closeText: 'để đóng'
                }
              }
            }
          }
        }
      }
    }
  },

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    html: true,
  },

  head: [
    ['meta', { name: 'author', content: '鑫伟 (cubxxw)' }],
    ['meta', { property: 'og:title', content: '咖啡凉了，摩托还没停' }],
    ['meta', { property: 'og:description', content: '越南旅居篇 · 2025.7.14 — 9.12 · 两百万辆摩托车，和我这个多余的人' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700&family=Noto+Serif+Vietnamese:wght@400;600;700&family=Cormorant+Garamond:wght@500;600;700&display=swap' }],
  ],

  themeConfig: {
    siteTitle: '咖啡凉了，摩托还没停',

    footer: {
      message: '2025.7.14 — 9.12 · 越南',
      copyright: '© 2025 鑫伟 (cubxxw) · 两百万辆摩托车，和我这个多余的人'
    },

    darkModeSwitchLabel: '语言/Language',
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
  }
})
