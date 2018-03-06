var webpack = require('webpack');
var path = require('path');
const nodeExternals = require('webpack-node-externals');


var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './server');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'server.js'
  },
  target: 'node',
  externals: nodeExternals(),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
      },
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader',
      }
    ]
  }
};

module.exports = config;