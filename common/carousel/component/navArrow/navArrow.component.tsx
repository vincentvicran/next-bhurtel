import {IconButton} from 'common/button'
import React from 'react'
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from 'react-icons/io'
import styled, {css} from 'styled-components'

interface NavArrow extends React.ComponentPropsWithoutRef<'div'> {
  direction: 'prev' | 'next'
}

export const NavArrow = ({direction, ...props}: NavArrow) => {
  return (
    <NavArrowContainer className="slick-arrow" direction={direction} {...props}>
      <IconButton
        style={{height: 40, width: 40}}
        icon={
          direction === 'next' ? (
            <IoIosArrowRoundForward />
          ) : (
            <IoIosArrowRoundBack />
          )
        }
        background="#ff00ff"
      />
    </NavArrowContainer>
  )
}

const NavArrowContainer = styled.div<NavArrow>`
  width: 60px;
  height: 60px;
  position: absolute;
  z-index: 2;
  ${({direction}) =>
    direction === 'next'
      ? css`
          right: 20px;
        `
      : css`
          left: 20px;
        `}
`
