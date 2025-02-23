import './index.css'

const Login = ({onLogin}) => (
  <button type="button" className="login-button" onClick={onLogin}>
    Login
  </button>
)

export default Login
