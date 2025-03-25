import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import JobItem from '../JobItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isLoading: 'IS_LOADING',
}

class Jobs extends Component {
  state = {
    name: '',
    jobsList: [],
    profileImageUrl: '',
    shortBio: '',
    profileApiStatus: apiStatusConstants.initial,
    jobsApiStatus: apiStatusConstants.initial,
    employmentTypeFilters: [],
    salaryRangeFilter: '',
    searchQuery: '',
  }

  componentDidMount() {
    this.getProfileDetails()
    this.getJobsList()
  }

  getProfileDetails = async () => {
    this.setState({profileApiStatus: apiStatusConstants.isLoading})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const {
          name,
          profile_image_url: profileImageUrl,
          short_bio: shortBio,
        } = data.profile_details

        this.setState({
          name,
          profileImageUrl,
          shortBio,
          profileApiStatus: apiStatusConstants.success,
        })
      } else {
        throw new Error('Failed to fetch profile details')
      }
    } catch (error) {
      console.error('Error:', error.message)
      this.setState({profileApiStatus: apiStatusConstants.failure})
    }
  }

  getJobsList = async () => {
    this.setState({jobsApiStatus: apiStatusConstants.isLoading})
    const jwtToken = Cookies.get('jwt_token')
    const {employmentTypeFilters, salaryRangeFilter, searchQuery} = this.state

    let url = `https://apis.ccbp.in/jobs?search=${searchQuery}`
    if (employmentTypeFilters.length > 0) {
      url += `&employment_type=${employmentTypeFilters.join(',')}`
    }
    if (salaryRangeFilter) {
      url += `&minimum_package=${salaryRangeFilter}`
    }

    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }

    try {
      const response = await fetch(url, options)
      if (response.ok) {
        const data = await response.json()
        const formattedJobsList = data.jobs.map(job => ({
          id: job.id,
          companyLogoUrl: job.company_logo_url,
          title: job.title,
          rating: job.rating,
          location: job.location,
          employmentType: job.employment_type,
          packagePerAnnum: job.package_per_annum,
          jobDescription: job.job_description,
        }))

        this.setState({
          jobsList: formattedJobsList,
          jobsApiStatus: apiStatusConstants.success,
        })
      } else {
        throw new Error('Failed to fetch jobs list')
      }
    } catch (error) {
      console.error('Error:', error.message)
      this.setState({jobsApiStatus: apiStatusConstants.failure})
    }
  }

  renderLoading = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderProfileDetails = () => {
    const {name, profileImageUrl, shortBio} = this.state
    return (
      <div className="profile-container">
        {profileImageUrl && <img src={profileImageUrl} alt="profile" />}
        <p className="profile-name">{name}</p>
        <p className="profile-bio">{shortBio}</p>
      </div>
    )
  }

  renderProfileFailure = () => (
    <div className="failure-profile">
      <button
        type="button"
        className="retry-button"
        onClick={this.getProfileDetails}
      >
        Retry
      </button>
    </div>
  )

  renderJobsList = () => {
    const {jobsList} = this.state

    return (
      <div className="jobs-list">
        {jobsList.length > 0 ? (
          jobsList.map(job => <JobItem job={job} key={job.id} />)
        ) : (
          <div className="no-jobs-container">
            <img
              className="no-jobs-image"
              src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
              alt="no jobs"
            />
            <h1 className="no-jobs-heading">No Jobs Found</h1>
            <p className="no-jobs-paragraph">
              We could not find any jobs. Try other filters
            </p>
          </div>
        )}
      </div>
    )
  }

  renderJobsFailure = () => (
    <div className="error-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="failure view"
      />
      <br />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button type="button" className="retry-button" onClick={this.getJobsList}>
        Retry
      </button>
    </div>
  )

  renderProfileSection = () => {
    const {profileApiStatus} = this.state

    switch (profileApiStatus) {
      case apiStatusConstants.success:
        return this.renderProfileDetails()
      case apiStatusConstants.failure:
        return this.renderProfileFailure()
      case apiStatusConstants.isLoading:
        return this.renderLoading()
      default:
        return null
    }
  }

  renderJobsSection = () => {
    const {jobsApiStatus} = this.state

    switch (jobsApiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsList()
      case apiStatusConstants.failure:
        return this.renderJobsFailure()
      case apiStatusConstants.isLoading:
        return this.renderLoading()
      default:
        return null
    }
  }

  onChangeEmploymentType = event => {
    const {employmentTypeFilters} = this.state
    const {checked, id} = event.target

    if (checked) {
      this.setState(
        {employmentTypeFilters: [...employmentTypeFilters, id]},
        this.getJobsList,
      )
    } else {
      this.setState(
        {
          employmentTypeFilters: employmentTypeFilters.filter(
            type => type !== id,
          ),
        },
        this.getJobsList,
      )
    }
  }

  onChangeSalaryRange = event => {
    this.setState({salaryRangeFilter: event.target.id}, this.getJobsList)
  }

  onChangeSearchQuery = event => {
    this.setState({searchQuery: event.target.value})
  }

  onSearch = () => {
    this.getJobsList()
  }

  render() {
    const {employmentTypesList, salaryRangesList} = this.props
    const {searchQuery} = this.state

    return (
      <>
        <Header />
        <div className="jobs-container">
          <div className="left">
            <div>{this.renderProfileSection()}</div>
            <div className="filters-container">
              <h1>Type of Employment</h1>
              {employmentTypesList.map(eachEmployment => (
                <div key={eachEmployment.employmentTypeId}>
                  <input
                    className="checkbox-input"
                    type="checkbox"
                    id={eachEmployment.employmentTypeId}
                    onChange={this.onChangeEmploymentType}
                  />
                  <label htmlFor={eachEmployment.employmentTypeId}>
                    {eachEmployment.label}
                  </label>
                </div>
              ))}
            </div>
            <div className="salary-container">
              <h1>Salary Range</h1>
              {salaryRangesList.map(eachSalaryRange => (
                <div key={eachSalaryRange.salaryRangeId}>
                  <input
                    className="radio-input"
                    type="radio"
                    id={eachSalaryRange.salaryRangeId}
                    name="salaryRange"
                    onChange={this.onChangeSalaryRange}
                  />
                  <label htmlFor={eachSalaryRange.salaryRangeId}>
                    {eachSalaryRange.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="right">
            <div className="search-container">
              <input
                className="search-input"
                type="search"
                value={searchQuery}
                onChange={this.onChangeSearchQuery}
              />
              <button
                type="button"
                className="search-button"
                data-testid="searchButton"
                onClick={this.onSearch}
              >
                Search
              </button>
            </div>
            {this.renderJobsSection()}
          </div>
        </div>
      </>
    )
  }
}

export default Jobs
