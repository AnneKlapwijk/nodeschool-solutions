const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

/**
 * HTTP Server that serves the same text file for each request it receives
 */
const server = http.createServer((req, res) => {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream

  // If an encoding is not set, Buffer objects will be received.
  req.setEncoding('utf8')

  // readable.pipe(writable)
  // all the data from readable goes into writable
  fs.createReadStream(file).pipe(res)
})

server.listen(Number(port))
