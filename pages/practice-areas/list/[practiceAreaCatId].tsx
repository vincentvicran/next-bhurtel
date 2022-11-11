import React from 'react'
import {GetServerSideProps} from 'next'

import {CompWrapper} from 'common/compWrapper'
import {ListComp} from 'components/listComp'
import {NoResultFound} from 'components/noResultsFound'

import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

const PracticeAreas = ({
  practiceArea
}: {
  practiceArea: Api.PaginatedCommonDescriptionIndividual[]
}) => {
  console.log('practice-area: ', practiceArea)
  return (
    <CompWrapper>
      {practiceArea ? (
        <ListComp
          articleList={practiceArea}
          title={'Title'}
          link={'/practice-areas'}
        />
      ) : (
        <NoResultFound />
      )}
    </CompWrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const newsCategory = await newsServices.getNewsCategories()

  const practiceArea =
    await commonDescriptionServices.getCommonDescriptionByCategoryId(
      Number(context.params?.practiceAreaCatId as string),
      {}
    )

  console.log('888888888888888888888888888: ', practiceArea)

  return {
    props: {practiceArea: practiceArea.rows} // will be passed to the page component as props
  }
}

export default PracticeAreas
