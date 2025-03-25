import {Link} from 'react-router-dom'
import './index.css'

const JobItem = ({job}) => {
  const {
    id,
    companyLogoUrl,
    title,
    rating,
    location,
    employmentType,
    packagePerAnnum,
    jobDescription,
  } = job

  return (
    <li className="job-item">
      <Link to={`/jobs/${id}`} className="job-item-link">
        <img
          src={companyLogoUrl}
          alt="company logo"
          className="job-item-logo"
        />
        <div className="job-item-details">
          <h2 className="job-item-title">{title}</h2>
          <p className="job-item-rating">⭐ {rating}</p>
          <p className="job-item-location">📍 {location}</p>
          <p className="job-item-employment">💼 {employmentType}</p>
          <p className="job-item-package">💰 {packagePerAnnum}</p>
          <p className="job-item-description">{jobDescription}</p>
        </div>
      </Link>
    </li>
  )
}

export default JobItem
