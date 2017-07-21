const http = require('http')
const through = require('through2')

/** Write an http server that uses a through stream to write back
 the request stream as upper-cased response data for POST requests.
 */

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    req.pipe(through(function (buf, _, next) {
      this.push(buf.toString().toUpperCase())
      next()
    })).pipe(res)
  }
  else res.end()
})

server.listen(Number(process.argv[2]))
