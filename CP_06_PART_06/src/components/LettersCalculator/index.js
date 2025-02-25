import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', count: 0}

  onChangeSearch = event => {
    this.setState({
      searchInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {searchInput, count} = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="inputSearch">Enter the phrase</label>
          <input
            id="inputSearch"
            type="text"
            onChange={this.onChangeSearch}
            value={searchInput}
            className="input"
            placeholder="Enter the phrase"
            aria-label="Enter the phrase"
          />
          <p className="button">No.of letters: {count}</p>{' '}
          {/* Ensure the text matches exactly */}
        </div>

        <div className="bottom-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
