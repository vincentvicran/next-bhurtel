import React from 'react'
import {FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa'

import {
  FooterContainerStyled,
  FooterLogo,
  FooterText,
  CategoryTitle
} from './footer.style'
import {HStack, VStack} from 'common/stack'

interface FooterProps {
  image: string
}

interface SocialIconsProps {
  icons: React.ReactNode
  bgcolor: string
}

export const Footer = ({image}: FooterProps) => {
  return (
    <FooterContainerStyled>
      <HStack justify="space-between">
        <VStack gap="$3">
          <FooterLogo src={image} />
          <FooterText>
            Lorem ipsum dolor sit am et consectetur adi pisicing elit. Tempor
            ibus, eius? Consectetur eligendi vitae magni aliqui d maiores
            molestiae sunt sed unde optio omnis quos doloru m iste at, dolore
            possimus? Vitae, quae?
          </FooterText>
          <HStack gap="$8" align="center">
            <SocialIcon bgcolor="#1DA1F2" icons={<FaTwitter color="white" />} />
            <SocialIcon
              bgcolor="#4267B2"
              icons={<FaFacebookF color="white" />}
            />
            <SocialIcon bgcolor="#FF0000" icons={<FaYoutube color="white" />} />
            <SocialIcon
              bgcolor="#0A66C2"
              icons={<FaLinkedinIn color="white" />}
            />
          </HStack>

          <FooterText>
            Copyright © 2022 Queens Personal Injury Lawyer
          </FooterText>
        </VStack>
        <HStack gap="$5" style={{width: '40%'}}>
          <VStack>
            <VStack gap="$1">
              <CategoryTitle>Personal Injury</CategoryTitle>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
            </VStack>
          </VStack>

          <VStack>
            <VStack gap="$7">
              <CategoryTitle>Personal Injury</CategoryTitle>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
            </VStack>
          </VStack>

          <VStack>
            <VStack gap="$7">
              <CategoryTitle>Personal Injury</CategoryTitle>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
              <FooterText>Auto Accidents</FooterText>
            </VStack>
          </VStack>
        </HStack>
      </HStack>
    </FooterContainerStyled>
  )
}

const SocialIcon = ({icons, bgcolor}: SocialIconsProps) => (
  <HStack
    justify="center"
    align="center"
    style={{
      backgroundColor: bgcolor,
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      borderRadius: '50%'
    }}
  >
    {icons}
  </HStack>
)
