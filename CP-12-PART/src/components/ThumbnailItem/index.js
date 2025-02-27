import {Component} from 'react'
import './index.css'

class ThumbnailItem extends Component {
  onClickThumbnail = () => {
    const {image, updateEachId} = this.props
    const {id} = image
    updateEachId(id)
  }

  render() {
    const {image, isActive} = this.props
    const {id, thumbnailUrl, thumbnailAltText} = image
    const opacity = isActive ? 1 : 0.5

    return (
      <li className="thumbnail-item">
        <button
          type="button"
          className="thumbnail-button"
          onClick={this.onClickThumbnail}
        >
          <img
            key={id}
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className="thumbnail-image"
            style={{opacity}}
          />
        </button>
      </li>
    )
  }
}

export default ThumbnailItem
