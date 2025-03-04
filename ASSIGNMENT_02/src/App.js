import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

class App extends Component {
  state = {
    domain: '',
    name: '',
    password: '',
    allList: [],
    search: '',
    showPassword: false,
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const {domain, name, password} = this.state
    const newList = {
      id: uuidv4(),
      domain,
      name,
      password,
    }
    this.setState(prevState => ({
      allList: [...prevState.allList, newList],
      domain: '',
      name: '',
      password: '',
    }))
  }

  onDomainInput = event => {
    this.setState({domain: event.target.value})
  }

  onNameInput = event => {
    this.setState({name: event.target.value})
  }

  onPasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onDeletePassword = id => {
    const {allList} = this.state
    const updatedList = allList.filter(eachItem => eachItem.id !== id)
    this.setState({allList: updatedList})
  }

  onSearchInput = event => {
    this.setState({search: event.target.value})
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {domain, password, name, allList, search, showPassword} = this.state
    const isPasswordsEmpty = allList.length === 0

    const filteredList = allList.filter(eachItem =>
      eachItem.domain.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="header-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="image-1"
          />
        </div>
        <div className="top-container">
          <div className="sub-container-1">
            <h1 className="heading-1">Add New Password</h1>
            <form onSubmit={this.onSubmitDetails}>
              <div className="input-container">
                <div className="div">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="img"
                  />
                </div>
                <input
                  value={domain}
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.onDomainInput}
                  className="input-1"
                />
              </div>

              <br />
              <div className="input-container">
                <div className="div">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="img"
                  />
                </div>
                <input
                  value={name}
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.onNameInput}
                  className="input-1"
                />
              </div>
              <br />
              <div className="input-container">
                <div className="div">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="img"
                  />
                </div>
                <input
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.onPasswordInput}
                  className="input-1"
                />
              </div>

              <br />
              <button className="button-1" type="submit">
                Add
              </button>
            </form>
          </div>
          <div className="sub-container-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="image-2"
            />
          </div>
        </div>
        <div className="bottom-container">
          <div className="sub-container-3">
            <h1 className="heading-2">Your Passwords</h1>
            <p>{filteredList.length}</p>
            <div className="input-container">
              <div className="div">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="img"
                />
              </div>
              <input
                type="search"
                className="input-1"
                placeholder="Search"
                onChange={this.onSearchInput}
              />
            </div>
          </div>
          <div className="sub-container-4">
            <hr />
            <input
              type="checkbox"
              id="hi"
              className="input-2"
              onChange={this.toggleShowPassword}
            />
            <label htmlFor="hi">Show Passwords</label>
          </div>
          {allList.length === 0 ||
          (filteredList.length === 0 && search.length > 0) ? ( // Corrected conditional rendering
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="image-3"
              />
              <p>No Passwords</p>
            </div>
          ) : (
            <ul className="passwords-list">
              {filteredList.map(eachList => (
                <li key={eachList.id} className="password-item">
                  <p>{eachList.domain}</p>
                  <p>{eachList.name}</p>
                  <p>
                    {showPassword ? (
                      eachList.password
                    ) : (
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                        alt="stars"
                        className="img"
                      />
                    )}
                  </p>
                  <button
                    type="button"
                    onClick={() => this.onDeletePassword(eachList.id)}
                    className="button-2"
                    data-testid="delete"
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                      alt="delete"
                      className="delete-image"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
