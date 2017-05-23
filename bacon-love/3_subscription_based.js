/**
 * 03. Subscription Based
 * @param Bacon
 * @param stream
 * @param action
 * @param actionOnValue
 * @return {*}
 */
module.exports = (Bacon, stream, action, actionOnValue) => {

	// 1. add an action(given as input) on every event on an event stream
	// 2. log the value of the event stream out to the console with the prefix "Value:"
	// 3. add a subscriber with a callback given as the third input (called actionOnValue).

  stream
		.doAction(action)
		.log('Value:')
		.onValue(actionOnValue)

  return stream

}
