const execa = require('execa')

execa('npm', ['run', 'dev'], { stdio: 'inherit' })