'use strict'

/* global getPromise1, getPromise2 */

const all = (...promises) =>
  new Promise(fulfill => {
    let counter = 0
    let result = []

    const onFulfill = (value, index) => {
      result[index] = value
      counter++

      if(counter === 2) {
        fulfill(result)
      }
    }

    promises.map((promise, index) => {
      promise.then(value => onFulfill(value, index))
    })
  })

all(getPromise1(), getPromise2())
  .then(console.log)
