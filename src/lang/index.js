import {
  createI18n
} from 'vue-i18n' //引入vue-i18n组件
import en from './locales/./en'
import zhCN from './locales/./zh-CN'
const messages = {
  en: {
    ...en
  },
  'zh-CN': {
    ...zhCN
  }
}
// 自动根据浏览器系统语言设置语言
let language = navigator.language || navigator.browserLanguage
if (language && language.indexOf('en') != -1) {
  language = 'en'
} else {
  language = 'zh-CN'
}
console.log(language);
const i18n = createI18n({
  fallbackLocale: 'ch',
  globalInjection: true,
  legacy: false, // 必须指定'legacy: false'选项
  locale: language,
  messages
})

export default i18n
