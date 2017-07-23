var balance = 0

module.exports = {
  canAfford: function(amount){
    if(!this.isValidAmount(amount)) {
      throw new Error('Invalid input')
    }
    return amount <= balance
  },

  decreaseBalance: function(amount){
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
