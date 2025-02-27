import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  updateId = event => {
    this.setState({activeId: event.target.value})
  }

  getFilteredData = () => {
    const {activeId} = this.state
    const filteredData = countryAndCapitalsList.find(
      each => each.id === activeId,
    )
    return filteredData ? filteredData.country : ''
  }

  render() {
    const {activeId} = this.state
    const country = this.getFilteredData()

    return (
      <div className="capitals-container">
        <div className="content-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              value={activeId}
              onChange={this.updateId}
              className="select-input"
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <span className="question">is capital of which country?</span>
          </div>
          <h1 className="country">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
