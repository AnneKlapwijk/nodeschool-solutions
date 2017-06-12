// include the Lo-Dash library
var _ = require('lodash')

var worker = function(words) {
  // - append with the word "Chained"
  // - convert to uppercase
  // - sort by alphabetical order
  return _.chain(words)
    .map(word => _.toUpper(`${word}Chained`))
    .sortBy()
}

// export the worker function as a nodejs module
module.exports = worker
