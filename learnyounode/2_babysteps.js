console.log(process.argv
  .slice(2)
  .reduce((acc, curr) => Number(acc) + Number(curr))
)
