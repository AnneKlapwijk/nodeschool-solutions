/**
 * 12. Function Spies
 * @param target
 * @param method
 * @constructor
 */
function Spy(target, method) {
  // Hint: Functions have context, input and output.
  // Make sure you consider the context, input to and output from the function you are spying on.
  let original = target[method]
  let c = { count: 0 }

  target[method] = function() {
    c.count++
    return original.apply(this, arguments)
  }
  return c
}

module.exports = Spy
