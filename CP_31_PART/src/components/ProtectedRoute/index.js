import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = Cookies.get('jwt_token')

  return token ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to="/login" />
  )
}

export default ProtectedRoute
