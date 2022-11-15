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
} from './descriptionCard.styles'
import {StaticImageData} from 'next/image'
import {getImageUrl} from 'helpers/getUrl'
import articlePlaceholder from 'assets/images/personalInjuryPlaceholder.jpg'

interface DescProps {
  imgUrl?: string | StaticImageData
  title: string
  desc: string
  author?: string
  date: Date
  isHorizontal?: boolean
  truncateSize?: number
}
export function DescriptionCard(props: DescProps) {
  return (
    <DescContainer
      isHorizontal={props.isHorizontal ? props.isHorizontal : false}
    >
      <ImgContainer style={{flex: props.isHorizontal ? 1.2 : 1}}>
        <DescImg
          src={
            props.imgUrl
              ? getImageUrl('commonDescription', props.imgUrl as string)
              : articlePlaceholder.src
          }
          alt="car"
          objectFit="cover"
          layout="fill"
        />
      </ImgContainer>
      <RightSection style={{flex: props.isHorizontal ? 1.5 : 1}}>
        <Title
          text={moment(props.date).format('DD MMM, YYYY')}
          size="sm"
          style={{
            color: Theme.colors.$gray600,
            margin: '10px 0 5px',
            fontStyle: 'italic',
            display: 'block'
          }}
        />
        <Title text={props.title} size="md" weight="semibold" />
        <DescParagraph
          dangerouslySetInnerHTML={{
            __html: props.desc
          }}
          truncateSize={props.truncateSize}
        ></DescParagraph>
        <DescAuthor>{props.author}</DescAuthor>
      </RightSection>
    </DescContainer>
  )
}
