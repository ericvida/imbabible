var path = require('path');

module.exports = [{
	entry: {
		index: "./src/index.imba"
	},
	plugins: [
	],
	resolve: {
		extensions: [".imba",".js",".json"],
		alias: {
			imba: path.resolve(__dirname,'node_modules','imba')
		}
	},

	module: {
		rules: [{
			test: /\.imba$/,
			loader: 'imba/loader'
		}]
	},

	devServer: {
		contentBase: path.resolve(__dirname, 'public'),
		watchContentBase: true,
		historyApiFallback: {
			index: '/index.html'
		},
		compress: true,
		port: 8080,
		https: false
	},

	output: {
		path: path.resolve(__dirname, 'public'),
		filename: '[name].js'
	}
},{
	entry: "./src/sw.imba",
	target: 'webworker',
	module: {
		rules: [{
			test: /\.imba$/,
			loader: 'imba/loader'
		}]
	},
	resolve: {
		extensions: [".imba",".js",".json"]
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'sw.js'
	}
}]
