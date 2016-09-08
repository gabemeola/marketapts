var address,
		path = require("path"),
		webpack = require("webpack"),
		autoprefixer = require('autoprefixer'),
		HtmlWebpackPlugin = require('html-webpack-plugin'),
		ifaces = require('os').networkInterfaces(),
		PORT = 3333 ;
// Finds out your local IP address
for (var dev in ifaces) {
	ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address : undefined);
}
module.exports = {
	resolve: {
		root: path.resolve("./app"), // Allow Easy non-relative imports
		extensions: ["", ".js", ".jsx"] // Resolves JSX Imports
	},
	entry: { //Entry Point for Webpack
		app: [
			`webpack-dev-server/client?http://${address}:${PORT}`,
			'webpack/hot/only-dev-server',
			'./app/app.js',
			//'./sass/entry.sass'
		]
	},
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.js",
		publicPath: `http://${address}:${PORT}/` //Bundled Javascript Webpack Spits out.
	},
	devtool: 'eval-source-map',
	devServer: { //Allows webpack-dev-server to be live reloaded
		inline: true,
		hot: true,
		port: PORT
	},
	module: {
		loaders: [
			{ //Babel loader for converting ES2015 to ES5
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'react-hmre'],
					plugins: ['babel-plugin-transform-object-rest-spread']
				}
			},
			{ //Converts SASS to CSS
				test: /\.sass$/,
				loader: 'style-loader!css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax'
			},
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]&context=./assets'
			},
			{ //Optimizes Images
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=./assets/min-imgs/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false&progressive=true'
				]
			},
			{ //Loads HTML imports/requires
				test: /\.html$/,
				exclude: __dirname + "/app/index.html",
				loader: "html"
			}
		]
	},
	//Config for Post-CSS and AutoPrefixer
	postcss: [ autoprefixer({ remove: false, browsers: ['> 5%'] }) ],
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html",
			filename: "index.html",
			inject: "body"
		})
	]
};