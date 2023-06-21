const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    devServer:{
        open:true,
        proxy:{
            "^/api":{
                target:process.env.NODE_ENV==="development"?
                "http://127.0.0.1:3000":
                process.env.NODE_ENV==="production"?
                "http://api.cc0820.top:3000":"",
                pathRewrite:{"/api":""}
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/i, // 匹配所有.css文件
                use: [
                    MiniCssExtractPlugin.loader, // 使用MiniCssExtractPlugin.loader提取CSS为独立文件
                    'css-loader', // 处理CSS文件
                    'postcss-loader',
                    'less-loader' // 将Less编译为CSS
                ],
            }
            ,]
    },
    plugins:[
        new MiniCssExtractPlugin({

        }),
        new htmlWebpackPlugin({
            template:'./public/index.html',
            filename: 'app.html',//新生成的文件的名称
            inject: 'body',//设置所有资源文件所在的位置--即放在哪里
            cdn:{
                script:[
                    "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.4/jquery.min.js",
                    "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.min.js"
                ],
                style:[]
            }
        }),
    ]
}