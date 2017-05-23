/**
 * 18. Function Call
 * Allows to use Array#slice without using slice.call or slice.apply to invoke it
 * @type {*}
 */
module.exports = Function.call.bind(Array.prototype.slice)
