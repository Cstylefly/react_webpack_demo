const path = require('path');
module.exports = {
    mode:'production',
    entry:path.resolve(__dirname,'src/index.js'),
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
    output:{
        path: undefined,
        filename:'bundle.js'
    },
    devServer:{
        port:3001,
        host:'127.0.0.1',
        open:true
    }
}