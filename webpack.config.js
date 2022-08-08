const path = require('path');
module.exports = {
    mode:'production',
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path: undefined,
        filename:'bundle.js'
    }
}