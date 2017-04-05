module.exports = {
	entry: [
		'./source/App.js'
		],
	output: {
		path: _dirname,
		filename: "bundle.js"
		},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel'
			}]
		}
}