const Notification = props => {
  const {className, src, messageText} = props
  return (
    <div className={`container ${className}`}>
      <img src={src} className='image' />
      <p>{messageText}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <div className='top-container'>
      <h1 className='heading'>Notifications</h1>
    </div>
    <Notification
      messageText='Information Message'
      className='container-1'
      src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
    <Notification
      messageText='Success Message'
      className='container-2'
      src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
    />
    <Notification
      messageText='Warning Message'
      className='container-3'
      src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
    />
    <Notification
      messageText='Error Message'
      className='container-4'
      src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
    />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
