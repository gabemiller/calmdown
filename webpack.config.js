const path = require('path');
const merge = require('webpack-merge');

// Webpack plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Get the environment
const isProduction = process.env.NODE_ENV === 'production';

// Webpack configurations
const devConfig = require('./config/webpack.dev.config');
const prodConfig = require('./config/webpack.prod.config');

// Webpack configuration
const baseConfig = {

	context: path.resolve(__dirname,'src'),

	// Entry, the start point of the app
	entry: './js/Calmdown.js',

	// Where we want to generate the bundle file
	output:{
		path: path.resolve(__dirname, 'dist/js'),
		filename: 'calmdown.min.js',
		libraryTarget : 'var',
		library: 'Calmdown',
	},

	// Modules
	module: {
		rules: [
			// Javascript
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader','eslint-loader']
			},
			// Sass
			{
				test: /\.(scss|sass)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [ 'css-loader', 'postcss-loader', 'sass-loader']
				})
			},
			// Less
			{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader', 'less-loader']
				})
			},
			// Css
			{
				test: /\.(css|sss)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'postcss-loader']
				})
			},
			// Fonts
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?)$/,
				exclude: path.resolve('./src/svg'),
				use: 'file-loader?name=../fonts/[name].[ext]'
			},
		]
	},

	// Plugins
	plugins:[
		new ExtractTextPlugin('../css/calmdown.min.css'),
		new CleanWebpackPlugin(['dist/css','dist/js'])
	]

};


module.exports = merge(baseConfig, isProduction ? prodConfig : devConfig);
