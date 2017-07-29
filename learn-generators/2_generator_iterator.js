function *factorial(n) {
  let result = 1
  for (let i = 1; i<= n; i++) {
    yield result *= i
  }
}

for (let n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120
