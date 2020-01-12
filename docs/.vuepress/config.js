module.exports = {
  title: 'Leo`s TechStack',
  description: 'leochen cqy blog',
  base: "/documents/",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },

  themeConfig: {
    logo: '/img/logo.png',
    smoothScroll: true,
    lastUpdated: '最后更新时间',
    repo: 'YuQuanSir/documents',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    nav: [{ text: '首页', link: '/' }, { text: '最新', link: '/lastUpdate' },
    {
        text: '计算机基础',
        ariaLabel: 'basic Menu',
        items: [
            { text: '操作系统', link: '/jsjbasic/os/' },
            { text: '数据结构', link: '/jsjbasic/dstructure/' },
            { text: '算法', link: '/jsjbasic/algorithm/' }
        ]
    },
    {
        text: 'Node',
        ariaLabel: 'Node Menu',
        items: [
            { text: '基础知识', link: '/node/ndoe_basic/' },
            { text: '核心模块', link: '/node/hxmodule/' },
            { text: '第三方模块', link: '/node/dsfmodule/' },
            { text: 'Express', link: '/node/express/' },
            { text: 'Koa', link: '/node/koa/' },
            { text: 'mongoDB', link: '/node/mongodb/' },
            { text: '项目实战', link: '/node/shizhan/' }
        ]
    }, {
        text: '前端',
        ariaLabel: 'frontend Menu',
        items: [{
            text: '脚本语言',
            items: [
                { text: 'JavaScript', link: '/script/javascript/js0' },
                { text: 'ES6', link: '/script/ES6/' },
                { text: 'TypScript', link: '/script/typescript/' }
            ]
        }, {
            text: 'JS库',
            items: [
                { text: 'jQurey', link: '/js_lib/jquery/' },
                { text: 'zepto', link: '/js_lib/zepto/' }
            ]
        }, {
            text: '样式',
            items: [
                { text: 'HTML', link: '/ui/html/' },
                { text: 'CSS', link: '/ui/css/' },
                { text: 'SASS', link: '/ui/sass/' },
                { text: 'LESS', link: '/ui/less/' },
                { text: 'JS DOM', link: '/ui/js_dom/' },
                { text: 'canvas', link: '/ui/canvas/' },
            ]
        }, {
            text: '框架',
            items: [
                { text: 'BootStrap', link: '/framework/bootstrap/' },
                { text: 'Vue', link: '/framework/vue/' },
                { text: 'React', link: '/framework/react/' },
                { text: 'Angular', link: '/framework/angular/' }
            ]
        }, {
            text: '构建工具',
            items: [
                { text: 'Gulp', link: '/gjtool/gulp/' },
                { text: 'WebPack', link: '/gjtool/webpack/' },
                { text: 'Grunt', link: '/gjtool/grunt/' },
            ]
        }, ]
    }, {
        text: '其他',
        ariaLabel: 'other Menu',
        items: [
            { text: '友情链接', link: '/links' }, {
                text: '技术',
                items: [
                    { text: 'python', link: '/other_tech/python/' },
                    { text: 'java', link: '/other_tech/java/' },
                    { text: 'php', link: '/other_tech/php/' },
                    { text: 'c', link: '/other_tech/c/' }
                ]
            },
            {
                text: '记录',
                items: [
                    { text: '思路想法随笔', link: '/note/suibi_note/' },
                    { text: '零散技术笔记', link: '/note/ls_note/' },
                    { text: '错误日志', link: '/note/error_note/' },
                    { text: '疑问记录', link: '/note/yiwen_note/' }
                ]
            }
        ]
    }
],

sidebarDepth: 3,
sidebar: {
    '/script/javascript/': [{
        title: 'JavaScript',
        collapsable: false,
        children: [
            '/script/javascript/js0',
            '/script/javascript/js1'
        ]
    }]
}
  }
}