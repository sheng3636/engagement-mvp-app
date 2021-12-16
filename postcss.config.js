// const autoprefixer = require('autoprefixer') // 这个依赖不用安装
const pxtorem = require('postcss-pxtorem')
module.exports = {
  plugins: {
    // 'autoprefixer': {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      rootValue: 37.5, // 75表示750设计稿，37.5表示375设计稿
      unitPrecision: 5,
      propList: ['*'], // 作用在哪些属性上 我这里用的是通配符
      selectorBlackList: ['vant-'], // vant设计稿为375，当以750设计稿为基础设置时，需要屏蔽vant
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
      exclude: /node_modules/i
    }
  }
}
