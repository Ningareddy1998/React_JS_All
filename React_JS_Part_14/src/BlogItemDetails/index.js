import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: [], isSpinner: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
    }
    this.setState({blogItem: updatedData, isSpinner: false})
  }

  renderBlogItemDetails = () => {
    const {blogItem, isSpinner} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogItem
    return (
      <>
        {isSpinner ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className="blog-info">
            <h2 className="blog-details-title">{title}</h2>

            <div className="author-details">
              <img className="author-pic" src={avatarUrl} alt={author} />
              <p className="details-author-name">{author}</p>
            </div>

            <img className="blog-image" src={imageUrl} alt={title} />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
