'use strict'

const someInvalidJSON = process.argv[2]

const parsePromised = json => new Promise((fulfill, reject) => {
  try {
    fulfill(JSON.parse(json))
  } catch (e) {
    reject(e)
  }
})

const onReject = err => console.log(err.message)

parsePromised(someInvalidJSON)
  .catch(onReject)
