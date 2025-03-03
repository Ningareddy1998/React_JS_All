import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isHide: false}

  onChangeHideOrShow = () => {
    this.setState(prevState => {
      const {isHide} = prevState
      return {isHide: !isHide}
    })
  }

  render() {
    const {isHide} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onChangeHideOrShow}
        >
          {isHide ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isHide && <Clock />}
      </div>
    )
  }
}

export default App
