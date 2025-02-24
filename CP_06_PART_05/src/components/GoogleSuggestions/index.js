import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSelectSuggestion = selectedSuggestion => {
    this.setState({searchInput: selectedSuggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredSuggestions = suggestionsList.filter(suggestionObj =>
      suggestionObj.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="container">
          <div className="container-1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              className="image-1"
              alt="google logo"
            />
          </div>
          <div className="container-2">
            <div className="sub-container-1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="image-2"
                alt="search icon"
              />
              <input
                type="search"
                className="search"
                placeholder="Search Google"
                onChange={this.onChangeInput}
                value={searchInput}
              />
            </div>

            <ul className="suggestions-list">
              {filteredSuggestions.map(({id, suggestion}) => (
                <SuggestionItem
                  key={id}
                  suggestion={suggestion}
                  onSelectSuggestion={this.onSelectSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
