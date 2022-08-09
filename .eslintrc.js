module.exports = {
    root:true,
    env:{
        node:true
    },
    plugins:["react"],
    parser:"@babel/eslint-parser",
    parserOptions:{
        ecmaVersion:2018, //指定使用的ECMAScript版本
        sourceType:'module', //如果使用的是ECMAScript就设置module
        jsx:true, //是否启用jsx语法
        requireConfigFile:false,
        babelOptions:{
            "presets":["@babel/preset-react"]
        }
    },
}