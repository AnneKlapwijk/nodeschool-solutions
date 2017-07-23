
const balanceManager = require('./balanceManager')
const changeHandler = require('./changeHandler')
const productInventory = require('./productInventory')

module.exports = {

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType)
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
    var product = productInventory.getProduct(productId)
    balanceManager.decreaseBalance(product.price)
    return product
  }

}
