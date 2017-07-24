/**
 * Turns someObj into an Iterator.
 * This Iterator should count the positive integers starting at 1,
 * through to and including 10.
 * @param someObj {Object}
 */
module.exports = function makeCounter(someObj) {
  let i = 0

  someObj.next = function() {
    return {
      done: i >= 10,
      value: ++i
    }
  }

}
