import React from 'react'
import Slider from 'react-slick'
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from 'react-icons/io'

import {TestimonialCard} from 'components/testimonialCard'
import {IconButton} from 'common/button'
import {Title} from 'components/title'
import Theme from 'theme'

import {
  ArrowBtnContainer,
  CarousalContainer,
  CarousalItem,
  Dots,
  HeaderContainer
} from './testimonialCarousal.styles'
import {getImageUrl} from 'helpers/getUrl'

export function TestimonialCarousal({data}: {data: any[]}) {
  console.log(data)
  let ref: Slider | null
  const settings = {
    dots: true,
    // infinite: true,
    speed: 900,

    // autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          initialSlide: 0,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          initialSlide: 0,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 0,
          slidesToShow: 1
        }
      }
    ],
    displayArrowLeft: false,
    displayArrowRight: false,
    arrows: false,
    appendDots: (dots: any) => <div>{dots}</div>,
    customPaging: () => <Dots></Dots>,
    adaptiveHeight: true
  }

  return (
    <CarousalContainer>
      <HeaderContainer>
        <Title
          text="TESTIMONIALS"
          size="sm"
          style={{color: Theme.colors.$gray600, display: 'block'}}
        />

        <Title
          text="Trusted by Hundreds of Happy Customers"
          size="lg"
          style={{color: Theme.colors.$black, margin: `${Theme.space.$3} 0`}}
          weight="bold"
        />
      </HeaderContainer>
      <ArrowBtnContainer>
        <IconButton
          style={{width: 40, height: 40}}
          onClick={() => ref?.slickPrev()}
          icon={<IoIosArrowRoundBack size={24} />}
        />
        <IconButton
          style={{width: 40, height: 40}}
          onClick={() => ref?.slickNext()}
          icon={<IoIosArrowRoundForward size={24} />}
        />
      </ArrowBtnContainer>

      <Slider {...settings} ref={(c) => (ref = c)}>
        {data &&
          data.map((el, id) => {
            return (
              <CarousalItem key={id}>
                <TestimonialCard
                  address="chandragiri-14, Kathamandu"
                  description={el.testimonial_details.quote}
                  name={el.testimonial_details.name}
                  image={getImageUrl(
                    'testimonial',
                    el.testimonial_details.image
                  )}
                />
              </CarousalItem>
            )
          })}
      </Slider>
    </CarousalContainer>
  )
}
