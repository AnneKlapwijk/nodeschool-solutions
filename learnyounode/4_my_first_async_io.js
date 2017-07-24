const fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
  if (err) throw err
  let fileContents = data.toString()
  console.log(fileContents.split('\n').length - 1)
})
