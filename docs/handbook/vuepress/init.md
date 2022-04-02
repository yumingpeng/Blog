## 简介
VuePress是基于Vue
## 快速上手
  1. 创建并进入一个新目录
  ```
  // 文件名自定义
  mkdir vuepress-starter && cd vuepress-starter
  ```
  2. 使用你喜欢的包管理器进行初始化

  ```
  yarn init # npm init
  ```
  3. 将 VuePress 安装为本地依赖
  ```
  yarn add -D vuepress # npm install -D vuepress
  ```
  4. 创建你的第一篇文档，VuePress 会以 docs 为文档根目录，所以这个 README.md 相当于主页：
  ```
  mkdir docs && echo '# Hello VuePress' > docs/README.md
  ```
  5. 在 package.json 中添加一些 scripts

  ``` javascript
  {
    "scripts": {
      "docs:dev": "vuepress dev docs",
      "docs:build": "vuepress build docs"
    }
  }
  ```
  6. 在本地启动服务器，这个时候VuePress会在`http:localhost:8080`启动一个热重载的开发服务器。
  ```
  yarn docs:dev # npm run docs:dev
  ```
## 路由设置

## 基本配置


## 主题设置