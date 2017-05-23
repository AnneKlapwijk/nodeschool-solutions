/**
 * 4. EventStreams
 * @param Bacon
 * @return {*}
 */
module.exports = (Bacon) => {
	// Create 1 EventStream that emits 3 different async values:
	// "Bacon", "is", "delicious"
  const bus = Bacon.Bus()
  setTimeout(() => bus.push('Bacon'), 10)
  setTimeout(() => bus.push('is'), 20)
  setTimeout(() => bus.push('delicious'), 30)
  setTimeout(() => bus.end(), 40)
  return bus
}
