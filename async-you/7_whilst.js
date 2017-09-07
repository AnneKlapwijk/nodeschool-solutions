const http = require('http')
const { whilst } = require('async')

const url = process.argv[2]

// console.log the amount of GET requests needed to retrieve the "meerkat" string
let response = ''
let count = 0

whilst(
  () => response.trim() !== 'meerkat',
  (cb) => {
    let body = ''

    http.get(url, (res) => {
      res.on('data', chunk => body += chunk.toString())
      res.on('end', () => {
        ++count
        response = body
        cb(null, count)
      })
    })
  },
  (err) => {
    if (err) return console.error(err)
    console.log(count)
  }
)
