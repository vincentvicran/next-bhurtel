import {IconButton} from 'common/button'
import React from 'react'
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from 'react-icons/io'
import styled, {css} from 'styled-components'

import Theme from 'theme'

interface NavArrow extends React.ComponentPropsWithoutRef<'div'> {
  direction: 'prev' | 'next'
}

export const NavArrow = ({direction, ...props}: NavArrow) => {
  return (
    <NavArrowContainer className="slick-arrow" direction={direction} {...props}>
      <IconButton
        hoverColor="black"
        style={{height: 40, width: 40}}
        icon={
          direction === 'next' ? (
            <IoIosArrowRoundForward />
          ) : (
            <IoIosArrowRoundBack />
          )
        }
        background={Theme.colors.$backgroundPrimary}
      />
    </NavArrowContainer>
  )
}

const NavArrowContainer = styled.div<NavArrow>`
  width: 60px;
  height: 60px;
  position: absolute;
  z-index: 2;
  opacity: 0.7;
  ${({direction}) =>
    direction === 'next'
      ? css`
          right: 20px;
        `
      : css`
          left: 20px;
        `}
`
