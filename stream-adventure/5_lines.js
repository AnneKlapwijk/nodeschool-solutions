const through = require('through2')
const split = require('split')

/**
 convert even-numbered lines to upper-case and odd-numbered
 lines to lower-case. Consider the first line to be odd-numbered.
 */

let i = 1
process.stdin
  .pipe(split()) // buffer chunks on newlines
  .pipe(through(function (line, _, next) {
    let str = line.toString()
    str = ++i % 2 === 0
      ? str.toLowerCase()
      : str.toUpperCase()
    this.push(str + '\n')
    next()
  }))
  .pipe(process.stdout)
