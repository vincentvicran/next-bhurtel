import React from 'react'

export interface TitleProps {
  size: 'sm' | 'md' | 'lg' | 'xl'
  style?: React.CSSProperties
  weight?: 'bold' | 'semibold' | 'normal'
  text: string
}
