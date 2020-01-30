const path = require('path')
// import path from 'path'         // Not supported by Nodejs 



module.exports = (options = {}, context) => ({
    name: "@devbit/vuepress-slides",
    enhanceAppFiles: path.resolve( __dirname, 'enhanceAppFile.js'),
    chainWebpack (config, isServer) {
        // config is an instance of ChainableConfig

        config.module
        .rule('md')
        .test(/\.md$/)
        .use(path.resolve(__dirname, './marpit'))
          .loader(path.resolve(__dirname, './marpit'))
          .end()
    }
})