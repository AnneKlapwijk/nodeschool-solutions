/**
 * `yield` either odd or even numbers based on `isEven`
 * @param isEven {Boolean}
 */
module.exports = function *generate(isEven) {
  let i = isEven ? 0 : -1

  while(true) {
    i += 2
    yield i
  }
}
