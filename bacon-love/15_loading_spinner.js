/**
 * 15. Loading Spinner
 * The spinner should only be visible after the button has been clicked
 * and while waiting for the result of an async operation
 * @param Bacon
 * @param clicks (EventStream)
 * @param startAsyncTask (Function) when called will return an observable
 * @return {*} (Property) true/false
 */
module.exports = (Bacon, clicks, startAsyncTask) => {
  const request = clicks.map(true)
  const response = request.flatMap(startAsyncTask)

  return request.awaiting(response)
}
