var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxstagram'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    // {
    //   test: /\.js$/,
    //   loaders: ['babel'],
    //   include: path.join(__dirname, 'client')
    // },
    // CSS
    {test: /\.styl$/, loaders: ['style', 'css', 'stylus']},
    // {
    //   test: /\.styl$/,
    //   include: path.join(__dirname, 'client'),
    //   loader: 'style-loader!css-loader!stylus-loader'
    // }
    ]
  }
};
