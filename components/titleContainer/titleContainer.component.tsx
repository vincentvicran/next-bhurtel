import {Title} from 'components/title/title.component'
import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'

export const TitleContainer = ({
  title,
  size = 'lg',
  underlineWidth
}: {
  title: string
  size?: 'lg' | 'md' | 'sm' | 'xl'
  underlineWidth?: string
}) => {
  return (
    <TitleContainerStyled>
      <Title text={title} size={size} weight="semibold" />
      <Underline underlineWidth={underlineWidth} />
    </TitleContainerStyled>
  )
}

interface UnderlineProps {
  underlineWidth?: string
}

export const Underline = styled.div<UnderlineProps>`
  width: ${({underlineWidth}) => underlineWidth ?? `calc(100% - 10px)`};
  height: 4px;
  background-color: #d9d9d9;
`
export const TitleContainerStyled = styled.div`
  margin-bottom: ${Theme.space.$8};
  display: inline-block;
`
