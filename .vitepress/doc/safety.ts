
/**
 * 安全相关
 * @type {()=>import('./theme-default/config').DefaultTheme.NavItem[]}
 */
export const Safety  = {
    '/platform/safety': [
        {
            text: "安全体系",
            children: [
                {
                    text: '什么是安全',
                    link: '/platform/safety/什么是安全',
                },
                {
                    text: '安全评估',
                    link: '/platform/safety/安全评估',
                },
                {
                    text: '体系设计',
                    link: '/platform/safety/体系设计',
                },
                {
                    text: '数据安全',
                    link: '/platform/safety/数据安全',
                },
                {
                    text: '参考内容',
                    link: '/platform/safety/参考内容',
                }
            ]
        }
    ]
}
