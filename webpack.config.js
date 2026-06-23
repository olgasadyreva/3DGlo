const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
	context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'main.[contenthash].js',
    // Путь для сохранения
    path: path.resolve(__dirname, 'dist'),
    // Очистка папки dist перед каждой сборкой
    clean: true,
  },

  devServer: {
    static: {
			directory: './dist',
			watch: true,
		},
    port: 3000,
    open: true, // Автоматически открывать браузер
    hot: true,  // Горячая перезагрузка (HMR)
  },

  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
