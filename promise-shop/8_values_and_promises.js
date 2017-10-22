'use strict'

const attachTitle = str => `DR. ${str}`

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log)
