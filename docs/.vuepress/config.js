module.exports = {
  title: '前端知识汇总',
  description: '好好学习，天天向上',
  port: 9000,
  base: "/blog/",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '彭玉明的 前端 博客',
        items: [
          { text: 'Github', link: 'https://github.com/mqyqingfeng' },
          { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
        ]
      }
    ],
    sidebar: [
      {
        title: '首页',
        path: '/',
        collapsable: false, // 不折叠
        children: [
          { title: "阅读说明", path: "/" }
        ]
      },
      {
        title: "VuePress",
        path: '/handbook/vuepress/init',
        collapsable: false, // 不折叠
      },
      {
        title: "JavaScript基础学习",
        path: '/handbook/JavaScript/ConditionalTypes',
        collapsable: false, // 不折叠
        children: [
          { title: "类型", path: "/handbook/JavaScript/ConditionalTypes" },
          { title: "泛型", path: "/handbook/JavaScript/Generics" }
        ],
      }
    ]
  }
}