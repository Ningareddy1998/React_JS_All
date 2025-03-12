import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  const renderNoActiveEventView = () => (
    <p>Click on an event, to view its registration details</p>
  )

  const renderYetToRegisterView = () => (
    <div className="registration-status-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="registration-status-image"
      />
      <p>A live performance brings so much to your relationship with dance.</p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="registration-status-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registration-status-image"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const renderRegistrationsClosedView = () => (
    <div className="registration-status-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-status-image"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  const renderActiveEventDetails = () => {
    switch (registrationStatus) {
      case 'YET_TO_REGISTER':
        return renderYetToRegisterView()
      case 'REGISTERED':
        return renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return renderRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="active-event-details-container">
      {renderActiveEventDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
