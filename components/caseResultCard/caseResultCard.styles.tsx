import styled from 'styled-components'
import Theme from 'theme'

export const CaseResCard = styled.div`
  border: 1px solid ${Theme.colors.$borderPrimary};
  border-radius: ${Theme.radius.$default};
  padding: ${Theme.space.$4};
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    border-color: ${Theme.colors.$gray400};
  }
`
