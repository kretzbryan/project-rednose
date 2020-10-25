const path = require('path');
module.exports = {
    entry: './client/src/index.js',
    output: {
        path: path.join(__dirname, 'client/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css?/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.(png|jpe?g|gif)$/i,
            use: [ 
                'file-loader'
            ],
          }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'client/public'),
        historyApiFallback: true
    }
};