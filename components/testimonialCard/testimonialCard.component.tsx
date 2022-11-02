import React from 'react'
import {HStack, VStack} from 'common/stack'

import {
  TestimonialCardContainer,
  CircularImg,
  TestimonialName,
  TestimonialAddress,
  TestimonialDescription
} from './testimonialCard.style'

interface TestimonialCardProps {
  image: string
  name: string
  address: string
  description: string
}

export const TestimonialCard = ({
  image,
  name,
  address,
  description
}: TestimonialCardProps) => {
  return (
    <TestimonialCardContainer>
      <VStack gap="$5">
        <HStack gap="$10" justify="flex-start" align="center">
          <CircularImg src={image}></CircularImg>
          <div>
            <TestimonialName>{name}</TestimonialName>
            <TestimonialAddress>{address}</TestimonialAddress>
          </div>
        </HStack>

        <TestimonialDescription>{description}"</TestimonialDescription>
      </VStack>
    </TestimonialCardContainer>
  )
}
