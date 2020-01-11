module.exports = {
    title:'LeoChenTechStack',
    base:"/documents/",
    locales: {
        '/': {
          lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        },
      },
    themeConfig: {
        lastUpdated: 'Last Updated', 
        repo: 'YuQuanSir/documents',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        nav: [
            { text: 'About', link: '/about/' },
            { text: 'Guide', link: '/guide/' },
           
        ]
    }
}