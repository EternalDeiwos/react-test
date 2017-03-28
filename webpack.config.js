
const path = require('path')
const cwd = process.cwd()
const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * Config
 */
module.exports = {
  context: path.join(cwd, 'app'),

  entry: {
    app: ['./js/index.jsx'],
    common: ['react', 'react-dom', 'react-router', 'moment', 'material-ui']
  },

  output: {
    path: path.resolve('dist'),
    filename: 'bundle[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader',
          'scss-loader'
        ]
      },
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        loaders: [
          'url-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loaders: [
          'file-loader'
        ]
      },
      {
        test: /\.ico$/,
        loaders: [
          'file-loader?name=[name].[ext]'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
    })
  ]
}
