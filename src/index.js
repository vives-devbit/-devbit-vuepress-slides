const path = require('path')
// import path from 'path'         // Not supported by Nodejs 

module.exports = {
    name: "@devbit/vuepress-slides",
    enhanceAppFiles: path.resolve( __dirname, 'enhanceAppFile.js')
}