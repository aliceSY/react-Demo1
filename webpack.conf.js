const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //把css样式抽离出来 防止打包到js中

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'
            },
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader',
                        'resolve-url-loader',
                        'sass-loader?sourceMap'
                    ]
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: 'assets/fonts/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {  //解决模块的可选项
        extensions: [".js", ".json", ".jsx", ".less", ".css", ".scss"],
        alias: { //设置模块的别名
            utils: path.resolve(__dirname, 'src/utils'),
        }
    },
    plugins: [ //插件的引用，压缩，分离美化
        new ExtractTextPlugin('[name].css'),  //打包之后通过Link的方式引用在index.html中，如若不使用 css文件是通过js代码生成的
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
}