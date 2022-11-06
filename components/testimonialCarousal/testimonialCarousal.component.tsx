import Slider from 'react-slick'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import {
  ArrowBtnContainer,
  CarousalContainer,
  CarousalItem,
  Dots,
  HeaderContainer
} from './testimonialCarousal.styles'
import {TestimonialCard} from 'components/testimonialCard'
import {useEffect} from 'react'
import {IconButton} from 'common/button'
import {Title} from 'components/title'
import Theme from 'theme'

export function TestimonialCarousal() {
  let ref: Slider | null
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <BsArrowRight color={'black'} />,
    prevArrow: <BsArrowLeft color="black" />,
    displayArrowLeft: false,
    displayArrowRight: false,
    arrows: false,
    appendDots: (dots: any) => <div>{dots}</div>,
    customPaging: () => <Dots></Dots>
  }

  useEffect(() => {
    console.log(ref)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        {/* <button onClick={() => ref?.slickPrev()}>Prev</button>
        <button onClick={() => ref?.slickNext()}>Next</button> */}
        <IconButton
          style={{width: 30, height: 30}}
          onClick={() => ref?.slickPrev()}
          icon={<BsArrowLeft size={16} />}
        />
        <IconButton
          style={{width: 30, height: 30}}
          onClick={() => ref?.slickNext()}
          icon={<BsArrowRight size={16} />}
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
                  description={`
					“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id urna, ornare lacus platea malesuada ac. Malesuada ullamcorper vitae mattis in.  tortor, habitant morbi at ut. ”
					
					`}
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
