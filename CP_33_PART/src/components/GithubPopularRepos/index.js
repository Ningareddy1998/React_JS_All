import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class GithubPopularRepos extends Component {
  state = {
    activeLanguageFilterId: languageFiltersData[0].id,
    repositoriesData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getRepositories()
  }

  getRepositories = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {activeLanguageFilterId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeLanguageFilterId}`

    try {
      const response = await fetch(apiUrl)
      if (!response.ok) throw new Error('Failed to fetch repositories')

      const fetchedData = await response.json()
      const updatedData =
        fetchedData?.popular_repos?.map(repo => ({
          id: repo?.id,
          name: repo?.name,
          issuesCount: repo?.issues_count,
          forksCount: repo?.forks_count,
          starsCount: repo?.stars_count,
          avatarUrl: repo?.avatar_url,
        })) || []

      this.setState({
        repositoriesData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } catch {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  setActiveLanguageFilterId = newFilterId => {
    this.setState({activeLanguageFilterId: newFilterId}, this.getRepositories)
  }

  renderLanguageFiltersList = () => {
    const {activeLanguageFilterId} = this.state

    return (
      <ul className="language-filters-list">
        {languageFiltersData.map(({id, language}) => (
          <LanguageFilterItem
            key={id}
            languageFilterDetails={{id, language}}
            isActive={id === activeLanguageFilterId}
            setActiveLanguageFilterId={this.setActiveLanguageFilterId}
          />
        ))}
      </ul>
    )
  }

  renderRepositoriesList = () => {
    const {repositoriesData} = this.state

    return (
      <ul className="repositories-list">
        {repositoriesData.map(repository => (
          <RepositoryItem key={repository.id} repositoryDetails={repository} />
        ))}
      </ul>
    )
  }

  renderLoadingView = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="failure-view-heading">Something went wrong</h1>
    </div>
  )

  renderSuccessView = () => (
    <div className="success-view-container">
      {this.renderRepositoriesList()}
    </div>
  )

  renderRepositories = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="app-heading">Popular</h1>
        {this.renderLanguageFiltersList()}
        {this.renderRepositories()}
      </div>
    )
  }
}

export default GithubPopularRepos
