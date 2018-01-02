const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const fs = require('fs-extra')
const rootPath = path.resolve(__dirname, '../')
/*eslint-disable indent */
const vueLoader = {
    loaders: {
        'less': [{
                'loader': path.join(rootPath, 'node_modules/extract-text-webpack-plugin/loader.js'),
                'options': {
                    'omit': 1,
                    'remove': true
                }
            },
            {
                'loader': 'vue-style-loader'
            },
            {
                'loader': 'css-loader',
                'options': {
                    'minimize': true,
                    'sourceMap': true
                }
            },
            {
                'loader': 'less-loader',
                'options': {
                    'sourceMap': true
                }
            }
        ]
    }
}

function getConfig() {
	const config = {
		entry: path.resolve(rootPath, 'src/index.js'),
		output: {
			path: path.resolve(rootPath, 'build/client'),
			publicPath: '../',
			filename: 'script/[name].js'
		},
		devtool: '#eval-source-map',
		module: {
            rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: vueLoader
            }, {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.(swf)$/,
                loader: `url-loader?limit=10000&name=/script/[name].[ext]`
            }, {
                test: /\.(png|jpg|jpeg|gif|woff|svg|eot|ttf)$/,
                loader: `url-loader?limit=10000&name=/images/[name].[ext]`
            }, {
                test: /\.less/,
                use: [{
                    loader: 'less-loader'
                }]
            }, {
                test: /\.css/,
                loader: 'style-loader!css-loader'
            }]
        },
        resolve: {
        	alias: {
        		'vue$': 'vue/dist/vue.common.js',
        		'components': path.join(rootPath, 'src/client/components'),
        		'lib': path.join(rootPath, '/src/lib'),
        		'less': path.join(rootPath, '/src/less'),
        		'@': path.join(rootPath)
        	}
        },
        plugins: [
        	new ExtractTextPlugin('css/[name].css'),
        	new webpack.optimize.CommonsChunkPlugin({
        		names: ['vendors']
        	})
        ]
	}
	return config
}

module.exports = {
	getConfig
}