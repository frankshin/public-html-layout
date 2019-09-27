
# public-html-layout

package the public layout module for mutiple web pages with webpack

## 概述

- 由于页面均为纯静态页面，同时页面中存在大量公用的html模块，如header、navigation、footer等，为了规避出现需要在多个页面上进行相同的改动
，则必须要讲公用的部分整合封装起来，同时考虑到web页的SEO问题，亦不能使用前端的异步动态加载公用页面模块，于是决定用webpack打包的方式生成
生产环境下的代码，html页面采用js拼接生成

## 环境

```
npm全局

nodejs v8.x+
```

## usage

- 运行脚本

```js
// 安装依赖
npm i

// 本地dev
npm start

// 执行公共模块打包，生成打包后的build目录即生产环境代码
npm run build
```

- 新增或修改公共模块

> 新增公共模块引入流程：

```
1、将文件写入到 commonTemplates 目录
2、在 utils/main.js 中配置公共模块的导出名称
3、在pages中的模版页面中插入所要引入的公共模块位置
4、运行脚本看效果
```

## 目录结构

```
- commonTemplates 需要引入到各个页面中的公共模块
- pages 页面资源文件
- utils 一些公共函数封装
```
