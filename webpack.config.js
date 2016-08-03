const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './ui/index.js',
  output: {
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.css/,
      loader: 'style!css'
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'ui/index.html',
      inject: true
    })
  ],
  devServer: {
    hot: true,
    progress: true,
    proxy: {
      '/graphql': 'http://localhost:3000/graphql'
    },
    historyApiFallback: {
      index: '/'
    }
  },
  resolve: {
    root: path.resolve('/'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json']
  }
};
