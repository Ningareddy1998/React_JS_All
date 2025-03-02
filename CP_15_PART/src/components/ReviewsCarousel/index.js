import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    currentIndex: 0,
  }

  nextButton = () => {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    if (currentIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }))
    }
  }

  prevButton = () => {
    const {currentIndex} = this.state
    if (currentIndex > 0) {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }))
    }
  }

  render() {
    const {currentIndex} = this.state
    const {reviewsList} = this.props
    const currentReview = reviewsList[currentIndex]
    const {imgUrl, username, companyName, description} = currentReview

    return (
      <div className="carousel-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            onClick={this.prevButton}
            className="carousel-button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div className="review-content">
            <img src={imgUrl} alt={username} className="profile-image" />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            onClick={this.nextButton}
            className="carousel-button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
