import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    count2: 25 * 60,
    isPause: true,
    initialMinutes: 25,
    timeElapsedInSeconds: 0,
  }

  componentDidMount() {
    this.timerId = null
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {count2, isPause} = this.state
    if (!isPause && count2 > 0) {
      this.setState(prevState => ({
        count2: prevState.count2 - 1,
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }))
    } else if (!isPause && count2 === 0) {
      clearInterval(this.timerId)
      this.setState({isPause: true})
    }
  }

  onChangePausePlay = () => {
    this.setState(
      prevState => ({
        isPause: !prevState.isPause,
      }),
      () => {
        const {isPause} = this.state
        if (isPause) {
          clearInterval(this.timerId)
        } else {
          this.timerId = setInterval(this.tick, 1000)
        }
      },
    )
  }

  onPlus = () => {
    this.setState(prevState => ({
      initialMinutes: prevState.initialMinutes + 1,
      count2: (prevState.initialMinutes + 1) * 60,
    }))
  }

  onMinus = () => {
    const {initialMinutes} = this.state
    if (initialMinutes > 1) {
      this.setState(prevState => ({
        initialMinutes: prevState.initialMinutes - 1,
        count2: (prevState.initialMinutes - 1) * 60,
      }))
    }
  }

  onReset = () => {
    const {initialMinutes} = this.state
    clearInterval(this.timerId)
    this.setState({
      count2: initialMinutes * 60,
      isPause: true,
      timeElapsedInSeconds: 0,
    })
  }

  render() {
    const {count2, isPause, initialMinutes} = this.state
    const minutes = Math.floor(count2 / 60)
    const seconds = count2 % 60
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds
    const isTimerRunning = !isPause && count2 > 0
    const disableButtons = isTimerRunning

    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="container">
          <div className="left-container">
            <div className="sub-container">
              <h1 className="heading-1">{`${displayMinutes}:${displaySeconds}`}</h1>
              <p className="paragraph-1">
                {isTimerRunning ? 'Running' : 'Paused'}
              </p>
            </div>
          </div>
          <div className="right-container">
            <button
              type="button"
              onClick={this.onChangePausePlay}
              className="button"
            >
              <img
                src={
                  isPause
                    ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                }
                className="image"
                alt={isPause ? 'play icon' : 'pause icon'}
              />{' '}
              {isPause ? 'Start' : 'Pause'}
            </button>
            <button type="button" className="button" onClick={this.onReset}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon" // Corrected alt text
                className="image"
              />
              Reset
            </button>
            <p>Set Timer Limit</p> {/* Corrected text content */}
            <div>
              <button
                type="button"
                onClick={this.onPlus}
                disabled={disableButtons}
              >
                +
              </button>
              <div>
                <p>{initialMinutes}</p>
              </div>
              <button
                type="button"
                onClick={this.onMinus}
                disabled={disableButtons}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
