import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome />
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )}
      </div>
    )
  }
}

export default App




/*renderAuthButton = () => {
    const {isLoggedIn} = this.state

    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
     {this.renderAuthButton()}
  }


 let authButton
    if (isLoggedIn === true) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Login</button>
    }*/
