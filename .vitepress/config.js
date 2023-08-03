// @ts-check
// import urlEncode from "markdown-it-disable-url-encode"
const {Platform} = require("./doc/platform");
const {BpmPlus} = require("./doc/bpmplus");
const {DaxPay} = require("./doc/daxpay");
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
        platformsRepo: 'bootx/bootx',
        logo: '/logo.png',
        platformsBranch: 'master',
        editLinks: true,
        editLinkText: '为此页提供修改建议',
        // 顶部导航
        nav: createNav(),
        // 侧边导航
        sidebar: createSidebar(),
    },
    markdown:{
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
        ['meta', { name: 'keywords', content: 'bootx platform platforms' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
    ];
}

/**
 * 导航栏
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
function createNav() {
    return [
        {
            text: '概述',
            items: [
                {
                    text: "快速指南",
                    link: "/platform/overview/guide/项目介绍",
                },
                {
                    text: "启动项目",
                    link: "/platform/overview/config/项目启动",
                },
                {
                    text: '更新日志',
                    link: '/platform/changelog/更新日志',
                },
                {
                    text: "FAQ",
                    link: "/platform/overview/faq/常见问题",
                },
            ]
        },
        {
            text: "后端文档",
            items: [
                {
                    text: "工具与配置",
                    link: "/platform/server/common/common-core核心包",
                },
                {
                    text: "功能组件",
                    link: "/platform/server/starter/登录鉴权",
                },
                {
                    text: "业务服务",
                    link: "/platform/server/service/基础服务",
                },
                {
                    text: "其他功能",
                    link: "/platform/server/other/行政区划",
                }
            ]
        },
        {
            text: "前端文档",
            items: [
                {
                    text: "Vue2",
                    link: "/platform/front/vue2/通用Mixin",
                },
                {
                    text: "Vue3",
                    link: "/platform/front/vue3/路由配置",
                },
                {
                    text: "移动端",
                    link: "/front/mobile",
                }
            ]
        },
        {
            text: "DaxPay",
            items: [
                {
                    text: "快速指南",
                    link: "/platform/front/vue2/通用Mixin",
                },
                {
                    text: "业务服务",
                    link: "/platform/front/vue3/路由配置",
                },
                {
                    text: "二次开发",
                    link: "/front/mobile",
                }
            ]
        },
        {
            text: '源码地址',
            items: [
                {
                    text: 'Bootx-Platform(Github)',
                    link: 'https://github.com/xxm1995/bootx-platform',
                },
                {
                    text: 'Bootx-Platform(Gitee)',
                    link: 'https://gitee.com/bootx/bootx-platform',
                },
                {
                    text: 'DaxPay(Gitee))',
                    link: 'https://gitee.com/bootx/dax-pay',
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
            text: '项目演示',
            items: [
                {
                    text: 'Vue2预览',
                    link: 'http://web.platform.bootx.cn/',
                },
                {
                    text: 'Vue3预览',
                    link: 'http://v3.platform.bootx.cn/',
                },
                {
                    text: '可视化大屏',
                    link: 'http://visualization.platform.bootx.cn/',
                }
            ],
        },
    ];
}

function createSidebar() {
    return {
        // 基础脚手架
        ...Platform,
        // 开源支付
        ...DaxPay,
        // 工作流
        ...BpmPlus
    }
}
