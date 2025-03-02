import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    count1: 0,
    count2: 0,
    count3: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  coinToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        count1: prevState.count1 + 1,
        count3: prevState.count3 + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        count2: prevState.count2 + 1,
        count3: prevState.count3 + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {count1, count2, count3, imageUrl} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game </h1>
          <p className="paragraph-1">Heads (or) Tails </p>
          <img src={imageUrl} className="image" alt="toss result" />
          <div className="div">
            <button className="button" type="button" onClick={this.coinToss}>
              Toss Coin
            </button>
          </div>
          <div className="count-container">
            <p className="paragraph-2">Total: {count3}</p>
            <p className="paragraph-2">Heads: {count1}</p>
            <p className="paragraph-2">Tails: {count2}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
