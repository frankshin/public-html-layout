const webpack = require('webpack');
const execa = require('execa');
const chalk = require('chalk');
const webpackDevServer = require('webpack-dev-server');
const devconfig = require('../webpack.dev')
const compiler = webpack(devconfig);
const opn = require('better-opn')

const { port, host } = devconfig.devServer
let isOpened = false
const server = new webpackDevServer(compiler, devconfig.devServer);
server.listen(port, 'localhost', () => {
  console.log('dev server listening on port 9000');
});

compiler.hooks.done.tap('done', async (stats) => {
  if (isOpened) return

  isOpened = true
  console.log(chalk.green('编译完成....'));
  opn(`http://localhost:${port}`)
})

