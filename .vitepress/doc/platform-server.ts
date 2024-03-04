/**
 * 脚手架文档
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
export const PlatformServer  = {
    '/platform/overview/': [
        {
            text: "基础说明",
            items: [
                {
                    text: '项目介绍',
                    link: '/platform/overview/guide/项目介绍',
                },
                {
                    text: '功能列表',
                    link: '/platform/overview/guide/功能列表',
                },
                {
                    text: '项目依赖',
                    link: '/platform/overview/guide/项目依赖',
                },
                {
                    text: '系统演示',
                    link: '/platform/overview/guide/系统演示',
                },
            ]
        },
        {
            text: '系统模块',
            items: [
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
        },
        {
            text: '配置和运行',
            items: [
                {
                    text: '项目启动',
                    link: '/platform/overview/config/项目启动',
                },
                {
                    text: '后端部署',
                    link: '/platform/overview/config/后端部署',
                },
                {
                    text: '前端部署',
                    link: '/platform/overview/config/前端部署',
                },
                {
                    text: '日志收集',
                    link: '/platform/overview/config/日志收集',
                },
            ]
        },
        {
            text: '其他',
            items: [
                {
                    text: '常见问题',
                    link: '/platform/overview/other/常见问题',
                },
                {
                    text: 'Docker安装',
                    link: '/platform/overview/other/Docker安装',
                },
                {
                    text: '中间件安装',
                    link: '/platform/overview/other/中间件安装',
                },
                {
                    text: '二次开发',
                    link: '/platform/overview/other/二次开发',
                },
            ]
        }
    ],
    '/platform/server/common/': [
        {
            text: '工具或配置封装',
            items: [
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
                    text: 'Websocket封装',
                    link: '/platform/server/common/Websocket封装',
                },
                {
                    text: 'Spring功能扩展',
                    link: '/platform/server/common/Spring功能扩展',
                },
                {
                    text: '查询构造器',
                    link: '/platform/server/common/查询构造器',
                },
                {
                    text: 'Swagger模块',
                    link: '/platform/server/common/Swagger模块',
                },
            ]
        },
    ],
    '/platform/server/starter/': [
        {
            text: '通用功能模块',
            items: [
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
            items: [
                {
                    text: '数据字典',
                    link: '/platform/server/service/baseapi/数据字典',
                },
                {
                    text: '参数配置',
                    link: '/platform/server/service/baseapi/参数配置',
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
            items: [
                {
                    text: '权限体系',
                    link: '/platform/server/service/iam/权限体系',
                },
                {
                    text: '认证终端管理',
                    link: '/platform/server/service/iam/认证终端管理',
                },
                {
                    text: '安全策略配置',
                    link: '/platform/server/service/iam/安全策略配置',
                },
                {
                    text: '认证鉴权',
                    link: '/platform/server/service/iam/认证鉴权',
                },
                {
                    text: '角色管理',
                    link: '/platform/server/service/iam/角色管理',
                },
                {
                    text: '数据角色管理',
                    link: '/platform/server/service/iam/数据角色管理',
                },
                {
                    text: '菜单管理',
                    link: '/platform/server/service/iam/菜单管理',
                },
                {
                    text: '访问权限管理',
                    link: '/platform/server/service/iam/访问权限管理',
                },
                {
                    text: '权限码管理',
                    link: '/platform/server/service/iam/权限码管理',
                },
            ]
        },
        {
            text: '通知服务',
            items: [
                {
                    text: '站内信',
                    link: '/platform/server/service/notice/站内信',
                },
                {
                    text: '短信通知',
                    link: '/platform/server/service/notice/短信通知',
                },
                {
                    text: '邮件通知',
                    link: '/platform/server/service/notice/邮件通知',
                },
                {
                    text: '钉钉通知',
                    link: '/platform/server/service/notice/钉钉通知',
                },
                {
                    text: '微信通知',
                    link: '/platform/server/service/notice/微信通知',
                },
                {
                    text: '企业微信通知',
                    link: '/platform/server/service/notice/企业微信通知',
                },
            ]
        },
        {
            text: '可视化大屏',
            items: [

            ]
        },
    ],
    '/platform/server/other/':[
        {
            text: '其他功能模块',
            items: [
                {
                    text: 'IP归属地',
                    link: '/platform/server/other/IP归属地',
                },
                {
                    text: '行政区划',
                    link: '/platform/server/other/行政区划',
                },
                {
                    text: '代码生成器',
                    link: '/platform/server/other/代码生成器',
                },
                {
                    text: '微信公众号管理',
                    link: '/platform/server/other/微信公众号管理.md',
                },
            ]
        }
    ],
}
