const http = require('http')
const { map } = require('async')

const url1 = process.argv[2]
const url2 = process.argv[3]

map(
  [ url1, url2 ],
  (url, done) => {
    let body = ''
    http.get(url, res => {
      res.on('data', chunk => body += chunk.toString())
      res.on('end', () => done(null, body))
    }).on('error', err => done(err))
  },
  (err, results) => {
    if (err) console.error(err)
    console.log(results)
  }
)
