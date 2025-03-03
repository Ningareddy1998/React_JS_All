import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
      minutes: 0,
      isRunning: false,
    }
  }

  onStartTimer = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.intervalId = setInterval(this.tick, 1000)
      this.setState({isRunning: true})
    }
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({seconds: 0, minutes: 0, isRunning: false})
  }

  tick = () => {
    this.setState(prevState => {
      const {seconds, minutes} = prevState
      const newSeconds = seconds + 1
      const newMinutes = newSeconds === 60 ? minutes + 1 : minutes
      return {
        seconds: newSeconds % 60,
        minutes: newMinutes,
      }
    })
  }

  render() {
    const {seconds, minutes, isRunning} = this.state
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <img
            className="image-1"
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
          />
          <span role="heading" aria-level="1" className="timer">
            {formattedMinutes}:{formattedSeconds}
          </span>
        </div>
        <div className="buttons-container">
          <button
            type="button"
            onClick={this.onStartTimer}
            className={`button-1 ${isRunning ? 'disabled' : ''}`}
            disabled={isRunning}
          >
            Start
          </button>
          <button type="button" onClick={this.onStopTimer} className="button-2">
            Stop
          </button>
          <button type="button" onClick={this.resetTimer} className="button-3">
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
