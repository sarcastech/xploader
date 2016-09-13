'use strict'
let path = require('path')

function* applyRoutes (list) {
  for (let item of list) {
    yield item
  }
}

function loadApp (express, callback) {
  for (let module of applyRoutes(this.moduleWhiteList)) {
    express.use(`/${module.replace(this.homeDirectory, '')}`, require(path.join(this.applicationPath, module)))
  }
  callback()
}

function Xploader (config) {
  this.moduleWhiteList = config.whiteList || []
  this.applicationPath = config.applicationPath || `../app`
  this.homeDirectory = config.home || 'index'

  return loadApp.bind(this)
}

module.exports = Xploader
