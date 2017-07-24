const http = require('http')
const url = process.argv[2]

/**
 perform a simple HTTP GET request to the provided URL
 write the String contents of each "data" event from the response to a new line on the console (stdout)
 */
http.get(url, response => {
  response.setEncoding('utf8')
  response.on('data', data => {
    process.stdout.write(`${data}\n`)
  })
  response.on('error', err => {
    process.stderr.write(`${err}\n`)
  })
}).on('error', (e) => {
  console.error(e.message)
})
