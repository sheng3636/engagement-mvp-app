import { createApp } from 'vue'
import App from './App.vue'
import i18n from './lang'
import '@/styles/index.scss' // 全局css

createApp(App).use(i18n).mount('#app')
