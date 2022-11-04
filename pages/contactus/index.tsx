import React from 'react'
import styled from 'styled-components'

import Theme from 'theme'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'

const ContactTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${Theme.space.$2};
`

const Underline = styled.div`
  width: 100px;
  height: 4px;
  background-color: #d9d9d9;
`

const Contactus = () => {
  return (
    <ContactTitleContainer>
      <div>
        <Title size="lg" weight="bold" text="Contact Us" />
        <Underline />
      </div>
      <Paragraph color="dark">
        Contact Us today to start adding value to your business.
      </Paragraph>
    </ContactTitleContainer>
  )
}

export default Contactus
