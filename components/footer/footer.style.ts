import styled from 'styled-components'

import Theme from 'theme'

export const FooterContainerStyled = styled.div`
  padding: ${Theme.space.$15} ${Theme.space.$14};
  background-color: ${Theme.colors.$gray100};
`
export const FooterLogo = styled.img`
  height: 30px;
  width: 100px;
`
export const FooterText = styled.p`
  font-size: ${Theme.fontSizes.$4};
  color: ${Theme.colors.$gray400};
  line-height: 178.02%;
`

export const CategoryTitle = styled.p`
 font-size:${Theme.fontSizes.$3}
 color:${Theme.colors.$gray800};
 font-weight:${Theme.fontWeights.$medium};
 text-transform: uppercase;

`
export const FlexBox = styled.div`
  justify-content: center;
  align-items: center;
`
