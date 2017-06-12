// include the Lo-Dash library
var _ = require('lodash')

var worker = function(comments) {
  return _.chain(comments)
    .groupBy('username')
    .map((user_comments, username) => {
      return {
        username,
        comment_count: _.size(user_comments)
      }
    })
    .orderBy('comment_count', 'desc')
}

// export the worker function as a nodejs module
module.exports = worker
