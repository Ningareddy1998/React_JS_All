import {IoLocation, IoLink} from 'react-icons/io5'
import {IoIosStar, IoIosBriefcase} from 'react-icons/io'

import './index.css'

const JobDetailsCard = ({jobDetails}) => {
  const {
    company_logo_url: companyLogoUrl,
    employment_type: employmentType,
    job_description: jobDescription,
    location,
    package_per_annum: packagePerAnnum = 'Not specified',
    rating = 'No rating',
    title,
    company_website_url: companyWebsiteUrl,
    life_at_company: lifeAtCompany = {},
    skills = [],
  } = jobDetails

  return (
    <div className="job-details-container">
      <div className="job-header">
        <img
          src={companyLogoUrl}
          alt="job details company logo"
          className="company-logo"
        />
        <h1 className="job-title">{title}</h1>
        <p className="job-rating">
          <IoIosStar /> {rating}
        </p>
      </div>

      <div className="job-meta">
        <p className="job-location">
          <IoLocation /> {location}
        </p>
        <p className="job-type">
          <IoIosBriefcase /> {employmentType}
        </p>
        <p className="job-package">
          <strong>Package:</strong> {packagePerAnnum}
        </p>
      </div>
      <hr />
      <div className="md">
        <h1>Description</h1>
        {companyWebsiteUrl && (
          <a
            href={companyWebsiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="company-website-link"
          >
            Visit <IoLink />
          </a>
        )}
      </div>
      <p className="job-description">{jobDescription}</p>
      {skills.length > 0 && (
        <div className="skills-section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            {skills.map(skill => (
              <li key={skill.name} className="skill-item">
                <img
                  src={skill.image_url}
                  alt={skill.name}
                  className="skill-icon"
                />
                <p className="skill-name">{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {lifeAtCompany?.description && (
        <div className="life-at-company">
          <h2 className="section-title">Life at Company</h2>
          <div className="btm-1">
            <p className="life-description">{lifeAtCompany.description}</p>
            {lifeAtCompany?.image_url && (
              <img
                src={lifeAtCompany.image_url}
                alt="life at company"
                className="life-image"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default JobDetailsCard
