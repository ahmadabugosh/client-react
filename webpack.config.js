const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' }
          // { loader: 'eslint-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader')
      }
      /* for images
      {
        test: /\.(jpg|gif|png)$/,
        use: 'file-loader?name=[name].[ext]',
        include: path.join(__dirname, '/client/assets')
      }
      */
    ]
  },
  externals: {
    cheerio: 'window',
    'react/addons': 'react',
    'react/lib/ExecutionEnvironment': 'react',
    'react/lib/ReactContext': 'react'
  },
  devtool: 'eval-source-map',
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: '/',
    hot: true
  }
};

// For Production


  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );


module.exports = config;
