'use strict'

const util = require('util')
const setTimeoutPromise = util.promisify(setTimeout)

setTimeoutPromise(300, 'TIMED OUT!').then((value) => {
  console.log(value)
})
