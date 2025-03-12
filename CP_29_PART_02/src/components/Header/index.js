// src/components/Header/index.js
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
  const jwtToken = Cookies.get('jwt_token')

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {!jwtToken && <Link to="/login">Login</Link>}
    </nav>
  )
}
export default Header
