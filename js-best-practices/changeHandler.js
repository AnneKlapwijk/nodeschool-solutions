// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

const coins = {
  q: 25,
  d: 10,
  n: 5,
  p: 1
}

module.exports = {
  getAmount: function(coinType) {
    if (!coins[coinType]) throw new Error(`Unrecognized coin ${coinType}`)
    return coins[coinType]
  },

  convertToChange: function(balance){
    let change = []

    for (let name in coins) {
      let value = coins[name]

      while (value <= balance) {
        balance -= value
        change.push(name)
      }
    }
    return change
  }
}
