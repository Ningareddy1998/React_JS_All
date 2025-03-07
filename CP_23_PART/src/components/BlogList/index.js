import BlogItem from '../BlogItem'
import './index.css'

const BlogList = ({blogsList}) => (
  <ul className="blog-list">
    {blogsList.map(blog => (
      <BlogItem key={blog.id} blog={blog} />
    ))}
  </ul>
)

export default BlogList
