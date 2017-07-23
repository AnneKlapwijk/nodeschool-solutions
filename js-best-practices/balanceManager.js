var balance = 0

module.exports = {
  canAfford: function(amount){
    if(!this.isValidAmount(amount)) {
      throw new Error('Invalid input')
    }
    return amount <= balance
  },

  decreaseBalance: function(amount){
    // This method decreases the balance of the vending machine. If the balance amount is not
    // enough to cover the purchase, the method throws an error.
    if(!this.canAfford(amount)){
      throw new Error('Insufficient balance')
    }
    balance -= amount
  },

  getBalance: function(){
    return balance
  },

  increaseBalance: function(amount){
    balance += amount
  },

  isValidAmount: function(amount){
    return typeof amount === 'number'
  },
}
