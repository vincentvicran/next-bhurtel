import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import Image from 'next/image'
import Theme from 'theme'
import {
  ImgContainer,
  ListCardContainer,
  ListCardDescContainer,
  ListCompContainer,
  ReadMoreBtn
} from './listComp.styles'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import Link from 'next/link'
import {TitleContainer} from 'components/titleContainer'
import {getImageUrl} from 'helpers/getUrl'
import moment from 'moment'

export function ListComp({
  articleList,
  title,
  link
}: {
  articleList: Api.PaginatedCommonDescriptionIndividual[]
  title: string
  link: string
}) {
  return (
    <ListCompContainer>
      {/* TITLE */}
      <TitleContainer title={title} />

      {/* LISTS */}
      {articleList?.map((article) => {
        return (
          <ListCard
            key={article.description_details.id.toString()}
            article={article}
            link={link}
          />
        )
      })}
    </ListCompContainer>
  )
}

function ListCard({
  article,
  link
}: {
  article: Api.PaginatedCommonDescriptionIndividual
  link: string
}) {
  return (
    <ListCardContainer>
      {/* IMAGE SECTION */}
      <ImgContainer>
        <Image
          src={getImageUrl(
            'commonDescription',
            article.description_details.thumbnail ?? ''
          )}
          alt="list"
          layout="fill"
          objectFit="cover"
        />
      </ImgContainer>

      {/* DESCRIPTION SECTION */}
      <ListCardDescContainer>
        <Title
          text={moment(article.description_details.posted_at).format(
            'MMM DD, YYYY'
          )}
          size="sm"
          weight="normal"
          style={{color: Theme.colors.$gray400, marginBottom: 5}}
        />
        <Title
          text={article.description_details.title}
          size="md"
          weight="bold"
          style={{marginBottom: 10}}
        />
        <Paragraph
          dangerouslySetInnerHTML={{
            __html: article.description_details.main_description
          }}
          color="light"
        />

        <Link
          href={`${link}/article?description=${article.description_details.slug}`}
        >
          <ReadMoreBtn>
            <Title
              text="Read More"
              size="sm"
              style={{color: Theme.colors.$gray700}}
            />
            <HiOutlineArrowLongRight />
          </ReadMoreBtn>
        </Link>
      </ListCardDescContainer>
    </ListCardContainer>
  )
}
