<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const route = useRoute()

// 只在章节页面显示评论
const showComments = computed(() => {
  const path = route.path
  return (
    path.includes('/chapters/') && 
    !path.includes('/chapters/index')
  )
})
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments v-if="showComments" />
    </template>
  </Layout>
</template>

<style scoped>
/* 评论区域样式已经在 Comments.vue 中定义 */
</style>
