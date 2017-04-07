# signActivity

> 签到日历活动

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

> 签到页

![1](http://o73el5cs1.bkt.clouddn.com/20170406181500.png)![2](http://o73el5cs1.bkt.clouddn.com/20170406181525.png)

> 领券页

![3](http://o73el5cs1.bkt.clouddn.com/20170406181932.png)

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
│   │   └── Calendar.vue 日历
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

> Calendar.vue 部分Code

```
<!--日历控件-->
<div class="div_grid" id="grid">
  <!--日历星期-->
  <div class="div_row">
      <div class="div_cell" v-for="(item, index) in weeks" v-bind:class="weekStyle(index)">{{ item.name }}</div>
  </div>
  <!--日历数据-->
  <div class="div_row" v-for="(item, row) in days.length/weekNum">
    <div class="div_cell" v-for="(day, cell) in getRangeWeek(row, days)" v-bind:class="divCellStyle(day)">
        <div class="cell_day" v-bind:class="{cell_0: cell === 0, cell_6: cell === 6}" v-on:click="clickSign(day)">
            <label>{{ (day.day === 1 ? day.month + '月' : day.day) }}</label>
        </div>
    </div>
  </div>
</div>
```
