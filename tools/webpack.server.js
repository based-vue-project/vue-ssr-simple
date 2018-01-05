/* vue-ssr 生成vue-ssr-bundle.json文件 */
const path = require('path');
const projectRoot = path.resolve(__dirname, '..');
const VueSSRPlugin = require('vue-ssr-webpack-plugin')
module.exports = {
    target: 'node', // !different
    entry: path.join(projectRoot, 'src/server-index.js'),
    output: {
        libraryTarget: 'commonjs2' // !different
        // path: path.join(projectRoot, 'build'),
        // filename: 'bundle.server.js',
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
    	new VueSSRPlugin({
    		filename: './build/vue-ssr-bundle.json'
    	})
    ]
}