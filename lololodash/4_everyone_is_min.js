// include the Lo-Dash library
var _ = require('lodash')

var worker = function(towns) {
  return _.reduce(towns, (acc, town, townName) => {
    if (isHot(town)) {
      acc.hot.push(townName)
    } else if (isWarm(town)) {
      acc.warm.push(townName)
    }

    return acc
  }, { hot: [], warm: [] })
}

const isHot = temperatures => _.every(temperatures, temp => temp > 19)

const isWarm = temperatures => _.some(temperatures, temp => temp > 19)

// export the worker function as a nodejs module
module.exports = worker
