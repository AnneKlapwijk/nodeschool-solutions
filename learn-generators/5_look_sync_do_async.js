const fs = require('fs')

function run (generator) {
  let it = generator(go)
  console.log(it)

  function go (err, result) {
    console.log(err, result)
    if (err) return it.throw(err)
    it.next(result)
  }

  go()
}

run(function* (done) {
  let firstFile = null
  try {
    let dirFiles = yield fs.readdir('NoNoNoNo', done) // No such dir
    firstFile = dirFiles[0]
  } catch (e) {
    console.error(e.message)
  }

  console.log(firstFile)
})
