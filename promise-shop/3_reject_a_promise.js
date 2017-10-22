'use strict'

const promise = new Promise((fulfill, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300)
})

const onReject = err => console.log(err.message)

promise.then(null, onReject)
