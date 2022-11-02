// export const Carousel = () => {
//   return <div>Carousel</div>
// }

import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {useAnimatedValue, AnimatedBlock, interpolate} from 'react-ui-animate'
import Image from 'next/image'
// COMMONS
import {
  ActiveIndex,
  CarouselContainer,
  ActiveIndicatorContainer,
  CarouselText,
  ImageSliderContainer,
  ImageSlider,
  HideOverFlow
} from '.'
import {Button} from '../button'
// import { PrimaryButton } from "../../common/button/Button.common";

// const BackgroundImage = "/assets/image/H1.webp";
// const BackgroundImage2 = "/assets/image/H2.webp";
// const BackgroundImage3 = "/assets/image/H3.webp";
const BackgroundImage = '/assets/image/H1.png'
const BackgroundImage2 = '/assets/image/H2.jpg'
const BackgroundImage3 = '/assets/image/H3.png'

const SLIDER_IMAGES = [
  {image: BackgroundImage},
  {image: BackgroundImage2},
  {image: BackgroundImage3}
]

export const MainCarousel = () => {
  const router = useRouter()
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const animation = useAnimatedValue(activeImageIndex)
  useEffect(() => {
    const interval = setInterval(function () {
      setActiveImageIndex((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <CarouselContainer>
      <ActiveIndicatorContainer>
        <ActiveIndex
          length={SLIDER_IMAGES.length}
          activeIndex={activeImageIndex}
          setActiveIndex={setActiveImageIndex}
        />
      </ActiveIndicatorContainer>

      <CarouselText></CarouselText>
      {/* IMAGE SLIDER */}
      {/* <div style={{overflow: 'hidden'}}> */}
      <HideOverFlow>
        {/* <AnimatedBlock
          className="image-slider-container"
          style={{
            left: interpolate(
              animation.value,
              SLIDER_IMAGES.map((_, i) => i),
              SLIDER_IMAGES.map((_, i) => -1 * i * 100 + '%')
            )
          }}
        > */}
        <ImageSliderContainer
          style={{
            left: interpolate(
              animation.value,
              SLIDER_IMAGES.map((_, i) => i),
              SLIDER_IMAGES.map((_, i) => -1 * i * 100 + '%')
            )
          }}
        >
          {SLIDER_IMAGES.map((val, index) => (
            <ImageSlider key={index}>
              <Image src={val.image} objectFit="cover" layout="fill" priority />
            </ImageSlider>
          ))}
        </ImageSliderContainer>
        {/* </AnimatedBlock> */}

        {/* </div> */}
      </HideOverFlow>

      <div className="overlay" />
    </CarouselContainer>
  )
}
