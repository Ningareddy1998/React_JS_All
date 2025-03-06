import './index.css'

const ThumbnailItem = ({image, onThumbnailClick}) => (
  <li className="thumbnail-item">
    <button
      type="button"
      className="thumbnail-btn"
      onClick={() => onThumbnailClick(image.imageUrl)}
    >
      <img src={image.thumbnailUrl} alt="thumbnail" className="thumbnail" />
    </button>
  </li>
)

export default ThumbnailItem
