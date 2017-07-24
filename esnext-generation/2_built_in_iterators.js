/**
 * Extracts only the numeric values from iterable, returning thos values as an Array.
 * Iterable could be any build-in Iterable, or a custom Iterable exposing an Iterator
 * via the key Symbol.iterator
 * @param iterable
 * @return {Array}
 */
module.exports = function filterForNumbers(iterable) {
  let arr = []
  for (let value of iterable) {
    if (typeof value === 'number') arr.push(value)
  }
  return arr
}
