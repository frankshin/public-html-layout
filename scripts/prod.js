#!/usr/bin/env node
const execa = require('execa')

execa('npm', ['run', 'build'], { stdio: 'inherit' })