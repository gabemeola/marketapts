var path = require("path"),
	  webpack = require("webpack"),
	  ExtractTextPlugin = require('extract-text-webpack-plugin'),
	  autoprefixer = require('autoprefixer'),
	  HtmlWebpackPlugin = require('html-webpack-plugin'),
	  ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
	resolve: {
		root: path.resolve("./app"), // Allow Easy non-relative imports
		extensions: ["", ".js", ".jsx"] // Resolves JSX Imports
	},
  entry: { //Entry Point for Webpack
	  app: [
		  "./app/app.js",
		  //"./sass/entry.sass"
	  ],
  },
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.[hash].js" //Bundled Javascript Webpack Spits out.
	},
	module: {
		loaders: [
			{ //Babel loader for converting ES2015 to ES5
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
					plugins: ['babel-plugin-transform-object-rest-spread']
		    }
			},
      { //Converts SASS to CSS and also performs relevant pathing and auto-prefixes
        test: /\.sass$/,
	      exclude: __dirname + "/sass/preloader/",
	      loader: ExtractTextPlugin.extract('css-loader?sourceMap!postcss-loader!resolve-url!sass-loader?indentedSyntax') // Extracts main.css to separate file
      },
			{ //Loads the font files from imports
				test:  /\.(ttf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]&context=./assets'
			},
			{ //Optimizes Images
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=./assets/min-icons/[hash].[ext]',
					'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=true&progressive=true'
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
	postcss: [ autoprefixer({ remove: true, browsers: ['> 5%'] }) ],
  plugins: [
	  new ExtractTextPlugin("main.[hash].css"),
	  new webpack.DefinePlugin({
		  'process.env': {
			  'NODE_ENV': JSON.stringify('production')
		  }
	  }),
	  new webpack.optimize.DedupePlugin(),
	  new webpack.optimize.UglifyJsPlugin({
	  	sourceMap: false,
		  compress: {
			  warnings: false,
			  drop_console: true
		  },
		  comments: false
	  }),
	  new HtmlWebpackPlugin({
		  template: __dirname + "/app/index.html",
		  filename: "index.html",
		  inject: "body",
		  minify: {
			  collapseWhitespace: true,
			  removeComments: true,
			  removeRedundantAttributes: true
		  }
	  }),
	  new ScriptExtHtmlWebpackPlugin({
		  defaultAttribute: 'async'
	  })
  ]
};