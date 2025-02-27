import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isThankYouScreenDisplayed: false}

  displayThankYouScreen = () => {
    this.setState({isThankYouScreenDisplayed: true})
  }

  render() {
    const {isThankYouScreenDisplayed} = this.state
    const {each, loveEmojiUrl} = this.props

    return (
      <div className="feedback-container">
        {isThankYouScreenDisplayed ? (
          <div className="thank-you-container">
            <img src={loveEmojiUrl} alt="Love Emoji" />
            <p>Thank You!</p>
          </div>
        ) : (
          <div className="question-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emoji-list">
              {each.map(emoji => (
                <li key={emoji.id} className="emoji-item">
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    onClick={this.displayThankYouScreen}
                  />
                  <p>{emoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
