import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    productDetails: null,
    similarProducts: [],
    quantity: 1,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    const {match, history} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')

    if (!jwtToken) {
      history.replace('/login')
      return
    }

    const apiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    this.setState({apiStatus: apiStatusConstants.inProgress})

    try {
      const response = await fetch(apiUrl, options)
      if (response.ok) {
        const data = await response.json()
        const formattedData = {
          id: data.id,
          imageUrl: data.image_url,
          title: data.title,
          price: data.price,
          description: data.description,
          brand: data.brand,
          totalReviews: data.total_reviews,
          rating: data.rating,
          availability: data.availability,
          similarProducts: data.similar_products.map(product => ({
            id: product.id,
            imageUrl: product.image_url,
            title: product.title,
            style: product.style,
            price: product.price,
            description: product.description,
            brand: product.brand,
            totalReviews: product.total_reviews,
            rating: product.rating,
            availability: product.availability,
          })),
        }

        this.setState({
          productDetails: formattedData,
          similarProducts: formattedData.similarProducts,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onIncreaseQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  onDecreaseQuantity = () => {
    this.setState(prevState => ({
      quantity: prevState.quantity > 1 ? prevState.quantity - 1 : 1,
    }))
  }

  renderProductDetails = () => {
    const {productDetails, quantity, similarProducts} = this.state
    const {
      imageUrl,
      title,
      price,
      description,
      brand,
      totalReviews,
      rating,
      availability,
    } = productDetails

    return (
      <>
        <Header />
        <div className="product-details-container">
          <div className="top-container">
            <div>
              <img src={imageUrl} alt={title} className="product-image" />
            </div>
            <div className="details-content">
              <h1 className="title">{title}</h1>
              <p className="price">Rs {price}/-</p>
              <p className="rating">Rating: {rating} ⭐</p>
              <p className="description">{description}</p>
              <p className="brand">Brand: {brand}</p>
              <p className="availability">Availability: {availability}</p>
              <p className="reviews">{totalReviews} Reviews</p>
              <div className="quantity-controls">
                <button
                  type="button"
                  data-testid="minus"
                  onClick={this.onDecreaseQuantity}
                  className="quantity-btn"
                >
                  <BsDashSquare />
                </button>
                <p className="quantity">{quantity}</p>
                <button
                  type="button"
                  data-testid="plus"
                  onClick={this.onIncreaseQuantity}
                  className="quantity-btn"
                >
                  <BsPlusSquare />
                </button>
              </div>
              <button type="button" className="add-to-cart-btn">
                Add to cart
              </button>
            </div>
          </div>
          <div className="similar-products-section">
            <h2 className="similar-heading">Similar Products</h2>
            <ul className="similar-products-list">
              {similarProducts.map(product => (
                <SimilarProductItem key={product.id} productData={product} />
              ))}
            </ul>
          </div>
        </div>
      </>
    )
  }

  renderFailure = () => {
    const {history} = this.props
    return (
      <div className="error-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          alt="error view"
          className="error-image"
        />
        <h1 className="error-heading">Product Not Found</h1>
        <p className="error-description">
          We re sorry the product you re looking for is not available or doesnt
          exist.
        </p>
        <button
          type="button"
          className="return-button"
          onClick={() => history.push('/products')}
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductDetails()
      case apiStatusConstants.failure:
        return this.renderFailure()
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      default:
        return null
    }
  }
}

export default withRouter(ProductItemDetails)
