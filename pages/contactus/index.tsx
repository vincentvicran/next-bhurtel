import React from 'react'
import styled from 'styled-components'

import Theme from 'theme'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {VericalFlex} from 'components/footer/footer.style'

interface ContactUsTitleProps {
  title: string
  description: React.ReactNode
  width: string
}

const ContactTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: ${Theme.space.$2};
`
const ContactUsDetailContainer = styled.div`
  padding: ${Theme.space.$11} ${Theme.space.$16};
  background-color: #1c9ed1;
  color: white !important;
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
const ContactusTitle = ({title, description, width}: ContactUsTitleProps) => {
  return (
    <ContactTitleContainer>
      <div>
        <Title size="lg" weight="bold" text={`${title} Us`} />
        <Underline width={width} />
      </div>

      {description}
    </ContactTitleContainer>
  )
}

const ContactUsDescription = () => {
  return (
    <ContactUsDetailContainer>
      <VericalFlex>
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
              <ContactParagraph color="light" wei>
                Manhattan Office
              </ContactParagraph>
              <ContactParagraph color="light">
                Bhurtel Law Firm PLLC
              </ContactParagraph>
              <ContactParagraph color="light">
                353 Lexington Avenue suite #904
              </ContactParagraph>
              <ContactParagraph color="light">
                New York NY 10016"
              </ContactParagraph>
            </>
          }
          width="50px"
        />
      </VericalFlex>
    </ContactUsDetailContainer>
  )
}

const Contact = () => {
  return (
    <>
      <ContactusTitle
        title="Contact"
        description={
          <Paragraph color="dark">
            Contact Us today to start adding value to your business.
          </Paragraph>
        }
        width="100px"
      />
      <ContactUsDescription />
    </>
  )
}

export default Contact
