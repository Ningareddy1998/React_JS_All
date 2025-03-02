// src/components/Appointments/index.js
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {name: '', date: '', appointmentList: [], showFavourites: false}

  onAddAppointment = event => {
    event.preventDefault()
    const {name, date} = this.state
    if (name.trim() === '' || date.trim() === '') {
      return
    }
    const newAppointment = {
      id: uuidv4(),
      name,
      date,
      isFavourite: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
      name: '',
      date: '',
    }))
  }

  searchInput1 = event => {
    this.setState({name: event.target.value})
  }

  searchInput2 = event => {
    this.setState({date: event.target.value})
  }

  isToggleFavourite = id => {
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachList => {
        if (id === eachList.id) {
          return {...eachList, isFavourite: !eachList.isFavourite}
        }
        return eachList
      }),
    }))
  }

  toggleShowFavourites = () => {
    this.setState(prevState => ({
      showFavourites: !prevState.showFavourites,
    }))
  }

  render() {
    const {name, date, appointmentList, showFavourites} = this.state
    const filteredList = showFavourites
      ? appointmentList.filter(eachList => eachList.isFavourite)
      : appointmentList

    return (
      <div className="bg-container">
        <div className="top-container">
          <div>
            <form onSubmit={this.onAddAppointment}>
              <h1 className="heading">Add Appointment</h1>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={name}
                onChange={this.searchInput1}
              />
              <br />
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={this.searchInput2}
              />
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
        </div>
        <hr />
        <div className="appointments-header">
          <h1>Appointments</h1>
          <button
            type="button"
            className={`filter-button ${showFavourites ? 'active' : ''}`}
            onClick={this.toggleShowFavourites}
          >
            {showFavourites ? 'Starred' : 'Starred'}
          </button>
        </div>
        <ul className="appointments-list">
          {filteredList.map(eachList => (
            <AppointmentItem
              key={eachList.id}
              eachList={eachList}
              isToggleFavourite={this.isToggleFavourite}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Appointments
