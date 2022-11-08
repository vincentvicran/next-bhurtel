import React from 'react'
import YouTube, {YouTubeProps} from 'react-youtube'
import {YoutubeContainer} from './youtube.style'

interface YoutubeUserProps {
  videoId: string
}

export const Youtube = ({videoId}: YoutubeUserProps) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0
    }
  }

  return (
    <YoutubeContainer>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
    </YoutubeContainer>
  )
}
