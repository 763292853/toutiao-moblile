module.exports = {
  // publicPath: '/api/',
  // // 输出文件目录
  // outputDir: process.env.OUTPUT_DIR,

  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,

  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // chainWebpack: () => {},
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  },

  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,

    // 开启 CSS source maps?
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {

    },

    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 设置代理
  devServer: {
    // host: 'localhost',
    hot: true,
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      // '/api/m5/': {
      //   target: 'http://152.136.185.210:7878/api/m5',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api/m5/': ''
      //   }
      // },
      '/mp/': {
        target: 'http://ttapi.research.itcast.cn/mp/',
        changeOrigin: true,
        pathRewrite: {
          '^/mp/': ''
        }
      }
    }
  },
  // 'http://ttapi.research.itcast.cn'
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
  filenameHashing: true
}
