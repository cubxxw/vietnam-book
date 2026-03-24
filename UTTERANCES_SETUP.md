# Utterances 评论系统配置指南

## ✅ 已完成配置

### 组件文件
- `.vitepress/components/Comments.vue` - Utterances 评论组件
- `.vitepress/theme/Layout.vue` - 自定义布局（集成评论）
- `.vitepress/theme/index.ts` - 主题入口（注册组件）

### 功能特性
- ✅ 基于 GitHub Issues 的评论系统
- ✅ 自动适配亮色/暗色主题
- ✅ 多语言支持（中文/英语/越南语）
- ✅ 只在章节页面显示评论
- ✅ 响应式设计

---

## 🔧 GitHub 仓库配置步骤

### 第 1 步：启用 GitHub Issues

1. 访问你的 GitHub 仓库：https://github.com/cubxxw/vietnam-book
2. 点击 **Settings** → **General**
3. 确保 **Features** 中的 **Issues** 已启用 ✓

### 第 2 步：安装 Utterances App

1. 访问：https://github.com/apps/utterances
2. 点击 **Install**
3. 选择你的仓库：`cubxxw/vietnam-book`
4. 点击 **Install** 完成安装

### 第 3 步：配置 Issue 标签

1. 在仓库中创建一个新标签：
   - 名称：`💬 comments`
   - 颜色：自选（如：#cccccc）

或者 Utterances 会自动创建第一个带标签的 Issue。

---

## 📋 配置说明

### 当前配置

```javascript
const config = {
  repo: 'cubxxw/vietnam-book',  // GitHub 仓库
  issueTerm: 'pathname',        // 使用路径名标识文章
  label: '💬 comments',         // Issue 标签
  theme: 'github-light',        // 亮色主题
  darkTheme: 'github-dark',     // 暗色主题
  crossorigin: 'anonymous'
}
```

### 配置选项说明

| 选项 | 当前值 | 说明 |
|------|--------|------|
| `repo` | `cubxxw/vietnam-book` | 你的 GitHub 仓库（用户/仓库名） |
| `issueTerm` | `pathname` | 文章标识方式，使用 URL 路径名 |
| `label` | `💬 comments` | 用于标识评论 Issue 的标签 |
| `theme` | `github-light` | 亮色模式下的主题 |
| `darkTheme` | `github-dark` | 暗色模式下的主题 |
| `crossorigin` | `anonymous` | CORS 设置 |

### issueTerm 可选值

- `pathname` (推荐) - URL 路径名，每个页面一个独立评论
- `url` - 完整 URL
- `title` - 页面标题
- `og:title` - Open Graph 标题

---

## 🎨 Utterances 主题选项

### 可用主题

**亮色主题:**
- `github-light` (默认)
- `github-orange`
- `github-dark`
- `preferred-color-scheme`

**暗色主题:**
- `github-dark` (推荐)
- `dark-blue`
- `photon-dark`
- `icy-dark`

### 修改主题

编辑 `.vitepress/components/Comments.vue`:

```javascript
const config = {
  theme: 'github-light',      // 修改亮色主题
  darkTheme: 'github-dark',   // 修改暗色主题
}
```

---

## 🌐 多语言支持

评论系统支持以下语言：

| 语言 | 代码 | 界面语言 |
|------|------|---------|
| 中文 | zh-CN | 中文界面 |
| English | en | English UI |
| Tiếng Việt | vi | Tiếng Việt UI |

语言会根据当前页面语言自动切换。

---

## 📍 评论显示位置

评论区域会显示在：
- ✅ 所有章节页面（`/chapters/*`）
- ❌ 首页
- ❌ 章节目录页

---

## 🔍 测试评论功能

### 本地测试

```bash
# 启动开发服务器
npm run dev

# 访问任意章节页面
http://localhost:5174/chapters/prologue
```

### 验证步骤

1. 打开任意章节页面
2. 滚动到页面底部
3. 应该看到 "💬 评论" 区域
4. 使用 GitHub 账号登录
5. 发表第一条评论（这会创建第一个 Issue）

---

## 🛠️ 故障排除

### 问题 1: 评论区域不显示

**检查:**
1. 确认在章节页面（非首页或目录页）
2. 检查浏览器控制台是否有错误
3. 确认网络连接正常（utteranc.es 需要可访问）

### 问题 2: 无法登录 GitHub

**解决:**
1. 确认已安装 Utterances GitHub App
2. 检查仓库 Issues 功能已启用
3. 确认仓库是公开的（私有仓库需要额外配置）

### 问题 3: 评论不加载

**检查:**
```html
<!-- 在浏览器开发者工具中检查 -->
<script src="https://utteranc.es/client.js" ...></script>
```
是否存在于页面中。

---

## 📚 更多资源

- **Utterances 官网**: https://utteranc.es/
- **GitHub 仓库**: https://github.com/utterance/utterances
- **主题预览**: https://utteranc.es/#theme-preview

---

## ⚙️ 高级配置

### 自定义 Issue 标题映射

如果想让每个页面的评论 Issue 标题更友好，可以添加 frontmatter:

```yaml
---
title: 第一章 · 胡志明：落地冲击
commentsTitle: "第一章讨论区：胡志明市的落地冲击与城市解剖"
---
```

然后修改 `Comments.vue`:

```javascript
const issueTitle = frontmatter.commentsTitle || route.path
```

### 私有仓库支持

如果使用私有仓库，需要：
1. 将 `crossorigin` 改为空字符串
2. 确保所有评论者都有仓库访问权限

```javascript
crossorigin: ''  // 私有仓库
```

---

*最后更新：2026 年 3 月 24 日*
