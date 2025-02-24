import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getFilteredDestinations = () => {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    return destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {searchInput} = this.state
    const filteredDestinations = this.getFilteredDestinations()
    return (
      <div className="destination-search-container">
        <h1>Destination Search</h1>
        <input
          type="search"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
          className="search-icon"
        />
        <ul className="destinations-list">
          {filteredDestinations.map(destination => (
            <DestinationItem key={destination.id} destination={destination} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
