import React from 'react'
import './VideoCard.css'
import ReactPlayer from 'react-player'
import './VideoCard.css'


const VideoCard = () => {
  return (
      <>
      <div className="video-card">
      <div className="video-player">
      <ReactPlayer url="https://youtu.be/iu-LBY7NXD4?si=Sba4c4ExogWm1fdz" controls={true}  />
      </div>
      <div className="video-desc">
        <h3>React for Beginners: The Complete Course</h3>
        <p>Learn React by building a real-world application. This course covers everything from the basics to advanced topics, including hooks, React Router, and more.</p>
        <div className="video-stats">
          <span>
            <i className='fa fa-calendar-alt'></i>
            <label htmlFor=''>2021-06-15</label>
          </span>
          <span>
            <i className='fa fa-comments'></i>
            <label htmlFor=''>1,257</label>
          </span>
          </div>
  

      </div>
      </div>
      
    </>
  )
}

export default VideoCard
