import styled from 'styled-components'
import Image from 'next/image'

import {useMedia} from 'hooks'
import Theme from 'theme'

import {Paragraph} from 'components/Paragraph'
import {Title} from 'components/title'
import {CompWrapper} from 'common/compWrapper'
import {Youtube} from 'common/youtube'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'
import {GetServerSideProps} from 'next'
import moment from 'moment'
import {getImageUrl} from 'helpers/getUrl'

const NewsContainer = styled.div`
  padding: ${Theme.space.$10} 0;
`
const ImgContainer = styled.div`
  position: relative;
  min-height: 400px;
  width: 60vw;
`

// DESCRIPTION IN details PROPS WILL COME FROM
// BACKEND TEXTEDITOR SO CURRENTLY DUMMY DATA IS ADDED
function News({
  news
}: {
  news: {
    description_details: Api.CommonDescription
    category_details: Api.CommonCategory
    user_details: Api.User
  }
}) {
  const media = useMedia()

  return (
    <CompWrapper>
      <NewsContainer>
        <Paragraph
          color="light"
          style={{fontStyle: 'italic', marginBottom: 10}}
        >
          {moment(news.description_details.posted_at).format(`DD MMM, YYYY`)}
        </Paragraph>
        <Title
          text={news.description_details.title}
          size={media.sm ? 'xl' : 'lg'}
          weight="bold"
          style={{marginBottom: media.sm ? 40 : 20}}
        />

        <Paragraph color="dark" style={{marginBottom: 40}}>
          {news.description_details.short_description}
        </Paragraph>

        <ImgContainer>
          <Image
            alt="accident"
            src={getImageUrl(
              `commonDescription`,
              news.description_details.thumbnail as string
            )}
            layout={`fill`}
          />
        </ImgContainer>
        <Paragraph color="dark" style={{margin: '40px 0px'}}>
          {news.description_details.main_description}
        </Paragraph>

        {/* YOUTUBE COMPONENT */}
        <Youtube />
      </NewsContainer>
    </CompWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await commonDescriptionServices.getCommonDescriptionById(
    Number(context?.params?.newsId as string)
  )

  return {
    props: {news: response} // will be passed to the page component as props
  }
}

export default News
