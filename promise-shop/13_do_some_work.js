'use strict'

const qhttp = require('q-io/http')

const getUser = id => qhttp.read(`http://localhost:7001/${id}`)

const logJSON = json => console.log(JSON.parse(json))

qhttp.read('http://localhost:7000')
  .then(getUser)
  .then(logJSON)
  .catch(console.error)
