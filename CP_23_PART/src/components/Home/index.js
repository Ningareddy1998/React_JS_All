import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'
import './index.css'

const Home = () => {
  const [blogsList, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const data = await response.json()
      setBlogs(data)
      setLoading(false)
    }
    fetchBlogs()
  }, [])

  return (
    <div className="home-container">
      <UserInfo />
      {loading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        <BlogList blogsList={blogsList} />
      )}
    </div>
  )
}

export default Home
