const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getTemplatesList } = require('./utils/index')

const folder_list = getTemplatesList('pages')
const config = {
  entry: {
    'app': './app/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.[hash].js',
    publicPath: path.join(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
          }
        }
      },
      {
        test: /\.ejs$/,
        exclude: /(node_modules)/,
        loader: 'ejs-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'static/images/',
              publicPath: 'static/images/',
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new TransferWebpackPlugin([
      {from: './static',to:'./static/'}
    ])
  ]
}

if(folder_list.includes('.DS_Store')){
  const index = folder_list.findIndex((item, value) => {
    return item === '.DS_Store'
  })
  folder_list.splice(index, 1);
}
generatehtml(folder_list);

function generatehtml(pagesArray){
  console.log('pagesArray:', pagesArray)
  pagesArray.forEach(function(pagename,index,array){
    const htmlgenerate = new HtmlWebpackPlugin({
      title: '前端引入公共html模块方案实现（一）',
      hash: true,
      filename: pagename + '.html',
      template: 'pages/' + pagename + '/' + pagename + '.js',
      inject: false
    })
    config.plugins.push(htmlgenerate);
  })
}

module.exports = config