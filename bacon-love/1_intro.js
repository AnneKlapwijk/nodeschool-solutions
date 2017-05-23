/**
 * 1. Create and return an EventStream with values that sum up to 6.
 * @param Bacon
 * @return {*}
 */
module.exports = (Bacon) => {
  return Bacon.sequentially(100, [3,3])
}
