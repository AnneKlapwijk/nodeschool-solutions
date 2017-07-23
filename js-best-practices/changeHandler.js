// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

const coins = {
  p: 1,
  n: 5,
  d: 10,
  q: 25
}

module.exports = {
  getAmount: function(coinType) {
    if (!coins[coinType]) throw new Error(`Unrecognized coin ${coinType}`)
    return coins[coinType]
  }
}
