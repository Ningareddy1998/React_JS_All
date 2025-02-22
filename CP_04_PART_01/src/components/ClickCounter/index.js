import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevstate => {
      console.log(`previous count : ${prevstate.count}`)
      return {count: prevstate.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked
          <span className="span"> {count} times</span>
        </h1>

        <p className="paragraph">Click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
