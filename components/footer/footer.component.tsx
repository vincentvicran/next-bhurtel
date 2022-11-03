import React from 'react'
import {FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa'
import {useMedia} from 'hooks'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {
  FooterContainerStyled,
  FooterLogo,
  FlexBox,
  HorizontalFlex,
  VericalFlex
} from './footer.style'
import {HStack, VStack} from 'common/stack'

interface FooterProps {
  image: string
}

interface SocialIconsProps {
  icons: React.ReactNode
  bgcolor: string
}

export interface useMediaProps {
  media: {
    xl: boolean
    lg: boolean
    md: boolean
    sm: boolean
    xs: boolean
  }
}

export const Footer = ({image}: FooterProps) => {
  const media = useMedia()
  console.log(media, 'media')
  return (
    <FooterContainerStyled>
      <FlexBox media={media}>
        <VericalFlex>
          <FooterLogo src={image} />
          <Paragraph color="light">
            Lorem ipsum dolor sit am et consectetur adi pisicing elit. Tempor
            ibus, eius? Consectetur eligendi vitae magni aliqui d maiores
            molestiae sunt sed unde optio omnis quos doloru m iste at, dolore
            possimus? Vitae, quae?
          </Paragraph>
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

          <Paragraph color="light" style={{textAlign: 'left'}}>
            Copyright © 2022 Queens Personal Injury Lawyer
          </Paragraph>
        </VericalFlex>

        <HorizontalFlex media={media}>
          <VStack gap="$3">
            <Title size="md" text="Personal Injury" weight="semibold" />
            <VStack gap="$1">
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
            </VStack>
          </VStack>

          <VStack gap="$3">
            <Title size="md" weight="semibold" text="Personal Injury" />
            <VStack gap="$1">
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
            </VStack>
          </VStack>

          <VStack gap="$3">
            <Title size="md" weight="semibold" text="Personal Injury" />
            <VStack gap="$1">
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
              <Paragraph color="light">Auto Accidents</Paragraph>
            </VStack>
          </VStack>
        </HorizontalFlex>
      </FlexBox>
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
