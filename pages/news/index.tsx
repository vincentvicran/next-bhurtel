import {Button} from 'common/button'
import {HStack} from 'common/stack'
import {DescriptionCard} from 'components/descriptionCard'
import {modifyArrayPosition} from 'helpers/newsPage.helper'
import styled from 'styled-components'
import Theme from 'theme'

const NewsContainer = styled.div`
  padding: 40px;
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
    <NewsContainer>
      {news.initialData && (
        <DescriptionCard isHorizontal={true} {...news.initialData} />
      )}

      <NewsBottomContainer>
        {news.data &&
          news.data.map((el, id) => {
            return <DescriptionCard key={id} {...el} isHorizontal={false} />
          })}
      </NewsBottomContainer>

      <HStack justify={'center'} style={{marginTop: 40}}>
        <Button title="LOAD MORE" color="primary" />
      </HStack>
    </NewsContainer>
  )
}

const data = [
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl:
      'https://m.economictimes.com/thumb/msid-72127445,width-1200,height-900,resizemode-4,imgsize-293587/road-accident.jpg'
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl:
      'https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2022/10/13/dw-causeway-accident2-221013.jpg?VersionId=6Mz4sQyTqHuhGafoTYikYAuI8jZqLgrK'
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl:
      'https://assets-cdn.kathmandupost.com/uploads/source/news/2022/news/FO7mO3CagAQshz2-1648473958.jpg'
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Car_Crash_7-1-18_2245_%2842450608354%29.jpg/1200px-Car_Crash_7-1-18_2245_%2842450608354%29.jpg'
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'binay6014',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl:
      'https://m.economictimes.com/thumb/msid-72127445,width-1200,height-900,resizemode-4,imgsize-293587/road-accident.jpg'
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'mosh smith',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl:
      'https://www.johnfoy.com/wp-content/uploads/2019/02/faqs-what-happens-to-your-body-in-a-car-crash-2.jpg'
  },
  {
    title: 'What are the major Construction Accident reports in NYC?',
    author: 'john478',
    date: new Date(),
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim rhoncus aenean tempus mauris nibhLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa eu, aliquam gravida quis. Convallis urna amet aenean mi habitant a, non eu. A elementum leo ultrices morbi malesuada. Eget enim Convallis urna amet aenean mi habitant a, non eu...',
    imgUrl: 'https://www.salvilaw.com/wp-content/uploads/2018/11/types.jpg'
  }
]

export default News
