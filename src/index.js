// const path = require('path')         // Not supported by Nodejs 
import path from 'path'

module.exports = {
    name: "@devbit/vuepress-slides",
    enhanceAppFiles: path.resolve( __dirname, 'enhanceAppFile.js')
}