import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItems: () => {},
  deleteCartItem: () => {},
})

export default CartContext
