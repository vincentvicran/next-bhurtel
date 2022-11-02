import {TitleContainer} from './title.styles'
import {TitleProps} from './title.types'

//  sizes 36, 20, 16
export function Title(props: TitleProps) {
  return <TitleContainer {...props}>{props.text}</TitleContainer>
}
