const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: {
        index: './src/index.js',
    },
    output: {
        clean: true,
    },
    devServer: {
        open: true,
        port: 9999,
        // 除了默认
        static: path.resolve(__dirname,'static'),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/index.html')
        })
    ]
}