<script setup lang="ts">
import { computed } from 'vue'
import { useData, inBrowser } from 'vitepress'

const { site, page, lang } = useData()

// 定义支持的语言配置
const locales = [
  { code: 'zh-CN', label: '中文', link: '/' },
  { code: 'en', label: 'English', link: '/en/' },
  { code: 'vi', label: 'Tiếng Việt', link: '/vi/' }
]

// 获取当前语言
const currentLang = computed(() => {
  return locales.find(l => l.code === lang.value) || locales[0]
})

// 获取当前路径（去掉语言前缀）
const getCurrentPath = () => {
  if (!inBrowser) return ''
  const path = window.location.pathname
  // 去掉语言前缀
  return path.replace(/^\/(zh-CN|en|vi)/, '') || '/'
}

// 切换到目标语言
const switchLanguage = (targetLang: typeof locales[0]) => {
  if (!inBrowser) return
  const currentPath = getCurrentPath()
  // 构建新语言的 URL
  const newPath = targetLang.code === 'zh-CN' 
    ? currentPath 
    : `/${targetLang.code}${currentPath}`
  window.location.href = newPath
}
</script>

<template>
  <div class="language-switcher">
    <div class="language-dropdown">
      <button class="language-button">
        <span class="language-icon">🌐</span>
        <span class="language-label">{{ currentLang.label }}</span>
        <span class="language-arrow">▼</span>
      </button>
      <div class="language-menu">
        <button
          v-for="locale in locales"
          :key="locale.code"
          class="language-option"
          :class="{ active: locale.code === currentLang.code }"
          @click="switchLanguage(locale)"
        >
          <span class="option-label">{{ locale.label }}</span>
          <span v-if="locale.code === currentLang.code" class="option-check">✓</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-dropdown {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.language-button:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.language-icon {
  font-size: 1rem;
}

.language-label {
  font-weight: 500;
}

.language-arrow {
  font-size: 0.625rem;
  transition: transform 0.2s ease;
}

.language-dropdown:hover .language-arrow {
  transform: rotate(180deg);
}

.language-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 140px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 0.25rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-0.5rem);
  transition: all 0.2s ease;
  z-index: 100;
}

.language-dropdown:hover .language-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--vp-c-text-1);
  transition: all 0.15s ease;
  text-align: left;
}

.language-option:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.language-option.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.option-check {
  font-weight: bold;
}

@media (max-width: 768px) {
  .language-button {
    padding: 0.375rem 0.5rem;
    font-size: 0.8125rem;
  }
  
  .language-menu {
    min-width: 120px;
  }
  
  .language-option {
    padding: 0.375rem 0.5rem;
    font-size: 0.8125rem;
  }
}
</style>
