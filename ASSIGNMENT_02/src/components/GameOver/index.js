import './index.css'

const GameOver = ({score, resetGame}) => (
  <div className="game-over">
    <img
      src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      alt="trophy"
    />
    <h2>Final Score: {score}</h2>
    <button type="button" className="play-again-btn" onClick={resetGame}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
        alt="reset"
      />
      PLAY AGAIN
    </button>
  </div>
)

export default GameOver
