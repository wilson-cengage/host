const webpack = require('webpack');
const path = require('path');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';

const packageName = process.env.PACKAGE_NAME || 'webpackdevserver_mode';
const jsonpPackageName = packageName.replace( /\W/g , '');

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-eval-source-map',
  context: path.join(__dirname, './client'),
  entry: {
    'index': './index.js',
    [`${packageName}/${packageName}`]: './exports.js'
  },
  output: {
    path: path.join(__dirname, './build/'),
    filename: '[name].js',
    libraryTarget: 'umd',
    jsonpFunction: `jsonpFunction${jsonpPackageName}`,   /* jsonp function must be unique within the entire cengage universe, so that webpack chunk loaders for each package don't collide */
    chunkFilename: `${packageName}/${packageName}-[id].js`,
    publicPath: isProd?'/components/':'/client/'
    /* production build: /components/ is the path for bundle chunk lookup during runtime, should eventually be CMP /components/component3-package1/ */
    /* webpack-devserver build:  /client/ is the path for in-memory bundle update */
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loaders: [
          // 'react-hot',
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',  // inline base64 URLs for <=8k images, direct URLs for the rest
        query: {
          limit: 8192
        }
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [
      path.resolve('./client'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en|ko|ja|zh-cn)$/),  /* moment webpack bundling bug */
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      children: true,     /** deps shared by chunks are extracted into its own async chunk **/
      async: true
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 20        /** Too many chunks means too many async requests before component can be rendered */
    })
  ],
  devServer: {
    contentBase: './'
    // hot: true
  }
};
