/**
 * `yield` all integers multiplied by the value passed in via `.next()`
 */
module.exports = function *multiplier() {
  let i = 0
  let multiplier = 1

  while(true) {
    i++
    multiplier = yield i * multiplier
    if (!multiplier) multiplier = 1
  }
}
