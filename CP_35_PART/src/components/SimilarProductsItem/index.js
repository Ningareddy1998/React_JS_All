import {Link} from 'react-router-dom'
import './index.css'

const SimilarProductItem = ({productData}) => {
  const {id, imageUrl, title, price, rating} = productData

  return (
    <li className="similar-product-item">
      <Link to={`/products/${id}`}>
        <img
          src={imageUrl}
          alt={`similar product ${title}`}
          className="similar-product-image"
        />
        <h2 className="similar-product-title">{title}</h2>
        <p className="similar-product-price">Rs {price}/-</p>
        <p className="similar-product-rating">Rating: {rating} ⭐</p>
      </Link>
    </li>
  )
}

export default SimilarProductItem
