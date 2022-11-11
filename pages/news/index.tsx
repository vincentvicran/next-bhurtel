import styled from 'styled-components'

import Theme from 'theme'
import {Button} from 'common/button'
import {HStack} from 'common/stack'

import {DescriptionCard} from 'components/descriptionCard'
import {CompWrapper} from 'common/compWrapper'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {NoResultFound} from 'components/noResultsFound'
import {GetServerSideProps} from 'next'
import {useRouter} from 'next/router'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'
import {TitleContainer} from 'components/titleContainer'

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
  category
}: {
  news: Api.AllCommonDescription[`rows`]
  category: string
}) {
  const router = useRouter()
  const newsClickedHandler = (data: any) => {
    console.log(data)
    router.push({
      pathname: `news/article/${data.description_details.id}`,
      query: {}
    })
  }

  return (
    <CompWrapper>
      <div style={{marginTop: 50}}>
        <TitleContainer title={category} size="xl" />
      </div>
      <NewsContainer>
        {!fetchedNews || fetchedNews.length === 0 ? <NoResultFound /> : null}
        {fetchedNews &&
          fetchedNews.map((el, id) => {
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
                  />
                </div>
              )
          })}

        <NewsBottomContainer>
          {fetchedNews &&
            fetchedNews.map((el, id) => {
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
                  />
                </div>
              )
            })}
        </NewsBottomContainer>
        {fetchedNews && fetchedNews.length !== 0 && (
          <HStack justify={'center'} style={{marginTop: 40}}>
            <Button title="LOAD MORE" color="primary" />
          </HStack>
        )}
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
      category: category.category_details.title
    } // will be passed to the page component as props
  }
}

export default News
