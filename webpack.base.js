const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getTemplatesList } = require('./utils/index')

const folder_list = getTemplatesList('templateSource')
const config = {
  entry: {
    'app': './app/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
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
    ]
  },
  plugins: [
    new TransferWebpackPlugin([
      {from: './css',to:'./css/'}
    ])
  ]
}
// 剔除需要被装载的静态页面颗粒
folder_list.forEach(function(item, index, array){
  if(item === 'commonhtml'){
    folder_list.splice(index, 1);
    generatehtml(folder_list);
  }
})

function generatehtml(pagesArray){
  console.log('pagesArray:', pagesArray)
  pagesArray.forEach(function(pagename,index,array){
    const htmlgenerate = new HtmlWebpackPlugin({
      title: '前端引入公共html模块方案实现（一）',
      hash: true,
      filename: pagename + '.html',
      template: 'templateSource/' + pagename + '/' + pagename + '.js',
      inject: false
    })
    config.plugins.push(htmlgenerate);
  })
}

module.exports = config