import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => {
      if (prevState.count < 200) {
        return {count: prevState.count + 10}
      }
      return {count: prevState.count}
    })
  }

  onApplybrake = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return {count: prevState.count - 10}
      }
      return {count: prevState.count}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2 className="speed-display">Speed is {count}mph</h2>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="button accelerate"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="button brake"
            onClick={this.onApplybrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
