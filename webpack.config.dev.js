const webpack = require('webpack');

const webpackConfig = {
    output:{
        libraryTarget : 'var',
        library: 'Calmdown',
        filename : 'calmdown.js'
    },

    target: 'web',

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
    }
};

module.exports = webpackConfig;