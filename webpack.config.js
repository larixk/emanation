const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageConfig = require('./package.json');

module.exports = {
  entry: './main.js',
  output: { path: 'dist', filename: 'bundle.js' },
  plugins: [new HtmlWebpackPlugin({
    inject: true,
    title: packageConfig.description,
  })],
  module: {
    loaders: [
      {
        test: /.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
