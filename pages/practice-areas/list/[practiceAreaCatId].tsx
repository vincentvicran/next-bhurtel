import React from 'react'
import {GetServerSideProps} from 'next'

import {CompWrapper} from 'common/compWrapper'
import {ListComp} from 'components/listComp'
import {NoResultFound} from 'components/noResultsFound'

import {commonDescriptionServices} from 'redux/commonDescription/commonDescription.service'

const PracticeAreas = ({
  practiceAreas
}: {
  practiceAreas: Api.PaginatedCommonDescriptionIndividual[]
}) => {
  console.log('practice-areas: ', practiceAreas)
  return (
    <CompWrapper>
      {practiceAreas ? (
        <ListComp
          articleList={practiceAreas}
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
      Number(context.params?.practiceAreaId as string),
      {}
    )

  return {
    props: {practiceArea: practiceArea.rows} // will be passed to the page component as props
  }
}

export default PracticeAreas
