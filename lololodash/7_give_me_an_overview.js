// include the Lo-Dash library
var _ = require('lodash')

var worker = function(orders) {
  return _.chain(orders)
    .groupBy('article')
    .map((order, article) => {
      return {
        article: Number(article),
        total_orders: order.length === 1
          ? _.head(order).quantity
          : _.reduce(
            order,
            (acc, item) => acc + item.quantity,
            0)
      }
    })
    .orderBy('total_orders', 'desc')
}

// export the worker function as a nodejs module
module.exports = worker
