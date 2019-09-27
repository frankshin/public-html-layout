
# public-html-layout

package the public layout module for mutiple web pages with webpack

## 概述

- 由于页面均为纯静态页面，同时页面中存在大量公用的html模块，如header、navigation、footer等，为了规避出现需要在多个页面上进行相同的改动
，则必须要讲公用的部分整合封装起来，同时考虑到web页的SEO问题，亦不能使用前端的异步动态加载公用页面模块，于是决定用webpack打包的方式生成
生产环境下的代码，html页面采用js拼接生成

## usage

```js
// 安装依赖
npm i

// 本地dev
npm start

// 执行公共模块打包，生成打包后的build目录即生产环境代码
npm run build
```

ps：如有需要，将自己的公共模块和commonhtml目录中的模块进行替换后重新打包生成自己的生产环境包

## 目录结构

```
- publicLayout：公用模块整合中心
  - commonTemplates 所要植入到页面中的各个公共小模块
- templateSource 各页面模板资源文件，也是引擎所需要收集处理的资源文件
```
