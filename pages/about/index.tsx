import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import {CompWrapper} from 'common/compWrapper'
import {TitleContainer} from 'components/titleContainer'
import {aboutService} from 'redux/about/about.service'
import {ResponsiveStack, VStack} from 'common/stack'
import Theme from 'theme'
import {NoResultFound} from 'components/noResultsFound'
import aboutImg from 'assets/images/about.jpg'
import {Paragraph} from 'components/Paragraph'
import {useMedia} from 'hooks'

const AboutInfo = styled.div`
  margin: ${Theme.space.$8} 0;
`

const ImgContainer = styled.div``

const AboutPage = ({about}: {about: Api.About}) => {
  const media = useMedia()
  return (
    <CompWrapper>
      <VStack style={{marginTop: Theme.space.$8}}>
        <TitleContainer title="About Us" underlineWidth="70px" />

        {about ? (
          <>
            <ResponsiveStack gap={!media.lg ? '$10' : '$2'} breakpoint="lg">
              <Paragraph
                color="light"
                style={{
                  maxWidth: !media.lg ? 'auto' : '500px',
                  marginBottom: 40
                }}
              >
                {about.short_description}
              </Paragraph>

              <ImgContainer>
                <Image
                  src={aboutImg}
                  alt="verdict"
                  height={!media.md ? '' : '300px'}
                  objectFit="contain"
                />
              </ImgContainer>
            </ResponsiveStack>
            <AboutInfo>
              <TitleContainer title="More Information" />
              <div dangerouslySetInnerHTML={{__html: about.main_description}} />
            </AboutInfo>
          </>
        ) : (
          <NoResultFound />
        )}
      </VStack>
    </CompWrapper>
  )
}

export const getServerSideProps = async () => {
  const about = await aboutService.getAbout()

  return {
    props: {
      about
    }
  }
}

export default AboutPage
