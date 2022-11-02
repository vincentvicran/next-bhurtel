import styled from 'styled-components'
import Theme from 'theme'

export const TestimonialCardContainer = styled.div`
  border: 1px solid ${Theme.colors.$gray200};
  border-radius: ${Theme.radius.$default};
  padding: ${Theme.space.$9} ${Theme.space.$10};
  margin: ${Theme.space.$5};
`

export const CircularImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: block;
  object-fit: cover;
`
export const TestimonialName = styled.p`
  font-weight: ${Theme.fontWeights.$medium};
  font-size: ${Theme.fontSizes.$4};
  line-height: ${Theme.lineHeights.$heading};
`

export const TestimonialAddress = styled.p`
  font-size: ${Theme.fontSizes.$3};
  color: ${Theme.colors.$gray400};
`

export const TestimonialDescription = styled.p`
  font-weight: ${Theme.fontWeights.$normal};
  font-size: ${Theme.fontSizes.$3};
  line-height: ${Theme.lineHeights.$default};
  color: ${Theme.colors.$gray800};
  text-align: justify;
`
