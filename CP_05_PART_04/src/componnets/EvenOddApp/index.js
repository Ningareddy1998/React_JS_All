import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  numGenerator = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {count} = this.state
    const isEven = count % 2 === 0

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Count <span>{count}</span>
          </h1>
          <p className="paragraph-1">
            {isEven ? 'Count is Even' : 'Count is Odd'}
          </p>
          <button type="button" className="button" onClick={this.numGenerator}>
            Increment
          </button>
          <p className="paragraph-2">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
