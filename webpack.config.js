const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin'); //生产环境进行压缩
const JavaScriptObfuscator = require('webpack-obfuscator'); //生产环境进行加密

const setDevServer = () => {
    return process.env.NODE_ENV === 'development' ? { port:3001,host:'localhost',open:true}:{}
}

const setPlugins = () => {
    const normalPlugins = [
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html')
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new EslintWebpackPlugin()
    ]
    return process.env.NODE_ENV === 'development' ? 
     normalPlugins : 
    [
        ...normalPlugins,
        new CssMinimizerWebpackPlugin(),
        new JavaScriptObfuscator()
    ]
}


module.exports = {
    mode:process.env.NODE_ENV,
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:process.env.NODE_ENV === 'development' ? undefined:path.resolve(__dirname,'dist'),
        filename:'js/bundle.js',
        clean: true ,//是否开启每次打包自动清除上一次打包的资源
        assetModuleFilename:"static/media/[hash:10][ext][query]"//一些媒体资源
    },
    module:{
        rules:[
            {
                test:/\.less/,
                exclude:/node_modules/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader:'less-loader',
                        options:{
                            lessOptions: {
                                modifyVars: { '@primary-color': '#1DA57A' },//修改antd的主题色
                                javascriptEnabled: true
                              }
                        }
                    }
                ]
            },
            {
                test:/\.s[a|c]ss/,
                exclude:/node_modules/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }
            }
        ],
    },
    resolve:{
        //此配置会自动补全文件后缀
        extensions:['.js','.jsx','.ts','.tsx','.json']
    },
    plugins:[
        ...setPlugins()
    ],
    devServer:{
        ...setDevServer()
    }
}