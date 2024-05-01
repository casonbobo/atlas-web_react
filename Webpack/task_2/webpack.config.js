const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    }, 
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: ["style-loader", "css-loader"] //"file-loader", "image-webpack-loader"], 
            },
            { 
              test: /\.jpg/,
              type: 'asset/resource',
            },
        ]
    },
};
