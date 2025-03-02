import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {eachList, isToggleFavourite} = props
  const {id, name, date, isFavourite} = eachList

  const onToggleFavourite = () => {
    isToggleFavourite(id)
  }

  const isFavouriteUrl = isFavourite
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const formattedDate = format(new Date(date), 'dd MMMM yyyy, EEEE')

  return (
    <li className="appointment-item">
      <div className="appointment-details">
        <p className="appointment-name">{name}</p>
        <p className="appointment-date">{formattedDate}</p>
      </div>
      <div>
        <button
          type="button"
          className="favorite-button"
          onClick={onToggleFavourite}
          data-testid="star"
        >
          <img src={isFavouriteUrl} alt="star" className="image" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
