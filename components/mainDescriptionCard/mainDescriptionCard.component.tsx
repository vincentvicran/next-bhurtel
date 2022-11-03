import {Title} from 'components/title'
import Theme from 'theme'
import moment from 'moment'
import {
  DescAuthor,
  DescContainer,
  DescImg,
  DescParagraph,
  ImgContainer,
  RightSection
} from './mainDescriptionCard.styles'

interface DescProps {
  imgUrl?: string
  title: string
  desc: string
  author: string
  date: Date
}
export function MainDescriptionCard(props: DescProps) {
  return (
    <DescContainer>
      <ImgContainer style={{flex: 1.2}}>
        <DescImg src={props.imgUrl} alt="car" />
      </ImgContainer>
      <RightSection>
        <Title
          text={moment(props.date).format('DD MMM, YYYY')}
          size="sm"
          style={{
            color: Theme.colors.$gray600,
            margin: '10px 0 5px',
            fontStyle: 'italic'
          }}
        />
        <Title text={props.title} size="lg" weight="semibold" />
        <DescParagraph>{props.desc}</DescParagraph>
        <DescAuthor>{props.author}</DescAuthor>
      </RightSection>
    </DescContainer>
  )
}
