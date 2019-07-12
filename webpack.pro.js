const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const folder_list = require('./getTemplatesList.js');

module.exports = (env, argv) => {
  const config = {
    entry: {
      'app': './app/index.js'
    },
    output: {
      path: path.join(__dirname, '/publish','/html'),
      filename: '[name].bundle.[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.ejs$/,
          exclude: /(node_modules)/,
          loader: 'ejs-loader'
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new TransferWebpackPlugin([
        {from: './css',to:'./css/'}
      ])
    ]
  }

  folder_list.forEach(function(item, index, array){
    if(item === 'commonhtml'){
      folder_list.splice(index, 1);
      generatehtml(folder_list);
    }
  })

  function generatehtml(pagesArray){
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
  return config
}



