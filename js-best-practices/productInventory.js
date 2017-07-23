var products = [
  {
    name: 'Skittles',
    price: 85,
    id: 'A1'
  }
]

module.exports = {
  getProducts: function() {
    return products
  },

  getProduct: function(productId) {
    return products.find(p => p.id === productId)
  }
}
