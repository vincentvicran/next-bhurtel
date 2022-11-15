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
    box-shadow: 4px 5px 4px -4px rgba(89, 57, 57, 0.75);
    -webkit-box-shadow: 4px 5px 4px -4px rgba(89, 57, 57, 0.75);
    -moz-box-shadow: 4px 5px 4px -4px rgba(89, 57, 57, 0.75);
  }
`
export const CaseResDesc = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
