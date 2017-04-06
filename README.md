# signActivity

> vue-cli 脚手架， vue + webpack 的SPA

## Build Setup

``` bash
# 安装依赖关系
npm install

# dev 环境运行，服务监听 localhost:8080
npm run dev

# 编译项目
npm run build
```


## UI

> 个人分享信息页

![1](http://o73el5cs1.bkt.clouddn.com/20170323153637.png)![2](http://o73el5cs1.bkt.clouddn.com/20170323153858.png)

> 邀请信息页

![3](http://o73el5cs1.bkt.clouddn.com/20170323153949.png)

## CODE

> 目录结构

```
├── build	编译任务配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.test.conf.js
├── config	webpack 的配置文件
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── index.html	主HTMl
├── package.json	npm依赖配置文件
├── src	源代码
│   ├── assets	素材
│   │   ├── logo.png
│   │   └── ......
│   ├── components	组件
│   │   ├── ShareInvite.vue
│   │   ├── ShareInviteDetail.vue
│   │   └── Ticket.vue
│   ├── router	路由
│   │   └── index.js
│   ├── App.vue
│   └── main.js	入口JS文件
├── static	静态文件
│   └── favicon.png
├── README.md
```

> 入口HTML

```
<body>
  <div id="app"></div>
  <!-- built files will be auto injected -->
</body>
```

> main.sj

```
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```

> App.vue

```
<template>
<div id="app">
  <router-view></router-view>
</div>
</template>
```

> 路由 router

```
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ShareInvite
    },
    {
      path: '/detail',
      component: ShareInviteDetail
    },
    {
      path: '/ticket',
      component: Ticket
    }
  ]
})
```


更详细的解释可查看 [webpack传送门](http://vuejs-templates.github.io/webpack/) and [vue-loader传送门](http://vuejs.github.io/vue-loader).
