import React, {useEffect} from 'react'
import {FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn} from 'react-icons/fa'
import {TbPhoneCall} from 'react-icons/tb'
import {useMedia} from 'hooks'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {useRouter} from 'next/router'
import Image from 'next/image'
import attorney from 'assets/images/attorney.png'
import {useDispatch, useSelector} from 'store'

import {
  FooterContainerStyled,
  FooterLogo,
  FlexBox,
  HorizontalFlex,
  VericalFlex,
  PhoneContainer
} from './footer.style'
import {HStack, VStack} from 'common/stack'
import {CompWrapper} from 'common/compWrapper'
import {getCommonDescription} from 'redux/commonDescription/commonDescription.slice'
import Link from 'next/link'
import {getMenuLink} from 'helpers/getNavLink.helper'

interface FooterProps {
  image: string
}

interface SocialIconsProps {
  icons: React.ReactNode
  bgcolor: string
}

export interface MediaProps {
  media: {
    xl: boolean
    lg: boolean
    md: boolean
    sm: boolean
    xs: boolean
  }
}

export const Footer = ({image}: FooterProps) => {
  const router = useRouter()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCommonDescription())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const media = useMedia()
  const quickLinks = useSelector((state) => state.commonDescription)
  console.log(quickLinks.commonDescriptionData.data, 'quicklinks is called')
  return (
    <FooterContainerStyled>
      <CompWrapper>
        <FlexBox media={media}>
          <VericalFlex>
            <FooterLogo>
              <Image
                src={attorney}
                alt="logo"
                objectFit="contain"
                width="150"
                height="80"
              />
            </FooterLogo>
            <Paragraph color="light">
              Mr. Durga Prasad Bhurtel Successfully Represented Various Clients
              for Injury Claims. Affects, Signs & Sources of Lead Paint
              (Poisoning) in Children. Your first medical diagnosis is probably
              wrong, according to Mayo Clinic. Construction Worker Accident and
              Injury? Know your rights for help you may need.
            </Paragraph>
            <HStack gap="$8" align="center">
              <SocialIcon
                bgcolor="#1DA1F2"
                icons={<FaTwitter color="white" />}
              />
              <SocialIcon
                bgcolor="#4267B2"
                icons={<FaFacebookF color="white" />}
              />
              <SocialIcon
                bgcolor="#FF0000"
                icons={<FaYoutube color="white" />}
              />
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
              <Title size="md" text="Quick Links" weight="semibold" />
              <VStack gap="$1">
                <Link
                  href={getMenuLink(
                    'practice_areas',
                    quickLinks?.commonDescriptionData?.data?.practice?.rows
                  )}
                >
                  <Paragraph color="light" style={{cursor: 'pointer'}}>
                    Practice Areas
                  </Paragraph>
                </Link>

                <Link
                  href={getMenuLink(
                    'personal_injury',
                    quickLinks?.commonDescriptionData?.data?.personal?.rows
                  )}
                >
                  <Paragraph color="light" style={{cursor: 'pointer'}}>
                    Personal Injury
                  </Paragraph>
                </Link>

                <Paragraph
                  color="light"
                  style={{cursor: 'pointer'}}
                  onClick={() => router.push({pathname: '/case-results'})}
                >
                  Case Results
                </Paragraph>

                <Paragraph
                  color="light"
                  style={{cursor: 'pointer'}}
                  onClick={() => router.push({pathname: '/about'})}
                >
                  About
                </Paragraph>
                <Link
                  href={getMenuLink(
                    'news',
                    quickLinks?.commonDescriptionData?.data?.news?.rows
                  )}
                >
                  <Paragraph color="light" style={{cursor: 'pointer'}}>
                    News
                  </Paragraph>
                </Link>
              </VStack>
            </VStack>

            <VStack gap="$3">
              <Title size="md" weight="semibold" text="Call Us" />
              <VStack gap="$1">
                <Paragraph color="light">
                  <a href="tel:+212-461-4628" style={{color: 'inherit'}}>
                    <PhoneContainer>
                      <TbPhoneCall size={16} />
                      +2124614628
                    </PhoneContainer>
                  </a>
                </Paragraph>
              </VStack>
            </VStack>

            <VStack gap="$3">
              <Title size="md" weight="semibold" text="Email Us" />
              <VStack gap="$1">
                <Paragraph color="light">info@attorneybhurtel.com</Paragraph>
              </VStack>
            </VStack>
            <VStack gap="$3">
              <Title size="md" text="Visit Us" weight="semibold" />
              <VStack gap="$1">
                <Paragraph color="light">Manhattan Office</Paragraph>
                <Paragraph color="light">Bhurtel Law Firm PLLC </Paragraph>
                <Paragraph color="light">
                  353 Lexington Avenue suite #904
                </Paragraph>
                <Paragraph color="light">New York NY 10016</Paragraph>
              </VStack>
            </VStack>
          </HorizontalFlex>
        </FlexBox>
      </CompWrapper>
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
