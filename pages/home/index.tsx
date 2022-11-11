import styled from 'styled-components'

import {CompWrapper} from 'common/compWrapper'
import {DescriptionCard} from 'components/descriptionCard'
import {MainCarousel} from 'common/carousel'
import {About} from 'components/about'
import {TestimonialCarousal} from 'components/testimonialCarousal'
import {testimonialServices} from 'redux/testimonial/testimonial.service'
import Theme from 'theme'
import {useMedia} from 'hooks'
import {ContactUs} from 'components/contactUs'
import dynamic from 'next/dynamic'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`

const MainContainer = styled.div`
  margin: ${Theme.space.$17} 0;
`

const PersonalInjuryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`

const ContactSection = styled.div<{md: boolean}>`
  display: flex;
  justify-content: space-between;
  gap: ${Theme.space.$8};
  margin: ${Theme.space.$16} 5px;
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
  news
}: {
  testimonials: Api.AllTestimonials
  news: Api.AllCommonDescription['rows']
}) => {
  const media = useMedia()

  console.log(news, 'personal injury news')
  const filtereddata = news.filter((item: any, index: number) => {
    return item.category_details.type === 'personal_injury'
  })

  console.log(filtereddata, 'filtereddata')

  return (
    <HomeContainer>
      <MainCarousel />
      <CompWrapper>
        <MainContainer
          style={{
            marginTop: !media.md ? Theme.space.$10 : Theme.space.$17
          }}
        >
          <About text="Mr. Durga Prasad Bhurtel Successfully Represented Various Clients for Injury Claims. Affects, Signs & Sources of Lead Paint (Poisoning) in Children. Your first medical diagnosis is probably wrong, according to Mayo Clinic. Construction Worker Accident and Injury? Know your rights for help you may need." />
          {testimonials && testimonials.rows.length > 0 && (
            <TestimonialCarousal data={testimonials.rows} />
          )}
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
          <PersonalInjuryContainer>
            {filtereddata.map((item: any, index: number) => {
              return (
                <DescriptionCard
                  key={item.descritpion_details?.id}
                  isHorizontal={false}
                  date={item.description_details.posted_at}
                  desc={item.description_details.main_description}
                  title={item.description_details.title}
                  imgUrl={
                    item.description_details.thumbnail &&
                    (item.description_details.thumbnail as string)
                  }
                />
              )
            })}
          </PersonalInjuryContainer>
        </MainContainer>
      </CompWrapper>
    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  const testimonials = await testimonialServices.getAllTestimonialsHomepage()
  const cmnDescription =
    await commonDescriptionServices.getAllCommonDescription()

  return {props: {testimonials: testimonials, news: cmnDescription.rows}}
}

export default HomePage
