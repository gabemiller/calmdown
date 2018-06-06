const path = require('path');

const devConfig = {
	devtool: 'cheap-module-source-map',
	watch: true,
	devServer: {
		compress: true,
		open: true,
		port: 9000
	}
};

module.exports = devConfig;