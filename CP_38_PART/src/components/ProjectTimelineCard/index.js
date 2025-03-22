import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = ({projectDetails}) => {
  const {
    projectTitle,
    description,
    imageUrl,
    duration,

    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <h2>{projectTitle}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={projectTitle} className="project-image" />
      <div className="duration">
        <AiFillCalendar size={20} />
        <span>{duration}</span>
      </div>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
