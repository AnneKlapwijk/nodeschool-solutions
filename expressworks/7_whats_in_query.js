const express = require('express')

const app = express()
const port = process.argv[2]

app.get('/search', (req, res) => {
  res.send(req.query)
})

app.listen(port)
