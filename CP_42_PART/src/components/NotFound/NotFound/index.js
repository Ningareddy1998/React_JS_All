import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgClass = isDarkTheme ? 'dark-bg' : 'light-bg'
      const textClass = isDarkTheme ? 'dark-text' : 'light-text'

      return (
        <>
          <Navbar />
          <div className={bgClass}>
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image"
              />
              <h1 className={`not-found-heading ${textClass}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-description ${textClass}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
