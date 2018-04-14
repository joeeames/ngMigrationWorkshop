const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {

  entry: {
    'ng1': './public/index.ts'
  },

  output: {
    path: helpers.root('dist/dev'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: Infinity
    }),

    new webpack.SourceMapDevToolPlugin({
      'filename': '[file].map[query]',
      'moduleFilenameTemplate': '[resource-path]',
      'fallbackModuleFilenameTemplate': '[resource-path]?[hash]',
      'sourceRoot': 'webpack:///'
    }),

    new HtmlWebpackPlugin({
      template: 'config/index.html'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
}