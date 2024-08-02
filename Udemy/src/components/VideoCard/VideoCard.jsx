import React from 'react'
import './VideoCard.css'
import ReactPlayer from 'react-player'


const VideoCard = () => {
  return (
      <>
          <ReactPlayer url="https://youtu.be/iu-LBY7NXD4?si=Sba4c4ExogWm1fdz" controls={true}  />
      
    </>
  )
}

export default VideoCard
