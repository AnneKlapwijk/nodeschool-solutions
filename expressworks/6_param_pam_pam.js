const express = require('express')
const crypto = require('crypto')

const app = express()
const port = process.argv[2]

app.put('/message/:id', (req, res) => {
  const { id } = req.params
  res.send(crypto
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  )
})

app.listen(port)
