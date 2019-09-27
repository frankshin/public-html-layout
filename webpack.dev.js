const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = ((env, argv) => {
  const config = {
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      port: 9001
    },
  }

  return merge(baseConfig, config)
})()



