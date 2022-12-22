// @ts-check
/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  base: '/',
  title: 'Bootx Platform',
  lang: 'zh-CN',
  description: '一个开源多功能的后端管理脚手架',
  head: createHead(),
  themeConfig: {
    repo: 'bootx/bootx-platform',
    docsRepo: 'bootx/bootx-platform-doc',
    logo: '/logo.png',
    docsBranch: 'master',
    editLinks: false,
    editLinkText: '为此页提供修改建议',
    nav: createNav(),
    sidebar: createSidebar(),
  },
};

/**
 * @type {()=>import('vitepress').HeadConfig[]}
 */

function createHead() {
  return [
    ['meta', { name: 'author', content: 'Bootx Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Bootx, SpringBoot, Vite, ant-design-vue, vue',
      },
    ],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'bootx platform docs' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}

/**
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
  return [
    {
      text: '文档指南',
      link: '/guide/项目介绍',
    },
    {
      text: '源码地址',
      items: [
        {
          text: 'Github',
          link: 'https://github.com/xxm1995/bootx-platform',
        },
        {
          text: 'Gitee',
          link: 'https://gitee.com/bootx/bootx-platform',
        },
      ],
    },
    {
      text: '交流群',
      items: [
        {
          text: 'QQ群：939414255',
          link: 'https://qm.qq.com/cgi-bin/qm/qr?k=hPIJw0BLRMONMZCYLUtB5wWHqumhOpCw&authKey=m3YVb3vcRR0MtBlXLEMfTAhxBlOlLtobsF8Otipp6N0DqdUn55q0G/e7HhnvtsY2&noverify=0',
        },
      ],
    },
    {
      text: 'Vue2预览',
      link: 'http://web.platform.bootx.cn/',
    },
    {
      text: 'Vue3预览',
      link: 'http://v3.platform.bootx.cn/',
    },
  ];
}

function createSidebar() {
  return {
    '/guide': [
      {
        text: "基础说明",
        children: [
          {
            text: '项目介绍',
            link: '/guide/项目介绍',
          },
          {
            text: '开发环境',
            link: '/guide/开发环境',
          }
        ]
      },
      {
        text: '项目配置',
        children: [
          {
            text: '开发环境',
            link: '/guide/config/开发环境',
          },
          {

          }
        ]
      },
      {
        text: '功能模块说明',
        children: []
      },
      {
        text: '前端使用',
        children: []
      },
      {
        text: 'FAQ',
        children: []
      },

    ],
  }
}
