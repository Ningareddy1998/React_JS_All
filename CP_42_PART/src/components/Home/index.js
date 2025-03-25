import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeClass = isDarkTheme ? 'dark-bg ' : 'light-bg'

      return (
        <>
          <Navbar />
          <div className={`home-container ${homeClass}`}>
            <img src={homeImage} alt="home" className="page-image" />
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
