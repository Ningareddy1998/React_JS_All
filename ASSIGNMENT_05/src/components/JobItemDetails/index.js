import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SimilarJobs from '../SimilarJobs'
import JobDetailsCard from '../JobDetailsCard'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  isLoading: 'IS_LOADING',
}

class JobItemDetails extends Component {
  state = {
    jobDetails: {},
    similarJobs: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.fetchJobDetails()
  }

  componentDidUpdate(prevProps) {
    const {match: prevMatch} = prevProps
    const {match: currentMatch} = this.props

    if (prevMatch.params.id !== currentMatch.params.id) {
      this.fetchJobDetails()
    }
  }

  fetchJobDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.isLoading})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')

    if (!jwtToken) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
      return
    }

    try {
      const response = await fetch(`https://apis.ccbp.in/jobs/${id}`, {
        headers: {Authorization: `Bearer ${jwtToken}`},
      })

      if (!response.ok) {
        throw new Error('Failed to fetch job details')
      }

      const data = await response.json()

      this.setState({
        jobDetails: data?.job_details || {},
        similarJobs: data?.similar_jobs || [],
        apiStatus: apiStatusConstants.success,
      })
    } catch (error) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={50} width={50} />
    </div>
  )

  renderFailureView = () => (
    <div className="error-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png  "
        alt="failure view"
      />
      <br />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for.</p>
      <button
        type="button"
        className="retry-button"
        onClick={this.fetchJobDetails}
      >
        Retry
      </button>
    </div>
  )

  renderJobDetailsView = () => {
    const {jobDetails, similarJobs} = this.state

    if (!jobDetails || Object.keys(jobDetails).length === 0) {
      return <p className="error-message">No job details found</p>
    }

    return (
      <div className="jobitem-details-container">
        <JobDetailsCard jobDetails={jobDetails} />
        <SimilarJobs jobs={similarJobs} />
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.isLoading:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return (
          <>
            <Header />
            {this.renderJobDetailsView()}
          </>
        )
      default:
        return null
    }
  }
}

export default JobItemDetails
