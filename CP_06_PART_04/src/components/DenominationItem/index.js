import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  onClickDenomination = () => {
    const {value, updateBalance} = this.props
    updateBalance(value)
  }

  render() {
    const {value} = this.props
    return (
      <li className="list">
        <button
          type="button"
          className="button"
          onClick={this.onClickDenomination}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
