/**
 * 脚手架文档
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
export const Platform  = {
  '/platform/overview/': [
    {
      text: "基础说明",
      children: [
        {
          text: '项目介绍',
          link: '/platform/overview/guide/项目介绍',
        },
        {
          text: '项目依赖',
          link: '/platform/overview/guide/项目依赖',
        },
        {
          text: '内置功能',
          link: '/platform/overview/guide/内置功能',
        },
        {
          text: '系统模块',
          children: [
            {
              text: 'Core核心功能包',
              link: '/platform/overview/guide/Core核心功能包',
            },
            {
              text: '工具配置封装',
              link: '/platform/overview/guide/工具配置封装',
            },
            {
              text: '通用功能组件',
              link: '/platform/overview/guide/通用功能组件',
            },
            {
              text: '业务模块',
              link: '/platform/overview/guide/业务模块',
            },
          ]
        }
      ]
    },
    {
      text: '项目配置和运行',
      children: [
        {
          text: '项目启动',
          link: '/platform/overview/config/项目启动',
        },
        {
          text: '项目部署',
          link: '/platform/overview/config/项目部署',
        },
        {
          text: '功能裁剪',
          link: '/platform/overview/config/功能裁剪',
        },
        {
          text: '日志收集',
          link: '/platform/overview/config/日志收集',
        },
        {
          text: '安装docker',
          link: '/platform/overview/config/安装docker',
        },
        {
          text: '中间件Docker-Compose',
          link: '/platform/overview/config/中间件Docker-Compose',
        },
      ]
    },
    {
      text: 'FAQ',
      children: [
        {
          text: '常见问题',
          link: '/platform/overview/faq/常见问题',
        }
      ]
    }
  ],
  '/platform/server/common/': [
    {
      text: '工具或配置封装',
      children: [
        {
          text: 'Core核心模块',
          link: '/platform/server/common/common-core核心包' ,
        },
        {
          text: '缓存模块',
          link: '/platform/server/common/缓存模块',
        },
        {
          text: '数据翻译',
          link: '/platform/server/common/数据翻译',
        },
        {
          text: '异常处理器',
          link: '/platform/server/common/异常处理器',
        },
        {
          text: '请求头工具',
          link: '/platform/server/common/请求头工具',
        },
        {
          text: '幂等处理器',
          link: '/platform/server/common/幂等处理器',
        },
        {
          text: 'JackSon配置',
          link: '/platform/server/common/JackSon配置',
        },
        {
          text: '日志扩展',
          link: '/platform/server/common/日志扩展',
        },
        {
          text: 'MyBatis-Plus扩展',
          link: '/platform/server/common/MyBatis-Plus扩展',
        },
        {
          text: 'RabbitMQ配置',
          link: '/platform/server/common/RabbitMQ配置',
        },
        {
          text: 'Redis增强配置',
          link: '/platform/server/common/Redis增强配置',
        },
        {
          text: 'Sequence序列生成器',
          link: '/platform/server/common/Sequence序列生成器',
        },
        {
          text: 'MQTT消息队列封装',
          link: '/platform/server/common/MQTT消息队列封装',
        },
        {
          text: 'Websocket封装',
          link: '/platform/server/common/Websocket封装',
        },
        {
          text: 'Spring功能扩展',
          link: '/platform/server/common/Spring功能扩展',
        },
        {
          text: '超级查询器',
          link: '/platform/server/common/超级查询器',
        },
        {
          text: 'Swagger模块',
          link: '/platform/server/common/Swagger模块',
        },
        {
          text: 'XXL-Job定时任务',
          link: '/platform/server/common/XXL-Job定时任务',
        },
      ]
    },
  ],
  '/platform/server/starter/': [
    {
      text: '通用功能模块',
      children: [
        {
          text: '登录鉴权',
          link: '/platform/server/starter/登录鉴权',
        },
        {
          text: '数据权限',
          link: '/platform/server/starter/数据权限',
        },
        {
          text: '第三方平台对接',
          link: '/platform/server/starter/第三方平台对接',
        },
        {
          text: '文件管理',
          link: '/platform/server/starter/文件管理',
        },
        {
          text: 'Quartz定时任务',
          link: '/platform/server/starter/Quartz定时任务',
        },
        {
          text: '审计日志',
          link: '/platform/server/starter/审计日志',
        },
        {
          text: '代码生成器',
          link: '/platform/server/starter/代码生成器',
        },
        {
          text: '项目环境信息监控',
          link: '/platform/server/starter/项目环境信息监控',
        },
      ]
    }
  ],
  '/platform/server/service/': [
    {
      text: '基础服务',
      children: [
        {
          text: '数据字典',
          link: '/platform/server/service/baseapi/数据字典',
        },
        {
          text: '参数配置',
          link: '/platform/server/service/baseapi/参数配置',
        },
        {
          text: '行政区划管理',
          link: '/platform/server/service/baseapi/行政区划管理',
        },
        {
          text: '验证码管理',
          link: '/platform/server/service/baseapi/验证码管理',
        },
        {
          text: '动态表单管理',
          link: '/platform/server/service/baseapi/动态表单',
        },
        {
          text: '动态数据源',
          link: '/platform/server/service/baseapi/动态数据源',
        },
        {
          text: '键值对存储',
          link: '/platform/server/service/baseapi/键值对存储',
        },
        {
          text: '敏感词管理',
          link: '/platform/server/service/baseapi/敏感词管理',
        },
        {
          text: '通用导入',
          link: '/platform/server/service/baseapi/通用导入',
        },
      ]
    },
    {
      text: '身份识别与访问管理',
      children: [

      ]
    },
    {
      text: '通知服务',
      children: [

      ]
    },
    {
      text: '可视化大屏',
      children: [

      ]
    },
  ],
  '/platform/server/other/':[
    {
      text: '其他功能模块',
      children: [
        {
          text: 'IP归属地',
          link: '/platform/server/other/IP归属地',
        },
        {
          text: '行政区划',
          link: '/platform/server/other/行政区划',
        }
      ]
    }
  ],
  '/platform/front/vue2/': [
    {
      text: '前端使用说明',
      children: [
        {
          text: '通用Mixin',
          link: '/platform/front/vue2/通用Mixin',
        },
        {
          text: 'Websocket使用说明',
          link: '/platform/front/vue2/Websocket使用说明',
        },
        {
          text: '菜单路由管理',
          link: '/platform/front/vue2/菜单路由管理',
        },
        {
          text: '数据脱敏',
          link: '/platform/front/vue2/数据脱敏',
        },
        {
          text: '查询器组件使用',
          link: '/platform/front/vue2/查询器组件使用',
        },
        {
          text: '字典翻译组件',
          link: '/platform/front/vue2/字典翻译组件',
        },
      ],
    },
  ],
  '/platform/front/vue3/': [
    {
      text: '内置功能',
      children: [
        {
          text: '路由配置 ',
          link: '/platform/front/vue3/路由配置',
        },
        {
          text: 'Websocket使用说明 ',
          link: '/platform/front/vue3/Websocket使用说明',
        },
      ]
    },
    {
      text: '自定义组件',
      children: [
        {
          text: '超级查询器',
          link: '/platform/front/vue3/超级查询器',
        },
        {
          text: '用户选择组件',
          link: '/platform/front/vue3/用户选择组件',
        },
        {
          text: '角色选择组件',
          link: '/platform/front/vue3/角色选择组件',
        }
      ]
    },
    {
      text: '自定义Hooks',
      link: '/platform/front/vue3/自定义Hooks',
    }
  ],
  '/platform/front/mobile/ ': [],
}