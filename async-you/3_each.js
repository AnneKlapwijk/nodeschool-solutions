const http = require('http')
const { each } = require('async')

const url1 = process.argv[2]
const url2 = process.argv[3]

each(
  [ url1, url2 ],
  (url, done) => {
    http.get(url, res => {
      res.on('end', () => done())
    }).on('error', err => done(err))
  },
  (err) => {
    if (err) console.error(err)
  }
)
