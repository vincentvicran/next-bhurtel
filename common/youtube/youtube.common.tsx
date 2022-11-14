import React, {useMemo} from 'react'
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

  const splittedVideoId = useMemo(() => {
    const videoIdRegex =
      /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
    const newVideoId = videoId.match(videoIdRegex)?.toString()
    console.log('newVideoId: ', videoId, newVideoId)
    return newVideoId
  }, [videoId])

  return (
    <YoutubeContainer>
      <YouTube videoId={splittedVideoId} opts={opts} onReady={onPlayerReady} />
    </YoutubeContainer>
  )
}
