import styled from 'styled-components'

import Theme from 'theme'
import {Button} from 'common/button'
import {HStack} from 'common/stack'

import {DescriptionCard} from 'components/descriptionCard'
import {modifyArrayPosition} from 'helpers/newsPage.helper'
import {CompWrapper} from 'common/compWrapper'
import accident from '../../assets/images/accident.jpg'

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

function News() {
  const news = modifyArrayPosition(data)

  return (
    <CompWrapper>
      <NewsContainer>
        {news.initialData && (
          <DescriptionCard isHorizontal={true} {...news.initialData} />
        )}

        <NewsBottomContainer>
          {news.data &&
            news.data.map((el, id) => {
              return (
                <a key={id} href={`/news/${id}`} style={{color: 'inherit'}}>
                  <DescriptionCard
                    truncateSize={170}
                    truncateDesc={true}
                    {...el}
                    isHorizontal={false}
                  />
                </a>
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

const data = [
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl: accident
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl: accident
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl: accident
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl: accident
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl: accident
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl: accident
  }
]

export default News
