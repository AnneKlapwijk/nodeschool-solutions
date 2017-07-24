const http = require('http')
const map = require('through2-map')

/**
 Write an HTTP server that receives only POST requests and converts
 incoming POST body characters to upper-case and returns it to the client.

 Your server should listen on the port provided by the first argument to
 your program.
*/

const port = process.argv[2]

const server = http.createServer((req, res) => {
  req.setEncoding('utf8')

  if (req.method !== 'POST') return res.end('send me a POST\n')

  req.pipe(map(chunk => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(Number(port))
