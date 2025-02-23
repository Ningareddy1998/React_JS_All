import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  randomGenerator = () => {
    this.setState({
      count: Math.floor(Math.random() * 100),
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading-1">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.randomGenerator}
          >
            Generate
          </button>
          <p className="heading-2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
