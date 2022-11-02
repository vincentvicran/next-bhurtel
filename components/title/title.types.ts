import React from 'react'

export interface TitleProps {
  size: 'sm' | 'md' | 'lg'
  style?: React.CSSProperties
  weight?: 'bold' | 'semibold' | 'normal'
  text: string
}
