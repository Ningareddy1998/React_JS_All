import CartContext from '../../context/CartContext'
import './index.css'

const Order = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )

      return (
        <div className="order-summary">
          <p>Order Total</p>
          <h1>Rs {totalPrice}/-</h1>
          <p>{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Check Out
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Order
