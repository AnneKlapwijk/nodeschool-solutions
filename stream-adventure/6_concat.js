const concat = require('concat-stream')

/**
 * You will be given text on process.stdin. Buffer the text and reverse it using
 * the concat-stream module before writing it to stdout.
 *
 * `concat-stream` is a write stream that you can pass a callback to get the
 * complete contents of a stream as a single buffer.
 */

const reverseString = (str) => str.split('').reverse().join('')

process.stdin.pipe(concat(body => {
  console.log(reverseString(body.toString()))
}))
