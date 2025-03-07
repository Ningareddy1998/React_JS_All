import './index.css'

const BlogItem = props => {
  const {eachList} = props
  const {title, description, publishedDate} = eachList
  return (
    <li className="list">
      <div className="each_title">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <div>
        <p className="description">{description}</p>
        <hr />
      </div>
    </li>
  )
}

export default BlogItem
