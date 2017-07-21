const through = require('through2')
/**
 * convert data from process.stdin to upper-case data on process.stdout
 * using the through2 module
 */
process.stdin
  .pipe(through(function (buffer, _, next) {
    // call this.push() to produce output data
    this.push(buffer.toString().toUpperCase())
    // call next() when you're ready to receive the next chunk
    next()
  }, done => {
    // call done() to finish the output
    done()
  }))
  .pipe(process.stdout)
