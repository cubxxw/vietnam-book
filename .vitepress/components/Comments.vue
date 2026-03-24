<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const { theme, lang } = useData()
const route = useRoute()
const utterancesRef = ref<HTMLElement | null>(null)
const isLoaded = ref(false)

// Utterances 配置
const config = {
  repo: 'cubxxw/vietnam-book', // GitHub 仓库
  issueTerm: 'pathname', // 使用路径名标识文章
  label: '💬 comments', // Issue 标签
  theme: 'github-light', // 亮色主题
  darkTheme: 'github-dark', // 暗色主题
  crossorigin: 'anonymous'
}

// 多语言配置
const langConfig: Record<string, string> = {
  'zh-CN': 'zh-CN',
  'en': 'en',
  'vi': 'vi'
}

// 加载 Utterances 脚本
const loadUtterances = () => {
  if (isLoaded.value || !utterancesRef.value) return
  
  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = config.crossorigin
  script.setAttribute('repo', config.repo)
  script.setAttribute('issue-term', config.issueTerm)
  script.setAttribute('label', config.label)
  script.setAttribute('theme', config.theme)
  
  // 根据当前语言设置评论语言
  const currentLang = langConfig[lang.value] || 'en'
  script.setAttribute('lang', currentLang)
  
  script.addEventListener('load', () => {
    isLoaded.value = true
  })
  
  utterancesRef.value.appendChild(script)
}

// 监听路由变化（页面切换时）
watch(() => route.path, () => {
  // 页面切换时重新加载评论
  if (utterancesRef.value) {
    utterancesRef.value.innerHTML = ''
    isLoaded.value = false
  }
  loadUtterances()
})

// 监听主题变化
watch(() => theme.value, (newTheme) => {
  if (!utterancesRef.value) return
  
  const newThemeName = newTheme === 'dark' ? config.darkTheme : config.theme
  const iframe = utterancesRef.value.querySelector('iframe')
  if (iframe) {
    iframe.contentWindow?.postMessage(
      { type: 'set-theme', theme: newThemeName },
      'https://utteranc.es'
    )
  }
})

onMounted(() => {
  loadUtterances()
})
</script>

<template>
  <div class="utterances-container">
    <div class="utterances-header">
      <h3 class="utterances-title">
        {{ lang === 'zh-CN' && '💬 评论' || lang === 'vi' && '💬 Bình luận' || '💬 Comments' }}
      </h3>
      <p class="utterances-description">
        <template v-if="lang === 'zh-CN'">
          使用 GitHub 账号登录并参与讨论
        </template>
        <template v-else-if="lang === 'vi'">
          Đăng nhập bằng GitHub để tham gia thảo luận
        </template>
        <template v-else>
          Login with GitHub to join the discussion
        </template>
      </p>
    </div>
    <div ref="utterancesRef" class="utterances-wrapper"></div>
  </div>
</template>

<style scoped>
.utterances-container {
  max-width: 740px;
  margin: 3rem auto 0;
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.utterances-header {
  margin-bottom: 1.5rem;
}

.utterances-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
  font-family: var(--vp-font-family-base);
}

.utterances-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
  font-family: var(--vp-font-family-base);
}

.utterances-wrapper {
  min-height: 200px;
}

.utterances-wrapper iframe {
  width: 100% !important;
  border: none !important;
}

/* 暗色模式适配 */
.dark .utterances-container {
  border-top-color: var(--vp-c-divider);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .utterances-container {
    padding: 1.5rem 1rem;
    margin: 2rem auto 0;
  }
  
  .utterances-title {
    font-size: 1.125rem;
  }
  
  .utterances-description {
    font-size: 0.8125rem;
  }
}
</style>
