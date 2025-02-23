import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    subscribed: false,
  }

  toggleSubscribe = () => {
    this.setState(prevState => ({
      subscribed: !prevState.subscribed,
    }))
  }

  render() {
    const {subscribed} = this.state
    let buttonText

    if (subscribed) {
      buttonText = 'Subscribed'
    } else {
      buttonText = 'Subscribe'
    }

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <h2 className="heading-2">Thank you! Happy Learning</h2>
        <button type="button" className="button" onClick={this.toggleSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
