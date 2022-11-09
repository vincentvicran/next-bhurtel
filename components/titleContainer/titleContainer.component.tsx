import {Title} from 'components/title/title.component'
import React from 'react'
import styled from 'styled-components'
import Theme from 'theme'

export const TitleContainer = ({
  title,
  size = 'lg'
}: {
  title: string
  size?: 'lg' | 'md' | 'sm' | 'xl'
}) => {
  return (
    <TitleContainerStyled>
      <Title text={title} size={size} weight="semibold" />
      <Underline />
    </TitleContainerStyled>
  )
}

export const Underline = styled.div`
  width: calc(100% - 10px);
  height: 4px;
  background-color: #d9d9d9;
`
export const TitleContainerStyled = styled.div`
  margin-bottom: ${Theme.space.$8};
  display: inline-block;
`
