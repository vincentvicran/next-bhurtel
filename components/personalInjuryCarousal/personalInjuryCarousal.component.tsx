import React from 'react'
import Slider from 'react-slick'
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from 'react-icons/io'

import {IconButton} from 'common/button'
import {Title} from 'components/title'
import Theme from 'theme'
import {useMedia} from 'hooks'

import {
  ArrowBtnContainer,
  CarousalContainer,
  CarousalItem,
  Dots,
  HeaderContainer
} from './personalInjuryCarousal.styles'
import {DescriptionCard} from 'components/descriptionCard'
import {useRouter} from 'next/router'

export function PersonalInjuryCarousal({
  data
}: {
  data: Api.CommonDescriptionIndividual[]
}) {
  const router = useRouter()
  const media = useMedia()
  let ref: Slider | null
  const settings = {
    dots: true,
    // infinite: true,
    speed: 900,

    autoplay: true,
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

  const clickHandler = (el: Api.CommonDescriptionIndividual) => {
    router.push(
      `personal-injury/article/${el.category_details.id}?description=${el.description_details.slug}`
    )
  }

  return (
    <CarousalContainer>
      <HeaderContainer>
        <Title
          text="NEWS"
          size="sm"
          style={{color: Theme.colors.$gray600, display: 'block'}}
        />
        <Title
          text="Personal Injury"
          size="lg"
          style={{
            color: Theme.colors.$black,
            margin: `${Theme.space.$3} 0 ${Theme.space.$14}`
          }}
          weight="bold"
        />
      </HeaderContainer>
      {media.lg && data && data.length <= 3 ? null : (
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
      )}

      <Slider {...settings} ref={(c) => (ref = c)}>
        {data &&
          data.map((item, id) => {
            return (
              <CarousalItem key={id} onClick={() => clickHandler(item)}>
                <DescriptionCard
                  key={item.description_details?.id}
                  isHorizontal={false}
                  date={item.description_details.posted_at}
                  desc={item.description_details.main_description}
                  title={item.description_details.title}
                  imgUrl={
                    item.description_details.thumbnail
                      ? (item.description_details.thumbnail as string)
                      : ''
                  }
                  truncateSize={5}
                  titleTruncateSize={2}
                />
              </CarousalItem>
            )
          })}
      </Slider>
    </CarousalContainer>
  )
}
