import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

const BlogItemDetails = () => {
  const {id} = useParams()
  const [blogDetails, setBlogDetails] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()
      setBlogDetails(data)
      setIsLoading(false)
    }
    fetchBlogDetails()
  }, [id])

  if (isLoading) {
    return (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
      </div>
    )
  }

  const {image_url: imageUrl, title, content, author} = blogDetails

  return (
    <div className="blog-details-container">
      <img src={imageUrl} alt={title} className="blog-details-image" />
      <h1 className="blog-details-title">{title}</h1>
      <p className="blog-details-content">{content}</p>
      <p className="blog-details-author">By {author}</p>
    </div>
  )
}

export default BlogItemDetails
