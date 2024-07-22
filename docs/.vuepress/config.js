import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'
export default defineUserConfig({
  base: '/docs/',
  lang: 'zh',
  title: '技术文档',
  description: '温故而知新',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: navbar,
    sidebar: sidebar,
    // 设置搜索框的样式
    search: {
      provider: "local"
    },
  }),
  bundler: viteBundler()
})
