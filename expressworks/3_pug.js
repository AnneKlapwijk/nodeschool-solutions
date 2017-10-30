const express = require('express')

const app = express()
const port = process.argv[2]
const index = process.argv[3]

app.set('view engine', 'pug')
app.set('views', index)

app.get('/home', (req, res) => {
  res.render('index', { date: new Date().toDateString() })
})

app.listen(port)
