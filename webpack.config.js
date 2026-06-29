const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: 'main.[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[name].[hash][ext]',
	},

	devServer: {
		static: {
			directory: './dist',
			watch: true,
		},
		port: 3000,
		open: true,
		hot: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],

	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					sources: {
						list: [
							{ tag: 'img', attribute: 'src', type: 'src' },
							{ tag: 'img', attribute: 'srcset', type: 'srcset' },
							{ tag: 'link', attribute: 'href', type: 'src' },
						],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
}
