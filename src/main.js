#!/usr/bin/env node

const webpack = require('webpack')
const yargs = require('yargs')

const { argv } = yargs(process.argv)
if (!argv.dist) {
  throw new Error('required dist argument')
}
if (!argv.cheatsheet) {
  throw new Error('required cheatsheet argument')
}
if (!argv.info) {
  throw new Error('required info argument')
}
if (!argv.logo) {
  throw new Error('required logo argument')
}

const config = require('./webpack.config')(argv)

webpack(config, (err, stats) => {
  if (err) {
    throw err
  }
  console.log(stats.toString({ colors: true }))
})
