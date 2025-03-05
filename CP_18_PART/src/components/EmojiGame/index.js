import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojisList: [],
    isGameInProgress: true,
  }

  resetGame = () => {
    this.setState({
      score: 0,
      clickedEmojisList: [],
      isGameInProgress: true,
    })
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    const newTopScore = Math.max(currentScore, topScore)

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (clickedEmojisLength === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }

      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
        score: prevState.score + 1,
      }))
    }
  }

  renderGameView = () => {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)

    return (
      <ul className="emoji-list">
        {shuffledEmojisList.map(emoji => (
          <EmojiCard
            key={emoji.id}
            emojiDetails={emoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLoseCard = () => {
    const {score} = this.state
    return <WinOrLoseCard score={score} playAgain={this.resetGame} />
  }

  render() {
    const {isGameInProgress, score, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          score={isGameInProgress ? score : undefined}
          topScore={topScore}
        />
        <div className="game-container">
          {isGameInProgress
            ? this.renderGameView()
            : this.renderWinOrLoseCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
