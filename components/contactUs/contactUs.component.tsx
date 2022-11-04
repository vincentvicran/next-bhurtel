import {VStack} from 'common/stack'
import {InputField, Textarea} from 'components/inputField'
import React from 'react'
import {ContactContainer, HFlex} from './contactUs.styled'
import {Button} from 'common/button'
import {useMedia} from 'hooks'

export const ContactUs = () => {
  const media = useMedia()
  return (
    <ContactContainer>
      <VStack gap={media.xs ? '$3' : '$8'}>
        <VStack gap="$3">
          <HFlex media={media}>
            <InputField labelName="First Name"></InputField>
            <InputField labelName="Last Name"></InputField>
          </HFlex>
          <InputField labelName="Email"></InputField>
          <InputField labelName="Phone Number"></InputField>
          <Textarea labelName="Message"></Textarea>
        </VStack>

        <Button
          title="Submit"
          color="primary"
          variant="contained"
          style={{width: '100%'}}
        ></Button>
      </VStack>
    </ContactContainer>
  )
}
