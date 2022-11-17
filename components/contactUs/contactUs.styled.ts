import styled from 'styled-components'

import Theme from 'theme'
import {MediaReturn} from 'hooks'
import React from 'react'

export const ContactContainer = styled.div`
  padding: ${Theme.space.$6} ${Theme.space.$7};
  border-radius: ${Theme.radius.$default};

  border: 1px solid ${Theme.colors.$gray200};
`

interface HFlexProps extends React.ComponentPropsWithoutRef<'div'> {
  media: MediaReturn
}

export const HFlex = styled.div<HFlexProps>`
  display: flex;

  gap: 15px;
  flex-direction: ${(props) => (props.media.xs ? 'column' : 'row')};
`
