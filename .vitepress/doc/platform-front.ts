/**
 * 脚手架文档
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
export const PlatformFront  = {
    '/platform/front/vue3/': [
        {
            text: '前端概览',
            items: [
                {
                    text: '前端介绍 ',
                    link: '/platform/front/vue3/前端介绍',
                },
                {
                    text: '功能介绍 ',
                    link: '/platform/front/vue3/功能介绍',
                },
            ],
        },
        {
            text: '内置功能',
            items: [
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
            items: [
                {
                    text: '查询构造器组件',
                    link: '/platform/front/vue3/查询构造器组件',
                },
                {
                    text: '用户选择组件',
                    link: '/platform/front/vue3/用户选择组件',
                },
                {
                    text: '角色选择组件',
                    link: '/platform/front/vue3/角色选择组件',
                },
                {
                    text: '通用数据导入组件',
                    link: '/platform/front/vue3/通用数据导入组件',
                }
            ]
        },
        {
            text: '自定义Hooks',
            link: '/platform/front/vue3/自定义Hooks',
        }
    ],
    '/platform/front/mobile/': [
        {
            text: '前端概览',
            items: [
                {
                    text: '移动端介绍 ',
                    link: '/platform/front/mobile/移动端介绍',
                },
                {
                    text: '功能介绍 ',
                    link: '/platform/front/mobile/功能介绍',
                },
                {
                    text: '工作台 ',
                    link: '/platform/front/mobile/工作台',
                },
            ],
        },
    ],
    '/platform/front/bigscreen/': [
        {
            text: '前端概览',
            items: [
                {
                    text: '可视化介绍',
                    link: '/platform/front/bigscreen/可视化介绍',
                },
                {
                    text: '后端对接',
                    link: '/platform/front/bigscreen/后端对接',
                },
                {
                    text: '编辑器',
                    link: '/platform/front/bigscreen/编辑器',
                },
                {
                    text: '单点登录',
                    link: '/platform/front/bigscreen/单点登录',
                },
            ],
        },
    ],
    '/platform/front/mobile/ ': [
        {
            text: '内置功能',
            items: [
                {
                    text: '移动端介绍 ',
                    link: '/platform/front/mobile/移动端介绍',
                },
                {
                    text: '工作台 ',
                    link: '/platform/front/mobile/工作台',
                },
            ]
        },
    ],
}
