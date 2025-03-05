import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="game-name">Emoji Game</h1>
      </div>
      {score !== undefined && (
        <div className="score-container">
          <p className="score">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
