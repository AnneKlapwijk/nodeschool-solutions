/**
 * 2. Higher Order Functions
 * @param operation
 * @param num
 */
function repeat(operation, num) {
  if (!num) return
  operation()
  repeat(operation, --num)
}

module.exports = repeat
