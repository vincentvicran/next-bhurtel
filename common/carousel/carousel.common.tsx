import React, {useCallback, useRef} from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

import {useMedia} from 'hooks'

import {
  CarousalContainer,
  CarousalItem,
  CarouselSlider,
  Dots
} from './carousel.style'
import {NavArrow} from './component/navArrow'

// import BackgroundImage from 'assets/images/about.jpg'
// import BackgroundImage2 from 'assets/images/about.jpg'
// import BackgroundImage3 from 'assets/images/about.jpg'

const BackgroundImage = '/assets/image/H1.png'
const BackgroundImage2 = '/assets/image/H2.jpg'
const BackgroundImage3 = '/assets/image/H3.png'

const SLIDER_IMAGES = [
  {image: BackgroundImage},
  {image: BackgroundImage2},
  {image: BackgroundImage3}
]

export const MainCarousel = () => {
  const media = useMedia()

  const getImageBox = useCallback(() => {
    let resolution: {width: number; height: number} = {width: 1280, height: 400}

    if (media) {
      if (media.xxl) return {width: 2000, height: 600}
      if (media.xl) return {width: 1400, height: 400}
      if (media.lg) return {width: 1200, height: 400}
      if (media.md) return {width: 900, height: 400}
      if (media.sm) return {width: 750, height: 400}
      if (media.xs) return {width: 600, height: 400}
    }
    return resolution
  }, [media])

  const {width, height} = getImageBox()

  const slider = useRef<Slider>(null)

  const prevSlide = () => {
    slider.current?.slickPrev()
  }
  const nextSlide = () => {
    slider.current?.slickNext()
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    adaptiveHeight: true,
    nextArrow: <NavArrow direction="next" onClick={nextSlide} />,
    prevArrow: <NavArrow direction="prev" onClick={prevSlide} />,
    appendDots: (dots: any) => <div>{dots}</div>,
    customPaging: () => <Dots></Dots>
  }
  return (
    <CarousalContainer>
      <CarouselSlider ref={slider} {...settings}>
        {SLIDER_IMAGES.map(({image}, index) => (
          <CarousalItem key={index} style={{overflow: 'hidden'}}>
            <Image
              src={image}
              alt=""
              objectFit="cover"
              height={height}
              width={width}
            />
          </CarousalItem>
        ))}
      </CarouselSlider>
    </CarousalContainer>
  )
}
