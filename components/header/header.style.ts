import styled from 'styled-components'
import Theme from 'theme'

export const HeaderContainer = styled.div`
  padding: ${Theme.space.$13} ${Theme.space.$12};
`
export const HeaderLogo = styled.img`
  height: ${Theme.space.$7};
  width: ${Theme.space.$17};
`

export const Menuitem = styled.p`
  font-weight: ${Theme.fontWeights.$normal};
  font-size: ${Theme.fontSizes.$3};
  cursor: pointer;
`

export const Search = styled.div`
  margin-left: auto;
`
