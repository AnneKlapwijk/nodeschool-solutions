const combine = require('stream-combiner')
const split = require('split')
const zlib = require('zlib')
const through = require('through2')

module.exports = function () {

  let books

  return combine(
    // read newline-separated json,
    process.stdin.pipe(split()),
    // group books into genres,
    through(write, end),
    // then gzip the output
    zlib.createGzip()
  )

  function write (chunk, _, next) {
    if(chunk.length === 0) return next()

    let line = JSON.parse(chunk)

    if (line.type === 'genre') {
      if (books) this.push(JSON.stringify(books) + '\n')
      books = { name: line.name, books: [] }
    } else if (line.type === 'book') {
      books.books.push(line.name)
    }
    next()
  }

  function end (done) {
    if (books) this.push(JSON.stringify(books) + '\n')
    done()
  }
}
