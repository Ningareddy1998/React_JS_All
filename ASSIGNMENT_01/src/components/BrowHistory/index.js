import {useState} from 'react'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },
  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const BrowserHistory = () => {
  const [historyList, setHistoryList] = useState(initialHistoryList)
  const [searchInput, setSearchInput] = useState('')

  const onChangeSearch = event => {
    setSearchInput(event.target.value)
  }

  const onClickDelete = id => {
    const updatedHistoryList = historyList.filter(
      eachItem => eachItem.id !== id,
    )
    setHistoryList(updatedHistoryList)
  }

  const filteredHistoryList = historyList.filter(eachItem =>
    eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="bg-container">
      <div className="top-container">
        <div className="container-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
        </div>
        <div className="container-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
          />
        </div>
        <div className="container-3">
          <input
            type="search"
            className="input"
            value={searchInput}
            onChange={onChangeSearch}
            placeholder="Search history"
          />
        </div>
      </div>
      {filteredHistoryList.length === 0 ? (
        <div className="empty-container">
          <p>There is no history to show</p>
        </div>
      ) : (
        <ul className="ullist">
          {filteredHistoryList.map(eachItem => (
            <li className="list" key={eachItem.id}>
              <p className="time">{eachItem.timeAccessed}</p>
              <img src={eachItem.logoUrl} alt="domain logo" className="logo" />
              <p className="title">{eachItem.title}</p>
              <p className="domain title-domain">{eachItem.domainUrl}</p>

              <button
                type="button"
                className="button"
                onClick={() => onClickDelete(eachItem.id)}
                data-testid="delete"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BrowserHistory
