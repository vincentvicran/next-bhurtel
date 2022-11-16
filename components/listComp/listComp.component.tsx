import {useEffect, useState} from 'react'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'
import {useRouter} from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'

import {HStack} from 'common/stack'
import {Paginate} from 'components/paginate/paginate.component'
import {NoResultFound} from 'components/noResultsFound'
import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {TitleContainer} from 'components/titleContainer'
import {getImageUrl} from 'helpers/getUrl'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {getListCompLink, MenuType} from 'helpers/getNavLink.helper'
import articlePlaceholder from 'assets/images/article.jpg'
import Theme from 'theme'
import {useMedia} from 'hooks'

import {
  ImgContainer,
  ListCardContainer,
  ListCardDescContainer,
  ListCompContainer,
  ReadMoreBtn
} from './listComp.styles'

export function ListComp({
  articleList,
  title,
  link,
  total,
  disablePagination
}: {
  articleList: Api.PaginatedCommonDescriptionIndividual[]
  title?: string
  link?: string
  total?: number
  disablePagination?: boolean
}) {
  const router = useRouter()

  const [articles, setArticles] =
    useState<Api.PaginatedCommonDescriptionIndividual[]>(articleList)

  useEffect(() => {
    articleList && setArticles(articleList)
  }, [articleList])

  useEffect(() => {
    ;(async () => {
      try {
        const personalInjury =
          await commonDescriptionServices.getCommonDescriptionByCategoryId(
            Number(
              (router.query?.personalInjuryCatId ??
                router.query?.practiceAreaCatId) as string
            ),
            {page: Number(router.query.page ?? 1)}
          )
        setArticles(personalInjury.rows)
      } catch (err) {}
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.page])
  return (
    <ListCompContainer>
      {/* TITLE */}
      {title && <TitleContainer title={title} />}

      {/* LISTS */}
      {articles && articles.length > 0 ? (
        articles?.map((article) => {
          return (
            <ListCard
              key={article.description_details.id.toString()}
              article={article}
              link={
                link ??
                getListCompLink(
                  article.category_details.type as MenuType,
                  article.description_details.id,
                  article.description_details.slug
                )
              }
            />
          )
        })
      ) : (
        <NoResultFound />
      )}

      {!disablePagination && articles && articles.length > 0 && (
        <HStack justify={'center'} style={{marginTop: 40}}>
          <Paginate total={total ?? 0} />
        </HStack>
      )}
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
  const media = useMedia()
  return (
    <ListCardContainer
      style={{
        flexDirection: !media.md ? 'column' : 'row'
      }}
    >
      {/* IMAGE SECTION */}
      <ImgContainer
        style={
          !media.md
            ? {
                height: 160,
                width: '100%'
              }
            : {
                flex: 1
              }
        }
      >
        <Image
          src={
            article.description_details.thumbnail
              ? getImageUrl(
                  'commonDescription',
                  article.description_details.thumbnail
                )
              : articlePlaceholder.src
          }
          alt="list"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={articlePlaceholder.src}
        />
      </ImgContainer>

      {/* DESCRIPTION SECTION */}
      <ListCardDescContainer
        style={
          !media.md
            ? {}
            : {
                flex: 2
              }
        }
      >
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
            __html:
              article.description_details.short_description ??
              article.description_details.main_description
          }}
          color="light"
          style={{
            height: 100,
            overflow: 'hidden'
          }}
        />

        <Link
          // href={`${link}/article/${article.category_details.id}?description=${article.description_details.slug}`}
          href={link}
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
