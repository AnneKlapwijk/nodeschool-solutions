const http = require('http')

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
    }).on('error', (e) => {
      reject(e.message)
    })
  })
}

const p1 = httpGet(process.argv[2])
const p2 = httpGet(process.argv[3])
const p3 = httpGet(process.argv[4])

Promise.all([p1, p2, p3]).then(values => {
  values.forEach(value => {
    console.log(value)
  })
}).catch(err =>
  console.error(err)
)
