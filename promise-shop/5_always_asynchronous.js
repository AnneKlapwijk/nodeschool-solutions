'use strict'

const promise = new Promise(fulfill => {
  fulfill('PROMISE VALUE')
})

// You can expect that the functions passed to the `then` method of a
// promise will be called on the next turn of the event loop.

promise.then(console.log)

console.log('MAIN PROGRAM')
