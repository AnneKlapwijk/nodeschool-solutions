const http = require('http')
const { reduce } = require('async')

const url = process.argv[2]

reduce(['one', 'two', 'three'], 0, (memo, number, cb) => {
  http.get(`${url}?number=${number}`, (res) => {
    res.on('data', chunk => memo += Number(chunk))
    res.on('end', () => cb(null, memo))
  }).on('error', err => console.error(err))

}, (err, result) => {
  if (err) console.error(err)
  console.log(result)
})
