import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'
import styled from 'styled-components'

import Theme from 'theme'

export const TestimonialCardContainer = styled.div`
  border: 1px solid ${Theme.colors.$gray200};
  border-radius: ${Theme.radius.$default};
  padding: ${Theme.space.$4} ${Theme.space.$6};
  min-height: 60px;
`

export const ImgContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  overflow: hidden;
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

// TESTIMONIAL TOP CONTAINER
export const TopContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`
export const BottomContainer = styled.div`
  display: flex;
  gap: ${Theme.space.$4};
  align-items: center;
  margin-bottom: ${Theme.space.$10};
`

export const QuoteOpen = styled(RiDoubleQuotesL)`
  color: ${Theme.colors.$gray200};
  font-size: 20px;
  position: absolute;
  z-index: 4;
  display: inline;
  margin-left: -20px;
  margin-top: -10px;
`
export const QuoteClose = styled(RiDoubleQuotesR)`
  color: ${Theme.colors.$gray200};
  font-size: 20px;
  position: absolute;
  z-index: 4;
  /* bottom: -10px;
  right: -5px; */
  display: inline;
  margin-top: 7px;
  margin-left: 2px;
`
