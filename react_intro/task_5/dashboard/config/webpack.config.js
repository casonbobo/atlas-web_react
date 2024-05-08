const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(dirname, '../src/index.js'),
      },
    output: {
        filename: 'bundle.js',
        path: path.resolve(dirname, '../dist'),
    },
    devServer: {
        port: 3000,
        static: {
          directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        hot: true,
      },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.(png|jpg|gif|svg)$/,
                use: ['file-loader', 'image-webpack-loader']
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /.js$/,
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
