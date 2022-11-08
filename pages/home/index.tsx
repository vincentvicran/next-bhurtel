import styled from 'styled-components'

import {CompWrapper} from 'common/compWrapper'
import {MainCarousel} from 'common/carousel'
import {About} from 'components/about'
import {TestimonialCarousal} from 'components/testimonialCarousal'
import {testimonialServices} from 'redux/testimonial/testimonial.service'
import Theme from 'theme'
import {useMedia} from 'hooks'
import {ContactUs} from 'components/contactUs'
import dynamic from 'next/dynamic'

const MainContainer = styled.div`
  margin: ${Theme.space.$17} 0;
`

const ContactSection = styled.div<{md: boolean}>`
  display: flex;
  justify-content: space-between;
  gap: ${Theme.space.$8};
  margin: ${Theme.space.$16} 5px;
  flex-direction: ${(props) => (props.md ? 'row' : 'column')}}};
`
const LeftContact = styled.div<{md: boolean}>`
  width: 100%;
  flex: 1;

  & > div {
    height: ${(props) => (props.md ? '100% !important' : '400px')};
    border-radius: ${Theme.radius.$default};
  }
`
const RightContact = styled.div`
  flex: 1;
`

const MapWithNoSSR = dynamic(() => import('../../common/map/map.common'), {
  ssr: false
})

const HomePage = ({testimonials}: {testimonials: Api.AllTestimonials}) => {
  const media = useMedia()

  return (
    <>
      <MainCarousel />
      <CompWrapper>
        <MainContainer
          style={{
            marginTop: !media.md ? Theme.space.$10 : Theme.space.$17
          }}
        >
          <About text="Mr. Durga Prasad Bhurtel Successfully Represented Various Clients for Injury Claims. Affects, Signs & Sources of Lead Paint (Poisoning) in Children. Your first medical diagnosis is probably wrong, according to Mayo Clinic. Construction Worker Accident and Injury? Know your rights for help you may need." />
          <TestimonialCarousal data={testimonials.rows} />
          <ContactSection md={media.md}>
            <LeftContact md={media.md}>
              <MapWithNoSSR
                location={[51.505, -0.09]}
                popupText="Attorney Bhurtel"
              />
            </LeftContact>
            <RightContact>
              <ContactUs />
            </RightContact>
          </ContactSection>
        </MainContainer>
      </CompWrapper>
    </>
  )
}

export const getServerSideProps = async () => {
  const testimonials = await testimonialServices.getAllTestimonialsHomepage()

  return {props: {testimonials}}
}

export default HomePage
