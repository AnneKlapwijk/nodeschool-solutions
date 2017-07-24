const fs = require('fs')
const path = require('path')

const dirName = process.argv[2]
const fileExtension = process.argv[3]

fs.readdir(dirName, (err, list) => {
  list.forEach(file => {
    if(path.extname(file) === `.${fileExtension}`)
      console.log(file)
  })
})
