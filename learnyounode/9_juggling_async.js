const http = require('http')

const urls = process.argv.slice(2)

const httpGet = (url) => {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      response.setEncoding('utf8')
      let rawData = ''
      response.on('data', (chunk) => {
        rawData += chunk
      })
      response.on('error', err => {
        reject(err)
      })
      response.on('end', () => {
        resolve(rawData)
      })
    })
  })
}

Promise.all(urls.map(url => httpGet(url)))
  .then(data => console.log(data.join('\n')))
  .catch(console.error)
