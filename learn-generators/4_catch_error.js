function *upper (items) {
  for (let item of items) {
    try {
      yield item.toUpperCase()
    }
    catch (e) {
      console.error(`"${item}" is not a string`)
      yield null
    }
  }
}

var bad_items = ['a', 'B', 1, 'c']

for (var item of upper(bad_items)) {
  console.log(item)
}
// A, B, null, C
