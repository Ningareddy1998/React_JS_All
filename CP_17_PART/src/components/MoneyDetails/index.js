// MoneyDetails/index.js
import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {totalBalance, totalIncome, totalExpenses} = this.props
    return (
      <div className="md-container">
        <div className="container-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="image"
          />
          <div className="sub-container">
            <p className="paragraph">Your Balance</p>
            <p className="heading" data-testid="balanceAmount">
              RS {totalBalance || 0}
            </p>
          </div>
        </div>
        <div className="container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="image"
          />
          <div className="sub-container">
            <p className="paragraph">Your Income</p>
            <p className="heading" data-testid="incomeAmount">
              RS {totalIncome || 0}
            </p>
          </div>
        </div>
        <div className="container-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="image"
          />
          <div className="sub-container">
            <p className="paragraph">Your Expenses</p>
            <p className="heading" data-testid="expensesAmount">
              RS {totalExpenses || 0}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
