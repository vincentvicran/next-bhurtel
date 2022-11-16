import Image from 'next/image'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import user from 'assets/images/user.png'
import Theme from 'theme'

import {
  TestimonialCardContainer,
  TopContainer,
  QuoteOpen,
  QuoteClose,
  BottomContainer,
  ImgContainer
} from './testimonialCard.style'

interface TestimonialCardProps {
  image: string
  name: string
  description: string
}

export const TestimonialCard = ({
  image,
  name,
  description
}: TestimonialCardProps) => {
  return (
    <TestimonialCardContainer>
      <BottomContainer>
        <ImgContainer>
          <Image
            src={image}
            alt={`testimonial`}
            layout={`fill`}
            objectFit={`cover`}
            placeholder="blur"
            blurDataURL={user.src}
          />
        </ImgContainer>
        <div>
          <Title text={name} size={`sm`} weight={`bold`} />
        </div>
      </BottomContainer>
      <TopContainer>
        <Paragraph
          color={`light`}
          style={{
            position: 'relative',
            zIndex: 6,
            fontStyle: `italic`,
            textAlign: `left`,
            fontSize: Theme.fontSizes.$2,
            width: '90%',
            margin: '0 auto'
          }}
        >
          <QuoteOpen />
          {description}
          <QuoteClose />
        </Paragraph>
      </TopContainer>
    </TestimonialCardContainer>
  )
}
