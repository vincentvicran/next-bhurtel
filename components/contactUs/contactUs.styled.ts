import styled from 'styled-components'
import {useMediaProps} from 'components/footer'

import Theme from 'theme'

export const ContactContainer = styled.div`
  padding: ${Theme.space.$12} ${Theme.space.$14};
  backgorund-color: ${Theme.colors.$gray300};
`

export const HFlex = styled.div<useMediaProps>`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  flex-direction: ${(props) => (props.media.xs ? 'column' : 'row')};
`
