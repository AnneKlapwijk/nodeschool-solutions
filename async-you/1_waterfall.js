const http = require('http')
const fs = require('fs')
const { waterfall }  = require('async')

const file = process.argv[2]

const readFileContents = (cb) => {
  fs.readFile(file, 'utf8', cb)
}

const getHttpResponseBody = (url, cb) => {
  let body = ''
  http.get(url, res => {
    res.on('data', chunk => body += chunk.toString())
    res.on('end', () => cb(null, body))
  }).on('error', err => cb(err))
}

waterfall([
  readFileContents,
  getHttpResponseBody
], (err, results) => {
  if (err) return console.error(err)
  console.log(results)
})
