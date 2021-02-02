const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
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