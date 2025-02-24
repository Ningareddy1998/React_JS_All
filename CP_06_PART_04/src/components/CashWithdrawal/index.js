import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <div className="sub-container-1">
            <p className="paragraph">S</p>
            <h1 className="heading-1">Sarah Williams</h1>
          </div>
          <div className="sub-container-2">
            <div className="container-1">
              <div>
                {' '}
                <p className="heading-2">Your Balance</p>
              </div>
              <div className="div">
                {' '}
                <p className="heading-3">{balance} </p>
                <p className="money">Rupees</p>
              </div>
            </div>
            <div className="container-2">
              <div>
                <p className="heading-4">Withdraw</p>
              </div>
              <div>
                <p className="heading-5">CHOOSE SUM (IN RUPEES)</p>
              </div>
            </div>
          </div>
          <ul className="button-container">
            {denominationsList.map(eachList => (
              <DenominationItem
                key={eachList.id}
                value={eachList.value}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
