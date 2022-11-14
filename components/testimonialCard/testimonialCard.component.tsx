import {
  TestimonialCardContainer,
  TopContainer,
  QuoteOpen,
  QuoteClose,
  BottomContainer,
  ImgContainer
} from './testimonialCard.style'
import {Paragraph} from 'components/Paragraph'
import Image from 'next/image'
import {Title} from 'components/title'
import Theme from 'theme'

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
      <BottomContainer>
        <ImgContainer>
          <Image
            src={image}
            alt={`testimonial`}
            layout={`fill`}
            objectFit={`cover`}
          />
        </ImgContainer>
        <div>
          <Title text={name} size={`sm`} weight={`bold`} />
          <Paragraph
            color={`light`}
            style={{fontSize: Theme.fontSizes.$2, marginTop: -4}}
          >
            Chandragiri-14, Kathmandu
          </Paragraph>
        </div>
      </BottomContainer>
      <TopContainer>
        <QuoteOpen />
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
          This is demo testimonial for Bhurtel Law firm website produced by
          Codniv Innovations Pvt. Ltd., Nepal. the main purpose of this demo
          testimonial is to test how it appears in the actual design This is
          demo testimonial for Bhurtel Law firm website produced by Codniv
          Innovations Pvt. Ltd., Nepal. the main purpose of this demo
          testimonial is to test how it appears in the actual design
        </Paragraph>
        <QuoteClose />
      </TopContainer>
    </TestimonialCardContainer>
  )
}
