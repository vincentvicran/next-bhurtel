import Image from 'next/image'
import React, {useRef} from 'react'
import Slider from 'react-slick'

import {CarouselSlider} from './carousel.style'
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
    prevArrow: <NavArrow direction="prev" onClick={prevSlide} />
  }
  return (
    <div>
      <CarouselSlider ref={slider} {...settings}>
        {SLIDER_IMAGES.map(({image}, index) => (
          <div key={index} style={{overflow: 'hidden'}}>
            <Image
              src={image}
              alt=""
              objectFit="cover"
              width="1400"
              height="400"
            />
          </div>
        ))}
      </CarouselSlider>
    </div>
  )
}
