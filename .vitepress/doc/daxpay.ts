/**
 * 支付平台文档
 */
export const DaxPay = {
    '/daxpay/overview/': [
        {
            text: "基础说明",
            items: [
                {
                    text: '项目介绍',
                    link: '/daxpay/overview/系统介绍',
                },
                {
                    text: '功能列表',
                    link: '/daxpay/overview/功能列表',
                },
                {
                    text: '系统架构',
                    link: '/daxpay/overview/系统架构',
                },
                {
                    text: '系统演示',
                    link: '/daxpay/overview/系统演示',
                },
            ]
        },
        {
            text: "配置和运行",
            items: [
                {
                    text: '项目启动',
                    link: '/daxpay/overview/项目启动',
                },
                {
                    text: '配置文件说明',
                    link: '/daxpay/overview/配置文件说明',
                },
                {
                    text: '数据表说明',
                    link: '/daxpay/overview/数据表说明',
                },
                {
                    text: '中间件安装',
                    link: '/daxpay/overview/中间件安装',
                },
                {
                    text: '系统部署',
                    link: '/daxpay/overview/系统部署',
                },
            ]
        },
        {
            text: "FAQ",
            items: [
                {
                    text: '常见问题',
                    link: '/daxpay/overview/常见问题',
                },
                {
                    text: '常量和状态表',
                    link: '/daxpay/overview/常量和状态表',
                },
            ]
        },
    ],
    '/daxpay/gateway/': [
        {
            text: '前言',
            items: [
                {
                    text: '接口清单',
                    link: '/daxpay/gateway/接口清单',
                },
                {
                    text: '签名规则',
                    link: '/daxpay/gateway/签名规则',
                },
                {
                    text: '调用说明',
                    link: '/daxpay/gateway/调用说明',
                },
            ],
        },
        {
            text: '接口清单(支付)',
            items: [
                {
                    text: '统一支付接口',
                    link: '/daxpay/gateway/interface/统一支付接口',
                },
                {
                    text: '简单支付接口',
                    link: '/daxpay/gateway/interface/简单支付接口',
                },
                {
                    text: '支付关闭接口',
                    link: '/daxpay/gateway/interface/支付关闭接口',
                },
                {
                    text: '统一退款接口',
                    link: '/daxpay/gateway/interface/统一退款接口',
                },
                {
                    text: '简单退款接口',
                    link: '/daxpay/gateway/interface/简单退款接口',
                },
                {
                    text: '支付同步接口',
                    link: '/daxpay/gateway/interface/支付同步接口',
                },
                {
                    text: '退款同步接口',
                    link: '/daxpay/gateway/interface/退款同步接口',
                },

            ]
        },
        {
            text: '接口清单(查询)',
            items: [
                {
                    text: '查询支付订单',
                    link: '/daxpay/gateway/interface/查询支付订单',
                },
                {
                    text: '查询退款订单',
                    link: '/daxpay/gateway/interface/查询退款订单',
                },
            ]
        },
        {
            text: '其他',
            items: [
                {
                    text: 'SDK使用说明',
                    link: '/daxpay/gateway/SDK使用说明',
                },
                {
                    text: '返回状态码',
                    link: '/daxpay/gateway/返回状态码',
                }
            ]
        }
    ],
    '/daxpay/config/': [
        {
            text: '系统配置',
            items: [
                {
                    text: '支付配置',
                    link: '/daxpay/config/支付配置',
                },
                  {
                    text: '系统配置',
                    link: '/daxpay/config/系统配置',
                },
                {
                    text: '通道配置',
                    link: '/daxpay/config/退款配置',
                },
            ]
        }
    ]

}
