var webpack = require('webpack');

var webpackConfig = {
    output:{
        libraryTarget : 'var',
        library: 'Calmdown',
        filename : 'calmdown.min.js'
    },

    target: 'web',

    devtool: 'sourcemap',

    resolve: {
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: /\.js$/
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};

module.exports = webpackConfig;