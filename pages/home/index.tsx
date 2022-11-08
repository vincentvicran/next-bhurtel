import styled from 'styled-components'

import {CompWrapper} from 'common/compWrapper'
import {MainCarousel} from 'common/carousel'
import {About} from 'components/about'
import {TestimonialCarousal} from 'components/testimonialCarousal'
import {testimonialServices} from 'redux/testimonial/testimonial.service'
import Theme from 'theme'
import {useMedia} from 'hooks'

const MainContainer = styled.div`
  margin: ${Theme.space.$17} 0;
`

const HomePage = ({testimonials}: {testimonials: Api.AllTestimonials}) => {
  const media = useMedia()
  return (
    <>
      <MainCarousel />
      <CompWrapper>
        <MainContainer
          style={{
            marginTop: !media.lg ? Theme.space.$10 : Theme.space.$17
          }}
        >
          <About text="Mr. Durga Prasad Bhurtel Successfully Represented Various Clients for Injury Claims. Affects, Signs & Sources of Lead Paint (Poisoning) in Children. Your first medical diagnosis is probably wrong, according to Mayo Clinic. Construction Worker Accident and Injury? Know your rights for help you may need." />
          <TestimonialCarousal data={testimonials.rows} />
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
