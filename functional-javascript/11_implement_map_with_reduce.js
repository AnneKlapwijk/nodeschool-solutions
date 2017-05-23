/**
 * 11. Implement Map with Reduce
 * @param arr
 * @param fn
 * @return array
 */
module.exports = function arrayMap(arr, fn) {
  return arr.reduce(function(acc, curr, i) {
    acc[i] = fn(curr)
    return acc
  }, [])
}
