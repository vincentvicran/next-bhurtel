import React, {useEffect, useRef, useState} from 'react'
import Slider from 'react-slick'

import {useMedia} from 'hooks'

import {
  CarousalContainer,
  CarousalImage,
  CarousalItem,
  CarouselSlider,
  Dots
} from './carousel.style'
import {NavArrow} from './component/navArrow'
import {bannerServices} from 'redux/banner/banner.service'
import {modifyCarousalArray} from 'helpers/carousal.helper'
import {getImageUrl} from 'helpers/getUrl'

// import BackgroundImage from 'assets/images/about.jpg'
// import BackgroundImage2 from 'assets/images/about.jpg'
// import BackgroundImage3 from 'assets/images/about.jpg'

export const MainCarousel = () => {
  const media = useMedia()
  const [items, setItems] = useState<Api.AllBanners['rows'] | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const banners = await bannerServices.getBanners()
        const data = modifyCarousalArray(banners.rows)
        setItems(data)
      } catch (err) {}
    })()
  }, [])

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
    speed: 900,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NavArrow direction="next" onClick={nextSlide} />,
    prevArrow: <NavArrow direction="prev" onClick={prevSlide} />,
    appendDots: (dots: any) => <div>{dots}</div>,
    customPaging: () => <Dots></Dots>
  }
  return (
    <CarousalContainer media={media}>
      <CarouselSlider ref={slider} {...settings}>
        {items &&
          items.map(({banner_details: {image}}, index) => (
            <CarousalItem key={index}>
              <CarousalImage
                src={getImageUrl('banner', image)}
                alt=""
                // height={'inherit'}
                // width={'inherit'}
                style={
                  !media.lg
                    ? {
                        height: `45vh`
                      }
                    : {
                        height: '64vh'
                      }
                }
              />
            </CarousalItem>
          ))}
      </CarouselSlider>
    </CarousalContainer>
  )
}
