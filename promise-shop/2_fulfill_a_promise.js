'use strict'

const promise = new Promise(fulfill => {
  setTimeout(() => fulfill('FULFILLED!'), 300)
})

promise.then(console.log)
