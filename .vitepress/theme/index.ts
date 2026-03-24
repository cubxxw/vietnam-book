import DefaultTheme from 'vitepress/theme'
import './style.css'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import Comments from '../components/Comments.vue'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    app.component('LanguageSwitcher', LanguageSwitcher)
    app.component('Comments', Comments)
  },
}
