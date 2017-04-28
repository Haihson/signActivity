var path = require('path') // 使用 NodeJS 自带的文件路径插件
var utils = require('./utils') // 引入一些小工具
var config = require('../config') // 引入 config/index.js
var vueLoaderConfig = require('./vue-loader.conf') // vue 路由配置
var ExtractTextPlugin = require("extract-text-webpack-plugin")

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js' // 编译文件入口
  },
  output: {
    path: config.build.assetsRoot, // 编译输出的静态资源根路径
    filename: '[name].js', // 编译输出的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: [
      '.js', '.vue', '.json'
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [
          resolve('src'), resolve('test')
        ],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader', fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
            })
          }
        }
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
}
