// src/components/FiltersGroup/index.js
import {FaSearch} from 'react-icons/fa'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptionsList,
    ratingsLists,
    changeCategory,
    changeRating,
    changeSearchInput,
    clearFilters,
  } = props

  const handleCategoryChange = categoryId => {
    changeCategory(categoryId)
  }

  const handleRatingChange = ratingId => {
    changeRating(ratingId)
  }

  return (
    <div className="filters-group-container">
      <div className="search_container">
        <input
          type="search"
          placeholder="Search"
          className="search_input"
          onKeyDown={changeSearchInput}
        />
        <FaSearch className="search_icon" />
      </div>
      <div className="category_container">
        <h1 className="category_header">Category</h1>
        {categoryOptionsList.map(eachList => (
          <p
            key={eachList.categoryId}
            className="category_item"
            onClick={() => handleCategoryChange(eachList.categoryId)}
          >
            {eachList.name}
          </p>
        ))}
      </div>
      <div>
        <h1 className="category_header">Rating</h1>
        {ratingsLists.map(eachRating => (
          <button
            key={eachRating.ratingId}
            className="rating_button"
            type="button"
            onClick={() => handleRatingChange(eachRating.ratingId)}
          >
            <img
              className="rating_image"
              src={eachRating.imageUrl}
              alt={`rating ${eachRating.ratingId}`}
            />
          </button>
        ))}
      </div>
      <button type="button" className="clear_button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
