function askFoo () {
  return new Promise(resolve => resolve('foo'))
}

function run (generator) {
  let it = generator(go)

  function go(result) {
    if(result.done) return result.value

    return result.value
      .then(value => go(it.next(value)))
      .catch(err => go(it.throw(err)))
  }

  go(it.next())
}

run(function* () {
  try {
    let foo = yield askFoo()
    console.log(foo)
  } catch (e) {
    console.error(e.message)
  }
})
