import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    usernameerror: null,
    passworderror: null,
    apiError: null,
    onSubmitTrue: true,
  }

  onSubmissionSuccess = () => {
    this.setState({onSubmitTrue: false, apiError: null})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const usernameerror = username.trim() === '' ? 'Required' : null
    const passworderror = password.trim() === '' ? 'Required' : null

    if (usernameerror || passworderror) {
      this.setState({usernameerror, passworderror})
      return
    }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response.ok)

    if (response.ok) {
      this.onSubmissionSuccess()
    } else {
      this.setState({apiError: data.error_msg})
    }
  }

  handleInputChange = event => {
    const {id, value} = event.target
    this.setState({
      [id]: value,
      [`${id}error`]: null,
      apiError: null,
    })
  }

  render() {
    const {
      username,
      password,
      usernameerror,
      passworderror,
      apiError,
      onSubmitTrue,
    } = this.state

    return (
      <div className="login-form-container">
        <h1 className="heading">Registration</h1>
        {onSubmitTrue ? (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label htmlFor="username" className="input-label">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="username-input-field"
                placeholder="Username"
                value={username}
                onChange={this.handleInputChange}
              />
              {usernameerror && (
                <p className="error-message">{usernameerror}</p>
              )}
            </div>
            <div className="input-container">
              <label htmlFor="password" className="input-label">
                PASSWORD
              </label>
              <input
                type="password"
                id="password"
                className="password-input-field"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              />
              {passworderror && (
                <p className="error-message">{passworderror}</p>
              )}
            </div>
            {apiError && <p className="error-message">{apiError}</p>}
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        ) : (
          <div className="success">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-image"
            />
            <h2 className="heading">Submitted Successfully</h2>
            <button
              className="submit-button"
              type="button"
              onClick={() => this.setState({onSubmitTrue: true})}
            >
              Submit Another Response
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
