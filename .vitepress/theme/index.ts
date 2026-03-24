import DefaultTheme from 'vitepress/theme'
import './style.css'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('LanguageSwitcher', LanguageSwitcher)
  },
}
