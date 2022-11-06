import {VStack} from 'common/stack'
import {InputField, Textarea} from 'components/inputField'
import React from 'react'
import {ContactContainer, HFlex} from './contactUs.styled'
import {Button} from 'common/button'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'

export const ContactUs = () => {
  return (
    <ContactContainer>
      <VStack gap="$7">
        <VStack gap="$5">
          <Paragraph color="light">CONTACT</Paragraph>
          <Title text="Let's talk" size="lg" weight="bold"></Title>
          <Paragraph color="light" style={{textAlign: 'left'}}>
            Contact Us today to start adding value to your business.
          </Paragraph>
        </VStack>
        <VStack gap="$5">
          <InputField placeholder="Full Name"></InputField>
          <InputField placeholder="Email Address"></InputField>
          <Textarea placeholder="Type your message here..."></Textarea>

          <Button
            title="Send Message"
            color="primary"
            variant="contained"
          ></Button>
        </VStack>
      </VStack>
    </ContactContainer>
  )
}
