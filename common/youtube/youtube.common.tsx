import React from 'react'
import YouTube, {YouTubeProps} from 'react-youtube'
import {YoutubeContainer} from './youtube.style'

export const Youtube = () => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo()
  }

  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  return (
    <YoutubeContainer>
      <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={onPlayerReady} />
    </YoutubeContainer>
  )
}
