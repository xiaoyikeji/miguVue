'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {
    // http://m.music.migu.cn/migu/remoting/cms_list_tag?pageSize=10&nid=23831003&pageNo=0&type=2006
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      "/api":{
        target:"http://m.kugou.com",
        secure:false,
        changeOrigin:true,
        pathRewrite:{
          "^/api":""
        }
      },
      '/m': {
        target: 'http://m.music.migu.cn',//要访问的后端接口
        changeOrigin: true,
        Cookie: 'JSESSIONID=341A31B56A401496B5E7FE192F665046; WT_FPC=id=2d3a71573f6ff3356021525756562870:lv=1537064257958:ss=1537064236360; migu_cookie_id=73f616fa-8603-450f-bca7-4a5bcf6ed538-n41541397187041',
        Host: 'm.music.migu.cn',
        Pragma: 'no-cache',
        AcceptEncoding: 'gzip, deflate',
        pathRewrite: {
          '^/m': ''
        },
        headers:{
          "User-Agent":"Mozilla/5.0(linux;android 6.0; Nexus 5 Build/MRA58N) AppleWebkit/537.36" +
          "(KHTML,like Gecko)Chrome/65.0.3325.181 Moblie Safari/537.36"
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
