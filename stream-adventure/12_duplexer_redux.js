const duplexer = require('duplexer2')
const through = require('through2').obj

/**
 * Returns a duplex stream with the `counter` as the readable side
 * @param counter (readable stream)
 * @return {DuplexWrapper}
 */
module.exports = function (counter) {
  let counts = {}

  const input = through(write, end)

  function write (chunk, _, next) {
    counts[chunk.country] = (counts[chunk.country] || 0) + 1
    next()
  }

  function end (done) {
    counter.setCounts(counts)
    done()
  }

  return duplexer({ objectMode: true }, input, counter)
}
