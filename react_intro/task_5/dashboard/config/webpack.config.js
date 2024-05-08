// webpack.config.js
const path = require('path');

module.exports = {
    entry: '../src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8080,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ['file-loader',
                    {
                            loader: 'image-webpack-loader',
                            options: {
                                bypassOnDebug: true,
                        },
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"]
                    }
                }
            }
        ]
    }
};
