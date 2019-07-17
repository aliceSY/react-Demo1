const baseConfig = require('./webpack.conf');
const merge = require('webpack-merge');
module.exports = merge(baseConfig,{
    mode:'development',
    devtool:'inline-source-map',
    devServer : {
        contentBase:__dirname,
        port:3002
    }
})