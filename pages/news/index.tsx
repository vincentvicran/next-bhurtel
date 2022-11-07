import styled from 'styled-components'

import Theme from 'theme'
import {Button} from 'common/button'
import {HStack} from 'common/stack'

import {DescriptionCard} from 'components/descriptionCard'
import {CompWrapper} from 'common/compWrapper'
import {newsServices} from 'redux/news/news.service'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

const NewsContainer = styled.div`
  /* padding: 40px; */
  padding: ${Theme.space.$10} 0;
`

const NewsBottomContainer = styled.div`
  margin-top: ${Theme.space.$10};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${Theme.space.$10};
`

function News({news: fetchedNews}: {news: Api.AllCommonDescription[`rows`]}) {
  return (
    <CompWrapper>
      <NewsContainer>
        {fetchedNews &&
          fetchedNews.map((el, id) => {
            if (id === 0)
              return (
                <DescriptionCard
                  key={id.toString()}
                  isHorizontal={true}
                  author={el.user_details.email}
                  date={el.description_details.posted_at}
                  desc={el.description_details.main_description}
                  title={el.description_details.title}
                  imgUrl={el.description_details.thumbnail as string}
                />
              )
          })}

        <NewsBottomContainer>
          {fetchedNews &&
            fetchedNews.map((el, id) => {
              if (id === 0) {
                return null
              }
              return (
                <DescriptionCard
                  key={id.toString()}
                  truncateSize={170}
                  truncateDesc={true}
                  author={el.user_details.email}
                  date={el.description_details.posted_at}
                  desc={el.description_details.main_description}
                  title={el.description_details.title}
                  imgUrl={el.description_details.thumbnail as string}
                  isHorizontal={false}
                />
              )
            })}
        </NewsBottomContainer>

        <HStack justify={'center'} style={{marginTop: 40}}>
          <Button title="LOAD MORE" color="primary" />
        </HStack>
      </NewsContainer>
    </CompWrapper>
  )
}

export async function getServerSideProps() {
  const newsCategory = await newsServices.getNewsCategories()

  const cmnDescription =
    await commonDescriptionServices.getCommonDescriptionByCategoryId(
      newsCategory.rows[0].category_details.id,
      {}
    )

  return {
    props: {news: cmnDescription.rows} // will be passed to the page component as props
  }
}

export default News
