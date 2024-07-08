export const sidebar = {
  '/python/Python-Core-50-Courses/': [
    {
      text: '指南',
      children: [
        '/python/Python-Core-50-Courses/introduction.md',
        '/python/Python-Core-50-Courses/getting-started.md',
        '/python/Python-Core-50-Courses/configuration.md',
        '/python/Python-Core-50-Courses/page.md',
        '/python/Python-Core-50-Courses/markdown.md',
        '/python/Python-Core-50-Courses/assets.md',
        '/python/Python-Core-50-Courses/i18n.md',
        '/python/Python-Core-50-Courses/deployment.md',
        '/python/Python-Core-50-Courses/theme.md',
        '/python/Python-Core-50-Courses/plugin.md',
        '/python/Python-Core-50-Courses/bundler.md',
        '/python/Python-Core-50-Courses/migration.md',
        '/python/Python-Core-50-Courses/troubleshooting.md',
      ],
    },
  ],
  '/zh/advanced/': [
    {
      text: '深入',
      children: [
        '/zh/advanced/architecture.md',
        '/zh/advanced/plugin.md',
        '/zh/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/zh/advanced/cookbook/README.md',
        '/zh/advanced/cookbook/usage-of-client-config.md',
        '/zh/advanced/cookbook/adding-extra-pages.md',
        '/zh/advanced/cookbook/making-a-theme-extendable.md',
        '/zh/advanced/cookbook/passing-data-to-client-code.md',
        '/zh/advanced/cookbook/markdown-and-vue-sfc.md',
        '/zh/advanced/cookbook/resolving-routes.md',
      ],
    },
  ],
  '/zh/reference/': [
    {
      text: '核心',
      collapsible: true,
      children: [
        '/zh/reference/cli.md',
        '/zh/reference/config.md',
        '/zh/reference/frontmatter.md',
        '/zh/reference/components.md',
        '/zh/reference/plugin-api.md',
        '/zh/reference/theme-api.md',
        '/zh/reference/client-api.md',
        '/zh/reference/node-api.md',
      ],
    },
    {
      text: '打包工具',
      children: [
        '/zh/reference/bundler/vite.md',
        '/zh/reference/bundler/webpack.md',
      ],
    },
    {
      text: '生态系统',
      children: [
        {
          text: '默认主题',
          link: 'https://ecosystem.vuejs.press/zh/themes/default/',
        },
        {
          text: '插件',
          link: 'https://ecosystem.vuejs.press/zh/plugins/',
        },
      ],
    },
  ],
}
