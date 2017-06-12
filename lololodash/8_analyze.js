// include the Lo-Dash library
var _ = require('lodash')

var worker = function(freelancers) {
  // calculate the average income across all the freelancers
  // put them into 2 groups: underperform & overperform

  // _.meanBy(objects, 'n');
  freelancers = _.sortBy(freelancers, 'income')
  const average = _.meanBy(freelancers, 'income')
  const underperform = _.filter(freelancers, freelancer => freelancer.income <= average)
  const overperform = _.filter(freelancers, freelancer => freelancer.income > average)

  return { average, underperform, overperform }
}

// export the worker function as a nodejs module
module.exports = worker
