// include the Lo-Dash library
var _ = require('lodash')

var inEveryCase = function(collection) {
  // return collection
  return _.forEach(collection, town => {
    town.size = town.population > 1
      ? 'big'
      : town.population > 0.5
        ? 'med'
        : 'small'
  })
}

// export the worker function as a nodejs module
module.exports = inEveryCase
