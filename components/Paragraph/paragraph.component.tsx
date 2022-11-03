import {ParaCont} from './paragraph.styles'

interface ParaProps {
  color: 'dark' | 'light'
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function Paragraph(props: ParaProps) {
  return <ParaCont {...props}></ParaCont>
}
