/**
 * 14. Trampoline
 * @param operation
 * @param num
 * @return {*}
 */
function repeat(operation, num) {
  if (num <= 0) return
  operation()
  // return thunk
  return function() { return repeat(operation, --num) }
}

/**
 * A higher-order function that takes a function as an argument and returns a new function
 * This new function, when invoked will repeatedly invoke the original as long
 * as that function returns another function to execute (the thunk)
 *
 * A loop that iteratively invokes thunk-returning functions.
 * Trampolined functions can be used to implement tail recursive function calls in stack based languages
 * @param fn
 */
function trampoline(fn) {
  return function() {
    let result = fn.apply(this, arguments)
    while(result instanceof Function) {
      result = result()
    }
    return result
  }
}

/**
 * A thunk is essentially a function that wraps a call to another function,
 * along with any parameters it needs, for later execution.
 * @param operation
 * @param num
 * @return {*}
 */
module.exports = function(operation, num) {
  return trampoline(repeat)(operation, num)
}
