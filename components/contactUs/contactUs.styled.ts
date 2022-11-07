import styled from 'styled-components'
import {useMediaProps} from 'components/footer'

import Theme from 'theme'

export const ContactContainer = styled.div`
  padding: ${Theme.space.$6} ${Theme.space.$7};
  border-radius: ${Theme.radius.$default};

  border: 1px solid ${Theme.colors.$gray200};
`

export const HFlex = styled.div<useMediaProps>`
  display: flex;

  gap: 15px;
  flex-direction: ${(props) => (props.media.xs ? 'column' : 'row')};
`
