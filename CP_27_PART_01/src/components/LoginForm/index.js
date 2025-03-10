import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showError: false,
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    if (username === '' || password === '') {
      this.setState({
        showError: true,
        errorMsg: 'Username or password is invalid',
      })
      return
    }

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {'Content-Type': 'application/json'},
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('jwt_token', data.jwt_token)
        const {history} = this.props
        history.replace('/')
      } else {
        this.setState({
          showError: true,
          errorMsg: 'Username or password is invalid',
        })
      }
    } catch (error) {
      this.setState({showError: true, errorMsg: 'Network request failed'})
    }
  }

  render() {
    const {username, password, errorMsg, showError} = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-website-logo-desktop-image"
        />
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
              onChange={e => this.setState({username: e.target.value})}
            />
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
              onChange={e => this.setState({password: e.target.value})}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showError && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default withRouter(LoginForm)
