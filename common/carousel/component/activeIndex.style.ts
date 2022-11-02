import styled from 'styled-components'

export const ActiveIndexStyle = styled.div`
  display: flex;
`
export const ActiveIndexDot = styled.div`
  width: 9px;
  height: 6px;
  border-radius: 2px;
  background: $grey400;
  margin: 0px 4px;
  transition: width 0.2s;
  cursor: pointer;
  user-select: none;
`
