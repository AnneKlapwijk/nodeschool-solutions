/**
 * 5. Properties
 * @param Bacon
 * @return {*}
 */
module.exports = (Bacon) => {
	// Create a Property that has an initial value of 10 and increments 3 times, ending as 13
	// 10 -> 11 -> 12 -> 13
  return Bacon.sequentially(10, [11, 12, 13]).toProperty(10)
}
