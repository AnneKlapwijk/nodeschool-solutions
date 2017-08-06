const { series } = require('async')
const http = require('http')

const url1 = process.argv[2]
const url2 = process.argv[3]

const getHttpResponseBody = (url, cb) => {
  let body = ''
  http.get(url, res => {
    res.on('data', chunk => body += chunk.toString())
    res.on('end', () => cb(null, body))
  }).on('error', err => cb(err))
}

series({
  requestOne: cb => getHttpResponseBody(url1, cb),
  requestTwo: cb => getHttpResponseBody(url2, cb)
}, (err, results) => {
  if (err) return console.error(err)
  console.log(results)
})
