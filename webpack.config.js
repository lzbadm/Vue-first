const path = require('path')

const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [new htmlWebpackPlugin({
        template: path.join(__dirname, './src/index.html'),
        filename: 'index.html'
    }), new VueLoaderPlugin()],
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { modules: true } }, { loader: 'less-loader' }]
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(jpg|png|gif|bmp|jpeg)$/,
            use: 'url-loader'
        }, {
            test: /\.ttf|woff|woff2|eot|svg$/,
            use: 'url-loader'
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    }
    // resolve: {
    //     alias: { 'vue$': 'vue/dist/vue.js' }
    // }
}