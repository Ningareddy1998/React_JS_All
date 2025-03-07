import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = ({blog}) => {
  const {id, title, image_url: imageUrl, avatar_url: avatarUrl, author} = blog

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-link">
        <img src={imageUrl} alt={`Blog: ${title}`} className="blog-image" />
        <h3 className="blog-title">{title}</h3>
        <p className="blog-author">By {author}</p>
        <img
          src={avatarUrl}
          alt={`Avatar of ${author}`}
          className="avatar-image"
        />
      </Link>
    </li>
  )
}

export default BlogItem
