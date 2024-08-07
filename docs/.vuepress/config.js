import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'
import { searchProPlugin } from "vuepress-plugin-search-pro"
export default defineUserConfig({
  base: '/docs/',
  lang: 'zh',
  title: '技术文档',
  description: '温故而知新',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: navbar,
    sidebar: sidebar
  }),
  // 搜索插件设置
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
  bundler: viteBundler()
})
