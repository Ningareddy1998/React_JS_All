import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    vaccinationData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'

    try {
      const response = await fetch(apiUrl)

      if (response.ok) {
        const fetchedData = await response.json()
        const updatedData = {
          last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
            eachDayData => ({
              vaccineDate: eachDayData.vaccine_date,
              dose1: eachDayData.dose_1,
              dose2: eachDayData.dose_2,
            }),
          ),
          vaccinationByAge: fetchedData.vaccination_by_age.map(eachAgeData => ({
            age: eachAgeData.age,
            count: eachAgeData.count,
          })),
          vaccinationByGender: fetchedData.vaccination_by_gender.map(
            eachGenderData => ({
              count: eachGenderData.count,
              gender: eachGenderData.gender,
            }),
          ),
        }

        this.setState({
          vaccinationData: updatedData,
          apiStatus: apiStatusConstants.success,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {vaccinationData} = this.state
    const {last7DaysVaccination, vaccinationByAge, vaccinationByGender} =
      vaccinationData

    return (
      <>
        <VaccinationCoverage
          vaccinationCoverageDetails={last7DaysVaccination}
        />
        <VaccinationByGender vaccinationByGenderDetails={vaccinationByGender} />
        <VaccinationByAge vaccinationByAgeDetails={vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="failure-text">Something went wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderVaccinationData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="cowin-dashboard-app">
        <div className="cowin-dashboard-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="logo-heading">Co-WIN</h1>
          </div>
          <h1 className="heading">CoWIN Vaccination in India</h1>
          {this.renderVaccinationData()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
