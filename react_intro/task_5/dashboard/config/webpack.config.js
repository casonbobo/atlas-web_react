// webpack.config.js
const path = require('path');

module.exports = {
    entry: '../src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    }
};
