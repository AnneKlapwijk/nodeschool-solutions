const http = require('http')
const url = process.argv[2]

/**
 perform an HTTP GET request to a URL provided as the first command-line argument.
 Collect all data from the server (not just the 'data' event) and then write two lines to the console (stdout).
 */
http.get(url, response => {
  response.setEncoding('utf8')
  let rawData = ''
  response.on('data', (chunk) => {
    rawData += chunk
  })
  response.on('error', err => {
    console.error(err)
  })
  response.on('end', () => {
    console.log(rawData.length)
    console.log(rawData)
  })
}).on('error', (e) => {
  console.error(e.message)
})
