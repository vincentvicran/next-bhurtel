import styled from 'styled-components'
import Theme from 'theme'

interface ParaProps {
  color: 'dark' | 'light'
}
export const ParaCont = styled.div<ParaProps>`
  color: ${(props) => {
    if (props.color === 'light') {
      return Theme.colors.$gray600
    } else if (props.color === 'dark') {
      return Theme.colors.$gray800
    }
  }};
  font-size: ${Theme.fontSizes.$3};
  line-height: 1.7;
  text-align: justify;
`
