/**
 * @author [xudengwei.com]
 * @email [1103579820@qq.com]
 * @date 2017-02-24 03:31:02
 * @desc [description]
*/
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const folder_list = require('./base-config/webpack.dir-foreach.config.js');

const exportConfig = {
    entry: {
      'index': './js/index.js'
    },
    output: {
      path: path.join(__dirname, '/publish','/html'),
      filename: '[name].bundle.[hash].js',
    },
    module: {
      loaders: [
        { test: /\.ejs$/, loader: 'ejs-loader' },
        { test: /\.html$/, loader: 'html-loader' }
      ]
    },
    plugins: [
          new TransferWebpackPlugin([
              {from: './css',to:'./css/'},
              {from: './js',to:'./js/'},
              {from: './images',to:'./images/'},
              {from: './lib',to:'./lib/'},
              {from: './sass',to:'./sass/'},
              {from: './static',to:'./static/'}
          ]),
          new CopyWebpackPlugin([
              {from : '404.html'}
          ])
    ]
};

var str = 'commonhtml';
folder_list.forEach(function(item,index,array){
    if(str == item){
      folder_list.splice(index,1);
      generatehtml(folder_list);
    }
});

function generatehtml(obj){
    obj.forEach(function(pagename,index,array){
        const htmlgenerate = new HtmlWebpackPlugin({
            title: '辅导君官网-初高中全科一对一在线辅导',
            hash: true,
            filename: pagename + '.html',
            template: 'templateSource/' + pagename + '/' + pagename + '.js',
            inject: false
        })
        exportConfig.plugins.push(htmlgenerate);
    });
}



module.exports = exportConfig;