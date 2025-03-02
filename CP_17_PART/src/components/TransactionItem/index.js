// TransactionItem/index.js
import {Component} from 'react'
import './index.css'

class TransactionItem extends Component {
  onDelete = () => {
    const {transList, onDeleteTransaction} = this.props
    const {id} = transList
    onDeleteTransaction(id)
  }

  render() {
    const {transList} = this.props
    const {title, amount, transactionType, deleteUrl} = transList
    const typeText = transactionType === 'INCOME' ? 'Income' : 'Expenses'

    return (
      <li className="transaction-item">
        <p className="transaction-text">{title}</p>
        <p className="transaction-text">Rs {amount}</p>
        <p className="transaction-text">{typeText}</p>
        <button
          type="button"
          className="delete-button"
          onClick={this.onDelete}
          data-testid="delete"
        >
          <img src={deleteUrl} alt="delete" className="delete-icon" />
        </button>
      </li>
    )
  }
}

export default TransactionItem
