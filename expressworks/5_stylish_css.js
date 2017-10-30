const express = require('express')

const app = express()
const port = process.argv[2]
const folder = process.argv[3]

app.use(require('stylus').middleware(folder))
app.use(express.static(folder))

app.listen(port)
