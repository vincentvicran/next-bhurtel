import styled from 'styled-components'
import Theme from 'theme'

export const HeaderContainer = styled.div`
  padding: ${Theme.space.$13} ${Theme.space.$14};
`
export const HeaderLogo = styled.div`
  color: ${Theme.colors.$gray800};
  font-size: ${Theme.fontSizes.$8};
  font-weight: ${Theme.fontWeights.$semibold};
  cursor: pointer;
`

export const Menuitem = styled.p`
  font-weight: ${Theme.fontWeights.$normal};
  font-size: ${Theme.fontSizes.$3};
  cursor: pointer;
`

export const Search = styled.div`
  margin-left: auto;
`
