const baseConfig = require('./webpack.conf');
const merge = require('webpack-merge');
module.exports = merge(baseConfig, {
    mode: 'production',
});