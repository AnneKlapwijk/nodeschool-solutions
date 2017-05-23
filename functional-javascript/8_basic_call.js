/**
 * 8. Basic: Call
 * @returns {*}
 */
function duckCount() {
  return [...arguments].reduce(function (acc, something) {
    return Object.prototype.hasOwnProperty.call(something, 'quack') ? ++acc : acc
  }, 0)
}

module.exports = duckCount
