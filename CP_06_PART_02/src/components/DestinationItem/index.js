import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destination} = this.props
    const {name, imgUrl} = destination

    return (
      <li className="destination-item-container">
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="destination-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
