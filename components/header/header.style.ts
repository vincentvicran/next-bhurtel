import styled from 'styled-components'
import Theme from 'theme'

export const HeaderContainer = styled.div`
  padding: ${Theme.space.$10} 0;
  background-color: ${Theme.colors.$gray100};
`
export const HeaderLogo = styled.img`
  height: ${Theme.space.$10};
  /* width: ${Theme.space.$17}; */
`

export const Menuitem = styled.a`
  font-weight: ${Theme.fontWeights.$normal};
  font-size: ${Theme.fontSizes.$3};
  cursor: pointer;
  color: ${Theme.colors.$gray800};
`

export const Search = styled.div`
  margin-left: auto;
`
