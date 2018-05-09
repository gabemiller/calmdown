const webpack = require('webpack');

// Production config
const prodConfig = {

	devtool: 'source-map',

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: true
			},
			sourceMap: true
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	]
};

module.exports = prodConfig;