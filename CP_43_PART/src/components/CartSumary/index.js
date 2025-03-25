import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      // Calculate total price and quantity
      const totalQuantity = cartList.reduce(
        (sum, item) => sum + item.quantity,
        0,
      )
      const totalPrice = cartList.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      )

      return (
        <div className="cart-summary">
          <h1 className="order-total">
            Order Total: <span className="currency">Rs {totalPrice}/-</span>
          </h1>
          <p className="items-count">{totalQuantity} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
