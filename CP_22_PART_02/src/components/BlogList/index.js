import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {eachList} = props
  return (
    <ul className="ul-List">
      <BlogItem eachList={eachList} />
    </ul>
  )
}
export default BlogList
