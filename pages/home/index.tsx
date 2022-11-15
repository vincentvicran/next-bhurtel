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
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {PersonalInjuryCarousal} from 'components/personalInjuryCarousal'

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

const MainContainer = styled.div`
  /* margin: ${Theme.space.$10} 0; */
`

const ContactSection = styled.div<{md: boolean}>`
  display: flex;
  margin: 80px 0;
  gap: ${Theme.space.$8};
  /* margin: ${Theme.space.$17} 5px; */
  flex-direction: ${(props) => (props.md ? 'row' : 'column')};
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

const HomePage = ({
  testimonials,
  news,
  toast
}: {
  testimonials: Api.AllTestimonials
  news: Api.AllCommonDescription['rows']
  toast: any
}) => {
  const media = useMedia()

  const filtereddata = news.filter((item: any) => {
    return item.category_details.type === 'personal_injury'
  })

  return (
    <HomeContainer>
      <MainCarousel />
      <CompWrapper>
        <MainContainer>
          <About text="Mr. Durga Prasad Bhurtel Successfully Represented Various Clients for Injury Claims. Affects, Signs & Sources of Lead Paint (Poisoning) in Children. Your first medical diagnosis is probably wrong, according to Mayo Clinic. Construction Worker Accident and Injury? Know your rights for help you may need." />
          {testimonials && testimonials.rows.length > 0 && (
            <TestimonialCarousal data={testimonials.rows} />
          )}

          <PersonalInjuryCarousal data={filtereddata} />

          <ContactSection md={media.md}>
            <LeftContact md={media.md}>
              <MapWithNoSSR
                location={[51.505, -0.09]}
                popupText="Attorney Bhurtel"
              />
            </LeftContact>
            <RightContact>
              <ContactUs toast={toast} />
            </RightContact>
          </ContactSection>
        </MainContainer>
      </CompWrapper>
    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  const testimonials = await testimonialServices.getAllTestimonialsHomepage()
  const cmnDescription =
    await commonDescriptionServices.getAllCommonDescription({
      limit: 5,
      showHomepage: true
    })

  return {props: {testimonials: testimonials, news: cmnDescription.rows}}
}

export default HomePage
