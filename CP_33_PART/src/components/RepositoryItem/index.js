import './index.css'

const DetailItem = ({iconUrl, altText, count, label}) => (
  <div className="details-container">
    <img src={iconUrl} alt={altText} className="details-image" />
    <p className="details-text">
      {count} {label}
    </p>
  </div>
)

const RepositoryItem = ({repositoryDetails}) => {
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl, // ✅ Ensure last comma is here to avoid linting errors
  } = repositoryDetails // ✅ Corrected formatting

  return (
    <li className="repository-item">
      <img
        src={avatarUrl}
        alt={`Repository Logo of ${name}`}
        className="repository-image"
      />
      <h3 className="repository-name">{name}</h3>
      <DetailItem
        iconUrl="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        altText="stars icon"
        count={starsCount}
        label="stars"
      />
      <DetailItem
        iconUrl="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        altText="forks icon"
        count={forksCount}
        label="forks"
      />
      <DetailItem
        iconUrl="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        altText="open issues icon"
        count={issuesCount}
        label="issues"
      />
    </li>
  )
}

export default RepositoryItem
