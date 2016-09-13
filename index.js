'use strict'
let path = require('path')
let process = require('process')

function* applyRoutes (list) {
  for (let item of list) {
    yield item
  }
}

function loadApp (express, callback) {
  let cwd = process.cwd()
  for (let module of applyRoutes(this.moduleWhiteList)) {
    let resolvedPath = path.resolve(cwd, this.applicationPath, module)
    express.use(`/${module.replace(this.homeDirectory, '')}`, require(resolvedPath))
  }
  callback()
}

function Xploader (config) {
  this.moduleWhiteList = config.whiteList || []
  this.applicationPath = config.applicationPath || `./app`
  this.homeDirectory = config.home || 'index'

  return loadApp.bind(this)
}

module.exports = Xploader
