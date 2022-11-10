import {GetServerSideProps} from 'next'

import {CompWrapper} from 'common/compWrapper'
import {Description} from 'components/description'
import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

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
  return (
    <CompWrapper>
      <Description article={news.description_details} />
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
