export const navbar = [
  {
    text: '前端',
    children: [
      { text: 'vite', link: '/frontend/vite/' },
      { text: 'electron', link: '/frontend/electron/' },
      { text: 'node模块源码解析', link: '/frontend/node/' },
      { text: 'Webpack5 教程', link: '/frontend/webpack5/' },
      // { text: '前端基础建设与架构', link: '/frontend/construction/导读：前端技术发展回顾和架构升级之路.md' }
      
    ],
  },
  {
    text: 'python',
    children: [
      {
        text: '50天基础',
        link: '/python/Python-Core-50-Courses/',
      },
      {
        text: '100天学会python',
        link: '/python/Python-100-Days/',
      }
    ],
  },
  {
    text: '工具',
    children: [
      { text: 'git', link: '/tools/git/01_版本控制'},
      { text: 'npm', link: '/tools/npm/用npmscript打造超溜的前端工作流'},
      {
        text: '其他',
        link: '/tools/others/',
      }
    ],
  },
  {
    text: '面试题',
    link: '/interview/'
  }
]
