import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="header-logo"
      />
    </Link>

    <Popup
      modal
      trigger={
        <button type="button" className="hamburger-button">
          <GiHamburgerMenu size={25} />
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          <button type="button" className="close-button" onClick={close}>
            <IoMdClose size={25} />
          </button>
          <ul className="menu-list">
            <li className="list">
              <Link to="/" onClick={close}>
                <AiFillHome size={20} />
                <span>Home</span>
              </Link>
            </li>
            <li className="list">
              <Link to="/about" onClick={close}>
                <BsInfoCircleFill size={20} />
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
