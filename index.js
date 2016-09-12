'use strict'

let path = require('path')
let moduleWhiteList = []
let applicationPath

let applyRoutes = function* (list) {
  for (let item of list) {
    yield item
  }
}

module.exports = function (express, callback) {
  for (let m of applyRoutes(moduleWhiteList)) {
    express.use(`/${m.replace('index', '')}`, require(path.join(applicationPath, m)))
  }

  callback()
}
