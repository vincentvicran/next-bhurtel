import styled from 'styled-components'

import Theme from 'theme'

import {TitleProps} from './title.types'

export const TitleContainer = styled.h1<TitleProps>`
  display: inline-block;
  font-weight: ${(props) => {
    if (props.weight === 'bold') {
      return Theme.fontWeights.$bold
    } else if (props.weight === 'semibold') {
      return Theme.fontWeights.$semibold
    } else {
      return Theme.fontWeights.$normal
    }
  }};
  font-size: ${(props) => {
    if (props.size === 'sm') {
      return Theme.fontSizes.$2
    } else if (props.size === 'md') {
      return Theme.fontSizes.$4
    } else if (props.size === 'xl') {
      return Theme.fontSizes.$7
    } else if (props.size === 'lg') {
      return Theme.fontSizes.$6
    }
  }};
`
