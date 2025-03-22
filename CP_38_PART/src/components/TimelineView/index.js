import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono
        items={timelineItemsList.map(item => ({title: item.title}))}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(item =>
          item.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={item.id} courseDetails={item} />
          ) : (
            <ProjectTimelineCard key={item.id} projectDetails={item} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
