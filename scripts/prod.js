#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const execa = require('execa')
const semver = require('semver')
const inquirer = require('inquirer')
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'))
const chalk = require('chalk')

let options = {
  type: 'list',
  name: 'version',
  message: '请选择版本号:',
  choices: [
    {
      name: `v${semver.inc(pkg.version, 'patch')}: 小bug`,
      value: semver.inc(pkg.version, 'patch')
    },
    {
      name: `v${semver.inc(pkg.version, 'minor')}: 新版本`,
      value: semver.inc(pkg.version, 'minor')
    }
  ]
}

inquirer
.prompt(options)
.then(answers => {
  (async () => {
    console.log('answer:', answers)
    const version = answers.version
    await execa('git', ['checkout', 'master'],  { stdio: 'inherit' })
    await execa('git', ['pull', 'origin', 'master'], { stdio: 'inherit' })
    await execa('npm', ['version', `${version}`, '--no-git-tag-version'], { stdio: 'inherit' })
    // build
    await execa('npm', ['run', 'build',  '--', `--env.version=${version}`], { stdio: 'inherit' })
    // 提交代码
    await execa('git', ['add', '-A'], { stdio: 'inherit' })
    await execa('git',
      ['commit', '-m', `build version: v${version}`],
      { stdio: 'inherit' }
    )
    await execa('git', ['tag', '-a', `v${version}`, '-m', `build version: ${version}`])
    await execa('git', ['push', 'origin', 'master'], { stdio: 'inherit' })
  })();
})
