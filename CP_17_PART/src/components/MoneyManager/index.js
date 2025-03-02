// MoneyManager/index.js
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {optionId: 'INCOME', displayText: 'Income'},
  {optionId: 'EXPENSES', displayText: 'Expenses'},
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    transactionType: transactionTypeOptions[0].optionId,
    transactionList: [],
    totalIncome: 0,
    totalExpenses: 0,
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, transactionType} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      transactionType,
      deleteUrl:
        'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png',
    }

    this.setState(prevState => {
      const updatedTransactionList = [
        ...prevState.transactionList,
        newTransaction,
      ]

      let updatedTotalIncome = prevState.totalIncome
      let updatedTotalExpenses = prevState.totalExpenses

      if (transactionType === 'INCOME') {
        updatedTotalIncome += newTransaction.amount
      } else {
        updatedTotalExpenses += newTransaction.amount
      }

      return {
        transactionList: updatedTransactionList,
        title: '',
        amount: '',
        transactionType: transactionTypeOptions[0].optionId,
        totalIncome: updatedTotalIncome,
        totalExpenses: updatedTotalExpenses,
      }
    })
  }

  onChangeTitle = event => this.setState({title: event.target.value})

  onChangeAmount = event => this.setState({amount: event.target.value})

  onChangeTransactionType = event =>
    this.setState({transactionType: event.target.value})

  onDeleteTransaction = id => {
    this.setState(prevState => {
      const deletedTransaction = prevState.transactionList.find(
        transaction => transaction.id === id,
      )

      let updatedTotalIncome = prevState.totalIncome
      let updatedTotalExpenses = prevState.totalExpenses

      if (deletedTransaction) {
        if (deletedTransaction.transactionType === 'INCOME') {
          updatedTotalIncome -= deletedTransaction.amount
        } else {
          updatedTotalExpenses -= deletedTransaction.amount
        }
      }

      const updatedTransactionList = prevState.transactionList.filter(
        transaction => transaction.id !== id,
      )

      return {
        transactionList: updatedTransactionList,
        totalIncome: updatedTotalIncome,
        totalExpenses: updatedTotalExpenses,
      }
    })
  }

  render() {
    const {
      transactionList,
      title,
      amount,
      transactionType,
      totalIncome,
      totalExpenses,
    } = this.state
    const totalBalance = totalIncome - totalExpenses

    return (
      <div className="bg-container">
        <div className="top-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="paragraph">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          totalBalance={totalBalance}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
        <div>
          <form onSubmit={this.onAddTransaction}>
            <h1>Add Transaction</h1>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={title}
              onChange={this.onChangeTitle}
            />
            <br />
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              placeholder="Amount"
              value={amount}
              onChange={this.onChangeAmount}
            />
            <br />
            <label htmlFor="transactionType">Type</label>
            <select
              id="transactionType"
              value={transactionType}
              onChange={this.onChangeTransactionType}
            >
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>
            <br />
            <button type="submit">Add Transaction</button>
          </form>
        </div>
        <div>
          <div>
            <h1>History</h1>
            <p>Title</p>
            <p>Type</p>
            <p>Amount</p>
          </div>
          <ul>
            {transactionList.map(eachList => (
              <TransactionItem
                key={eachList.id}
                transList={eachList}
                onDeleteTransaction={this.onDeleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default MoneyManager
