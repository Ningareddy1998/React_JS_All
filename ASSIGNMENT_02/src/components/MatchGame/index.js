import {useState, useEffect} from 'react'
import Header from '../Header'
import TabItem from '../TabItem'
import './index.css'

const MatchGame = ({tabsList, imagesList}) => {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(60)
  const [activeTab, setActiveTab] = useState(tabsList[0].tabId)
  const [matchedImage, setMatchedImage] = useState(imagesList[0].imageUrl)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    if (timeLeft > 0 && !isGameOver) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
    if (timeLeft === 0) {
      setIsGameOver(true)
    }
    return undefined
  }, [timeLeft, isGameOver])

  const filteredImages = imagesList.filter(
    image => image.category === activeTab,
  )

  const getRandomImages = () => {
    const uniqueImages = new Set(filteredImages.map(image => image.id))
    const imagesToShow = [...filteredImages]
    while (imagesToShow.length < 15) {
      const randomImage =
        imagesList[Math.floor(Math.random() * imagesList.length)]
      if (!uniqueImages.has(randomImage.id)) {
        imagesToShow.push(randomImage)
        uniqueImages.add(randomImage.id)
      }
    }
    return imagesToShow.slice(0, 15)
  }

  const handleThumbnailClick = clickedImageUrl => {
    if (isGameOver) return
    if (clickedImageUrl === matchedImage) {
      setScore(prev => prev + 1)
      setMatchedImage(
        imagesList[Math.floor(Math.random() * imagesList.length)].imageUrl,
      )
    } else {
      setIsGameOver(true)
    }
  }

  const handleTabClick = tabId => {
    setActiveTab(tabId)
  }

  const resetGame = () => {
    setScore(0)
    setTimeLeft(60)
    setMatchedImage(imagesList[0].imageUrl)
    setActiveTab(tabsList[0].tabId)
    setIsGameOver(false)
  }

  return (
    <div className="match-game">
      <Header score={score} timeLeft={timeLeft} />

      {isGameOver ? (
        <div className="game-over">
          <p className="paragraph-1">YOUR SCORE</p>
          <p className="paragraph-1" data-testid="score">
            {score}
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="image-1"
          />
          <button
            type="button"
            onClick={resetGame}
            aria-label="reset-game"
            className="reset-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
              className="image-1"
            />
            PLAY AGAIN
          </button>
        </div>
      ) : (
        <div className="main-content">
          <img src={matchedImage} alt="match" className="match-image" />
          <ul className="nav-items">
            {tabsList.map(tab => (
              <TabItem
                key={tab.tabId}
                tab={tab}
                isActive={tab.tabId === activeTab}
                onTabClick={handleTabClick}
              />
            ))}
          </ul>
          <ul className="thumbnails">
            {getRandomImages().map(image => (
              <li key={image.id} className="thumbnail-item">
                <button
                  type="button"
                  onClick={() => handleThumbnailClick(image.imageUrl)}
                >
                  <img
                    src={image.thumbnailUrl}
                    alt="thumbnail"
                    className="thumbnail-image"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MatchGame
