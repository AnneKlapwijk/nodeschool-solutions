/**
 * 7. Basic: Recursion
 * @param arr
 * @param fn
 * @param initial
 */
function reduce(arr, fn, initial) {
  if (!arr.length) return initial
  const head = arr.shift()
  return reduce(arr, fn, fn(initial, head))
}

module.exports = reduce
