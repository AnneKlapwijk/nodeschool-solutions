/**
 * 2. Wrapping Values as Reactive Datatypes
 * @param Bacon
 * @param promise
 * @param eventTarget
 * @param callback
 * @return {{promise: *, eventTarget: *, callback: *, array: *}}
 */
// expose the stream generator as a module method
module.exports = (Bacon, promise, eventTarget, callback) => {
  return {
    promise: Bacon.fromPromise(promise),     // return your promise implementation here
    eventTarget: Bacon.fromEvent(eventTarget, 'data'), // return your eventTarget implementation here
    callback: Bacon.fromCallback(cb => callback('foo', 'bar', cb)),    // return your callback implementation here
    array: Bacon.fromArray([1, 2, 3, 4])        // return your array implementation here
  }
}

