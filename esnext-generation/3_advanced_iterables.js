/**
 * Returns an Iterator for even numbers if isEven is true
 * or, returns an Iterator for odd numbers if isEven is false
 * If `.next(swap)` receives `true`, swaps between even <-> odd
 * @param isEven {Boolean}
 * @return {{next: (function(*))}}
 */
module.exports = function generate(isEven) {
  let i = isEven ? 0 : -1

  return {
    next: (swap) => {
      i += (swap ? 1 : 2)

      return {
        value: i
      }
    }
  }
}
