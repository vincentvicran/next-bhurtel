import React from 'react'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

import Theme from 'theme'
import {useMedia} from 'hooks'

import {MediaProps} from 'components/footer'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'

import {ContactUs} from 'components/contactUs'
import {TitleContainer} from 'components/titleContainer'
import {HStack} from 'common/stack'

const MapWithNoSSR = dynamic(() => import('../../common/map/map.common'), {
  ssr: false
})

interface ContactUsTitleProps {
  title: string
  description?: React.ReactNode
  width: string
  alignItems?: string
  marginLeft?: string
  fontWeight?: 'bold' | 'semibold' | 'normal'
}

export const HorStack = styled.div<MediaProps>`
  display: flex;
  gap: 30px;
  flex-direction: ${(props) => (props.media.sm ? 'row' : 'column-reverse')};
  margin-top: 22px;
  margin: ${(props) => (props.media.sm ? '20px 80px' : '')};
`
export const VerStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: center;
`

const ContactTitleContainer = styled.div<{alignItems: string}>`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.alignItems};
  flex-direction: column;
  gap: ${Theme.space.$2};
`
const ContactUsDetailContainer = styled.div`
  padding: ${Theme.space.$11} ${Theme.space.$16};
  background: linear-gradient(
    180deg,
    #0480b1 2.18%,
    rgba(29, 161, 242, 0.53) 100%
  );

  color: white !important;
  display: flex;
  height: 100%;
`

const Underline = styled.div<{width: string}>`
  width: ${(props) => props.width};
  height: 4px;
  background-color: #d9d9d9;
`

const ContactParagraph = styled(Paragraph)`
  color: white;
  font-weight: bold;
`

const ContactLeft = styled.div<MediaProps>`
  flex: 1.8;

  width: ${(props) => (props.media.sm ? '' : '85%')};

  margin: 0px auto;
`
const ContactRight = styled.div`
  flex: 1;
`

const ContactusTitle = ({
  title,
  description,
  width,
  alignItems = 'flex-start',
  fontWeight = 'normal'
}: ContactUsTitleProps) => {
  return (
    <ContactTitleContainer alignItems={alignItems}>
      <div>
        <Title size="lg" weight={fontWeight} text={`${title} Us`} />
        <Underline width={width} />
      </div>

      {description && description}
    </ContactTitleContainer>
  )
}

const ContactUsDescription = () => {
  return (
    <ContactUsDetailContainer>
      <VerStack>
        <ContactusTitle
          title="Call"
          description={
            <ContactParagraph color="dark">212-461-4628</ContactParagraph>
          }
          width="50px"
        />
        <ContactusTitle
          title="Email"
          description={
            <ContactParagraph color="dark">
              info@attorneybhurtel.com
            </ContactParagraph>
          }
          width="50px"
        />
        <ContactusTitle
          title="Visit"
          description={
            <>
              <ContactParagraph color="light">
                Manhattan Office
              </ContactParagraph>
              <ContactParagraph color="light">
                Bhurtel Law Firm PLLC
              </ContactParagraph>
              <ContactParagraph color="light">
                353 Lexington Avenue suite #904
              </ContactParagraph>
              <ContactParagraph color="light">
                New York NY 10016&quot;
              </ContactParagraph>
            </>
          }
          width="50px"
        />
      </VerStack>
    </ContactUsDetailContainer>
  )
}

const ContactPageContainer = styled.div<MediaProps>`
  padding: ${Theme.space.$5} 0 0;
  display: flex;
  flex-direction: column;

  gap: ${(props) => (props.media.md ? null : '30px')};
`

const Contact = ({toast}: any) => {
  const media = useMedia()
  return (
    <ContactPageContainer media={media}>
      <div>
        <HStack
          justify={media.md ? 'center' : 'flex-start'}
          align="center"
          style={{paddingLeft: Theme.space.$9, paddingTop: Theme.space.$5}}
        >
          <TitleContainer title="Contact Us" size="xl" />
        </HStack>

        <HorStack media={media}>
          <ContactLeft media={media}>
            <ContactUs toast={toast}></ContactUs>
          </ContactLeft>

          <ContactRight>
            <ContactUsDescription />
          </ContactRight>
        </HorStack>
      </div>

      <MapWithNoSSR location={[51.505, -0.09]} popupText="Attorney Bhurtel" />
    </ContactPageContainer>
  )
}

export default Contact
