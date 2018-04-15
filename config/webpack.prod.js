const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');

const angularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin

var x = require('@ngtools/webpack');
console.log('x', x)
console.log('compiler', x.AngularCompilerPlugin);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = {

  entry: {
    'polyfills': './public/polyfills.ts',
    'vendor': './public/vendor.aot.ts',
    'app': './public/main-aot.ts'
  },

  output: {
    path: helpers.root('dist/prod'),
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
        loader: '@ngtools/webpack'
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

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['vendor', 'app'],
      minChunks: 2
    }),

    new angularCompilerPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: helpers.root('public/app/app.module#AppModule')
    }),

    new HtmlWebpackPlugin({
      template: 'config/index.html',
      chunks: ['app']
    }),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),

    new webpack.ContextReplacementPlugin(/\@angular(\\|\/)core(\\|\/)esm5/, path.join(__dirname, './client')),

    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // })
  ]
}