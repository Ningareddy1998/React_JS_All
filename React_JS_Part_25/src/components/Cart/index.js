import CartContext from '../../context/CartContext'
import Header from '../Header'
import Order from '../Order'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const lengthList = cartList.length === 0

      return (
        <>
          <Header />
          {lengthList ? (
            <EmptyCartView />
          ) : (
            <div className="cart-main">
              <div className="cart-container">
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <CartListView />
                </div>
              </div>
              <div className="order">
                <Order />
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
