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
    // 顶部导航
    nav: createNav(),
    // 侧边导航
    sidebar: createSidebar(),
  }
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
      text: '概述',
      items: [
        {
          text: "快速指南",
          link: "/doc/overview/guide/项目介绍",
        },
        {
          text: "启动项目",
          link: "/doc/overview/config/项目启动",
        },
        {
          text: "FAQ",
          link: "/doc/overview/faq/常见问题",
        },
      ]
    },
    {
      text: "后端文档",
      items: [
        {
          text: "工具与配置",
          link: "/doc/server/common/common-core核心包",
        },
        {
          text: "功能组件",
          link: "/doc/server/starter/登录鉴权",
        },
        {
          text: "业务服务",
          link: "/doc/server/service/基础服务",
        }
      ]
    },
    {
      text: "前端文档",
      items: [
        {
          text: "Vue2",
          link: "/doc/front/vue2/通用Mixin",
        },
        {
          text: "Vue3",
          link: "/front/vue3",
        },
        {
          text: "移动端",
          link: "/front/mobile",
        }
      ]
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
    '/doc/overview/': [
      {
        text: "基础说明",
        children: [
          {
            text: '项目介绍',
            link: '/doc/overview/guide/项目介绍',
          },
          {
            text: '项目依赖',
            link: '/doc/overview/guide/项目依赖',
          },
          {
            text: '系统模块',
            link: '/doc/overview/guide/系统模块',
          },
          {
            text: '内置功能',
            link: '/doc/overview/guide/内置功能',
          }
        ]
      },
      {
        text: '项目配置和运行',
        children: [
          {
            text: '项目启动',
            link: '/doc/overview/config/项目启动',
          },{
            text: '功能裁剪',
            link: '/doc/overview/config/功能裁剪',
          },
          {
            text: '日志收集',
            link: '/doc/overview/config/日志收集',
          },
          {
            text: '安装Docker',
            link: '/doc/overview/config/安装Docker',
          },
          {
            text: '相关docker-compose',
            link: '/doc/overview/config/相关docker-compose',
          },
        ]
      },
      {
        text: 'FAQ',
        children: [
          {
            text: '常见问题',
            link: '/doc/overview/faq/常见问题',
          }
        ]
      }
    ],
    '/doc/server/common/': [
      {
        text: '工具或配置封装',
        children: [
          {
            text: 'Core核心模块',
            link: '/doc/server/common/common-core核心包' ,
          },
          {
            text: '缓存模块',
            link: '/doc/server/common/缓存模块',
          },
          {
            text: '异常处理器',
            link: '/doc/server/common/异常处理器',
          },
          {
            text: '请求头工具',
            link: '/doc/server/common/请求头工具',
          },
          {
            text: '幂等处理器',
            link: '/doc/server/common/幂等处理器',
          },
          {
            text: '分布式锁',
            link: '/doc/server/common/分布式锁',
          },
          {
            text: 'JackSon配置',
            link: '/doc/server/common/JackSon配置',
          },
          {
            text: '日志扩展',
            link: '/doc/server/common/日志扩展',
          },
          {
            text: 'MyBatis-Plus扩展',
            link: '/doc/server/common/MyBatis-Plus扩展',
          },
          {
            text: 'Redis增强配置',
            link: '/doc/server/common/Redis增强配置',
          },
          {
            text: 'Sequence序列生成器',
            link: '/doc/server/common/Sequence序列生成器',
          },
          {
            text: 'RabbitMQ配置',
            link: '/doc/server/common/RabbitMQ配置',
          },
          {
            text: 'MQTT消息队列封装',
            link: '/doc/server/common/MQTT消息队列封装',
          },
          {
            text: 'Websocket封装',
            link: '/doc/server/common/Websocket封装',
          },
          {
            text: 'Spring功能扩展',
            link: '/doc/server/common/Spring功能扩展',
          },
          {
            text: '超级查询器',
            link: '/doc/server/common/超级查询器',
          },
          {
            text: 'Swagger模块',
            link: '/doc/server/common/Swagger模块',
          },
          {
            text: 'XXL-Job定时任务',
            link: '/doc/server/common/XXL-Job定时任务',
          },
        ]
      },
    ],
    '/doc/server/starter/': [
      {
        text: '通用功能模块',
        children: [
          {
            text: '登录鉴权',
            link: '/doc/server/starter/登录鉴权',
          },
          {
            text: '数据权限',
            link: '/doc/server/starter/数据权限',
          },
          {
            text: '第三方平台对接',
            link: '/doc/server/starter/第三方平台对接',
          },
          {
            text: '文件管理',
            link: '/doc/server/starter/文件管理',
          },
          {
            text: 'Quartz定时任务',
            link: '/doc/server/starter/Quartz定时任务',
          },
          {
            text: '审计日志',
            link: '/doc/server/starter/审计日志',
          },
          {
            text: '代码生成器',
            link: '/doc/server/starter/代码生成器',
          },
          {
            text: '项目环境信息监控',
            link: '/doc/server/starter/项目环境信息监控',
          },
        ]
      }
    ],
    '/doc/server/service/': [
      {
        text: '业务服务模块',
        children: [
          {
            text: '基础服务',
            link: '/doc/server/service/基础服务',
          },
          {
            text: '身份识别与访问管理',
            link: '/doc/server/service/身份识别与访问管理',
          },
          {
            text: '通知服务',
            link: '/doc/server/service/通知服务',
          },
          {
            text: '支付服务',
            link: '/doc/server/service/支付服务',
          },
        ]
      }
    ],
    '/doc/front/vue2/': [
      {
        text: '前端使用说明',
        children: [
          {
            text: '通用Mixin',
            link: '/doc/front/vue2/通用Mixin',
          },
          {
            text: 'Websocket使用说明',
            link: '/doc/front/vue2/Websocket使用说明',
          },
          {
            text: '菜单路由管理',
            link: '/doc/front/vue2/菜单路由管理',
          },
          {
            text: '数据脱敏',
            link: '/doc/front/vue2/数据脱敏',
          },
          {
            text: '查询器组件使用',
            link: '/doc/front/vue2/查询器组件使用',
          },
          {
            text: '字典翻译组件',
            link: '/doc/front/vue2/字典翻译组件',
          },
        ],
        text: '自定义组件',
        children: [
          {
            text: '字典翻译组件',
            link: '/doc/front/vue2/字典翻译组件',
          }
        ]
      }
    ],
    '/doc/front/vue3/': [],
    '/doc/front/mobile/ ': [],
  }
}
