import './index1.css'

const UserProfile = props => {
  const {userDetails} = props

  if (!userDetails) {
    return null
  }

  const {id, title, description, imgUrl, className} = userDetails

  console.error(`User Profile ID: ${id}`)

  return (
    <li className={`card ${className}`}>
      <h1 className="heading-2">{title}</h1>
      <p className="paragraph-2">{description}</p>
      <div>
        <img src={imgUrl} alt={title} className="image" />
      </div>
    </li>
  )
}

export default UserProfile
