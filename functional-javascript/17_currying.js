/**
 * 17. Currying
 * @param fn {function} the function we want to curry
 * @param n {int} optional number of arguments to curry
 */
function curryN(fn, n = fn.length) {
  return (arg) =>
    (n <= 1)
      ? fn(arg)
      : curryN(fn.bind(this, arg), n - 1)
}

module.exports = curryN
