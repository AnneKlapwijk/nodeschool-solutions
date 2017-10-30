const express = require('express')
const fs = require('fs')

const app = express()
const port = process.argv[2]
const file = process.argv[3]

app.get('/books', (req, res) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) return res.sendStatus(500)
    res.json(JSON.parse(data))
  })
})

app.listen(port)
