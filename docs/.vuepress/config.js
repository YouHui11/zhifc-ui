module.exports = {
    title: 'zhfc-ui',
    description: 'ui库',
    base: '/zhifc-ui/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guides', link: '/guides/' },
        ],
        sidebar: {
            '/components/': [{
                collapsable: true,
                children: [
                    'button',
                    'input',
                    'select'
                    //...
                    // 每加一个菜单需要在这里也新增一下
                ]
            }
            ]
        }

    }
}