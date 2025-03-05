import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const isWon = score === 12
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'
  const finalScore = isWon ? '12/12' : `${score}/12`

  return (
    <div className="result-card">
      <div className="text-container">
        <h1 className="result-text">{resultText}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="final-score">{finalScore}</p>
        <button type="button" className="play-again-button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img src={imageUrl} alt="win or lose" className="result-image" />
    </div>
  )
}

export default WinOrLoseCard
