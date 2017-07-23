const balanceManager = require('./balanceManager')
const changeHandler = require('./changeHandler')
const productInventory = require('./productInventory')

module.exports = {
  getProducts: function() {
    return productInventory.getProducts()
  },

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType)
    balanceManager.increaseBalance(value)
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance()
    balanceManager.decreaseBalance(currentBalance)
    return changeHandler.convertToChange(currentBalance)
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId)
    balanceManager.decreaseBalance(product.price)
    return product
  }

}
