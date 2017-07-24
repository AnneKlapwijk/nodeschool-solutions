const http = require('http')
const url = require('url')

const port = process.argv[2]

/**
 Write an HTTP server that serves JSON data when it receives a GET request to
 the path '/api/parsetime'. Expect the request to contain a query string
 with a key 'iso' and an ISO-format time as the value.

 Add second endpoint for the path '/api/unixtime' which accepts the same
 query string but returns UNIX epoch time in milliseconds
 */
const parseTime = (date) => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

const getUnixTime = (date) => {
  return {
    unixtime: date.getTime()
  }
}

const server = http.createServer((req, res) => {
  req.setEncoding('utf8')

  if (req.method !== 'GET') return res.end('send me a GET\n')

  const parsedUrl = url.parse(req.url, true)
  const pathname = parsedUrl.pathname
  const date = new Date(parsedUrl.query.iso)

  let result
  switch (pathname) {
  case '/api/parsetime':
    result = parseTime(date)
    break
  case '/api/unixtime':
    result = getUnixTime(date)
    break
  default:
    result = null
  }

  if (result === null) {
    res.writeHead(404)
    return res.end()
  }

  res.writeHead(200, { 'Content-Type': 'application/json' })
  return res.end(JSON.stringify(result))
})

server.listen(Number(port))
