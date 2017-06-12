// include the Lo-Dash library
var _ = require('lodash')

var worker = function(userObj) {
  return _.template('Hello <%= name %> (logins: <%= login.length %>)')(userObj)
}

// export the worker function as a nodejs module
module.exports = worker
