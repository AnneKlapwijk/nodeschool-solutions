function* range(from, to) {
  for (let i = from; i <= to; i++) {
    yield i
  }
}

for (let r of range(5, 10)) {
  console.log(r)
}
