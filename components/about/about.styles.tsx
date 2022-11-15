import styled from 'styled-components'
import Theme from 'theme'

export const AboutCont = styled.div<{md: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => (props.md ? Theme.space.$14 : Theme.space.$7)};
  flex-direction: ${(props) => {
    if (props.md) {
      return 'row'
    } else {
      return 'column'
    }
  }};
  margin-top: 80px;
`
export const LeftCont = styled.div`
  flex: 1;
`
export const RightCont = styled.div`
  flex: 1.2;
`
