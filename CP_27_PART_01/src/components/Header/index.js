import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const onLogout = () => {
    localStorage.removeItem('jwt_token')
    window.location.href = '/login'
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-desktop-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default Header
