import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isHide1: false, isHide2: false}

  toggleHide1 = () => {
    this.setState(prevState => ({isHide1: !prevState.isHide1}))
  }

  toggleHide2 = () => {
    this.setState(prevState => ({isHide2: !prevState.isHide2}))
  }

  render() {
    const {isHide1, isHide2} = this.state
    const containerClassName1 = isHide1 ? (
      <div className="first-container">
        <p className="heading-2">Joe</p>
      </div>
    ) : null
    const containerClassName2 = isHide2 ? (
      <div className="last-container">
        <p className="heading-2">Jonas</p>
      </div>
    ) : null

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="top-container">
          <button className="button" type="button" onClick={this.toggleHide1}>
            Show/Hide Firstname
          </button>
          <button className="button" type="button" onClick={this.toggleHide2}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="bottom-container">
          {containerClassName1}
          {containerClassName2}
        </div>
      </div>
    )
  }
}

export default ShowHide
