import {Title} from 'components/title'
import Theme from 'theme'
import moment from 'moment'
import {
  DescAuthor,
  DescContainer,
  DescImg,
  DescParagraph
} from './descriptionCard.styles'

interface DescProps {
  imgUrl?: string
  title: string
  desc: string
  author: string
  date: Date
}
export function DescriptionCard(props: DescProps) {
  return (
    <DescContainer>
      <DescImg src={props.imgUrl} alt="car" />
      <Title
        text={moment(props.date).format('DD MMM, YYYY')}
        size="sm"
        style={{
          color: Theme.colors.$gray600,
          margin: '10px 0 5px',
          fontStyle: 'italic'
        }}
      />
      <Title text={props.title} size="md" weight="semibold" />
      <DescParagraph>{props.desc}</DescParagraph>
      <DescAuthor>{props.author}</DescAuthor>
    </DescContainer>
  )
}
