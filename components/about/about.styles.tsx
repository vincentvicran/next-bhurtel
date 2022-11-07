import styled from 'styled-components'
import Theme from 'theme'

export const AboutCont = styled.div<{md: boolean}>`
  display: flex;
  justify-content: space-between;
  gap: ${Theme.space.$14};
  margin-bottom: ${Theme.space.$14};
  flex-direction: ${(props) => {
    if (props.md) {
      return 'row'
    } else {
      return 'column'
    }
  }};
`
export const LeftCont = styled.div`
  flex: 1;
`
export const RightCont = styled.div`
  flex: 1.2;
`
