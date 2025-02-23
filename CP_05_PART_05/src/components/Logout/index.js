import './index.css'

const Logout = ({onLogout}) => (
  <button type="button" className="logout-button" onClick={onLogout}>
    Logout
  </button>
)

export default Logout
