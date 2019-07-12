const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = (env, argv) => {
  const config = {
    mode: 'production',
  }
  return merge(baseConfig, config)
}



