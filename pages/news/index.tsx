import styled from 'styled-components'

import Theme from 'theme'

import {DescriptionCard} from 'components/descriptionCard'
import {CompWrapper} from 'common/compWrapper'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {NoResultFound} from 'components/noResultsFound'
import {GetServerSideProps} from 'next'
import {useRouter} from 'next/router'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'
import {TitleContainer} from 'components/titleContainer'
import {useMedia} from 'hooks'
import {HStack} from 'common/stack'
import {useEffect, useState} from 'react'
import {Paginate} from 'components/paginate/paginate.component'

const NewsContainer = styled.div`
  /* padding: 40px; */
  padding: ${Theme.space.$3} 0 ${Theme.space.$10};
`

const NewsBottomContainer = styled.div`
  margin-top: ${Theme.space.$10};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${Theme.space.$10};
`

function News({
  news: fetchedNews,
  category,
  newsTotal
}: {
  news: Api.AllCommonDescription[`rows`]
  category: string
  newsTotal: number
}) {
  const [allNews, setAllNews] = useState(fetchedNews)
  const router = useRouter()
  const media = useMedia()
  const newsClickedHandler = (data: any) => {
    router.push({
      pathname: `news/article/${data.description_details.id}`,
      query: {}
    })
  }

  useEffect(() => {
    ;(async () => {
      try {
        const cmnDescription =
          await commonDescriptionServices.getCommonDescriptionByCategoryId(
            Number(router.query.id as string),
            {
              page: Number(router.query.page ?? 1),
              limit: Number(process.env.NEXT_PUBLIC_LIMIT)
            }
          )
        setAllNews(cmnDescription.rows)
      } catch (err) {}
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.page])

  return (
    <CompWrapper>
      <div style={{marginTop: 50}}>
        <TitleContainer title={category} size="xl" />
      </div>
      <NewsContainer>
        {!allNews || allNews.length === 0 ? <NoResultFound /> : null}
        {media.md &&
          allNews &&
          allNews.map((el, id) => {
            if (id === 0)
              return (
                <div key={id} onClick={() => newsClickedHandler(el)}>
                  <DescriptionCard
                    key={id.toString()}
                    isHorizontal={true}
                    author={el.user_details.email}
                    date={el.description_details.posted_at}
                    desc={el.description_details.main_description}
                    title={el.description_details.title}
                    imgUrl={el.description_details.thumbnail as string}
                    truncateSize={media.lg ? undefined : 6}
                  />
                </div>
              )
          })}

        <NewsBottomContainer>
          {allNews &&
            allNews.length !== 1 &&
            allNews.map((el, id) => {
              if (id === 0) {
                return
              }
              return (
                <div key={id} onClick={() => newsClickedHandler(el)}>
                  <DescriptionCard
                    // truncateSize={170}
                    // truncateDesc={true}
                    author={el.user_details.email}
                    date={el.description_details.posted_at}
                    desc={el.description_details.main_description}
                    title={el.description_details.title}
                    imgUrl={el.description_details.thumbnail as string}
                    isHorizontal={false}
                    truncateSize={4}
                  />
                </div>
              )
            })}
        </NewsBottomContainer>
        <HStack justify={'center'} style={{marginTop: 40}}>
          <Paginate total={newsTotal} />
        </HStack>
      </NewsContainer>
    </CompWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = await commonCategoryServices.getCommonCategoryById(
    Number(context.query.id as string)
  )
  const cmnDescription =
    await commonDescriptionServices.getCommonDescriptionByCategoryId(
      Number(context.query.id as string),
      {}
    )

  return {
    props: {
      news: cmnDescription.rows,
      category: category.category_details.title,
      newsTotal: cmnDescription.total
    } // will be passed to the page component as props
  }
}

export default News
