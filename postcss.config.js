// // PostCSS的配置文件
// // PostCSS是基于node.js运行的处理css的工具
// module.exports = {
//   // 配置要使用的相关插件
//   plugins: {
//     // 用来兼容不同的浏览器,vueCLI内部已经配置了
//     // autoprefixer: {
//     //   browsers: ['Android>=4.0', 'iOS>=8']
//     // },
//     // 把px转为rem
//     'postcss-pxtorem': {
//       rootValue: 37.5,
//       propList: ['*']
//     }
//   }
// }
// postcss.config.js
module.exports = {
  plugins: {
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
