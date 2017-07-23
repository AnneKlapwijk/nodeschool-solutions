
const balanceManager = require('./balanceManager')
const changeHandler = require('./changeHandler')
const productInventory = require('./productInventory')

var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
]

module.exports = {

  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter
    switch(coinType){
    case 'p': return 1
    case 'n': return 5
    case 'd': return 10
    case 'q': return 25
    default: throw new Error('Unrecognized coin ' + coinType)
    }
  },

  getProducts: function() {
    return products
  },

  getProduct: function(productId) {
    var product = products.find(function(p) { return p.id === productId })
    return product
  },

  insertCoin: function(coinType){
    var value = this.getAmount(coinType)
    balanceManager.increaseBalance(value)
  },

  isValidAmount: function(amount){
    if(amount === null){
      return false
    } else {
      return true
    }
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance()
    balanceManager.decreaseBalance(currentBalance)
    return this.convertToChange(currentBalance)
  },

  vendProduct: function(productId){
    var product = this.getProduct(productId)
    balanceManager.decreaseBalance(product.price)
    return product
  }

}
