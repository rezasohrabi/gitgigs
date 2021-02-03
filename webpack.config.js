const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  module: {
      rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(gif|png|svg|jpeg)$/i,
            type: 'asset/reset'
        },
        {
            test: /\.(woff|ttf|eot)/i,
            type: 'asset/resource',
        },
        {
            test: /\.csv$/i,
            use: ['csv-loader'],
        },
        {
            test: /\.xml$/i,
            use: ['xml-loader'],
        },
      ],
    },
};