const filter = require('./6_make_it_modular_filter')

const folder = process.argv[2]
const extension = process.argv[3]

filter(folder, extension, (err, list) => {
  if (err)
    return console.error(err)

  list.forEach(file => {
    console.log(file)
  })
})
