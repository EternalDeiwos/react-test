
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
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'scss-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loaders: [
          'file-loader'
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
