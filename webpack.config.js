const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.js',
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100,
  },

  devServer: {
    contentBase: path.join(__dirname, '/public'),
    stats: 'errors-only',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },

  devtool: 'cheap-eval-source-map', // remove for build
};
