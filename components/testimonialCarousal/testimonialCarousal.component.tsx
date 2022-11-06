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

export function TestimonialCarousal() {
  let ref: Slider | null
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    focusOnSelect: true,
    displayArrowLeft: false,
    displayArrowRight: false,
    arrows: false,
    appendDots: (dots: any) => <div>{dots}</div>,
    customPaging: () => <Dots></Dots>
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
        {Array(5)
          .fill('')
          .map((_, id) => {
            return (
              <CarousalItem key={id}>
                <TestimonialCard
                  address="chandragiri-14, Kathamandu"
                  description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ornare lacus platea malesuada ac. Malesuada ullamcorper vitae mattis in.  tortor, habitant morbi at ut.`}
                  name="John Doe"
                  image={
                    'https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg'
                  }
                />
              </CarousalItem>
            )
          })}
      </Slider>
    </CarousalContainer>
  )
}
