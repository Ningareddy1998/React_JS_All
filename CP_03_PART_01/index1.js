import './index1.css'

const BannerCard = props => {
  const {bannerList} = props
  if (!bannerList) {
    return null
  }
  const {id, headerText, description, className} = bannerList
  console.log(`${id}`)
  return (
    <li className={`banner-card ${className}`}>
      <div className="containet-2">
        <h1 className="banner-header">{headerText}</h1>
        <p className="banner-description">{description}</p>
        <button type="button" className="show-more-button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
