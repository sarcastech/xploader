'use strict'
let path = require('path')

function* applyRoutes (list) {
  for (let item of list) {
    yield item
  }
}

function loadApp (express, callback) {
  for (let appModule of applyRoutes(this.moduleWhiteList)) {
    let resolvedPath = path.resolve(path.dirname(module.parent.filename), this.applicationPath, appModule)
    express.use(`/${appModule.replace(this.homeDirectory, '')}`, require(resolvedPath))
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
