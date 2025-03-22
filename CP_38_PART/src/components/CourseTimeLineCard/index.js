import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({courseDetails}) => {
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <h2>{courseTitle}</h2>
      <p>{description}</p>
      <div className="duration">
        <AiFillClockCircle size={20} />
        <span>{duration}</span>
      </div>
      <div className="tags-container">
        {tagsList.map(tag => (
          <span key={tag.id} className="tag">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
