// include the Lo-Dash library
var _ = require('lodash')

var worker = function(arr) {
  // do work; return stuff
  return _.filter(arr, { active: true })
}

// export the worker function as a nodejs module
module.exports = worker
