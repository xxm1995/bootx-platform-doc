import { defineConfig } from 'vitepress'
import renderPermaLink from './render-perma-link'
import MarkDownItCustomAnchor from './markdown-it-custom-anchor'
// @ts-check
// import urlEncode from "markdown-it-disable-url-encode"
import {Platform} from "./doc/platform";

import {BpmPlus} from "./doc/bpmplus";

import {DaxPay} from "./doc/daxpay";

import {Safety} from "./doc/safety";
import {HeadConfig} from "vitepress/types/shared";

const ogDescription =
    '开源、精美、便捷、规范、交互自然。'
const ogImage = '/logo.png'
const ogTitle = 'Bootx'
const ogUrl = '/'

export default defineConfig({
    title: 'Bootx 项目集',
    description: '一个多功能的开源项目集',
    lang: 'zh-CN',
    outDir: './dist',
    head: createHead(),

    themeConfig: {
        logo: '/logo.png',
        editLink: {
            text: '为此页提供修改建议',
            pattern: 'https://gitee.com/bootx/bootx/'
        },
        // 开启本地搜索
        search : {
            provider: "local",
        },
        // 顶部导航栏
        nav: createNav(),
        // 目录导航
        sidebar: createSidebar()
    },
    markdown: {
        anchor: {
            permalink: renderPermaLink
        },
        config: md => {
            md.use(MarkDownItCustomAnchor)
        }
    }
})

/**
 * 头信息
 * @type {()=>import('vitepress').HeadConfig[]}
 */
function createHead(): HeadConfig[] {
    return [
        ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:site', content: 'Bootx' }],
        ['meta', { name: 'theme-color', content: '#3f8bdb' }],
        [
            'script',
            {
                src: '',
                'data-site': '',
                'data-spa': '',
                defer: ''
            }
        ]
    ]
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
                    text: "FAQ",
                    link: "/platform/overview/faq/常见问题",
                },
            ]
        },
        {
            text: "后端",
            items: [
                {
                    text: "基础组件",
                    link: "/platform/server/common/common-core核心包",
                },
                {
                    text: "功能服务",
                    link: "/platform/server/starter/登录鉴权",
                },
                {
                    text: "业务服务",
                    link: "/platform/server/service/baseapi/数据字典",
                },
                {
                    text: "其他功能",
                    link: "/platform/server/other/行政区划",
                },
                {
                    text: "安全体系",
                    link: "/platform/safety/什么是安全",
                }
            ]
        },
        {
            text: "前端",
            items: [
                {
                    text: "管理端",
                    link: "/platform/front/vue3/路由配置",
                },
                {
                    text: "移动端",
                    link: "/platform/front/mobile/移动端介绍",
                },
                {
                    text: "可视化大屏",
                    link: "/platform/front/bigscreen/可视化介绍",
                }
            ]
        },
        {
            text: "DaxPay",
            items: [
                {
                    text: "快速指南",
                    link: "/daxpay/overview/项目介绍",
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
            text: "BpmPlus",
            items: [
                {
                    text: "业务服务",
                    link: "/bpmplus/front/vue3/路由配置",
                },
                {
                    text: "二次开发",
                    link: "/bpmplus/mobile",
                }
            ]
        },
        {
            text: '源码',
            items: [
                {
                    text: 'Platform(Github)',
                    link: 'https://github.com/xxm1995/bootx-platform',
                },
                {
                    text: 'Platform(Gitee)',
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
            text: '演示',
            items: [
                {
                    text: 'platform',
                    link: 'http://v3.platform.bootx.cn/',
                },
                {
                    text: '可视化大屏',
                    link: 'http://visualization.platform.bootx.cn/',
                },
                {
                    text: 'daxpay',
                    link: 'http://daxpay.demo.bootx.cn/',
                }
            ],
        },
    ];
}

/**
 * 目录
 */
function createSidebar() {
    return {
        // 基础脚手架
        ...Platform,
        // 开源支付
        ...DaxPay,
        // 工作流
        ...BpmPlus,
        // 安全相关
        ...Safety,
    }
}
