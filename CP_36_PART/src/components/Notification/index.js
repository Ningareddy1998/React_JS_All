import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <div className="notification-container" role="alert">
      {children}
    </div>
  )
}

export default Notification
