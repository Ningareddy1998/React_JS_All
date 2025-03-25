import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeIconUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav
          className={`navbar-container ${
            isDarkTheme ? 'navbar-container-dark' : 'navbar-container-light'
          }`}
        >
          <img src={logoUrl} alt="website logo" className="website-logo" />

          <ul className="mid">
            <li className="nav-link">
              <Link to="/" className="nav-link-text">
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link to="/about" className="nav-link-text">
                About
              </Link>
            </li>
          </ul>

          <button
            type="button"
            data-testid="theme"
            className="theme-button"
            onClick={toggleTheme}
          >
            <img src={themeIconUrl} alt="theme" className="theme-icon" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
