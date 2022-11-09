import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'

export const HeaderContainer = styled.div`
  padding: ${Theme.space.$10} 0;
  background-color: ${Theme.colors.$gray100};
`
export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  cursor: pointer;
`

// REDO
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${Theme.space.$16};
`

export const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${Theme.space.$5};
`
export const HeaderItem = styled.div`
  color: ${Theme.colors.$gray700};
  text-transform: uppercase;
  font-size: ${Theme.fontSizes.$2};
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  &:hover > div {
    opacity: 1;
    transform: translateY(0px);
    visibility: visible;
  }

  & > svg {
    transition: 0.4s ease;
  }

  &:hover > svg {
    transform: rotate(180deg);
  }

  &:hover {
    color: ${Theme.colors.$primary};
  }
`
export const MainHoverContainer = styled.div<{style?: React.CSSProperties}>`
  position: absolute;
  display: flex;
  top: 130%;

  width: 40vw;
  flex-direction: column;
  height: 300px;
  gap: ${Theme.space.$3};
  flex-wrap: wrap;
  justify-content: flex-start;

  flex: 1;
  background: white;
  border-radius: ${Theme.radius.$default};
  z-index: 10;
  opacity: 0;
  transition: 0.4s ease;
  transform: translateY(8px);
  // width: max-content;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border: 1px solid ${Theme.colors.$gray200};
  /* overflow: hidden; */
  visibility: hidden;
  padding: 30px;

  &::before {
    content: '';
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    top: -8px;

    right: ${(props) => props.style?.right && 'calc(20px)'};

    background: white;
    transform: rotate(45deg);
    border-top-left-radius: ${Theme.radius.$default};
    border-top: 1px solid ${Theme.colors.$gray200};
    border-left: 1px solid ${Theme.colors.$gray200};
  }
`
export const HoverText = styled.div`
  font-size: ${Theme.fontSizes.$3};
  text-transform: capitalize;
  // border-bottom: 1px solid ${Theme.colors.$gray100};
  // padding: 7px 20px;
  color: ${Theme.colors.$gray600};
  position: relative;

  align-items: center;
  gap: 10px;
  justify-content: space-between;

  &:hover {
    color: ${Theme.colors.$pr};
  }

  // &:hover > div {
  //   opacity: 1;
  //   transform: translateY(0px);
  //   visibility: visible;
  // }
`

export const NestedHoverText = styled.p`
  font-size: ${Theme.fontSizes.$3};
  text-transform: capitalize;
  // border-bottom: 1px solid ${Theme.colors.$gray100};
  // padding: 7px 20px;
  color: ${Theme.colors.$gray400};
  position: relative;

  align-items: center;
  gap: 6px;
  justify-content: space-between;

  &:hover {
    color: ${Theme.colors.$gray800};
  }
`
