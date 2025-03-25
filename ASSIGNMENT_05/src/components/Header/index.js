import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="header-container">
      <Link to="/" className="header-logo-link">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="header-logo"
        />
      </Link>
      <ul className="header-links">
        <li className="header-list-item">
          <Link to="/" className="header-link">
            Home
          </Link>
        </li>
        <li className="header-list-item">
          <Link to="/jobs" className="header-link">
            Jobs
          </Link>
        </li>
        <li className="header-list-item">
          <Link to="/profile" className="header-link">
            Profile
          </Link>
        </li>
      </ul>
      <button
        type="button"
        className="header-logout-button"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </nav>
  )
}

export default withRouter(Header)
