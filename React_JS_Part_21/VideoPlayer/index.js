import ReactPlayer from 'react-player'

import './index.css'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer
        url="https://youtu.be/YE7VzlLtp-4"
        controls={true}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
      />
    </div>
  </div>
)

export default VideoPlayer
