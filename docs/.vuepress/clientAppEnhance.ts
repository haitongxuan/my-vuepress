import { defineClientAppEnhance } from '@vuepress/client'
import ElementPluse from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(ElementPluse)
})