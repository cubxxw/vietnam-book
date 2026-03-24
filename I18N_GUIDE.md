# Multi-language Support Guide | 多语言支持指南 | Hướng Dẫn Đa Ngôn Ngữ

## Overview | 概述 | Tổng Quan

This project now supports three languages:
- **中文 (Chinese)** - Default language at root `/`
- **English** - Available at `/en/`
- **Tiếng Việt (Vietnamese)** - Available at `/vi/`

本项目现在支持三种语言：
- **中文** - 根路径 `/` 的默认语言
- **英语** - 在 `/en/` 路径
- **越南语** - 在 `/vi/` 路径

Dự án này hiện hỗ trợ ba ngôn ngữ:
- **Tiếng Trung** - Ngôn ngữ mặc định tại gốc `/`
- **Tiếng Anh** - Có sẵn tại `/en/`
- **Tiếng Việt** - Có sẵn tại `/vi/`

---

## Directory Structure | 目录结构 | Cấu Trúc Thư Mục

```
vietnam-book/
├── index.md                          # 中文首页
├── chapters/                         # 中文章节
│   ├── prologue.md
│   ├── ch01-landing-shock.md
│   └── ...
├── en/                               # 英语内容
│   ├── index.md                      # English Home
│   └── chapters/                     # English Chapters
│       ├── prologue.md
│       ├── ch01-landing-shock.md
│       └── ...
├── vi/                               # 越南语内容
│   ├── index.md                      # Trang chủ Tiếng Việt
│   └── chapters/                     # Chương Tiếng Việt
│       ├── prologue.md
│       ├── ch01-landing-shock.md
│       └── ...
└── .vitepress/
    ├── config.mts                    # VitePress i18n 配置
    ├── theme/
    │   ├── index.ts                  # 主题入口（含语言切换器）
    │   └── style.css                 # 多语言样式优化
    └── components/
        └── LanguageSwitcher.vue      # 语言切换组件
```

---

## Configuration | 配置 | Cấu Hình

### VitePress i18n Config

The multi-language configuration is in `.vitepress/config.mts`:

多语言配置在 `.vitepress/config.mts` 中：

Cấu hình đa ngôn ngữ nằm trong `.vitepress/config.mts`:

```typescript
locales: {
  root: { label: '中文', lang: 'zh-CN', ... },
  en: { label: 'English', lang: 'en', ... },
  vi: { label: 'Tiếng Việt', lang: 'vi', ... }
}
```

---

## Usage | 使用方法 | Cách Dùng

### Development | 本地开发 | Phát Triển Cục Bộ

```bash
# Install dependencies | 安装依赖 | Cài đặt phụ thuộc
npm install

# Start dev server | 启动开发服务器 | Khởi động máy chủ phát triển
npm run dev

# Build for production | 生产构建 | Xây dựng cho production
npm run build

# Preview production build | 预览生产构建 | Xem trước bản build
npm run preview
```

### Accessing Different Languages | 访问不同语言 | Truy Cập Ngôn Ngữ Khác

- **中文**: http://localhost:5173/
- **English**: http://localhost:5173/en/
- **Tiếng Việt**: http://localhost:5173/vi/

---

## Adding New Translations | 添加新翻译 | Thêm Bản Dịch Mới

### Step 1: Create Translation File

Create the translated file in the appropriate language directory:

在相应的语言目录中创建翻译文件：

Tạo file dịch trong thư mục ngôn ngữ phù hợp:

```bash
# English example | 英语示例 | Ví dụ tiếng Anh
cp chapters/prologue.md en/chapters/prologue.md
# Edit with English translation

# Vietnamese example | 越南语示例 | Ví dụ tiếng Việt
cp chapters/prologue.md vi/chapters/prologue.md
# Edit with Vietnamese translation
```

### Step 2: Update Frontmatter

Update the frontmatter with translated metadata:

更新 frontmatter 中的翻译元数据：

Cập nhật frontmatter với metadata đã dịch:

```yaml
---
title: Chapter Title (Translated)
description: Description (Translated)
prev:
  text: 'Previous Chapter (Translated)'
  link: /en/chapters/previous-chapter
next:
  text: 'Next Chapter (Translated)'
  link: /en/chapters/next-chapter
---
```

### Step 3: Update Config

Add the new page to the sidebar configuration in `.vitepress/config.mts`:

在 `.vitepress/config.mts` 的侧边栏配置中添加新页面：

Thêm trang mới vào cấu hình sidebar trong `.vitepress/config.mts`:

```typescript
sidebar: {
  '/en/chapters/': [
    {
      text: 'Translated Section Title',
      items: [
        { text: 'Translated Page Title', link: '/en/chapters/page' }
      ]
    }
  ]
}
```

---

## Translation Guidelines | 翻译指南 | Nguyên Tắc Dịch

### Key Terms | 关键术语 | Thuật Ngữ Quan Trọng

| 中文 | English | Tiếng Việt |
|------|---------|------------|
| 悬浮 | Suspension | Treo Lơ |
| 在场 | Presence | Hiện Diện |
| 重量 | Weight | Trọng Lượng |
| 叙事 | Narrative | Kể Chuyện |
| 无常 | Impermanence | Vô Thường |
| 静止 | Stillness | Tĩnh Lặng |
| 过渡 | Transition | Chuyển Tiếp |
| 落地冲击 | Landing Shock | Cú Sốc Hạ Cánh |
| Tình Cảm | Tình Cảm (keep as-is) | Tình Cảm |

### Style Guide | 风格指南 | Phong Cách

1. **保持原文情感** - 翻译应保留原文的情感色彩和文学性
2. **文化适配** - 适当调整文化特定表达，使其对目标语言读者更友好
3. **术语一致性** - 关键概念术语在整个项目中保持一致
4. **保留核心概念** - 如 "Tình Cảm" 这样的越南语概念在所有语言中都保留

---

## Language Switcher | 语言切换器 | Bộ Chuyển Đổi Ngôn Ngữ

The language switcher component is located at:
- `.vitepress/components/LanguageSwitcher.vue`

It appears in the navigation bar and allows users to:
- View current language
- Switch between 中文/English/Tiếng Việt
- Maintain current page path when switching

语言切换器组件位于：
- `.vitepress/components/LanguageSwitcher.vue`

它显示在导航栏中，允许用户：
- 查看当前语言
- 在中文/英语/越南语之间切换
- 切换时保持当前页面路径

---

## Font Support | 字体支持 | Hỗ Trợ Font Chữ

The project uses Google Fonts for multi-language typography:

项目使用 Google Fonts 支持多语言排版：

Dự án sử dụng Google Fonts cho typography đa ngôn ngữ:

- **Noto Serif SC** - 简体中文
- **Noto Serif Vietnamese** - 越南文
- **Cormorant Garamond** - 英文标题

---

## Troubleshooting | 故障排除 | Khắc Phục Sự Cố

### Issue: Language switcher not appearing
**Solution**: Ensure the component is registered in `.vitepress/theme/index.ts`

### 问题：语言切换器未显示
**解决**: 确保组件已在 `.vitepress/theme/index.ts` 中注册

### Vấn đề: Bộ chuyển đổi ngôn ngữ không xuất hiện
**Giải pháp**: Đảm bảo component đã được đăng ký trong `.vitepress/theme/index.ts`

---

## Contributing | 贡献 | Đóng Góp

Contributions for improving translations are welcome! Please:
1. Keep the original meaning and tone
2. Maintain consistency with existing translations
3. Test the changes locally before submitting

欢迎贡献改进翻译！请：
1. 保持原意和语气
2. 与现有翻译保持一致
3. 提交前在本地测试更改

---

## License | 许可证 | Giấy Phép

Same as the main project.
