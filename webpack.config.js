module.exports = {
  context: __dirname + '/src',
  entry: './js/scripts.js',
	resolve: {
		alias: {
			'less': './less',
			'plugins': './plugins'
		},
		extensions: ['', '.js', '.jsx']
	},
    module: {
        loaders: [
			{test: /\.jsx?$/, loader: 'babel-loader', exclude: /(node_modules|bower_components)/,
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
				}
			},
			{test: /\.css?$/, loader: 'style-loader!css-loader!'},
			{test: /\.html$/, loader: 'raw'},
			{test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/ },
		]
    },
	output: {
    path: __dirname + '/dist',
		filename: "scripts.min.js"
	}

};
