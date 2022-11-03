import styled from 'styled-components'

import Theme from 'theme'

import {TitleProps} from './title.types'

export const TitleContainer = styled.h1<TitleProps>`
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
      return Theme.fontSizes.$4
    } else if (props.size === 'md') {
      return Theme.fontSizes.$6
    } else if (props.size === 'lg') {
      return Theme.fontSizes.$8_25
    }
  }};
`
