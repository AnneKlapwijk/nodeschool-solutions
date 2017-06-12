// include the Lo-Dash library
var _ = require('lodash')

var worker = function(collection) {
  return _.sortBy(collection, item => -item.quantity)
}

// export the worker function as a nodejs module
module.exports = worker
