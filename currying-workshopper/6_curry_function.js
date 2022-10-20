/*
You need to write a function that curries that function, so it can be used as
follows:

    var curriedAbc = curryFunc(abc);
    curriedAbc(a)(b)(c); // Now we can call original function like this...
    curriedAbc(a,b)(c); //or this
    curriedAbc(a)(b,c); //or this
    curriedAbc(a,b,c); //or this

 */

const curryFunc = (anotherFunction) => {
  const expectedParams = anotherFunction.length

  const curried = (prevParams) => (...params) => {
    const nextCount = prevParams.length + params.length
    const nextParams = [...prevParams, ...params]

    if (nextCount === expectedParams) {
      return anotherFunction.apply(null, nextParams)
    }
    return curried(nextParams)
  }

  return curried([])
}

module.exports = curryFunc
