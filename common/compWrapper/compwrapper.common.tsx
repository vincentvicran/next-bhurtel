import React from 'react'
import {CompWrapperContainer} from './compwrapper.styles'

interface ChildrenProps {
  children: React.ReactNode
}

export const CompWrapper = ({children}: ChildrenProps) => {
  return <CompWrapperContainer>{children}</CompWrapperContainer>
}
