import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {({showContent, showLeftNavbar, showRightNavbar}) => (
      <div className="body">
        {showLeftNavbar && (
          <ul className="left-navbar">
            <h5>Left Navbar Menu</h5>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        )}

        {showContent && (
          <div className="content">
            <h5>Content</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        )}

        {showRightNavbar && (
          <div className="right-navbar">
            <h5>Right Navbar</h5>
            <p className="ad-item">Ad 1</p>
            <p className="ad-item">Ad 2</p>
          </div>
        )}
      </div>
    )}
  </ConfigurationContext.Consumer>
)

export default Body
