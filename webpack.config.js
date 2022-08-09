const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const setDevServer = () => {
    return process.env.NODE_ENV === 'development' ? { port:3001,host:'localhost',open:true}:{}
}


module.exports = {
    mode:process.env.NODE_ENV,
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:process.env.NODE_ENV === 'development' ? undefined:path.resolve(__dirname,'dist'),
        filename:'js/bundle.js',
        clean: true ,//是否开启每次打包自动清除上一次打包的资源
    },
    module:{
        rules:[
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
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html')
        })
    ],
    resolve:{
        //此配置会自动补全文件后缀
        extensions:['.js','.jsx','.ts','.tsx','.json']
    },
    devServer:{
        ...setDevServer()
    }
}