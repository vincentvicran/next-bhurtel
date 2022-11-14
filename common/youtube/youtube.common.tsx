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
    const rx =
      /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
    const newVideoId = videoId.match(rx)?.toString()
    return newVideoId?.split(',')[1]
  }, [videoId])

  return (
    <YoutubeContainer>
      <YouTube
        videoId={splittedVideoId?.toString()}
        opts={opts}
        onReady={onPlayerReady}
      />
    </YoutubeContainer>
  )
}
