const through = require('through2')
const trumpet = require('trumpet')

/**
 Your program will get some html written to stdin. Convert all the inner html to
 upper-case for elements with a class name of "loud",
 and pipe all the html to stdout.
 */

const tr = trumpet()
const stream = tr.select('.loud').createStream()

stream
  .pipe(through(function (buf, _, next) {
    this.push(buf.toString().toUpperCase())
    next()
  }))
  .pipe(stream)

process.stdin
  .pipe(tr)
  .pipe(process.stdout)
