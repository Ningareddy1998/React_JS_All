import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  onClickUpdate = () => {
    const {suggestion, onSelectSuggestion} = this.props
    onSelectSuggestion(suggestion)
  }

  render() {
    const {suggestion} = this.props
    return (
      <li className="suggestion-item">
        <p className="suggestion-text">{suggestion}</p>
        <button type="button" className="button" onClick={this.onClickUpdate}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            className="image-3"
            alt="arrow"
          />
        </button>
      </li>
    )
  }
}

export default SuggestionItem
