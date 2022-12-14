import styled from 'styled-components'
import Theme from 'theme'
import {MediaProps} from './footer.component'

export const FooterContainerStyled = styled.div`
  padding: ${Theme.space.$15} 0;
  background-color: ${Theme.colors.$gray100};
`
export const FooterLogo = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: ${Theme.space.$10};
  margin-top: -9px;
`
export const FooterText = styled.p`
  font-size: ${Theme.fontSizes.$4};
  color: ${Theme.colors.$gray400};
  line-height: 178.02%;
`

export const CategoryTitle = styled.p`
  font-size: ${Theme.fontSizes.$3};
  color: ${Theme.colors.$gray800};
  font-weight: ${Theme.fontWeights.$medium};
  text-transform: uppercase;
`
export const FlexBox = styled.div<MediaProps>`
  display: flex;
  align-items: ${(props) => (props.media.md ? 'stretch' : 'space-between')};
  justify-content: center;
  gap: ${(props) => (props.media.md ? '80px' : '40px')};
  flex-direction: ${(props) => (props.media.md ? 'row' : 'column')};
`

export const HorizontalFlex = styled.div<MediaProps>`
  display: flex;
  gap: ${(props) => (props.media.md ? '20px' : '30px')};
  flex: 1.8;
  justify-content: space-between;
  // flex-direction: ${(props) => (props.media.xs ? 'column' : 'row')};
  flex-wrap: wrap;
`

export const VericalFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
`
export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`
