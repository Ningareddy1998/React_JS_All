import './index1.css'

const UserProfile = props => {
  const {userDetails} = props

  // Handle the case when userDetails is undefined
  if (!userDetails) {
    return null
  }
  const {imageUrl, name, role} = userDetails

  console.log(userDetails)

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
