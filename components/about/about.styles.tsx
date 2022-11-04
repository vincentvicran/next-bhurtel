import styled from 'styled-components'
import Theme from 'theme'

export const AboutCont = styled.div<{md: boolean}>`
  display: flex;
  justify-content: space-between;
  gap: ${Theme.space.$14};
  margin: ${Theme.space.$14} 0;
  flex-direction: ${(props) => {
    if (props.md) {
      return 'row'
    } else {
      return 'column'
    }
  }};
`
export const LeftCont = styled.div`
  flex: 1.3;
`
export const RightCont = styled.div`
  flex: 1;
`
