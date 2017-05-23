/**
 * 13. Blocking Event Loop
 * @param operation
 * @param num
 * @return {*}
 */
function repeat(operation, num) {
  // use setTimeout so it can be interrupted
  setTimeout(function walk () {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  })
}

module.exports = repeat
