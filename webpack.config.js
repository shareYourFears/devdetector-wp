var webpack = require('webpack');
var minimize = process.argv.indexOf('--minimize') !== -1;

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: minimize ? 'bundle.min.js' : 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  },
  plugins: minimize ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
}