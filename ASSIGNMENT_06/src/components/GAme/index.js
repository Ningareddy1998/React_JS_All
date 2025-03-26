import {Component} from 'react'
import ListContext from '../../context/ListContext'
import './index.css'

class Game extends Component {
  renderGameView = () => (
    <ListContext.Consumer>
      {value => {
        const {onButtonClicked, score} = value

        return (
          <div className="game-container">
            <h1 className="game-heading">Rock Paper Scissors</h1>
            <div className="score-container">
              <p>Score</p>
              <p className="score">{score}</p>
            </div>
            <div className="buttons-container">
              <button
                type="button"
                data-testid="rockButton"
                onClick={() => onButtonClicked('ROCK')}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
                  alt="ROCK"
                />
              </button>
              <button
                type="button"
                data-testid="paperButton"
                onClick={() => onButtonClicked('PAPER')}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
                  alt="PAPER"
                />
              </button>
              <button
                type="button"
                data-testid="scissorsButton"
                onClick={() => onButtonClicked('SCISSORS')}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
                  alt="SCISSORS"
                />
              </button>
            </div>
          </div>
        )
      }}
    </ListContext.Consumer>
  )

  renderResultView = () => (
    <ListContext.Consumer>
      {value => {
        const {userChoice, opponentChoice, resetGame, resultText, score} = value

        return (
          <div className="result-container">
            <h1 className="game-heading">Rock Paper Scissors</h1>
            <div className="score-container">
              <p>Score</p>
              <p className="score">{score}</p>
            </div>
            <div className="result-images">
              <div>
                <p className="you">You</p>
                <img src={userChoice.imageUrl} alt="your choice" />
              </div>
              <div>
                <p className="opp">Opponent</p>
                <img src={opponentChoice.imageUrl} alt="opponent choice" />
              </div>
            </div>
            <p className="result-text">{resultText}</p>
            <button
              type="button"
              onClick={resetGame}
              data-testid="playAgainButton"
            >
              PLAY AGAIN
            </button>
          </div>
        )
      }}
    </ListContext.Consumer>
  )

  render() {
    return (
      <ListContext.Consumer>
        {value =>
          value.isGameResultView
            ? this.renderResultView()
            : this.renderGameView()
        }
      </ListContext.Consumer>
    )
  }
}

export default Game
