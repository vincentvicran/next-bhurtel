import React from 'react'
import {ActiveIndexStyle} from './activeIndex.style'

interface ActiveIndexProps {
  activeIndex: number
  length: number
  setActiveIndex: (id: number) => void
}

export const ActiveIndex = ({
  activeIndex,
  length,
  setActiveIndex
}: ActiveIndexProps) => {
  return (
    // <div className="activeindex">
    <ActiveIndexStyle>
      {Array(length)
        .fill(0)
        .map((_, i: number) => (
          <div
            className={
              activeIndex === i ? 'activeindex-dot active' : 'activeindex-dot'
            }
            onClick={() => setActiveIndex(i)}
            key={i}
          />
        ))}
    </ActiveIndexStyle>
    // </div>
  )
}
