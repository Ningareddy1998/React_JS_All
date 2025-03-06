import './index.css'

const Header = ({score, timeLeft}) => (
  <header className="header">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      alt="website logo"
      className="logo"
    />
    <div className="score-timer">
      <p className="paragraph">Score: {score}</p>
      <div className="timer-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
        />
        <p className="paragraph">{timeLeft} sec</p>
      </div>
    </div>
  </header>
)

export default Header
